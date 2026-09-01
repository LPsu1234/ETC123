/**
 * 易通中国 EasyToChina (ETC) - Auth Module
 *
 * 本地注册 / 登录（纯前端演示，数据存 localStorage，无真实后端）
 * 三种身份：
 *   cn    国内用户  — 分享家乡特色文化，吸引海外粉丝
 *   intl  海外用户  — 发起中国话题讨论 / 来华旅游·商务求助
 *   admin 平台管理员 — 后台人工复审（与 AI 初审构成双重审核）
 *
 * 依赖：无（最先加载）
 */
const Auth = {
    usersKey: 'easytochina_users',
    sessionKey: 'easytochina_session',
    currentUser: null,

    /* ---------- 数据存取 ---------- */
    getUsers() {
        try { return JSON.parse(localStorage.getItem(this.usersKey)) || []; }
        catch { return []; }
    },
    saveUsers(users) { localStorage.setItem(this.usersKey, JSON.stringify(users)); },

    getSession() {
        try { return JSON.parse(localStorage.getItem(this.sessionKey)) || null; }
        catch { return null; }
    },
    saveSession(user) { localStorage.setItem(this.sessionKey, JSON.stringify(user)); },

    /* ---------- 初始化 ---------- */
    init() {
        this.currentUser = this.getSession();
        this.renderTopbar();
    },

    /* ---------- 登录 / 注册（测试页不做密码校验） ---------- */
    login(name, role) {
        const users = this.getUsers();
        let user = users.find(u => u.name === name);
        if (!user) {
            user = { name, role, joined: Date.now() };
            users.push(user);
            this.saveUsers(users);
        } else {
            user.role = role; // 允许切换身份
            this.saveUsers(users);
        }
        this.currentUser = user;
        this.saveSession(user);
        this.renderTopbar();
    },

    logout() {
        this.currentUser = null;
        localStorage.removeItem(this.sessionKey);
        this.renderTopbar();
        if (App) { App.closeModal(); App.closeUploadModal(); }
        // 若停留在需要权限的页面则回首页
        if (App && (App.exploreTab === 'review')) {
            App.switchExploreTab('cities');
        }
        if (App && App.currentPage === 'home') App.renderHomePage && App.navigate('home');
    },

    // 登录后如果上传弹窗正开着，刷新为登录后的真实表单
    _refreshUploadIfOpen() {
        const uploadModal = document.getElementById('upload-modal');
        if (uploadModal && uploadModal.classList.contains('show')) {
            App.closeUploadModal();
            setTimeout(() => App.openUploadModal(), 60);
        }
    },

    isAdmin() { return this.currentUser && this.currentUser.role === 'admin'; },
    isCn() { return this.currentUser && this.currentUser.role === 'cn'; },
    isIntl() { return this.currentUser && this.currentUser.role === 'intl'; },
    isLoggedIn() { return !!this.currentUser; },

    roleInfo(role) {
        const isZh = I18n.getLang() === 'zh';
        if (isZh) {
            return {
                cn:    { flag: '🇨🇳', label: '国内用户', desc: '分享家乡特色与文化' },
                intl:  { flag: '🌍', label: '海外用户', desc: '话题讨论 / 来华求助' },
                admin: { flag: '🛡️', label: '管理员',   desc: '内容人工复审后台' }
            }[role] || { flag: '👤', label: '用户', desc: '' };
        }
        return {
            cn:    { flag: '🌏', label: I18n.t('roleCn'),   desc: I18n.t('roleCnDesc').replace(/<br>/g, ' ') },
            intl:  { flag: '🌍', label: I18n.t('roleIntl'), desc: I18n.t('roleIntlDesc').replace(/<br>/g, ' ') },
            admin: { flag: '🛡️', label: I18n.t('roleAdmin'),desc: I18n.t('roleAdminDesc').replace(/<br>/g, ' ') }
        }[role] || { flag: '👤', label: I18n.t('topbarUserRole'), desc: '' };
    },

    /* ---------- 顶栏用户区 ---------- */
    renderTopbar() {
        const el = document.getElementById('user-area');
        if (!el) return;
        const u = this.currentUser;
        if (!u) {
            el.innerHTML = `<button class="topbar-user-btn" onclick="Auth.openLoginModal()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                ${I18n.t('topbarLogin')}</button>`;
            return;
        }
        const r = this.roleInfo(u.role);
        el.innerHTML = `
            <div class="topbar-user">
                <span class="topbar-user-avatar">${r.flag}</span>
                <div class="topbar-user-info">
                    <span class="topbar-user-name">${esc(u.name)}</span>
                    <span class="topbar-user-role">${r.label}</span>
                </div>
                <button class="topbar-user-logout" onclick="Auth.logout()" title="${I18n.t('topbarLogoutTitle')}">✕</button>
            </div>`;
    },

    /* ---------- 登录弹窗 ---------- */
    // 语言 ↔ 角色联动：中文→国内用户（上传家乡）；其他语言→海外用户（发布需求求助）
    onLoginLangChange(lang) {
        I18n.setLang(lang);
        const role = lang === 'zh' ? 'cn' : 'intl';
        const radio = document.querySelector(`input[name="auth-role"][value="${role}"]`);
        if (radio) radio.checked = true;
        const hint = document.getElementById('auth-role-hint');
        if (hint) hint.textContent = I18n.t(role === 'cn' ? 'roleHintCn' : 'roleHintIntl');
    },

    openLoginModal() {
        const lang = I18n.getLang();
        const html = `
        <div class="auth-panel">
            <div class="auth-lang-row">
                <span class="auth-lang-label">${I18n.t('langLabel')}</span>
                ${I18n.htmlLangButtons(lang, 'Auth.onLoginLangChange')}
            </div>
            <div class="auth-title">${I18n.t('loginTitle')}</div>
            <div class="auth-sub">${I18n.t('loginSub')}</div>
            <div class="auth-role-hint" id="auth-role-hint">${I18n.t(lang === 'zh' ? 'roleHintCn' : 'roleHintIntl')}</div>
            <div class="auth-roles">
                <label class="auth-role">
                    <input type="radio" name="auth-role" value="cn" ${lang === 'zh' ? 'checked' : ''}>
                    <div class="auth-role-card"><span class="auth-role-flag">🇨🇳</span>
                        <b>${I18n.t('roleCn')}</b><small>${I18n.t('roleCnDesc')}</small></div>
                </label>
                <label class="auth-role">
                    <input type="radio" name="auth-role" value="intl" ${lang !== 'zh' ? 'checked' : ''}>
                    <div class="auth-role-card"><span class="auth-role-flag">🌍</span>
                        <b>${I18n.t('roleIntl')}</b><small>${I18n.t('roleIntlDesc')}</small></div>
                </label>
                <label class="auth-role">
                    <input type="radio" name="auth-role" value="admin">
                    <div class="auth-role-card"><span class="auth-role-flag">🛡️</span>
                        <b>${I18n.t('roleAdmin')}</b><small>${I18n.t('roleAdminDesc')}</small></div>
                </label>
            </div>
            <input type="text" id="auth-name" class="auth-input" placeholder="${esc(I18n.t('nicknamePlaceholder'))}" maxlength="20">
            <div class="auth-demo">
                <span>${I18n.t('quickDemo')}</span>
                <button class="auth-demo-btn" onclick="Auth.quickLogin('cn')">🇨🇳 ${I18n.t('roleCn')}</button>
                <button class="auth-demo-btn" onclick="Auth.quickLogin('intl')">🌍 ${I18n.t('roleIntl')}</button>
                <button class="auth-demo-btn" onclick="Auth.quickLogin('admin')">🛡️ ${I18n.t('roleAdmin')}</button>
            </div>
            <button class="auth-submit-btn" onclick="Auth.doLogin()">${I18n.t('enterBtn')}</button>
            <div class="auth-hint">${I18n.t('loginHint')}</div>
        </div>`;
        App.showModal(html);
    },

    doLogin() {
        const role = document.querySelector('input[name="auth-role"]:checked')?.value || 'cn';
        const name = (document.getElementById('auth-name').value || '').trim()
            || (['小煜', '阿山', '老李', 'Jack', 'Emma', 'Sofia'][Math.floor(Math.random() * 6)] + Math.floor(Math.random() * 100));
        this.login(name, role);
        App.closeModal();
        const r = this.roleInfo(role);
        App.showToast(`${r.flag} ${I18n.t(role === 'cn' ? 'toastWelcomeCn' : role === 'intl' ? 'toastWelcomeIntl' : 'toastWelcomeAdmin')}`);
        if (role === 'admin') App.switchExploreTab('review');
        else App.navigate('explore', 'feed');
        this._refreshUploadIfOpen();
    },

    quickLogin(role) {
        const names = { cn: '云南小煜', intl: 'Jack.Smith', admin: '平台管理员' };
        this.login(names[role] || '用户', role);
        App.closeModal();
        App.showToast((role === 'admin' ? '🛡️ ' : role === 'cn' ? '🇨🇳 ' : '🌍 ') + I18n.t(role === 'admin' ? 'toastWelcomeAdmin' : role === 'cn' ? 'toastWelcomeCn' : 'toastWelcomeIntl'));
        if (role === 'admin') App.switchExploreTab('review');
        else App.navigate('explore', 'feed');
        this._refreshUploadIfOpen();
    }
};

/* ---------- HTML 转义（防 XSS） ---------- */
function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
}
