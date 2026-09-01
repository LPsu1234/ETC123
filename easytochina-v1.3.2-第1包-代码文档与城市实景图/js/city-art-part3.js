/**
 * CITY_ART_PART3 - 12 more cities
 * changsha, xiamen, kunming, nanjing, jingdezhen, yiwu,
 * wuhan, tianjin, qingdao, zhengzhou, urumqi, hohhot
 */

const CITY_ART_PART3 = {

/* ============ 长沙 Changsha ============ */
changsha: [
    {
        label: 'Yuelu Mountain · 岳麓山',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="cs1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a5d6a7"/><stop offset="100%" stop-color="#81c784"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#cs1-sky)"/>
            <!-- mountain -->
            <path d="M0 350 Q200 200 400 280 T800 250 L800 500 L0 500 Z" fill="#2e7d32"/>
            <path d="M0 380 Q200 280 400 340 T800 320 L800 500 L0 500 Z" fill="#1b5e20"/>
            <!-- Yuelu Academy -->
            <g transform="translate(400,300)">
                <rect x="-60" y="0" width="120" height="40" fill="#fff" stroke="#5d4037" stroke-width="2"/>
                <polygon points="-70,0 70,0 60,-25 -60,-25" fill="#5d4037"/>
                <polygon points="-60,-25 60,-25 50,-40 -50,-40" fill="#3e2723"/>
                <line x1="0" y1="-40" x2="0" y2="-55" stroke="#5d4037" stroke-width="2"/>
                <circle cx="0" cy="-58" r="3" fill="#c1121f"/>
                <rect x="-20" y="15" width="40" height="25" fill="#3e2723"/>
            </g>
            <!-- Aiwan Pavilion in forest -->
            <g transform="translate(200,250)">
                <rect x="-25" y="20" width="50" height="20" fill="#fff"/>
                <polygon points="-30,20 30,20 25,5 -25,5" fill="#a0522d"/>
            </g>
            <!-- maple leaves (Changsha famous for autumn maple) -->
            <g fill="#d32f2f"><circle cx="100" cy="300" r="15"/><circle cx="120" cy="320" r="12"/><circle cx="600" cy="280" r="15"/><circle cx="620" cy="300" r="12"/><circle cx="700" cy="320" r="14"/></g>
            <!-- path -->
            <path d="M400 460 Q380 380 400 320" fill="none" stroke="#a1887f" stroke-width="3"/>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">岳麓山·书院</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Yuelu Mountain · 千年学府岳麓书院</text>
        </svg>`
    },
    {
        label: 'Orange Isle · 橘子洲',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="cs2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#80cbc4"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#cs2-sky)"/>
            <!-- Xiang River -->
            <rect x="0" y="350" width="800" height="150" fill="#4fc3f7" opacity="0.7"/>
            <g fill="#fff" opacity="0.5"><rect x="50" y="370" width="80" height="2"/><rect x="200" y="380" width="100" height="2"/><rect x="400" y="375" width="100" height="2"/><rect x="600" y="390" width="80" height="2"/></g>
            <!-- Orange Isle (long sandbar) -->
            <ellipse cx="400" cy="330" rx="380" ry="25" fill="#f5f5f5"/>
            <ellipse cx="400" cy="320" rx="350" ry="15" fill="#fff"/>
            <!-- Mao Zedong statue -->
            <g transform="translate(380,290)">
                <rect x="-15" y="-30" width="30" height="50" fill="#8d6e63"/>
                <ellipse cx="0" cy="-40" rx="12" ry="15" fill="#d7ccc8"/>
                <!-- hair -->
                <path d="M-12 -45 Q-15 -55 0 -55 Q15 -55 12 -45" fill="#3e2723"/>
                <!-- coat -->
                <path d="M-25 -10 L25 -10 L30 30 L-30 30 Z" fill="#a1887f"/>
                <line x1="0" y1="-10" x2="0" y2="30" stroke="#5d4037" stroke-width="1"/>
                <!-- arm pointing forward -->
                <path d="M10 -5 L40 -20" stroke="#a1887f" stroke-width="8"/>
            </g>
            <!-- pavilion -->
            <g transform="translate(200,310)">
                <rect x="-15" y="-5" width="30" height="20" fill="#fff"/>
                <polygon points="-20,-5 20,-5 15,-20 -15,-20" fill="#a0522d"/>
            </g>
            <!-- bamboo -->
            <g stroke="#388e3c" stroke-width="2"><line x1="100" y1="320" x2="100" y2="280"/><line x1="105" y1="320" x2="105" y2="285"/><line x1="700" y1="320" x2="700" y2="280"/><line x1="705" y1="320" x2="705" y2="285"/></g>
            <g fill="#7cb342"><ellipse cx="100" cy="285" rx="20" ry="5"/><ellipse cx="700" cy="285" rx="20" ry="5"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">橘子洲·湘江</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b2ebf2">Orange Isle · Mao's Hometown Park</text>
        </svg>`
    },
    {
        label: 'IFS · 网红长沙',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="cs3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#311b92"/><stop offset="100%" stop-color="#5e35b1"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#cs3-sky)"/>
            <!-- IFS skyscraper (KAWS-style art) -->
            <rect x="300" y="100" width="200" height="350" fill="#1a237e"/>
            <g fill="#fff" opacity="0.7">
                <rect x="320" y="120" width="5" height="5"/><rect x="330" y="120" width="5" height="5"/><rect x="350" y="120" width="5" height="5"/><rect x="370" y="120" width="5" height="5"/><rect x="390" y="120" width="5" height="5"/><rect x="410" y="120" width="5" height="5"/><rect x="430" y="120" width="5" height="5"/><rect x="450" y="120" width="5" height="5"/><rect x="470" y="120" width="5" height="5"/>
                <rect x="320" y="150" width="5" height="5"/><rect x="350" y="150" width="5" height="5"/><rect x="390" y="150" width="5" height="5"/><rect x="430" y="150" width="5" height="5"/><rect x="470" y="150" width="5" height="5"/>
            </g>
            <!-- KAWS figure on top -->
            <g transform="translate(400,90)">
                <ellipse cx="0" cy="0" rx="22" ry="18" fill="#fff"/>
                <circle cx="-8" cy="-3" r="3" fill="#000"/>
                <circle cx="8" cy="-3" r="3" fill="#000"/>
                <line x1="-15" y1="-12" x2="-12" y2="-8" stroke="#000" stroke-width="2"/>
                <line x1="15" y1="-12" x2="12" y2="-8" stroke="#000" stroke-width="2"/>
                <ellipse cx="0" cy="0" rx="18" ry="14" fill="none" stroke="#000" stroke-width="1"/>
            </g>
            <!-- ground -->
            <rect x="0" y="450" width="800" height="50" fill="#311b92"/>
            <!-- IFS advertising -->
            <text x="320" y="475" font-family="sans-serif" font-size="40" fill="#ff4081" font-weight="900">IFS</text>
            <!-- stinky tofu stand -->
            <g transform="translate(150,420)">
                <rect x="0" y="0" width="60" height="40" fill="#8d6e63"/>
                <text x="10" y="25" font-family="serif" font-size="14" fill="#fdd835">臭豆腐</text>
            </g>
            <!-- chayan yuese tea -->
            <g transform="translate(600,420)">
                <circle cx="20" cy="20" r="20" fill="#c1121f"/>
                <text x="10" y="25" font-family="serif" font-size="10" fill="#fff" font-weight="700">茶颜</text>
            </g>
            <text x="40" y="35" font-family="serif" font-size="22" fill="#fff" font-weight="700">网红长沙</text>
            <text x="40" y="55" font-family="sans-serif" font-size="11" fill="#b39ddb">Trendy Changsha · Tea &amp; Stinky Tofu</text>
        </svg>`
    }
],

/* ============ 厦门 Xiamen ============ */
xiamen: [
    {
        label: 'Gulangyu Island · 鼓浪屿',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="xm1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80deea"/><stop offset="100%" stop-color="#b2ebf2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#xm1-sky)"/>
            <!-- sea -->
            <rect x="0" y="320" width="800" height="180" fill="#4fc3f7" opacity="0.7"/>
            <g fill="#fff" opacity="0.5"><rect x="50" y="350" width="80" height="2"/><rect x="200" y="370" width="100" height="2"/><rect x="400" y="360" width="80" height="2"/><rect x="600" y="370" width="100" height="2"/></g>
            <!-- Gulangyu island (smaller foreground) -->
            <path d="M0 350 Q200 320 400 340 T800 320 L800 360 L0 380 Z" fill="#388e3c"/>
            <path d="M0 380 Q200 360 400 370 T800 360 L800 400 L0 400 Z" fill="#2e7d32"/>
            <!-- colonial villas -->
            <g>
                <rect x="100" y="290" width="80" height="60" fill="#fff8e1" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="95,290 185,290 175,270 105,270" fill="#a1887f"/>
                <g fill="#5d4037"><rect x="110" y="305" width="12" height="20"/><rect x="130" y="305" width="12" height="20"/><rect x="155" y="305" width="12" height="20"/></g>
            </g>
            <g>
                <rect x="240" y="280" width="100" height="70" fill="#f8bbd0" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="235,280 345,280 335,260 245,260" fill="#a1887f"/>
                <g fill="#5d4037"><rect x="255" y="295" width="15" height="25"/><rect x="280" y="295" width="15" height="25"/><rect x="310" y="295" width="15" height="25"/></g>
            </g>
            <g>
                <rect x="400" y="295" width="80" height="55" fill="#c5e1a5" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="395,295 485,295 475,275 405,275" fill="#a1887f"/>
            </g>
            <g>
                <rect x="540" y="285" width="90" height="65" fill="#fff59d" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="535,285 635,285 625,265 545,265" fill="#a1887f"/>
            </g>
            <!-- Shuzhuang Garden piano museum - piano shape -->
            <g transform="translate(700,290)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="#3e2723"/>
                <rect x="-30" y="-20" width="60" height="5" fill="#5d4037"/>
                <g fill="#fff"><rect x="-20" y="-15" width="2" height="2"/><rect x="-15" y="-15" width="2" height="2"/><rect x="-10" y="-15" width="2" height="2"/><rect x="-5" y="-15" width="2" height="2"/><rect x="0" y="-15" width="2" height="2"/><rect x="5" y="-15" width="2" height="2"/><rect x="10" y="-15" width="2" height="2"/><rect x="15" y="-15" width="2" height="2"/><rect x="20" y="-15" width="2" height="2"/></g>
            </g>
            <!-- sail boats -->
            <g transform="translate(150,400)">
                <path d="M0 0 L80 0 L70 10 L10 10 Z" fill="#fff"/>
                <line x1="40" y1="0" x2="40" y2="-30" stroke="#3e2723" stroke-width="2"/>
                <polygon points="40,-30 60,0 40,0" fill="#fff" stroke="#3e2723" stroke-width="1"/>
            </g>
            <g transform="translate(550,420)">
                <path d="M0 0 L60 0 L52 8 L8 8 Z" fill="#fff"/>
                <line x1="30" y1="0" x2="30" y2="-22" stroke="#3e2723" stroke-width="2"/>
                <polygon points="30,-22 45,0 30,0" fill="#fff" stroke="#3e2723" stroke-width="1"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">鼓浪屿·琴岛</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b2ebf2">Gulangyu · Piano Island &amp; UNESCO</text>
        </svg>`
    },
    {
        label: 'Xiamen University · 厦大',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="xm2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c8e6c9"/><stop offset="100%" stop-color="#a5d6a7"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#xm2-sky)"/>
            <!-- main building (Jiageng) -->
            <g transform="translate(400,250)">
                <rect x="-100" y="40" width="200" height="120" fill="#a0522d"/>
                <polygon points="-110,40 110,40 100,15 -100,15" fill="#5d4037"/>
                <!-- roof detail -->
                <polygon points="-100,15 100,15 90,-15 -90,-15" fill="#3e2723"/>
                <!-- columns -->
                <g fill="#fff"><rect x="-85" y="55" width="10" height="100"/><rect x="-50" y="55" width="10" height="100"/><rect x="-15" y="55" width="10" height="100"/><rect x="20" y="55" width="10" height="100"/><rect x="55" y="55" width="10" height="100"/></g>
                <!-- clock tower -->
                <rect x="-20" y="-50" width="40" height="35" fill="#a0522d"/>
                <circle cx="0" cy="-32" r="8" fill="#fdd835" stroke="#5d4037" stroke-width="1"/>
                <line x1="0" y1="-32" x2="0" y2="-38" stroke="#3e2723" stroke-width="1.5"/>
                <line x1="0" y1="-32" x2="5" y2="-30" stroke="#3e2723" stroke-width="1"/>
                <polygon points="-25,-50 25,-50 20,-65 -20,-65" fill="#5d4037"/>
            </g>
            <!-- Fu Lian Tunnel (signature tunnel) -->
            <g transform="translate(400,400)">
                <ellipse cx="0" cy="0" rx="160" ry="20" fill="#1a0e0a"/>
                <ellipse cx="0" cy="0" rx="140" ry="14" fill="#3e2723"/>
                <!-- light at end -->
                <ellipse cx="0" cy="0" rx="20" ry="4" fill="#fdd835"/>
            </g>
            <!-- trees -->
            <g fill="#1b5e20"><circle cx="100" cy="320" r="30"/><circle cx="700" cy="310" r="35"/><circle cx="200" cy="380" r="25"/></g>
            <!-- ground -->
            <rect x="0" y="410" width="800" height="90" fill="#66bb6a"/>
            <!-- label -->
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">厦门大学·嘉庚楼</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Xiamen University · Most Beautiful in China</text>
        </svg>`
    },
    {
        label: 'Nanputuo Temple · 南普陀',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="xm3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe0b2"/><stop offset="100%" stop-color="#ffcc80"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#xm3-sky)"/>
            <!-- mountain -->
            <path d="M0 350 L200 250 L400 320 L600 240 L800 320 L800 500 L0 500 Z" fill="#388e3c"/>
            <!-- temple -->
            <g transform="translate(400,280)">
                <rect x="-100" y="40" width="200" height="80" fill="#fff" stroke="#5d4037" stroke-width="2"/>
                <!-- multi-tier roof -->
                <polygon points="-110,40 110,40 100,15 -100,15" fill="#fdd835"/>
                <polygon points="-95,15 95,15 85,-15 -85,-15" fill="#a0522d"/>
                <polygon points="-80,-15 80,-15 70,-45 -70,-45" fill="#a0522d"/>
                <!-- pillars -->
                <rect x="-90" y="60" width="6" height="60" fill="#c1121f"/>
                <rect x="-50" y="60" width="6" height="60" fill="#c1121f"/>
                <rect x="-10" y="60" width="6" height="60" fill="#c1121f"/>
                <rect x="30" y="60" width="6" height="60" fill="#c1121f"/>
                <rect x="70" y="60" width="6" height="60" fill="#c1121f"/>
                <!-- doors -->
                <rect x="-25" y="80" width="50" height="40" fill="#3e2723"/>
                <!-- spires -->
                <line x1="-50" y1="-45" x2="-50" y2="-65" stroke="#fdd835" stroke-width="2"/>
                <line x1="0" y1="-45" x2="0" y2="-80" stroke="#fdd835" stroke-width="2"/>
                <line x1="50" y1="-45" x2="50" y2="-65" stroke="#fdd835" stroke-width="2"/>
                <circle cx="-50" cy="-67" r="3" fill="#fdd835"/>
                <circle cx="0" cy="-82" r="4" fill="#fdd835"/>
                <circle cx="50" cy="-67" r="3" fill="#fdd835"/>
            </g>
            <!-- incense -->
            <g transform="translate(400,200)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#5d4037" stroke-width="2"/>
                <g fill="#fff" opacity="0.5"><circle cx="0" cy="0" r="3"/><circle cx="-3" cy="-5" r="2"/><circle cx="3" cy="-10" r="2"/></g>
            </g>
            <!-- stone lion -->
            <g transform="translate(250,360)"><circle cx="0" cy="0" r="10" fill="#8d6e63"/><circle cx="0" cy="-3" r="6" fill="#5d4037"/></g>
            <g transform="translate(550,360)"><circle cx="0" cy="0" r="10" fill="#8d6e63"/><circle cx="0" cy="-3" r="6" fill="#5d4037"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">南普陀寺</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Nanputuo Temple · Buddhist Mountain Temple</text>
        </svg>`
    }
],

/* ============ 昆明 Kunming ============ */
kunming: [
    {
        label: 'Dianchi Lake · 滇池',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="km1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b3e5fc"/><stop offset="100%" stop-color="#81d4fa"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#km1-sky)"/>
            <!-- Western Hills -->
            <path d="M500 250 L600 180 L700 240 L800 200 L800 320 L500 320 Z" fill="#388e3c"/>
            <path d="M500 280 L580 230 L660 270 L740 230 L800 260 L800 320 L500 320 Z" fill="#2e7d32"/>
            <!-- Dianchi Lake -->
            <rect x="0" y="320" width="800" height="180" fill="#4fc3f7" opacity="0.8"/>
            <g fill="#fff" opacity="0.5"><ellipse cx="200" cy="380" rx="120" ry="3"/><ellipse cx="500" cy="400" rx="150" ry="3"/><ellipse cx="350" cy="440" rx="180" ry="3"/></g>
            <!-- red seagulls flying -->
            <g>
                <path d="M100 150 Q105 145 110 150 Q115 145 120 150" fill="none" stroke="#fff" stroke-width="2"/>
                <path d="M200 120 Q205 115 210 120 Q215 115 220 120" fill="none" stroke="#fff" stroke-width="2"/>
                <path d="M400 100 Q405 95 410 100 Q415 95 420 100" fill="none" stroke="#fff" stroke-width="2"/>
                <path d="M600 130 Q605 125 610 130 Q615 125 620 130" fill="none" stroke="#fff" stroke-width="2"/>
                <path d="M700 110 Q705 105 710 110 Q715 105 720 110" fill="none" stroke="#fff" stroke-width="2"/>
            </g>
            <!-- boat -->
            <g transform="translate(200,400)">
                <ellipse cx="0" cy="0" rx="40" ry="6" fill="#3e2723"/>
                <rect x="-30" y="-15" width="60" height="15" fill="#fff"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">滇池·昆明湖</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">Dianchi Lake · 红嘴鸥的故乡</text>
        </svg>`
    },
    {
        label: 'Stone Forest · 石林',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="km2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffecb3"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#km2-sky)"/>
            <!-- ground -->
            <rect x="0" y="400" width="800" height="100" fill="#8d6e63"/>
            <!-- stone pillars -->
            <g fill="#a1887f" stroke="#5d4037" stroke-width="2">
                <!-- pillar 1 -->
                <path d="M50 400 L40 200 Q60 180 80 200 L70 400 Z"/>
                <line x1="55" y1="220" x2="55" y2="380" stroke="#795548" stroke-width="1"/>
                <!-- pillar 2 -->
                <path d="M150 400 L130 250 Q150 230 170 250 L150 400 Z"/>
                <!-- pillar 3 (tallest) -->
                <path d="M250 400 L230 100 Q260 70 290 100 L270 400 Z"/>
                <line x1="260" y1="120" x2="260" y2="380" stroke="#795548" stroke-width="1"/>
                <line x1="250" y1="180" x2="270" y2="180" stroke="#795548" stroke-width="1"/>
                <!-- pillar 4 -->
                <path d="M350 400 L340 220 Q360 200 380 220 L370 400 Z"/>
                <!-- pillar 5 -->
                <path d="M450 400 L430 200 Q450 180 470 200 L460 400 Z"/>
                <!-- pillar 6 (twin) -->
                <path d="M550 400 L530 150 Q560 130 580 150 L580 400 Z"/>
                <path d="M600 400 L580 200 Q610 180 620 200 L620 400 Z"/>
                <!-- pillar 7 -->
                <path d="M700 400 L680 280 Q700 260 720 280 L710 400 Z"/>
                <!-- pillar 8 (right edge) -->
                <path d="M780 400 L760 220 Q780 200 800 220 L800 400 Z"/>
            </g>
            <!-- distant pillars -->
            <g fill="#a1887f" opacity="0.5">
                <path d="M0 400 L0 250 Q20 230 40 250 L40 400 Z"/>
                <path d="M100 400 L100 280 Q120 260 140 280 L140 400 Z"/>
                <path d="M200 400 L200 290 Q220 270 240 290 L240 400 Z"/>
            </g>
            <!-- shadows on ground -->
            <ellipse cx="260" cy="410" rx="50" ry="6" fill="#3e2723" opacity="0.5"/>
            <ellipse cx="560" cy="410" rx="80" ry="6" fill="#3e2723" opacity="0.5"/>
            <!-- sun -->
            <circle cx="700" cy="60" r="30" fill="#fff" opacity="0.9"/>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">石林·奇观</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Stone Forest · 270 million year-old karst</text>
        </svg>`
    },
    {
        label: 'Flower Market · 花市',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="km3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#ce93d8"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#km3-sky)"/>
            <!-- ground -->
            <rect x="0" y="380" width="800" height="120" fill="#a1887f"/>
            <!-- many flower buckets -->
            <g>
                <!-- bucket -->
                <g transform="translate(100,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <!-- flowers -->
                    <g fill="#ff4081"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/><circle cx="-5" cy="30" r="5"/><circle cx="5" cy="30" r="5"/></g>
                    <line x1="0" y1="-15" x2="0" y2="20" stroke="#388e3c" stroke-width="2"/>
                </g>
                <g transform="translate(180,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <g fill="#ffeb3b"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/></g>
                </g>
                <g transform="translate(260,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <g fill="#e91e63"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/></g>
                </g>
                <g transform="translate(340,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <g fill="#ba68c8"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/></g>
                </g>
                <g transform="translate(440,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <g fill="#fff"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/></g>
                </g>
                <g transform="translate(540,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <g fill="#fdd835"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/></g>
                </g>
                <g transform="translate(640,330)">
                    <ellipse cx="0" cy="30" rx="20" ry="6" fill="#5d4037"/>
                    <path d="M-20 30 L-15 50 L15 50 L20 30 Z" fill="#8d6e63"/>
                    <g fill="#66bb6a"><circle cx="0" cy="20" r="8"/><circle cx="-10" cy="25" r="6"/><circle cx="10" cy="25" r="6"/></g>
                </g>
                <!-- second row -->
                <g transform="translate(140,280)">
                    <ellipse cx="0" cy="20" rx="15" ry="5" fill="#5d4037"/>
                    <path d="M-15 20 L-12 35 L12 35 L15 20 Z" fill="#8d6e63"/>
                    <g fill="#ff5722"><circle cx="0" cy="10" r="6"/></g>
                </g>
                <g transform="translate(220,280)">
                    <ellipse cx="0" cy="20" rx="15" ry="5" fill="#5d4037"/>
                    <path d="M-15 20 L-12 35 L12 35 L15 20 Z" fill="#8d6e63"/>
                    <g fill="#ec407a"><circle cx="0" cy="10" r="6"/></g>
                </g>
                <g transform="translate(400,280)">
                    <ellipse cx="0" cy="20" rx="15" ry="5" fill="#5d4037"/>
                    <path d="M-15 20 L-12 35 L12 35 L15 20 Z" fill="#8d6e63"/>
                    <g fill="#ab47bc"><circle cx="0" cy="10" r="6"/></g>
                </g>
                <g transform="translate(480,280)">
                    <ellipse cx="0" cy="20" rx="15" ry="5" fill="#5d4037"/>
                    <path d="M-15 20 L-12 35 L12 35 L15 20 Z" fill="#8d6e63"/>
                    <g fill="#5c6bc0"><circle cx="0" cy="10" r="6"/></g>
                </g>
                <g transform="translate(600,280)">
                    <ellipse cx="0" cy="20" rx="15" ry="5" fill="#5d4037"/>
                    <path d="M-15 20 L-12 35 L12 35 L15 20 Z" fill="#8d6e63"/>
                    <g fill="#26a69a"><circle cx="0" cy="10" r="6"/></g>
                </g>
            </g>
            <!-- flying petals -->
            <g fill="#ff4081"><circle cx="50" cy="100" r="3"/><circle cx="150" cy="60" r="3"/><circle cx="700" cy="80" r="3"/><circle cx="600" cy="100" r="3"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#c1121f" font-weight="700">春城·花都</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ec407a">Kunming · Spring City of Flowers</text>
        </svg>`
    }
],

/* ============ 南京 Nanjing ============ */
nanjing: [
    {
        label: 'Confucius Temple · 夫子庙',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="nj1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffcdd2"/><stop offset="100%" stop-color="#ef9a9a"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#nj1-sky)"/>
            <!-- Qinhuai River -->
            <rect x="0" y="380" width="800" height="120" fill="#5d4037" opacity="0.7"/>
            <g fill="#fff" opacity="0.3"><ellipse cx="200" cy="400" rx="100" ry="2"/><ellipse cx="400" cy="420" rx="120" ry="2"/><ellipse cx="600" cy="410" rx="100" ry="2"/></g>
            <!-- Confucius Temple main hall (宏伟) -->
            <g transform="translate(400,250)">
                <!-- base platform -->
                <rect x="-150" y="80" width="300" height="40" fill="#a1887f"/>
                <!-- main hall -->
                <rect x="-100" y="20" width="200" height="60" fill="#fff" stroke="#5d4037" stroke-width="2"/>
                <!-- multi-tier roof -->
                <polygon points="-110,20 110,20 100,-5 -100,-5" fill="#a0522d"/>
                <polygon points="-95,-5 95,-5 85,-30 -85,-30" fill="#5d4037"/>
                <polygon points="-80,-30 80,-30 70,-55 -70,-55" fill="#5d4037"/>
                <!-- pillars -->
                <g fill="#c1121f"><rect x="-90" y="40" width="6" height="40"/><rect x="-50" y="40" width="6" height="40"/><rect x="-15" y="40" width="6" height="40"/><rect x="20" y="40" width="6" height="40"/><rect x="60" y="40" width="6" height="40"/><rect x="85" y="40" width="6" height="40"/></g>
                <!-- door -->
                <rect x="-25" y="50" width="50" height="30" fill="#3e2723"/>
                <!-- roof spire -->
                <line x1="0" y1="-55" x2="0" y2="-80" stroke="#fdd835" stroke-width="3"/>
                <circle cx="0" cy="-82" r="5" fill="#fdd835"/>
            </g>
            <!-- side buildings -->
            <g transform="translate(100,280)">
                <rect x="-30" y="0" width="60" height="50" fill="#fff" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="-35,0 35,0 30,-20 -30,-20" fill="#a0522d"/>
            </g>
            <g transform="translate(700,280)">
                <rect x="-30" y="0" width="60" height="50" fill="#fff" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="-35,0 35,0 30,-20 -30,-20" fill="#a0522d"/>
            </g>
            <!-- boat with lanterns -->
            <g transform="translate(200,400)">
                <path d="M0 0 L80 0 L70 10 L10 10 Z" fill="#3e2723"/>
                <rect x="20" y="-20" width="40" height="20" fill="#a1887f"/>
                <line x1="40" y1="-30" x2="40" y2="-20" stroke="#3e2723" stroke-width="1"/>
                <ellipse cx="40" cy="-25" rx="6" ry="10" fill="#ff5252"/>
            </g>
            <!-- bridge -->
            <path d="M280 380 Q400 360 520 380" fill="none" stroke="#3e2723" stroke-width="3"/>
            <path d="M280 380 Q400 360 520 380 L520 395 Q400 375 280 395 Z" fill="#8d6e63"/>
            <text x="40" y="465" font-family="serif" font-size="22" fill="#fff" font-weight="700">秦淮夫子庙</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#ffcdd2">Confucius Temple · 十里秦淮灯火</text>
        </svg>`
    },
    {
        label: 'Sun Yat-sen Mausoleum · 中山陵',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="nj2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#a5d6a7"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#nj2-sky)"/>
            <!-- purple mountain (Zijin Shan) -->
            <path d="M0 350 Q200 220 400 280 Q600 220 800 280 L800 500 L0 500 Z" fill="#388e3c"/>
            <path d="M0 380 Q200 280 400 320 Q600 280 800 320 L800 500 L0 500 Z" fill="#2e7d32"/>
            <!-- Mausoleum (392 stairs up to blue roof) -->
            <g transform="translate(400,400)">
                <!-- stairs -->
                <polygon points="-80,80 80,80 50,-30 -50,-30" fill="#9e9e9e" stroke="#5d4037" stroke-width="1"/>
                <line x1="-70" y1="50" x2="70" y2="50" stroke="#5d4037" stroke-width="1"/>
                <line x1="-60" y1="20" x2="60" y2="20" stroke="#5d4037" stroke-width="1"/>
                <line x1="-50" y1="-10" x2="50" y2="-10" stroke="#5d4037" stroke-width="1"/>
                <!-- main blue-tiled hall -->
                <rect x="-50" y="-50" width="100" height="20" fill="#fff"/>
                <polygon points="-60,-50 60,-50 50,-70 -50,-70" fill="#1565c0"/>
                <polygon points="-50,-70 50,-70 40,-90 -40,-90" fill="#0d47a1"/>
            </g>
            <!-- pine trees along path -->
            <g fill="#1b5e20"><circle cx="200" cy="350" r="20"/><circle cx="600" cy="340" r="22"/><circle cx="100" cy="380" r="18"/><circle cx="700" cy="370" r="20"/></g>
            <!-- path -->
            <path d="M0 480 L400 350 L800 480" fill="none" stroke="#a1887f" stroke-width="20" opacity="0.7"/>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">中山陵·紫金山</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Sun Yat-sen Mausoleum · 392 stairs to freedom</text>
        </svg>`
    },
    {
        label: 'Ancient City Wall · 明城墙',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="nj3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#nj3-sky)"/>
            <!-- wall base -->
            <rect x="0" y="320" width="800" height="180" fill="#8d6e63" stroke="#5d4037" stroke-width="3"/>
            <!-- bricks -->
            <g stroke="#5d4037" stroke-width="1" opacity="0.5">
                <line x1="0" y1="350" x2="800" y2="350"/><line x1="0" y1="380" x2="800" y2="380"/><line x1="0" y1="410" x2="800" y2="410"/><line x1="0" y1="440" x2="800" y2="440"/><line x1="0" y1="470" x2="800" y2="470"/>
            </g>
            <!-- crenellations -->
            <g fill="#a1887f" stroke="#5d4037" stroke-width="2"><rect x="0" y="300" width="40" height="25"/><rect x="60" y="300" width="40" height="25"/><rect x="120" y="300" width="40" height="25"/><rect x="180" y="300" width="40" height="25"/><rect x="240" y="300" width="40" height="25"/><rect x="300" y="300" width="40" height="25"/><rect x="360" y="300" width="40" height="25"/><rect x="420" y="300" width="40" height="25"/><rect x="480" y="300" width="40" height="25"/><rect x="540" y="300" width="40" height="25"/><rect x="600" y="300" width="40" height="25"/><rect x="660" y="300" width="40" height="25"/><rect x="720" y="300" width="40" height="25"/><rect x="780" y="300" width="20" height="25"/></g>
            <!-- gate tower -->
            <g transform="translate(400,200)">
                <rect x="-60" y="80" width="120" height="100" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
                <!-- multi-tier yellow tile roof -->
                <polygon points="-70,80 70,80 60,55 -60,55" fill="#fdd835"/>
                <polygon points="-55,55 55,55 45,30 -45,30" fill="#f9a825"/>
                <polygon points="-40,30 40,30 30,5 -30,5" fill="#fdd835"/>
                <!-- spire -->
                <line x1="0" y1="5" x2="0" y2="-15" stroke="#fdd835" stroke-width="3"/>
                <circle cx="0" cy="-17" r="5" fill="#fdd835"/>
                <!-- door -->
                <rect x="-20" y="120" width="40" height="60" fill="#3e2723"/>
                <path d="M-20 120 Q0 110 20 120" fill="#3e2723"/>
            </g>
            <!-- moat -->
            <rect x="0" y="500" width="800" height="0" fill="none"/>
            <!-- trees on both sides -->
            <g fill="#388e3c"><circle cx="40" cy="320" r="25"/><circle cx="120" cy="320" r="20"/><circle cx="720" cy="320" r="22"/><circle cx="780" cy="320" r="20"/></g>
            <text x="40" y="465" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">明城墙·中华门</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#8d6e63">Ming Dynasty City Wall · World's longest</text>
        </svg>`
    }
],

/* ============ 景德镇 Jingdezhen ============ */
jingdezhen: [
    {
        label: 'Porcelain Kiln · 瓷窑',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="jd1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ffe0b2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#jd1-sky)"/>
            <!-- ground -->
            <rect x="0" y="380" width="800" height="120" fill="#a1887f"/>
            <!-- kiln building -->
            <g transform="translate(400,260)">
                <rect x="-150" y="40" width="300" height="120" fill="#5d4037"/>
                <!-- arched kiln mouth -->
                <ellipse cx="0" cy="60" rx="40" ry="60" fill="#1a0e0a"/>
                <!-- flames from kiln -->
                <path d="M-30 30 Q-40 0 -25 -10 Q-15 -25 -5 -10 Q5 5 0 30" fill="#ff5722"/>
                <path d="M-15 20 Q-20 0 -10 -5 Q0 -15 5 -5 Q10 5 5 20" fill="#ffeb3b"/>
                <!-- chimney -->
                <rect x="80" y="-20" width="30" height="60" fill="#3e2723"/>
                <g fill="#fff" opacity="0.6"><ellipse cx="95" cy="-30" rx="8" ry="3"/><ellipse cx="100" cy="-40" rx="10" ry="3"/><ellipse cx="90" cy="-50" rx="12" ry="3"/></g>
                <!-- roof -->
                <polygon points="-160,40 160,40 140,10 -140,10" fill="#5d4037"/>
                <polygon points="-140,10 140,10 120,-15 -120,-15" fill="#3e2723"/>
            </g>
            <!-- porcelain cups on shelves -->
            <g>
                <!-- table -->
                <ellipse cx="150" cy="380" rx="80" ry="15" fill="#5d4037"/>
                <ellipse cx="150" cy="370" rx="80" ry="15" fill="#8d6e63"/>
                <!-- cups -->
                <g><ellipse cx="120" cy="365" rx="8" ry="3" fill="#fff" stroke="#1976d2" stroke-width="1"/><ellipse cx="120" cy="358" rx="5" ry="3" fill="#1976d2"/><ellipse cx="140" cy="365" rx="8" ry="3" fill="#fff" stroke="#1976d2" stroke-width="1"/><ellipse cx="160" cy="365" rx="8" ry="3" fill="#fff" stroke="#1976d2" stroke-width="1"/><ellipse cx="180" cy="365" rx="8" ry="3" fill="#fff" stroke="#d32f2f" stroke-width="1"/><ellipse cx="200" cy="365" rx="8" ry="3" fill="#fff" stroke="#388e3c" stroke-width="1"/></g>
                <g><ellipse cx="650" cy="380" rx="80" ry="15" fill="#5d4037"/><ellipse cx="650" cy="370" rx="80" ry="15" fill="#8d6e63"/></g>
            </g>
            <!-- big porcelain vase in foreground -->
            <g transform="translate(120,320)">
                <ellipse cx="0" cy="60" rx="25" ry="6" fill="#3e2723"/>
                <path d="M-22 60 L-25 30 Q-30 10 -25 -10 Q-10 -25 10 -25 Q30 -10 25 10 Q30 30 22 60 Z" fill="#fff" stroke="#1976d2" stroke-width="2"/>
                <!-- blue pattern -->
                <path d="M-15 20 Q-12 10 -15 0 Q-18 -10 -10 -15" fill="none" stroke="#1976d2" stroke-width="2"/>
                <circle cx="0" cy="20" r="3" fill="#1976d2"/>
                <circle cx="-5" cy="5" r="2" fill="#1976d2"/>
                <circle cx="5" cy="-5" r="2" fill="#1976d2"/>
                <ellipse cx="0" cy="-22" rx="20" ry="4" fill="#1976d2"/>
            </g>
            <!-- potter -->
            <g transform="translate(700,360)">
                <ellipse cx="0" cy="0" rx="15" ry="6" fill="#8d6e63"/>
                <circle cx="0" cy="-15" r="8" fill="#d7ccc8"/>
                <rect x="-12" y="-7" width="24" height="25" fill="#1976d2"/>
                <!-- hands shaping -->
                <ellipse cx="-15" cy="-2" rx="6" ry="3" fill="#d7ccc8"/>
                <ellipse cx="15" cy="-2" rx="6" ry="3" fill="#d7ccc8"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#1976d2" font-weight="700">瓷都·景德镇</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#0d47a1">Jingdezhen · Origin of "China" word</text>
        </svg>`
    },
    {
        label: 'Taoxichuan · 陶溪川',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="jd2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#bcaaa4"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#jd2-sky)"/>
            <!-- old factory -->
            <g>
                <rect x="50" y="180" width="700" height="240" fill="#8d6e63"/>
                <!-- huge chimney -->
                <rect x="600" y="40" width="40" height="200" fill="#5d4037"/>
                <!-- high windows (industrial) -->
                <g fill="#90a4ae">
                    <rect x="80" y="200" width="30" height="60"/><rect x="120" y="200" width="30" height="60"/><rect x="160" y="200" width="30" height="60"/><rect x="200" y="200" width="30" height="60"/><rect x="240" y="200" width="30" height="60"/><rect x="280" y="200" width="30" height="60"/><rect x="320" y="200" width="30" height="60"/><rect x="360" y="200" width="30" height="60"/><rect x="400" y="200" width="30" height="60"/><rect x="440" y="200" width="30" height="60"/><rect x="480" y="200" width="30" height="60"/><rect x="520" y="200" width="30" height="60"/>
                </g>
                <!-- ground floor -->
                <g fill="#3e2723"><rect x="80" y="320" width="50" height="100"/><rect x="160" y="320" width="50" height="100"/><rect x="240" y="320" width="50" height="100"/><rect x="320" y="320" width="50" height="100"/><rect x="400" y="320" width="50" height="100"/><rect x="480" y="320" width="50" height="100"/></g>
                <!-- red brick accents -->
                <line x1="0" y1="280" x2="800" y2="280" stroke="#c1121f" stroke-width="3"/>
            </g>
            <!-- creative market in front (modern twist) -->
            <g transform="translate(400,440)">
                <rect x="-200" y="-30" width="400" height="30" fill="#fff"/>
                <line x1="-180" y1="-25" x2="-180" y2="-5" stroke="#c1121f" stroke-width="2"/>
                <line x1="-100" y1="-25" x2="-100" y2="-5" stroke="#c1121f" stroke-width="2"/>
                <line x1="-20" y1="-25" x2="-20" y2="-5" stroke="#c1121f" stroke-width="2"/>
                <line x1="60" y1="-25" x2="60" y2="-5" stroke="#c1121f" stroke-width="2"/>
                <line x1="140" y1="-25" x2="140" y2="-5" stroke="#c1121f" stroke-width="2"/>
            </g>
            <!-- string lights -->
            <path d="M0 150 Q400 100 800 150" fill="none" stroke="#5d4037" stroke-width="1"/>
            <g fill="#fdd835"><circle cx="100" cy="135" r="3"/><circle cx="200" cy="125" r="3"/><circle cx="300" cy="115" r="3"/><circle cx="400" cy="110" r="3"/><circle cx="500" cy="115" r="3"/><circle cx="600" cy="125" r="3"/><circle cx="700" cy="135" r="3"/></g>
            <text x="40" y="35" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">陶溪川·老瓷厂</text>
            <text x="40" y="55" font-family="sans-serif" font-size="11" fill="#8d6e63">Taoxichuan · Old Factory, Young Artists</text>
        </svg>`
    },
    {
        label: 'Blue & White Porcelain · 青花',
       svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><radialGradient id="jd3-bg"><stop offset="0%" stop-color="#e3f2fd"/><stop offset="100%" stop-color="#90caf9"/></radialGradient></defs>
            <rect width="800" height="500" fill="url(#jd3-bg)"/>
            <!-- ground -->
            <rect x="0" y="430" width="800" height="70" fill="#5d4037"/>
            <!-- large main vase -->
            <g transform="translate(400,260)">
                <ellipse cx="0" cy="120" rx="60" ry="10" fill="#3e2723"/>
                <ellipse cx="0" cy="115" rx="60" ry="10" fill="#1a237e"/>
                <path d="M-50 115 L-55 70 Q-65 30 -50 -10 Q-40 -45 -10 -50 Q10 -50 40 -45 Q65 -30 55 -10 Q65 30 55 70 L50 115 Z" fill="#fff" stroke="#1565c0" stroke-width="3"/>
                <!-- blue patterns -->
                <g stroke="#1565c0" stroke-width="2" fill="none">
                    <path d="M-30 50 Q-20 30 -30 10 Q-40 -10 -25 -25"/>
                    <path d="M0 60 Q10 40 0 20 Q-10 0 5 -15"/>
                    <path d="M30 50 Q40 30 30 10 Q20 -10 35 -25"/>
                </g>
                <g fill="#1565c0">
                    <circle cx="0" cy="0" r="4"/>
                    <circle cx="-20" cy="-30" r="3"/>
                    <circle cx="20" cy="-30" r="3"/>
                    <ellipse cx="0" cy="-35" rx="15" ry="3"/>
                </g>
                <!-- decorative band at top -->
                <g fill="#1565c0"><rect x="-50" y="-50" width="100" height="3"/><rect x="-55" y="-55" width="110" height="3"/></g>
                <g fill="#1565c0"><circle cx="-30" cy="-50" r="2"/><circle cx="-15" cy="-50" r="2"/><circle cx="0" cy="-50" r="2"/><circle cx="15" cy="-50" r="2"/><circle cx="30" cy="-50" r="2"/></g>
                <!-- base pattern -->
                <g fill="#1565c0">
                    <path d="M-40 80 L-30 70 L-20 80 L-10 70 L0 80 L10 70 L20 80 L30 70 L40 80 Z"/>
                </g>
            </g>
            <!-- smaller cups -->
            <g transform="translate(150,400)">
                <ellipse cx="0" cy="20" rx="22" ry="6" fill="#3e2723"/>
                <path d="M-22 20 L-22 -10 Q-25 -25 -10 -30 Q10 -30 25 -25 Q22 -10 22 20 Z" fill="#fff" stroke="#1565c0" stroke-width="2"/>
                <circle cx="0" cy="-5" r="3" fill="#1565c0"/>
                <path d="M-10 -15 Q-5 -20 0 -15 Q5 -20 10 -15" fill="none" stroke="#1565c0" stroke-width="1"/>
            </g>
            <g transform="translate(220,400)">
                <ellipse cx="0" cy="20" rx="22" ry="6" fill="#3e2723"/>
                <path d="M-22 20 L-22 -10 Q-25 -25 -10 -30 Q10 -30 25 -25 Q22 -10 22 20 Z" fill="#fff" stroke="#1565c0" stroke-width="2"/>
                <circle cx="-5" cy="-5" r="2" fill="#1565c0"/>
                <circle cx="5" cy="-10" r="2" fill="#1565c0"/>
                <path d="M-10 5 L-5 0 L0 5 L5 0 L10 5" fill="none" stroke="#1565c0" stroke-width="1"/>
            </g>
            <g transform="translate(600,400)">
                <ellipse cx="0" cy="20" rx="22" ry="6" fill="#3e2723"/>
                <path d="M-22 20 L-22 -10 Q-25 -25 -10 -30 Q10 -30 25 -25 Q22 -10 22 20 Z" fill="#fff" stroke="#1565c0" stroke-width="2"/>
                <circle cx="0" cy="-5" r="3" fill="#1565c0"/>
            </g>
            <g transform="translate(670,400)">
                <ellipse cx="0" cy="20" rx="22" ry="6" fill="#3e2723"/>
                <path d="M-22 20 L-22 -10 Q-25 -25 -10 -30 Q10 -30 25 -25 Q22 -10 22 20 Z" fill="#fff" stroke="#1565c0" stroke-width="2"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#1565c0" font-weight="700">青花瓷·china</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#1976d2">Blue &amp; White Porcelain · Where 'China' word comes from</text>
        </svg>`
    }
],

/* ============ 义乌 Yiwu ============ */
yiwu: [
    {
        label: 'International Trade City · 国际商贸城',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="yw1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80d8ff"/><stop offset="100%" stop-color="#b3e5fc"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#yw1-sky)"/>
            <!-- giant trade complex building -->
            <rect x="50" y="100" width="700" height="350" fill="#eceff1"/>
            <!-- vast glass facade -->
            <g stroke="#90a4ae" stroke-width="2" fill="#e1f5fe">
                <rect x="80" y="130" width="80" height="100"/>
                <rect x="170" y="130" width="80" height="100"/>
                <rect x="260" y="130" width="80" height="100"/>
                <rect x="350" y="130" width="80" height="100"/>
                <rect x="440" y="130" width="80" height="100"/>
                <rect x="530" y="130" width="80" height="100"/>
                <rect x="620" y="130" width="80" height="100"/>
            </g>
            <g stroke="#90a4ae" stroke-width="2" fill="#e1f5fe">
                <rect x="80" y="240" width="80" height="100"/>
                <rect x="170" y="240" width="80" height="100"/>
                <rect x="260" y="240" width="80" height="100"/>
                <rect x="350" y="240" width="80" height="100"/>
                <rect x="440" y="240" width="80" height="100"/>
                <rect x="530" y="240" width="80" height="100"/>
                <rect x="620" y="240" width="80" height="100"/>
            </g>
            <!-- big sign on top -->
            <rect x="200" y="80" width="400" height="40" fill="#c1121f"/>
            <text x="220" y="108" font-family="serif" font-size="22" fill="#fff" font-weight="700">YIWU International Trade City</text>
            <!-- ground floor - entrances -->
            <rect x="80" y="350" width="640" height="100" fill="#90a4ae"/>
            <g fill="#1565c0"><rect x="100" y="380" width="40" height="70"/><rect x="160" y="380" width="40" height="70"/><rect x="220" y="380" width="40" height="70"/><rect x="280" y="380" width="40" height="70"/><rect x="340" y="380" width="40" height="70"/><rect x="400" y="380" width="40" height="70"/><rect x="460" y="380" width="40" height="70"/><rect x="520" y="380" width="40" height="70"/><rect x="580" y="380" width="40" height="70"/><rect x="640" y="380" width="40" height="70"/></g>
            <!-- goods outside (boxes stacked) -->
            <g>
                <rect x="50" y="430" width="40" height="40" fill="#c1121f"/>
                <rect x="50" y="470" width="40" height="20" fill="#1976d2"/>
                <rect x="100" y="440" width="50" height="30" fill="#388e3c"/>
                <rect x="100" y="470" width="50" height="20" fill="#f57c00"/>
                <rect x="700" y="430" width="40" height="40" fill="#fdd835"/>
                <rect x="700" y="470" width="40" height="20" fill="#7b1fa2"/>
                <rect x="650" y="440" width="50" height="30" fill="#00838f"/>
                <rect x="650" y="470" width="50" height="20" fill="#d32f2f"/>
            </g>
            <!-- trucks -->
            <g transform="translate(550,430)">
                <rect x="0" y="10" width="50" height="20" fill="#1976d2"/>
                <rect x="50" y="0" width="20" height="30" fill="#3e2723"/>
                <circle cx="10" cy="35" r="5" fill="#1a0e0a"/>
                <circle cx="40" cy="35" r="5" fill="#1a0e0a"/>
                <circle cx="60" cy="35" r="5" fill="#1a0e0a"/>
            </g>
            <text x="40" y="35" font-family="serif" font-size="20" fill="#fff" font-weight="700">义乌·世界超市</text>
            <text x="40" y="55" font-family="sans-serif" font-size="11" fill="#b3e5fc">World's Largest Small Commodity Market</text>
        </svg>`
    },
    {
        label: 'Christmas Market · 圣诞商品',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="yw2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a237e"/><stop offset="100%" stop-color="#311b92"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#yw2-sky)"/>
            <!-- shop interior with Christmas items -->
            <g>
                <!-- tree -->
                <g transform="translate(150,200)">
                    <polygon points="0,0 30,40 -30,40" fill="#2e7d32"/>
                    <polygon points="0,30 35,75 -35,75" fill="#388e3c"/>
                    <polygon points="0,60 40,110 -40,110" fill="#1b5e20"/>
                    <rect x="-5" y="110" width="10" height="20" fill="#5d4037"/>
                    <circle cx="0" cy="-5" r="4" fill="#fdd835"/>
                    <g fill="#ff5252"><circle cx="-20" cy="20" r="3"/><circle cx="15" cy="35" r="3"/><circle cx="-15" cy="50" r="3"/><circle cx="20" cy="70" r="3"/><circle cx="-25" cy="85" r="3"/><circle cx="20" cy="100" r="3"/></g>
                </g>
                <!-- Santa -->
                <g transform="translate(400,200)">
                    <ellipse cx="0" cy="-15" rx="25" ry="30" fill="#fdd835"/>
                    <ellipse cx="0" cy="0" rx="20" ry="25" fill="#fff"/>
                    <circle cx="-8" cy="-15" r="2" fill="#000"/>
                    <circle cx="8" cy="-15" r="2" fill="#000"/>
                    <ellipse cx="0" cy="-5" rx="6" ry="4" fill="#000"/>
                    <ellipse cx="0" cy="20" rx="25" ry="8" fill="#fff"/>
                    <path d="M-25 -35 Q0 -50 25 -35 Q10 -45 0 -45 Q-10 -45 -25 -35" fill="#c1121f"/>
                    <circle cx="0" cy="-48" r="4" fill="#fff"/>
                    <!-- body -->
                    <path d="M-25 0 L-30 50 L30 50 L25 0 Z" fill="#c1121f"/>
                    <rect x="-30" y="40" width="60" height="10" fill="#fff"/>
                </g>
                <!-- gift boxes -->
                <g transform="translate(600,250)">
                    <rect x="-30" y="0" width="60" height="50" fill="#ff4081"/>
                    <rect x="-30" y="20" width="60" height="10" fill="#fdd835"/>
                    <rect x="-5" y="0" width="10" height="50" fill="#fdd835"/>
                </g>
                <g transform="translate(680,260)">
                    <rect x="-20" y="0" width="40" height="40" fill="#1565c0"/>
                    <rect x="-20" y="15" width="40" height="10" fill="#fdd835"/>
                    <rect x="-5" y="0" width="10" height="40" fill="#fdd835"/>
                </g>
                <!-- ornaments hung -->
                <g fill="#ff5252"><circle cx="300" cy="100" r="8"/><circle cx="500" cy="80" r="8"/><circle cx="700" cy="100" r="8"/></g>
                <g fill="#fdd835"><circle cx="350" cy="120" r="6"/><circle cx="450" cy="100" r="6"/><circle cx="600" cy="120" r="6"/></g>
            </g>
            <!-- prices signs -->
            <g fill="#fff" font-family="monospace">
                <text x="100" y="370" font-size="14">¥5.00</text>
                <text x="280" y="370" font-size="14">¥10.00</text>
                <text x="480" y="370" font-size="14">¥15.00</text>
                <text x="650" y="370" font-size="14">¥20.00</text>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">义乌·圣诞集散地</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#90caf9">Yiwu supplies 2/3 of world's Christmas decorations</text>
        </svg>`
    },
    {
        label: 'Furniture City · 家居城',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="yw3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ffe0b2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#yw3-sky)"/>
            <!-- showroom with various items -->
            <rect x="100" y="100" width="600" height="320" fill="#fff8e1" stroke="#8d6e63" stroke-width="3"/>
            <!-- floor -->
            <rect x="100" y="380" width="600" height="40" fill="#a1887f"/>
            <!-- product: lamp -->
            <g transform="translate(180,280)">
                <polygon points="-20,0 20,0 30,-40 -30,-40" fill="#fdd835"/>
                <rect x="-1" y="-40" width="2" height="40" fill="#3e2723"/>
                <ellipse cx="0" cy="0" rx="10" ry="3" fill="#3e2723"/>
            </g>
            <!-- product: chair -->
            <g transform="translate(280,330)">
                <rect x="-15" y="0" width="30" height="40" fill="#8d6e63"/>
                <rect x="-15" y="-20" width="30" height="20" fill="#a1887f"/>
                <rect x="-15" y="40" width="5" height="10" fill="#3e2723"/>
                <rect x="10" y="40" width="5" height="10" fill="#3e2723"/>
            </g>
            <!-- product: vase -->
            <g transform="translate(380,330)">
                <ellipse cx="0" cy="40" rx="20" ry="5" fill="#3e2723"/>
                <path d="M-15 40 L-15 10 Q-20 -10 -10 -20 Q10 -25 15 -10 Q20 10 15 40 Z" fill="#1565c0"/>
            </g>
            <!-- product: shelf with cups -->
            <g transform="translate(500,200)">
                <rect x="-30" y="40" width="60" height="5" fill="#8d6e63"/>
                <rect x="-30" y="80" width="60" height="5" fill="#8d6e63"/>
                <rect x="0" y="40" width="3" height="50" fill="#5d4037"/>
                <ellipse cx="-15" cy="40" rx="6" ry="3" fill="#fff" stroke="#1976d2"/>
                <ellipse cx="-15" cy="30" rx="5" ry="5" fill="#fff" stroke="#1976d2"/>
                <ellipse cx="15" cy="40" rx="6" ry="3" fill="#fff" stroke="#c1121f"/>
                <ellipse cx="15" cy="30" rx="5" ry="5" fill="#fff" stroke="#c1121f"/>
            </g>
            <!-- product: clock -->
            <g transform="translate(630,200)">
                <circle cx="0" cy="0" r="25" fill="#fff" stroke="#3e2723" stroke-width="3"/>
                <line x1="0" y1="0" x2="0" y2="-15" stroke="#3e2723" stroke-width="2"/>
                <line x1="0" y1="0" x2="10" y2="5" stroke="#3e2723" stroke-width="1.5"/>
                <circle cx="0" cy="0" r="2" fill="#3e2723"/>
                <g fill="#3e2723"><circle cx="0" cy="-20" r="1"/><circle cx="14" cy="-14" r="1"/><circle cx="20" cy="0" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="-14" cy="14" r="1"/><circle cx="-20" cy="0" r="1"/><circle cx="-14" cy="-14" r="1"/></g>
            </g>
            <!-- product: telescope/camera -->
            <g transform="translate(180,420)">
                <rect x="-20" y="-10" width="40" height="20" fill="#3e2723"/>
                <circle cx="0" cy="0" r="8" fill="#1565c0"/>
                <circle cx="0" cy="0" r="5" fill="#0d47a1"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">家居城·小商品</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#8d6e63">Everything you can imagine · Wholesale prices</text>
        </svg>`
    }
]
};

