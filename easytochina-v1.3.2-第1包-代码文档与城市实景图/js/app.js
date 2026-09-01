/**
 * 易通中国 EasyToChina (ETC) - Main App Logic
 *
 * A scenario-based Chinese learning app for foreigners.
 * Learn practical spoken Chinese through real-life scenarios.
 * Explore Chinese cities, culture & history. See today's China through local photos.
 */

const App = {
    currentPage: 'home',
    currentLesson: null,
    practiceQueue: [],
    practiceIndex: 0,
    exploreTab: 'cities',  // 'cities' | 'feed' | 'talk' | 'review'
    feedFilter: 'all',

    // ===== Navigation =====
    navigate(page, subTab) {
        this.currentPage = page;

        // Update nav
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Handle sub-tab for explore page
        if (page === 'explore' && subTab) {
            this.exploreTab = subTab;
        }

        // Render page
        const main = document.getElementById('main-content');
        switch (page) {
            case 'home': main.innerHTML = this.renderHome(); break;
            case 'scenarios': main.innerHTML = this.renderScenarios(); break;
            case 'explore': main.innerHTML = this.renderExplore(); break;
            case 'practice': main.innerHTML = this.renderPractice(); break;
            case 'me': main.innerHTML = this.renderMe(); break;
        }
    },

    // Switch sub-tab within Explore page (no full nav, just re-render content)
    switchExploreTab(tab) {
        this.exploreTab = tab;
        const main = document.getElementById('main-content');
        main.innerHTML = this.renderExplore();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // 重新渲染当前视图（审核状态变化后调用）
    refreshCurrentView() {
        if (this.currentPage === 'explore') {
            const main = document.getElementById('main-content');
            main.innerHTML = this.renderExplore();
        }
    },

    // 通用弹窗（登录 / 上传复用）
    showModal(html) {
        document.getElementById('modal-content').innerHTML = html;
        document.getElementById('sentence-modal').classList.add('show');
    },

    // ===== 顶栏全局语言切换 =====
    toggleLangMenu(ev) {
        ev && ev.stopPropagation();
        const menu = document.getElementById('lang-menu');
        if (!menu) return;
        if (menu.classList.contains('show')) { this.closeLangMenu(); return; }
        const cur = I18n.getLang();
        const langs = [
            { code: 'zh', label: '中文', name: 'Chinese · 中文' },
            { code: 'en', label: 'English', name: 'English · English' },
            { code: 'ru', label: 'Русский', name: 'Русский · Russian' },
            { code: 'ar', label: 'العربية', name: 'العربية · Arabic' },
            { code: 'ko', label: '한국어', name: '한국어 · Korean' }
        ];
        menu.innerHTML = langs.map(l =>
            `<button type="button" class="lang-menu-item ${l.code === cur ? 'active' : ''}" data-lang="${l.code}" ` +
            `onclick="App.chooseLang('${l.code}')"><span class="lang-menu-label">${esc(l.label)}</span>` +
            `<span class="lang-menu-check">${l.code === cur ? '✓' : ''}</span></button>`
        ).join('');
        menu.classList.add('show');
    },

    closeLangMenu() {
        const menu = document.getElementById('lang-menu');
        if (menu) menu.classList.remove('show');
    },

    chooseLang(code) {
        I18n.setLang(code);
        this.closeLangMenu();
    },

    // ===== Home Page =====
    renderHome() {
        const daily = this.getDailySentence();
        const totalSentences = SCENARIOS.reduce((sum, s) => sum + s.sentences.length, 0);
        const progress = Progress.getStats();
        
        return `
        <div class="page">
            <div class="hero">
                <div class="hero-title">易通中国 EasyToChina — Learn Chinese the way you'll actually use it</div>
                <div class="hero-subtitle">Scenario-based • Sentence-first • Real-life Mandarin<br>Explore ${CITY_FEATURES.length} fascinating cities while you learn.<br>No grammar drills. No character writing. Just speak.</div>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <div class="hero-stat-num">${SCENARIOS.length}</div>
                        <div class="hero-stat-label">Scenarios</div>
                    </div>
                    <div class="hero-stat">
                        <div class="hero-stat-num">${totalSentences}</div>
                        <div class="hero-stat-label">Sentences</div>
                    </div>
                    <div class="hero-stat">
                        <div class="hero-stat-num">${CITY_FEATURES.length}</div>
                        <div class="hero-stat-label">Cities</div>
                    </div>
                </div>
            </div>

            <div class="daily-sentence">
                <div class="daily-label">Sentence of the Day</div>
                <div class="daily-cn">${daily.cn}</div>
                <div class="daily-pinyin">${daily.pinyin}</div>
                <div class="daily-en">${daily.en}</div>
                ${daily.note ? `<div class="sentence-note">${daily.note}</div>` : ''}
                <div class="daily-actions">
                    <button class="btn-speak sentence-action-btn" onclick="App.speakSentence('${daily.cn}', this)" title="Listen">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                    </button>
                    <button class="btn-practice sentence-action-btn" onclick="App.openModal(${JSON.stringify(daily).replace(/"/g, '&quot;')})" title="Practice">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>
                    </button>
                </div>
            </div>

            <div class="section-title">${I18n.t('sectionQuickStart')}</div>
            <div class="category-grid six-grid">
                <div class="category-card" onclick="App.openScenario('airport')">
                    <div class="category-icon">🛬</div>
                    <div class="category-name">${I18n.t('qsFirst48')}</div>
                    <div class="category-desc">${I18n.t('qsFirst48Desc')}</div>
                    <div class="category-count">${I18n.t('startHere')}</div>
                </div>
                <div class="category-card" onclick="App.openScenario('restaurant')">
                    <div class="category-icon">🍜</div>
                    <div class="category-name">${I18n.t('qsFood')}</div>
                    <div class="category-desc">${I18n.t('qsFoodDesc')}</div>
                    <div class="category-count">12 sentences →</div>
                </div>
                <div class="category-card" onclick="App.openScenario('business-intro')">
                    <div class="category-icon">🤝</div>
                    <div class="category-name">${I18n.t('qsBusiness')}</div>
                    <div class="category-desc">${I18n.t('qsBusinessDesc')}</div>
                    <div class="category-count">${I18n.t('startHere')}</div>
                </div>
                <div class="category-card" onclick="App.navigate('explore')">
                    <div class="category-icon">🏮</div>
                    <div class="category-name">${I18n.t('qsExplore')}</div>
                    <div class="category-desc">${I18n.t('qsExploreDesc')}</div>
                    <div class="category-count">${I18n.t('explore')}</div>
                </div>
                <div class="category-card" onclick="App.openScenario('payment')">
                    <div class="category-icon">💰</div>
                    <div class="category-name">${I18n.t('qsPay')}</div>
                    <div class="category-desc">${I18n.t('qsPayDesc')}</div>
                    <div class="category-count">${I18n.t('essential')}</div>
                </div>
                <div class="category-card" onclick="App.openScenario('transport')">
                    <div class="category-icon">🚕</div>
                    <div class="category-name">${I18n.t('qsGettingAround')}</div>
                    <div class="category-desc">${I18n.t('qsGettingAroundDesc')}</div>
                    <div class="category-count">${I18n.t('essential')}</div>
                </div>
            </div>

            <div class="section-title">
                <span>${I18n.t('sectionWhy')}</span>
            </div>
            <div class="cultural-tip">
                <div class="cultural-tip-title">🚫 Not HSK. Not Confucius Institute.</div>
                <div class="cultural-tip-text">
                    <strong>HSK & Confucius Institute approach:</strong> Grammar rules → Character writing → Reading texts → Exam preparation. Academic, slow, and far from real life.<br><br>
                    <strong>Our approach:</strong> Listen to real sentences → Imitate native speech → Use them immediately → Practice with AI feedback. Practical, fast, and directly applicable.<br><br>
                    <strong>You will NOT learn:</strong> Stroke order, radical components, grammar terminology, classical literature.<br>
                    <strong>You WILL learn:</strong> How to order food, bargain at markets, give directions to taxi drivers, toast at business dinners, handle emergencies — everything you need to actually <em>live</em> in China.
                </div>
            </div>

            <div class="section-title">
                <span>${I18n.t('sectionAll')}</span>
                <a onclick="App.navigate('scenarios')" style="cursor:pointer">${I18n.t('viewAll')}</a>
            </div>
            ${SCENARIOS.slice(0, 4).map(s => this.renderScenarioCard(s)).join('')}

            <div class="section-title">
                <span>🌏 ETC Community · 中外互动社区</span>
            </div>
            <div class="community-banner">
                <div class="community-banner-title">${Auth.isLoggedIn() ? '欢迎回来，' + esc(Auth.currentUser.name) + '！' : I18n.t('communityTitle')}</div>
                <div class="community-banner-desc">
                    ${I18n.t('communityCnLine')}<br>
                    ${I18n.t('communityIntlLine')}
                </div>
                <div class="community-banner-btns">
                    ${Auth.isLoggedIn()
                        ? `<button class="btn btn-primary btn-sm" onclick="App.openUploadModal()">${I18n.t('btnPublish')}</button>
                           <button class="btn btn-outline btn-sm" onclick="App.navigate('explore','feed')">${I18n.t('btnViewFeed')}</button>`
                        : `<button class="btn btn-primary btn-sm" onclick="Auth.openLoginModal()">${I18n.t('btnLogin')}</button>
                           <button class="btn btn-outline btn-sm" onclick="Auth.quickLogin('intl')">${I18n.t('btnIntlTry')}</button>`}
                </div>
            </div>

            ${this.renderMyPostsSection()}
        </div>
        `;
    },

    // ===== Scenarios List Page =====
    renderScenarios(filter = 'all') {
        let scenarios = SCENARIOS;
        if (filter !== 'all') {
            scenarios = SCENARIOS.filter(s => s.category === filter);
        }

        const filters = [
            { id: 'all', name: 'All' },
            { id: 'survival', name: '🆘 Survival' },
            { id: 'daily', name: '🍜 Daily Life' },
            { id: 'business', name: '💼 Business' },
            { id: 'emergency', name: '🚨 Emergency' }
        ];

        return `
        <div class="page">
            <div class="section-title" style="margin-top:0">Learning Scenarios</div>
            <p style="font-size:14px;color:var(--text-muted);margin-bottom:16px">
                ${SCENARIOS.reduce((sum, s) => sum + s.sentences.length, 0)} practical sentences across ${SCENARIOS.length} real-life situations. Tap any scenario to start learning.
            </p>
            <div class="filter-bar">
                ${filters.map(f => `
                    <button class="filter-chip ${filter === f.id ? 'active' : ''}" 
                            onclick="App.renderScenariosPage('${f.id}')">${f.name}</button>
                `).join('')}
            </div>
            ${scenarios.map(s => this.renderScenarioCard(s)).join('')}
        </div>
        `;
    },

    renderScenariosPage(filter) {
        const main = document.getElementById('main-content');
        main.innerHTML = this.renderScenarios(filter);
    },

    renderScenarioCard(s) {
        const progress = Progress.getScenarioProgress(s.id);
        return `
        <div class="scenario-card" onclick="App.openScenario('${s.id}')">
            <div class="scenario-icon">${s.icon}</div>
            <div class="scenario-info">
                <div class="scenario-name">${s.name}</div>
                <div class="scenario-name-cn">${s.nameCn}</div>
                <div class="scenario-meta">
                    <span>${s.sentences.length} sentences</span>
                    <span class="scenario-difficulty">${'⭐'.repeat(s.difficulty)}</span>
                </div>
                ${progress > 0 ? `
                    <div class="scenario-progress-bar">
                        <div class="scenario-progress-fill" style="width:${progress}%"></div>
                    </div>
                ` : ''}
            </div>
        </div>
        `;
    },

    // ===== Lesson Detail Page =====
    openScenario(id) {
        const scenario = SCENARIOS.find(s => s.id === id);
        if (!scenario) return;
        this.currentLesson = scenario;
        
        const main = document.getElementById('main-content');
        main.innerHTML = this.renderLesson(scenario);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderLesson(s) {
        return `
        <div class="page">
            <button class="back-btn" onclick="App.navigate('scenarios')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Scenarios
            </button>
            
            <div class="lesson-header">
                <div class="lesson-icon">${s.icon}</div>
                <div class="lesson-title">${s.name}</div>
                <div class="lesson-title-cn">${s.nameCn}</div>
                <div class="lesson-meta">
                    <span>${s.sentences.length} sentences</span>
                    <span>${'⭐'.repeat(s.difficulty)}</span>
                    <span>${s.description}</span>
                </div>
            </div>

            ${s.culturalTip ? `
                <div class="cultural-tip">
                    <div class="cultural-tip-title">🏯 ${s.culturalTip.title}</div>
                    <div class="cultural-tip-text">${s.culturalTip.text}</div>
                </div>
            ` : ''}

            <div class="section-title" style="margin-top:20px">
                <span>Key Sentences</span>
                <span style="font-size:12px;color:var(--text-muted)">Tap 🔊 to listen · Tap 🎤 to practice</span>
            </div>

            ${s.sentences.map((sentence, i) => this.renderSentenceCard(sentence, i, s.id)).join('')}

            <button class="practice-cta" onclick="App.startPracticeSession('${s.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>
                Practice All Sentences
            </button>
        </div>
        `;
    },

    renderSentenceCard(sentence, index, scenarioId) {
        const isLearned = Progress.isSentenceLearned(scenarioId, index);
        const isBookmarked = Progress.isBookmarked(scenarioId, index);
        const sentenceData = JSON.stringify(sentence).replace(/"/g, '&quot;');
        
        return `
        <div class="sentence-card" id="sentence-${scenarioId}-${index}">
            <div class="sentence-header">
                <span class="sentence-number">${index + 1}</span>
                <div class="sentence-actions">
                    <button class="sentence-action-btn btn-speak" 
                            onclick="App.speakSentence('${sentence.cn}', this)" 
                            title="Listen (normal speed)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                    </button>
                    <button class="sentence-action-btn btn-speak" 
                            onclick="App.speakSentenceSlow('${sentence.cn}', this)" 
                            title="Listen (slow)" style="background:var(--secondary)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
                    </button>
                    <button class="sentence-action-btn btn-practice" 
                            onclick="App.openModal(${sentenceData})" 
                            title="Practice pronunciation">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>
                    </button>
                    <button class="sentence-action-btn btn-bookmark ${isBookmarked ? 'active' : ''}" 
                            onclick="App.toggleBookmark('${scenarioId}', ${index}, this)" 
                            title="Bookmark">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                </div>
            </div>
            <div class="sentence-cn">${sentence.cn}</div>
            <div class="sentence-pinyin">${sentence.pinyin}</div>
            <div class="sentence-en">${sentence.en}</div>
            ${sentence.note ? `<div class="sentence-note">${sentence.note}</div>` : ''}
        </div>
        `;
    },

    // ===== Speak (TTS) =====
    speakSentence(text, btn) {
        if (btn) btn.classList.add('playing');
        Speech.speak(text, () => {
            if (btn) btn.classList.remove('playing');
        });
    },

    speakSentenceSlow(text, btn) {
        if (btn) btn.classList.add('playing');
        Speech.speakSlow(text, () => {
            if (btn) btn.classList.remove('playing');
        });
    },

    // ===== Practice Modal =====
    openModal(sentence) {
        const modal = document.getElementById('sentence-modal');
        const content = document.getElementById('modal-content');
        
        content.innerHTML = `
            <div class="modal-sentence-cn">${sentence.cn}</div>
            <div class="modal-sentence-pinyin">${sentence.pinyin}</div>
            <div class="modal-sentence-en">${sentence.en}</div>
            
            <button class="modal-speak-btn" id="modal-speak-btn" onclick="App.modalSpeak('${sentence.cn}')">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            </button>
            <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-bottom:16px">Tap to listen, then repeat</p>
            
            <div class="modal-practice-area">
                <button class="modal-mic-btn" id="modal-mic-btn" onclick="App.modalPractice('${sentence.cn}')">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>
                </button>
                <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:8px" id="modal-mic-label">Tap to practice speaking</p>
                <div class="modal-result" id="modal-result"></div>
            </div>
            
            ${sentence.note ? `<div class="modal-note">${sentence.note}</div>` : ''}
        `;
        
        modal.classList.add('show');
    },

    modalSpeak(text) {
        const btn = document.getElementById('modal-speak-btn');
        btn.style.transform = 'scale(0.9)';
        Speech.speak(text, () => {
            btn.style.transform = '';
        });
    },

    modalPractice(targetText) {
        const micBtn = document.getElementById('modal-mic-btn');
        const label = document.getElementById('modal-mic-label');
        const result = document.getElementById('modal-result');

        if (!Speech.isRecognitionSupported()) {
            this.showToast('Speech recognition needs Chrome or Edge browser');
            return;
        }

        // Stop any TTS
        if (window.speechSynthesis) window.speechSynthesis.cancel();

        micBtn.classList.add('listening');
        label.textContent = 'Listening... speak now';

        Speech.startRecognition(
            (transcript, isFinal) => {
                if (isFinal) {
                    const comparison = Speech.compareSpeech(transcript, targetText);
                    micBtn.classList.remove('listening');
                    label.textContent = comparison.isCorrect ? 'Great job!' : 'Keep practicing';
                    
                    result.className = 'modal-result show ' + (comparison.isCorrect ? 'correct' : 'wrong');
                    result.innerHTML = `
                        <div class="result-status ${comparison.isCorrect ? 'correct' : 'wrong'}">
                            ${comparison.isCorrect ? '✓ Correct!' : 'Try again'} (${comparison.score}%)
                        </div>
                        <div class="result-you-said">You said:</div>
                        <div class="result-text">${comparison.recognized}</div>
                        <div class="result-you-said">Correct:</div>
                        <div class="result-correct-text">${comparison.target}</div>
                    `;
                }
            },
            (error) => {
                micBtn.classList.remove('listening');
                label.textContent = error;
            },
            () => {
                micBtn.classList.remove('listening');
                label.textContent = 'Tap to practice speaking';
            }
        );
    },

    closeModal(event) {
        if (event && event.target !== document.getElementById('sentence-modal')) return;
        const modal = document.getElementById('sentence-modal');
        modal.classList.remove('show');
        Speech.stopRecognition();
        if (window.speechSynthesis) window.speechSynthesis.cancel();
    },

    // ===== Bookmark =====
    toggleBookmark(scenarioId, index, btn) {
        const isBookmarked = Progress.toggleBookmark(scenarioId, index);
        btn.classList.toggle('active', isBookmarked);
        this.showToast(isBookmarked ? 'Bookmarked' : 'Removed bookmark');
    },

    // ===== Practice Session =====
    startPracticeSession(scenarioId) {
        const scenario = SCENARIOS.find(s => s.id === scenarioId);
        if (!scenario) return;

        this.practiceQueue = scenario.sentences.map((s, i) => ({ ...s, scenarioId, index: i }));
        this.practiceIndex = 0;
        this.renderPracticeCard();
    },

    renderPracticeCard() {
        const main = document.getElementById('main-content');
        
        if (this.practiceIndex >= this.practiceQueue.length) {
            main.innerHTML = this.renderPracticeComplete();
            return;
        }

        const sentence = this.practiceQueue[this.practiceIndex];
        
        main.innerHTML = `
        <div class="page practice-session">
            <button class="back-btn" onclick="App.navigate('scenarios')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Exit Practice
            </button>
            
            <div class="practice-progress">
                Sentence ${this.practiceIndex + 1} of ${this.practiceQueue.length}
            </div>

            <div class="practice-card">
                <div class="practice-prompt">Say this in Chinese:</div>
                <div class="practice-en">${sentence.en}</div>
                <div style="margin:16px 0">
                    <button class="btn-secondary" onclick="App.speakPracticeHint('${sentence.cn}')" style="display:inline-flex;align-items:center;gap:6px;justify-content:center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
                        Hint
                    </button>
                </div>
                <button class="practice-mic-btn" id="practice-mic" onclick="App.practiceSpeak()">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>
                </button>
                <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:8px" id="practice-label">Tap and speak</p>
                <div class="practice-result" id="practice-result"></div>
            </div>

            <div class="practice-actions">
                <button class="btn-secondary" onclick="App.practiceSkip()">Skip</button>
                <button class="btn-primary" onclick="App.practiceNext()">Next →</button>
            </div>
        </div>
        `;
    },

    speakPracticeHint(text) {
        Speech.speak(text);
        this.showToast('Listen and repeat');
    },

    practiceSpeak() {
        const mic = document.getElementById('practice-mic');
        const label = document.getElementById('practice-label');
        const result = document.getElementById('practice-result');

        if (!Speech.isRecognitionSupported()) {
            this.showToast('Speech recognition needs Chrome or Edge');
            return;
        }

        if (window.speechSynthesis) window.speechSynthesis.cancel();

        mic.classList.add('listening');
        label.textContent = 'Listening... speak now';

        const sentence = this.practiceQueue[this.practiceIndex];

        Speech.startRecognition(
            (transcript, isFinal) => {
                if (isFinal) {
                    const comparison = Speech.compareSpeech(transcript, sentence.cn);
                    mic.classList.remove('listening');
                    label.textContent = comparison.isCorrect ? 'Excellent!' : 'Try again or move on';
                    
                    result.className = 'practice-result show ' + (comparison.isCorrect ? 'correct' : 'wrong');
                    result.innerHTML = `
                        <div class="result-status ${comparison.isCorrect ? 'correct' : 'wrong'}">
                            ${comparison.isCorrect ? '✓ Correct!' : 'Not quite'} (${comparison.score}%)
                        </div>
                        <div class="result-you-said">You said: <strong>${comparison.recognized}</strong></div>
                        <div class="result-correct-text">Target: ${comparison.target}</div>
                    `;

                    if (comparison.isCorrect) {
                        Progress.markSentenceLearned(sentence.scenarioId, sentence.index);
                    }
                }
            },
            (error) => {
                mic.classList.remove('listening');
                label.textContent = error;
            },
            () => {
                mic.classList.remove('listening');
                label.textContent = 'Tap and speak';
            }
        );
    },

    practiceNext() {
        this.practiceIndex++;
        this.renderPracticeCard();
    },

    practiceSkip() {
        this.practiceIndex++;
        this.renderPracticeCard();
    },

    renderPracticeComplete() {
        const correct = this.practiceQueue.filter(s => 
            Progress.isSentenceLearned(s.scenarioId, s.index)
        ).length;
        const total = this.practiceQueue.length;
        const percent = Math.round((correct / total) * 100);

        return `
        <div class="page" style="text-align:center;padding-top:40px">
            <div style="font-size:64px;margin-bottom:16px">${percent >= 70 ? '🎉' : '💪'}</div>
            <h2 style="font-size:24px;margin-bottom:8px">Practice Complete!</h2>
            <p style="color:var(--text-muted);margin-bottom:24px">
                You got ${correct} out of ${total} sentences correct (${percent}%)
            </p>
            <div style="background:var(--bg-card);border-radius:16px;padding:24px;margin-bottom:20px;box-shadow:var(--shadow)">
                <div style="font-size:48px;font-weight:800;color:var(--accent)">${percent}%</div>
                <div style="font-size:14px;color:var(--text-muted)">Accuracy</div>
            </div>
            <button class="practice-cta" onclick="App.navigate('scenarios')">Back to Scenarios</button>
            <button class="btn-secondary" style="margin-top:12px" onclick="App.startPracticeSession('${this.practiceQueue[0]?.scenarioId}')">Practice Again</button>
        </div>
        `;
    },

    // ===== Practice Page =====
    renderPractice() {
        const bookmarked = Progress.getBookmarked();
        const stats = Progress.getStats();

        return `
        <div class="page">
            <div class="section-title" style="margin-top:0">Practice Modes</div>
            
            <div class="practice-mode-card" onclick="App.startRandomPractice()">
                <div class="practice-mode-icon">🎲</div>
                <div class="practice-mode-title">Random Practice</div>
                <div class="practice-mode-desc">Practice random sentences from all scenarios</div>
            </div>

            <div class="practice-mode-card" onclick="App.startBookmarkedPractice()">
                <div class="practice-mode-icon">🔖</div>
                <div class="practice-mode-title">Bookmarked Sentences</div>
                <div class="practice-mode-desc">${bookmarked.length} saved sentences to review</div>
            </div>

            <div class="practice-mode-card" onclick="App.startTonePractice()">
                <div class="practice-mode-icon">🎵</div>
                <div class="practice-mode-title">Tone Training</div>
                <div class="practice-mode-desc">Learn the four tones of Mandarin</div>
            </div>

            <div class="section-title">Quick Stats</div>
            <div class="progress-overview">
                <div class="progress-stat-card">
                    <div class="progress-stat-num">${stats.learned}</div>
                    <div class="progress-stat-label">Sentences Learned</div>
                </div>
                <div class="progress-stat-card">
                    <div class="progress-stat-num">${stats.bookmarked}</div>
                    <div class="progress-stat-label">Bookmarked</div>
                </div>
            </div>
        </div>
        `;
    },

    startRandomPractice() {
        const allSentences = [];
        SCENARIOS.forEach(s => {
            s.sentences.forEach((sentence, i) => {
                allSentences.push({ ...sentence, scenarioId: s.id, index: i });
            });
        });
        // Shuffle
        this.practiceQueue = allSentences.sort(() => Math.random() - 0.5).slice(0, 15);
        this.practiceIndex = 0;
        this.renderPracticeCard();
    },

    startBookmarkedPractice() {
        const bookmarked = Progress.getBookmarked();
        if (bookmarked.length === 0) {
            this.showToast('No bookmarked sentences yet. Bookmark sentences to review them here.');
            return;
        }
        this.practiceQueue = bookmarked.map(b => {
            const scenario = SCENARIOS.find(s => s.id === b.scenarioId);
            return { ...scenario.sentences[b.index], scenarioId: b.scenarioId, index: b.index };
        });
        this.practiceIndex = 0;
        this.renderPracticeCard();
    },

    startTonePractice() {
        const main = document.getElementById('main-content');
        main.innerHTML = `
        <div class="page">
            <button class="back-btn" onclick="App.navigate('practice')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back
            </button>
            
            <div class="lesson-header">
                <div class="lesson-icon">🎵</div>
                <div class="lesson-title">${TONES_INFO.title}</div>
                <div class="lesson-title-cn">四声</div>
            </div>

            <div class="cultural-tip">
                <div class="cultural-tip-text">${TONES_INFO.description}</div>
            </div>

            ${TONES_INFO.tones.map((t, i) => `
                <div class="sentence-card">
                    <div class="sentence-header">
                        <span class="sentence-number">${t.tone}</span>
                        <div class="sentence-actions">
                            <button class="sentence-action-btn btn-speak" onclick="App.speakSentence('${t.example.split(' ')[0]}', this)">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="sentence-cn" style="font-size:32px">${t.mark}</div>
                    <div class="sentence-pinyin" style="font-size:16px">Pitch: ${t.pitch}</div>
                    <div class="sentence-en">${t.example}</div>
                    <div class="sentence-note">${t.tip}</div>
                </div>
            `).join('')}

            <div class="cultural-tip">
                <div class="cultural-tip-title">💡 The Classic Example</div>
                <div class="cultural-tip-text">
                    Same syllable, four tones, four meanings:<br>
                    <strong>mā</strong> (妈) = Mom &nbsp; <strong>má</strong> (麻) = Hemp<br>
                    <strong>mǎ</strong> (马) = Horse &nbsp; <strong>mà</strong> (骂) = Scold<br><br>
                    This is why tones matter! Get the tone wrong and you might call your mother a horse. 😅
                </div>
            </div>

            <button class="practice-cta" onclick="App.navigate('practice')">
                Got it!
            </button>
        </div>
        `;
    },

    // ===== Me / Profile Page =====
    renderMe() {
        const stats = Progress.getStats();
        const totalSentences = SCENARIOS.reduce((sum, s) => sum + s.sentences.length, 0);
        const user = (typeof Auth !== 'undefined' && Auth.currentUser) || null;
        const submissions = user ? Community.myPosts(user.name) : [];
        const published = submissions.filter(p => p.status === 'published');
        const pending = submissions.filter(p => ['ai', 'human'].includes(p.status));
        const rejected = submissions.filter(p => p.status === 'blocked' || p.status === 'rejected');
        const drafts = (this.userUploads || []).filter(u => !u.submitted);
        const langName = { zh: '中文', en: 'English', ru: 'Русский', ar: 'العربية', ko: '한국어' }[I18n.getLang()] || 'English';

        const renderSubmissionList = (list, emptyText) => {
            if (!list.length) return `<div class="me-empty">${emptyText}</div>`;
            return `<div class="me-submission-list">${list.map(p => `
                <div class="me-submission-item ${p.status}">
                    <div class="me-submission-media">${p.mediaData ? `<img src="${esc(p.mediaData)}" alt="">` : '<span>📝</span>'}</div>
                    <div class="me-submission-body">
                        <div class="me-submission-text">${esc((p.cn || p.en || p.text || '').slice(0, 60))}${((p.cn || p.en || p.text || '').length > 60 ? '…' : '')}</div>
                        <div class="me-submission-status">${this.statusLabel(p.status)}</div>
                    </div>
                </div>
            `).join('')}</div>`;
        };

        return `
        <div class="page me-page">
            <div class="me-header">
                <div class="me-avatar">${user ? (user.name || '👤').slice(0, 2).toUpperCase() : '👤'}</div>
                <div class="me-user-info">
                    <div class="me-user-name">${user ? esc(user.name) : I18n.t('topbarLogin')}</div>
                    <div class="me-user-role">${user ? (Auth.roleInfo(user.role).label || '') : I18n.t('loginSub')}</div>
                </div>
                ${user ? `<button class="me-logout-btn" onclick="Auth.logout(); App.navigate('home');">${I18n.t('logoutBtn')}</button>` : `<button class="me-login-btn" onclick="Auth.openLoginModal()">${I18n.t('topbarLogin')}</button>`}
            </div>

            <div class="me-section">
                <div class="me-section-title">${I18n.t('mySubmissionsTitle')}</div>
                <div class="me-submission-tabs">
                    <button class="me-tab active" onclick="App.switchMeTab(this,'published')">${I18n.t('myPublished')} <span>${published.length}</span></button>
                    <button class="me-tab" onclick="App.switchMeTab(this,'pending')">${I18n.t('myPending')} <span>${pending.length}</span></button>
                    <button class="me-tab" onclick="App.switchMeTab(this,'rejected')">${I18n.t('myRejected')} <span>${rejected.length}</span></button>
                    <button class="me-tab" onclick="App.switchMeTab(this,'drafts')">${I18n.t('myDrafts')} <span>${drafts.length}</span></button>
                </div>
                <div class="me-tab-panel" id="me-panel-published">${renderSubmissionList(published, I18n.t('myEmpty'))}</div>
                <div class="me-tab-panel hidden" id="me-panel-pending">${renderSubmissionList(pending, I18n.t('myEmpty'))}</div>
                <div class="me-tab-panel hidden" id="me-panel-rejected">${renderSubmissionList(rejected, I18n.t('myEmpty'))}</div>
                <div class="me-tab-panel hidden" id="me-panel-drafts">${renderSubmissionList(drafts, I18n.t('myEmpty'))}</div>
            </div>

            <div class="me-section">
                <div class="me-section-title">${I18n.t('languageSettings')}</div>
                <div class="me-lang-card" onclick="App.toggleLangMenu(event)">
                    <span>${I18n.t('currentLang')}</span>
                    <strong>${langName}</strong>
                </div>
                <div class="me-hint">${I18n.t('changeLangHint')}</div>
            </div>

            <div class="me-section">
                <div class="me-section-title">${I18n.t('myProgressTitle')}</div>
                <div class="progress-overview compact">
                    <div class="progress-stat-card">
                        <div class="progress-stat-num">${stats.learned}</div>
                        <div class="progress-stat-label">${Math.round((stats.learned / totalSentences) * 100)}%</div>
                    </div>
                    <div class="progress-stat-card">
                        <div class="progress-stat-num">${stats.bookmarked}</div>
                        <div class="progress-stat-label">Bookmarked</div>
                    </div>
                    <div class="progress-stat-card">
                        <div class="progress-stat-num">${stats.streak}</div>
                        <div class="progress-stat-label">Day Streak</div>
                    </div>
                </div>
                ${SCENARIOS.slice(0, 4).map(s => {
                    const progress = Progress.getScenarioProgress(s.id);
                    return `
                    <div class="progress-item" onclick="App.openScenario('${s.id}')">
                        <div class="progress-item-icon">${s.icon}</div>
                        <div class="progress-item-info">
                            <div class="progress-item-name">${s.name}</div>
                            <div class="progress-bar"><div class="progress-bar-fill" style="width:${progress}%"></div></div>
                        </div>
                        <div class="progress-item-percent">${progress}%</div>
                    </div>`;
                }).join('')}
            </div>

            <div class="me-section">
                <div class="me-section-title">${I18n.t('termsTitle')}</div>
                <div class="me-terms">${I18n.t('termsText')}</div>
            </div>

            <div class="me-section">
                <div class="me-section-title">${I18n.t('aboutApp')}</div>
                <div class="cultural-tip-text">
                    <strong>易通中国 EasyToChina (ETC)</strong> is a free Chinese learning app for foreigners visiting China for travel and business. It focuses on practical spoken Mandarin and real-life scenarios.
                </div>
            </div>

            <button class="btn-secondary" style="width:100%;margin-top:12px" onclick="Progress.reset()">${I18n.t('resetProgressBtn')}</button>
        </div>
        `;
    },

    statusLabel(status) {
        const map = {
            published: '✅ ' + I18n.t('myPublished'),
            ai: '🤖 AI ' + I18n.t('myPending'),
            human: '👁️ ' + I18n.t('myPending'),
            blocked: '⛔ ' + I18n.t('myRejected'),
            rejected: '⛔ ' + I18n.t('myRejected')
        };
        return map[status] || status;
    },

    switchMeTab(btn, panel) {
        btn.parentElement.querySelectorAll('.me-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        ['published', 'pending', 'rejected', 'drafts'].forEach(p => {
            const el = document.getElementById('me-panel-' + p);
            if (el) el.classList.toggle('hidden', p !== panel);
        });
    },

    // ===== Explore (Cities + China Today merged) =====
    renderExplore() {
        const tab = this.exploreTab || 'cities';
        const isAdmin = (typeof Auth !== 'undefined' && Auth.isAdmin());
        // 普通用户看不到 Review；若当前正好在 review 又不是管理员，则切回 cities
        const safeTab = (!isAdmin && tab === 'review') ? 'cities' : tab;
        const reviewTabHtml = isAdmin ? `
                <button class="explore-tab review-tab ${safeTab === 'review' ? 'active' : ''}" onclick="App.switchExploreTab('review')">
                    🛡️ ${I18n.t('reviewGateTitle').replace(/^.*?\s*/, '') || 'Review'}
                </button>` : '';
        return `
        <div class="page">
            <div class="explore-tabs">
                <button class="explore-tab ${safeTab === 'cities' ? 'active' : ''}" onclick="App.switchExploreTab('cities')">
                    🏙️ ${I18n.t('exploreTabCities') || 'Cities'}
                </button>
                <button class="explore-tab ${safeTab === 'feed' ? 'active' : ''}" onclick="App.switchExploreTab('feed')">
                    📱 China Today
                </button>
                <button class="explore-tab ${safeTab === 'talk' ? 'active' : ''}" onclick="App.switchExploreTab('talk')">
                    💬 Talk & Help
                </button>
                ${reviewTabHtml}
            </div>
            ${safeTab === 'cities' ? this.renderCitiesContent()
                : safeTab === 'feed' ? this.renderChinaTodayContent()
                : safeTab === 'talk' ? this.renderTalkContent()
                : this.renderReviewContent()}
        </div>`;
    },

    // ===== Talk & Help（海外话题讨论 + 来华求助）=====
    renderTalkContent() {
        const feed = Community.publishedFeed('talkask');
        const isZh = I18n.getLang() === 'zh';
        return `
            <div class="feed-header">
                <div class="feed-header-title">💬 Talk & Help · 话题与求助</div>
                <div class="feed-header-sub">
                    ${isZh
                        ? '🌍 海外用户：发布旅游 / 商务计划与需求，获得中方帮助与交流。<br>🇨🇳 国内用户：上传家乡照片 / 视频，双语展示方便全球学员学习中文。<br>所有内容经 AI 初审 + 人工复审两轮审核后发布。'
                        : I18n.t('talkHeaderSub')}
                </div>
                <button class="feed-upload-btn" onclick="App.openUploadModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>
                    ${I18n.t('uploadBtnSubmit')}
                </button>
            </div>
            ${feed.map(item => this.renderFeedCard(item)).join('') || '<div class="empty-tip">' + (isZh ? '还没有话题，来发起第一个讨论吧！' : I18n.t('talkHeaderSub')) + '</div>'}
        `;
    },

    // ===== Review（双重审核后台）=====
    renderReviewContent() {
        const isZh = I18n.getLang() === 'zh';
        if (!Auth.isAdmin()) {
            return `
            <div class="feed-header">
                <div class="feed-header-title">🛡️ 双重审核后台</div>
                <div class="feed-header-sub">${isZh ? 'AI 初审 + 人工复审，违规内容由 AI 直接拦截下架。' : I18n.t('reviewGateDesc')}</div>
            </div>
            <div class="review-gate">
                <div class="review-gate-icon">🛡️</div>
                <div class="review-gate-title">${isZh ? '仅平台管理员可进入审核后台' : I18n.t('reviewGateTitle')}</div>
                <div class="review-gate-desc">${isZh ? '当前未登录或身份非管理员。点击下方按钮，以管理员身份体验人工复审流程。' : I18n.t('reviewGateDesc')}</div>
                <button class="btn btn-primary" onclick="Auth.quickLogin('admin')">${isZh ? '以管理员身份体验 →' : I18n.t('enterBtn')}</button>
            </div>`;
        }

        const queue = Community.reviewQueue();
        const blocked = Community.blockedList();
        const published = Community.publishedFeed('all').length;
        const ai = Community.aiPending();

        return `
            <div class="feed-header">
                <div class="feed-header-title">🛡️ 双重审核后台</div>
                <div class="feed-header-sub">
                    ${I18n.t('reviewFlowText')}<br>
                    待复审 ${queue.length} · AI审核中 ${ai.length} · 已拦截 ${blocked.length} · 已发布 ${published}
                </div>
            </div>

            ${ai.length ? `
            <div class="review-group">
                <div class="review-group-title">${I18n.t('reviewGroupAi')}</div>
                ${ai.map(p => this.renderReviewCard(p, 'ai')).join('')}
            </div>` : ''}

            ${queue.length ? `
            <div class="review-group">
                <div class="review-group-title">${I18n.t('reviewGroupHuman')}</div>
                ${queue.map(p => this.renderReviewCard(p, 'human')).join('')}
            </div>` : '<div class="empty-tip">' + (isZh ? '✅ 待复审队列已清空。切换身份到「国内/海外用户」上传一条内容即可看到完整双审流程。' : I18n.t('reviewGroupHuman')) + '</div>'}

            ${blocked.length ? `
            <div class="review-group">
                <div class="review-group-title">${I18n.t('reviewGroupBlocked')}</div>
                ${blocked.map(p => this.renderReviewCard(p, 'blocked')).join('')}
            </div>` : ''}
        `;
    },

    renderReviewCard(p, mode) {
        const sub = Community.subtitleOf(p);
        const langBadge = p.lang === 'en'
            ? '<span class="badge badge-en">EN 英文帖</span>'
            : '<span class="badge badge-zh">中文帖</span>';
        return `
        <div class="review-card ${mode}">
            <div class="review-card-head">
                <span class="review-author">${esc(p.authorFlag || '')} ${esc(p.author)} · ${esc(p.cityEn || 'China')}</span>
                ${langBadge}
                ${p.kind === 'home' ? '<span class="badge badge-home">🏠 家乡分享</span>'
                    : p.kind === 'ask' ? '<span class="badge badge-ask">🆘 来华求助</span>'
                    : '<span class="badge badge-talk">💬 话题讨论</span>'}
            </div>
            <div class="review-card-text">${esc(p.cn || p.en || p.text)}</div>
            <div class="review-card-sub">${esc(sub.content)}</div>
            <div class="review-card-note">${esc(p.aiNote || '')}</div>
            ${mode === 'human' ? `
            <div class="review-card-actions">
                <button class="btn btn-ok btn-sm" onclick="Community.humanReview('${p.id}', true)">✅ 复审通过 · 发布</button>
                <button class="btn btn-danger btn-sm" onclick="Community.humanReview('${p.id}', false)">⛔ 驳回下架</button>
            </div>` : mode === 'ai' ? '<div class="review-card-actions"><span class="muted">AI 正在扫描图像与文本…</span></div>' : ''}
        </div>`;
    },

    // ===== 我的发布与审核状态 =====
    renderMyPostsSection() {
        if (!Auth.isLoggedIn() || Auth.isAdmin()) return '';
        const mine = Community.myPosts(Auth.currentUser.name);
        if (!mine.length) return '';
        const statusMap = {
            ai: '<span class="status-pill status-ai">🤖 AI 初审中</span>',
            human: '<span class="status-pill status-human">👁️ 人工复审中</span>',
            published: '<span class="status-pill status-published">✅ 已发布</span>',
            blocked: '<span class="status-pill status-blocked">⛔ 已下架</span>'
        };
        return `
        <div class="my-posts">
            <div class="my-posts-title">📋 我的发布与审核状态</div>
            ${mine.map(p => `
                <div class="my-post-row">
                    <span class="my-post-text">${esc((p.cn || p.en || p.text || '').slice(0, 40))}${(p.cn || p.en || p.text || '').length > 40 ? '…' : ''}</span>
                    ${statusMap[p.status] || ''}
                </div>`).join('')}
            <div class="my-posts-hint">${I18n.t('myPostsHint')}</div>
        </div>`;
    },

    renderCitiesContent() {
        return `
            <div class="cities-intro">
                <div class="cities-intro-title">🏮 City Explorer · 探索中国</div>
                <div class="cities-intro-sub">
                    ${CITY_FEATURES.length} fascinating cities — each with its own culture, industry, history and local phrases.<br>
                    Explore China while you learn Chinese. Every phrase comes with audio.
                </div>
            </div>
            <div class="city-grid">
                ${CITY_FEATURES.map(c => {
                    const photos = (typeof CITY_PHOTOS !== 'undefined' && CITY_PHOTOS[c.id]) || [];
                    const first = photos[0] || null;
                    return `
                <div class="city-card" onclick="App.openCity('${c.id}')">
                    <div class="city-card-banner" style="background: linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})">
                        ${first
                            ? `<img class="city-card-photo" src="${first.src}" alt="${c.en} photo" loading="lazy" onerror="this.remove()">`
                            : (() => {
                                const arts = (typeof CITY_ART !== 'undefined' && CITY_ART[c.id]) || [];
                                return arts.length > 0 ? `<div class="city-card-art">${arts[0].svg}</div>` : `<div class="city-card-emoji-big">${c.emoji}</div>`;
                              })()}
                        <span class="city-card-region">${c.region}</span>
                        <span class="city-card-photo-count">${photos.length > 0 ? photos.length + ' photos' : '3 scenes'}</span>
                    </div>
                    <div class="city-card-body">
                        <div class="city-card-cn">${c.cn}</div>
                        <div class="city-card-en">${c.en}</div>
                        <div class="city-card-tag">${c.tagline}</div>
                    </div>
                </div>`;
                }).join('')}
            </div>
        `;
    },

    openCity(id) {
        const c = CITY_FEATURES.find(x => x.id === id);
        if (!c) return;
        const main = document.getElementById('main-content');
        main.innerHTML = `
        <div class="page">
            <button class="back-btn" onclick="App.navigate('explore')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Explore
            </button>
            <div class="city-hero" style="background: linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})">
                ${(() => {
                    const photos = (typeof CITY_PHOTOS !== 'undefined' && CITY_PHOTOS[c.id]) || [];
                    const first = photos[0];
                    return first ? `<img class="city-hero-photo" src="${first.src}" alt="${c.en}" onerror="this.remove()">` : `<div class="city-hero-emoji">${c.emoji}</div>`;
                })()}
                <div class="city-hero-overlay"></div>
                <div class="city-hero-cn">${c.cn}</div>
                <div class="city-hero-pinyin">${c.pinyin}</div>
                <div class="city-hero-en">${c.en} · ${c.country || c.region + ' China'}</div>
                <div class="city-hero-tagline">${c.tagline}</div>
                <div class="city-fact-row">
                    ${c.facts.map(f => `<span class="city-fact-chip">${f}</span>`).join('')}
                </div>
            </div>

            ${(() => {
                const photos = (typeof CITY_PHOTOS !== 'undefined' && CITY_PHOTOS[c.id]) || [];
                if (photos.length > 0) {
                    return `
                <div class="city-gallery-title">📸 Real China · 实景图库 <span>photos via ${esc(photos[0].credit || 'Unsplash')}</span></div>
                <div class="city-photo-gallery">
                    ${photos.map((ph, i) => `
                    <div class="city-photo-item" onclick="App.speakSentence('${esc(ph.labelCn)}', this)">
                        <img src="${ph.src}" alt="${esc(ph.labelEn)}" loading="lazy" onerror="this.closest('.city-photo-item').classList.add('broken')">
                        <div class="city-photo-caption">
                            <div class="city-photo-cap-en">${esc(ph.labelEn)}</div>
                            <div class="city-photo-cap-cn">${esc(ph.labelCn)}</div>
                        </div>
                    </div>
                    `).join('')}
                </div>`;
                }
                const arts = (typeof CITY_ART !== 'undefined' && CITY_ART[c.id]) || [];
                if (arts.length === 0) return '';
                return `
                <div class="city-art-gallery">
                    ${arts.map((a, i) => `
                    <div class="city-art-item" onclick="App.speakSentence('${c.cn}好！', this)">
                        ${a.svg}
                        <div class="city-art-caption">${a.label}</div>
                    </div>
                    `).join('')}
                </div>`;
            })()}

            ${(() => {
                const mascot = (typeof CITY_MASCOTS !== 'undefined' && CITY_MASCOTS[c.id]) || null;
                if (!mascot) return '';
                return `
                <div class="city-mascot-card">
                    <div class="mascot-avatar-wrapper">
                        <div class="mascot-avatar" id="mascot-avatar-${c.id}">
                            ${mascot.image ? `<img class="mascot-img" src="${mascot.image}" alt="${esc(mascot.name)}" onerror="this.style.display='none'; this.parentElement.innerHTML='${mascot.svg.replace(/'/g, "\\'")}';">` : mascot.svg}
                        </div>
                        <div class="mascot-greeting-bubble" id="mascot-bubble-${c.id}">
                            <div class="mascot-greeting-cn">${mascot.greetingCn}</div>
                            <div class="mascot-greeting-pinyin">${mascot.greetingPinyin}</div>
                            <div class="mascot-greeting-en">${mascot.greetingEn}</div>
                        </div>
                    </div>
                    <div class="mascot-info">
                        <div class="mascot-name">${mascot.name}</div>
                        <div class="mascot-title">${mascot.title}</div>
                        <div class="mascot-desc">${mascot.desc}</div>
                        <div class="mascot-voice-info">
                            <span class="mascot-voice-label">Voice:</span>
                            <span class="mascot-voice-name">${mascot.voiceProfile.name}</span>
                            <button class="mascot-test-voice-btn" onclick="App.testMascotVoice('${c.id}', this)">🔊 Test Voice</button>
                        </div>
                        <div class="mascot-chat-btn-wrapper">
                            <button class="mascot-chat-btn" onclick="App.openMascotChat('${c.id}')">
                                💬 Chat with ${mascot.name}
                            </button>
                            <span class="mascot-chat-hint">Premium feature — preview available</span>
                        </div>
                    </div>
                </div>`;
            })()}

            <div class="city-section-title">📖 The Story</div>
            <div class="city-section-card">
                <div class="city-story-text">${c.story}</div>
                <div class="city-slang">💬 <strong>${c.slang.term}</strong> — ${c.slang.meaning}</div>
            </div>

            <div class="city-section-title">🏭 Industry & Business</div>
            <div class="city-industry-tags">
                ${c.industry.map(i => `<span class="city-industry-tag">${i}</span>`).join('')}
            </div>

            <div class="city-section-title">⭐ Must-See Highlights</div>
            <div class="city-highlight-grid">
                ${c.highlights.map(h => `
                <div class="city-highlight-item">
                    <strong>${h.name}</strong>
                    ${h.desc}
                </div>
                `).join('')}
            </div>

            <div class="city-section-title">🗣️ Speak Like a Local</div>
            <div class="city-section-card">
                ${c.phrases.map(p => `
                <div class="city-phrase">
                    <div class="city-phrase-content">
                        <div class="city-phrase-cn">${p.cn}</div>
                        <div class="city-phrase-pinyin">${p.pinyin}</div>
                        <div class="city-phrase-en">${p.en}</div>
                    </div>
                    <button class="city-phrase-speak" onclick="App.speakSentence('${p.cn.replace(/'/g, "\\'")}', this)" title="Listen">🔊</button>
                </div>
                `).join('')}
            </div>
        </div>`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ===== City Mascot System =====
    activeMascot: null,

    testMascotVoice(cityId, btn) {
        const mascot = CITY_MASCOTS[cityId];
        if (!mascot) return;
        const avatar = document.getElementById('mascot-avatar-' + cityId);
        if (avatar) avatar.classList.add('speaking');
        if (btn) { btn.disabled = true; btn.textContent = '🔊 Playing...'; }
        Speech.speakWithProfile(mascot.greetingCn, mascot.voiceProfile, () => {
            if (avatar) avatar.classList.remove('speaking');
            if (btn) { btn.disabled = false; btn.textContent = '🔊 Test Voice'; }
        });
    },

    openMascotChat(cityId) {
        const mascot = CITY_MASCOTS[cityId];
        if (!mascot) return;
        this.activeMascot = cityId;
        const modal = document.getElementById('sentence-modal');
        const content = document.getElementById('modal-content');

        content.innerHTML = `
            <div class="mascot-chat-header">
                <div class="mascot-chat-avatar">${mascot.svg}</div>
                <div>
                    <div class="mascot-chat-name">${mascot.name}</div>
                    <div class="mascot-chat-title">${mascot.title}</div>
                </div>
                <button class="mascot-voice-pick" onclick="App.openVoicePicker('${cityId}')">
                    🎙️ ${mascot.voiceProfile.name}
                </button>
            </div>
            <div class="mascot-chat-body" id="mascot-chat-body">
                <div class="chat-msg mascot-msg">
                    <div class="chat-bubble">
                        <div class="chat-cn">${mascot.greetingCn}</div>
                        <div class="chat-pinyin">${mascot.greetingPinyin}</div>
                        <div class="chat-en">${mascot.greetingEn}</div>
                    </div>
                    <button class="chat-speak-btn" onclick="App.speakMascotMsg('${mascot.greetingCn}', '${cityId}', this)">🔊</button>
                </div>
            </div>
            <div class="mascot-chat-input-area">
                <div class="mascot-quick-phrases">
                    ${mascot.chatTopics.map((t, i) => `
                        <button class="quick-phrase-chip" onclick="App.sendMascotMessage('${cityId}', ${i})">${t.label}</button>
                    `).join('')}
                </div>
                <div class="mascot-chat-input-row">
                    <input type="text" class="mascot-chat-input" id="mascot-chat-input" placeholder="Type in English or Chinese..." onkeydown="if(event.key==='Enter')App.sendMascotMessage('${cityId}', -1)">
                    <button class="mascot-chat-send" onclick="App.sendMascotMessage('${cityId}', -1)">Send</button>
                </div>
            </div>
            <div class="mascot-chat-footer">
                <span class="mascot-premium-badge">⭐ Premium Feature — Preview Mode</span>
                <span class="mascot-lipsync-hint">🗣️ Lip-sync ready · Voice: ${mascot.voiceProfile.name}</span>
            </div>
        `;
        modal.classList.add('show');
    },

    speakMascotMsg(text, cityId, btn) {
        const mascot = CITY_MASCOTS[cityId];
        const avatar = document.querySelector('.mascot-chat-avatar');
        if (avatar) avatar.classList.add('speaking');
        const profile = (mascot && mascot.voiceProfile) || Speech.getActiveProfile();
        Speech.speakWithProfile(text, profile, () => {
            if (avatar) avatar.classList.remove('speaking');
        });
    },

    sendMascotMessage(cityId, topicIndex) {
        const mascot = CITY_MASCOTS[cityId];
        if (!mascot) return;
        const chatBody = document.getElementById('mascot-chat-body');
        const input = document.getElementById('mascot-chat-input');
        let userText = '';

        if (topicIndex >= 0) {
            userText = mascot.chatTopics[topicIndex].label;
        } else {
            userText = input.value.trim();
            if (!userText) return;
            input.value = '';
        }

        // Add user message
        chatBody.innerHTML += `
            <div class="chat-msg user-msg">
                <div class="chat-bubble user-bubble">${userText}</div>
            </div>
        `;
        chatBody.scrollTop = chatBody.scrollHeight;

        // Generate mascot response
        let response;
        if (topicIndex >= 0) {
            response = mascot.chatTopics[topicIndex].response;
        } else {
            // Pick a contextual response
            const responses = mascot.chatTopics.map(t => t.response);
            response = responses[Math.floor(Math.random() * responses.length)];
        }

        // Simulate thinking delay
        setTimeout(() => {
            chatBody.innerHTML += `
                <div class="chat-msg mascot-msg">
                    <div class="chat-bubble">
                        <div class="chat-cn">${response.cn}</div>
                        <div class="chat-pinyin">${response.pinyin}</div>
                        <div class="chat-en">${response.en}</div>
                    </div>
                    <button class="chat-speak-btn" onclick="App.speakMascotMsg('${response.cn}', '${cityId}', this)">🔊</button>
                </div>
            `;
            chatBody.scrollTop = chatBody.scrollHeight;

            // Auto-speak the response
            const avatar = document.querySelector('.mascot-chat-avatar');
            if (avatar) avatar.classList.add('speaking');
            Speech.speakWithProfile(response.cn, mascot.voiceProfile, () => {
                if (avatar) avatar.classList.remove('speaking');
            });
        }, 800);
    },

    // ===== Voice Picker =====
    openVoicePicker(cityId) {
        const voices = Speech.getAvailableProfiles();
        const mascot = CITY_MASCOTS[cityId];
        const currentVoice = mascot ? mascot.voiceProfile.name : Speech.getActiveProfile().name;

        const modal = document.getElementById('upload-modal');
        const content = document.getElementById('upload-modal-content');
        content.innerHTML = `
            <div class="voice-picker">
                <div class="voice-picker-title">🎙️ Choose a Voice</div>
                <div class="voice-picker-sub">Select a Chinese voice model for this character</div>
                <div class="voice-list">
                    ${voices.map(v => `
                        <div class="voice-item ${v.name === currentVoice ? 'active' : ''}" onclick="App.selectVoice('${cityId}', '${v.id}')">
                            <div class="voice-item-icon">${v.icon}</div>
                            <div class="voice-item-info">
                                <div class="voice-item-name">${v.name}</div>
                                <div class="voice-item-desc">${v.desc}</div>
                                <div class="voice-item-params">Pitch: ${v.pitch} · Rate: ${v.rate}</div>
                            </div>
                            <button class="voice-item-test" onclick="event.stopPropagation();App.testVoiceProfile('${v.id}', this)">🔊</button>
                            ${v.premium ? '<span class="voice-premium-tag">PRO</span>' : '<span class="voice-free-tag">FREE</span>'}
                        </div>
                    `).join('')}
                </div>
                <div class="voice-picker-note">
                    💡 Free voices use your browser's built-in TTS engine. Premium voices (coming soon) will use neural TTS for studio-quality natural speech with lip-sync.
                </div>
            </div>
        `;
        modal.classList.add('show');
    },

    selectVoice(cityId, voiceId) {
        const profile = Speech.getProfileById(voiceId);
        if (!profile) return;
        if (CITY_MASCOTS[cityId]) {
            CITY_MASCOTS[cityId].voiceProfile = profile;
        }
        document.getElementById('upload-modal').classList.remove('show');
        // Reopen mascot chat to reflect change
        this.openMascotChat(cityId);
        this.showToast('Voice changed to ' + profile.name);
    },

    testVoiceProfile(voiceId, btn) {
        const profile = Speech.getProfileById(voiceId);
        if (!profile) return;
        if (btn) { btn.style.opacity = '0.5'; btn.textContent = '⏳'; }
        Speech.speakWithProfile('你好，欢迎来到中国！', profile, () => {
            if (btn) { btn.style.opacity = ''; btn.textContent = '🔊'; }
        });
    },

    // ===== China Today Feed =====
    feedFilter: 'all',
    feedLikes: {},
    feedBookmarks: [],
    userUploads: [],

    renderChinaTodayContent(filter) {
        if (filter) this.feedFilter = filter;
        let feed = Community.publishedFeed('home');
        if (this.feedFilter !== 'all') {
            feed = feed.filter(f => f.tag === this.feedFilter);
        }

        const filters = [
            { id: 'all', name: 'All' },
            { id: 'city', name: '🏙️ City' },
            { id: 'food', name: '🍜 Food' },
            { id: 'culture', name: '🏮 Culture' },
            { id: 'travel', name: '✈️ Travel' },
            { id: 'tech', name: '🚀 Tech' }
        ];

        const isZh = I18n.getLang() === 'zh';
        return `
            <div class="feed-header">
                <div class="feed-header-title">${I18n.t('feedHeaderTitle')}</div>
                <div class="feed-header-sub">
                    ${isZh
                        ? 'See the REAL China through the eyes of locals.<br>Fresh photos, trendy Chinese, authentic daily life.<br>中国人上传家乡照片，AI自动配时尚中文！'
                        : I18n.t('feedHeaderSub')}
                </div>
                <button class="feed-upload-btn" onclick="App.openUploadModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    ${I18n.t('btnPublish')}
                </button>
            </div>

            <div class="filter-bar">
                ${filters.map(f => `
                    <button class="filter-chip ${this.feedFilter === f.id ? 'active' : ''}"
                            onclick="App.renderChinaTodayPage('${f.id}')">${f.name}</button>
                `).join('')}
            </div>

            ${feed.map(item => this.renderFeedCard(item)).join('')}

            ${this.renderMyPostsSection()}

            <div class="cultural-tip">
                <div class="cultural-tip-title">💡 Why China Today?</div>
                <div class="cultural-tip-text">
                    Textbooks show you old China. <strong>China Today</strong> shows you the China that young people actually live in right now.<br><br>
                    Every caption uses <strong>real internet slang (网络流行语)</strong> — the words Chinese people text with every day on WeChat, Douyin, and Xiaohongshu.<br><br>
                    <strong>Chinese users:</strong> Register, then upload a photo or video of your city. Content goes through <strong>AI review + human review</strong> before publishing — banned categories (porn / drugs / gambling / politics) are blocked automatically. Help the world see your China!
                </div>
            </div>
        `;
    },

    renderChinaTodayPage(filter) {
        this.switchExploreTab('feed');
        if (filter) {
            this.feedFilter = filter;
            const main = document.getElementById('main-content');
            main.innerHTML = this.renderExplore();
        }
    },

    renderFeedCard(item) {
        const isLiked = this.feedLikes[item.id];
        const isBookmarked = this.feedBookmarks.includes(item.id);
        const likeCount = (item.likes || 0) + (isLiked ? 1 : 0);
        const sub = Community.subtitleOf(item);
        const cnText = esc(item.lang === 'en' ? (item.en || item.text || '') : (item.cn || item.text || ''));
        const speakText = item.cn || item.en || '';

        const kindBadge = item.kind === 'ask'
            ? '<span class="badge badge-ask">🆘 来华求助</span>'
            : item.kind === 'talk'
            ? '<span class="badge badge-talk">💬 话题讨论</span>'
            : '<span class="badge badge-home">🏠 家乡分享</span>';
        const langBadge = item.lang === 'en'
            ? '<span class="badge badge-en">EN · 配中文字幕</span>'
            : '<span class="badge badge-zh">中文 · 配字幕</span>';
        const authorFlag = esc(item.authorFlag || (item.author === 'You' ? '🇨🇳' : '🇨🇳'));

        // 媒体：预置实景图（item.photo）优先 → 用户上传真实图（mediaData）→ emoji 占位
        const mediaHtml = item.photo
            ? `<div class="feed-photo feed-photo-real"><img class="feed-real-img" src="${item.photo}" alt="${esc(item.cityEn)}" loading="lazy" onerror="this.closest('.feed-photo').style.display='none'"><span class="feed-city-badge">📍 ${esc(item.cityEn || 'China')}</span></div>`
            : item.mediaData
            ? `<div class="feed-photo" style="background:#000"><img class="feed-real-img" src="${item.mediaData}" alt="${esc(item.cityEn)}"><span class="feed-city-badge">📍 ${esc(item.cityEn)}</span></div>`
            : `<div class="feed-photo" style="background:${item.gradient}">
                <span style="font-size:64px">${item.emoji || '📷'}</span>
                <span class="feed-city-badge">📍 ${esc(item.cityEn || 'China')}</span>
                <span class="feed-tag-badge">${esc(item.tag || '')}</span>
                ${item.mediaName ? `<span class="feed-media-name">📎 ${esc(item.mediaName)}</span>` : ''}
            </div>`;

        return `
        <div class="feed-card">
            ${mediaHtml}
            <div class="feed-body">
                <div class="feed-card-meta">
                    <span class="feed-author">${authorFlag} ${esc(item.author || '')}</span>
                    ${langBadge}${kindBadge}
                </div>
                <button class="feed-speak-btn" onclick="App.speakFeedCaption(this.dataset.cn, this)" data-cn="${esc(speakText)}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    Listen
                </button>
                <div class="feed-caption-cn">${cnText}</div>
                ${item.pinyin ? `<div class="feed-caption-pinyin">${esc(item.pinyin)}</div>` : ''}
                ${item.slang ? `<div class="feed-slang">${esc(item.slang)}</div>` : ''}

                <div class="feed-subtitle"><span class="feed-subtitle-label">${sub.label}</span>${esc(sub.content)}</div>

                <div class="feed-actions">
                    <button class="feed-action ${isLiked ? 'liked' : ''}" onclick="App.toggleFeedLike('${item.id}', this)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <span>${likeCount}</span>
                    </button>
                    <button class="feed-action ${isBookmarked ? 'bookmarked' : ''}" onclick="App.toggleFeedBookmark('${item.id}', this)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <span class="feed-meta">${esc(item.time || '')}</span>
                </div>
            </div>
        </div>
        `;
    },

    speakFeedCaption(text, btn) {
        Speech.speak(text, () => {});
        if (btn) {
            btn.style.background = 'var(--primary-dark)';
            setTimeout(() => { btn.style.background = ''; }, 1500);
        }
    },

    toggleFeedLike(id, btn) {
        this.feedLikes[id] = !this.feedLikes[id];
        this.renderChinaTodayPage(this.feedFilter);
    },

    toggleFeedBookmark(id, btn) {
        const idx = this.feedBookmarks.indexOf(id);
        if (idx >= 0) {
            this.feedBookmarks.splice(idx, 1);
        } else {
            this.feedBookmarks.push(id);
        }
        this.renderChinaTodayPage(this.feedFilter);
    },

    // ===== Upload Modal（注册后上传，走 AI 初审 + 人工复审）=====
    openUploadModal() {
        const modal = document.getElementById('upload-modal');
        const content = document.getElementById('upload-modal-content');

        // 未登录 / 管理员 → 引导登录
        if (!Auth.isLoggedIn() || Auth.isAdmin()) {
            content.innerHTML = `
            <div class="upload-form">
                <div class="upload-gate">
                    <div class="upload-gate-icon">📤</div>
                    <div class="upload-gate-title">${Auth.isAdmin() ? I18n.t('uploadGateAdminTitle') : I18n.t('uploadGateTitle')}</div>
                    <div class="upload-gate-desc">
                        ${Auth.isAdmin()
                            ? '管理员负责内容人工复审，发帖请切换到「国内用户」或「海外用户」身份。'
                            : I18n.t('uploadGateCn')}
                    </div>
                    <div class="upload-gate-btns">
                        <button class="btn btn-primary btn-sm" onclick="Auth.quickLogin('cn')">🇨🇳 ${I18n.t('uploadTabCn')}</button>
                        <button class="btn btn-primary btn-sm" onclick="Auth.quickLogin('intl')">🌍 ${I18n.t('uploadTabIntl')}</button>
                    </div>
                </div>
            </div>`;
            modal.classList.add('show');
            return;
        }

        const isIntl = Auth.isIntl();
        const cityOptions = CHINA_CITIES.map(c => `<option value="${c}">${c}</option>`).join('');
        const kindOptions = isIntl
            ? `<option value="talk">💬 中国话题讨论</option>
               <option value="ask">🆘 来华旅游 / 商务求助</option>`
            : `<option value="home">🏠 家乡文化分享（推荐给海外粉丝）</option>
               <option value="talk">💬 发起中国话题讨论</option>`;

        content.innerHTML = `
            <div class="upload-form">
                <div class="upload-title">${isIntl ? '🌍 分享你的中国话题 / 求助' : '📷 拍摄上传我的家乡'}</div>
                <div class="upload-review-notice">
                    <b>🛡️ 双重审核</b> 内容将先经 AI 初审（涉黄/涉毒/涉赌/涉政直接拦截下架），通过后转人工复审，双审通过才对外展示。
                </div>

                <label class="upload-photo-area" for="upload-file" id="upload-photo-area">
                    <span class="upload-photo-emoji" id="upload-photo-emoji">📷</span>
                    <span class="upload-photo-text" id="upload-photo-text">拍摄 / 相册选择照片或视频<br><small>支持 jpg / png / mp4（演示环境不真实上传存储）</small></span>
                    <input type="file" id="upload-file" accept="image/*,video/*" capture="environment" onchange="App.pickMediaFile(this)">
                </label>
                <div id="upload-preview" class="upload-preview"></div>

                <div style="display:flex;gap:10px">
                    <div style="flex:1">
                        <div class="upload-label">Your City · 城市</div>
                        <select class="upload-select" id="upload-city">${cityOptions}</select>
                    </div>
                    <div style="flex:1">
                        <div class="upload-label">Category · 分类</div>
                        <select class="upload-select" id="upload-tag">
                            <option value="city">🏙️ City</option>
                            <option value="food">🍜 Food</option>
                            <option value="culture">🏮 Culture</option>
                            <option value="travel">✈️ Travel</option>
                            <option value="tech">🚀 Tech</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div class="upload-label">Language · 发帖语言（决定字幕方向）</div>
                    <select class="upload-select" id="upload-lang" onchange="App.onUploadLangChange()">
                        <option value="zh">中文帖 → 自动配英文字幕</option>
                        <option value="en">English → 自动配中文字幕</option>
                    </select>
                </div>

                <div>
                    <div class="upload-label">Type · 内容类型</div>
                    <select class="upload-select" id="upload-kind">${kindOptions}</select>
                </div>

                <div>
                    <div class="upload-label">Caption · 正文（可自写，也可用下方 AI 配文）</div>
                    <textarea class="upload-textarea" id="upload-text" rows="3" placeholder="${isIntl ? 'Tell us about the Chinese topic you love, or ask for travel / business help…' : '例：我家在贵州肇兴侗寨，鼓楼下的侗族大歌是世界上最美的和声…'}"></textarea>
                </div>

                <button class="ai-generate-btn" id="ai-generate-btn" onclick="App.generateAICaption()">
                    ✨ AI Auto-Caption · AI智能配文
                </button>
                <div class="ai-caption-preview" id="ai-caption-preview" style="display:none">
                    <div class="ai-caption-label">✨ AI Generated Caption</div>
                    <div class="ai-caption-cn" id="ai-cn"></div>
                    <div class="ai-caption-pinyin" id="ai-pinyin"></div>
                    <div class="ai-caption-en" id="ai-en"></div>
                    <div class="ai-caption-slang" id="ai-slang"></div>
                </div>

                <button class="upload-submit-btn" onclick="App.submitUpload()">提交审核 · Submit for Review</button>
            </div>
        `;

        modal.classList.add('show');
        this._uploadMedia = null;
        this._aiCaption = null;
    },

    // 选择真实照片 / 视频（本地预览，演示版不真实上传）
    pickMediaFile(input) {
        const f = input.files && input.files[0];
        if (!f) return;
        const isVideo = f.type.startsWith('video/');
        const preview = document.getElementById('upload-preview');
        const emoji = document.getElementById('upload-photo-emoji');
        const text = document.getElementById('upload-photo-text');
        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target.result;
            if (!isVideo && dataUrl.length < 800 * 1024) {
                // 小图片可存 dataURL，发布后直接显示真实照片
                this._uploadMedia = { name: f.name, dataUrl, isVideo: false };
                preview.innerHTML = `<img src="${dataUrl}" class="upload-preview-img" alt="preview">`;
            } else {
                this._uploadMedia = { name: f.name, dataUrl: null, isVideo };
                preview.innerHTML = isVideo
                    ? `<video src="${dataUrl}" class="upload-preview-img" controls muted></video><div class="upload-preview-note">🎬 视频仅本地预览（演示版不真实上传存储）</div>`
                    : `<img src="${dataUrl}" class="upload-preview-img" alt="preview"><div class="upload-preview-note">🖼️ 图片已本地预览（演示版不真实上传存储）</div>`;
            }
            emoji.textContent = isVideo ? '🎬' : '🖼️';
            text.innerHTML = `已选择：<b>${esc(f.name)}</b><br><small>点击可重新选择</small>`;
            document.getElementById('upload-photo-area').classList.add('has-photo');
        };
        reader.readAsDataURL(f);
    },

    onUploadLangChange() {
        this._aiCaption = null;
        const pv = document.getElementById('ai-caption-preview');
        if (pv) pv.style.display = 'none';
    },

    generateAICaption() {
        const btn = document.getElementById('ai-generate-btn');
        const lang = document.getElementById('upload-lang').value;
        btn.classList.add('generating');
        btn.disabled = true;
        btn.textContent = '🤖 AI is thinking…';

        setTimeout(() => {
            const template = AI_CAPTION_TEMPLATES[Math.floor(Math.random() * AI_CAPTION_TEMPLATES.length)];
            const pv = document.getElementById('ai-caption-preview');
            pv.style.display = 'block';
            document.getElementById('ai-cn').textContent = template.cn;
            document.getElementById('ai-pinyin').textContent = template.pinyin;
            document.getElementById('ai-en').textContent = template.en;
            document.getElementById('ai-slang').textContent = '🔥 ' + template.slang;

            this._aiCaption = template;
            if (lang === 'en') {
                document.getElementById('upload-text').value = template.en;
            }

            btn.classList.remove('generating');
            btn.disabled = false;
            btn.textContent = '✨ 重新生成 · Regenerate';
        }, 1200);
    },

    submitUpload() {
        if (!Auth.isLoggedIn() || Auth.isAdmin()) return;

        const text = document.getElementById('upload-text').value.trim();
        if (!text && !this._aiCaption) {
            this.showToast('请写点内容，或使用 AI 智能配文');
            return;
        }

        const city = document.getElementById('upload-city').value;
        const tag = document.getElementById('upload-tag').value;
        const lang = document.getElementById('upload-lang').value;
        const kind = document.getElementById('upload-kind').value;
        const cityEnMap = {
            '北京':'Beijing','上海':'Shanghai','广州':'Guangzhou','深圳':'Shenzhen',
            '成都':'Chengdu','重庆':'Chongqing','杭州':'Hangzhou','西安':'Xi\'an',
            '武汉':'Wuhan','长沙':'Changsha','南京':'Nanjing','苏州':'Suzhou',
            '天津':'Tianjin','哈尔滨':'Harbin','沈阳':'Shenyang','青岛':'Qingdao',
            '厦门':'Xiamen','昆明':'Kunming','大连':'Dalian','三亚':'Sanya',
            '拉萨':'Lhasa','乌鲁木齐':'Urumqi','呼和浩特':'Hohhot','其他':'China'
        };
        const roleInfo = Auth.roleInfo(Auth.currentUser.role);
        const emojis = ['🏙️','🌆','🌃','🏞️','🌅','🌄','🏛️','🏯','🎡','🏮','🎆','🐼','🍜','🧋','🚄'];
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
        ];

        // 组装双语字段
        let cn = '', pinyin = '', en = '', slang = '';
        if (this._aiCaption) {
            cn = this._aiCaption.cn; pinyin = this._aiCaption.pinyin;
            en = this._aiCaption.en; slang = this._aiCaption.slang;
        }
        if (lang === 'zh') {
            if (text && !cn) { cn = text; en = Community.zhToEn(text); }
        } else {
            en = text || en;
            cn = cn || Community.enToZh(en);
        }

        const newItem = {
            id: 'u' + Date.now(),
            city, cityEn: cityEnMap[city] || 'China',
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            gradient: gradients[Math.floor(Math.random() * gradients.length)],
            cn, pinyin: pinyin || '', en: en || '', slang: slang || '',
            tag, kind, lang,
            author: Auth.currentUser.name,
            authorFlag: roleInfo.flag,
            time: 'just now',
            likes: 0,
            text,
            mediaName: this._uploadMedia ? this._uploadMedia.name : '',
            mediaData: this._uploadMedia && !this._uploadMedia.isVideo ? this._uploadMedia.dataUrl : null
        };

        Community.submitForReview(newItem);
        this._aiCaption = null;
        this._uploadMedia = null;

        document.getElementById('upload-modal').classList.remove('show');
        this.switchExploreTab(this.exploreTab === 'talk' ? 'talk' : 'feed');
    },

    closeUploadModal(event) {
        if (event && event.target !== document.getElementById('upload-modal')) return;
        document.getElementById('upload-modal').classList.remove('show');
    },

    // ===== Daily Sentence =====
    getDailySentence() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        return DAILY_SENTENCES[dayOfYear % DAILY_SENTENCES.length];
    },

    // ===== Theme =====
    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    },

    // ===== Toast =====
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
};

// ===== Progress Tracking (localStorage) =====
const Progress = {
    key: 'easytochina_progress',

    getData() {
        try {
            return JSON.parse(localStorage.getItem(this.key)) || {
                learned: {},
                bookmarked: [],
                streak: 0,
                lastActiveDate: null
            };
        } catch {
            return { learned: {}, bookmarked: [], streak: 0, lastActiveDate: null };
        }
    },

    saveData(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    },

    markSentenceLearned(scenarioId, index) {
        const data = this.getData();
        if (!data.learned[scenarioId]) data.learned[scenarioId] = [];
        if (!data.learned[scenarioId].includes(index)) {
            data.learned[scenarioId].push(index);
        }
        this.updateStreak(data);
        this.saveData(data);
    },

    isSentenceLearned(scenarioId, index) {
        const data = this.getData();
        return data.learned[scenarioId]?.includes(index) || false;
    },

    toggleBookmark(scenarioId, index) {
        const data = this.getData();
        const key = `${scenarioId}:${index}`;
        const existing = data.bookmarked.findIndex(b => b.scenarioId === scenarioId && b.index === index);
        
        if (existing >= 0) {
            data.bookmarked.splice(existing, 1);
            this.saveData(data);
            return false;
        } else {
            data.bookmarked.push({ scenarioId, index });
            this.saveData(data);
            return true;
        }
    },

    isBookmarked(scenarioId, index) {
        const data = this.getData();
        return data.bookmarked.some(b => b.scenarioId === scenarioId && b.index === index);
    },

    getBookmarked() {
        return this.getData().bookmarked || [];
    },

    getScenarioProgress(scenarioId) {
        const data = this.getData();
        const learned = data.learned[scenarioId]?.length || 0;
        const scenario = SCENARIOS.find(s => s.id === scenarioId);
        if (!scenario) return 0;
        return Math.round((learned / scenario.sentences.length) * 100);
    },

    getStats() {
        const data = this.getData();
        let learned = 0;
        Object.values(data.learned).forEach(arr => learned += arr.length);
        
        return {
            learned,
            bookmarked: data.bookmarked?.length || 0,
            streak: data.streak || 0
        };
    },

    updateStreak(data) {
        const today = new Date().toDateString();
        if (data.lastActiveDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (data.lastActiveDate === yesterday) {
                data.streak = (data.streak || 0) + 1;
            } else {
                data.streak = 1;
            }
            data.lastActiveDate = today;
        }
    },

    reset() {
        if (confirm('Reset all progress? This cannot be undone.')) {
            localStorage.removeItem(this.key);
            App.navigate('progress');
            App.showToast('Progress reset');
        }
    }
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Load theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Init auth (renders topbar user area)
    Auth.init();

    // Register service worker for offline use
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    // Render home page
    App.navigate('home');
    I18n.refreshStatic();

    // 点击页面其他区域关闭语言菜单
    document.addEventListener('click', (e) => {
        const wrap = document.querySelector('.lang-toggle-wrap');
        if (wrap && !wrap.contains(e.target)) App.closeLangMenu();
    });

    // 显示当前版本号（页脚）
    const verEl = document.getElementById('app-version');
    if (verEl) verEl.textContent = '1.3.2';
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        App.closeModal();
        App.closeUploadModal();
    }
});

// Global wrappers for HTML onclick handlers
function navigate(page) { App.navigate(page); }
function toggleTheme() { App.toggleTheme(); }
function closeModal(event) { App.closeModal(event); }
function closeUploadModal(event) { App.closeUploadModal(event); }
