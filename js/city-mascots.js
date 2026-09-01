/**
 * CITY_MASCOTS - 3D-style cartoon mascot characters for each Chinese city
 *
 * Each mascot has:
 *   - A unique SVG character (3D-style with gradients, shading)
 *   - A name, title, and description
 *   - A greeting in Chinese/Pinyin/English
 *   - A voice profile (pitch/rate config for TTS personality)
 *   - Chat topics with pre-scripted responses
 *
 * Mascots are SVG-based so they work offline and need no external assets.
 * The "speaking" CSS class triggers a mouth animation when TTS is active.
 * Future: replace SVGs with actual 3D models + neural TTS + lip-sync.
 */

const CITY_MASCOTS = {

/* ===== 北京 Beijing — 京剧娃娃 Jing Jing ===== */
beijing: {
    name: 'Jing Jing 京京',
    title: 'Peking Opera Star',
    desc: 'A lively Peking Opera performer who knows every corner of the imperial capital.',
    image: 'images/mascots/beijing.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="bj-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F4D5B8"/></radialGradient>
            <linearGradient id="bj-hat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B1E1E"/><stop offset="100%" stop-color="#5C1010"/></linearGradient>
            <radialGradient id="bj-cheek" cx="0.5" cy="0.5"><stop offset="0%" stop-color="#FF6B6B" stop-opacity="0.6"/><stop offset="100%" stop-color="#FF6B6B" stop-opacity="0"/></radialGradient>
        </defs>
        <!-- body -->
        <ellipse cx="100" cy="200" rx="55" ry="35" fill="#C02A35"/>
        <rect x="60" y="170" width="80" height="40" rx="10" fill="#C02A35"/>
        <!-- arms -->
        <ellipse cx="45" cy="180" rx="12" ry="22" fill="#C02A35" transform="rotate(-20 45 180)"/>
        <ellipse cx="155" cy="180" rx="12" ry="22" fill="#C02A35" transform="rotate(20 155 180)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="48" fill="url(#bj-face)"/>
        <!-- opera makeup -->
        <ellipse cx="78" cy="115" rx="16" ry="12" fill="#E8B4B8" opacity="0.5"/>
        <ellipse cx="122" cy="115" rx="16" ry="12" fill="#E8B4B8" opacity="0.5"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="6" ry="8" fill="#fff"/>
        <ellipse cx="118" cy="108" rx="6" ry="8" fill="#fff"/>
        <circle cx="84" cy="110" r="4" fill="#1a1a1a"/>
        <circle cx="120" cy="110" r="4" fill="#1a1a1a"/>
        <circle cx="85" cy="108" r="1.5" fill="#fff"/>
        <circle cx="121" cy="108" r="1.5" fill="#fff"/>
        <!-- mouth (animated) -->
        <ellipse cx="100" cy="132" rx="8" ry="4" fill="#C0392B" class="mascot-mouth"/>
        <!-- opera hat -->
        <path d="M55 85 Q100 50 145 85 L140 70 Q100 40 60 70 Z" fill="url(#bj-hat)"/>
        <!-- hat pheasant feathers -->
        <path d="M60 75 Q30 50 20 65" stroke="#C02A35" stroke-width="3" fill="none"/>
        <path d="M140 75 Q170 50 180 65" stroke="#C02A35" stroke-width="3" fill="none"/>
        <!-- gold trim -->
        <rect x="70" y="78" width="60" height="4" fill="#D4AF37"/>
        <!-- ears -->
        <circle cx="55" cy="115" r="6" fill="url(#bj-face)"/>
        <circle cx="145" cy="115" r="6" fill="url(#bj-face)"/>
    </svg>`,
    greetingCn: '你好！欢迎来北京！我是京京，带你逛逛四九城！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Běijīng! Wǒ shì Jīngjīng, dài nǐ guàngguang sì jiǔ chéng!',
    greetingEn: 'Hello! Welcome to Beijing! I\'m Jing Jing, let me show you around the imperial city!',
    voiceProfile: { id: 'opera-male', name: 'Opera Baritone', pitch: 0.8, rate: 0.85, icon: '🎭', desc: 'Deep, theatrical male voice' },
    chatTopics: [
        { label: 'What should I eat?', response: { cn: '一定要尝尝北京烤鸭！全聚德或者大董都不错。', pinyin: 'Yīdìng yào chángchang Běijīng kǎoyā! Quánjùdé huòzhě Dà Dōng dōu bùcuò.', en: 'You must try Peking duck! Quanjude or Dadong are both great.' } },
        { label: 'Where to visit?', response: { cn: '故宫、长城、天坛，这三个地方必去！', pinyin: 'Gùgōng, Chángchéng, Tiāntán, zhè sān gè dìfang bì qù!', en: 'Forbidden City, Great Wall, Temple of Heaven — these three are must-sees!' } },
        { label: 'How to get around?', response: { cn: '坐地铁最方便，北京地铁很发达。', pinyin: 'Zuò dìtiě zuì fāngbiàn, Běijīng dìtiě hěn fādá.', en: 'Taking the subway is most convenient, Beijing metro is very developed.' } }
    ]
},

/* ===== 上海 Shanghai — 旗袍姐姐 Lili ===== */
shanghai: {
    name: 'Li Li 莉莉',
    title: 'Shanghai Modern Lady',
    desc: 'A stylish Shanghainese woman in a qipao who bridges East and West.',
    image: 'images/mascots/shanghai.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sh-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF5EE"/><stop offset="100%" stop-color="#F8D8C8"/></radialGradient>
            <linearGradient id="sh-dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A5276"/><stop offset="100%" stop-color="#0E3A5C"/></linearGradient>
        </defs>
        <!-- dress body -->
        <path d="M70 170 L60 230 L140 230 L130 170 Q100 160 70 170 Z" fill="url(#sh-dress)"/>
        <!-- dress collar -->
        <path d="M85 165 L100 155 L115 165 L110 175 L90 175 Z" fill="url(#sh-dress)"/>
        <!-- dress pattern -->
        <circle cx="85" cy="200" r="4" fill="#D4AF37" opacity="0.6"/>
        <circle cx="115" cy="195" r="3" fill="#D4AF37" opacity="0.6"/>
        <circle cx="100" cy="215" r="5" fill="#D4AF37" opacity="0.6"/>
        <!-- arms -->
        <ellipse cx="55" cy="185" rx="10" ry="25" fill="url(#sh-dress)" transform="rotate(-15 55 185)"/>
        <ellipse cx="145" cy="185" rx="10" ry="25" fill="url(#sh-dress)" transform="rotate(15 145 185)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="46" fill="url(#sh-face)"/>
        <!-- hair bun -->
        <ellipse cx="100" cy="72" rx="30" ry="18" fill="#1a1a1a"/>
        <circle cx="100" cy="65" r="14" fill="#1a1a1a"/>
        <!-- hair flower -->
        <circle cx="118" cy="68" r="6" fill="#C02A35"/>
        <circle cx="118" cy="68" r="3" fill="#D4AF37"/>
        <!-- eyes (mascara) -->
        <path d="M72 105 Q82 100 92 105" stroke="#1a1a1a" stroke-width="3" fill="none"/>
        <path d="M108 105 Q118 100 128 105" stroke="#1a1a1a" stroke-width="3" fill="none"/>
        <ellipse cx="82" cy="108" rx="5" ry="6" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="6" fill="#1a1a1a"/>
        <circle cx="83" cy="106" r="1.5" fill="#fff"/>
        <circle cx="119" cy="106" r="1.5" fill="#fff"/>
        <!-- blush -->
        <ellipse cx="72" cy="120" rx="10" ry="6" fill="#FFB6C1" opacity="0.4"/>
        <ellipse cx="128" cy="120" rx="10" ry="6" fill="#FFB6C1" opacity="0.4"/>
        <!-- lips -->
        <path d="M92 134 Q100 138 108 134 Q100 142 92 134" fill="#C0392B" class="mascot-mouth"/>
        <!-- earrings -->
        <circle cx="56" cy="115" r="3" fill="#D4AF37"/>
        <circle cx="144" cy="115" r="3" fill="#D4AF37"/>
    </svg>`,
    greetingCn: '你好呀！欢迎来上海！我是莉莉，带侬看看魔都！',
    greetingPinyin: 'Nǐ hǎo ya! Huānyíng lái Shànghǎi! Wǒ shì Lìlì, dài nóng kànkàn Módū!',
    greetingEn: 'Hi there! Welcome to Shanghai! I\'m Lili, let me show you around the Magic City!',
    voiceProfile: { id: 'elegant-female', name: 'Elegant Lady', pitch: 1.2, rate: 0.9, icon: '💃', desc: 'Graceful, slightly higher pitched female voice' },
    chatTopics: [
        { label: 'Where to go at night?', response: { cn: '外滩的夜景一定要看！坐轮渡横渡黄浦江。', pinyin: 'Wàitān de yèjǐng yīdìng yào kàn! Zuò lúndù héngdù Huángpǔ Jiāng.', en: 'You must see the Bund at night! Take a ferry across the Huangpu River.' } },
        { label: 'Best shopping?', response: { cn: '南京路步行街，还有淮海路，都是逛街好去处。', pinyin: 'Nánjīng Lù bùxíng jiē, háiyǒu Huáihǎi Lù, dōu shì guàngjiē hǎo qùchù.', en: 'Nanjing Road pedestrian street and Huaihai Road are both great for shopping.' } },
        { label: 'Local food?', response: { cn: '小笼包必吃！生煎也好吃，去城隍庙尝尝。', pinyin: 'Xiǎolóng bāo bì chī! Shēngjiān yě hǎochī, qù Chénghuáng Miào chángchang.', en: 'Xiaolongbao is a must! Shengjian too, go try them at City God Temple.' } }
    ]
},

/* ===== 西安 Xi'an — 唐朝小将 Tang ===== */
xian: {
    name: 'Tang Tang 唐唐',
    title: 'Tang Dynasty Guard',
    desc: 'A brave Tang Dynasty soldier who guards the ancient capital.',
    image: 'images/mascots/xian.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="xa-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="xa-armor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2C3E50"/><stop offset="100%" stop-color="#1A2530"/></linearGradient>
        </defs>
        <!-- body armor -->
        <rect x="65" y="160" width="70" height="60" rx="8" fill="url(#xa-armor)"/>
        <!-- armor plates -->
        <rect x="68" y="170" width="64" height="6" fill="#D4AF37" opacity="0.7"/>
        <rect x="68" y="185" width="64" height="6" fill="#D4AF37" opacity="0.7"/>
        <rect x="68" y="200" width="64" height="6" fill="#D4AF37" opacity="0.7"/>
        <!-- shoulders -->
        <circle cx="60" cy="165" r="14" fill="url(#xa-armor)"/>
        <circle cx="140" cy="165" r="14" fill="url(#xa-armor)"/>
        <!-- arms -->
        <rect x="42" y="165" width="14" height="40" rx="7" fill="url(#xa-armor)"/>
        <rect x="144" y="165" width="14" height="40" rx="7" fill="url(#xa-armor)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="46" fill="url(#xa-face)"/>
        <!-- helmet -->
        <path d="M55 95 Q100 45 145 95 L145 80 Q100 35 55 80 Z" fill="#8B1E1E"/>
        <!-- helmet spike -->
        <rect x="97" y="38" width="6" height="18" fill="#D4AF37"/>
        <polygon points="100,28 96,40 104,40" fill="#D4AF37"/>
        <!-- eyes -->
        <ellipse cx="82" cy="110" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="110" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="83" cy="108" r="1.5" fill="#fff"/>
        <circle cx="119" cy="108" r="1.5" fill="#fff"/>
        <!-- mouth -->
        <ellipse cx="100" cy="135" rx="7" ry="3" fill="#8B4513" class="mascot-mouth"/>
        <!-- beard -->
        <path d="M80 140 Q100 155 120 140" stroke="#3a2a1a" stroke-width="4" fill="none"/>
        <!-- ears -->
        <circle cx="56" cy="115" r="6" fill="url(#xa-face)"/>
        <circle cx="144" cy="115" r="6" fill="url(#xa-face)"/>
    </svg>`,
    greetingCn: '你好！欢迎来长安！我是唐唐，带你看看大唐盛世！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Cháng\'ān! Wǒ shì Tángtáng, dài nǐ kànkàn Dà Táng shèngshì!',
    greetingEn: 'Hello! Welcome to Chang\'an! I\'m Tang Tang, let me show you the glory of the Tang Dynasty!',
    voiceProfile: { id: 'warrior-male', name: 'Warrior Bold', pitch: 0.7, rate: 0.8, icon: '⚔️', desc: 'Strong, commanding male voice' },
    chatTopics: [
        { label: 'Tell me about the Terracotta Army', response: { cn: '兵马俑是秦始皇的陪葬品，每个面孔都不一样！', pinyin: 'Bīngmǎyǒng shì Qínshǐhuáng de péizàng pǐn, měi gè miànkǒng dōu bù yīyàng!', en: 'The Terracotta Warriors were buried with Qin Shi Huang, and every face is unique!' } },
        { label: 'Best local food?', response: { cn: '肉夹馍、凉皮、羊肉泡馍，西安三宝！', pinyin: 'Ròujiāmó, liángpí, yángròu pàomó, Xī\'ān sān bǎo!', en: 'Roujiamo, liangpi, and yangrou paomo — the three treasures of Xi\'an!' } },
        { label: 'History to see?', response: { cn: '大雁塔、城墙、回民街，一天逛不完。', pinyin: 'Dàyàn Tǎ, chéngqiáng, Huímín Jiē, yī tiān guàng bù wán.', en: 'Big Wild Goose Pagoda, city wall, Muslim Quarter — can\'t finish in one day.' } }
    ]
},

/* ===== 成都 Chengdu — 熊猫宝宝 Pan Pan ===== */
chengdu: {
    name: 'Pan Pan 潘潘',
    title: 'Chengdu Panda Ambassador',
    desc: 'A chubby, bamboo-loving panda who embodies the relaxed Chengdu lifestyle.',
    image: 'images/mascots/chengdu.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="cd-body" cx="0.5" cy="0.3"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#E8E8E8"/></radialGradient>
            <radialGradient id="cd-belly" cx="0.5" cy="0.5"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#F5F5F0"/></radialGradient>
        </defs>
        <!-- body -->
        <ellipse cx="100" cy="180" rx="60" ry="50" fill="url(#cd-body)"/>
        <!-- belly -->
        <ellipse cx="100" cy="190" rx="40" ry="35" fill="url(#cd-belly)"/>
        <!-- legs -->
        <ellipse cx="70" cy="225" rx="18" ry="12" fill="#1a1a1a"/>
        <ellipse cx="130" cy="225" rx="18" ry="12" fill="#1a1a1a"/>
        <!-- arms -->
        <ellipse cx="48" cy="170" rx="16" ry="28" fill="#1a1a1a" transform="rotate(-15 48 170)"/>
        <ellipse cx="152" cy="170" rx="16" ry="28" fill="#1a1a1a" transform="rotate(15 152 170)"/>
        <!-- bamboo in hand -->
        <rect x="140" y="130" width="6" height="50" rx="3" fill="#4A7C3F" transform="rotate(20 143 155)"/>
        <rect x="140" y="145" width="8" height="3" fill="#3A6B2F" transform="rotate(20 144 146)"/>
        <!-- head -->
        <circle cx="100" cy="100" r="50" fill="url(#cd-body)"/>
        <!-- ears -->
        <circle cx="62" cy="65" r="18" fill="#1a1a1a"/>
        <circle cx="138" cy="65" r="18" fill="#1a1a1a"/>
        <!-- eye patches -->
        <ellipse cx="78" cy="100" rx="16" ry="20" fill="#1a1a1a" transform="rotate(-15 78 100)"/>
        <ellipse cx="122" cy="100" rx="16" ry="20" fill="#1a1a1a" transform="rotate(15 122 100)"/>
        <!-- eyes -->
        <circle cx="80" cy="100" r="5" fill="#fff"/>
        <circle cx="120" cy="100" r="5" fill="#fff"/>
        <circle cx="82" cy="102" r="3" fill="#1a1a1a"/>
        <circle cx="122" cy="102" r="3" fill="#1a1a1a"/>
        <circle cx="83" cy="100" r="1" fill="#fff"/>
        <circle cx="123" cy="100" r="1" fill="#fff"/>
        <!-- nose -->
        <ellipse cx="100" cy="120" rx="6" ry="4" fill="#1a1a1a"/>
        <!-- mouth (animated) -->
        <path d="M88 130 Q100 140 112 130" stroke="#1a1a1a" stroke-width="3" fill="none" class="mascot-mouth"/>
        <!-- cheeks -->
        <circle cx="65" cy="120" r="8" fill="#FFB6C1" opacity="0.3"/>
        <circle cx="135" cy="120" r="8" fill="#FFB6C1" opacity="0.3"/>
    </svg>`,
    greetingCn: '你好呀！欢迎来成都！我是潘潘，来一起吃火锅看熊猫嘛！',
    greetingPinyin: 'Nǐ hǎo ya! Huānyíng lái Chéngdū! Wǒ shì Pānpān, lái yīqǐ chī huǒguō kàn xióngmāo ma!',
    greetingEn: 'Hi there! Welcome to Chengdu! I\'m Pan Pan, let\'s eat hotpot and watch pandas together!',
    voiceProfile: { id: 'cute-panda', name: 'Panda Cub', pitch: 1.5, rate: 0.75, icon: '🐼', desc: 'Cute, high-pitched, slow-paced voice' },
    chatTopics: [
        { label: 'Where to see pandas?', response: { cn: '大熊猫繁育研究基地！早上去看，熊猫比较活跃。', pinyin: 'Dà xióngmāo fányù yánjiū jīdì! Zǎoshang qù kàn, xióngmāo bǐjiào huóyuè.', en: 'Giant Panda Breeding Research Base! Go in the morning when pandas are more active.' } },
        { label: 'Is hotpot too spicy?', response: { cn: '可以点鸳鸯锅！一半辣一半不辣，两样都尝到。', pinyin: 'Kěyǐ diǎn yuānyāng guō! Yī bàn là yī bàn bú là, liǎng yàng dōu cháng dào.', en: 'You can order a split pot! Half spicy, half not, so you can try both.' } },
        { label: 'What else to do?', response: { cn: '去宽窄巷子喝茶，再去人民公园采耳，巴适得很！', pinyin: 'Qù Kuānzhǎi Xiàngzi hē chá, zài qù Rénmín Gōngyuán cǎi ěr, bāshi de hěn!', en: 'Go drink tea at Kuanzhai Alley, then get an ear cleaning at People\'s Park — so comfy!' } }
    ]
},

/* ===== 重庆 Chongqing — 山城妹娃 Yu Yu ===== */
chongqing: {
    name: 'Yu Yu 渝渝',
    title: 'Mountain City Girl',
    desc: 'A spirited Chongqing girl who knows every layer of the 3D city.',
    image: 'images/mascots/chongqing.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="cq-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF5EE"/><stop offset="100%" stop-color="#F5D0C0"/></radialGradient>
            <linearGradient id="cq-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E74C3C"/><stop offset="100%" stop-color="#C0392B"/></linearGradient>
        </defs>
        <!-- body -->
        <rect x="65" y="165" width="70" height="55" rx="12" fill="url(#cq-top)"/>
        <!-- arms -->
        <ellipse cx="50" cy="180" rx="10" ry="22" fill="url(#cq-top)" transform="rotate(-10 50 180)"/>
        <ellipse cx="150" cy="180" rx="10" ry="22" fill="url(#cq-top)" transform="rotate(10 150 180)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="46" fill="url(#cq-face)"/>
        <!-- twin tails -->
        <ellipse cx="55" cy="85" rx="12" ry="25" fill="#1a1a1a" transform="rotate(-30 55 85)"/>
        <ellipse cx="145" cy="85" rx="12" ry="25" fill="#1a1a1a" transform="rotate(30 145 85)"/>
        <rect x="85" y="68" width="30" height="20" rx="5" fill="#1a1a1a"/>
        <!-- red hair ribbon -->
        <ellipse cx="55" cy="70" rx="8" ry="5" fill="#E74C3C"/>
        <ellipse cx="145" cy="70" rx="8" ry="5" fill="#E74C3C"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="6" ry="8" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="6" ry="8" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="2" fill="#fff"/>
        <circle cx="120" cy="106" r="2" fill="#fff"/>
        <!-- blush -->
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.3"/>
        <!-- mouth (big smile) -->
        <ellipse cx="100" cy="134" rx="10" ry="5" fill="#C0392B" class="mascot-mouth"/>
        <!-- ears -->
        <circle cx="56" cy="115" r="5" fill="url(#cq-face)"/>
        <circle cx="144" cy="115" r="5" fill="url(#cq-face)"/>
    </svg>`,
    greetingCn: '要得！欢迎来重庆！我是渝渝，带你看哈山城！',
    greetingPinyin: 'Yào dé! Huānyíng lái Chóngqìng! Wǒ shì Yúyú, dài nǐ kàn ha shānchéng!',
    greetingEn: 'Awesome! Welcome to Chongqing! I\'m Yu Yu, let me show you the Mountain City!',
    voiceProfile: { id: 'spicy-female', name: 'Spicy Girl', pitch: 1.15, rate: 0.95, icon: '🌶️', desc: 'Energetic, fast-talking female voice' },
    chatTopics: [
        { label: 'Best hotpot?', response: { cn: '重庆火锅比成都还辣！点个九宫格，毛肚鸭肠必点！', pinyin: 'Chóngqìng huǒguō bǐ Chéngdū hái là! Diǎn gè jiǔgōnggé, máodù yācháng bì diǎn!', en: 'Chongqing hotpot is spicier than Chengdu! Get a nine-grid pot, beef tripe and duck intestine are musts!' } },
        { label: 'What to see at night?', response: { cn: '洪崖洞夜景绝了！再去坐长江索道看全城。', pinyin: 'Hóngyádòng yèjǐng jué le! Zài qù zuò Chángjiāng suǒdào kàn quán chéng.', en: 'Hongyadong night view is amazing! Then take the Yangtze cable car to see the whole city.' } },
        { label: 'Why is it 3D?', response: { cn: '重庆建在山上，一楼和十楼都能出去！导航都搞不晕。', pinyin: 'Chóngqìng jiàn zài shān shàng, yī lóu hé shí lóu dōu néng chūqù! Dǎoháng dōu gǎo bù yūn.', en: 'Chongqing is built on mountains, both the 1st and 10th floor have exits! Even navigation gets confused.' } }
    ]
},

/* ===== 杭州 Hangzhou — 茶仙子 Cha ===== */
hangzhou: {
    name: 'Cha Cha 茶茶',
    title: 'West Lake Tea Fairy',
    desc: 'A graceful tea-picking fairy from the misty hills of Longjing.',
    image: 'images/mascots/hangzhou.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="hz-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#F0FFF0"/><stop offset="100%" stop-color="#D5F0D5"/></radialGradient>
            <linearGradient id="hz-dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4A7C6F"/><stop offset="100%" stop-color="#2D5A4A"/></linearGradient>
        </defs>
        <!-- flowing dress -->
        <path d="M65 165 Q50 220 55 235 L145 235 Q150 220 135 165 Q100 155 65 165" fill="url(#hz-dress)"/>
        <!-- dress leaf pattern -->
        <ellipse cx="85" cy="200" rx="5" ry="8" fill="#7AC6A0" opacity="0.5" transform="rotate(-20 85 200)"/>
        <ellipse cx="115" cy="195" rx="4" ry="7" fill="#7AC6A0" opacity="0.5" transform="rotate(20 115 195)"/>
        <!-- arms (wide sleeves) -->
        <path d="M50 170 Q35 195 40 215 Q50 210 60 190" fill="url(#hz-dress)"/>
        <path d="M150 170 Q165 195 160 215 Q150 210 140 190" fill="url(#hz-dress)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="44" fill="url(#hz-face)"/>
        <!-- long hair -->
        <path d="M60 90 Q50 140 60 170 L75 165 Q70 130 78 95" fill="#1a2a1a"/>
        <path d="M140 90 Q150 140 140 170 L125 165 Q130 130 122 95" fill="#1a2a1a"/>
        <!-- tea leaf hairpin -->
        <ellipse cx="120" cy="72" rx="10" ry="5" fill="#4A7C3F" transform="rotate(-30 120 72)"/>
        <!-- eyes (gentle) -->
        <path d="M75 108 Q82 104 89 108" stroke="#2a3a2a" stroke-width="2.5" fill="none"/>
        <path d="M111 108 Q118 104 125 108" stroke="#2a3a2a" stroke-width="2.5" fill="none"/>
        <circle cx="82" cy="109" r="3" fill="#2a3a2a"/>
        <circle cx="118" cy="109" r="3" fill="#2a3a2a"/>
        <!-- gentle smile -->
        <path d="M92 130 Q100 134 108 130" stroke="#8B4513" stroke-width="2.5" fill="none" class="mascot-mouth"/>
        <!-- tea cup in hand -->
        <ellipse cx="160" cy="200" rx="8" ry="5" fill="#fff"/>
        <ellipse cx="160" cy="198" rx="6" ry="3" fill="#4A7C3F" opacity="0.6"/>
    </svg>`,
    greetingCn: '你好！欢迎来杭州！我是茶茶，请你喝杯龙井茶！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Hángzhōu! Wǒ shì Cháchá, qǐng nǐ hē bēi Lóngjǐng chá!',
    greetingEn: 'Hello! Welcome to Hangzhou! I\'m Cha Cha, let me pour you a cup of Longjing tea!',
    voiceProfile: { id: 'gentle-female', name: 'Tea Fairy', pitch: 1.1, rate: 0.8, icon: '🍵', desc: 'Soft, soothing, slow-paced voice' },
    chatTopics: [
        { label: 'West Lake tips?', response: { cn: '西湖十景都很美，骑自行车环湖最好！', pinyin: 'Xī Hú shí jǐng dōu hěn měi, qí zìxíngchē huán hú zuì hǎo!', en: 'All ten West Lake scenes are beautiful, cycling around the lake is the best way!' } },
        { label: 'Best tea?', response: { cn: '龙井茶去梅家坞买，茶园里喝最新鲜。', pinyin: 'Lóngjǐng chá qù Méijiāwò mǎi, cháyuán lǐ hē zuì xīnxiān.', en: 'Buy Longjing tea at Meijiawu, drinking it right in the tea garden is freshest.' } }
    ]
},

/* ===== 苏州 Suzhou — 绣娘 Xiu ===== */
suzhou: {
    name: 'Xiu Xiu 绣绣',
    title: 'Suzhou Embroidery Maiden',
    desc: 'A delicate Suzhou girl skilled in the art of silk embroidery.',
    image: 'images/mascots/suzhou.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sz-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF8F0"/><stop offset="100%" stop-color="#F5DCC8"/></radialGradient>
            <linearGradient id="sz-dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9B59B6"/><stop offset="100%" stop-color="#7D3C98"/></linearGradient>
        </defs>
        <!-- dress -->
        <path d="M65 165 L55 235 L145 235 L135 165 Q100 155 65 165" fill="url(#sz-dress)"/>
        <!-- embroidery pattern -->
        <circle cx="85" cy="200" r="3" fill="#F1C40F" opacity="0.7"/>
        <circle cx="100" cy="210" r="3" fill="#F1C40F" opacity="0.7"/>
        <circle cx="115" cy="200" r="3" fill="#F1C40F" opacity="0.7"/>
        <!-- arms -->
        <ellipse cx="50" cy="180" rx="10" ry="25" fill="url(#sz-dress)" transform="rotate(-10 50 180)"/>
        <ellipse cx="150" cy="180" rx="10" ry="25" fill="url(#sz-dress)" transform="rotate(10 150 180)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="44" fill="url(#sz-face)"/>
        <!-- hair -->
        <ellipse cx="100" cy="75" rx="35" ry="20" fill="#1a1a1a"/>
        <path d="M65 80 Q55 130 62 160" stroke="#1a1a1a" stroke-width="8" fill="none"/>
        <path d="M135 80 Q145 130 138 160" stroke="#1a1a1a" stroke-width="8" fill="none"/>
        <!-- flower -->
        <circle cx="115" cy="68" r="5" fill="#E74C3C"/>
        <circle cx="115" cy="68" r="2" fill="#F1C40F"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="83" cy="106" r="1.5" fill="#fff"/>
        <circle cx="119" cy="106" r="1.5" fill="#fff"/>
        <!-- small mouth -->
        <ellipse cx="100" cy="132" rx="5" ry="3" fill="#C0392B" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来苏州！我是绣绣，带你看看园林和刺绣！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Sūzhōu! Wǒ shì Xiùxiù, dài nǐ kànkàn yuánlín hé cìxiù!',
    greetingEn: 'Hello! Welcome to Suzhou! I\'m Xiu Xiu, let me show you gardens and embroidery!',
    voiceProfile: { id: 'soft-female', name: 'Garden Maiden', pitch: 1.15, rate: 0.82, icon: '🌸', desc: 'Delicate, refined female voice' },
    chatTopics: [
        { label: 'Which garden to visit?', response: { cn: '拙政园最大最有名，留园也值得去！', pinyin: 'Zhuōzhèng Yuán zuì dà zuì yǒumíng, Liúyuán yě zhídé qù!', en: 'Humble Administrator\'s Garden is the biggest and most famous, Lingering Garden is also worth visiting!' } },
        { label: 'What to eat?', response: { cn: '苏式月饼、松鼠桂鱼、阳春面，都试试！', pinyin: 'Sū shì yuèbǐng, sōngshǔ guìyú, yángchūn miàn, dōu shìshì!', en: 'Suzhou mooncakes, squirrel fish, and yangchun noodles — try them all!' } }
    ]
},

/* ===== 广州 Guangzhou — 早茶小哥 Zao ===== */
guangzhou: {
    name: 'Zao Zao 早早',
    title: 'Cantonese Morning Tea Host',
    desc: 'A warm Cantonese guy who knows every dim sum dish by heart.',
    image: 'images/mascots/guangzhou.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="gz-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A8"/></radialGradient>
            <linearGradient id="gz-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2ECC71"/><stop offset="100%" stop-color="#27AE60"/></linearGradient>
        </defs>
        <!-- body -->
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#gz-shirt)"/>
        <!-- collar -->
        <path d="M85 160 L100 175 L115 160" stroke="#fff" stroke-width="3" fill="none"/>
        <!-- arms -->
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#gz-shirt)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#gz-shirt)" transform="rotate(10 152 180)"/>
        <!-- dim sum basket in hand -->
        <rect x="145" y="195" width="22" height="16" rx="2" fill="#D4A574"/>
        <rect x="145" y="192" width="22" height="4" fill="#B8956A"/>
        <!-- head -->
        <circle cx="100" cy="110" r="46" fill="url(#gz-face)"/>
        <!-- hair -->
        <path d="M58 85 Q100 55 142 85 L138 72 Q100 48 62 72" fill="#2C3E50"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="6" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="6" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="2" fill="#fff"/>
        <circle cx="120" cy="106" r="2" fill="#fff"/>
        <!-- big smile -->
        <path d="M85 130 Q100 145 115 130" stroke="#C0392B" stroke-width="3" fill="#E74C3C" class="mascot-mouth"/>
        <!-- ears -->
        <circle cx="56" cy="115" r="6" fill="url(#gz-face)"/>
        <circle cx="144" cy="115" r="6" fill="url(#gz-face)"/>
    </svg>`,
    greetingCn: '你好！欢迎来广州！我是早早，饮咗茶未啊？',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Guǎngzhōu! Wǒ shì Zǎozǎo, yǐn zo chá mèi a?',
    greetingEn: 'Hello! Welcome to Guangzhou! I\'m Zao Zao, have you had your morning tea yet?',
    voiceProfile: { id: 'warm-male', name: 'Tea House Host', pitch: 0.9, rate: 0.88, icon: '🫖', desc: 'Warm, welcoming male voice' },
    chatTopics: [
        { label: 'Best dim sum?', response: { cn: '虾饺、烧卖、凤爪、肠粉，早茶必点四样！', pinyin: 'Xiā jiǎo, shāomài, fèngzhuǎ, chángfěn, zǎochá bì diǎn sì yàng!', en: 'Shrimp dumplings, shumai, chicken feet, rice rolls — four must-orders for dim sum!' } },
        { label: 'Cantonese vs Mandarin?', response: { cn: '广州人说粤语，但普通话也通的，放心！', pinyin: 'Guǎngzhōu rén shuō Yuèyǔ, dàn Pǔtōnghuà yě tōng de, fàngxīn!', en: 'Guangzhou people speak Cantonese, but Mandarin works too, don\'t worry!' } }
    ]
},

/* ===== 深圳 Shenzhen — 科技少年 Ke ===== */
shenzhen: {
    name: 'Ke Ke 科科',
    title: 'Shenzhen Tech Whiz Kid',
    desc: 'A young tech enthusiast who lives and breathes innovation.',
    image: 'images/mascots/shenzhen.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sz2-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF5EE"/><stop offset="100%" stop-color="#F0D8C0"/></radialGradient>
            <linearGradient id="sz2-hoodie" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3498DB"/><stop offset="100%" stop-color="#2980B9"/></linearGradient>
        </defs>
        <!-- hoodie body -->
        <rect x="60" y="160" width="80" height="60" rx="15" fill="url(#sz2-hoodie)"/>
        <!-- hood -->
        <path d="M70 165 Q100 145 130 165" stroke="#2980B9" stroke-width="4" fill="none"/>
        <!-- arms -->
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#sz2-hoodie)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#sz2-hoodie)" transform="rotate(10 152 180)"/>
        <!-- phone in hand -->
        <rect x="148" y="190" width="14" height="22" rx="3" fill="#1a1a1a"/>
        <rect x="150" y="193" width="10" height="16" fill="#2ECC71" opacity="0.6"/>
        <!-- head -->
        <circle cx="100" cy="110" r="44" fill="url(#sz2-face)"/>
        <!-- messy hair -->
        <path d="M58 85 Q70 60 90 65 Q100 55 110 65 Q130 60 142 85 L138 72 Q120 55 100 58 Q80 55 62 72" fill="#2C3E50"/>
        <!-- tech glasses -->
        <rect x="68" y="100" width="22" height="16" rx="4" fill="none" stroke="#2C3E50" stroke-width="2.5"/>
        <rect x="110" y="100" width="22" height="16" rx="4" fill="none" stroke="#2C3E50" stroke-width="2.5"/>
        <line x1="90" y1="108" x2="110" y2="108" stroke="#2C3E50" stroke-width="2.5"/>
        <!-- eyes behind glasses -->
        <circle cx="79" cy="108" r="3.5" fill="#1a1a1a"/>
        <circle cx="121" cy="108" r="3.5" fill="#1a1a1a"/>
        <!-- smile -->
        <path d="M88 130 Q100 136 112 130" stroke="#C0392B" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来深圳！我是科科，这里是中国硅谷！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Shēnzhèn! Wǒ shì Kēkē, zhèlǐ shì Zhōngguó Guīgǔ!',
    greetingEn: 'Hello! Welcome to Shenzhen! I\'m Ke Ke, this is China\'s Silicon Valley!',
    voiceProfile: { id: 'young-male', name: 'Tech Young', pitch: 1.0, rate: 0.95, icon: '💻', desc: 'Young, energetic, fast-talking voice' },
    chatTopics: [
        { label: 'Where to see tech?', response: { cn: '去华强北看电子产品，再去腾讯大厦打卡！', pinyin: 'Qù Huáqiángběi kàn diànzǐ chǎnpǐn, zài qù Téngxùn Dàshà dǎkǎ!', en: 'Go to Huaqiangbei for electronics, then check in at Tencent HQ!' } },
        { label: 'Is it expensive?', response: { cn: '深圳物价不低，但比香港便宜很多。', pinyin: 'Shēnzhèn wùjià bù dī, dàn bǐ Xiānggǎng piányí hěn duō.', en: 'Shenzhen isn\'t cheap, but much more affordable than Hong Kong.' } }
    ]
},

/* ===== 哈尔滨 Harbin — 冰雪公主 Bing ===== */
harbin: {
    name: 'Bing Bing 冰冰',
    title: 'Ice Snow Princess',
    desc: 'A cheerful ice princess from China\'s winter wonderland.',
    image: 'images/mascots/harbin.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="heb-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#F0F8FF"/><stop offset="100%" stop-color="#D0E8F0"/></radialGradient>
            <linearGradient id="heb-coat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#85C1E9"/><stop offset="100%" stop-color="#5499C7"/></linearGradient>
        </defs>
        <!-- winter coat -->
        <rect x="58" y="155" width="84" height="70" rx="15" fill="url(#heb-coat)"/>
        <!-- fur trim -->
        <ellipse cx="100" cy="158" rx="44" ry="10" fill="#fff"/>
        <ellipse cx="100" cy="220" rx="44" ry="8" fill="#fff"/>
        <!-- arms -->
        <ellipse cx="46" cy="180" rx="12" ry="28" fill="url(#heb-coat)"/>
        <ellipse cx="154" cy="180" rx="12" ry="28" fill="url(#heb-coat)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="44" fill="url(#heb-face)"/>
        <!-- hat with pom-pom -->
        <path d="M58 85 Q100 50 142 85 L138 70 Q100 40 62 70" fill="#E74C3C"/>
        <circle cx="100" cy="50" r="10" fill="#fff"/>
        <!-- scarf -->
        <ellipse cx="100" cy="152" rx="30" ry="8" fill="#E74C3C"/>
        <rect x="120" y="150" width="8" height="20" fill="#E74C3C" transform="rotate(15 124 160)"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <!-- rosy cheeks -->
        <ellipse cx="72" cy="120" rx="10" ry="7" fill="#FF6B6B" opacity="0.4"/>
        <ellipse cx="128" cy="120" rx="10" ry="7" fill="#FF6B6B" opacity="0.4"/>
        <!-- smile -->
        <path d="M90 130 Q100 138 110 130" stroke="#C0392B" stroke-width="2.5" fill="none" class="mascot-mouth"/>
        <!-- snowflake -->
        <text x="150" y="70" font-size="20" fill="#85C1E9">❄</text>
    </svg>`,
    greetingCn: '你好！欢迎来哈尔滨！我是冰冰，带你看看冰城！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Hā\'ěrbīn! Wǒ shì Bīngbīng, dài nǐ kànkàn Bīngchéng!',
    greetingEn: 'Hello! Welcome to Harbin! I\'m Bing Bing, let me show you the Ice City!',
    voiceProfile: { id: 'crystal-female', name: 'Ice Crystal', pitch: 1.2, rate: 0.85, icon: '❄️', desc: 'Clear, bright, slightly higher voice' },
    chatTopics: [
        { label: 'Ice Festival?', response: { cn: '冰雪大世界一定要去！晚上灯亮了最美！', pinyin: 'Bīngxuě Dà Shìjiè yīdìng yào qù! Wǎnshang dēng liàng le zuì měi!', en: 'Ice and Snow World is a must! Most beautiful when lit up at night!' } },
        { label: 'What to eat in winter?', response: { cn: '锅包肉、马迭尔冰棍，冬天也要吃冰棍！', pinyin: 'Guōbāoròu, Mǎdié\'ěr bīnggùn, dōngtiān yě yào chī bīnggùn!', en: 'Guobaorou and Modern ice pops — even in winter you eat ice cream!' } }
    ]
},

/* ===== 拉萨 Lhasa — 格桑姑娘 Gesang ===== */
lasa: {
    name: 'Gesang 格桑',
    title: 'Tibetan Plateau Maiden',
    desc: 'A warm-hearted Tibetan girl with a voice as clear as highland skies.',
    image: 'images/mascots/lasa.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="ls-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#F5DEB3"/><stop offset="100%" stop-color="#E0C090"/></radialGradient>
            <linearGradient id="ls-dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8B0000"/><stop offset="100%" stop-color="#5C0000"/></linearGradient>
        </defs>
        <!-- dress -->
        <rect x="60" y="160" width="80" height="60" rx="8" fill="url(#ls-dress)"/>
        <!-- decorative trim -->
        <rect x="60" y="165" width="80" height="5" fill="#D4AF37"/>
        <rect x="60" y="210" width="80" height="5" fill="#D4AF37"/>
        <!-- arms -->
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#ls-dress)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#ls-dress)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="44" fill="url(#ls-face)"/>
        <!-- long braids -->
        <ellipse cx="60" cy="120" rx="8" ry="35" fill="#1a1a1a" transform="rotate(-10 60 120)"/>
        <ellipse cx="140" cy="120" rx="8" ry="35" fill="#1a1a1a" transform="rotate(10 140 120)"/>
        <!-- braids decorations -->
        <circle cx="58" cy="150" r="4" fill="#D4AF37"/>
        <circle cx="142" cy="150" r="4" fill="#D4AF37"/>
        <!-- head -->
        <path d="M62 85 Q100 55 138 85 L132 70 Q100 45 68 70" fill="#1a1a1a"/>
        <!-- turquoise headpiece -->
        <ellipse cx="100" cy="70" rx="14" ry="6" fill="#1ABC9C"/>
        <circle cx="100" cy="70" r="4" fill="#D4AF37"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <!-- highland blush -->
        <ellipse cx="70" cy="122" rx="10" ry="7" fill="#E74C3C" opacity="0.4"/>
        <ellipse cx="130" cy="122" rx="10" ry="7" fill="#E74C3C" opacity="0.4"/>
        <!-- smile -->
        <path d="M88 130 Q100 138 112 130" stroke="#8B4513" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '扎西德勒！欢迎来拉萨！我是格桑！',
    greetingPinyin: 'Zhāxī délè! Huānyíng lái Lāsà! Wǒ shì Gésāng!',
    greetingEn: 'Tashi delek! Welcome to Lhasa! I\'m Gesang!',
    voiceProfile: { id: 'highland-female', name: 'Highland Maiden', pitch: 1.15, rate: 0.82, icon: '🏔️', desc: 'Clear, resonant, slightly echoey voice' },
    chatTopics: [
        { label: 'About the Potala Palace?', response: { cn: '布达拉宫是达赖喇嘛的冬宫，有一千多间房子！', pinyin: 'Bùdálā Gōng shì Dálài Lǎmā de dōnggōng, yǒu yīqiān duō jiān fángzi!', en: 'Potala Palace is the winter residence of the Dalai Lama, with over a thousand rooms!' } },
        { label: 'Altitude sickness?', response: { cn: '刚到别剧烈运动，多喝水，喝点酥油茶有帮助！', pinyin: 'Gāng dào bié jùliè yùndòng, duō hē shuǐ, hē diǎn sūyóuchá yǒu bāngzhù!', en: 'Don\'t exercise hard when you arrive, drink lots of water, butter tea helps!' } }
    ]
},

/* ===== 长沙 Changsha — 辣妹子 La ===== */
changsha: {
    name: 'La La 辣辣',
    title: 'Spicy Hunan Girl',
    desc: 'A fiery Hunan girl who loves spicy food and loud laughter.',
    image: 'images/mascots/changsha.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="cs-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF5EE"/><stop offset="100%" stop-color="#F5D0C0"/></radialGradient>
            <linearGradient id="cs-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E74C3C"/><stop offset="100%" stop-color="#C0392B"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#cs-top)"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#cs-top)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#cs-top)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="110" r="44" fill="url(#cs-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 70 Q100 45 62 70" fill="#2C3E50"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="70" cy="122" rx="10" ry="6" fill="#FF6B6B" opacity="0.5"/>
        <ellipse cx="130" cy="122" rx="10" ry="6" fill="#FF6B6B" opacity="0.5"/>
        <ellipse cx="100" cy="133" rx="9" ry="5" fill="#C0392B" class="mascot-mouth"/>
        <circle cx="56" cy="115" r="5" fill="url(#cs-face)"/>
        <circle cx="144" cy="115" r="5" fill="url(#cs-face)"/>
    </svg>`,
    greetingCn: '你好！欢迎来长沙！我是辣辣，带你恰臭豆腐！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Chángshā! Wǒ shì Làlà, dài nǐ qià chòu dòufu!',
    greetingEn: 'Hello! Welcome to Changsha! I\'m La La, let\'s eat stinky tofu!',
    voiceProfile: { id: 'fiery-female', name: 'Spicy Fire', pitch: 1.1, rate: 0.92, icon: '🔥', desc: 'Energetic, bold, slightly fast voice' },
    chatTopics: [
        { label: 'Must-try food?', response: { cn: '臭豆腐、糖油粑粑、口味虾，长沙三绝！', pinyin: 'Chòu dòufu, táng yóu bābā, kǒuwèi xiā, Chángshā sān jué!', en: 'Stinky tofu, sugar oil baba, and spicy crayfish — the three treasures of Changsha!' } },
        { label: 'Where to go at night?', response: { cn: '太平老街逛逛，再去橘子洲头看烟花！', pinyin: 'Tàipíng lǎojiē guàngguang, zài qù Júzizhōu tóu kàn yānhuā!', en: 'Stroll through Taiping Old Street, then watch fireworks at Orange Isle!' } }
    ]
},

/* ===== 厦门 Xiamen — 海风小哥 Hai ===== */
xiamen: {
    name: 'Hai Hai 海海',
    title: 'Island Coast Guide',
    desc: 'A laid-back island guy who surfs between culture and ocean.',
    image: 'images/mascots/xiamen.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="xm-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="xm-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1ABC9C"/><stop offset="100%" stop-color="#16A085"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#xm-shirt)"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#xm-shirt)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#xm-shirt)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="110" r="44" fill="url(#xm-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 72 Q100 48 62 72" fill="#2C3E50"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.4"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.4"/>
        <path d="M88 130 Q100 138 112 130" stroke="#8B4513" stroke-width="2.5" fill="none" class="mascot-mouth"/>
        <text x="145" y="80" font-size="18">🌊</text>
    </svg>`,
    greetingCn: '你好！欢迎来厦门！我是海海，带你看海！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Xiàmén! Wǒ shì Hǎihǎi, dài nǐ kàn hǎi!',
    greetingEn: 'Hello! Welcome to Xiamen! I\'m Hai Hai, let\'s go see the sea!',
    voiceProfile: { id: 'breeze-male', name: 'Ocean Breeze', pitch: 0.95, rate: 0.88, icon: '🌊', desc: 'Relaxed, breezy, warm voice' },
    chatTopics: [
        { label: 'Gulangyu Island?', response: { cn: '鼓浪屿要坐轮渡过去，岛上没有车，很安静！', pinyin: 'Gǔlàngyǔ yào zuò lúndù guòqù, dǎo shàng méiyǒu chē, hěn ānjìng!', en: 'Take a ferry to Gulangyu, no cars on the island, very peaceful!' } },
        { label: 'Best seafood?', response: { cn: '中山路海鲜大排档，沙茶面必吃！', pinyin: 'Zhōngshān Lù hǎixiān dàpáidàng, shāchá miàn bì chī!', en: 'Seafood stalls on Zhongshan Road, shacha noodles are a must!' } }
    ]
},

/* ===== 昆明 Kunming — 春城花仙 Hua ===== */
kunming: {
    name: 'Hua Hua 花花',
    title: 'Spring City Flower Fairy',
    desc: 'A flower-loving fairy from the city of eternal spring.',
    image: 'images/mascots/kunming.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="km-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF8F0"/><stop offset="100%" stop-color="#F5DCC8"/></radialGradient>
            <linearGradient id="km-dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E91E63"/><stop offset="100%" stop-color="#C2185B"/></linearGradient>
        </defs>
        <path d="M65 165 L55 235 L145 235 L135 165 Q100 155 65 165" fill="url(#km-dress)"/>
        <ellipse cx="50" cy="180" rx="10" ry="25" fill="url(#km-dress)" transform="rotate(-10 50 180)"/>
        <ellipse cx="150" cy="180" rx="10" ry="25" fill="url(#km-dress)" transform="rotate(10 150 180)"/>
        <circle cx="100" cy="110" r="44" fill="url(#km-face)"/>
        <ellipse cx="100" cy="72" rx="32" ry="18" fill="#1a1a1a"/>
        <circle cx="115" cy="68" r="7" fill="#E91E63"/>
        <circle cx="115" cy="68" r="3" fill="#FFC107"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.3"/>
        <path d="M90 130 Q100 136 110 130" stroke="#C0392B" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来昆明！我是花花，春城四季如春！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Kūnmíng! Wǒ shì Huāhuā, Chūnchéng sì jì rú chūn!',
    greetingEn: 'Hello! Welcome to Kunming! I\'m Hua Hua, the Spring City has spring all year!',
    voiceProfile: { id: 'bright-female', name: 'Spring Blossom', pitch: 1.2, rate: 0.87, icon: '🌸', desc: 'Bright, cheerful, floral voice' },
    chatTopics: [
        { label: 'Flower market?', response: { cn: '斗南花市是亚洲最大！鲜花论斤卖，超便宜！', pinyin: 'Dǒunán huāshì shì Yàzhōu zuì dà! Xiānhuā lùn jīn mài, chāo piányi!', en: 'Dounan Flower Market is the biggest in Asia! Flowers sold by weight, super cheap!' } },
        { label: 'Stone Forest?', response: { cn: '石林是世界自然遗产，喀斯特地貌很壮观！', pinyin: 'Shílín shì shìjiè zìrán yíchǎn, kāsītè dìmào hěn zhuàngguān!', en: 'Stone Forest is a UNESCO World Heritage site, the karst landscape is spectacular!' } }
    ]
},

/* ===== 南京 Nanjing — 金陵才子 Jin ===== */
nanjing: {
    name: 'Jin Jin 金金',
    title: 'Jinling Scholar',
    desc: 'A learned scholar from the ancient capital of six dynasties.',
    image: 'images/mascots/nanjing.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="nj-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="nj-robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#34495E"/><stop offset="100%" stop-color="#2C3E50"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="8" fill="url(#nj-robe)"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#nj-robe)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#nj-robe)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="110" r="44" fill="url(#nj-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 70 Q100 45 62 70" fill="#2C3E50"/>
        <rect x="88" y="60" width="24" height="8" fill="#D4AF37"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <path d="M90 130 Q100 134 110 130" stroke="#8B4513" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来南京！我是金金，六朝古都的故事多得很！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Nánjīng! Wǒ shì Jīnjīn, liù cháo gǔdū de gùshi duō de hěn!',
    greetingEn: 'Hello! Welcome to Nanjing! I\'m Jin Jin, the ancient capital of six dynasties has many stories!',
    voiceProfile: { id: 'scholar-male', name: 'Scholar Calm', pitch: 0.85, rate: 0.82, icon: '📖', desc: 'Calm, measured, scholarly voice' },
    chatTopics: [
        { label: 'Historical sites?', response: { cn: '中山陵、明孝陵、夫子庙，南京历史看这三个！', pinyin: 'Zhōngshān Líng, Míngxiào Líng, Fūzǐ Miào, Nánjīng lìshǐ kàn zhè sān gè!', en: 'Sun Yat-sen Mausoleum, Ming Xiaoling, and Confucius Temple — these three for Nanjing history!' } },
        { label: 'Nanjing Massacre Memorial?', response: { cn: '侵华日军南京大屠杀遇难同胞纪念馆，值得去看。', pinyin: 'Qīn Huá Rìjūn Nánjīng Dàtúshā Yùnàn Tóngbāo Jìniànguǎn, zhídé qù kàn.', en: 'The Nanjing Massacre Memorial Hall is worth visiting to understand history.' } }
    ]
},

/* ===== 景德镇 Jingdezhen — 窑神 Yao ===== */
jingdezhen: {
    name: 'Yao Yao 窑窑',
    title: 'Porcelain Kiln Master',
    desc: 'A master ceramicist from the porcelain capital of the world.',
    image: 'images/mascots/jingdezhen.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="jd-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="jd-apron" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E67E22"/><stop offset="100%" stop-color="#D35400"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="8" fill="#ECF0F1"/>
        <path d="M70 160 L70 220 L130 220 L130 160 Z" fill="url(#jd-apron)"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="#ECF0F1" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="#ECF0F1" transform="rotate(10 152 180)"/>
        <ellipse cx="155" cy="200" rx="10" ry="8" fill="#F5F5DC"/>
        <circle cx="100" cy="110" r="44" fill="url(#jd-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 70 Q100 45 62 70" fill="#5C3A21"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <path d="M88 130 Q100 136 112 130" stroke="#8B4513" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来景德镇！我是窑窑，一千年的瓷都！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Jǐngdézhèn! Wǒ shì Yáoyáo, yī qiān nián de cídū!',
    greetingEn: 'Hello! Welcome to Jingdezhen! I\'m Yao Yao, the porcelain capital of a thousand years!',
    voiceProfile: { id: 'craftsman-male', name: 'Kiln Master', pitch: 0.88, rate: 0.8, icon: '🏺', desc: 'Steady, patient, artisan voice' },
    chatTopics: [
        { label: 'Buy porcelain?', response: { cn: '去陶溪川文创园，手工作品又好看又特别！', pinyin: 'Qù Táoxīchuān wénchuàng yuán, shǒugōng zuòpǐn yòu hǎokàn yòu tèbié!', en: 'Go to Taoxichuan Creative Park, handmade pieces are beautiful and unique!' } },
        { label: 'Try pottery?', response: { cn: '古窑民俗博览区可以体验拉胚，自己做一个！', pinyin: 'Gǔyáo mínsú bólǎn qū kěyǐ tǐyàn lā pēi, zìjǐ zuò yī gè!', en: 'You can try throwing pottery at the Ancient Kiln Folk Customs Museum!' } }
    ]
},

/* ===== 义乌 Yiwu — 商海达人 Shang ===== */
yiwu: {
    name: 'Shang Shang 商商',
    title: 'Trade Market Expert',
    desc: 'A savvy business expert who knows every stall in the world\'s largest small commodity market.',
    image: 'images/mascots/yiwu.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="yw-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="yw-suit" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2C3E50"/><stop offset="100%" stop-color="#1a2530"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="8" fill="url(#yw-suit)"/>
        <path d="M85 160 L100 175 L115 160" stroke="#fff" stroke-width="3" fill="none"/>
        <rect x="96" y="170" width="8" height="12" fill="#C02A35"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#yw-suit)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#yw-suit)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="110" r="44" fill="url(#yw-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 70 Q100 45 62 70" fill="#2C3E50"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <path d="M85 130 Q100 140 115 130" stroke="#C0392B" stroke-width="3" fill="#E74C3C" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来义乌！我是商商，全球最大的小商品市场！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Yìwū! Wǒ shì Shāngshāng, quánqiú zuì dà de xiǎo shāngpǐn shìchǎng!',
    greetingEn: 'Hello! Welcome to Yiwu! I\'m Shang Shang, the world\'s largest small commodity market!',
    voiceProfile: { id: 'business-male', name: 'Trade Pro', pitch: 0.92, rate: 0.9, icon: '💼', desc: 'Confident, business-like voice' },
    chatTopics: [
        { label: 'How to source products?', response: { cn: '义乌国际商贸城有七万多个商铺，先逛再谈！', pinyin: 'Yìwū Guójì Shāngmàochéng yǒu qī wàn duō gè shāngpù, xiān guàng zài tán!', en: 'Yiwu International Trade City has over 70,000 shops, browse first then negotiate!' } },
        { label: 'Shipping abroad?', response: { cn: '义乌有直达全球的物流，买满一个柜直接发！', pinyin: 'Yìwū yǒu zhídá quánqiú de wùliú, mǎi mǎn yī gè guì zhíjiē fā!', en: 'Yiwu has direct shipping worldwide, fill a container and ship it!' } }
    ]
},

/* ===== 武汉 Wuhan — 江城汉子 Jiang ===== */
wuhan: {
    name: 'Jiang Jiang 江江',
    title: 'River City Warrior',
    desc: 'A brave Wuhan man who survived the flood and the pandemic.',
    image: 'images/mascots/wuhan.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="wh-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="wh-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F39C12"/><stop offset="100%" stop-color="#E67E22"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#wh-shirt)"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#wh-shirt)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#wh-shirt)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="110" r="46" fill="url(#wh-face)"/>
        <path d="M55 85 Q100 55 145 85 L140 70 Q100 45 60 70" fill="#3a2a1a"/>
        <ellipse cx="80" cy="108" rx="6" ry="8" fill="#1a1a1a"/>
        <ellipse cx="120" cy="108" rx="6" ry="8" fill="#1a1a1a"/>
        <circle cx="82" cy="106" r="2" fill="#fff"/>
        <circle cx="122" cy="106" r="2" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <path d="M85 130 Q100 142 115 130" stroke="#C0392B" stroke-width="3" fill="#E74C3C" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来武汉！我是江江，大江大湖大武汉！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Wǔhàn! Wǒ shì Jiāngjiāng, dà jiāng dà hú dà Wǔhàn!',
    greetingEn: 'Hello! Welcome to Wuhan! I\'m Jiang Jiang, great river, great lake, great Wuhan!',
    voiceProfile: { id: 'heroic-male', name: 'River Hero', pitch: 0.82, rate: 0.88, icon: '🏞️', desc: 'Strong, resilient, warm voice' },
    chatTopics: [
        { label: 'Must eat?', response: { cn: '热干面！武汉人的灵魂早餐，每天早上都要吃！', pinyin: 'Rè gān miàn! Wǔhàn rén de línghún zǎocān, měi tiān zǎoshang dōu yào chī!', en: 'Hot dry noodles! The soul breakfast of Wuhan people, eaten every morning!' } },
        { label: 'Yellow Crane Tower?', response: { cn: '黄鹤楼是天下江山第一楼，李白都来过！', pinyin: 'Huánghè Lóu shì tiānxià jiāngshān dì yī lóu, Lǐ Bái dōu lái guò!', en: 'Yellow Crane Tower is the number one tower, even Li Bai visited!' } }
    ]
},

/* ===== 天津 Tianjin — 相声大叔 Xiang ===== */
tianjin: {
    name: 'Xiang Xiang 相相',
    title: 'Tianjin Comedy Uncle',
    desc: 'A funny Tianjin uncle who can make anyone laugh with crosstalk.',
    image: 'images/mascots/tianjin.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="tj-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="tj-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#95A5A6"/><stop offset="100%" stop-color="#7F8C8D"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#tj-shirt)"/>
        <ellipse cx="48" cy="180" rx="12" ry="25" fill="url(#tj-shirt)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="12" ry="25" fill="url(#tj-shirt)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="115" r="48" fill="url(#tj-face)"/>
        <path d="M52 85 Q100 50 148 85 L142 70 Q100 40 58 70" fill="#2C3E50"/>
        <ellipse cx="80" cy="108" rx="6" ry="5" fill="#1a1a1a"/>
        <ellipse cx="120" cy="108" rx="6" ry="5" fill="#1a1a1a"/>
        <circle cx="82" cy="107" r="2" fill="#fff"/>
        <circle cx="122" cy="107" r="2" fill="#fff"/>
        <ellipse cx="72" cy="125" rx="10" ry="7" fill="#FF6B6B" opacity="0.4"/>
        <ellipse cx="128" cy="125" rx="10" ry="7" fill="#FF6B6B" opacity="0.4"/>
        <ellipse cx="100" cy="138" rx="12" ry="6" fill="#C0392B" class="mascot-mouth"/>
        <circle cx="54" cy="118" r="6" fill="url(#tj-face)"/>
        <circle cx="146" cy="118" r="6" fill="url(#tj-face)"/>
    </svg>`,
    greetingCn: '您好！欢迎来天津！我是相相，给您说段相声！',
    greetingPinyin: 'Nín hǎo! Huānyíng lái Tiānjīn! Wǒ shì Xiàngxiàng, gěi nín shuō duàn xiàngsheng!',
    greetingEn: 'Hello! Welcome to Tianjin! I\'m Xiang Xiang, let me tell you a crosstalk!',
    voiceProfile: { id: 'jolly-male', name: 'Comedy Uncle', pitch: 0.9, rate: 0.92, icon: '😄', desc: 'Jolly, slightly fast, humorous voice' },
    chatTopics: [
        { label: 'Tianjin snacks?', response: { cn: '煎饼果子、狗不理包子、麻花，天津三绝！', pinyin: 'Jiānbing guǒzi, gǒu bù lǐ bāozi, máhuā, Tiānjīn sān jué!', en: 'Jianbing guozi, Goubuli baozi, and mahua — the three treasures of Tianjin!' } },
        { label: 'What to see?', response: { cn: '去意式风情区逛逛，再坐天津之眼摩天轮！', pinyin: 'Qù Yìshì fēngqíng qū guàngguang, zài zuò Tiānjīn zhī yǎn mótiānlún!', en: 'Stroll through the Italian Style Town, then ride the Tianjin Eye Ferris wheel!' } }
    ]
},

/* ===== 青岛 Qingdao — 海滨小哥 Pi ===== */
qingdao: {
    name: 'Pi Pi 啤啤',
    title: 'Coastal Beer Master',
    desc: 'A cheerful Qingdao local who loves beer, seafood, and ocean breezes.',
    image: 'images/mascots/qingdao.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="qd-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="qd-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3498DB"/><stop offset="100%" stop-color="#2980B9"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#qd-shirt)"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#qd-shirt)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#qd-shirt)" transform="rotate(10 152 180)"/>
        <rect x="148" y="195" width="10" height="18" rx="2" fill="#F39C12"/>
        <rect x="148" y="192" width="10" height="4" fill="#fff"/>
        <circle cx="100" cy="110" r="44" fill="url(#qd-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 70 Q100 45 62 70" fill="#2C3E50"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <path d="M85 130 Q100 140 115 130" stroke="#C0392B" stroke-width="3" fill="#E74C3C" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来青岛！我是啤啤，喝啤酒吃蛤蜊！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Qīngdǎo! Wǒ shì Pípí, hē píjiǔ chī gélí!',
    greetingEn: 'Hello! Welcome to Qingdao! I\'m Pi Pi, drink beer and eat clams!',
    voiceProfile: { id: 'cheerful-male', name: 'Ocean Cheer', pitch: 0.95, rate: 0.9, icon: '🍺', desc: 'Cheerful, relaxed, coastal voice' },
    chatTopics: [
        { label: 'Beer festival?', response: { cn: '青岛国际啤酒节八月举办，全世界各地的啤酒都有！', pinyin: 'Qīngdǎo guójì píjiǔ jié bā yuè jǔbàn, quán shìjiè gèdì de píjiǔ dōu yǒu!', en: 'Qingdao International Beer Festival is in August, with beers from all over the world!' } },
        { label: 'Best seafood?', response: { cn: '去营口路海鲜市场，买好找店加工，最新鲜！', pinyin: 'Qù Yíngkǒu Lù hǎixiān shìchǎng, mǎi hǎo zhǎo diàn jiāgōng, zuì xīnxiān!', en: 'Go to Yingkou Road Seafood Market, buy fresh and have a restaurant cook it!' } }
    ]
},

/* ===== 郑州 Zhengzhou — 中原大哥 Zhong ===== */
zhengzhou: {
    name: 'Zhong Zhong 中中',
    title: 'Central Plains Brother',
    desc: 'A hearty Henan man from the cradle of Chinese civilization.',
    image: 'images/mascots/zhengzhou.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="zz-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#F0C8A0"/></radialGradient>
            <linearGradient id="zz-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8BC34A"/><stop offset="100%" stop-color="#689F38"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="10" fill="url(#zz-shirt)"/>
        <ellipse cx="48" cy="180" rx="12" ry="25" fill="url(#zz-shirt)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="12" ry="25" fill="url(#zz-shirt)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="112" r="46" fill="url(#zz-face)"/>
        <path d="M55 85 Q100 55 145 85 L140 70 Q100 45 60 70" fill="#3a2a1a"/>
        <ellipse cx="80" cy="108" rx="6" ry="7" fill="#1a1a1a"/>
        <ellipse cx="120" cy="108" rx="6" ry="7" fill="#1a1a1a"/>
        <circle cx="82" cy="106" r="2" fill="#fff"/>
        <circle cx="122" cy="106" r="2" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FFB6C1" opacity="0.3"/>
        <path d="M85 130 Q100 140 115 130" stroke="#C0392B" stroke-width="3" fill="#E74C3C" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来郑州！我是中中，中原大地欢迎你！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Zhèngzhōu! Wǒ shì Zhōngzhōng, Zhōngyuán dàdì huānyíng nǐ!',
    greetingEn: 'Hello! Welcome to Zhengzhou! I\'m Zhong Zhong, the Central Plains welcomes you!',
    voiceProfile: { id: 'hearty-male', name: 'Plains Brother', pitch: 0.88, rate: 0.87, icon: '🌾', desc: 'Hearty, straightforward, warm voice' },
    chatTopics: [
        { label: 'Shaolin Temple?', response: { cn: '少林寺在登封，可以看武术表演，体验禅宗文化！', pinyin: 'Shàolín Sì zài Dēngfēng, kěyǐ kàn wǔshù biǎoyǎn, tǐyàn chánzōng wénhuà!', en: 'Shaolin Temple is in Dengfeng, you can watch kung fu shows and experience Zen culture!' } },
        { label: 'Yellow River?', response: { cn: '黄河风景名胜区可以看黄河，坐气垫船！', pinyin: 'Huáng Hé fēngjǐng míngshèng qū kěyǐ kàn Huáng Hé, zuò qìdiàn chuán!', en: 'Yellow River Scenic Area to see the river, take a hovercraft ride!' } }
    ]
},

/* ===== 乌鲁木齐 Urumqi — 丝路舞者 Si ===== */
urumqi: {
    name: 'Si Si 丝丝',
    title: 'Silk Road Dancer',
    desc: 'A graceful Uyghur dancer who bridges East and West along the Silk Road.',
    image: 'images/mascots/urumqi.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="wlw-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#E8C8A0"/></radialGradient>
            <linearGradient id="wlw-dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9B59B6"/><stop offset="100%" stop-color="#8E44AD"/></linearGradient>
        </defs>
        <path d="M65 165 Q50 220 55 235 L145 235 Q150 220 135 165 Q100 155 65 165" fill="url(#wlw-dress)"/>
        <ellipse cx="50" cy="180" rx="10" ry="25" fill="url(#wlw-dress)" transform="rotate(-10 50 180)"/>
        <ellipse cx="150" cy="180" rx="10" ry="25" fill="url(#wlw-dress)" transform="rotate(10 150 180)"/>
        <circle cx="100" cy="110" r="44" fill="url(#wlw-face)"/>
        <path d="M58 85 Q100 55 142 85 L138 70 Q100 45 62 70" fill="#1a1a1a"/>
        <rect x="90" y="62" width="20" height="6" fill="#D4AF37"/>
        <circle cx="100" cy="58" r="4" fill="#D4AF37"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.4"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.4"/>
        <path d="M90 130 Q100 136 110 130" stroke="#C0392B" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来乌鲁木齐！我是丝丝，丝绸之路上的明珠！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Wūlǔmùqí! Wǒ shì Sīsī, Sīchóu zhī lù shàng de míngzhū!',
    greetingEn: 'Hello! Welcome to Urumqi! I\'m Si Si, the pearl of the Silk Road!',
    voiceProfile: { id: 'exotic-female', name: 'Silk Road Dance', pitch: 1.1, rate: 0.85, icon: '💃', desc: 'Exotic, melodic, rhythmic voice' },
    chatTopics: [
        { label: 'Grand Bazaar?', response: { cn: '国际大巴扎什么都有！干果、手工艺品、新疆特产！', pinyin: 'Guójì Dàbāzhā shénme dōu yǒu! Gānguǒ, shǒugōng yìpǐn, Xīnjiāng tèchǎn!', en: 'Grand Bazaar has everything! Dried fruits, handicrafts, Xinjiang specialties!' } },
        { label: 'Best food?', response: { cn: '大盘鸡、羊肉串、抓饭、馕，新疆美食太多！', pinyin: 'Dàpán jī, yángròu chuàn, zhuāfàn, náng, Xīnjiāng měishí tài duō!', en: 'Big plate chicken, lamb skewers, pilaf, and naan — too much good food!' } }
    ]
},

/* ===== 呼和浩特 Hohhot — 草原骑手 Cao ===== */
hohhot: {
    name: 'Cao Cao 草草',
    title: 'Grassland Rider',
    desc: 'A brave Mongolian horseman who gallops across the endless steppe.',
    image: 'images/mascots/hohhot.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="hh-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF0E0"/><stop offset="100%" stop-color="#E8C0A0"/></radialGradient>
            <linearGradient id="hh-deel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2980B9"/><stop offset="100%" stop-color="#1F618D"/></linearGradient>
        </defs>
        <rect x="60" y="160" width="80" height="60" rx="8" fill="url(#hh-deel)"/>
        <rect x="92" y="160" width="16" height="60" fill="#D4AF37" opacity="0.6"/>
        <ellipse cx="48" cy="180" rx="10" ry="25" fill="url(#hh-deel)" transform="rotate(-10 48 180)"/>
        <ellipse cx="152" cy="180" rx="10" ry="25" fill="url(#hh-deel)" transform="rotate(10 152 180)"/>
        <circle cx="100" cy="110" r="46" fill="url(#hh-face)"/>
        <path d="M52 80 Q100 45 148 80 L142 65 Q100 35 58 65" fill="#3a2a1a"/>
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.3"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.3"/>
        <path d="M85 130 Q100 138 115 130" stroke="#8B4513" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！欢迎来呼和浩特！我是草草，草原欢迎你！',
    greetingPinyin: 'Nǐ hǎo! Huānyíng lái Hūhéhàotè! Wǒ shì Cǎocǎo, cǎoyuán huānyíng nǐ!',
    greetingEn: 'Hello! Welcome to Hohhot! I\'m Cao Cao, the grassland welcomes you!',
    voiceProfile: { id: 'grassland-male', name: 'Steppe Rider', pitch: 0.85, rate: 0.82, icon: '🐴', desc: 'Open, warm, resonant voice' },
    chatTopics: [
        { label: 'Grassland tour?', response: { cn: '去希拉穆仁草原骑马，住蒙古包看星星！', pinyin: 'Qù Xīlāmùrén cǎoyuán qí mǎ, zhù Měnggǔ bāo kàn xīngxing!', en: 'Go horseback riding on Xilamuren Grassland, stay in a yurt and stargaze!' } },
        { label: 'Mongolian food?', response: { cn: '手把肉、奶茶、烤全羊，草原三宝！', pinyin: 'Shǒubǎ ròu, nǎichá, kǎo quán yáng, cǎoyuán sān bǎo!', en: 'Hand-grabbed mutton, milk tea, and whole roasted lamb — grassland three treasures!' } }
    ]
},

/* ===== 伦敦 London — 利奥 Leo ===== */
london: {
    name: 'Leo 利奥',
    title: 'London Gentleman & China Fan',
    desc: 'A well-dressed Londoner who learned Mandarin, lived in Beijing, and loves bridging the two cultures.',
    image: 'images/mascots/london.png',
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="ld-face" cx="0.5" cy="0.4"><stop offset="0%" stop-color="#FFF5EE"/><stop offset="100%" stop-color="#F0D5C0"/></radialGradient>
            <linearGradient id="ld-coat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2C3E50"/><stop offset="100%" stop-color="#1A252F"/></linearGradient>
        </defs>
        <!-- body / coat -->
        <rect x="55" y="160" width="90" height="60" rx="10" fill="url(#ld-coat)"/>
        <path d="M70 165 L62 220 L90 215 L100 185 L110 215 L138 220 L130 165 Q100 155 70 165" fill="#243447"/>
        <rect x="92" y="160" width="16" height="25" fill="#FDF3E7" opacity="0.9"/>
        <ellipse cx="45" cy="180" rx="11" ry="26" fill="url(#ld-coat)" transform="rotate(-12 45 180)"/>
        <ellipse cx="155" cy="180" rx="11" ry="26" fill="url(#ld-coat)" transform="rotate(12 155 180)"/>
        <!-- head -->
        <circle cx="100" cy="110" r="46" fill="url(#ld-face)"/>
        <!-- bowler hat -->
        <ellipse cx="100" cy="74" rx="38" ry="10" fill="#111827"/>
        <path d="M72 74 Q72 44 100 44 Q128 44 128 74 Z" fill="#1F2937"/>
        <rect x="72" y="72" width="56" height="4" fill="#0B1220"/>
        <!-- eyes -->
        <ellipse cx="82" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <ellipse cx="118" cy="108" rx="5" ry="7" fill="#1a1a1a"/>
        <circle cx="84" cy="106" r="1.5" fill="#fff"/>
        <circle cx="120" cy="106" r="1.5" fill="#fff"/>
        <!-- red scarf -->
        <path d="M68 128 Q100 140 132 128 L136 140 Q100 152 64 140 Z" fill="#C0392B"/>
        <path d="M96 138 L92 178 L104 176 L102 138" fill="#A93226"/>
        <!-- cheeks + mouth -->
        <ellipse cx="72" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.35"/>
        <ellipse cx="128" cy="122" rx="8" ry="5" fill="#FF6B6B" opacity="0.35"/>
        <path d="M90 132 Q100 140 110 132" stroke="#C0392B" stroke-width="2.5" fill="none" class="mascot-mouth"/>
    </svg>`,
    greetingCn: '你好！我是利奥，伦敦人，也是个中国迷！欢迎来伦敦！',
    greetingPinyin: 'Nǐ hǎo! Wǒ shì Lì\'ào, Lúndūn rén, yě shì gè Zhōngguó mí! Huānyíng lái Lúndūn!',
    greetingEn: 'Hello! I\'m Leo, a Londoner and a China fan! Welcome to London!',
    voiceProfile: { id: 'gentleman-british', name: 'British Gentleman', pitch: 0.82, rate: 0.9, icon: '🎩', desc: 'Warm, articulate British male voice' },
    chatTopics: [
        { label: 'Learn Chinese here?', response: { cn: '伦敦有很多中文学校和孔子学院，我每周都去上课！', pinyin: 'Lúndūn yǒu hěn duō Zhōngwén xuéxiào hé Kǒngzǐ Xuéyuàn, wǒ měi zhōu dōu qù shàngkè!', en: 'London has many Mandarin schools and Confucius Institutes — I go to class every week!' } },
        { label: 'Chinatown?', response: { cn: '伦敦唐人街在市中心，春节游行特别热闹！', pinyin: 'Lúndūn Tángrénjiē zài shìzhōngxīn, Chūnjié yóuxíng tèbié rènào!', en: 'London\'s Chinatown is in the city center — the Lunar New Year parade is amazing!' } },
        { label: 'Visit China?', response: { cn: '从伦敦直飞北京只要 11 个小时，说走就走！', pinyin: 'Cóng Lúndūn zhífēi Běijīng zhǐyào shíyī gè xiǎoshí, shuō zǒu jiù zǒu!', en: 'It\'s only an 11-hour direct flight from London to Beijing — let\'s go!' } }
    ]
}

};
