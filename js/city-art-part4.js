/**
 * CITY_ART_PART4 - 6 final cities
 * wuhan, tianjin, qingdao, zhengzhou, urumqi, hohhot
 */

const CITY_ART_PART4 = {

/* ============ 武汉 Wuhan ============ */
wuhan: [
    {
        label: 'Yellow Crane Tower · 黄鹤楼',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="wh1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffcdd2"/><stop offset="60%" stop-color="#ef9a9a"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#wh1-sky)"/>
            <!-- sun -->
            <circle cx="650" cy="100" r="40" fill="#fff" opacity="0.9"/>
            <!-- Yangtze River -->
            <rect x="0" y="380" width="800" height="120" fill="#bcaaa4" opacity="0.6"/>
            <g fill="#fff" opacity="0.3"><ellipse cx="200" cy="410" rx="100" ry="3"/><ellipse cx="500" cy="430" rx="120" ry="3"/><ellipse cx="700" cy="440" rx="80" ry="3"/></g>
            <!-- Yellow Crane Tower (5 tiers) -->
            <g transform="translate(400,260)">
                <!-- base platform -->
                <rect x="-100" y="120" width="200" height="20" fill="#a1887f"/>
                <!-- 1st tier -->
                <rect x="-80" y="100" width="160" height="20" fill="#c1121f"/>
                <polygon points="-90,100 90,100 80,80 -80,80" fill="#fdd835"/>
                <!-- 2nd tier -->
                <rect x="-60" y="60" width="120" height="20" fill="#fff"/>
                <polygon points="-70,60 70,60 60,40 -60,40" fill="#a02020"/>
                <!-- 3rd tier -->
                <rect x="-50" y="20" width="100" height="20" fill="#c1121f"/>
                <polygon points="-60,20 60,20 50,0 -50,0" fill="#fdd835"/>
                <!-- 4th tier -->
                <rect x="-40" y="-20" width="80" height="20" fill="#fff"/>
                <polygon points="-50,-20 50,-20 40,-40 -40,-40" fill="#a02020"/>
                <!-- 5th tier (top) -->
                <rect x="-30" y="-60" width="60" height="20" fill="#c1121f"/>
                <polygon points="-40,-60 40,-60 30,-80 -30,-80" fill="#fdd835"/>
                <!-- spire -->
                <line x1="0" y1="-80" x2="0" y2="-130" stroke="#fdd835" stroke-width="3"/>
                <circle cx="0" cy="-130" r="5" fill="#fdd835"/>
                <!-- yellow crane finial -->
                <g transform="translate(0,-140)">
                    <ellipse cx="0" cy="0" rx="8" ry="4" fill="#fff"/>
                    <line x1="0" y1="-3" x2="-5" y2="-8" stroke="#fff" stroke-width="2"/>
                    <line x1="0" y1="-3" x2="5" y2="-8" stroke="#fff" stroke-width="2"/>
                </g>
                <!-- pillars / windows -->
                <g fill="#3e2723"><rect x="-70" y="80" width="5" height="15"/><rect x="-50" y="80" width="5" height="15"/><rect x="50" y="80" width="5" height="15"/><rect x="70" y="80" width="5" height="15"/></g>
            </g>
            <!-- distant mountains -->
            <path d="M0 200 L100 150 L200 180 L300 130 L400 170 L500 140 L600 180 L700 150 L800 170 L800 280 L0 280 Z" fill="#8d6e63" opacity="0.5"/>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">黄鹤楼·武汉</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Yellow Crane Tower · 江南三大名楼之首</text>
        </svg>`
    },
    {
        label: 'Yangtze Bridge · 长江大桥',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="wh2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b3e5fc"/><stop offset="100%" stop-color="#81d4fa"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#wh2-sky)"/>
            <!-- Yangtze River -->
            <rect x="0" y="320" width="800" height="180" fill="#0277bd" opacity="0.7"/>
            <g fill="#fff" opacity="0.5"><ellipse cx="200" cy="350" rx="80" ry="2"/><ellipse cx="400" cy="370" rx="120" ry="2"/><ellipse cx="600" cy="360" rx="100" ry="2"/></g>
            <!-- bridge deck -->
            <rect x="0" y="280" width="800" height="10" fill="#546e7a"/>
            <rect x="0" y="290" width="800" height="5" fill="#37474f"/>
            <!-- cables (suspension style) -->
            <line x1="0" y1="290" x2="150" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="100" y1="290" x2="150" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="200" y1="290" x2="150" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="300" y1="290" x2="150" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="650" y1="290" x2="650" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="500" y1="290" x2="650" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="550" y1="290" x2="650" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="700" y1="290" x2="650" y2="180" stroke="#5d4037" stroke-width="1"/>
            <line x1="800" y1="290" x2="650" y2="180" stroke="#5d4037" stroke-width="1"/>
            <!-- main towers -->
            <g transform="translate(150,180)">
                <rect x="-20" y="0" width="40" height="110" fill="#fff"/>
                <g stroke="#a1887f" stroke-width="1" fill="#8d6e63"><rect x="-18" y="10" width="36" height="10"/><rect x="-18" y="30" width="36" height="10"/><rect x="-18" y="50" width="36" height="10"/><rect x="-18" y="70" width="36" height="10"/><rect x="-18" y="90" width="36" height="10"/></g>
                <polygon points="-25,0 25,0 20,-20 -20,-20" fill="#c1121f"/>
                <line x1="0" y1="-20" x2="0" y2="-40" stroke="#fff" stroke-width="2"/>
                <circle cx="0" cy="-42" r="3" fill="#fff"/>
            </g>
            <g transform="translate(650,180)">
                <rect x="-20" y="0" width="40" height="110" fill="#fff"/>
                <g stroke="#a1887f" stroke-width="1" fill="#8d6e63"><rect x="-18" y="10" width="36" height="10"/><rect x="-18" y="30" width="36" height="10"/><rect x="-18" y="50" width="36" height="10"/><rect x="-18" y="70" width="36" height="10"/><rect x="-18" y="90" width="36" height="10"/></g>
                <polygon points="-25,0 25,0 20,-20 -20,-20" fill="#c1121f"/>
                <line x1="0" y1="-20" x2="0" y2="-40" stroke="#fff" stroke-width="2"/>
                <circle cx="0" cy="-42" r="3" fill="#fff"/>
            </g>
            <!-- cars on bridge -->
            <g><rect x="300" y="275" width="20" height="8" rx="2" fill="#fdd835"/><rect x="350" y="275" width="20" height="8" rx="2" fill="#c1121f"/><rect x="450" y="275" width="20" height="8" rx="2" fill="#3e51b5"/><rect x="500" y="275" width="20" height="8" rx="2" fill="#388e3c"/></g>
            <!-- boat -->
            <g transform="translate(200,420)">
                <ellipse cx="0" cy="0" rx="50" ry="8" fill="#5d4037"/>
                <rect x="-30" y="-12" width="60" height="12" fill="#fff" stroke="#3e2723"/>
                <rect x="-15" y="-20" width="30" height="8" fill="#c1121f"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">武汉长江大桥</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">First Bridge over Yangtze · 1957</text>
        </svg>`
    },
    {
        label: 'East Lake · 东湖',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="wh3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a5d6a7"/><stop offset="100%" stop-color="#66bb6a"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#wh3-sky)"/>
            <!-- lake -->
            <ellipse cx="400" cy="350" rx="500" ry="150" fill="#4fc3f7" opacity="0.7"/>
            <g fill="#fff" opacity="0.5"><ellipse cx="200" cy="350" rx="100" ry="3"/><ellipse cx="500" cy="380" rx="150" ry="3"/><ellipse cx="400" cy="420" rx="200" ry="3"/></g>
            <!-- lotus leaves -->
            <ellipse cx="200" cy="350" rx="20" ry="6" fill="#388e3c"/>
            <ellipse cx="350" cy="380" rx="22" ry="6" fill="#1b5e20"/>
            <!-- lotus flower -->
            <g transform="translate(280,360)">
                <ellipse cx="-8" cy="0" rx="5" ry="8" fill="#f48fb1"/>
                <ellipse cx="8" cy="0" rx="5" ry="8" fill="#f48fb1"/>
                <ellipse cx="0" cy="-5" rx="5" ry="8" fill="#f8bbd0"/>
                <ellipse cx="0" cy="3" rx="3" ry="6" fill="#fdd835"/>
            </g>
            <!-- cherry blossom trees (famous for spring) -->
            <g>
                <line x1="100" y1="280" x2="100" y2="220" stroke="#5d4037" stroke-width="3"/>
                <circle cx="100" cy="220" r="30" fill="#f8bbd0"/>
                <line x1="700" y1="280" x2="700" y2="220" stroke="#5d4037" stroke-width="3"/>
                <circle cx="700" cy="220" r="30" fill="#f8bbd0"/>
            </g>
            <!-- distant trees on lake shore -->
            <g fill="#388e3c" opacity="0.6">
                <circle cx="50" cy="280" r="20"/>
                <circle cx="80" cy="290" r="15"/>
                <circle cx="750" cy="280" r="20"/>
                <circle cx="720" cy="290" r="15"/>
            </g>
            <!-- motorboat -->
            <g transform="translate(550,380)">
                <path d="M0 0 L40 0 L35 8 L5 8 Z" fill="#fff"/>
                <rect x="15" y="-8" width="10" height="8" fill="#1976d2"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">东湖·樱花</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">East Lake · China's largest urban lake</text>
        </svg>`
    }
],

/* ============ 天津 Tianjin ============ */
tianjin: [
    {
        label: 'Tianjin Eye · 天津之眼',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="tj1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="60%" stop-color="#ce93d8"/><stop offset="100%" stop-color="#90caf9"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#tj1-sky)"/>
            <!-- Hai River -->
            <rect x="0" y="380" width="800" height="120" fill="#5d4037" opacity="0.7"/>
            <g fill="#fff" opacity="0.3"><ellipse cx="200" cy="400" rx="100" ry="2"/><ellipse cx="500" cy="420" rx="120" ry="2"/></g>
            <!-- Yongle Bridge pylons -->
            <rect x="100" y="80" width="20" height="300" fill="#fff" stroke="#37474f" stroke-width="1"/>
            <rect x="680" y="80" width="20" height="300" fill="#fff" stroke="#37474f" stroke-width="1"/>
            <!-- Tianjin Eye - giant ferris wheel on bridge -->
            <g transform="translate(400,220)">
                <!-- wheel structure -->
                <circle cx="0" cy="0" r="100" fill="none" stroke="#fff" stroke-width="4"/>
                <circle cx="0" cy="0" r="100" fill="#1976d2" opacity="0.3"/>
                <!-- spokes -->
                <g stroke="#fff" stroke-width="2">
                    <line x1="0" y1="-100" x2="0" y2="100"/>
                    <line x1="-100" y1="0" x2="100" y2="0"/>
                    <line x1="-70" y1="-70" x2="70" y2="70"/>
                    <line x1="70" y1="-70" x2="-70" y2="70"/>
                    <line x1="-30" y1="-95" x2="30" y2="95"/>
                    <line x1="-95" y1="-30" x2="95" y2="30"/>
                    <line x1="95" y1="-30" x2="-95" y2="30"/>
                    <line x1="-30" y1="95" x2="30" y2="-95"/>
                </g>
                <!-- outer rim lights -->
                <g fill="#ff4081">
                    <circle cx="0" cy="-100" r="3"/>
                    <circle cx="50" cy="-87" r="3"/>
                    <circle cx="87" cy="-50" r="3"/>
                    <circle cx="100" cy="0" r="3"/>
                    <circle cx="87" cy="50" r="3"/>
                    <circle cx="50" cy="87" r="3"/>
                    <circle cx="0" cy="100" r="3"/>
                    <circle cx="-50" cy="87" r="3"/>
                    <circle cx="-87" cy="50" r="3"/>
                    <circle cx="-100" cy="0" r="3"/>
                    <circle cx="-87" cy="-50" r="3"/>
                    <circle cx="-50" cy="-87" r="3"/>
                </g>
                <!-- cabins -->
                <g fill="#fdd835" stroke="#c1121f" stroke-width="1.5">
                    <rect x="-12" y="-110" width="24" height="20" rx="8"/>
                    <rect x="78" y="-22" width="24" height="20" rx="8"/>
                    <rect x="-110" y="-12" width="24" height="20" rx="8"/>
                    <rect x="-100" y="78" width="24" height="20" rx="8" transform="rotate(45 -100 78)"/>
                    <rect x="78" y="78" width="24" height="20" rx="8" transform="rotate(-45 78 78)"/>
                    <rect x="-30" y="78" width="24" height="20" rx="8" transform="rotate(80 -30 78)"/>
                    <rect x="-78" y="-100" width="24" height="20" rx="8" transform="rotate(-80 -78 -100)"/>
                </g>
                <!-- center hub -->
                <circle cx="0" cy="0" r="8" fill="#fdd835"/>
            </g>
            <!-- distant skyline -->
            <g fill="#fff" opacity="0.4">
                <rect x="50" y="280" width="30" height="100"/>
                <rect x="700" y="260" width="40" height="120"/>
                <rect x="750" y="280" width="30" height="100"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">天津之眼</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#f8bbd0">Tianjin Eye · World's only Ferris wheel on a bridge</text>
        </svg>`
    },
    {
        label: 'Hai River Cruise · 海河游船',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="tj2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1976d2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#tj2-sky)"/>
            <!-- Hai River -->
            <rect x="0" y="350" width="800" height="150" fill="#0277bd" opacity="0.7"/>
            <!-- European buildings left bank -->
            <g>
                <rect x="0" y="200" width="120" height="150" fill="#a1887f"/>
                <polygon points="0,200 120,200 110,180 10,180" fill="#5d4037"/>
                <g fill="#fff"><rect x="10" y="220" width="15" height="25"/><rect x="35" y="220" width="15" height="25"/><rect x="60" y="220" width="15" height="25"/><rect x="85" y="220" width="15" height="25"/></g>
                <rect x="50" y="280" width="20" height="70" fill="#3e2723"/>
            </g>
            <g>
                <rect x="130" y="180" width="120" height="170" fill="#d7ccc8"/>
                <polygon points="130,180 250,180 240,160 140,160" fill="#5d4037"/>
                <g fill="#fff"><rect x="140" y="200" width="15" height="25"/><rect x="165" y="200" width="15" height="25"/><rect x="190" y="200" width="15" height="25"/><rect x="215" y="200" width="15" height="25"/></g>
                <rect x="180" y="280" width="20" height="70" fill="#3e2723"/>
            </g>
            <!-- Italian style area right bank -->
            <g>
                <rect x="540" y="190" width="130" height="160" fill="#fff59d"/>
                <polygon points="540,190 670,190 660,170 550,170" fill="#8d6e63"/>
                <g fill="#5d4037"><rect x="550" y="210" width="15" height="25"/><rect x="575" y="210" width="15" height="25"/><rect x="600" y="210" width="15" height="25"/><rect x="625" y="210" width="15" height="25"/><rect x="650" y="210" width="15" height="25"/></g>
            </g>
            <g>
                <rect x="680" y="200" width="120" height="150" fill="#a1887f"/>
                <polygon points="680,200 800,200 790,180 690,180" fill="#5d4037"/>
            </g>
            <!-- cruise boat -->
            <g transform="translate(400,400)">
                <path d="M-100 0 L100 0 L80 20 L-80 20 Z" fill="#3e2723"/>
                <rect x="-90" y="-30" width="180" height="30" fill="#fff" stroke="#3e2723" stroke-width="1"/>
                <rect x="-80" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="-65" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="-50" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="-35" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="35" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="50" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="65" y="-20" width="6" height="6" fill="#80cbc4"/>
                <rect x="-80" y="-5" width="6" height="6" fill="#80cbc4"/>
                <rect x="-50" y="-5" width="6" height="6" fill="#80cbc4"/>
                <rect x="50" y="-5" width="6" height="6" fill="#80cbc4"/>
                <rect x="65" y="-5" width="6" height="6" fill="#80cbc4"/>
            </g>
            <!-- bridge -->
            <path d="M280 350 Q400 320 520 350" fill="none" stroke="#3e2723" stroke-width="4"/>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">海河·意式风情</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">Hai River · Italian Style District</text>
        </svg>`
    },
    {
        label: 'Five Avenues · 五大道',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="tj3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#tj3-sky)"/>
            <!-- British/French style mansions -->
            <!-- villa 1 (red brick) -->
            <g transform="translate(150,250)">
                <rect x="-50" y="0" width="100" height="100" fill="#8d6e63"/>
                <polygon points="-60,0 60,0 50,-20 -50,-20" fill="#a0522d"/>
                <polygon points="-50,-20 50,-20 40,-40 -40,-40" fill="#5d4037"/>
                <g fill="#fff"><rect x="-40" y="15" width="15" height="20"/><rect x="-15" y="15" width="15" height="20"/><rect x="10" y="15" width="15" height="20"/><rect x="30" y="15" width="15" height="20"/></g>
                <rect x="-15" y="60" width="30" height="40" fill="#3e2723"/>
                <!-- chimney -->
                <rect x="20" y="-50" width="10" height="20" fill="#5d4037"/>
            </g>
            <!-- villa 2 (white british) -->
            <g transform="translate(320,240)">
                <rect x="-55" y="0" width="110" height="110" fill="#fff8e1" stroke="#5d4037" stroke-width="1"/>
                <polygon points="-65,0 65,0 55,-25 -55,-25" fill="#5d4037"/>
                <polygon points="-50,-25 50,-25 40,-45 -40,-45" fill="#3e2723"/>
                <g fill="#a1887f" stroke="#5d4037" stroke-width="1"><rect x="-40" y="20" width="12" height="25"/><rect x="-15" y="20" width="12" height="25"/><rect x="10" y="20" width="12" height="25"/><rect x="30" y="20" width="12" height="25"/></g>
                <rect x="-20" y="70" width="40" height="40" fill="#3e2723"/>
            </g>
            <!-- villa 3 (yellow french) -->
            <g transform="translate(490,255)">
                <rect x="-50" y="0" width="100" height="95" fill="#fff59d" stroke="#5d4037" stroke-width="1"/>
                <polygon points="-60,0 60,0 50,-20 -50,-20" fill="#8d6e63"/>
                <polygon points="-45,-20 45,-20 35,-35 -35,-35" fill="#5d4037"/>
                <g fill="#5d4037"><rect x="-40" y="10" width="12" height="20"/><rect x="-15" y="10" width="12" height="20"/><rect x="10" y="10" width="12" height="20"/><rect x="30" y="10" width="12" height="20"/></g>
                <rect x="-15" y="50" width="30" height="45" fill="#3e2723"/>
            </g>
            <!-- villa 4 (German style) -->
            <g transform="translate(650,250)">
                <rect x="-50" y="0" width="100" height="100" fill="#a1887f"/>
                <polygon points="-60,0 60,0 50,-20 -50,-20" fill="#5d4037"/>
                <!-- pointed roof -->
                <polygon points="-45,-20 45,-20 0,-60" fill="#5d4037"/>
                <g fill="#fff8e1"><rect x="-35" y="15" width="12" height="20"/><rect x="-12" y="15" width="12" height="20"/><rect x="12" y="15" width="12" height="20"/><rect x="32" y="15" width="12" height="20"/></g>
            </g>
            <!-- plane trees lining the avenue -->
            <g fill="#388e3c">
                <circle cx="50" cy="380" r="25"/>
                <circle cx="100" cy="385" r="22"/>
                <circle cx="230" cy="380" r="25"/>
                <circle cx="380" cy="380" r="25"/>
                <circle cx="420" cy="385" r="22"/>
                <circle cx="550" cy="380" r="25"/>
                <circle cx="700" cy="385" r="22"/>
                <circle cx="750" cy="380" r="25"/>
            </g>
            <!-- avenue road -->
            <rect x="0" y="380" width="800" height="120" fill="#a1887f"/>
            <!-- horse carriage -->
            <g transform="translate(200,440)">
                <ellipse cx="0" cy="0" rx="20" ry="6" fill="#3e2723"/>
                <rect x="-25" y="-15" width="50" height="15" fill="#c1121f"/>
                <circle cx="-15" cy="6" r="5" fill="#3e2723"/>
                <circle cx="15" cy="6" r="5" fill="#3e2723"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">五大道·万国建筑</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Five Great Avenues · Mansion district</text>
        </svg>`
    }
],

/* ============ 青岛 Qingdao ============ */
qingdao: [
    {
        label: 'Zhanqiao Pier · 栈桥',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="qd1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80d8ff"/><stop offset="100%" stop-color="#4fc3f7"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#qd1-sky)"/>
            <!-- sea -->
            <rect x="0" y="280" width="800" height="220" fill="#0288d1" opacity="0.7"/>
            <g fill="#fff" opacity="0.5"><ellipse cx="150" cy="310" rx="80" ry="2"/><ellipse cx="350" cy="330" rx="100" ry="2"/><ellipse cx="550" cy="320" rx="80" ry="2"/><ellipse cx="700" cy="350" rx="80" ry="2"/></g>
            <!-- waves -->
            <g stroke="#fff" stroke-width="1" fill="none">
                <path d="M50 380 Q100 375 150 380 Q200 385 250 380"/>
                <path d="M300 400 Q350 395 400 400 Q450 405 500 400"/>
                <path d="M550 430 Q600 425 650 430 Q700 435 750 430"/>
            </g>
            <!-- Zhanqiao Pier extending into sea -->
            <g>
                <!-- pier deck -->
                <rect x="100" y="320" width="450" height="15" fill="#a1887f"/>
                <rect x="100" y="335" width="450" height="3" fill="#5d4037"/>
                <!-- pier columns -->
                <g fill="#5d4037"><rect x="120" y="338" width="10" height="80"/><rect x="220" y="338" width="10" height="100"/><rect x="320" y="338" width="10" height="120"/><rect x="420" y="338" width="10" height="120"/><rect x="500" y="338" width="10" height="80"/></g>
            </g>
            <!-- Huilan Pavilion at end of pier (octagonal) -->
            <g transform="translate(550,280)">
                <rect x="-30" y="20" width="60" height="40" fill="#fff" stroke="#5d4037" stroke-width="1.5"/>
                <!-- octagonal roof -->
                <polygon points="-40,20 40,20 35,0 -35,0" fill="#c1121f"/>
                <polygon points="-35,0 35,0 28,-15 -28,-15" fill="#a02020"/>
                <polygon points="-28,-15 28,-15 22,-25 -22,-25" fill="#c1121f"/>
                <line x1="0" y1="-25" x2="0" y2="-40" stroke="#c1121f" stroke-width="2"/>
                <circle cx="0" cy="-42" r="3" fill="#fdd835"/>
            </g>
            <!-- distant coast -->
            <path d="M0 270 L100 240 L250 260 L400 230 L600 250 L800 240 L800 290 L0 290 Z" fill="#37474f" opacity="0.4"/>
            <!-- lampposts on pier -->
            <g stroke="#3e2723" stroke-width="1" fill="none"><line x1="180" y1="320" x2="180" y2="290"/><circle cx="180" cy="288" r="3" fill="#fdd835"/></g>
            <g stroke="#3e2723" stroke-width="1" fill="none"><line x1="380" y1="320" x2="380" y2="290"/><circle cx="380" cy="288" r="3" fill="#fdd835"/></g>
            <!-- mountains in distance (German influence) -->
            <g fill="#90a4ae" opacity="0.3">
                <path d="M0 150 L100 80 L200 130 L300 80 L400 120 L500 70 L600 100 L700 60 L800 100 L800 160 L0 160 Z"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">栈桥·青岛</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">Zhanqiao Pier · Qingdao's landmark</text>
        </svg>`
    },
    {
        label: 'Badaguan · 八大关',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="qd2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#a5d6a7"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#qd2-sky)"/>
            <!-- tree-lined avenue -->
            <g fill="#388e3c"><circle cx="50" cy="380" r="20"/><circle cx="100" cy="385" r="18"/><circle cx="150" cy="380" r="20"/><circle cx="700" cy="380" r="20"/><circle cx="650" cy="385" r="18"/><circle cx="600" cy="380" r="20"/></g>
            <!-- road -->
            <rect x="0" y="380" width="800" height="120" fill="#a1887f"/>
            <!-- European villas behind trees (hidden among greenery) -->
            <g>
                <rect x="100" y="280" width="80" height="100" fill="#a1887f" stroke="#5d4037"/>
                <polygon points="95,280 185,280 175,265 105,265" fill="#5d4037"/>
                <g fill="#fff"><rect x="115" y="295" width="10" height="15"/><rect x="135" y="295" width="10" height="15"/><rect x="155" y="295" width="10" height="15"/></g>
            </g>
            <g>
                <rect x="280" y="270" width="100" height="110" fill="#d7ccc8" stroke="#5d4037"/>
                <polygon points="275,270 385,270 375,250 285,250" fill="#5d4037"/>
                <g fill="#a1887f"><rect x="295" y="290" width="12" height="20"/><rect x="320" y="290" width="12" height="20"/><rect x="345" y="290" width="12" height="20"/></g>
            </g>
            <g>
                <rect x="450" y="280" width="80" height="100" fill="#fff59d" stroke="#5d4037"/>
                <polygon points="445,280 535,280 525,265 455,265" fill="#8d6e63"/>
            </g>
            <g>
                <rect x="600" y="275" width="100" height="105" fill="#a1887f" stroke="#5d4037"/>
                <polygon points="595,275 705,275 695,255 605,255" fill="#5d4037"/>
            </g>
            <!-- pedestrians walking -->
            <g>
                <circle cx="250" cy="420" r="5" fill="#3e2723"/>
                <rect x="245" y="425" width="10" height="20" fill="#1976d2"/>
                <circle cx="270" cy="425" r="5" fill="#3e2723"/>
                <rect x="265" y="430" width="10" height="20" fill="#c1121f"/>
            </g>
            <!-- flowering trees (crabapple in spring) -->
            <g>
                <line x1="200" y1="380" x2="200" y2="320" stroke="#5d4037" stroke-width="3"/>
                <circle cx="200" cy="320" r="25" fill="#f8bbd0"/>
                <line x1="500" y1="380" x2="500" y2="320" stroke="#5d4037" stroke-width="3"/>
                <circle cx="500" cy="320" r="25" fill="#f8bbd0"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">八大关·万国建筑</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Badaguan · Museum of foreign architecture</text>
        </svg>`
    },
    {
        label: 'Tsingtao Beer · 青岛啤酒',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="qd3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#fdd835"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#qd3-sky)"/>
            <!-- beer factory building -->
            <g transform="translate(400,260)">
                <rect x="-150" y="0" width="300" height="180" fill="#d7ccc8"/>
                <polygon points="-160,0 160,0 150,-20 -150,-20" fill="#5d4037"/>
                <!-- windows -->
                <g fill="#5d4037"><rect x="-130" y="20" width="20" height="30"/><rect x="-100" y="20" width="20" height="30"/><rect x="-70" y="20" width="20" height="30"/><rect x="-40" y="20" width="20" height="30"/><rect x="-10" y="20" width="20" height="30"/><rect x="20" y="20" width="20" height="30"/><rect x="50" y="20" width="20" height="30"/><rect x="80" y="20" width="20" height="30"/><rect x="110" y="20" width="20" height="30"/></g>
                <!-- logo sign -->
                <rect x="-50" y="80" width="100" height="40" fill="#fdd835" stroke="#c1121f" stroke-width="2"/>
                <text x="-30" y="108" font-family="serif" font-size="22" fill="#c1121f" font-weight="700">TSINGTAO</text>
                <!-- big fermentation tanks -->
                <g fill="#90a4ae" stroke="#37474f" stroke-width="2"><rect x="-110" y="-30" width="30" height="30"/></g>
                <g fill="#0288d1"><rect x="-110" y="-25" width="30" height="20"/></g>
            </g>
            <!-- HUGE Tsingtao beer bottle foreground -->
            <g transform="translate(150,400)">
                <!-- bottle -->
                <path d="M-15 -100 L-15 -80 L-25 -50 L-25 80 L25 80 L25 -50 L15 -80 L15 -100 Z" fill="#388e3c"/>
                <rect x="-15" y="-110" width="30" height="15" fill="#1b5e20"/>
                <!-- label -->
                <rect x="-25" y="-30" width="50" height="60" fill="#fff8e1" stroke="#1b5e20" stroke-width="1"/>
                <text x="-20" y="0" font-family="serif" font-size="14" fill="#c1121f" font-weight="700">青岛</text>
                <text x="-22" y="20" font-family="serif" font-size="8" fill="#388e3c">TSINGTAO</text>
            </g>
            <!-- beer mug on side -->
            <g transform="translate(700,420)">
                <path d="M-30 -60 L-25 30 L25 30 L30 -60 Z" fill="#fdd835" opacity="0.6"/>
                <path d="M-30 -60 L-25 30 L25 30 L30 -60 Z" fill="none" stroke="#8d6e63" stroke-width="2"/>
                <!-- foam on top -->
                <ellipse cx="0" cy="-60" rx="32" ry="6" fill="#fff"/>
                <circle cx="-15" cy="-65" r="5" fill="#fff"/>
                <circle cx="10" cy="-67" r="4" fill="#fff"/>
                <circle cx="20" cy="-63" r="3" fill="#fff"/>
            </g>
            <!-- bubbles -->
            <g fill="#fff" opacity="0.7"><circle cx="650" cy="380" r="3"/><circle cx="640" cy="360" r="2"/><circle cx="660" cy="350" r="2"/><circle cx="630" cy="370" r="2"/></g>
            <text x="40" y="35" font-family="serif" font-size="22" fill="#c1121f" font-weight="700">青岛啤酒</text>
            <text x="40" y="55" font-family="sans-serif" font-size="11" fill="#3e2723">Tsingtao Beer · 1903 Chinese-German brew</text>
        </svg>`
    }
],

/* ============ 郑州 Zhengzhou ============ */
zhengzhou: [
    {
        label: 'Shaolin Temple · 少林寺',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="zz1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="60%" stop-color="#a5d6a7"/><stop offset="100%" stop-color="#66bb6a"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#zz1-sky)"/>
            <!-- Song Mountain backdrop -->
            <path d="M0 250 L100 180 L200 220 L320 160 L450 200 L580 170 L720 220 L800 200 L800 320 L0 320 Z" fill="#388e3c"/>
            <path d="M0 280 L100 220 L200 250 L320 200 L450 230 L580 210 L720 250 L800 230 L800 320 L0 320 Z" fill="#2e7d32"/>
            <!-- pine trees on mountains -->
            <g fill="#1b5e20"><polygon points="100,200 110,180 120,200"/><polygon points="200,210 210,190 220,210"/><polygon points="450,210 460,190 470,210"/><polygon points="580,200 590,180 600,200"/></g>
            <!-- Shaolin temple (in valley) -->
            <g transform="translate(400,290)">
                <!-- gate tower -->
                <rect x="-60" y="20" width="120" height="80" fill="#fff8e1" stroke="#5d4037" stroke-width="1.5"/>
                <polygon points="-70,20 70,20 60,0 -60,0" fill="#c1121f"/>
                <!-- pillars -->
                <rect x="-50" y="40" width="6" height="60" fill="#c1121f"/>
                <rect x="-20" y="40" width="6" height="60" fill="#c1121f"/>
                <rect x="14" y="40" width="6" height="60" fill="#c1121f"/>
                <rect x="44" y="40" width="6" height="60" fill="#c1121f"/>
                <!-- doors -->
                <rect x="-30" y="50" width="60" height="50" fill="#3e2723"/>
                <circle cx="20" cy="75" r="2" fill="#fdd835"/>
                <!-- roof spires -->
                <line x1="0" y1="0" x2="0" y2="-20" stroke="#fdd835" stroke-width="2"/>
                <circle cx="0" cy="-22" r="3" fill="#fdd835"/>
            </g>
            <!-- stone path -->
            <rect x="350" y="380" width="100" height="6" fill="#a1887f"/>
            <!-- monk meditating -->
            <g transform="translate(550,360)">
                <circle cx="0" cy="-15" r="8" fill="#d7ccc8"/>
                <path d="M-15 -10 L-15 5 Q-20 30 20 30 Q20 5 15 -10 Z" fill="#c1121f"/>
                <ellipse cx="0" cy="30" rx="20" ry="3" fill="#a1887f"/>
                <!-- meditation hand position (in lap) -->
                <ellipse cx="-3" cy="20" rx="6" ry="3" fill="#d7ccc8"/>
            </g>
            <!-- pagoda tree (famous in Shaolin) -->
            <g transform="translate(200,350)">
                <rect x="-3" y="-30" width="6" height="50" fill="#5d4037"/>
                <g fill="#388e3c"><circle cx="0" cy="-40" r="15"/><circle cx="-15" cy="-30" r="12"/><circle cx="15" cy="-30" r="12"/></g>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">少林寺·禅宗祖庭</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Shaolin Temple · Birthplace of Kung Fu</text>
        </svg>`
    },
    {
        label: 'Henan Museum · 河南博物院',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="zz2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#a1887f"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#zz2-sky)"/>
            <!-- museum pyramid-shaped modern building (designed by Taiwanese architect) -->
            <g>
                <!-- main pyramid -->
                <polygon points="100,400 250,150 400,200 400,400" fill="#90a4ae"/>
                <polygon points="400,400 400,200 550,150 700,400" fill="#78909c"/>
                <polygon points="250,150 400,200 550,150 400,100" fill="#b0bec5"/>
                <!-- windows -->
                <g fill="#5d4037">
                    <polygon points="150,400 200,250 250,400"/>
                    <polygon points="270,400 320,250 360,400"/>
                    <polygon points="380,400 420,250 470,400"/>
                    <polygon points="480,400 530,250 580,400"/>
                    <polygon points="600,400 650,250 680,400"/>
                </g>
                <!-- entrance stairs -->
                <polygon points="350,400 400,360 450,400" fill="#5d4037"/>
            </g>
            <!-- side wings -->
            <rect x="50" y="350" width="50" height="60" fill="#5d4037"/>
            <rect x="700" y="350" width="50" height="60" fill="#5d4037"/>
            <!-- artifacts on display in foreground -->
            <g transform="translate(150,420)">
                <!-- bronze ding (square cauldron) -->
                <rect x="-15" y="0" width="30" height="20" fill="#a0522d"/>
                <rect x="-12" y="-5" width="24" height="5" fill="#8d6e63"/>
                <line x1="-12" y1="-5" x2="-12" y2="-10" stroke="#8d6e63" stroke-width="2"/>
                <line x1="12" y1="-5" x2="12" y2="-10" stroke="#8d6e63" stroke-width="2"/>
            </g>
            <g transform="translate(220,420)">
                <!-- jade bi (disc) -->
                <ellipse cx="0" cy="5" rx="12" ry="3" fill="#a5d6a7"/>
                <circle cx="0" cy="5" r="4" fill="#5d4037"/>
            </g>
            <!-- bronze chariot -->
            <g transform="translate(600,420)">
                <rect x="-20" y="0" width="40" height="15" fill="#a0522d"/>
                <circle cx="-15" cy="15" r="5" fill="#5d4037"/>
                <circle cx="15" cy="15" r="5" fill="#5d4037"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">河南博物院</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#8d6e63">Henan Museum · Cradle of Chinese Civilization</text>
        </svg>`
    },
    {
        label: 'Erqi Tower · 二七塔',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="zz3-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe0b2"/><stop offset="60%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#8d6e63"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#zz3-sky)"/>
            <!-- twin towers (Erqi Memorial) -->
            <g transform="translate(400,260)">
                <!-- left tower -->
                <g transform="translate(-40,0)">
                    <rect x="-25" y="0" width="50" height="200" fill="#fff" stroke="#5d4037" stroke-width="1"/>
                    <g fill="#c1121f"><rect x="-22" y="20" width="6" height="20"/><rect x="-12" y="20" width="6" height="20"/><rect x="-2" y="20" width="6" height="20"/><rect x="8" y="20" width="6" height="20"/><rect x="18" y="20" width="6" height="20"/></g>
                    <g fill="#c1121f"><rect x="-22" y="50" width="6" height="20"/><rect x="-2" y="50" width="6" height="20"/><rect x="18" y="50" width="6" height="20"/></g>
                    <polygon points="-30,0 30,0 25,-15 -25,-15" fill="#c1121f"/>
                    <line x1="0" y1="-15" x2="0" y2="-40" stroke="#c1121f" stroke-width="2"/>
                    <circle cx="0" cy="-42" r="3" fill="#fdd835"/>
                </g>
                <!-- right tower -->
                <g transform="translate(40,0)">
                    <rect x="-25" y="0" width="50" height="200" fill="#fff" stroke="#5d4037" stroke-width="1"/>
                    <g fill="#c1121f"><rect x="-22" y="20" width="6" height="20"/><rect x="-12" y="20" width="6" height="20"/><rect x="-2" y="20" width="6" height="20"/><rect x="8" y="20" width="6" height="20"/><rect x="18" y="20" width="6" height="20"/></g>
                    <g fill="#c1121f"><rect x="-22" y="50" width="6" height="20"/><rect x="-2" y="50" width="6" height="20"/><rect x="18" y="50" width="6" height="20"/></g>
                    <polygon points="-30,0 30,0 25,-15 -25,-15" fill="#c1121f"/>
                    <line x1="0" y1="-15" x2="0" y2="-40" stroke="#c1121f" stroke-width="2"/>
                    <circle cx="0" cy="-42" r="3" fill="#fdd835"/>
                </g>
                <!-- base connecting towers -->
                <rect x="-65" y="200" width="130" height="20" fill="#5d4037"/>
            </g>
            <!-- ground -->
            <rect x="0" y="450" width="800" height="50" fill="#8d6e63"/>
            <!-- distant modern skyscrapers -->
            <g fill="#90a4ae" opacity="0.6">
                <rect x="50" y="280" width="40" height="180"/>
                <rect x="100" y="240" width="50" height="220"/>
                <rect x="160" y="300" width="40" height="160"/>
                <rect x="700" y="280" width="40" height="180"/>
                <rect x="650" y="240" width="50" height="220"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">二七塔·郑州</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#8d6e63">Erqi Memorial · 1923 Strike Memorial</text>
        </svg>`
    }
],

/* ============ 乌鲁木齐 Urumqi ============ */
urumqi: [
    {
        label: 'Grand Bazaar · 国际大巴扎',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="wl1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff9a8b"/><stop offset="50%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#ffe0b2"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#wl1-sky)"/>
            <!-- snow mountains in background -->
            <path d="M0 200 L80 100 L160 180 L240 80 L320 160 L400 60 L480 140 L560 80 L640 160 L720 100 L800 160 L800 280 L0 280 Z" fill="#90a4ae"/>
            <g fill="#fff"><polygon points="240,80 260,110 240,120"/><polygon points="400,60 420,100 400,110"/><polygon points="560,80 580,110 560,120"/></g>
            <!-- grand bazaar mosque dome -->
            <g transform="translate(400,300)">
                <!-- base -->
                <rect x="-150" y="50" width="300" height="100" fill="#fff8e1"/>
                <!-- main central dome (Islamic style) -->
                <ellipse cx="0" cy="0" rx="80" ry="60" fill="#a02020"/>
                <ellipse cx="0" cy="-10" rx="60" ry="40" fill="#c1121f"/>
                <!-- dome finial -->
                <line x1="0" y1="-65" x2="0" y2="-95" stroke="#fdd835" stroke-width="3"/>
                <circle cx="0" cy="-95" r="5" fill="#fdd835"/>
                <path d="M-10 -85 L0 -100 L10 -85" fill="none" stroke="#fdd835" stroke-width="2"/>
                <!-- smaller side domes -->
                <ellipse cx="-130" cy="20" rx="30" ry="25" fill="#a02020"/>
                <ellipse cx="130" cy="20" rx="30" ry="25" fill="#a02020"/>
                <!-- minarets -->
                <rect x="-180" y="-80" width="15" height="180" fill="#fff8e1"/>
                <rect x="-180" y="-100" width="15" height="25" fill="#a02020"/>
                <circle cx="-172" cy="-105" r="5" fill="#a02020"/>
                <rect x="165" y="-80" width="15" height="180" fill="#fff8e1"/>
                <rect x="165" y="-100" width="15" height="25" fill="#a02020"/>
                <circle cx="172" cy="-105" r="5" fill="#a02020"/>
                <!-- arches (Islamic style) -->
                <g fill="#3e2723">
                    <path d="M-60 150 L-60 100 Q-40 80 -20 100 L-20 150 Z"/>
                    <path d="M-20 150 L-20 100 Q0 80 20 100 L20 150 Z"/>
                    <path d="M20 150 L20 100 Q40 80 60 100 L60 150 Z"/>
                </g>
            </g>
            <!-- colorful carpets hanging -->
            <g><rect x="100" y="380" width="30" height="60" fill="#c1121f"/><rect x="135" y="380" width="30" height="60" fill="#1565c0"/><rect x="170" y="380" width="30" height="60" fill="#fdd835"/><rect x="600" y="380" width="30" height="60" fill="#388e3c"/><rect x="635" y="380" width="30" height="60" fill="#c1121f"/><rect x="670" y="380" width="30" height="60" fill="#fdd835"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">国际大巴扎</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffe0b2">Grand Bazaar · World's largest bazaar</text>
        </svg>`
    },
    {
        label: 'Tianchi Lake · 天池',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="wl2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b3e5fc"/><stop offset="60%" stop-color="#81d4fa"/><stop offset="100%" stop-color="#4fc3f7"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#wl2-sky)"/>
            <!-- Bogda Peak snow mountains -->
            <path d="M0 250 L80 180 L150 230 L250 100 L350 200 L450 80 L550 180 L650 100 L750 200 L800 180 L800 320 L0 320 Z" fill="#90a4ae"/>
            <g fill="#fff"><polygon points="250,100 270,140 280,160 270,180 250,200 240,180"/><polygon points="450,80 470,120 480,140 470,160 450,180 440,160"/><polygon points="650,100 670,140 680,160 670,180 650,200 640,180"/></g>
            <!-- spruces/pines on lower slopes -->
            <g fill="#1b5e20">
                <polygon points="100,250 110,230 120,250"/><polygon points="180,260 190,240 200,260"/>
                <polygon points="350,260 360,240 370,260"/><polygon points="550,250 560,230 570,250"/><polygon points="700,250 710,230 720,250"/>
            </g>
            <!-- Tianchi Lake (heavenly lake) -->
            <ellipse cx="400" cy="380" rx="380" ry="60" fill="#0288d1"/>
            <g fill="#fff" opacity="0.5"><ellipse cx="200" cy="370" rx="80" ry="2"/><ellipse cx="500" cy="385" rx="100" ry="2"/><ellipse cx="400" cy="400" rx="150" ry="2"/></g>
            <!-- mountain reflection -->
            <g fill="#0288d1" opacity="0.6">
                <polygon points="250,380 280,400 300,400 280,380"/>
                <polygon points="450,380 480,400 500,400 480,380"/>
            </g>
            <!-- Kazak yurt on shore -->
            <g transform="translate(150,400)">
                <ellipse cx="0" cy="0" rx="20" ry="5" fill="#5d4037"/>
                <path d="M-20 0 Q0 -40 20 0 Z" fill="#d7ccc8"/>
                <line x1="0" y1="-40" x2="0" y2="-50" stroke="#5d4037" stroke-width="1"/>
                <rect x="-5" y="-15" width="10" height="15" fill="#5d4037"/>
            </g>
            <!-- yaks grazing -->
            <g transform="translate(600,420)">
                <ellipse cx="0" cy="0" rx="20" ry="8" fill="#1a0e0a"/>
                <circle cx="-15" cy="-5" r="8" fill="#1a0e0a"/>
                <circle cx="20" cy="-3" r="8" fill="#1a0e0a"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">天山天池</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#b3e5fc">Tianchi · Heavenly Lake at 1900m altitude</text>
        </svg>`
    },
    {
        label: 'Lamb Skewer · 烤肉串',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><radialGradient id="wl3-bg"><stop offset="0%" stop-color="#ff5252"/><stop offset="100%" stop-color="#3e2723"/></radialGradient></defs>
            <rect width="800" height="500" fill="url(#wl3-bg)"/>
            <!-- smoke -->
            <g fill="#fff" opacity="0.2">
                <ellipse cx="200" cy="100" rx="50" ry="100"/>
                <ellipse cx="400" cy="80" rx="60" ry="120"/>
                <ellipse cx="600" cy="100" rx="50" ry="100"/>
            </g>
            <!-- grill -->
            <g>
                <!-- charcoal -->
                <rect x="100" y="350" width="600" height="50" fill="#1a0e0a"/>
                <rect x="100" y="380" width="600" height="20" fill="#3e2723"/>
                <!-- flames -->
                <g fill="#ff5722"><polygon points="150,350 160,300 170,350"/><polygon points="200,350 210,290 220,350"/><polygon points="250,350 260,310 270,350"/><polygon points="350,350 360,290 370,350"/><polygon points="400,350 410,300 420,350"/><polygon points="450,350 460,290 470,350"/><polygon points="550,350 560,300 570,350"/><polygon points="600,350 610,310 620,350"/></g>
                <!-- skewers -->
                <g transform="translate(200,250)">
                    <line x1="0" y1="100" x2="0" y2="-100" stroke="#a1887f" stroke-width="3"/>
                    <ellipse cx="0" cy="-80" rx="10" ry="8" fill="#c1121f"/>
                    <ellipse cx="0" cy="-60" rx="10" ry="8" fill="#5d4037"/>
                    <ellipse cx="0" cy="-40" rx="10" ry="8" fill="#ff7043"/>
                    <ellipse cx="0" cy="-20" rx="10" ry="8" fill="#c1121f"/>
                    <ellipse cx="0" cy="0" rx="10" ry="8" fill="#5d4037"/>
                    <ellipse cx="0" cy="20" rx="10" ry="8" fill="#ff7043"/>
                    <!-- spices -->
                    <g fill="#fdd835"><circle cx="-12" cy="-50" r="1"/><circle cx="12" cy="-30" r="1"/><circle cx="-12" cy="-10" r="1"/><circle cx="12" cy="10" r="1"/></g>
                </g>
                <g transform="translate(400,250)">
                    <line x1="0" y1="100" x2="0" y2="-100" stroke="#a1887f" stroke-width="3"/>
                    <ellipse cx="0" cy="-80" rx="10" ry="8" fill="#c1121f"/>
                    <ellipse cx="0" cy="-60" rx="10" ry="8" fill="#5d4037"/>
                    <ellipse cx="0" cy="-40" rx="10" ry="8" fill="#ff7043"/>
                    <ellipse cx="0" cy="-20" rx="10" ry="8" fill="#c1121f"/>
                    <ellipse cx="0" cy="0" rx="10" ry="8" fill="#5d4037"/>
                    <ellipse cx="0" cy="20" rx="10" ry="8" fill="#ff7043"/>
                </g>
                <g transform="translate(600,250)">
                    <line x1="0" y1="100" x2="0" y2="-100" stroke="#a1887f" stroke-width="3"/>
                    <ellipse cx="0" cy="-80" rx="10" ry="8" fill="#c1121f"/>
                    <ellipse cx="0" cy="-60" rx="10" ry="8" fill="#5d4037"/>
                    <ellipse cx="0" cy="-40" rx="10" ry="8" fill="#ff7043"/>
                    <ellipse cx="0" cy="-20" rx="10" ry="8" fill="#c1121f"/>
                    <ellipse cx="0" cy="0" rx="10" ry="8" fill="#5d4037"/>
                    <ellipse cx="0" cy="20" rx="10" ry="8" fill="#ff7043"/>
                </g>
            </g>
            <!-- spices on table -->
            <g fill="#c1121f"><circle cx="100" cy="450" r="2"/><circle cx="110" cy="450" r="2"/><circle cx="120" cy="450" r="2"/><circle cx="130" cy="450" r="2"/><circle cx="700" cy="450" r="2"/><circle cx="690" cy="450" r="2"/><circle cx="680" cy="450" r="2"/><circle cx="670" cy="450" r="2"/></g>
            <g fill="#388e3c"><circle cx="105" cy="445" r="1"/><circle cx="115" cy="445" r="1"/><circle cx="125" cy="445" r="1"/><circle cx="705" cy="445" r="1"/><circle cx="695" cy="445" r="1"/><circle cx="685" cy="445" r="1"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">新疆烤肉</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#ffab91">Xinjiang Lamb Skewer · Sizzling &amp; Spicy</text>
        </svg>`
    }
],

/* ============ 呼和浩特 Hohhot ============ */
hohhot: [
    {
        label: 'Dazhao Temple · 大召寺',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hh1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#d7ccc8"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hh1-sky)"/>
            <!-- distant mountains -->
            <path d="M0 200 L100 150 L200 180 L300 130 L400 170 L500 140 L600 180 L700 150 L800 180 L800 280 L0 280 Z" fill="#8d6e63" opacity="0.6"/>
            <!-- Dazhao Temple (Tibetan Buddhist style) -->
            <g transform="translate(400,270)">
                <!-- main hall -->
                <rect x="-150" y="60" width="300" height="100" fill="#fff" stroke="#5d4037" stroke-width="2"/>
                <!-- 3 horizontal black bands (Tibetan style) -->
                <rect x="-150" y="80" width="300" height="8" fill="#3e2723"/>
                <rect x="-150" y="100" width="300" height="8" fill="#3e2723"/>
                <rect x="-150" y="130" width="300" height="8" fill="#3e2723"/>
                <!-- upper tier with golden roof -->
                <rect x="-100" y="30" width="200" height="30" fill="#d7ccc8"/>
                <polygon points="-110,30 110,30 100,5 -100,5" fill="#fdd835"/>
                <polygon points="-95,5 95,5 85,-20 -85,-20" fill="#f9a825"/>
                <!-- central tower with curving eaves -->
                <rect x="-30" y="-30" width="60" height="30" fill="#a1887f"/>
                <polygon points="-40,-30 40,-30 30,-60 -30,-60" fill="#fdd835"/>
                <line x1="0" y1="-60" x2="0" y2="-90" stroke="#fdd835" stroke-width="3"/>
                <!-- deer and wheel symbol (Tibetan) -->
                <circle cx="-25" cy="-75" r="4" fill="#fdd835"/>
                <circle cx="25" cy="-75" r="4" fill="#fdd835"/>
                <!-- sun & moon on top -->
                <circle cx="-15" cy="-95" r="5" fill="#fff" stroke="#fdd835" stroke-width="1"/>
                <circle cx="15" cy="-95" r="4" fill="#fdd835"/>
                <!-- entrance -->
                <rect x="-30" y="100" width="60" height="60" fill="#1a0e0a"/>
                <path d="M-30 100 Q0 80 30 100" fill="none" stroke="#fdd835" stroke-width="2"/>
                <!-- windows -->
                <g fill="#3e2723"><rect x="-130" y="40" width="10" height="20"/><rect x="-100" y="40" width="10" height="20"/><rect x="90" y="40" width="10" height="20"/><rect x="120" y="40" width="10" height="20"/></g>
            </g>
            <!-- incense burners -->
            <g transform="translate(280,400)">
                <rect x="-15" y="20" width="30" height="20" fill="#5d4037"/>
                <ellipse cx="0" cy="20" rx="15" ry="5" fill="#a1887f"/>
                <line x1="0" y1="15" x2="0" y2="-30" stroke="#5d4037" stroke-width="1"/>
                <g fill="#fff" opacity="0.7"><circle cx="0" cy="15" r="2"/><circle cx="-2" cy="10" r="2"/><circle cx="3" cy="5" r="2"/></g>
            </g>
            <!-- pilgrims -->
            <g transform="translate(500,420)">
                <ellipse cx="0" cy="0" rx="15" ry="6" fill="#c1121f"/>
                <circle cx="0" cy="-3" r="4" fill="#8d6e63"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">大召寺·青城</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#fff59d">Dazhao Temple · 400-year-old Tibetan Buddhist</text>
        </svg>`
    },
    {
        label: 'Grassland & Yurt · 草原蒙古包',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="hh2-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80d8ff"/><stop offset="60%" stop-color="#a5d6a7"/><stop offset="100%" stop-color="#66bb6a"/></linearGradient></defs>
            <rect width="800" height="500" fill="url(#hh2-sky)"/>
            <!-- flying eagles (eagle = symbol of Mongolia) -->
            <g fill="#3e2723">
                <path d="M150 80 L160 70 L170 80 L165 75 L160 85 L155 75 Z"/>
                <path d="M250 100 L260 90 L270 100 L265 95 L260 105 L255 95 Z"/>
                <path d="M650 90 L660 80 L670 90 L665 85 L660 95 L655 85 Z"/>
            </g>
            <!-- endless grassland -->
            <path d="M0 280 Q200 270 400 280 T800 280 L800 500 L0 500 Z" fill="#66bb6a"/>
            <path d="M0 350 Q200 340 400 350 T800 340 L800 500 L0 500 Z" fill="#43a047"/>
            <!-- distant horses -->
            <g fill="#5d4037">
                <ellipse cx="100" cy="320" rx="15" ry="8"/>
                <rect x="85" y="328" width="3" height="10"/>
                <rect x="112" y="328" width="3" height="10"/>
                <ellipse cx="200" cy="330" rx="15" ry="8"/>
                <rect x="185" y="338" width="3" height="10"/>
                <rect x="212" y="338" width="3" height="10"/>
            </g>
            <!-- yurts scattered across grassland -->
            <g transform="translate(400,350)">
                <!-- big main yurt -->
                <ellipse cx="0" cy="40" rx="60" ry="10" fill="#5d4037"/>
                <path d="M-60 40 Q0 -50 60 40 Z" fill="#d7ccc8"/>
                <g stroke="#5d4037" stroke-width="1"><line x1="-50" y1="0" x2="0" y2="-50"/><line x1="-30" y1="-10" x2="0" y2="-50"/><line x1="-10" y1="-25" x2="0" y2="-50"/><line x1="10" y1="-25" x2="0" y2="-50"/><line x1="30" y1="-10" x2="0" y2="-50"/><line x1="50" y1="0" x2="0" y2="-50"/></g>
                <!-- top circle -->
                <circle cx="0" cy="-50" r="5" fill="#fdd835"/>
                <!-- door -->
                <rect x="-10" y="0" width="20" height="40" fill="#5d4037"/>
                <rect x="-7" y="5" width="14" height="30" fill="#a02020"/>
            </g>
            <!-- smaller yurts in distance -->
            <g transform="translate(150,380) scale(0.5)">
                <ellipse cx="0" cy="40" rx="60" ry="10" fill="#5d4037"/>
                <path d="M-60 40 Q0 -50 60 40 Z" fill="#d7ccc8"/>
                <circle cx="0" cy="-50" r="5" fill="#fdd835"/>
            </g>
            <g transform="translate(650,380) scale(0.5)">
                <ellipse cx="0" cy="40" rx="60" ry="10" fill="#5d4037"/>
                <path d="M-60 40 Q0 -50 60 40 Z" fill="#d7ccc8"/>
                <circle cx="0" cy="-50" r="5" fill="#fdd835"/>
            </g>
            <!-- horse in foreground -->
            <g transform="translate(550,420)">
                <ellipse cx="0" cy="0" rx="30" ry="12" fill="#fff"/>
                <circle cx="30" cy="-5" r="10" fill="#fff"/>
                <path d="M35 -10 L40 -15 L35 -18 L37 -10 Z" fill="#fff"/>
                <line x1="-25" y1="10" x2="-25" y2="22" stroke="#fff" stroke-width="4"/>
                <line x1="-15" y1="10" x2="-15" y2="22" stroke="#fff" stroke-width="4"/>
                <line x1="15" y1="10" x2="15" y2="22" stroke="#fff" stroke-width="4"/>
                <line x1="25" y1="10" x2="25" y2="22" stroke="#fff" stroke-width="4"/>
                <!-- tail -->
                <path d="M-30 -5 Q-40 -10 -35 -20" fill="none" stroke="#fff" stroke-width="3"/>
                <!-- rider -->
                <circle cx="-5" cy="-15" r="7" fill="#d7ccc8"/>
                <ellipse cx="-5" cy="-20" rx="10" ry="3" fill="#3e2723"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">草原·蒙古包</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Endless Grassland &amp; Ger · Inner Mongolia</text>
        </svg>`
    },
    {
        label: 'Milk Tea · 奶茶',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs><radialGradient id="hh3-bg"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#a1887f"/></radialGradient></defs>
            <rect width="800" height="500" fill="url(#hh3-bg)"/>
            <!-- table setting -->
            <ellipse cx="400" cy="450" rx="380" ry="40" fill="#3e2723"/>
            <ellipse cx="400" cy="445" rx="370" ry="35" fill="#5d4037"/>
            <!-- big traditional Mongolian tea bowl -->
            <g transform="translate(400,330)">
                <ellipse cx="0" cy="100" rx="80" ry="15" fill="#1a0e0a"/>
                <ellipse cx="0" cy="90" rx="75" ry="12" fill="#a1887f"/>
                <path d="M-75 90 L-65 0 Q-50 -30 50 -30 Q65 0 65 90 Z" fill="#a1887f"/>
                <!-- inner bowl decoration -->
                <ellipse cx="0" cy="-25" rx="55" ry="8" fill="#5d4037"/>
                <!-- traditional Mongolian pattern -->
                <g stroke="#c1121f" stroke-width="2" fill="none">
                    <circle cx="0" cy="-50" r="20"/>
                    <path d="M-25 -65 L-15 -80 L-5 -65 L5 -80 L15 -65 L25 -80"/>
                </g>
                <!-- tea (cream-colored Mongolian milk tea) -->
                <ellipse cx="0" cy="-25" rx="55" ry="6" fill="#fff"/>
                <!-- floating butter chunks -->
                <ellipse cx="-15" cy="-26" rx="6" ry="2" fill="#fdd835"/>
                <ellipse cx="10" cy="-26" rx="6" ry="2" fill="#fdd835"/>
                <ellipse cx="25" cy="-26" rx="5" ry="2" fill="#fdd835"/>
                <!-- steam -->
                <path d="M-20 -55 Q-25 -75 -15 -85" fill="none" stroke="#fff" stroke-width="2" opacity="0.6"/>
                <path d="M20 -55 Q25 -75 15 -85" fill="none" stroke="#fff" stroke-width="2" opacity="0.6"/>
            </g>
            <!-- side bowl with fried rice/milk curds (奶茶伴侣) -->
            <g transform="translate(150,420)">
                <ellipse cx="0" cy="20" rx="40" ry="8" fill="#3e2723"/>
                <path d="M-40 20 L-35 0 Q-30 -10 30 -10 Q35 0 40 20 Z" fill="#a1887f"/>
                <ellipse cx="0" cy="-5" rx="35" ry="4" fill="#fff"/>
                <!-- golden fried dough twists -->
                <g fill="#fdd835"><circle cx="-10" cy="-7" r="4"/><circle cx="5" cy="-7" r="4"/><circle cx="20" cy="-7" r="4"/></g>
            </g>
            <!-- dried beef pieces -->
            <g transform="translate(650,420)">
                <ellipse cx="-15" cy="0" rx="8" ry="3" fill="#8d6e63"/>
                <ellipse cx="0" cy="0" rx="8" ry="3" fill="#5d4037"/>
                <ellipse cx="15" cy="0" rx="8" ry="3" fill="#8d6e63"/>
            </g>
            <!-- horse-head fiddle on wall -->
            <g transform="translate(80,180)">
                <ellipse cx="40" cy="60" rx="40" ry="30" fill="#8d6e63"/>
                <line x1="0" y1="60" x2="-40" y2="60" stroke="#5d4037" stroke-width="6"/>
                <!-- horse head -->
                <ellipse cx="-50" cy="55" rx="10" ry="8" fill="#5d4037"/>
                <circle cx="-55" cy="50" r="2" fill="#000"/>
                <line x1="-60" y1="50" x2="-55" y2="48" stroke="#5d4037" stroke-width="2"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#c1121f" font-weight="700">咸奶茶·奶食</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#5d4037">Mongolian Salty Milk Tea · with fried dough &amp; dried beef</text>
        </svg>`
    }
]
};
