/**
 * EasyToChina (ETC) - Internationalization
 * 支持：中文(zh)、English(en)、Русский(ru)、العربية(ar)、한국어(ko)
 * 切换后所有英文介绍文案会变为对应语言；阿拉伯语自动启用 RTL 布局。
 */
const I18N_DICT = {
    zh: {
        // 顶栏
        topbarLogin: '登录',
        topbarUserRole: '用户',
        topbarLogoutTitle: '退出登录',

        // 登录弹窗
        loginTitle: '🌏 加入 ETC · 易通中国',
        loginSub: '选择语言与身份，测试页无需真实密码',
        roleCn: '国内用户',
        roleCnDesc: '上传家乡照片 / 视频<br>让世界看见真实中国',
        roleIntl: '海外用户',
        roleIntlDesc: '发布旅游 / 商务计划与需求<br>获得中方帮助与交流',
        roleAdmin: '平台管理员',
        roleAdminDesc: 'AI 初审 + 人工复审<br>双重审核后台',
        roleHintCn: '中文界面 → 推荐「国内用户」：上传家乡照片 / 视频，双语展示供全球学习',
        roleHintIntl: '外语界面 → 推荐「海外用户」：发布旅游 / 商务计划或需求，中方为你解答',
        nicknamePlaceholder: '你的昵称 / Nickname（不填则随机）',
        quickDemo: '快速体验：',
        enterBtn: '进入平台 · Enter',
        loginHint: '演示说明：所有内容经 AI 初审 + 人工复审两轮审核后发布；正式版将接入真实账号体系与内容安全 API。',
        langLabel: '语言',

        // 首页社区横幅
        communityTitle: '加入 ETC，让世界看见你的家乡',
        communityCnLine: '🇨🇳 国内用户：拍摄上传家乡照片 / 视频，吸引海外粉丝观看互动',
        communityIntlLine: '🌍 海外用户：发布旅游 / 商务计划与需求，获得中方帮助与交流',
        btnLogin: '注册 / 登录',
        btnIntlTry: '🌍 以海外用户体验',
        btnPublish: '📤 去发布',
        btnViewFeed: '📱 看 China Today',

        // 上传弹窗
        uploadGateTitle: '请先注册 / 登录',
        uploadGateAdminTitle: '管理员不能发帖',
        uploadGateCn: '注册后即可拍摄上传家乡照片/视频。海外用户可发起中国话题讨论或来华求助。',
        uploadGateIntl: '登录后即可发起话题讨论、发布来华旅游/商务求助。',
        uploadNotice: '内容将先经 AI 初审，再转人工复审，通过后才会对外展示。',
        uploadNoticeCn: '国内用户：上传家乡照片/视频；海外用户：发起话题或求助。',
        uploadTabCn: '国内用户',
        uploadTabIntl: '海外用户',
        uploadLabelType: '发布类型',
        uploadLabelLang: '内容语言',
        uploadLabelCategory: '分类',
        uploadLabelText: '文字内容',
        uploadLabelMedia: '照片 / 视频',
        uploadPlaceholder: '分享你想说的…支持中文或英文',
        uploadBtnSelect: '选择文件',
        uploadBtnSubmit: '提交发布',

        // Explore 子页
        feedHeaderTitle: '📱 China Today',
        feedHeaderSub: '来自全国各地用户的真实分享，看看今天的中国是什么样子。',
        talkHeaderTitle: '💬 Talk & Help · 话题与求助',
        talkHeaderSub: '在这里发起中国话题讨论，或发布来华旅游 / 商务求助。',
        exploreTabCities: '城市',
        reviewGateTitle: '🛡️ 双重审核后台',
        reviewGateDesc: '当前未登录或身份非管理员。点击下方按钮，以管理员身份体验人工复审流程。',
        reviewFlowTitle: '审核流程',
        reviewFlowText: 'AI 初审 → 人工复审 → 发布',
        reviewGroupAi: '🤖 AI 初审中',
        reviewGroupHuman: '👁️ 待人工复审',
        reviewGroupPublished: '✅ 已发布',
        reviewGroupBlocked: '⛔ 已拦截',
        myPostsHint: '内容需经双重审核后才能展示给所有人。',

        // Quick Start
        qsFirst48: 'First 48 Hours',
        qsFirst48Desc: 'Survival Chinese for arrival',
        qsFood: 'Food & Dining',
        qsFoodDesc: 'Order like a local',
        qsBusiness: 'Business Basics',
        qsBusinessDesc: 'Make a great first impression',
        qsExplore: 'Explore China',
        qsExploreDesc: '23 cities, culture & real-life photos',
        qsPay: 'Mobile Pay',
        qsPayDesc: 'WeChat Pay & Alipay',
        qsGettingAround: 'Getting Around',
        qsGettingAroundDesc: 'Taxi, metro & directions',
        startHere: 'Start here →',
        explore: 'Explore →',
        essential: 'Essential →',
        viewAll: 'View all →',
        sectionQuickStart: 'Quick Start',
        sectionWhy: 'Why This App is Different',
        sectionAll: 'All Scenarios',

        // Toast
        toastWelcomeCn: '欢迎！去上传你的家乡吧',
        toastWelcomeIntl: 'Welcome! 试试发起话题或求助',
        toastWelcomeAdmin: '已进入管理员视角',
        toastSubmitted: '已提交，AI 初审中…',
        toastAiPass: 'AI 初审通过，字幕已生成，已转人工复审',
        toastAiBlock: '内容命中违禁规则，已被 AI 拦截下架',
        toastPublished: '人工复审通过，内容已发布',

        // Misc
        back: '返回',
        close: '关闭',
        cancel: '取消',
        save: '保存',
        audio: '音频',
        listen: '聆听',

        navHome: '首页',
        navLearn: '学习',
        navExplore: '探索',
        navPractice: '练习',
        navMe: '我的',

        // 我的页面
        pageMeTitle: '我的',
        termsTitle: '使用权益与免责条款',
        termsText: 'ETC 为汉语学习与交流演示平台。用户上传内容须经 AI 初审与人工复审后方可公开；禁止发布违法、色情、暴力、赌博、政治敏感等内容。平台保留对违规内容进行下架、限流及封禁账号的权利。',
        myProgressTitle: '学习进度',
        mySubmissionsTitle: '我的内容',
        myPublished: '已发布',
        myPending: '审核中',
        myRejected: '已拒绝',
        myDrafts: '本地草稿',
        myEmpty: '暂无内容',
        languageSettings: '语言设置',
        currentLang: '当前语言',
        changeLangHint: '切换语言将同时调整界面文字与社区角色推荐。',
        logoutBtn: '退出登录',
        resetProgressBtn: '重置学习进度',
        aboutApp: '关于易通中国'
    },

    en: {
        topbarLogin: 'Login',
        topbarUserRole: 'User',
        topbarLogoutTitle: 'Logout',

        loginTitle: '🌏 Join ETC · EasyToChina',
        loginSub: 'Choose your language & role. No real password needed for the demo.',
        roleCn: 'China User',
        roleCnDesc: 'Post hometown photos / videos<br>Show the real China to the world',
        roleIntl: 'Global User',
        roleIntlDesc: 'Post travel / business plans & needs<br>Get help from local Chinese',
        roleAdmin: 'Moderator',
        roleAdminDesc: 'AI + human review<br>Moderation dashboard',
        roleHintCn: 'Chinese UI → "China User": share hometown photos/videos, bilingual for global learners',
        roleHintIntl: 'Foreign UI → "Global User": post your travel/business plans, Chinese locals will answer',
        nicknamePlaceholder: 'Nickname (random if empty)',
        quickDemo: 'Quick demo:',
        enterBtn: 'Enter Platform',
        loginHint: 'Demo note: all content goes through two-round review (AI + human) before publishing. The live version will use real accounts and content safety APIs.',
        langLabel: 'Language',

        communityTitle: 'Join ETC, let the world see your hometown',
        communityCnLine: '🇨🇳 China users: upload photos/videos of your hometown and interact with global viewers',
        communityIntlLine: '🌍 Global users: post your travel/business plans & needs, get help from Chinese locals',
        btnLogin: 'Register / Login',
        btnIntlTry: '🌍 Try as global user',
        btnPublish: '📤 Publish',
        btnViewFeed: '📱 View China Today',

        uploadGateTitle: 'Please register / login',
        uploadGateAdminTitle: 'Moderators cannot post',
        uploadGateCn: 'Register to upload hometown photos/videos. Global users can start topics or ask for help.',
        uploadGateIntl: 'Login to start topics or ask travel/business questions.',
        uploadNotice: 'Content is reviewed by AI first, then by a human moderator before going public.',
        uploadNoticeCn: 'China users: upload hometown photos/videos. Global users: start topics or ask questions.',
        uploadTabCn: 'China User',
        uploadTabIntl: 'Global User',
        uploadLabelType: 'Post type',
        uploadLabelLang: 'Language',
        uploadLabelCategory: 'Category',
        uploadLabelText: 'Text',
        uploadLabelMedia: 'Photo / Video',
        uploadPlaceholder: 'Share what you want to say… in Chinese or English',
        uploadBtnSelect: 'Choose file',
        uploadBtnSubmit: 'Submit',

        feedHeaderTitle: '📱 China Today',
        feedHeaderSub: 'Real posts from users across China. See what China looks like today.',
        talkHeaderTitle: '💬 Talk & Help',
        talkHeaderSub: 'Start discussions about China or ask for travel/business help.',
        exploreTabCities: 'Cities',
        reviewGateTitle: '🛡️ Moderation Dashboard',
        reviewGateDesc: 'You are not logged in or not a moderator. Click below to enter as a moderator.',
        reviewFlowTitle: 'Review flow',
        reviewFlowText: 'AI review → Human review → Published',
        reviewGroupAi: '🤖 AI Reviewing',
        reviewGroupHuman: '👁️ Pending Human Review',
        reviewGroupPublished: '✅ Published',
        reviewGroupBlocked: '⛔ Blocked',
        myPostsHint: 'Content is shown to everyone only after double review.',

        qsFirst48: 'First 48 Hours',
        qsFirst48Desc: 'Survival Chinese for arrival',
        qsFood: 'Food & Dining',
        qsFoodDesc: 'Order like a local',
        qsBusiness: 'Business Basics',
        qsBusinessDesc: 'Make a great first impression',
        qsExplore: 'Explore China',
        qsExploreDesc: '23 cities, culture & real-life photos',
        qsPay: 'Mobile Pay',
        qsPayDesc: 'WeChat Pay & Alipay',
        qsGettingAround: 'Getting Around',
        qsGettingAroundDesc: 'Taxi, metro & directions',
        startHere: 'Start here →',
        explore: 'Explore →',
        essential: 'Essential →',
        viewAll: 'View all →',
        sectionQuickStart: 'Quick Start',
        sectionWhy: 'Why This App is Different',
        sectionAll: 'All Scenarios',

        toastWelcomeCn: 'Welcome! Upload your hometown',
        toastWelcomeIntl: 'Welcome! Start a topic or ask for help',
        toastWelcomeAdmin: 'Entered moderator view',
        toastSubmitted: 'Submitted. AI review in progress…',
        toastAiPass: 'AI review passed, subtitles generated, sent to human review',
        toastAiBlock: 'Content violated rules and was blocked by AI',
        toastPublished: 'Human review passed, content published',

        back: 'Back',
        close: 'Close',
        cancel: 'Cancel',
        save: 'Save',
        audio: 'Audio',
        listen: 'Listen',

        navHome: 'Home',
        navLearn: 'Learn',
        navExplore: 'Explore',
        navPractice: 'Practice',
        navMe: 'Me',

        // Me page
        pageMeTitle: 'Me',
        termsTitle: 'Terms & Disclaimer',
        termsText: 'ETC is a demo platform for Chinese learning and exchange. Uploaded content is reviewed by AI and human moderators before going public. Illegal, pornographic, violent, gambling, or politically sensitive content is prohibited. The platform reserves the right to remove content and suspend accounts.',
        myProgressTitle: 'Learning Progress',
        mySubmissionsTitle: 'My Submissions',
        myPublished: 'Published',
        myPending: 'Under Review',
        myRejected: 'Rejected',
        myDrafts: 'Local Drafts',
        myEmpty: 'Nothing here yet',
        languageSettings: 'Language',
        currentLang: 'Current language',
        changeLangHint: 'Changing language updates the interface and recommended community role.',
        logoutBtn: 'Log out',
        resetProgressBtn: 'Reset progress',
        aboutApp: 'About EasyToChina'
    },

    ru: {
        topbarLogin: 'Войти',
        topbarUserRole: 'Пользователь',
        topbarLogoutTitle: 'Выйти',

        loginTitle: '🌏 Присоединяйтесь к ETC · EasyToChina',
        loginSub: 'Выберите язык и роль. Для демо пароль не нужен.',
        roleCn: 'Пользователь из Китая',
        roleCnDesc: 'Загружайте фото/видео родного города<br>Покажите миру настоящий Китай',
        roleIntl: 'Международный пользователь',
        roleIntlDesc: 'Публикуйте туристические/деловые планы<br>Получайте помощь от китайцев',
        roleAdmin: 'Модератор',
        roleAdminDesc: 'AI + ручная проверка<br>Панель модерации',
        roleHintCn: 'Китайский интерфейс → «Пользователь из Китая»: делитесь фото/видео, двуязычно',
        roleHintIntl: 'Иностранный интерфейс → «Международный пользователь»: публикуйте планы поездок/бизнеса',
        nicknamePlaceholder: 'Ник (случайный, если пусто)',
        quickDemo: 'Быстрый вход:',
        enterBtn: 'Войти на платформу',
        loginHint: 'Демо: весь контент проходит двойную проверку (AI + человек) перед публикацией. В продакшене — реальные аккаунты и API безопасности.',
        langLabel: 'Язык',

        communityTitle: 'Присоединяйтесь к ETC — покажите миру свой город',
        communityCnLine: '🇨🇳 Китайские пользователи: загружайте фото/видео родного города и общайтесь с миром',
        communityIntlLine: '🌍 Международные пользователи: публикуйте планы поездок/бизнеса, получайте помощь китайцев',
        btnLogin: 'Регистрация / Вход',
        btnIntlTry: '🌍 Войти как международный пользователь',
        btnPublish: '📤 Опубликовать',
        btnViewFeed: '📱 China Today',

        uploadGateTitle: 'Пожалуйста, зарегистрируйтесь / войдите',
        uploadGateAdminTitle: 'Модераторы не могут публиковать',
        uploadGateCn: 'Зарегистрируйтесь, чтобы загружать фото/видео родного города. Международные пользователи могут создавать темы.',
        uploadGateIntl: 'Войдите, чтобы создавать темы или задавать вопросы по поездке/бизнесу.',
        uploadNotice: 'Контент сначала проверяется AI, затем модератором, и только потом публикуется.',
        uploadNoticeCn: 'Китайские пользователи: фото/видео города. Международные: темы или вопросы.',
        uploadTabCn: 'Китайский пользователь',
        uploadTabIntl: 'Международный пользователь',
        uploadLabelType: 'Тип публикации',
        uploadLabelLang: 'Язык',
        uploadLabelCategory: 'Категория',
        uploadLabelText: 'Текст',
        uploadLabelMedia: 'Фото / Видео',
        uploadPlaceholder: 'Поделитесь мыслями… на китайском или английском',
        uploadBtnSelect: 'Выбрать файл',
        uploadBtnSubmit: 'Опубликовать',

        feedHeaderTitle: '📱 China Today',
        feedHeaderSub: 'Реальные публикации пользователей из Китая. Увидьте настоящий Китай.',
        talkHeaderTitle: '💬 Talk & Help',
        talkHeaderSub: 'Обсуждайте Китай или задавайте вопросы по поездке и бизнесу.',
        exploreTabCities: 'Города',
        reviewGateTitle: '🛡️ Панель модерации',
        reviewGateDesc: 'Вы не вошли или не модератор. Нажмите ниже, чтобы войти как модератор.',
        reviewFlowTitle: 'Процесс проверки',
        reviewFlowText: 'AI проверка → Ручная проверка → Публикация',
        reviewGroupAi: '🤖 Проверка AI',
        reviewGroupHuman: '👁️ Ожидает ручной проверки',
        reviewGroupPublished: '✅ Опубликовано',
        reviewGroupBlocked: '⛔ Заблокировано',
        myPostsHint: 'Контент виден всем только после двойной проверки.',

        qsFirst48: 'Первые 48 часов',
        qsFirst48Desc: 'Выживание в Китае после прилёта',
        qsFood: 'Еда и рестораны',
        qsFoodDesc: 'Заказывайте как местный',
        qsBusiness: 'Бизнес-этикет',
        qsBusinessDesc: 'Хорошее первое впечатление',
        qsExplore: 'Исследуйте Китай',
        qsExploreDesc: '23 города, культура и реальные фото',
        qsPay: 'Мобильные платежи',
        qsPayDesc: 'WeChat Pay и Alipay',
        qsGettingAround: 'Передвижение',
        qsGettingAroundDesc: 'Такси, метро и маршруты',
        startHere: 'Начать →',
        explore: 'Смотреть →',
        essential: 'Необходимо →',
        viewAll: 'Смотреть все →',
        sectionQuickStart: 'Быстрый старт',
        sectionWhy: 'Чем это приложение отличается',
        sectionAll: 'Все сценарии',

        toastWelcomeCn: 'Добро пожаловать! Загрузите свой город',
        toastWelcomeIntl: 'Добро пожаловать! Создайте тему или задайте вопрос',
        toastWelcomeAdmin: 'Вход в панель модерации',
        toastSubmitted: 'Отправлено. AI проверяет…',
        toastAiPass: 'AI проверка пройдена, субтитры созданы, отправлено на ручную проверку',
        toastAiBlock: 'Контент нарушает правила и заблокирован AI',
        toastPublished: 'Ручная проверка пройдена, контент опубликован',

        back: 'Назад',
        close: 'Закрыть',
        cancel: 'Отмена',
        save: 'Сохранить',
        audio: 'Аудио',
        listen: 'Слушать',

        navHome: 'Главная',
        navLearn: 'Учиться',
        navExplore: 'Исследовать',
        navPractice: 'Практика',
        navMe: 'Профиль',

        // Страница профиля
        pageMeTitle: 'Профиль',
        termsTitle: 'Условия и отказ от ответственности',
        termsText: 'ETC — демо-платформа для изучения китайского языка и обмена. Контент проходит проверку AI и модераторами перед публикацией. Запрещён незаконный, порнографический, насильственный, азартный или политически чувствительный контент.',
        myProgressTitle: 'Прогресс обучения',
        mySubmissionsTitle: 'Мои публикации',
        myPublished: 'Опубликовано',
        myPending: 'На проверке',
        myRejected: 'Отклонено',
        myDrafts: 'Черновики',
        myEmpty: 'Пока ничего нет',
        languageSettings: 'Язык',
        currentLang: 'Текущий язык',
        changeLangHint: 'Смена языка обновит интерфейс и рекомендуемую роль в сообществе.',
        logoutBtn: 'Выйти',
        resetProgressBtn: 'Сбросить прогресс',
        aboutApp: 'О EasyToChina'
    },

    ar: {
        topbarLogin: 'تسجيل الدخول',
        topbarUserRole: 'المستخدم',
        topbarLogoutTitle: 'تسجيل الخروج',

        loginTitle: '🌏 انضم إلى ETC · EasyToChina',
        loginSub: 'اختر لغتك ودورك. لا تحتاج كلمة مرور حقيقية في النسخة التجريبية.',
        roleCn: 'مستخدم صيني',
        roleCnDesc: 'ارفع صور/فيديوهات مدينتك<br>أظهر الصين الحقيقية للعالم',
        roleIntl: 'مستخدم عالمي',
        roleIntlDesc: 'انشر خطط السفر/الأعمال واحتياجاتك<br>احصل على مساعدة من الصينيين',
        roleAdmin: 'المشرف',
        roleAdminDesc: 'مراجعة AI + بشرية<br>لوحة الإشراف',
        roleHintCn: 'واجهة صينية → «مستخدم صيني»: شارك صور/فيديوهات مدينتك',
        roleHintIntl: 'واجهة أجنبية → «مستخدم عالمي»: انشر خطط سفرك أو أعمالك',
        nicknamePlaceholder: 'الاسم المستعار (عشوائي إذا تركته فارغاً)',
        quickDemo: 'دخول سريع:',
        enterBtn: 'دخول المنصة',
        loginHint: 'ملاحظة تجريبية: كل المحتوى يمر بمراجعة مزدوجة (AI + بشري) قبل النشر. النسخة النهائية ستستخدم حسابات حقيقية وAPI أمان.',
        langLabel: 'اللغة',

        communityTitle: 'انضم إلى ETC، ودع العالم يرى مدينتك',
        communityCnLine: '🇨🇳 المستخدمون الصينيون: ارفعوا صور/فيديوهات مدينتكم وتفاعلوا مع الجمهور العالمي',
        communityIntlLine: '🌍 المستخدمون العالميون: انشروا خطط السفر/الأعمال واحصلوا على مساعدة الصينيين',
        btnLogin: 'التسجيل / الدخول',
        btnIntlTry: '🌍 جرب كمستخدم عالمي',
        btnPublish: '📤 نشر',
        btnViewFeed: '📱 China Today',

        uploadGateTitle: 'يرجى التسجيل / تسجيل الدخول',
        uploadGateAdminTitle: 'لا يمكن للمشرفين النشر',
        uploadGateCn: 'سجّل لرفع صور/فيديوهات مدينتك. يمكن للمستخدمين العالميين بدء مواضيع أو طلب المساعدة.',
        uploadGateIntl: 'سجّل الدخول لبدء مواضيع أو طرح أسئلة عن السفر/الأعمال.',
        uploadNotice: 'يتم مراجعة المحتوى بواسطة AI أولاً، ثم مشرف بشري قبل النشر.',
        uploadNoticeCn: 'المستخدمون الصينيون: ارفعوا صور/فيديوهات المدينة. العالميون: ابدأوا مواضيع أو اسألوا.',
        uploadTabCn: 'مستخدم صيني',
        uploadTabIntl: 'مستخدم عالمي',
        uploadLabelType: 'نوع المنشور',
        uploadLabelLang: 'اللغة',
        uploadLabelCategory: 'الفئة',
        uploadLabelText: 'النص',
        uploadLabelMedia: 'صورة / فيديو',
        uploadPlaceholder: 'شارك ما تريد قوله… بالصينية أو الإنجليزية',
        uploadBtnSelect: 'اختيار ملف',
        uploadBtnSubmit: 'إرسال',

        feedHeaderTitle: '📱 China Today',
        feedHeaderSub: 'منشورات حقيقية من مستخدمين في جميع أنحاء الصين. شاهد الصين الحقيقية.',
        talkHeaderTitle: '💬 Talk & Help',
        talkHeaderSub: 'ابدأ مناقشات حول الصين أو اطلب مساعدة في السفر/الأعمال.',
        exploreTabCities: 'مدن',
        reviewGateTitle: '🛡️ لوحة الإشراف',
        reviewGateDesc: 'لم تقم بتسجيل الدخول أو لست مشرفاً. انقر أدناه للدخول كمشرف.',
        reviewFlowTitle: 'مسار المراجعة',
        reviewFlowText: 'مراجعة AI → مراجعة بشرية → نشر',
        reviewGroupAi: '🤖 قيد مراجعة AI',
        reviewGroupHuman: '👁️ بانتظار المراجعة البشرية',
        reviewGroupPublished: '✅ تم النشر',
        reviewGroupBlocked: '⛔ محظور',
        myPostsHint: 'يظهر المحتوى للجميع فقط بعد المراجعة المزدوجة.',

        qsFirst48: 'أول 48 ساعة',
        qsFirst48Desc: 'الصينية الأساسية للوصول',
        qsFood: 'الطعام والمطاعم',
        qsFoodDesc: 'اطلب كالمحليين',
        qsBusiness: 'أساسيات الأعمال',
        qsBusinessDesc: 'انطباع أول ممتاز',
        qsExplore: 'استكشف الصين',
        qsExploreDesc: '23 مدينة، ثقافة وصور حقيقية',
        qsPay: 'الدفع الإلكتروني',
        qsPayDesc: 'WeChat Pay و Alipay',
        qsGettingAround: 'التنقل',
        qsGettingAroundDesc: 'التاكسي، المترو والاتجاهات',
        startHere: 'ابدأ هنا →',
        explore: 'استكشف →',
        essential: 'أساسي →',
        viewAll: 'عرض الكل →',
        sectionQuickStart: 'البداية السريعة',
        sectionWhy: 'ما يميز هذا التطبيق',
        sectionAll: 'جميع السيناريوهات',

        toastWelcomeCn: 'مرحباً! ارفع مدينتك',
        toastWelcomeIntl: 'مرحباً! ابدأ موضوعاً أو اطلب المساعدة',
        toastWelcomeAdmin: 'تم الدخول إلى لوحة الإشراف',
        toastSubmitted: 'تم الإرسال. مراجعة AI قيد التقدم…',
        toastAiPass: 'اجتازت مراجعة AI، تم إنشاء الترجمة، أُرسلت للمراجعة البشرية',
        toastAiBlock: 'المحتوى ينتهك القواعد وتم حظره بواسطة AI',
        toastPublished: 'اجتازت المراجعة البشرية، تم نشر المحتوى',

        back: 'رجوع',
        close: 'إغلاق',
        cancel: 'إلغاء',
        save: 'حفظ',
        audio: 'صوت',
        listen: 'استمع',

        navHome: 'الرئيسية',
        navLearn: 'تعلم',
        navExplore: 'استكشف',
        navPractice: 'تمرن',
        navMe: 'أنا',

        // صفحتي
        pageMeTitle: 'أنا',
        termsTitle: 'الشروط وإخلاء المسؤولية',
        termsText: 'ETC منصة تجريبية لتعلم الصينية والتواصل. يتم مراجعة المحتوى بواسطة AI وموظفين قبل النشر. المحتوى غير القانوني أو الإباحي أو العنيف أو القمار أو السياسي الحساس ممنوع.',
        myProgressTitle: 'تقدم التعلم',
        mySubmissionsTitle: 'منشوراتي',
        myPublished: 'منشور',
        myPending: 'قيد المراجعة',
        myRejected: 'مرفوض',
        myDrafts: 'مسودات محلية',
        myEmpty: 'لا يوجد شيء بعد',
        languageSettings: 'اللغة',
        currentLang: 'اللغة الحالية',
        changeLangHint: 'تغيير اللغة يحدّث الواجهة والدور الموصى به في المجتمع.',
        logoutBtn: 'تسجيل الخروج',
        resetProgressBtn: 'إعادة تعيين التقدم',
        aboutApp: 'حول EasyToChina'
    },

    ko: {
        topbarLogin: '로그인',
        topbarUserRole: '사용자',
        topbarLogoutTitle: '로그아웃',

        loginTitle: '🌏 ETC · EasyToChina 참여하기',
        loginSub: '언어와 역할을 선택하세요. 데모에서는 비밀번호가 필요 없습니다.',
        roleCn: '중국 사용자',
        roleCnDesc: '고향 사진/영상을 업로드하세요<br>진짜 중국을 세계에 보여주세요',
        roleIntl: '글로벌 사용자',
        roleIntlDesc: '여행/비즈니스 계획과 필요를 게시하세요<br>중국 현지인의 도움을 받으세요',
        roleAdmin: '관리자',
        roleAdminDesc: 'AI + 인간 검토<br>검토 대시보드',
        roleHintCn: '중국어 UI → «중국 사용자»: 고향 사진/영상 공유 (이중 언어)',
        roleHintIntl: '외국어 UI → «글로벌 사용자»: 여행/비즈니스 계획을 게시하세요',
        nicknamePlaceholder: '닉네임 (비워두면 랜덤)',
        quickDemo: '빠른 체험:',
        enterBtn: '플랫폼 입장',
        loginHint: '데모 안내: 모든 콘텐츠는 게시 전에 이중 검토(AI + 인간)를 거칩니다. 정식 버전에서는 실제 계정과 콘텐츠 안전 API를 사용합니다.',
        langLabel: '언어',

        communityTitle: 'ETC에 참여하여 전 세계에 고향을 보여주세요',
        communityCnLine: '🇨🇳 중국 사용자: 고향 사진/영상을 업로드하고 글로벌 시청자와 소통하세요',
        communityIntlLine: '🌍 글로벌 사용자: 여행/비즈니스 계획과 필요를 게시하고 중국 현지인의 도움을 받으세요',
        btnLogin: '회원가입 / 로그인',
        btnIntlTry: '🌍 글로벌 사용자로 체험',
        btnPublish: '📤 게시하기',
        btnViewFeed: '📱 China Today 보기',

        uploadGateTitle: '회원가입 / 로그인해 주세요',
        uploadGateAdminTitle: '관리자는 게시할 수 없습니다',
        uploadGateCn: '고향 사진/영상을 업로드하려면 회원가입하세요. 글로벌 사용자는 주제를 시작하거나 도움을 요청할 수 있습니다.',
        uploadGateIntl: '주제를 시작하거나 여행/비즈니스 질문을 하려면 로그인하세요.',
        uploadNotice: '콘텐츠는 AI 검토 후 인간 검토를 거쳐 공개됩니다.',
        uploadNoticeCn: '중국 사용자: 고향 사진/영상. 글로벌 사용자: 주제 시작 또는 질문.',
        uploadTabCn: '중국 사용자',
        uploadTabIntl: '글로벌 사용자',
        uploadLabelType: '게시 유형',
        uploadLabelLang: '언어',
        uploadLabelCategory: '카테고리',
        uploadLabelText: '텍스트',
        uploadLabelMedia: '사진 / 동영상',
        uploadPlaceholder: '중국어 또는 영어로 하고 싶은 말을 공유하세요…',
        uploadBtnSelect: '파일 선택',
        uploadBtnSubmit: '게시',

        feedHeaderTitle: '📱 China Today',
        feedHeaderSub: '중국 전역 사용자들의 실제 게시물. 오늘의 중국을 확인해 보세요.',
        talkHeaderTitle: '💬 Talk & Help',
        talkHeaderSub: '중국 관련 토론을 시작하거나 여행/비즈니스 도움을 요청하세요.',
        exploreTabCities: '도시',
        reviewGateTitle: '🛡️ 검토 대시보드',
        reviewGateDesc: '로그인하지 않았거나 관리자가 아닙니다. 아래를 클릭하여 관리자로 입장하세요.',
        reviewFlowTitle: '검토 흐름',
        reviewFlowText: 'AI 검토 → 인간 검토 → 게시',
        reviewGroupAi: '🤖 AI 검토 중',
        reviewGroupHuman: '👁️ 인간 검토 대기 중',
        reviewGroupPublished: '✅ 게시 완료',
        reviewGroupBlocked: '⛔ 차단됨',
        myPostsHint: '콘텐츠는 이중 검토를 통과한 후에야 모두에게 공개됩니다.',

        qsFirst48: '도착 후 48시간',
        qsFirst48Desc: '도착 초반 생존 중국어',
        qsFood: '음식과 식사',
        qsFoodDesc: '현지인처럼 주문하기',
        qsBusiness: '비즈니스 기본',
        qsBusinessDesc: '좋은 첫인상 남기기',
        qsExplore: '중국 탐험',
        qsExploreDesc: '23개 도시, 문화, 실제 사진',
        qsPay: '모바일 결제',
        qsPayDesc: 'WeChat Pay와 Alipay',
        qsGettingAround: '교통 이동',
        qsGettingAroundDesc: '택시, 지하철, 길 찾기',
        startHere: '시작하기 →',
        explore: '탐험하기 →',
        essential: '필수 →',
        viewAll: '전체 보기 →',
        sectionQuickStart: '빠른 시작',
        sectionWhy: '이 앱의 차별점',
        sectionAll: '모든 시나리오',

        toastWelcomeCn: '환영합니다! 고향을 업로드해 보세요',
        toastWelcomeIntl: '환영합니다! 주제를 시작하거나 도움을 요청해 보세요',
        toastWelcomeAdmin: '관리자 화면으로 입장했습니다',
        toastSubmitted: '제출되었습니다. AI 검토 중…',
        toastAiPass: 'AI 검토 통과, 자막 생성 완료, 인간 검토로 전달되었습니다',
        toastAiBlock: '콘텐츠가 규칙을 위반하여 AI에 의해 차단되었습니다',
        toastPublished: '인간 검토 통과, 콘텐츠가 게시되었습니다',

        back: '뒤로',
        close: '닫기',
        cancel: '취소',
        save: '저장',
        audio: '오디오',
        listen: '듣기',

        navHome: '홈',
        navLearn: '학습',
        navExplore: '탐색',
        navPractice: '연습',
        navMe: '내 정보',

        // 내 정보 페이지
        pageMeTitle: '내 정보',
        termsTitle: '이용 약관 및 면책 조항',
        termsText: 'ETC는 중국어 학습 및 교류 데모 플랫폼입니다. 업로드된 콘텐츠는 공개 전 AI 및 인간 검토를 거칩니다. 불법, 음란, 폭력, 도박, 정치적으로 민감한 콘텐츠는 금지됩니다.',
        myProgressTitle: '학습 진행',
        mySubmissionsTitle: '내 콘텐츠',
        myPublished: '게시 완료',
        myPending: '검토 중',
        myRejected: '거부됨',
        myDrafts: '로컬 임시 저장',
        myEmpty: '아직 없음',
        languageSettings: '언어',
        currentLang: '현재 언어',
        changeLangHint: '언어를 변경하면 인터페이스와 커뮤니티 권장 역할이 업데이트됩니다.',
        logoutBtn: '로그아웃',
        resetProgressBtn: '진행 상황 초기화',
        aboutApp: 'EasyToChina 소개'
    }
};

const I18n = {
    key: 'easytochina_lang',

    init() {
        const saved = localStorage.getItem(this.key);
        const lang = saved || this.detectBrowserLang();
        this.setLang(lang, false);
    },

    refreshStatic() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) el.textContent = this.t(key);
        });
    },

    detectBrowserLang() {
        const nav = (navigator.language || 'en').toLowerCase();
        if (nav.startsWith('zh')) return 'zh';
        if (nav.startsWith('ru')) return 'ru';
        if (nav.startsWith('ar')) return 'ar';
        if (nav.startsWith('ko')) return 'ko';
        return 'en';
    },

    getLang() {
        return document.documentElement.getAttribute('lang') || 'en';
    },

    setLang(lang, save = true) {
        const valid = ['zh', 'en', 'ru', 'ar', 'ko'];
        if (!valid.includes(lang)) lang = 'en';
        document.documentElement.setAttribute('lang', lang);
        document.body && document.body.classList.remove('lang-zh', 'lang-en', 'lang-ru', 'lang-ar', 'lang-ko');
        document.body && document.body.classList.add('lang-' + lang);
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        if (save) localStorage.setItem(this.key, lang);

        // 同步顶栏语言按钮缩写（EN / 中 / RU / ع / 한）
        const curEl = document.getElementById('lang-current');
        if (curEl) {
            const abbr = { zh: '中', en: 'EN', ru: 'RU', ar: 'ع', ko: '한' }[lang] || 'EN';
            curEl.textContent = abbr;
        }
        const langMenu = document.getElementById('lang-menu');
        if (langMenu) {
            langMenu.querySelectorAll('.lang-menu-item').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });
        }

        // 刷新已打开的登录弹窗（如果存在）
        const modal = document.getElementById('sentence-modal');
        const authPanel = document.querySelector('.auth-panel');
        if (modal && modal.classList.contains('show') && authPanel && typeof Auth !== 'undefined' && Auth.openLoginModal) {
            Auth.openLoginModal();
            this.refreshStatic();
            return;
        }

        // 否则刷新当前页面 + 顶栏 + 静态文本
        if (typeof App !== 'undefined' && App.currentPage) {
            if (App.navigate) App.navigate(App.currentPage, App.exploreTab);
            if (Auth && Auth.renderTopbar) Auth.renderTopbar();
        }
        this.refreshStatic();
    },

    t(key, fallback) {
        const lang = this.getLang();
        const dict = I18N_DICT[lang] || I18N_DICT.en;
        return dict[key] !== undefined ? dict[key] : (fallback !== undefined ? fallback : key);
    },

    htmlLangButtons(currentLang, onclickPrefix = 'I18n.setLang') {
        const langs = [
            { code: 'zh', label: '中文' },
            { code: 'en', label: 'English' },
            { code: 'ru', label: 'Русский' },
            { code: 'ar', label: 'العربية' },
            { code: 'ko', label: '한국어' }
        ];
        return `<div class="lang-switcher">` +
            langs.map(l => `<button type="button" class="lang-btn ${l.code === currentLang ? 'active' : ''}" ` +
                `onclick="${onclickPrefix}('${l.code}')">${esc(l.label)}</button>`).join('') +
            `</div>`;
    }
};

// 启动时初始化
I18n.init();
