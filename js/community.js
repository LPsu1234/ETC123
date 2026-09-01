/**
 * 易通中国 EasyToChina (ETC) - Community & Review Module
 *
 * 社区内容双重审核：
 *   第一道 AI 初审 —— 涉黄 / 涉毒 / 涉赌 / 涉政 关键词命中 → 直接下架，不可放行
 *   第二道 人工复审 —— AI 通过内容由管理员逐条复核后发布
 * 双语字幕：中文帖 → 下方英文字幕；英文帖 → 下方中文字幕（演示版为模拟翻译）
 *
 * 依赖：Auth（auth.js 需先加载）
 */
const Community = {
    reviewKey: 'easytochina_review',
    bannedMap: [
        { tag: '涉黄', keys: ['porn', 'nsfw', '色情', '裸', '性爱', 'av女', '艳照', 'sexy video'] },
        { tag: '涉毒', keys: ['drug', '毒品', '吸毒', '冰毒', '大麻', '海洛因', '摇头丸', '麻黄素'] },
        { tag: '涉赌', keys: ['casino', '赌博', '博彩', '下注', '赌场', '老虎机', '百家乐', '时时彩'] },
        { tag: '涉政', keys: ['politics', '政治敏感', '反动', '颠覆', '示威游行', '分裂'] }
    ],
    midRiskWords: ['偏方', '野泳', '打架', '无证', '灵异', '坟'],

    /* ---------- 持久化 ---------- */
    getReviewStore() {
        try {
            return JSON.parse(localStorage.getItem(this.reviewKey)) || { items: [] };
        } catch { return { items: [] }; }
    },
    saveReviewStore(store) { localStorage.setItem(this.reviewKey, JSON.stringify(store)); },

    /* ---------- AI 初审（模拟） ---------- */
    aiReview(text) {
        const t = (text || '').toLowerCase();
        const hits = this.bannedMap.filter(b => b.keys.some(k => t.includes(k))).map(b => b.tag);
        if (hits.length) {
            return {
                pass: false, risk: 'high',
                note: `AI 初审命中违禁类别：${hits.join('、')}。依据《ETC 内容安全规范》自动拦截下架，已记录证据链并同步人工复核留档，该内容不会进入公开展示，也不允许重新上传。`
            };
        }
        const risky = this.midRiskWords.find(w => t.includes(w));
        if (risky) {
            return {
                pass: true, risk: 'mid',
                note: `AI 初审通过，但检测到潜在风险词「${risky}」，已标记为重点复审项，请人工逐条复核。`
            };
        }
        return {
            pass: true, risk: 'low',
            note: 'AI 初审通过：未检出涉黄/涉毒/涉赌/涉政内容，自动匹配双语字幕，转人工复审。'
        };
    },

    /* ---------- 提交审核（AI → 人工） ---------- */
    submitForReview(item) {
        item.status = 'ai';           // 初审中
        item.aiNote = 'AI 初审中…';
        const store = this.getReviewStore();
        store.items.unshift(item);
        this.saveReviewStore(store);
        App.showToast('🤖 已提交，AI 初审中…');

        setTimeout(() => {
            const s = this.getReviewStore();
            const it = s.items.find(x => x.id === item.id);
            if (!it || it.status !== 'ai') return;
            const r = this.aiReview(it.text + ' ' + (it.cn || ''));
            it.aiNote = r.note;
            it.aiRisk = r.risk;
            if (r.pass) {
                it.status = 'human';   // 待人工复审
                this.saveReviewStore(s);
                App.showToast('✅ AI 初审通过，字幕已生成，已转人工复审');
            } else {
                it.status = 'blocked'; // AI 直接拦截下架
                it.blockReason = r.note;
                this.saveReviewStore(s);
                App.showToast('⛔ AI 拦截：命中违禁内容，已下架');
            }
            App.refreshCurrentView && App.refreshCurrentView();
        }, 1600);
    },

    /* ---------- 人工复审 ---------- */
    humanReview(id, approve) {
        const store = this.getReviewStore();
        const it = store.items.find(x => x.id === id);
        if (!it || it.status !== 'human') return;
        if (approve) {
            it.status = 'published';
            it.time = 'just now';
            it.likes = 0;
            App.showToast('✅ 人工复审通过，内容已发布');
        } else {
            it.status = 'blocked';
            it.blockReason = '人工复审未通过，已下架';
            App.showToast('⛔ 人工复审驳回，已下架');
        }
        this.saveReviewStore(store);
        App.refreshCurrentView && App.refreshCurrentView();
    },

    /* ---------- 内容汇总 ---------- */
    // 预置帖子 → 对应城市实景图（优先第一张），无图城市保持 emoji 占位
    seedPhotoFor(cityEn) {
        const map = {
            Shanghai: 'shanghai', Chengdu: 'chengdu', Chongqing: 'chongqing', Harbin: 'harbin',
            "Xi'an": 'xian', Shenzhen: 'shenzhen', Changsha: 'changsha', Hangzhou: 'hangzhou',
            Beijing: 'beijing', Guangzhou: 'guangzhou', Zibo: null, Sanya: null
        };
        const id = map[cityEn];
        if (!id || typeof CITY_PHOTOS === 'undefined' || !CITY_PHOTOS[id] || !CITY_PHOTOS[id].length) return null;
        return CITY_PHOTOS[id][0].src;
    },
    allPosts() {
        const seeded = CHINA_FEED.map(f => ({ ...f, status: 'published', lang: f.lang || 'zh', kind: f.kind || 'home', authorFlag: f.authorFlag || '🇨🇳', photo: this.seedPhotoFor(f.cityEn) }));
        const user = this.getReviewStore().items;
        return [...user, ...seeded];
    },

    // 按页签取已发布内容：home=家乡分享(China Today)，talk=话题讨论，ask=来华求助
    publishedFeed(kind) {
        const all = this.allPosts();
        if (kind === 'talkask') return all.filter(p => p.status === 'published' && (p.kind === 'talk' || p.kind === 'ask'));
        if (kind === 'home') return all.filter(p => p.status === 'published' && p.kind === 'home');
        return all.filter(p => p.status === 'published');
    },

    // 我发布的内容（含审核中/被拦截）
    myPosts(name) {
        return this.getReviewStore().items.filter(p => p.author === name);
    },

    /* ---------- 审核后台数据 ---------- */
    reviewQueue() { return this.getReviewStore().items.filter(p => p.status === 'human'); },
    blockedList() { return this.getReviewStore().items.filter(p => p.status === 'blocked'); },
    aiPending() { return this.getReviewStore().items.filter(p => p.status === 'ai'); },

    /* ---------- 双语字幕（模拟翻译，正式版接翻译引擎） ---------- */
    zhToEn(zh) {
        const t = (zh || '').trim();
        return t ? `[AI subtitle] ${t.slice(0, 48)}${t.length > 48 ? '…' : ''} (English subtitle preview)` : '';
    },
    enToZh(en) {
        const t = (en || '').trim();
        return t ? `[AI 字幕] ${t.slice(0, 48)}${t.length > 48 ? '…' : ''}（中文字幕预览）` : '';
    },

    // 返回 {label, content} 用于渲染双语字幕（对照语言随查看者界面语言变化）
    subtitleOf(item) {
        const viewerLang = (typeof I18n !== 'undefined') ? I18n.getLang() : 'en';
        // 字幕目标语言：查看者若是中文 → 配英文；否则配查看者语言（演示环境内容为英文/中文模拟）
        const zhPost = item.lang !== 'en';
        let label;
        if (viewerLang === 'zh') {
            label = zhPost ? '英文字幕 · ENGLISH SUBTITLE' : '中文字幕 · CHINESE SUBTITLE';
        } else {
            const langLabel = { en: 'English', ru: 'Русский', ar: 'العربية', ko: '한국어' }[viewerLang] || 'English';
            label = zhPost ? `SUBTITLE · ${langLabel} (auto)` : 'SUBTITLE · 中文 (auto)';
        }
        if (!zhPost) {
            return { label, content: item.cn || this.enToZh(item.en) };
        }
        return { label, content: item.en || this.zhToEn(item.cn) };
    }
};
