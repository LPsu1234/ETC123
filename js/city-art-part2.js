/**
 * CITY_ART_PART2 - Continuation of city SVG art
 * Covers 18 additional cities: hangzhou, suzhou, guangzhou, shenzhen,
 * harbin, lasa, changsha, xiamen, kunming, nanjing, jingdezhen, yiwu,
 * wuhan, tianjin, qingdao, zhengzhou, urumqi, hohhot
 *
 * Format identical to city-art.js: 3 scenes per city, each {label, svg}.
 */

const CITY_ART_PART2 = {

/* ============ 杭州 Hangzhou ============ */
hangzhou: [
    {
        label: 'West Lake · 西湖',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hz1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fce4ec"/><stop offset="60%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#b39ddb"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hz1-sky)"/>
            <!-- soft mist over lake -->
            <ellipse cx="400" cy="280" rx="500" ry="50" fill="#fff" opacity="0.4"/>
            <!-- distant mountains (faint) -->
            <path d="M0 230 Q150 180 300 220 T600 200 T800 220 L800 260 L0 260 Z" fill="#9575cd" opacity="0.5"/>
            <path d="M0 250 Q200 220 400 240 T800 230 L800 290 L0 290 Z" fill="#7e57c2" opacity="0.6"/>
            <!-- Leifeng Pagoda on hill -->
            <g transform="translate(120,200)">
                <rect x="-3" y="0" width="6" height="35" fill="#fff"/>
                <rect x="-12" y="0" width="24" height="6" fill="#fff" opacity="0.7"/>
                <rect x="-10" y="-30" width="20" height="30" fill="#c1121f"/>
                <polygon points="-15,-30 15,-30 12,-32 -12,-32" fill="#c1121f"/>
                <line x1="0" y1="-30" x2="0" y2="-40" stroke="#c1121f" stroke-width="2"/>
                <circle cx="0" cy="-42" r="2" fill="#c1121f"/>
            </g>
            <!-- Three Pools Mirroring the Moon - islands -->
            <ellipse cx="350" cy="320" rx="120" ry="20" fill="#bbdefb" opacity="0.7"/>
            <ellipse cx="240" cy="310" rx="60" ry="15" fill="#a5d6a7" opacity="0.8"/>
            <ellipse cx="480" cy="320" rx="80" ry="18" fill="#a5d6a7" opacity="0.8"/>
            <!-- stone lanterns on islands -->
            <rect x="350" y="295" width="6" height="20" fill="#8d6e63"/>
            <path d="M348 295 L358 295 L356 285 L350 285 Z" fill="#8d6e63"/>
            <!-- lake surface -->
            <rect x="0" y="320" width="800" height="100" fill="#90caf9" opacity="0.5"/>
            <!-- moon reflection in water -->
            <ellipse cx="600" cy="380" rx="40" ry="3" fill="#fff" opacity="0.9"/>
            <ellipse cx="600" cy="395" rx="35" ry="3" fill="#fff" opacity="0.7"/>
            <ellipse cx="600" cy="410" rx="25" ry="3" fill="#fff" opacity="0.5"/>
            <!-- willows in foreground -->
            <g stroke="#558b2f" stroke-width="2"><line x1="0" y1="420" x2="20" y2="280"/><line x1="0" y1="420" x2="40" y2="280"/><line x1="0" y1="420" x2="60" y2="280"/><line x1="0" y1="420" x2="80" y2="280"/></g>
            <g fill="#7cb342" opacity="0.8"><ellipse cx="20" cy="280" rx="30" ry="8" transform="rotate(-30 20 280)"/><ellipse cx="40" cy="285" rx="30" ry="8" transform="rotate(-30 40 285)"/><ellipse cx="60" cy="280" rx="30" ry="8" transform="rotate(-30 60 280)"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">西湖·三潭印月</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#e1bee7">West Lake · UNESCO Heritage</text>
        </svg>`
    },
    {
        label: 'Lingyin Temple · 灵隐寺',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hz2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a5d6a7"/><stop offset="100%" stop-color="#66bb6a"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hz2-sky)"/>
            <!-- mountain backdrop -->
            <path d="M0 280 L100 200 L200 260 L320 180 L450 240 L580 200 L720 260 L800 220 L800 320 L0 320 Z" fill="#388e3c"/>
            <!-- mist in mountains -->
            <ellipse cx="200" cy="260" rx="80" ry="20" fill="#fff" opacity="0.4"/>
            <!-- temple complex on hillside -->
            <g transform="translate(400,300)">
                <!-- main hall with golden roof -->
                <rect x="-80" y="-40" width="160" height="50" fill="#a0522d"/>
                <!-- curved golden roof -->
                <path d="M-100 -40 Q0 -90 100 -40 Z" fill="#ffc107" stroke="#5d4037" stroke-width="2"/>
                <path d="M-95 -40 L95 -40 L90 -50 L-90 -50 Z" fill="#f9a825"/>
                <!-- pillars -->
                <rect x="-75" y="10" width="6" height="40" fill="#c1121f"/>
                <rect x="-30" y="10" width="6" height="40" fill="#c1121f"/>
                <rect x="20" y="10" width="6" height="40" fill="#c1121f"/>
                <rect x="65" y="10" width="6" height="40" fill="#c1121f"/>
                <!-- door -->
                <rect x="-20" y="20" width="40" height="30" fill="#3e2723"/>
                <!-- side halls -->
                <rect x="-180" y="0" width="80" height="40" fill="#a0522d"/>
                <path d="M-185 0 Q-140 -35 -100 0 Z" fill="#ffc107" stroke="#5d4037" stroke-width="1.5"/>
                <rect x="100" y="0" width="80" height="40" fill="#a0522d"/>
                <path d="M95 0 Q140 -35 185 0 Z" fill="#ffc107" stroke="#5d4037" stroke-width="1.5"/>
            </g>
            <!-- stone path -->
            <path d="M400 350 L380 400 L420 400" fill="#a1887f" opacity="0.7"/>
            <!-- incense stick -->
            <rect x="395" y="320" width="2" height="20" fill="#5d4037"/>
            <g fill="#fff" opacity="0.5"><circle cx="396" cy="320" r="2"/><circle cx="396" cy="316" r="2"/><circle cx="396" cy="312" r="2"/></g>
            <!-- trees -->
            <g fill="#1b5e20" opacity="0.8"><circle cx="80" cy="380" r="40"/><circle cx="700" cy="370" r="45"/><circle cx="600" cy="400" r="35"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">灵隐寺·禅意</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Lingyin Temple · Buddhist Sanctuary</text>
        </svg>`
    },
    {
        label: 'Longjing Tea · 龙井茶',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hz3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a5d6a7"/><stop offset="100%" stop-color="#81c784"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hz3-sky)"/>
            <!-- terraced tea fields -->
            <path d="M0 280 Q200 240 400 270 T800 260 L800 320 L0 320 Z" fill="#388e3c"/>
            <path d="M0 320 Q200 290 400 310 T800 300 L800 360 L0 360 Z" fill="#2e7d32"/>
            <path d="M0 360 Q200 340 400 350 T800 340 L800 400 L0 400 Z" fill="#1b5e20"/>
            <!-- tea bushes rows -->
            <g fill="#43a047" opacity="0.7"><ellipse cx="100" cy="290" rx="40" ry="6"/><ellipse cx="200" cy="295" rx="40" ry="6"/><ellipse cx="300" cy="285" rx="40" ry="6"/><ellipse cx="400" cy="290" rx="40" ry="6"/><ellipse cx="500" cy="295" rx="40" ry="6"/><ellipse cx="600" cy="285" rx="40" ry="6"/><ellipse cx="700" cy="290" rx="40" ry="6"/></g>
            <g fill="#43a047" opacity="0.7"><ellipse cx="100" cy="330" rx="40" ry="6"/><ellipse cx="200" cy="335" rx="40" ry="6"/><ellipse cx="300" cy="325" rx="40" ry="6"/><ellipse cx="400" cy="330" rx="40" ry="6"/><ellipse cx="500" cy="335" rx="40" ry="6"/><ellipse cx="600" cy="325" rx="40" ry="6"/><ellipse cx="700" cy="330" rx="40" ry="6"/></g>
            <!-- tea picker -->
            <g transform="translate(380,360)">
                <ellipse cx="0" cy="0" rx="6" ry="8" fill="#d7ccc8"/>
                <rect x="-3" y="8" width="6" height="20" fill="#c1121f"/>
                <rect x="-7" y="28" width="14" height="20" fill="#3e51b5"/>
                <!-- basket -->
                <ellipse cx="15" cy="30" rx="12" ry="6" fill="#8d6e63"/>
                <rect x="3" y="24" width="24" height="12" fill="#a1887f"/>
            </g>
            <!-- tea ceremony setup foreground -->
            <g transform="translate(150,440)">
                <!-- tea pot -->
                <ellipse cx="0" cy="20" rx="20" ry="6" fill="#3e2723"/>
                <ellipse cx="0" cy="10" rx="18" ry="14" fill="#5d4037"/>
                <path d="M0 -4 L0 -12" stroke="#3e2723" stroke-width="3"/>
                <ellipse cx="0" cy="-14" rx="3" ry="2" fill="#3e2723"/>
                <!-- spout -->
                <path d="M18 8 Q30 5 28 14" fill="none" stroke="#5d4037" stroke-width="3"/>
                <!-- cups -->
                <ellipse cx="-50" cy="30" rx="6" ry="2" fill="#1a0e0a"/>
                <ellipse cx="-50" cy="28" rx="5" ry="3" fill="#5d4037"/>
                <ellipse cx="50" cy="30" rx="6" ry="2" fill="#1a0e0a"/>
                <ellipse cx="50" cy="28" rx="5" ry="3" fill="#5d4037"/>
                <!-- steam -->
                <path d="M0 -14 Q-2 -20 0 -26" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
                <path d="M-50 28 Q-52 22 -50 16" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
            </g>
            <!-- calligraphy -->
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">龙井茶园</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Longjing Tea · 中国十大名茶</text>
        </svg>`
    }
],

/* ============ 苏州 Suzhou ============ */
suzhou: [
    {
        label: "Humble Administrator's Garden · 拙政园",
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sz1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fce4ec"/><stop offset="100%" stop-color="#fff3e0"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#sz1-sky)"/>
            <!-- pond -->
            <ellipse cx="400" cy="380" rx="350" ry="120" fill="#80cbc4" opacity="0.7"/>
            <g fill="#fff" opacity="0.5"><ellipse cx="300" cy="380" rx="80" ry="2"/><ellipse cx="500" cy="370" rx="100" ry="2"/><ellipse cx="400" cy="410" rx="120" ry="2"/></g>
            <!-- koi -->
            <ellipse cx="350" cy="390" rx="14" ry="4" fill="#ff6b35"/><polygon points="364,390 376,386 376,394" fill="#ff6b35"/>
            <ellipse cx="450" cy="400" rx="16" ry="4" fill="#fff"/><polygon points="466,400 480,396 480,404" fill="#fff"/>
            <ellipse cx="380" cy="370" rx="12" ry="3" fill="#fdd835"/>
            <!-- lotus leaves -->
            <ellipse cx="200" cy="380" rx="30" ry="8" fill="#388e3c"/>
            <ellipse cx="600" cy="395" rx="28" ry="7" fill="#388e3c"/>
            <ellipse cx="500" cy="350" rx="22" ry="6" fill="#2e7d32"/>
            <!-- main hall -->
            <rect x="280" y="200" width="240" height="80" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
            <path d="M260 200 Q400 130 540 200 Z" fill="#5d4037"/>
            <path d="M280 200 L520 200 L515 185 L285 185 Z" fill="#3e2723"/>
            <!-- hall pillars and doors -->
            <rect x="290" y="280" width="6" height="40" fill="#c1121f"/>
            <rect x="370" y="280" width="6" height="40" fill="#c1121f"/>
            <rect x="430" y="280" width="6" height="40" fill="#c1121f"/>
            <rect x="510" y="280" width="6" height="40" fill="#c1121f"/>
            <rect x="370" y="295" width="60" height="50" fill="#3e2723"/>
            <!-- side pavilions -->
            <rect x="120" y="250" width="120" height="50" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
            <path d="M105 250 Q180 215 255 250 Z" fill="#5d4037"/>
            <rect x="560" y="250" width="120" height="50" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
            <path d="M545 250 Q620 215 695 250 Z" fill="#5d4037"/>
            <!-- garden stones -->
            <path d="M50 380 Q70 300 100 340 Q120 300 140 370 Z" fill="#5d4037" stroke="#3e2723" stroke-width="1.5"/>
            <path d="M660 380 Q680 310 710 350 Q730 310 750 370 Z" fill="#5d4037" stroke="#3e2723" stroke-width="1.5"/>
            <!-- arched bridge -->
            <path d="M150 410 Q400 380 650 410" fill="none" stroke="#3e2723" stroke-width="3"/>
            <path d="M150 410 Q400 380 650 410 L650 420 Q400 390 150 420 Z" fill="#8d6e63"/>
            <!-- willow (famous Suzhou willows) -->
            <line x1="100" y1="380" x2="90" y2="280" stroke="#558b2f" stroke-width="2"/>
            <g fill="#7cb342" opacity="0.8"><ellipse cx="90" cy="280" rx="40" ry="10" transform="rotate(-30 90 280)"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#3e2723" font-weight="700">拙政园·江南</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#5d4037">Humble Administrator's Garden · UNESCO</text>
        </svg>`
    },
    {
        label: 'Pingjiang Road · 平江路',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sz2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ffe0b2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#sz2-sky)"/>
            <!-- canal water -->
            <rect x="0" y="380" width="800" height="120" fill="#80cbc4" opacity="0.7"/>
            <g fill="#fff" opacity="0.4"><rect x="50" y="400" width="60" height="2"/><rect x="200" y="410" width="80" height="2"/><rect x="400" y="400" width="80" height="2"/><rect x="600" y="420" width="60" height="2"/></g>
            <!-- gondola boat -->
            <path d="M180 430 Q220 410 260 430 L260 440 Q220 445 180 440 Z" fill="#3e2723"/>
            <circle cx="220" cy="415" r="6" fill="#d7ccc8"/>
            <line x1="220" y1="410" x2="280" y2="380" stroke="#3e2723" stroke-width="2"/>
            <!-- traditional white-walled dark-roofed houses left -->
            <g>
                <rect x="0" y="180" width="380" height="200" fill="#fff8e1"/>
                <rect x="0" y="160" width="380" height="30" fill="#3e2723"/>
                <!-- arched doorways -->
                <rect x="20" y="280" width="50" height="100" fill="#3e2723"/>
                <path d="M20 280 Q45 270 70 280 Z" fill="#3e2723"/>
                <rect x="90" y="260" width="50" height="120" fill="#5d4037"/>
                <rect x="170" y="280" width="50" height="100" fill="#3e2723"/>
                <path d="M170 280 Q195 270 220 280 Z" fill="#3e2723"/>
                <rect x="250" y="280" width="50" height="100" fill="#3e2723"/>
                <rect x="320" y="280" width="50" height="100" fill="#5d4037"/>
            </g>
            <!-- right houses (further away) -->
            <g>
                <rect x="420" y="200" width="380" height="180" fill="#fff8e1"/>
                <rect x="420" y="180" width="380" height="30" fill="#3e2723"/>
                <rect x="440" y="290" width="50" height="90" fill="#3e2723"/>
                <rect x="510" y="290" width="50" height="90" fill="#5d4037"/>
                <rect x="580" y="290" width="50" height="90" fill="#3e2723"/>
                <rect x="650" y="290" width="50" height="90" fill="#5d4037"/>
                <rect x="720" y="290" width="50" height="90" fill="#3e2723"/>
            </g>
            <!-- lanterns -->
            <line x1="100" y1="240" x2="100" y2="260" stroke="#3e2723" stroke-width="1"/>
            <ellipse cx="100" cy="270" rx="8" ry="12" fill="#ff5252"/>
            <line x1="600" y1="260" x2="600" y2="280" stroke="#3e2723" stroke-width="1"/>
            <ellipse cx="600" cy="290" rx="8" ry="12" fill="#ff5252"/>
            <!-- bridge -->
            <path d="M280 380 Q400 350 520 380" fill="none" stroke="#3e2723" stroke-width="4"/>
            <path d="M280 380 Q400 350 520 380 L520 395 Q400 365 280 395 Z" fill="#8d6e63"/>
            <!-- far willow -->
            <line x1="700" y1="380" x2="710" y2="280" stroke="#558b2f" stroke-width="2"/>
            <g fill="#7cb342" opacity="0.8"><ellipse cx="710" cy="280" rx="30" ry="8" transform="rotate(-30 710 280)"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#3e2723" font-weight="700">平江路·水巷</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#5d4037">Pingjiang Road · 800-year-old Water Lane</text>
        </svg>`
    },
    {
        label: 'Tiger Hill Pagoda · 虎丘',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sz3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe0b2"/><stop offset="60%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#ff8a65"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#sz3-sky)"/>
            <circle cx="600" cy="120" r="36" fill="#fff" opacity="0.9"/>
            <circle cx="600" cy="120" r="80" fill="#fff" opacity="0.3"/>
            <!-- the leaning pagoda (China's Pisa) -->
            <g transform="translate(380,200)">
                <!-- 7 tier pagoda -->
                <g fill="#a1887f" stroke="#5d4037" stroke-width="2">
                    <polygon points="-30,30 30,30 25,20 -25,20"/>
                    <rect x="-22" y="0" width="44" height="20"/>
                    <polygon points="-28,0 28,0 24,-15 -24,-15"/>
                    <rect x="-18" y="-35" width="36" height="20"/>
                    <polygon points="-24,-35 24,-35 20,-50 -20,-50"/>
                    <rect x="-15" y="-70" width="30" height="20"/>
                    <polygon points="-20,-70 20,-70 17,-85 -17,-85"/>
                    <rect x="-12" y="-105" width="24" height="20"/>
                    <polygon points="-16,-105 16,-105 13,-120 -13,-120"/>
                    <rect x="-9" y="-140" width="18" height="20"/>
                    <polygon points="-12,-140 12,-140 10,-155 -10,-155"/>
                </g>
                <!-- THE LEAN - tilt pagoda 8 degrees -->
                <polygon points="0,-180 -7,-160 -3,-160 -3,-140 -2,-120 -3,-105 -2,-90 -1,-50 -1,30 1,30 0,30" fill="#5d4037" transform="rotate(8 0 -75)"/>
                <!-- bamboo showing the lean -->
                <line x1="-40" y1="180" x2="-40" y2="-160" stroke="#558b2f" stroke-width="2"/>
                <!-- finial -->
                <line x1="0" y1="-180" x2="0" y2="-200" stroke="#fdd835" stroke-width="2"/>
                <circle cx="0" cy="-200" r="4" fill="#fdd835"/>
            </g>
            <!-- hill ground -->
            <path d="M0 350 Q200 380 400 360 T800 350 L800 500 L0 500 Z" fill="#2e7d32"/>
            <!-- pine trees -->
            <g fill="#1b5e20"><circle cx="100" cy="350" r="25"/><circle cx="150" cy="340" r="20"/><circle cx="700" cy="345" r="22"/></g>
            <!-- stones -->
            <g fill="#5d4037"><circle cx="50" cy="420" r="15"/><circle cx="80" cy="430" r="10"/><circle cx="750" cy="420" r="12"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">虎丘·斜塔</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Tiger Hill Leaning Pagoda · China's Pisa</text>
        </svg>`
    }
],

/* ============ 广州 Guangzhou ============ */
guangzhou: [
    {
        label: 'Canton Tower · 广州塔',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gz1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff9a8b"/><stop offset="50%" stop-color="#ff6a88"/><stop offset="100%" stop-color="#3a1c71"/></linearGradient>
                <linearGradient id="gz1-tower" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff4081"/><stop offset="50%" stop-color="#e91e63"/><stop offset="100%" stop-color="#c2185b"/></linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#gz1-sky)"/>
            <circle cx="700" cy="140" r="36" fill="#ffd54f"/>
            <!-- ground -->
            <rect x="0" y="430" width="800" height="70" fill="#1a237e"/>
            <!-- other skyscrapers silhouettes -->
            <g fill="#1a237e" opacity="0.7">
                <rect x="50" y="280" width="40" height="160"/>
                <rect x="100" y="240" width="50" height="200"/>
                <rect x="160" y="290" width="40" height="150"/>
            </g>
            <g fill="#0d47a1" opacity="0.6">
                <rect x="600" y="280" width="40" height="160"/>
                <rect x="650" y="220" width="50" height="220"/>
                <rect x="710" y="260" width="40" height="180"/>
            </g>
            <!-- Canton Tower (Xiao Man Yao - "little waist") -->
            <g transform="translate(380,100)">
                <!-- lower shaft -->
                <path d="M-12 0 L-15 80 L-15 100 L15 100 L15 80 L12 0 Z" fill="url(#gz1-tower)"/>
                <!-- waist (the iconic narrowing) -->
                <ellipse cx="0" cy="100" rx="20" ry="8" fill="#ff4081" stroke="#c2185b" stroke-width="1"/>
                <path d="M-15 100 L-8 230 L8 230 L15 100 Z" fill="url(#gz1-tower)"/>
                <!-- middle observation ellipse -->
                <ellipse cx="0" cy="150" rx="22" ry="6" fill="#ff4081" stroke="#c2185b" stroke-width="1"/>
                <!-- upper shaft -->
                <path d="M-8 230 L-12 300 L12 300 L8 230 Z" fill="url(#gz1-tower)"/>
                <!-- top antenna -->
                <line x1="0" y1="300" x2="0" y2="280" stroke="#ff4081" stroke-width="3"/>
                <line x1="0" y1="280" x2="0" y2="240" stroke="#fff" stroke-width="1"/>
                <circle cx="0" cy="240" r="3" fill="#fff"/>
                <!-- window lights -->
                <g fill="#fff">
                    <rect x="-10" y="20" width="3" height="3"/><rect x="-5" y="20" width="3" height="3"/>
                    <rect x="-7" y="40" width="3" height="3"/><rect x="-2" y="40" width="3" height="3"/>
                    <rect x="-7" y="180" width="3" height="3"/><rect x="-2" y="180" width="3" height="3"/>
                    <rect x="-7" y="240" width="3" height="3"/><rect x="-2" y="240" width="3" height="3"/>
                </g>
            </g>
            <!-- pearl river reflections -->
            <g fill="#ff4081" opacity="0.3"><ellipse cx="380" cy="450" rx="20" ry="2"/><ellipse cx="380" cy="465" rx="15" ry="2"/><ellipse cx="380" cy="480" rx="10" ry="2"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#ffd54f" font-weight="700">小蛮腰·广州塔</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#90caf9">Canton Tower · 600m of Slim Waist</text>
        </svg>`
    },
    {
        label: 'Shamian Island · 沙面岛',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="gz2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ffe0b2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#gz2-sky)"/>
            <!-- pearl river -->
            <rect x="0" y="380" width="800" height="120" fill="#80cbc4" opacity="0.7"/>
            <g fill="#fff" opacity="0.4"><rect x="50" y="400" width="80" height="2"/><rect x="200" y="410" width="100" height="2"/><rect x="400" y="400" width="80" height="2"/><rect x="600" y="420" width="80" height="2"/></g>
            <!-- European colonial buildings -->
            <!-- Building 1: yellow french consulate style -->
            <rect x="50" y="160" width="180" height="220" fill="#fff59d"/>
            <rect x="50" y="155" width="180" height="10" fill="#8d6e63"/>
            <rect x="90" y="240" width="100" height="140" fill="#5d4037"/>
            <g fill="#fff"><rect x="100" y="180" width="20" height="30"/><rect x="130" y="180" width="20" height="30"/><rect x="160" y="180" width="20" height="30"/></g>
            <rect x="100" y="180" width="20" height="30" fill="none" stroke="#5d4037" stroke-width="1"/>
            <polygon points="50,160 230,160 220,140 60,140" fill="#a0522d"/>
            <!-- Building 2: white church style -->
            <rect x="250" y="180" width="160" height="200" fill="#fff8e1"/>
            <polygon points="250,180 410,180 400,150 260,150" fill="#8d6e63"/>
            <rect x="290" y="290" width="80" height="90" fill="#3e2723"/>
            <path d="M290 290 Q330 280 370 290" fill="#3e2723"/>
            <circle cx="330" cy="270" r="12" fill="#fdd835" stroke="#5d4037" stroke-width="1"/>
            <line x1="330" y1="260" x2="330" y2="280" stroke="#5d4037" stroke-width="1"/>
            <!-- Tower with cross -->
            <rect x="318" y="120" width="24" height="30" fill="#fff8e1"/>
            <line x1="330" y1="100" x2="330" y2="120" stroke="#5d4037" stroke-width="2"/>
            <line x1="320" y1="110" x2="340" y2="110" stroke="#5d4037" stroke-width="2"/>
            <!-- Building 3: pink European -->
            <rect x="430" y="200" width="160" height="180" fill="#f8bbd0"/>
            <polygon points="430,200 590,200 580,180 440,180" fill="#a1887f"/>
            <rect x="470" y="290" width="80" height="90" fill="#5d4037"/>
            <g fill="#fff8e1"><rect x="450" y="220" width="15" height="30"/><rect x="475" y="220" width="15" height="30"/><rect x="500" y="220" width="15" height="30"/><rect x="525" y="220" width="15" height="30"/><rect x="550" y="220" width="15" height="30"/></g>
            <!-- Building 4: green tile -->
            <rect x="610" y="180" width="170" height="200" fill="#c5e1a5"/>
            <polygon points="610,180 780,180 770,160 620,160" fill="#5d4037"/>
            <rect x="650" y="290" width="80" height="90" fill="#5d4037"/>
            <!-- tropical trees -->
            <g fill="#2e7d32"><circle cx="20" cy="380" r="30"/><circle cx="780" cy="390" r="35"/><circle cx="400" cy="160" r="20" opacity="0.5"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">沙面岛·欧陆</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#8d6e63">Shamian Island · Colonial European Quarter</text>
        </svg>`
    },
    {
        label: 'Dim Sum · 早茶',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><radialGradient id="gz3-bg"><stop offset="0%" stop-color="#ffecb3"/><stop offset="100%" stop-color="#ffb74d"/></radialGradient></defs>
            <rect width="800" height="500" fill="url(#gz3-bg)"/>
            <!-- steam -->
            <g fill="#fff" opacity="0.4">
                <ellipse cx="200" cy="200" rx="50" ry="80"/>
                <ellipse cx="300" cy="180" rx="50" ry="80"/>
                <ellipse cx="400" cy="190" rx="50" ry="80"/>
                <ellipse cx="500" cy="200" rx="50" ry="80"/>
                <ellipse cx="600" cy="190" rx="50" ry="80"/>
            </g>
            <!-- table (round, traditional dim sum table) -->
            <ellipse cx="400" cy="450" rx="380" ry="40" fill="#3e2723"/>
            <ellipse cx="400" cy="440" rx="370" ry="35" fill="#5d4037"/>
            <!-- bamboo steamer 1 - har gow -->
            <g transform="translate(200,360)">
                <ellipse cx="0" cy="20" rx="60" ry="15" fill="#8d6e63"/>
                <rect x="-60" y="-10" width="120" height="30" fill="#a1887f"/>
                <ellipse cx="0" cy="-10" rx="60" ry="15" fill="#d7ccc8"/>
                <!-- steamer 2 stacked -->
                <rect x="-50" y="-30" width="100" height="25" fill="#a1887f"/>
                <ellipse cx="0" y="-30" rx="50" ry="12" fill="#d7ccc8"/>
                <!-- har gow dumplings visible -->
                <ellipse cx="-15" cy="-30" rx="10" ry="5" fill="#fff" opacity="0.8"/>
                <ellipse cx="0" cy="-30" rx="10" ry="5" fill="#fff" opacity="0.8"/>
                <ellipse cx="15" cy="-30" rx="10" ry="5" fill="#fff" opacity="0.8"/>
            </g>
            <!-- siu mai -->
            <g transform="translate(380,360)">
                <ellipse cx="0" cy="20" rx="50" ry="12" fill="#8d6e63"/>
                <rect x="-50" y="-10" width="100" height="30" fill="#a1887f"/>
                <ellipse cx="0" cy="-10" rx="50" ry="12" fill="#d7ccc8"/>
                <!-- siu mai dumplings (yellow tops) -->
                <circle cx="-20" cy="-15" r="10" fill="#fff" stroke="#fdd835" stroke-width="1"/>
                <circle cx="0" cy="-15" r="10" fill="#fff" stroke="#fdd835" stroke-width="1"/>
                <circle cx="20" cy="-15" r="10" fill="#fff" stroke="#fdd835" stroke-width="1"/>
                <circle cx="-20" cy="-15" r="6" fill="#ff8a65"/>
                <circle cx="0" cy="-15" r="6" fill="#ff8a65"/>
                <circle cx="20" cy="-15" r="6" fill="#ff8a65"/>
            </g>
            <!-- char siu bao -->
            <g transform="translate(540,370)">
                <ellipse cx="0" cy="15" rx="40" ry="10" fill="#8d6e63"/>
                <rect x="-40" y="-10" width="80" height="25" fill="#a1887f"/>
                <ellipse cx="0" cy="-10" rx="40" ry="10" fill="#d7ccc8"/>
                <!-- buns -->
                <ellipse cx="-15" cy="-12" rx="10" ry="12" fill="#fff"/>
                <ellipse cx="0" cy="-12" rx="10" ry="12" fill="#fff"/>
                <ellipse cx="15" cy="-12" rx="10" ry="12" fill="#fff"/>
            </g>
            <!-- cheung fun rice roll -->
            <ellipse cx="700" cy="380" rx="40" ry="6" fill="#fff" stroke="#a1887f" stroke-width="2"/>
            <line x1="700" y1="375" x2="700" y2="385" stroke="#c1121f" stroke-width="2"/>
            <!-- teapots -->
            <g transform="translate(100,400)">
                <ellipse cx="0" cy="0" rx="15" ry="6" fill="#3e2723"/>
                <rect x="-12" y="-20" width="24" height="20" fill="#c1121f"/>
                <ellipse cx="0" cy="-20" rx="12" ry="4" fill="#a02020"/>
                <path d="M12 -10 Q22 -15 18 -5" fill="none" stroke="#c1121f" stroke-width="3"/>
                <path d="M0 -20 L0 -28" stroke="#3e2723" stroke-width="2"/>
                <circle cx="0" cy="-30" r="3" fill="#3e2723"/>
            </g>
            <!-- teacups small -->
            <g fill="#fff" stroke="#3e2723" stroke-width="1">
                <ellipse cx="150" cy="430" rx="10" ry="4"/>
                <ellipse cx="170" cy="430" rx="10" ry="4"/>
                <ellipse cx="660" cy="430" rx="10" ry="4"/>
                <ellipse cx="680" cy="430" rx="10" ry="4"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#c1121f" font-weight="700">广式早茶</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#5d4037">Yum Cha · Cantonese Dim Sum Culture</text>
        </svg>`
    }
],

/* ============ 深圳 Shenzhen ============ */
shenzhen: [
    {
        label: 'Shenzhen CBD · 深圳CBD',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sz-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80d8ff"/><stop offset="40%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0277bd"/></linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#sz-sky)"/>
            <circle cx="120" cy="80" r="36" fill="#fff" opacity="0.95"/>
            <circle cx="120" cy="80" r="80" fill="#fff" opacity="0.2"/>
            <!-- ground -->
            <rect x="0" y="430" width="800" height="70" fill="#37474f"/>
            <!-- Ping An Finance Center (tallest) -->
            <rect x="320" y="80" width="80" height="350" fill="#1976d2"/>
            <g fill="#bbdefb" opacity="0.6">
                <rect x="325" y="100" width="6" height="2"/><rect x="335" y="100" width="6" height="2"/><rect x="345" y="100" width="6" height="2"/><rect x="365" y="100" width="6" height="2"/><rect x="375" y="100" width="6" height="2"/><rect x="385" y="100" width="6" height="2"/>
                <rect x="325" y="130" width="6" height="2"/><rect x="345" y="130" width="6" height="2"/><rect x="365" y="130" width="6" height="2"/><rect x="385" y="130" width="6" height="2"/>
                <rect x="325" y="160" width="6" height="2"/><rect x="335" y="160" width="6" height="2"/><rect x="365" y="160" width="6" height="2"/><rect x="375" y="160" width="6" height="2"/>
            </g>
            <rect x="350" y="80" width="20" height="10" fill="#0d47a1"/>
            <polygon points="350,80 370,80 365,70 355,70" fill="#0d47a1"/>
            <!-- surrounding skyscrapers -->
            <g fill="#0288d1">
                <rect x="200" y="180" width="50" height="250"/>
                <rect x="120" y="220" width="40" height="210"/>
                <rect x="260" y="200" width="40" height="230"/>
            </g>
            <g fill="#039be5">
                <rect x="420" y="160" width="50" height="270"/>
                <rect x="480" y="200" width="40" height="230"/>
                <rect x="540" y="240" width="40" height="190"/>
            </g>
            <g fill="#0277bd">
                <rect x="600" y="220" width="40" height="210"/>
                <rect x="650" y="180" width="50" height="250"/>
                <rect x="710" y="240" width="40" height="190"/>
            </g>
            <!-- window lights -->
            <g fill="#fff" opacity="0.4">
                <rect x="205" y="195" width="3" height="3"/><rect x="220" y="195" width="3" height="3"/><rect x="235" y="195" width="3" height="3"/>
                <rect x="205" y="220" width="3" height="3"/><rect x="220" y="220" width="3" height="3"/>
                <rect x="425" y="180" width="3" height="3"/><rect x="440" y="180" width="3" height="3"/><rect x="455" y="180" width="3" height="3"/>
                <rect x="425" y="200" width="3" height="3"/><rect x="455" y="200" width="3" height="3"/>
                <rect x="655" y="200" width="3" height="3"/><rect x="670" y="200" width="3" height="3"/><rect x="685" y="200" width="3" height="3"/>
                <rect x="655" y="220" width="3" height="3"/><rect x="685" y="220" width="3" height="3"/>
            </g>
            <!-- Shenzhen Bay -->
            <rect x="0" y="430" width="800" height="40" fill="#0277bd"/>
            <g fill="#fff" opacity="0.5"><rect x="50" y="445" width="60" height="2"/><rect x="200" y="455" width="80" height="2"/><rect x="400" y="445" width="70" height="2"/><rect x="600" y="455" width="80" height="2"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">深圳·速度之城</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">Shenzhen · 40 years from fishing village to megacity</text>
        </svg>`
    },
    {
        label: 'Window of the World · 世界之窗',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sz2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#81c784"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#sz2-sky)"/>
            <!-- grass -->
            <path d="M0 380 Q200 360 400 370 T800 360 L800 500 L0 500 Z" fill="#66bb6a"/>
            <!-- Eiffel Tower -->
            <g transform="translate(150,200)">
                <polygon points="-30,180 30,180 5,-50 -5,-50" fill="#8d6e63"/>
                <g fill="#5d4037"><rect x="-15" y="80" width="30" height="8"/><rect x="-20" y="120" width="40" height="8"/><rect x="-25" y="150" width="50" height="8"/></g>
                <line x1="0" y1="-50" x2="0" y2="-70" stroke="#8d6e63" stroke-width="2"/>
                <line x1="-10" y1="-50" x2="10" y2="-50" stroke="#8d6e63" stroke-width="1"/>
            </g>
            <!-- Pyramids -->
            <g transform="translate(350,280)">
                <polygon points="0,-100 80,80 -80,80" fill="#d7ccc8" stroke="#8d6e63" stroke-width="2"/>
                <polygon points="-50,40 50,40 0,-60" fill="#a1887f" opacity="0.5"/>
            </g>
            <!-- Taj Mahal -->
            <g transform="translate(550,260)">
                <polygon points="-50,80 50,80 40,30 -40,30" fill="#fff8e1"/>
                <rect x="-15" y="-10" width="30" height="40" fill="#fff8e1"/>
                <polygon points="-25,40 25,40 0,-40" fill="#fff"/>
                <circle cx="0" cy="-50" r="3" fill="#fff"/>
                <rect x="-30" y="80" width="60" height="20" fill="#fff8e1"/>
            </g>
            <!-- Leaning Tower of Pisa -->
            <g transform="translate(720,300) rotate(-15)">
                <rect x="-15" y="-100" width="30" height="180" fill="#fff"/>
                <g fill="#a1887f"><circle cx="-8" cy="-85" r="3"/><circle cx="0" cy="-85" r="3"/><circle cx="8" cy="-85" r="3"/><circle cx="-8" cy="-65" r="3"/><circle cx="0" cy="-65" r="3"/><circle cx="8" cy="-65" r="3"/><circle cx="-8" cy="-45" r="3"/><circle cx="0" cy="-45" r="3"/><circle cx="8" cy="-45" r="3"/><circle cx="-8" cy="-25" r="3"/><circle cx="0" cy="-25" r="3"/><circle cx="8" cy="-25" r="3"/><circle cx="-8" cy="-5" r="3"/><circle cx="0" cy="-5" r="3"/><circle cx="8" cy="-5" r="3"/></g>
            </g>
            <!-- Sydney Opera House -->
            <g transform="translate(50,330)">
                <path d="M0 30 Q20 0 30 -20 Q50 -30 70 -10 L80 30 Z" fill="#fff" stroke="#90caf9" stroke-width="2"/>
                <path d="M20 30 Q40 0 50 -30 Q70 -40 90 -20 L100 30 Z" fill="#fff" stroke="#90caf9" stroke-width="2"/>
            </g>
            <!-- clouds -->
            <g fill="#fff" opacity="0.5"><circle cx="100" cy="100" r="20"/><circle cx="120" cy="100" r="25"/><circle cx="400" cy="80" r="20"/><circle cx="420" cy="80" r="30"/><circle cx="700" cy="100" r="20"/><circle cx="720" cy="100" r="25"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">世界之窗</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Window of the World · 130 world landmarks in 1 park</text>
        </svg>`
    },
    {
        label: 'Tech City · 科技之城',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="sz3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d47a1"/><stop offset="100%" stop-color="#000051"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#sz3-sky)"/>
            <!-- stars -->
            <g fill="#fff"><circle cx="100" cy="60" r="1.5"/><circle cx="220" cy="40" r="1"/><circle cx="340" cy="80" r="1.5"/><circle cx="500" cy="60" r="1"/><circle cx="620" cy="40" r="1.5"/><circle cx="720" cy="80" r="1"/></g>
            <!-- circuit pattern background -->
            <g stroke="#00e5ff" stroke-width="1" fill="none" opacity="0.3">
                <line x1="0" y1="100" x2="800" y2="100"/><line x1="0" y1="200" x2="800" y2="200"/><line x1="0" y1="300" x2="800" y2="300"/>
                <line x1="100" y1="0" x2="100" y2="430"/><line x1="300" y1="0" x2="300" y2="430"/><line x1="500" y1="0" x2="500" y2="430"/><line x1="700" y1="0" x2="700" y2="430"/>
            </g>
            <!-- DJI drone (hexacopter silhouette) -->
            <g transform="translate(400,200)">
                <circle cx="0" cy="0" r="15" fill="#37474f"/>
                <g fill="#00bcd4"><circle cx="-30" cy="-15" r="8"/><circle cx="30" cy="-15" r="8"/><circle cx="-30" cy="15" r="8"/><circle cx="30" cy="15" r="8"/><circle cx="0" cy="-30" r="8"/><circle cx="0" cy="30" r="8"/></g>
                <line x1="-15" y1="-10" x2="-30" y2="-15" stroke="#90a4ae" stroke-width="2"/>
                <line x1="15" y1="-10" x2="30" y2="-15" stroke="#90a4ae" stroke-width="2"/>
                <line x1="-15" y1="10" x2="-30" y2="15" stroke="#90a4ae" stroke-width="2"/>
                <line x1="15" y1="10" x2="30" y2="15" stroke="#90a4ae" stroke-width="2"/>
                <line x1="0" y1="-13" x2="0" y2="-30" stroke="#90a4ae" stroke-width="2"/>
                <line x1="0" y1="13" x2="0" y2="30" stroke="#90a4ae" stroke-width="2"/>
                <circle cx="0" cy="0" r="6" fill="#ff4081"/>
                <!-- propeller blur -->
                <ellipse cx="-30" cy="-15" rx="14" ry="3" fill="#fff" opacity="0.2"/>
                <ellipse cx="30" cy="-15" rx="14" ry="3" fill="#fff" opacity="0.2"/>
            </g>
            <!-- neon streaks from drone -->
            <g stroke="#00e5ff" stroke-width="2" fill="none">
                <path d="M400 200 Q350 150 200 100"/>
                <path d="M400 200 Q450 250 600 300"/>
            </g>
            <!-- floating data -->
            <g fill="#00e5ff" opacity="0.7">
                <text x="150" y="200" font-family="monospace" font-size="12">01001 11010</text>
                <text x="600" y="180" font-family="monospace" font-size="12">AI · 5G · IoT</text>
                <text x="200" y="350" font-family="monospace" font-size="12">Tencent · Huawei · DJI</text>
                <text x="500" y="380" font-family="monospace" font-size="12">Tech · Innovation</text>
            </g>
            <!-- LED matrix -->
            <g fill="#00e5ff">
                <rect x="50" y="280" width="3" height="3"/><rect x="60" y="280" width="3" height="3"/><rect x="70" y="280" width="3" height="3"/>
                <rect x="60" y="290" width="3" height="3"/>
                <rect x="50" y="300" width="3" height="3"/><rect x="60" y="300" width="3" height="3"/><rect x="70" y="300" width="3" height="3"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#00e5ff" font-weight="700">深圳·科技之都</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#80deea">Silicon Valley of China · Tech capital</text>
        </svg>`
    }
],

/* ============ 哈尔滨 Harbin ============ */
harbin: [
    {
        label: 'Ice & Snow World · 冰雪大世界',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="hr1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d47a1"/><stop offset="60%" stop-color="#1976d2"/><stop offset="100%" stop-color="#82b1ff"/></linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#hr1-sky)"/>
            <!-- aurora -->
            <ellipse cx="200" cy="150" rx="300" ry="20" fill="#69f0ae" opacity="0.4"/>
            <ellipse cx="500" cy="180" rx="300" ry="15" fill="#40c4ff" opacity="0.4"/>
            <!-- snow ground -->
            <path d="M0 380 Q200 370 400 380 T800 380 L800 500 L0 500 Z" fill="#fff"/>
            <!-- snow falling -->
            <g fill="#fff"><circle cx="100" cy="100" r="2"/><circle cx="200" cy="60" r="1.5"/><circle cx="300" cy="120" r="2"/><circle cx="400" cy="80" r="1.5"/><circle cx="500" cy="100" r="2"/><circle cx="600" cy="60" r="1.5"/><circle cx="700" cy="120" r="2"/><circle cx="150" cy="200" r="1"/><circle cx="250" cy="220" r="1.5"/><circle cx="350" cy="180" r="1"/><circle cx="450" cy="220" r="1.5"/><circle cx="550" cy="180" r="1"/><circle cx="650" cy="220" r="1.5"/></g>
            <!-- ice palace - ice sculptures -->
            <!-- left castle -->
            <g transform="translate(150,250)" fill="#b3e5fc" stroke="#fff" stroke-width="1">
                <rect x="0" y="40" width="100" height="100"/>
                <rect x="40" y="0" width="20" height="50"/>
                <polygon points="40,0 60,0 50,-30"/>
                <!-- icicles on tower -->
                <g fill="#b3e5fc" stroke="#80d8ff" stroke-width="0.5"><polygon points="40,-30 42,-5 38,-5"/><polygon points="50,-30 52,-10 48,-10"/><polygon points="60,-30 62,-5 58,-5"/></g>
                <!-- ice blocks -->
                <g fill="#80d8ff"><rect x="0" y="60" width="30" height="20"/><rect x="70" y="60" width="30" height="20"/><rect x="20" y="90" width="25" height="20"/><rect x="60" y="90" width="30" height="20"/></g>
                <!-- archway -->
                <rect x="35" y="80" width="30" height="60" fill="#0288d1"/>
                <path d="M30 80 Q50 70 70 80" fill="none" stroke="#fff" stroke-width="2"/>
            </g>
            <!-- center castle (biggest) -->
            <g transform="translate(320,200)" fill="#80d8ff" stroke="#fff" stroke-width="1">
                <rect x="0" y="80" width="160" height="120"/>
                <!-- towers -->
                <rect x="20" y="0" width="25" height="80"/>
                <polygon points="20,0 45,0 32,-50"/>
                <rect x="115" y="0" width="25" height="80"/>
                <polygon points="115,0 140,0 127,-50"/>
                <!-- center spire -->
                <rect x="75" y="-30" width="10" height="110"/>
                <polygon points="75,-30 85,-30 80,-70"/>
                <!-- gate -->
                <rect x="60" y="130" width="40" height="70" fill="#01579b"/>
                <path d="M50 130 Q80 115 110 130" fill="none" stroke="#fff" stroke-width="2"/>
                <!-- ice blocks detail -->
                <g fill="#b3e5fc"><rect x="0" y="100" width="20" height="15"/><rect x="140" y="100" width="20" height="15"/><rect x="20" y="160" width="20" height="15"/><rect x="120" y="160" width="20" height="15"/></g>
            </g>
            <!-- right ice sculpture - swan -->
            <g transform="translate(580,290)">
                <ellipse cx="0" cy="20" rx="40" ry="20" fill="#b3e5fc" stroke="#80d8ff" stroke-width="1"/>
                <circle cx="-35" cy="10" r="15" fill="#b3e5fc"/>
                <path d="M-50 5 L-65 -5 L-50 0 Z" fill="#fdd835"/>
                <ellipse cx="20" cy="30" rx="15" ry="8" fill="#80d8ff"/>
            </g>
            <!-- LED light beams -->
            <g stroke="#ff4081" stroke-width="2" fill="none"><line x1="100" y1="0" x2="200" y2="250"/><line x1="700" y1="0" x2="600" y2="250"/></g>
            <g stroke="#40c4ff" stroke-width="2" fill="none"><line x1="50" y1="0" x2="300" y2="200"/><line x1="750" y1="0" x2="500" y2="200"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">冰雪大世界</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">Ice and Snow World · -30°C fantasy</text>
        </svg>`
    },
    {
        label: 'Saint Sophia Cathedral · 圣索菲亚',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hr2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#546e7a"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hr2-sky)"/>
            <!-- snow ground -->
            <rect x="0" y="430" width="800" height="70" fill="#cfd8dc"/>
            <!-- distant buildings -->
            <g fill="#90a4ae"><rect x="50" y="350" width="60" height="100"/><rect x="700" y="360" width="50" height="90"/></g>
            <!-- Sofia Cathedral -->
            <g transform="translate(400,200)">
                <!-- main dome -->
                <ellipse cx="0" cy="100" rx="130" ry="80" fill="#bcaaa4"/>
                <path d="M-130 100 A130 80 0 0 1 130 100 Z" fill="#a1887f"/>
                <path d="M-100 100 A100 60 0 0 1 100 100 Z" fill="#8d6e63"/>
                <!-- central onion dome -->
                <ellipse cx="0" cy="60" rx="40" ry="60" fill="#a1887f"/>
                <ellipse cx="0" cy="60" rx="30" ry="45" fill="#5d4037"/>
                <!-- dome top cross -->
                <line x1="0" y1="-10" x2="0" y2="50" stroke="#3e2723" stroke-width="3"/>
                <line x1="-8" y1="20" x2="8" y2="20" stroke="#3e2723" stroke-width="2"/>
                <circle cx="0" cy="-15" r="6" fill="#fdd835"/>
                <!-- side smaller domes -->
                <ellipse cx="-100" cy="120" rx="20" ry="30" fill="#8d6e63"/>
                <ellipse cx="100" cy="120" rx="20" ry="30" fill="#8d6e63"/>
                <!-- four smaller domes corners -->
                <ellipse cx="-90" cy="80" rx="12" ry="15" fill="#5d4037"/>
                <ellipse cx="90" cy="80" rx="12" ry="15" fill="#5d4037"/>
                <circle cx="-90" cy="65" r="3" fill="#fdd835"/>
                <circle cx="90" cy="65" r="3" fill="#fdd835"/>
                <!-- entrance arcades -->
                <g fill="#3e2723"><rect x="-30" y="160" width="60" height="60"/><rect x="-50" y="160" width="20" height="60"/><rect x="30" y="160" width="20" height="60"/></g>
                <!-- arched entrance -->
                <path d="M-20 220 L-20 180 Q0 160 20 180 L20 220 Z" fill="#1a0e0a"/>
                <!-- windows rosettes -->
                <circle cx="-60" cy="100" r="8" fill="#fff" opacity="0.7"/>
                <circle cx="60" cy="100" r="8" fill="#fff" opacity="0.7"/>
                <circle cx="0" cy="40" r="6" fill="#fff" opacity="0.7"/>
            </g>
            <!-- snowflakes -->
            <g fill="#fff" opacity="0.8">
                <circle cx="100" cy="100" r="2"/><circle cx="200" cy="60" r="1.5"/><circle cx="300" cy="120" r="2"/><circle cx="500" cy="100" r="1.5"/><circle cx="600" cy="60" r="2"/><circle cx="700" cy="120" r="1.5"/>
                <circle cx="150" cy="200" r="1"/><circle cx="250" cy="220" r="1.5"/><circle cx="450" cy="180" r="1"/><circle cx="550" cy="220" r="1.5"/><circle cx="650" cy="180" r="1"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">圣索菲亚教堂</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#cfd8dc">Saint Sophia Cathedral · Russian Legacy</text>
        </svg>`
    },
    {
        label: 'Central Street · 中央大街',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hr3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffccbc"/><stop offset="100%" stop-color="#ff8a65"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hr3-sky)"/>
            <!-- sun -->
            <circle cx="700" cy="100" r="40" fill="#fff" opacity="0.95"/>
            <!-- road (cobblestone) -->
            <rect x="0" y="380" width="800" height="120" fill="#a1887f"/>
            <g fill="#8d6e63"><rect x="0" y="380" width="800" height="5"/><rect x="0" y="395" width="800" height="5"/><rect x="0" y="410" width="800" height="5"/></g>
            <!-- snow on sides -->
            <path d="M0 380 L0 360 L60 360 L60 380 Z" fill="#fff"/>
            <path d="M740 380 L740 360 L800 360 L800 380 Z" fill="#fff"/>
            <!-- European buildings left side -->
            <g>
                <rect x="0" y="200" width="100" height="180" fill="#a0522d"/>
                <polygon points="0,200 100,200 90,180 10,180" fill="#8d6e63"/>
                <g fill="#fff" stroke="#5d4037" stroke-width="1"><rect x="10" y="220" width="15" height="25"/><rect x="35" y="220" width="15" height="25"/><rect x="60" y="220" width="15" height="25"/><rect x="10" y="260" width="15" height="25"/><rect x="35" y="260" width="15" height="25"/><rect x="60" y="260" width="15" height="25"/></g>
                <rect x="40" y="320" width="20" height="60" fill="#3e2723"/>
                <polygon points="40,320 60,320 50,300" fill="#5d4037"/>
            </g>
            <g>
                <rect x="110" y="180" width="120" height="200" fill="#8d6e63"/>
                <polygon points="110,180 230,180 220,160 120,160" fill="#5d4037"/>
                <g fill="#fff" stroke="#5d4037" stroke-width="1"><rect x="120" y="200" width="15" height="25"/><rect x="145" y="200" width="15" height="25"/><rect x="170" y="200" width="15" height="25"/><rect x="195" y="200" width="15" height="25"/><rect x="120" y="240" width="15" height="25"/><rect x="145" y="240" width="15" height="25"/><rect x="170" y="240" width="15" height="25"/><rect x="195" y="240" width="15" height="25"/></g>
                <rect x="155" y="300" width="30" height="80" fill="#3e2723"/>
                <!-- spire -->
                <polygon points="160,160 180,160 170,130" fill="#5d4037"/>
            </g>
            <!-- European buildings right side -->
            <g>
                <rect x="570" y="190" width="120" height="190" fill="#d7ccc8"/>
                <polygon points="570,190 690,190 680,170 580,170" fill="#a1887f"/>
                <g fill="#fff" stroke="#5d4037" stroke-width="1"><rect x="580" y="210" width="15" height="25"/><rect x="605" y="210" width="15" height="25"/><rect x="640" y="210" width="15" height="25"/><rect x="665" y="210" width="15" height="25"/><rect x="580" y="250" width="15" height="25"/><rect x="605" y="250" width="15" height="25"/><rect x="640" y="250" width="15" height="25"/><rect x="665" y="250" width="15" height="25"/></g>
                <rect x="615" y="300" width="30" height="80" fill="#3e2723"/>
            </g>
            <g>
                <rect x="700" y="200" width="100" height="180" fill="#a0522d"/>
                <polygon points="700,200 800,200 790,180 710,180" fill="#8d6e63"/>
                <g fill="#fff" stroke="#5d4037" stroke-width="1"><rect x="710" y="220" width="15" height="25"/><rect x="735" y="220" width="15" height="25"/><rect x="760" y="220" width="15" height="25"/></g>
                <rect x="740" y="320" width="20" height="60" fill="#3e2723"/>
            </g>
            <!-- street lamps -->
            <g stroke="#3e2723" stroke-width="2" fill="none"><line x1="280" y1="380" x2="280" y2="280"/><circle cx="280" cy="280" r="6" fill="#fdd835"/></g>
            <g stroke="#3e2723" stroke-width="2" fill="none"><line x1="540" y1="380" x2="540" y2="280"/><circle cx="540" cy="280" r="6" fill="#fdd835"/></g>
            <!-- pedestrians in winter coats -->
            <g fill="#c1121f"><circle cx="350" cy="360" r="5"/><rect x="345" y="365" width="10" height="15"/></g>
            <g fill="#3e51b5"><circle cx="380" cy="365" r="5"/><rect x="375" y="370" width="10" height="15"/></g>
            <g fill="#388e3c"><circle cx="420" cy="360" r="5"/><rect x="415" y="365" width="10" height="15"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">中央大街</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Central Street · 亚洲第一街</text>
        </svg>`
    }
],

/* ============ 拉萨 Lhasa ============ */
lasa: [
    {
        label: 'Potala Palace · 布达拉宫',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ls1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#42a5f5"/><stop offset="60%" stop-color="#90caf9"/><stop offset="100%" stop-color="#e1f5fe"/></linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#ls1-sky)"/>
            <!-- distant snowy mountains -->
            <path d="M0 220 L80 180 L160 220 L240 170 L320 220 L400 160 L480 220 L560 180 L640 220 L720 170 L800 220 L800 280 L0 280 Z" fill="#90a4ae" opacity="0.7"/>
            <g fill="#fff"><polygon points="240,170 260,200 240,210"/><polygon points="400,160 420,200 400,210"/><polygon points="720,170 740,200 720,210"/></g>
            <!-- Red Palace (center) -->
            <g transform="translate(400,280)">
                <!-- base -->
                <rect x="-200" y="100" width="400" height="80" fill="#fff"/>
                <!-- red palace body -->
                <rect x="-100" y="0" width="200" height="100" fill="#c1121f"/>
                <rect x="-90" y="0" width="180" height="100" fill="#a02020" opacity="0.3"/>
                <!-- golden roof 1 -->
                <polygon points="-100,-5 100,-5 90,-30 -90,-30" fill="#fdd835"/>
                <polygon points="-90,-30 90,-30 80,-50 -80,-50" fill="#f9a825"/>
                <!-- white palace (left) -->
                <rect x="-200" y="20" width="100" height="80" fill="#fff"/>
                <!-- white palace (right) -->
                <rect x="100" y="20" width="100" height="80" fill="#fff"/>
                <!-- windows white palace -->
                <g fill="#3e2723"><rect x="-180" y="40" width="10" height="15"/><rect x="-160" y="40" width="10" height="15"/><rect x="-140" y="40" width="10" height="15"/><rect x="-120" y="40" width="10" height="15"/><rect x="110" y="40" width="10" height="15"/><rect x="130" y="40" width="10" height="15"/><rect x="150" y="40" width="10" height="15"/><rect x="170" y="40" width="10" height="15"/></g>
                <!-- red palace windows -->
                <g fill="#3e2723"><rect x="-80" y="20" width="15" height="20"/><rect x="-50" y="20" width="15" height="20"/><rect x="-20" y="20" width="15" height="20"/><rect x="10" y="20" width="15" height="20"/><rect x="40" y="20" width="15" height="20"/><rect x="70" y="20" width="15" height="20"/></g>
                <g fill="#3e2723"><rect x="-80" y="55" width="15" height="20"/><rect x="-50" y="55" width="15" height="20"/><rect x="-20" y="55" width="15" height="20"/><rect x="10" y="55" width="15" height="20"/><rect x="40" y="55" width="15" height="20"/><rect x="70" y="55" width="15" height="20"/></g>
                <!-- top golden ornament -->
                <line x1="0" y1="-50" x2="0" y2="-100" stroke="#fdd835" stroke-width="3"/>
                <circle cx="0" cy="-100" r="6" fill="#fdd835"/>
                <!-- sun and moon symbol -->
                <circle cx="-30" cy="-90" r="5" fill="#fff"/>
                <circle cx="30" cy="-90" r="5" fill="#3e2723"/>
            </g>
            <!-- ground -->
            <rect x="0" y="460" width="800" height="40" fill="#8d6e63"/>
            <!-- prayer flags -->
            <g>
                <line x1="50" y1="380" x2="350" y2="430" stroke="#3e2723" stroke-width="1"/>
                <rect x="80" y="395" width="6" height="10" fill="#c1121f"/>
                <rect x="120" y="400" width="6" height="10" fill="#fdd835"/>
                <rect x="160" y="405" width="6" height="10" fill="#388e3c"/>
                <rect x="200" y="410" width="6" height="10" fill="#fff"/>
                <rect x="240" y="415" width="6" height="10" fill="#1976d2"/>
                <line x1="450" y1="430" x2="750" y2="380" stroke="#3e2723" stroke-width="1"/>
                <rect x="500" y="415" width="6" height="10" fill="#c1121f"/>
                <rect x="540" y="410" width="6" height="10" fill="#fdd835"/>
                <rect x="580" y="405" width="6" height="10" fill="#388e3c"/>
                <rect x="620" y="400" width="6" height="10" fill="#fff"/>
                <rect x="660" y="395" width="6" height="10" fill="#1976d2"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">布达拉宫</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#bbdefb">Potala Palace · 1300 years on Red Hill</text>
        </svg>`
    },
    {
        label: 'Jokhang Temple · 大昭寺',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="ls2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#ffe082"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#ls2-sky)"/>
            <!-- mountains -->
            <path d="M0 200 L150 150 L300 200 L450 130 L600 200 L750 160 L800 200 L800 280 L0 280 Z" fill="#8d6e63" opacity="0.6"/>
            <!-- Jokhang Temple -->
            <g transform="translate(400,260)">
                <!-- main building -->
                <rect x="-150" y="40" width="300" height="120" fill="#fff" stroke="#5d4037" stroke-width="2"/>
                <!-- golden roof -->
                <polygon points="-160,40 160,40 150,15 -150,15" fill="#fdd835"/>
                <polygon points="-150,15 150,15 140,-10 -140,-10" fill="#f9a825"/>
                <!-- upper tier -->
                <rect x="-100" y="-30" width="200" height="40" fill="#d7ccc8"/>
                <polygon points="-110,-30 110,-30 100,-50 -100,-50" fill="#fdd835"/>
                <!-- golden spires -->
                <circle cx="0" cy="-80" r="20" fill="#fdd835"/>
                <line x1="0" y1="-80" x2="0" y2="-110" stroke="#fdd835" stroke-width="2"/>
                <circle cx="0" cy="-115" r="6" fill="#fdd835"/>
                <!-- entrance -->
                <rect x="-30" y="100" width="60" height="60" fill="#1a0e0a"/>
                <path d="M-30 100 Q0 80 30 100" fill="none" stroke="#fdd835" stroke-width="2"/>
                <!-- windows -->
                <g fill="#5d4037"><rect x="-130" y="60" width="15" height="25"/><rect x="-100" y="60" width="15" height="25"/><rect x="85" y="60" width="15" height="25"/><rect x="115" y="60" width="15" height="25"/><rect x="-130" y="100" width="15" height="25"/><rect x="115" y="100" width="15" height="25"/></g>
                <!-- prayer wheels -->
                <g fill="#c1121f" stroke="#3e2723" stroke-width="2">
                    <circle cx="-160" cy="100" r="10"/>
                    <circle cx="160" cy="100" r="10"/>
                </g>
            </g>
            <!-- prostrating pilgrim -->
            <g transform="translate(200,420)">
                <ellipse cx="0" cy="0" rx="15" ry="6" fill="#c1121f"/>
                <circle cx="0" cy="-3" r="4" fill="#8d6e63"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">大昭寺</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#fff176">Jokhang Temple · Sacred Heart of Tibet</text>
        </svg>`
    },
    {
        label: 'Barkhor Street · 八廓街',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="ls3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ce93d8"/><stop offset="40%" stop-color="#f48fb1"/><stop offset="100%" stop-color="#ffab91"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#ls3-sky)"/>
            <!-- mountains far -->
            <path d="M0 200 L100 160 L220 200 L350 140 L480 200 L600 150 L720 200 L800 170 L800 280 L0 280 Z" fill="#9575cd" opacity="0.5"/>
            <!-- white walls of Barkhor -->
            <rect x="50" y="200" width="700" height="180" fill="#f5f5f5" stroke="#a1887f" stroke-width="2"/>
            <!-- doorways (Tibetan style - trapezoid + small) -->
            <g fill="#1a0e0a">
                <path d="M100 380 L100 280 Q120 270 140 280 L140 380 Z"/>
                <path d="M250 380 L250 280 Q270 270 290 280 L290 380 Z"/>
                <path d="M400 380 L400 280 Q420 270 440 280 L440 380 Z"/>
                <path d="M550 380 L550 280 Q570 270 590 280 L590 380 Z"/>
                <path d="M700 380 L700 280 Q720 270 740 280 L740 380 Z"/>
            </g>
            <!-- window decorations (Tibetan black bands) -->
            <g fill="#3e2723"><rect x="50" y="220" width="700" height="20"/><rect x="50" y="350" width="700" height="20"/></g>
            <g fill="#fff" stroke="#3e2723" stroke-width="1">
                <rect x="180" y="260" width="40" height="60"/>
                <rect x="330" y="260" width="40" height="60"/>
                <rect x="480" y="260" width="40" height="60"/>
                <rect x="630" y="260" width="40" height="60"/>
            </g>
            <!-- street ground -->
            <rect x="0" y="380" width="800" height="120" fill="#a1887f"/>
            <!-- pilgrims walking clockwise -->
            <g>
                <circle cx="150" cy="420" r="6" fill="#c1121f"/>
                <rect x="144" y="426" width="12" height="20" fill="#c1121f"/>
                <circle cx="180" cy="430" r="6" fill="#3e51b5"/>
                <rect x="174" y="436" width="12" height="20" fill="#3e51b5"/>
                <circle cx="220" cy="420" r="6" fill="#388e3c"/>
                <rect x="214" y="426" width="12" height="20" fill="#388e3c"/>
                <circle cx="540" cy="430" r="6" fill="#c1121f"/>
                <rect x="534" y="436" width="12" height="20" fill="#c1121f"/>
                <circle cx="580" cy="420" r="6" fill="#3e51b5"/>
                <rect x="574" y="426" width="12" height="20" fill="#3e51b5"/>
                <circle cx="620" cy="430" r="6" fill="#fdd835"/>
                <rect x="614" y="436" width="12" height="20" fill="#fdd835"/>
            </g>
            <!-- prayer flags above -->
            <g stroke="#3e2723" stroke-width="1" fill="none">
                <line x1="0" y1="100" x2="800" y2="100"/>
                <line x1="0" y1="80" x2="800" y2="80"/>
                <line x1="0" y1="60" x2="800" y2="60"/>
            </g>
            <g><rect x="100" y="90" width="8" height="12" fill="#c1121f"/><rect x="180" y="85" width="8" height="12" fill="#fdd835"/><rect x="260" y="75" width="8" height="12" fill="#388e3c"/><rect x="340" y="65" width="8" height="12" fill="#fff"/><rect x="420" y="55" width="8" height="12" fill="#3e51b5"/><rect x="500" y="60" width="8" height="12" fill="#c1121f"/><rect x="580" y="75" width="8" height="12" fill="#fdd835"/><rect x="660" y="85" width="8" height="12" fill="#388e3c"/><rect x="740" y="90" width="8" height="12" fill="#3e51b5"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">八廓街·转经道</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#f48fb1">Barkhor Kora · Walk with pilgrims</text>
        </svg>`
    }
]
};

