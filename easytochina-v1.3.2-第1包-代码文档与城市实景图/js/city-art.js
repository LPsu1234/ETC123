/**
 * CITY_ART - Hand-crafted SVG illustrations for each Chinese city
 *
 * Each city has 3 unique scenes (dawn / noon / night) with iconic landmarks,
 * atmospheric colors, and Chinese calligraphy labels. SVGs are 100% inline
 * so they work offline and bypass China's GFW blocking Wikimedia.
 *
 * Each scene is ~30-60 lines of SVG art, composed of:
 *   - Sky gradient (time-of-day mood)
 *   - Atmosphere layer (sun/moon/stars/fog)
 *   - Distant mountains/cityscape
 *   - Iconic landmark(s)
 *   - Foreground details
 *   - Chinese calligraphy label + English
 */

const CITY_ART = {

/* ============ 北京 Beijing ============ */
beijing: [
    // 1. 故宫·晨 Forbidden City Dawn
    {
        label: 'Forbidden City · 故宫',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bj1-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fcd3a1"/><stop offset="50%" stop-color="#f4a261"/><stop offset="100%" stop-color="#e76f51"/>
                </linearGradient>
                <linearGradient id="bj1-roof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#8b1e1e"/><stop offset="100%" stop-color="#5c1010"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#bj1-sky)"/>
            <circle cx="120" cy="100" r="36" fill="#fff8e1" opacity="0.9"/>
            <circle cx="120" cy="100" r="60" fill="#fff8e1" opacity="0.2"/>
            <!-- distant mountains -->
            <path d="M0 280 Q120 220 240 260 T480 250 T800 270 L800 320 L0 320 Z" fill="#5c2828" opacity="0.6"/>
            <!-- back palace wall -->
            <rect x="80" y="240" width="640" height="60" fill="#7a1a1a"/>
            <!-- main hall -->
            <rect x="180" y="200" width="440" height="50" fill="#a02020"/>
            <!-- yellow tiled roof - iconic curved eaves -->
            <path d="M150 200 Q180 140 220 200 Z" fill="url(#bj1-roof)" stroke="#3a0808" stroke-width="2"/>
            <path d="M580 200 Q620 140 650 200 Z" fill="url(#bj1-roof)" stroke="#3a0808" stroke-width="2"/>
            <path d="M220 200 L580 200 L600 175 L200 175 Z" fill="url(#bj1-roof)" stroke="#3a0808" stroke-width="2"/>
            <path d="M260 175 L540 175 L530 165 L270 165 Z" fill="#5c1010"/>
            <!-- roof ridge ornaments -->
            <circle cx="200" cy="170" r="3" fill="#f4a261"/>
            <circle cx="600" cy="170" r="3" fill="#f4a261"/>
            <circle cx="400" cy="160" r="5" fill="#f4a261"/>
            <!-- front palace wall -->
            <rect x="80" y="300" width="640" height="120" fill="#8b1e1e"/>
            <!-- red gate arches -->
            <rect x="350" y="320" width="100" height="100" fill="#3a0808" rx="0"/>
            <path d="M340 320 Q400 280 460 320 Z" fill="#3a0808"/>
            <!-- lanterns -->
            <circle cx="200" cy="320" r="10" fill="#ff6b35"/>
            <circle cx="600" cy="320" r="10" fill="#ff6b35"/>
            <!-- ground -->
            <rect x="0" y="420" width="800" height="80" fill="#3a2820"/>
            <!-- calligraphy label -->
            <text x="40" y="465" font-family="serif" font-size="22" fill="#f4a261" font-weight="700">故宫·紫禁城</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#fcd3a1">Forbidden City · Imperial Palace</text>
        </svg>`
    },
    // 2. 长城·雾 Great Wall Misty
    {
        label: 'Great Wall · 长城',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bj2-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#cfd8dc"/><stop offset="60%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#607d8b"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#bj2-sky)"/>
            <!-- fog layers -->
            <ellipse cx="400" cy="280" rx="600" ry="60" fill="#fff" opacity="0.5"/>
            <ellipse cx="300" cy="320" rx="400" ry="40" fill="#fff" opacity="0.4"/>
            <!-- far mountains -->
            <path d="M0 280 L100 230 L200 250 L320 200 L440 240 L560 210 L680 250 L800 220 L800 320 L0 320 Z" fill="#546e7a" opacity="0.7"/>
            <!-- mid mountains -->
            <path d="M0 340 L80 290 L180 320 L300 270 L420 310 L540 280 L660 320 L800 290 L800 380 L0 380 Z" fill="#37474f" opacity="0.85"/>
            <!-- great wall - zigzag along ridge -->
            <path d="M40 360 L120 340 L180 350 L240 330 L300 350 L360 320 L420 345 L480 335 L540 355 L620 330 L700 350 L760 335 L760 360 L40 380 Z" fill="#5d4037" stroke="#3e2723" stroke-width="2"/>
            <!-- watchtowers -->
            <rect x="160" y="320" width="30" height="40" fill="#3e2723"/>
            <rect x="155" y="315" width="40" height="8" fill="#3e2723"/>
            <rect x="420" y="320" width="30" height="40" fill="#3e2723"/>
            <rect x="415" y="315" width="40" height="8" fill="#3e2723"/>
            <rect x="620" y="305" width="30" height="40" fill="#3e2723"/>
            <rect x="615" y="300" width="40" height="8" fill="#3e2723"/>
            <!-- crenellations -->
            <g fill="#3e2723"><rect x="50" y="358" width="6" height="4"/><rect x="64" y="358" width="6" height="4"/><rect x="78" y="358" width="6" height="4"/><rect x="92" y="358" width="6" height="4"/><rect x="106" y="358" width="6" height="4"/><rect x="120" y="358" width="6" height="4"/><rect x="240" y="348" width="6" height="4"/><rect x="254" y="348" width="6" height="4"/><rect x="268" y="348" width="6" height="4"/><rect x="282" y="348" width="6" height="4"/><rect x="296" y="348" width="6" height="4"/><rect x="500" y="350" width="6" height="4"/><rect x="514" y="350" width="6" height="4"/><rect x="528" y="350" width="6" height="4"/><rect x="542" y="350" width="6" height="4"/></g>
            <!-- foreground hill -->
            <path d="M0 420 Q200 380 400 410 T800 400 L800 500 L0 500 Z" fill="#2e3a32"/>
            <!-- calligraphy -->
            <text x="40" y="465" font-family="serif" font-size="22" fill="#e0e0e0" font-weight="700">万里长城</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#b0bec5">Great Wall · 万里长城永不倒</text>
        </svg>`
    },
    // 3. 天坛·夜 Temple of Heaven Night
    {
        label: 'Temple of Heaven · 天坛',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="bj3-sky" cx="50%" cy="20%" r="80%">
                    <stop offset="0%" stop-color="#1a237e"/><stop offset="100%" stop-color="#000051"/>
                </radialGradient>
            </defs>
            <rect width="800" height="500" fill="url(#bj3-sky)"/>
            <!-- stars -->
            <g fill="#fff">
                <circle cx="80" cy="60" r="1.5"/><circle cx="160" cy="40" r="1"/><circle cx="240" cy="80" r="1.5"/>
                <circle cx="340" cy="50" r="1"/><circle cx="430" cy="70" r="1.5"/><circle cx="520" cy="40" r="1"/>
                <circle cx="610" cy="90" r="1.5"/><circle cx="690" cy="60" r="1"/><circle cx="750" cy="100" r="1.5"/>
                <circle cx="120" cy="130" r="1"/><circle cx="280" cy="150" r="1.5"/><circle cx="600" cy="140" r="1"/>
            </g>
            <!-- moon -->
            <circle cx="640" cy="100" r="32" fill="#fff9c4" opacity="0.9"/>
            <circle cx="635" cy="95" r="28" fill="#000051" opacity="0.3"/>
            <!-- temple of heaven - iconic triple-gabled circular roof -->
            <!-- base platform steps -->
            <rect x="100" y="400" width="600" height="40" fill="#1a1a2e" stroke="#f4a261" stroke-width="1"/>
            <rect x="120" y="380" width="560" height="20" fill="#22223a"/>
            <!-- main circular building -->
            <rect x="280" y="280" width="240" height="100" fill="#0f3460"/>
            <!-- triple gabled roof - top -->
            <path d="M240 280 Q400 160 560 280 Z" fill="#0a1128" stroke="#f4a261" stroke-width="2"/>
            <!-- middle roof -->
            <path d="M260 280 Q400 200 540 280" fill="none" stroke="#f4a261" stroke-width="3"/>
            <path d="M260 280 L540 280 L530 250 L270 250 Z" fill="#0a1128" stroke="#f4a261" stroke-width="2"/>
            <!-- roof finial -->
            <circle cx="400" cy="170" r="5" fill="#f4a261"/>
            <line x1="400" y1="165" x2="400" y2="155" stroke="#f4a261" stroke-width="2"/>
            <!-- columns -->
            <rect x="290" y="290" width="8" height="90" fill="#0a1128"/>
            <rect x="502" y="290" width="8" height="90" fill="#0a1128"/>
            <rect x="380" y="290" width="8" height="90" fill="#0a1128"/>
            <rect x="412" y="290" width="8" height="90" fill="#0a1128"/>
            <!-- pillars red -->
            <rect x="295" y="290" width="3" height="90" fill="#c1121f"/>
            <rect x="507" y="290" width="3" height="90" fill="#c1121f"/>
            <!-- lanterns on temple -->
            <circle cx="320" cy="310" r="6" fill="#ff6b35" opacity="0.9"/>
            <circle cx="480" cy="310" r="6" fill="#ff6b35" opacity="0.9"/>
            <!-- reflection / glow -->
            <ellipse cx="400" cy="450" rx="180" ry="10" fill="#f4a261" opacity="0.15"/>
            <!-- ground -->
            <rect x="0" y="440" width="800" height="60" fill="#000"/>
            <!-- calligraphy -->
            <text x="40" y="475" font-family="serif" font-size="22" fill="#f4a261" font-weight="700">天坛·祈年殿</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#cfd8dc">Temple of Heaven · Hall of Prayer</text>
        </svg>`
    }
],

/* ============ 上海 Shanghai ============ */
shanghai: [
    // 1. 浦东天际线·黄昏 Pudong Skyline Sunset
    {
        label: 'Pudong Skyline · 浦东',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sh1-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff9a8b"/><stop offset="40%" stop-color="#ff6a88"/><stop offset="100%" stop-color="#3a1c71"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#sh1-sky)"/>
            <circle cx="700" cy="150" r="40" fill="#ffd54f" opacity="0.95"/>
            <circle cx="700" cy="150" r="80" fill="#ffd54f" opacity="0.15"/>
            <!-- Huangpu river -->
            <rect x="0" y="380" width="800" height="120" fill="#1a237e" opacity="0.85"/>
            <g fill="#ffd54f" opacity="0.4"><rect x="50" y="395" width="60" height="2"/><rect x="180" y="410" width="80" height="2"/><rect x="350" y="400" width="100" height="2"/><rect x="500" y="420" width="70" height="2"/><rect x="650" y="405" width="80" height="2"/><rect x="100" y="430" width="50" height="2"/><rect x="280" y="445" width="90" height="2"/><rect x="580" y="450" width="60" height="2"/></g>
            <!-- bund side - low buildings -->
            <g fill="#3e2723" opacity="0.8"><rect x="40" y="320" width="50" height="60"/><rect x="100" y="310" width="60" height="70"/><rect x="170" y="325" width="45" height="55"/></g>
            <!-- Oriental Pearl Tower -->
            <rect x="220" y="200" width="6" height="180" fill="#fff"/>
            <circle cx="223" cy="220" r="14" fill="#e91e63" stroke="#fff" stroke-width="1.5"/>
            <circle cx="223" cy="220" r="6" fill="#fff"/>
            <circle cx="223" cy="260" r="10" fill="#e91e63" stroke="#fff" stroke-width="1.5"/>
            <!-- Shanghai Tower (twisted) -->
            <path d="M280 380 L290 200 Q310 180 330 200 L340 380 Z" fill="#546e7a"/>
            <path d="M285 380 L295 220 Q310 205 325 220 L335 380 Z" fill="#37474f"/>
            <line x1="310" y1="220" x2="310" y2="180" stroke="#fff" stroke-width="2"/>
            <!-- Jin Mao Tower -->
            <path d="M360 380 L370 220 L390 220 L400 380 Z" fill="#455a64"/>
            <g fill="#fdd835" opacity="0.7"><rect x="372" y="240" width="16" height="3"/><rect x="372" y="260" width="16" height="3"/><rect x="372" y="280" width="16" height="3"/><rect x="372" y="300" width="16" height="3"/><rect x="372" y="320" width="16" height="3"/></g>
            <!-- SWFC bottle opener -->
            <path d="M420 380 L430 220 L450 220 L460 280 L455 290 L460 380 Z" fill="#37474f"/>
            <rect x="430" y="180" width="20" height="40" fill="#37474f"/>
            <rect x="425" y="175" width="30" height="8" fill="#37474f"/>
            <!-- more skyscrapers -->
            <rect x="475" y="240" width="40" height="140" fill="#455a64"/>
            <rect x="525" y="220" width="35" height="160" fill="#546e7a"/>
            <rect x="570" y="260" width="45" height="120" fill="#455a64"/>
            <rect x="625" y="240" width="40" height="140" fill="#546e7a"/>
            <rect x="675" y="280" width="55" height="100" fill="#455a64"/>
            <!-- window lights -->
            <g fill="#fdd835" opacity="0.6">
                <rect x="478" y="260" width="3" height="3"/><rect x="486" y="260" width="3" height="3"/><rect x="494" y="260" width="3" height="3"/><rect x="502" y="260" width="3" height="3"/>
                <rect x="478" y="280" width="3" height="3"/><rect x="486" y="280" width="3" height="3"/><rect x="494" y="280" width="3" height="3"/>
                <rect x="528" y="240" width="3" height="3"/><rect x="536" y="240" width="3" height="3"/><rect x="544" y="240" width="3" height="3"/><rect x="552" y="240" width="3" height="3"/>
                <rect x="528" y="260" width="3" height="3"/><rect x="536" y="260" width="3" height="3"/><rect x="544" y="260" width="3" height="3"/>
                <rect x="573" y="280" width="3" height="3"/><rect x="581" y="280" width="3" height="3"/><rect x="589" y="280" width="3" height="3"/><rect x="597" y="280" width="3" height="3"/>
                <rect x="605" y="280" width="3" height="3"/>
                <rect x="628" y="260" width="3" height="3"/><rect x="636" y="260" width="3" height="3"/><rect x="644" y="260" width="3" height="3"/><rect x="652" y="260" width="3" height="3"/>
            </g>
            <!-- calligraphy -->
            <text x="40" y="465" font-family="serif" font-size="22" fill="#fff" font-weight="700">魔都·浦东</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#fcd3a1">Shanghai · Oriental Pearl Tower</text>
        </svg>`
    },
    // 2. 外滩·夜 Bund Night
    {
        label: 'The Bund · 外滩',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sh2-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0d1b4c"/><stop offset="100%" stop-color="#1e3a8a"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#sh2-sky)"/>
            <!-- stars -->
            <g fill="#fff"><circle cx="100" cy="40" r="1"/><circle cx="200" cy="60" r="1.2"/><circle cx="350" cy="30" r="1"/><circle cx="500" cy="50" r="1.2"/><circle cx="650" cy="35" r="1"/></g>
            <!-- Huangpu river with reflections -->
            <rect x="0" y="380" width="800" height="120" fill="#0a1a3a"/>
            <g fill="#ffd700" opacity="0.5"><rect x="60" y="400" width="50" height="3"/><rect x="180" y="420" width="80" height="3"/><rect x="340" y="410" width="100" height="3"/><rect x="510" y="430" width="80" height="3"/><rect x="650" y="420" width="60" height="3"/><rect x="120" y="450" width="70" height="2"/><rect x="280" y="465" width="90" height="2"/><rect x="440" y="475" width="80" height="2"/><rect x="600" y="470" width="70" height="2"/></g>
            <!-- distant Pudong skyline silhouette -->
            <g fill="#1a2a5a" opacity="0.8">
                <circle cx="240" cy="290" r="10"/><line x1="240" y1="290" x2="240" y2="370" stroke="#1a2a5a" stroke-width="3"/>
                <rect x="280" y="220" width="14" height="160"/>
                <rect x="300" y="240" width="12" height="140"/>
                <rect x="320" y="200" width="10" height="180"/>
                <rect x="340" y="230" width="14" height="150"/>
                <rect x="380" y="180" width="8" height="200"/>
                <rect x="400" y="200" width="14" height="180"/>
            </g>
            <!-- Bund historic European buildings -->
            <g>
                <!-- clock tower (Customs House) -->
                <rect x="120" y="220" width="40" height="160" fill="#8d6e63"/>
                <rect x="115" y="200" width="50" height="20" fill="#6d4c41"/>
                <rect x="125" y="170" width="30" height="30" fill="#6d4c41"/>
                <circle cx="140" cy="185" r="10" fill="#fdd835" stroke="#6d4c41" stroke-width="2"/>
                <polygon points="125,170 155,170 140,150" fill="#5d4037"/>
                <!-- colonnade building -->
                <rect x="170" y="240" width="120" height="140" fill="#a1887f"/>
                <g fill="#5d4037"><rect x="180" y="280" width="6" height="100"/><rect x="200" y="280" width="6" height="100"/><rect x="220" y="280" width="6" height="100"/><rect x="240" y="280" width="6" height="100"/><rect x="260" y="280" width="6" height="100"/><rect x="280" y="280" width="6" height="100"/></g>
                <polygon points="170,240 290,240 280,220 180,220" fill="#6d4c41"/>
                <!-- neoclassical building -->
                <rect x="300" y="260" width="100" height="120" fill="#8d6e63"/>
                <g fill="#5d4037"><rect x="310" y="290" width="6" height="90"/><rect x="325" y="290" width="6" height="90"/><rect x="340" y="290" width="6" height="90"/><rect x="355" y="290" width="6" height="90"/><rect x="370" y="290" width="6" height="90"/><rect x="385" y="290" width="6" height="90"/></g>
                <polygon points="300,260 400,260 390,240 310,240" fill="#6d4c41"/>
                <!-- more buildings -->
                <rect x="410" y="270" width="80" height="110" fill="#a1887f"/>
                <rect x="500" y="280" width="100" height="100" fill="#8d6e63"/>
                <rect x="610" y="270" width="90" height="110" fill="#a1887f"/>
            </g>
            <!-- warm window lights on Bund buildings -->
            <g fill="#ffd54f" opacity="0.8">
                <rect x="125" y="240" width="3" height="3"/><rect x="135" y="240" width="3" height="3"/><rect x="145" y="240" width="3" height="3"/>
                <rect x="125" y="260" width="3" height="3"/><rect x="135" y="260" width="3" height="3"/><rect x="145" y="260" width="3" height="3"/>
                <rect x="180" y="260" width="3" height="3"/><rect x="195" y="260" width="3" height="3"/><rect x="210" y="260" width="3" height="3"/><rect x="225" y="260" width="3" height="3"/><rect x="240" y="260" width="3" height="3"/><rect x="255" y="260" width="3" height="3"/><rect x="270" y="260" width="3" height="3"/>
                <rect x="310" y="275" width="3" height="3"/><rect x="325" y="275" width="3" height="3"/><rect x="340" y="275" width="3" height="3"/><rect x="355" y="275" width="3" height="3"/><rect x="370" y="275" width="3" height="3"/><rect x="385" y="275" width="3" height="3"/>
                <rect x="510" y="300" width="3" height="3"/><rect x="525" y="300" width="3" height="3"/><rect x="540" y="300" width="3" height="3"/><rect x="555" y="300" width="3" height="3"/><rect x="570" y="300" width="3" height="3"/><rect x="585" y="300" width="3" height="3"/>
                <rect x="620" y="290" width="3" height="3"/><rect x="635" y="290" width="3" height="3"/><rect x="650" y="290" width="3" height="3"/><rect x="665" y="290" width="3" height="3"/><rect x="680" y="290" width="3" height="3"/>
            </g>
            <!-- neon lights along promenade -->
            <g fill="#ff4081" opacity="0.9">
                <rect x="120" y="395" width="60" height="2"/><rect x="200" y="395" width="60" height="2"/><rect x="280" y="395" width="60" height="2"/><rect x="360" y="395" width="60" height="2"/><rect x="440" y="395" width="60" height="2"/><rect x="520" y="395" width="60" height="2"/><rect x="600" y="395" width="60" height="2"/><rect x="680" y="395" width="60" height="2"/>
            </g>
            <text x="40" y="465" font-family="serif" font-size="22" fill="#ffd54f" font-weight="700">外滩·万国建筑</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#90caf9">The Bund · 上海之夜</text>
        </svg>`
    },
    // 3. 豫园·晨 Yu Garden Morning
    {
        label: 'Yu Garden · 豫园',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sh3-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ffe0b2"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#sh3-sky)"/>
            <!-- distant willows -->
            <g fill="#7cb342" opacity="0.7"><rect x="0" y="280" width="800" height="50"/><g stroke="#558b2f" stroke-width="1.5" opacity="0.6"><line x1="20" y1="280" x2="10" y2="240"/><line x1="20" y1="280" x2="30" y2="240"/><line x1="50" y1="285" x2="40" y2="250"/><line x1="50" y1="285" x2="60" y2="250"/></g></g>
            <!-- traditional pavilion with curved roof -->
            <!-- back pavilion -->
            <rect x="300" y="220" width="200" height="60" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
            <path d="M280 220 Q400 160 520 220 Z" fill="#a0522d" stroke="#3e2723" stroke-width="2"/>
            <path d="M290 220 L510 220 L505 210 L295 210 Z" fill="#8d6e63"/>
            <!-- pavilion columns -->
            <rect x="310" y="280" width="6" height="40" fill="#c1121f"/>
            <rect x="394" y="280" width="6" height="40" fill="#c1121f"/>
            <rect x="484" y="280" width="6" height="40" fill="#c1121f"/>
            <!-- door -->
            <rect x="380" y="290" width="40" height="50" fill="#3e2723"/>
            <circle cx="412" cy="315" r="2" fill="#fdd835"/>
            <!-- hanging lanterns -->
            <line x1="320" y1="220" x2="320" y2="240" stroke="#3e2723" stroke-width="1"/>
            <ellipse cx="320" cy="248" rx="6" ry="8" fill="#ff6b35"/>
            <line x1="480" y1="220" x2="480" y2="240" stroke="#3e2723" stroke-width="1"/>
            <ellipse cx="480" cy="248" rx="6" ry="8" fill="#ff6b35"/>
            <!-- side pavilions -->
            <rect x="120" y="260" width="120" height="60" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
            <path d="M105 260 Q180 215 255 260 Z" fill="#a0522d" stroke="#3e2723" stroke-width="2"/>
            <rect x="580" y="260" width="120" height="60" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/>
            <path d="M565 260 Q640 215 715 260 Z" fill="#a0522d" stroke="#3e2723" stroke-width="2"/>
            <!-- rockery (famous garden rocks) -->
            <path d="M60 380 Q80 280 110 320 Q130 280 150 360 Z" fill="#5d4037" stroke="#3e2723" stroke-width="1.5"/>
            <path d="M650 380 Q670 290 700 330 Q720 290 740 360 Z" fill="#5d4037" stroke="#3e2723" stroke-width="1.5"/>
            <!-- koi pond -->
            <ellipse cx="400" cy="380" rx="280" ry="50" fill="#0277bd" opacity="0.7"/>
            <!-- koi fish -->
            <ellipse cx="320" cy="380" rx="12" ry="4" fill="#ff6b35"/>
            <polygon points="332,380 345,376 345,384" fill="#ff6b35"/>
            <ellipse cx="460" cy="390" rx="14" ry="4" fill="#fff"/>
            <polygon points="474,390 488,386 488,394" fill="#fff"/>
            <circle cx="318" cy="380" r="1" fill="#000"/><circle cx="458" cy="390" r="1" fill="#000"/>
            <!-- ripples -->
            <ellipse cx="320" cy="380" rx="18" ry="6" fill="none" stroke="#fff" opacity="0.4"/>
            <ellipse cx="460" cy="390" rx="20" ry="6" fill="none" stroke="#fff" opacity="0.4"/>
            <!-- lotus leaves -->
            <ellipse cx="250" cy="370" rx="22" ry="6" fill="#2e7d32"/>
            <ellipse cx="540" cy="385" rx="20" ry="5" fill="#2e7d32"/>
            <ellipse cx="380" cy="395" rx="18" ry="5" fill="#2e7d32"/>
            <!-- arched bridge -->
            <path d="M150 400 Q400 360 650 400" fill="none" stroke="#3e2723" stroke-width="3"/>
            <path d="M150 400 Q400 360 650 400 L650 410 Q400 370 150 410 Z" fill="#8d6e63"/>
            <!-- calligraphy -->
            <text x="40" y="465" font-family="serif" font-size="22" fill="#c1121f" font-weight="700">豫园·九曲桥</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#5d4037">Yu Garden · Classical Chinese Garden</text>
        </svg>`
    }
],

/* ============ 西安 Xi'an ============ */
xian: [
    // 1. 兵马俑 Terracotta Army
    {
        label: 'Terracotta Army · 兵马俑',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="xa1-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#3e2723"/><stop offset="100%" stop-color="#1b0e0a"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#xa1-bg)"/>
            <!-- pit depth - rows of warriors -->
            <!-- row 1 (back) -->
            <g fill="#6d4c41" opacity="0.7"><circle cx="120" cy="180" r="6"/><rect x="116" y="186" width="8" height="20"/><rect x="110" y="206" width="20" height="14"/><circle cx="200" cy="180" r="6"/><rect x="196" y="186" width="8" height="20"/><rect x="190" y="206" width="20" height="14"/><circle cx="280" cy="180" r="6"/><rect x="276" y="186" width="8" height="20"/><rect x="270" y="206" width="20" height="14"/><circle cx="360" cy="180" r="6"/><rect x="356" y="186" width="8" height="20"/><rect x="350" y="206" width="20" height="14"/><circle cx="440" cy="180" r="6"/><rect x="436" y="186" width="8" height="20"/><rect x="430" y="206" width="20" height="14"/><circle cx="520" cy="180" r="6"/><rect x="516" y="186" width="8" height="20"/><rect x="510" y="206" width="20" height="14"/><circle cx="600" cy="180" r="6"/><rect x="596" y="186" width="8" height="20"/><rect x="590" y="206" width="20" height="14"/><circle cx="680" cy="180" r="6"/><rect x="676" y="186" width="8" height="20"/><rect x="670" y="206" width="20" height="14"/></g>
            <!-- row 2 -->
            <g fill="#795548" opacity="0.85"><circle cx="100" cy="250" r="8"/><rect x="94" y="258" width="12" height="28"/><rect x="86" y="286" width="28" height="18"/><circle cx="200" cy="250" r="8"/><rect x="194" y="258" width="12" height="28"/><rect x="186" y="286" width="28" height="18"/><circle cx="300" cy="250" r="8"/><rect x="294" y="258" width="12" height="28"/><rect x="286" y="286" width="28" height="18"/><circle cx="400" cy="250" r="8"/><rect x="394" y="258" width="12" height="28"/><rect x="386" y="286" width="28" height="18"/><circle cx="500" cy="250" r="8"/><rect x="494" y="258" width="12" height="28"/><rect x="486" y="286" width="28" height="18"/><circle cx="600" cy="250" r="8"/><rect x="594" y="258" width="12" height="28"/><rect x="586" y="286" width="28" height="18"/><circle cx="700" cy="250" r="8"/><rect x="694" y="258" width="12" height="28"/><rect x="686" y="286" width="28" height="18"/></g>
            <!-- row 3 (front, detailed) -->
            <g>
                <!-- warrior 1 - general -->
                <g transform="translate(140,330)">
                    <ellipse cx="0" cy="0" rx="14" ry="14" fill="#a1887f"/><circle cx="-4" cy="-2" r="1.5" fill="#000"/><circle cx="4" cy="-2" r="1.5" fill="#000"/><path d="M-6 6 Q0 9 6 6" fill="none" stroke="#000" stroke-width="1"/>
                    <rect x="-12" y="14" width="24" height="6" fill="#3e2723"/>
                    <path d="M-16 20 L16 20 L18 60 L-18 60 Z" fill="#5d4037"/>
                    <g fill="#3e2723"><rect x="-12" y="30" width="3" height="3"/><rect x="-6" y="30" width="3" height="3"/><rect x="0" y="30" width="3" height="3"/><rect x="6" y="30" width="3" height="3"/><rect x="-12" y="40" width="3" height="3"/><rect x="-6" y="40" width="3" height="3"/><rect x="0" y="40" width="3" height="3"/><rect x="6" y="40" width="3" height="3"/><rect x="-12" y="50" width="3" height="3"/><rect x="-6" y="50" width="3" height="3"/><rect x="0" y="50" width="3" height="3"/><rect x="6" y="50" width="3" height="3"/></g>
                    <rect x="-20" y="60" width="40" height="8" fill="#8d6e63"/>
                    <rect x="-14" y="68" width="6" height="20" fill="#8d6e63"/><rect x="8" y="68" width="6" height="20" fill="#8d6e63"/>
                </g>
                <!-- warrior 2 -->
                <g transform="translate(260,340)">
                    <ellipse cx="0" cy="0" rx="13" ry="13" fill="#a1887f"/><circle cx="-3" cy="-1" r="1.5" fill="#000"/><circle cx="3" cy="-1" r="1.5" fill="#000"/>
                    <rect x="-10" y="13" width="20" height="6" fill="#3e2723"/>
                    <path d="M-14 19 L14 19 L16 55 L-16 55 Z" fill="#6d4c41"/>
                    <rect x="-18" y="55" width="36" height="8" fill="#8d6e63"/>
                    <rect x="-12" y="63" width="6" height="20" fill="#8d6e63"/><rect x="6" y="63" width="6" height="20" fill="#8d6e63"/>
                </g>
                <!-- horse -->
                <g transform="translate(380,330)">
                    <ellipse cx="0" cy="20" rx="30" ry="10" fill="#6d4c41"/>
                    <circle cx="25" cy="14" r="8" fill="#6d4c41"/><polygon points="32,12 35,8 30,8" fill="#6d4c41"/>
                    <rect x="-20" y="28" width="4" height="20" fill="#6d4c41"/>
                    <rect x="-8" y="28" width="4" height="20" fill="#6d4c41"/>
                    <rect x="6" y="28" width="4" height="20" fill="#6d4c41"/>
                    <rect x="18" y="28" width="4" height="20" fill="#6d4c41"/>
                    <path d="M-30 18 Q-35 5 -20 10" fill="none" stroke="#6d4c41" stroke-width="3"/>
                </g>
                <!-- warrior 3 -->
                <g transform="translate(490,335)">
                    <ellipse cx="0" cy="0" rx="13" ry="13" fill="#8d6e63"/>
                    <circle cx="-3" cy="-1" r="1.5" fill="#000"/><circle cx="3" cy="-1" r="1.5" fill="#000"/>
                    <path d="M-7 5 L7 5 L4 4 L-4 4 Z" fill="#3e2723"/>
                    <rect x="-10" y="13" width="20" height="6" fill="#3e2723"/>
                    <path d="M-14 19 L14 19 L16 55 L-16 55 Z" fill="#795548"/>
                    <rect x="-18" y="55" width="36" height="8" fill="#8d6e63"/>
                    <rect x="-12" y="63" width="6" height="20" fill="#8d6e63"/><rect x="6" y="63" width="6" height="20" fill="#8d6e63"/>
                </g>
                <!-- kneeling archer -->
                <g transform="translate(600,355)">
                    <ellipse cx="0" cy="0" rx="11" ry="11" fill="#a1887f"/>
                    <circle cx="-3" cy="-1" r="1.3" fill="#000"/><circle cx="3" cy="-1" r="1.3" fill="#000"/>
                    <rect x="-9" y="11" width="18" height="5" fill="#3e2723"/>
                    <path d="M-12 16 L12 16 L14 45 L-14 45 Z" fill="#6d4c41"/>
                    <rect x="-18" y="45" width="36" height="8" fill="#8d6e63"/>
                    <rect x="-15" y="53" width="30" height="10" fill="#8d6e63"/>
                </g>
            </g>
            <!-- museum hall lighting -->
            <g fill="#fdd835" opacity="0.3"><ellipse cx="120" cy="180" rx="30" ry="8"/><ellipse cx="400" cy="180" rx="30" ry="8"/><ellipse cx="680" cy="180" rx="30" ry="8"/></g>
            <!-- pit ground -->
            <rect x="0" y="420" width="800" height="80" fill="#2d1b14"/>
            <!-- calligraphy -->
            <text x="40" y="465" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">兵马俑·秦俑</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#a1887f">Terracotta Army · 2200 years of silence</text>
        </svg>`
    },
    // 2. 古城墙 City Wall Sunset
    {
        label: 'Ancient City Wall · 城墙',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="xa2-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffb74d"/><stop offset="50%" stop-color="#ff8a65"/><stop offset="100%" stop-color="#d84315"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#xa2-sky)"/>
            <circle cx="600" cy="120" r="32" fill="#ffecb3"/>
            <circle cx="600" cy="120" r="60" fill="#ffecb3" opacity="0.2"/>
            <!-- city wall body -->
            <rect x="0" y="280" width="800" height="160" fill="#a1887f" stroke="#5d4037" stroke-width="3"/>
            <!-- brick texture -->
            <g stroke="#6d4c41" stroke-width="1" opacity="0.5">
                <line x1="0" y1="310" x2="800" y2="310"/><line x1="0" y1="340" x2="800" y2="340"/><line x1="0" y1="370" x2="800" y2="370"/><line x1="0" y1="400" x2="800" y2="400"/>
                <g><line x1="80" y1="280" x2="80" y2="310"/><line x1="160" y1="280" x2="160" y2="310"/><line x1="240" y1="280" x2="240" y2="310"/><line x1="320" y1="280" x2="320" y2="310"/><line x1="400" y1="280" x2="400" y2="310"/><line x1="480" y1="280" x2="480" y2="310"/><line x1="560" y1="280" x2="560" y2="310"/><line x1="640" y1="280" x2="640" y2="310"/><line x1="720" y1="280" x2="720" y2="310"/></g>
                <g><line x1="40" y1="310" x2="40" y2="340"/><line x1="120" y1="310" x2="120" y2="340"/><line x1="200" y1="310" x2="200" y2="340"/><line x1="280" y1="310" x2="280" y2="340"/><line x1="360" y1="310" x2="360" y2="340"/><line x1="440" y1="310" x2="440" y2="340"/><line x1="520" y1="310" x2="520" y2="340"/><line x1="600" y1="310" x2="600" y2="340"/><line x1="680" y1="310" x2="680" y2="340"/><line x1="760" y1="310" x2="760" y2="340"/></g>
            </g>
            <!-- wall top crenellations -->
            <g fill="#8d6e63" stroke="#5d4037" stroke-width="2"><rect x="40" y="265" width="30" height="20"/><rect x="100" y="265" width="30" height="20"/><rect x="160" y="265" width="30" height="20"/><rect x="220" y="265" width="30" height="20"/><rect x="280" y="265" width="30" height="20"/><rect x="340" y="265" width="30" height="20"/><rect x="400" y="265" width="30" height="20"/><rect x="460" y="265" width="30" height="20"/><rect x="520" y="265" width="30" height="20"/><rect x="580" y="265" width="30" height="20"/><rect x="640" y="265" width="30" height="20"/><rect x="700" y="265" width="30" height="20"/><rect x="760" y="265" width="30" height="20"/></g>
            <!-- main gate tower -->
            <rect x="320" y="160" width="160" height="120" fill="#8d6e63" stroke="#5d4037" stroke-width="2"/>
            <!-- curved roof tower -->
            <path d="M300 160 Q400 100 500 160 Z" fill="#c1121f" stroke="#3e2723" stroke-width="2"/>
            <path d="M310 160 L490 160 L485 150 L315 150 Z" fill="#a02020"/>
            <!-- gate tower upper level -->
            <rect x="340" y="140" width="120" height="20" fill="#8d6e63"/>
            <rect x="350" y="125" width="100" height="15" fill="#a1887f"/>
            <g fill="#3e2723"><rect x="360" y="170" width="10" height="20"/><rect x="380" y="170" width="10" height="20"/><rect x="410" y="170" width="10" height="20"/><rect x="430" y="170" width="10" height="20"/></g>
            <!-- main gate arch -->
            <path d="M360 280 L360 240 Q400 220 440 240 L440 280 Z" fill="#1a0e0a"/>
            <rect x="360" y="280" width="80" height="40" fill="#3e2723"/>
            <!-- red lanterns on tower -->
            <circle cx="370" cy="200" r="5" fill="#ff5252"/>
            <circle cx="430" cy="200" r="5" fill="#ff5252"/>
            <!-- moat -->
            <rect x="0" y="440" width="800" height="60" fill="#0277bd" opacity="0.7"/>
            <g fill="#fff" opacity="0.3"><ellipse cx="100" cy="460" rx="40" ry="2"/><ellipse cx="300" cy="465" rx="50" ry="2"/><ellipse cx="500" cy="460" rx="40" ry="2"/><ellipse cx="700" cy="465" rx="50" ry="2"/></g>
            <!-- calligraphy -->
            <text x="40" y="425" font-family="serif" font-size="22" fill="#fff" font-weight="700">西安城墙</text>
            <text x="40" y="395" font-family="sans-serif" font-size="11" fill="#ffe0b2">Xi'an City Wall · 600 years old</text>
        </svg>`
    },
    // 3. 大雁塔 Big Wild Goose Pagoda Night
    {
        label: 'Big Wild Goose Pagoda · 大雁塔',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="xa3-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1a237e"/><stop offset="100%" stop-color="#311b92"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#xa3-sky)"/>
            <!-- stars -->
            <g fill="#fff"><circle cx="100" cy="60" r="1.5"/><circle cx="220" cy="40" r="1"/><circle cx="340" cy="80" r="1.2"/><circle cx="500" cy="50" r="1.5"/><circle cx="620" cy="90" r="1"/><circle cx="720" cy="60" r="1.2"/></g>
            <!-- moon -->
            <circle cx="700" cy="120" r="30" fill="#fff9c4"/>
            <circle cx="694" cy="115" r="20" fill="#311b92" opacity="0.4"/>
            <!-- ground -->
            <rect x="0" y="430" width="800" height="70" fill="#1a0e3a"/>
            <!-- pagoda base -->
            <rect x="280" y="380" width="240" height="50" fill="#8d6e63"/>
            <rect x="290" y="370" width="220" height="10" fill="#a1887f"/>
            <!-- pagoda body (7 tiers, narrowing) -->
            <g fill="#a1887f" stroke="#5d4037" stroke-width="1.5">
                <rect x="320" y="340" width="160" height="30"/>
                <polygon points="320,340 480,340 470,310 330,310"/>
                <rect x="330" y="280" width="140" height="30"/>
                <polygon points="330,280 470,280 460,250 340,250"/>
                <rect x="340" y="220" width="120" height="30"/>
                <polygon points="340,220 460,220 450,190 350,190"/>
                <rect x="350" y="160" width="100" height="30"/>
                <polygon points="350,160 450,160 445,130 355,130"/>
                <rect x="360" y="100" width="80" height="30"/>
                <polygon points="360,100 440,100 435,75 365,75"/>
                <rect x="370" y="50" width="60" height="25"/>
                <polygon points="370,50 430,50 425,30 375,30"/>
                <rect x="385" y="0" width="30" height="30"/>
            </g>
            <!-- door arches on each level -->
            <g fill="#3e2723"><rect x="390" y="350" width="20" height="20"/><rect x="390" y="290" width="20" height="20"/><rect x="390" y="230" width="20" height="20"/><rect x="390" y="170" width="20" height="20"/><rect x="390" y="110" width="20" height="20"/><rect x="395" y="55" width="14" height="20"/></g>
            <!-- roof finial -->
            <circle cx="400" cy="5" r="5" fill="#fdd835"/>
            <line x1="400" y1="-5" x2="400" y2="-15" stroke="#fdd835" stroke-width="2"/>
            <!-- glow lighting on pagoda -->
            <g fill="#fdd835" opacity="0.6"><circle cx="200" cy="350" r="4"/><circle cx="600" cy="350" r="4"/><circle cx="200" cy="200" r="4"/><circle cx="600" cy="200" r="4"/></g>
            <text x="40" y="465" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">大雁塔·玄奘</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#b39ddb">Big Wild Goose Pagoda · Tang Dynasty</text>
        </svg>`
    }
],

/* ============ 成都 Chengdu ============ */
chengdu: [
    // 1. 熊猫 Panda
    {
        label: 'Giant Panda · 大熊猫',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cd1-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#388e3c"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#cd1-bg)"/>
            <!-- bamboo forest -->
            <g stroke="#2e7d32" stroke-width="4" opacity="0.7">
                <line x1="50" y1="500" x2="50" y2="200"/><line x1="100" y1="500" x2="100" y2="180"/><line x1="150" y1="500" x2="150" y2="220"/><line x1="700" y1="500" x2="700" y2="200"/><line x1="750" y1="500" x2="750" y2="220"/><line x1="650" y1="500" x2="650" y2="180"/>
            </g>
            <g fill="#2e7d32" opacity="0.8">
                <ellipse cx="50" cy="220" rx="30" ry="6" transform="rotate(-30 50 220)"/>
                <ellipse cx="100" cy="200" rx="30" ry="6" transform="rotate(30 100 200)"/>
                <ellipse cx="150" cy="240" rx="30" ry="6" transform="rotate(-30 150 240)"/>
                <ellipse cx="700" cy="220" rx="30" ry="6" transform="rotate(30 700 220)"/>
                <ellipse cx="750" cy="240" rx="30" ry="6" transform="rotate(-30 750 240)"/>
                <ellipse cx="650" cy="200" rx="30" ry="6" transform="rotate(30 650 200)"/>
            </g>
            <!-- ground -->
            <ellipse cx="400" cy="450" rx="600" ry="80" fill="#5d4037" opacity="0.7"/>
            <!-- panda - eating bamboo -->
            <g transform="translate(400,300)">
                <!-- body -->
                <ellipse cx="0" cy="40" rx="80" ry="60" fill="#fff"/>
                <!-- legs -->
                <ellipse cx="-50" cy="90" rx="25" ry="20" fill="#000"/>
                <ellipse cx="50" cy="90" rx="25" ry="20" fill="#000"/>
                <!-- head -->
                <circle cx="0" cy="-30" r="55" fill="#fff"/>
                <!-- ears -->
                <circle cx="-40" cy="-65" r="18" fill="#000"/>
                <circle cx="40" cy="-65" r="18" fill="#000"/>
                <circle cx="-40" cy="-65" r="8" fill="#5d4037"/>
                <circle cx="40" cy="-65" r="8" fill="#5d4037"/>
                <!-- eye patches -->
                <ellipse cx="-22" cy="-30" rx="14" ry="18" fill="#000" transform="rotate(-15 -22 -30)"/>
                <ellipse cx="22" cy="-30" rx="14" ry="18" fill="#000" transform="rotate(15 22 -30)"/>
                <!-- eyes -->
                <circle cx="-22" cy="-28" r="5" fill="#fff"/>
                <circle cx="22" cy="-28" r="5" fill="#fff"/>
                <circle cx="-22" cy="-28" r="2.5" fill="#000"/>
                <circle cx="22" cy="-28" r="2.5" fill="#000"/>
                <!-- nose -->
                <ellipse cx="0" cy="-12" rx="6" ry="4" fill="#000"/>
                <!-- mouth -->
                <path d="M-6 -8 Q0 -2 6 -8" fill="none" stroke="#000" stroke-width="1.5"/>
                <!-- arms holding bamboo -->
                <ellipse cx="-40" cy="20" rx="20" ry="30" fill="#000" transform="rotate(20 -40 20)"/>
                <ellipse cx="40" cy="20" rx="20" ry="30" fill="#000" transform="rotate(-20 40 20)"/>
                <!-- bamboo leaf -->
                <line x1="-20" y1="20" x2="60" y2="-20" stroke="#558b2f" stroke-width="6" stroke-linecap="round"/>
                <ellipse cx="60" cy="-20" rx="20" ry="6" fill="#7cb342" transform="rotate(-30 60 -20)"/>
                <ellipse cx="20" cy="0" rx="15" ry="5" fill="#7cb342" transform="rotate(-30 20 0)"/>
            </g>
            <!-- small panda cub on side -->
            <g transform="translate(180,400) scale(0.5)">
                <ellipse cx="0" cy="20" rx="40" ry="30" fill="#fff"/>
                <circle cx="0" cy="-20" r="25" fill="#fff"/>
                <circle cx="-18" cy="-30" r="10" fill="#000"/>
                <circle cx="18" cy="-30" r="10" fill="#000"/>
                <ellipse cx="-10" cy="-18" rx="6" ry="8" fill="#000"/>
                <ellipse cx="10" cy="-18" rx="6" ry="8" fill="#000"/>
            </g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fff" font-weight="700">国宝·大熊猫</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#c8e6c9">Giant Panda · 成都熊猫基地</text>
        </svg>`
    },
    // 2. 宽窄巷子 Kuanzhai Alley
    {
        label: 'Kuanzhai Alley · 宽窄巷子',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cd2-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ffcc80"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#cd2-sky)"/>
            <!-- alley walls - left row -->
            <g>
                <rect x="0" y="100" width="380" height="350" fill="#a1887f"/>
                <rect x="0" y="100" width="380" height="350" fill="url(#brick)" opacity="0.3"/>
            </g>
            <!-- right row -->
            <rect x="420" y="100" width="380" height="350" fill="#8d6e63"/>
            <!-- gray brick tile roofs - left -->
            <g fill="#3e2723">
                <rect x="0" y="80" width="380" height="30"/>
                <rect x="0" y="60" width="380" height="20"/>
            </g>
            <!-- right roof -->
            <rect x="420" y="80" width="380" height="30" fill="#3e2723"/>
            <rect x="420" y="60" width="380" height="20" fill="#3e2723"/>
            <!-- tile ridges -->
            <g stroke="#5d4037" stroke-width="1.5">
                <line x1="0" y1="90" x2="380" y2="90"/><line x1="0" y1="100" x2="380" y2="100"/>
                <line x1="420" y1="90" x2="800" y2="90"/><line x1="420" y1="100" x2="800" y2="100"/>
            </g>
            <!-- doors and windows on left -->
            <g fill="#3e2723">
                <rect x="40" y="180" width="60" height="100"/>
                <rect x="40" y="200" width="60" height="3" fill="#1a0e0a"/>
                <rect x="50" y="180" width="20" height="100" fill="#5d4037"/>
                <rect x="130" y="180" width="60" height="100"/>
                <rect x="220" y="180" width="80" height="100"/>
                <rect x="40" y="320" width="60" height="100"/>
                <rect x="130" y="320" width="80" height="100"/>
                <rect x="230" y="320" width="80" height="100"/>
            </g>
            <!-- right side -->
            <g fill="#3e2723">
                <rect x="460" y="180" width="60" height="100"/>
                <rect x="540" y="180" width="60" height="100"/>
                <rect x="620" y="180" width="80" height="100"/>
                <rect x="460" y="320" width="60" height="100"/>
                <rect x="540" y="320" width="80" height="100"/>
                <rect x="640" y="320" width="80" height="100"/>
            </g>
            <!-- paper lanterns hanging -->
            <line x1="100" y1="150" x2="100" y2="170" stroke="#5d4037" stroke-width="1"/>
            <ellipse cx="100" cy="180" rx="10" ry="14" fill="#ff5252"/>
            <line x1="200" y1="150" x2="200" y2="170" stroke="#5d4037" stroke-width="1"/>
            <ellipse cx="200" cy="180" rx="10" ry="14" fill="#ff5252"/>
            <line x1="600" y1="150" x2="600" y2="170" stroke="#5d4037" stroke-width="1"/>
            <ellipse cx="600" cy="180" rx="10" ry="14" fill="#ff5252"/>
            <!-- ground - stone pavement -->
            <rect x="0" y="450" width="800" height="50" fill="#3e2723"/>
            <g fill="#5d4037"><rect x="50" y="450" width="60" height="3"/><rect x="180" y="450" width="60" height="3"/><rect x="320" y="450" width="60" height="3"/><rect x="450" y="450" width="60" height="3"/><rect x="580" y="450" width="60" height="3"/><rect x="700" y="450" width="60" height="3"/></g>
            <!-- teahouse sign -->
            <rect x="270" y="120" width="260" height="40" fill="#5d4037" stroke="#3e2723" stroke-width="2"/>
            <text x="290" y="148" font-family="serif" font-size="20" fill="#fdd835" font-weight="700">宽 窄 巷 子</text>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#5d4037" font-weight="700">宽窄巷子</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#8d6e63">Kuanzhai Alley · Qing Dynasty Streets</text>
        </svg>`
    },
    // 3. 火锅 Hot Pot
    {
        label: 'Sichuan Hotpot · 火锅',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="cd3-bg" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stop-color="#d32f2f"/><stop offset="100%" stop-color="#1a0e0a"/>
                </radialGradient>
                <radialGradient id="cd3-broth" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stop-color="#ff6b35"/><stop offset="100%" stop-color="#b71c1c"/>
                </radialGradient>
            </defs>
            <rect width="800" height="500" fill="url(#cd3-bg)"/>
            <!-- steam -->
            <g fill="#fff" opacity="0.15">
                <ellipse cx="300" cy="200" rx="40" ry="60"/>
                <ellipse cx="400" cy="180" rx="50" ry="70"/>
                <ellipse cx="500" cy="200" rx="40" ry="60"/>
                <ellipse cx="350" cy="160" rx="30" ry="50"/>
                <ellipse cx="450" cy="160" rx="35" ry="55"/>
            </g>
            <!-- hot pot vessel -->
            <ellipse cx="400" cy="380" rx="220" ry="50" fill="#3e2723"/>
            <ellipse cx="400" cy="370" rx="200" ry="45" fill="#5d4037"/>
            <ellipse cx="400" cy="365" rx="180" ry="40" fill="url(#cd3-broth)"/>
            <!-- yin-yang divider -->
            <path d="M400 325 A90 40 0 0 1 400 365 A90 40 0 0 0 400 325" fill="#fff" opacity="0.9"/>
            <circle cx="400" cy="345" r="6" fill="#d32f2f"/>
            <circle cx="400" cy="345" r="3" fill="#fff"/>
            <!-- chili peppers -->
            <g fill="#d32f2f">
                <ellipse cx="320" cy="355" rx="6" ry="3" transform="rotate(30 320 355)"/>
                <ellipse cx="340" cy="370" rx="6" ry="3" transform="rotate(-20 340 370)"/>
                <ellipse cx="450" cy="375" rx="6" ry="3" transform="rotate(45 450 375)"/>
                <ellipse cx="480" cy="350" rx="6" ry="3" transform="rotate(15 480 350)"/>
            </g>
            <!-- ingredients floating -->
            <g>
                <!-- meat slice -->
                <ellipse cx="350" cy="360" rx="14" ry="6" fill="#a1887f" opacity="0.7"/>
                <!-- tofu -->
                <rect x="430" y="350" width="14" height="14" fill="#fff8e1" opacity="0.8"/>
                <!-- mushroom -->
                <ellipse cx="380" cy="380" rx="8" ry="4" fill="#8d6e63"/>
                <!-- greens -->
                <ellipse cx="450" cy="380" rx="10" ry="4" fill="#7cb342"/>
            </g>
            <!-- chopsticks -->
            <line x1="240" y1="420" x2="320" y2="380" stroke="#5d4037" stroke-width="3"/>
            <line x1="240" y1="430" x2="320" y2="390" stroke="#5d4037" stroke-width="3"/>
            <!-- bowls -->
            <ellipse cx="160" cy="430" rx="40" ry="10" fill="#1a0e0a"/>
            <ellipse cx="160" cy="425" rx="35" ry="8" fill="#3e2723"/>
            <ellipse cx="640" cy="430" rx="40" ry="10" fill="#1a0e0a"/>
            <ellipse cx="640" cy="425" rx="35" ry="8" fill="#3e2723"/>
            <!-- bowl pattern -->
            <g fill="#fff" opacity="0.5"><circle cx="155" cy="423" r="1.5"/><circle cx="160" cy="425" r="1.5"/><circle cx="165" cy="423" r="1.5"/></g>
            <!-- chopstick holders -->
            <rect x="200" y="455" width="40" height="20" fill="#3e2723"/>
            <rect x="580" y="455" width="40" height="20" fill="#3e2723"/>
            <!-- title -->
            <text x="40" y="465" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">四川火锅</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#ffab91">Sichuan Hotpot · Spicy Night</text>
        </svg>`
    }
],

/* ============ 重庆 Chongqing ============ */
chongqing: [
    // 1. 洪崖洞 Hongya Cave Night
    {
        label: 'Hongya Cave · 洪崖洞',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cq1-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1a237e"/><stop offset="100%" stop-color="#0d47a1"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#cq1-sky)"/>
            <!-- distant city silhouette -->
            <g fill="#000" opacity="0.6">
                <rect x="0" y="280" width="50" height="120"/><rect x="60" y="260" width="40" height="140"/>
                <rect x="700" y="280" width="50" height="120"/><rect x="640" y="260" width="50" height="140"/>
            </g>
            <!-- cliff face -->
            <path d="M0 450 L0 380 Q200 350 400 380 Q600 350 800 380 L800 500 L0 500 Z" fill="#3e2723"/>
            <!-- Hongya Cave stacked wooden buildings -->
            <!-- bottom tier on water -->
            <rect x="100" y="380" width="600" height="40" fill="#5d4037"/>
            <!-- 2nd tier -->
            <rect x="120" y="340" width="560" height="40" fill="#6d4c41"/>
            <!-- 3rd tier -->
            <rect x="100" y="300" width="600" height="40" fill="#5d4037"/>
            <!-- 4th tier -->
            <rect x="120" y="260" width="560" height="40" fill="#6d4c41"/>
            <!-- 5th tier -->
            <rect x="100" y="220" width="600" height="40" fill="#5d4037"/>
            <!-- 6th tier -->
            <rect x="140" y="180" width="520" height="40" fill="#6d4c41"/>
            <!-- top roof peaks -->
            <g fill="#a02020" stroke="#3e2723" stroke-width="1.5">
                <polygon points="120,180 240,180 230,150 130,150"/>
                <polygon points="260,180 380,180 370,150 270,150"/>
                <polygon points="400,180 520,180 510,150 410,150"/>
                <polygon points="540,180 680,180 670,150 550,150"/>
            </g>
            <!-- glowing windows (warm lights) -->
            <g fill="#fdd835">
                <rect x="140" y="370" width="6" height="6"/><rect x="160" y="370" width="6" height="6"/><rect x="180" y="370" width="6" height="6"/><rect x="200" y="370" width="6" height="6"/><rect x="220" y="370" width="6" height="6"/><rect x="240" y="370" width="6" height="6"/><rect x="260" y="370" width="6" height="6"/><rect x="280" y="370" width="6" height="6"/><rect x="300" y="370" width="6" height="6"/><rect x="320" y="370" width="6" height="6"/><rect x="340" y="370" width="6" height="6"/><rect x="360" y="370" width="6" height="6"/><rect x="380" y="370" width="6" height="6"/><rect x="400" y="370" width="6" height="6"/><rect x="420" y="370" width="6" height="6"/><rect x="440" y="370" width="6" height="6"/><rect x="460" y="370" width="6" height="6"/><rect x="480" y="370" width="6" height="6"/><rect x="500" y="370" width="6" height="6"/><rect x="520" y="370" width="6" height="6"/><rect x="540" y="370" width="6" height="6"/><rect x="560" y="370" width="6" height="6"/><rect x="580" y="370" width="6" height="6"/><rect x="600" y="370" width="6" height="6"/><rect x="620" y="370" width="6" height="6"/><rect x="640" y="370" width="6" height="6"/><rect x="660" y="370" width="6" height="6"/>
                <rect x="150" y="330" width="6" height="6"/><rect x="170" y="330" width="6" height="6"/><rect x="190" y="330" width="6" height="6"/><rect x="210" y="330" width="6" height="6"/><rect x="230" y="330" width="6" height="6"/><rect x="250" y="330" width="6" height="6"/><rect x="270" y="330" width="6" height="6"/><rect x="290" y="330" width="6" height="6"/><rect x="310" y="330" width="6" height="6"/><rect x="330" y="330" width="6" height="6"/><rect x="350" y="330" width="6" height="6"/><rect x="370" y="330" width="6" height="6"/><rect x="390" y="330" width="6" height="6"/><rect x="410" y="330" width="6" height="6"/><rect x="430" y="330" width="6" height="6"/><rect x="450" y="330" width="6" height="6"/><rect x="470" y="330" width="6" height="6"/><rect x="490" y="330" width="6" height="6"/><rect x="510" y="330" width="6" height="6"/><rect x="530" y="330" width="6" height="6"/><rect x="550" y="330" width="6" height="6"/><rect x="570" y="330" width="6" height="6"/><rect x="590" y="330" width="6" height="6"/><rect x="610" y="330" width="6" height="6"/><rect x="630" y="330" width="6" height="6"/>
                <rect x="140" y="290" width="6" height="6"/><rect x="160" y="290" width="6" height="6"/><rect x="180" y="290" width="6" height="6"/><rect x="200" y="290" width="6" height="6"/><rect x="220" y="290" width="6" height="6"/><rect x="240" y="290" width="6" height="6"/><rect x="260" y="290" width="6" height="6"/><rect x="280" y="290" width="6" height="6"/><rect x="300" y="290" width="6" height="6"/><rect x="320" y="290" width="6" height="6"/><rect x="340" y="290" width="6" height="6"/><rect x="360" y="290" width="6" height="6"/><rect x="380" y="290" width="6" height="6"/><rect x="400" y="290" width="6" height="6"/><rect x="420" y="290" width="6" height="6"/><rect x="440" y="290" width="6" height="6"/><rect x="460" y="290" width="6" height="6"/><rect x="480" y="290" width="6" height="6"/><rect x="500" y="290" width="6" height="6"/><rect x="520" y="290" width="6" height="6"/><rect x="540" y="290" width="6" height="6"/><rect x="560" y="290" width="6" height="6"/><rect x="580" y="290" width="6" height="6"/><rect x="600" y="290" width="6" height="6"/><rect x="620" y="290" width="6" height="6"/><rect x="640" y="290" width="6" height="6"/><rect x="660" y="290" width="6" height="6"/>
            </g>
            <!-- water -->
            <rect x="0" y="420" width="800" height="80" fill="#1a237e"/>
            <g fill="#fdd835" opacity="0.4"><rect x="100" y="430" width="40" height="2"/><rect x="200" y="440" width="60" height="2"/><rect x="320" y="450" width="50" height="2"/><rect x="450" y="435" width="70" height="2"/><rect x="580" y="445" width="80" height="2"/><rect x="700" y="460" width="60" height="2"/></g>
            <text x="40" y="465" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">洪崖洞</text>
            <text x="40" y="485" font-family="sans-serif" font-size="11" fill="#90caf9">Hongya Cave · 千与千寻世界</text>
        </svg>`
    },
    // 2. 重庆轻轨穿楼 Monorail Through Building
    {
        label: 'Liziba Monorail · 李子坝',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cq2-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#80cbc4"/><stop offset="100%" stop-color="#4db6ac"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#cq2-sky)"/>
            <!-- distant mountains -->
            <path d="M0 280 Q150 220 300 270 T600 250 T800 270 L800 320 L0 320 Z" fill="#388e3c" opacity="0.7"/>
            <!-- residential building - tall -->
            <rect x="200" y="100" width="180" height="380" fill="#90a4ae"/>
            <!-- building windows grid -->
            <g fill="#b0bec5">
                <g><rect x="210" y="120" width="15" height="15"/><rect x="230" y="120" width="15" height="15"/><rect x="250" y="120" width="15" height="15"/><rect x="270" y="120" width="15" height="15"/><rect x="290" y="120" width="15" height="15"/><rect x="310" y="120" width="15" height="15"/><rect x="330" y="120" width="15" height="15"/><rect x="350" y="120" width="15" height="15"/></g>
                <g><rect x="210" y="150" width="15" height="15"/><rect x="230" y="150" width="15" height="15"/><rect x="250" y="150" width="15" height="15"/><rect x="270" y="150" width="15" height="15"/><rect x="290" y="150" width="15" height="15"/><rect x="310" y="15" width="0" height="0"/><rect x="330" y="150" width="15" height="15"/><rect x="350" y="150" width="15" height="15"/></g>
            </g>
            <!-- the famous hole where monorail passes -->
            <rect x="240" y="270" width="100" height="60" fill="#1a0e0a"/>
            <rect x="240" y="270" width="100" height="60" fill="none" stroke="#3e2723" stroke-width="3"/>
            <!-- monorail train passing through -->
            <rect x="100" y="275" width="180" height="40" rx="20" fill="#fff" stroke="#3e2723" stroke-width="2"/>
            <rect x="110" y="282" width="20" height="14" rx="2" fill="#80cbc4"/>
            <rect x="135" y="282" width="20" height="14" rx="2" fill="#80cbc4"/>
            <rect x="160" y="282" width="20" height="14" rx="2" fill="#80cbc4"/>
            <rect x="185" y="282" width="20" height="14" rx="2" fill="#80cbc4"/>
            <rect x="210" y="282" width="20" height="14" rx="2" fill="#80cbc4"/>
            <rect x="235" y="282" width="20" height="14" rx="2" fill="#80cbc4"/>
            <!-- train front -->
            <rect x="280" y="280" width="40" height="30" rx="15" fill="#ff5252"/>
            <!-- windows on building (lower floors) -->
            <g fill="#90caf9" opacity="0.7">
                <rect x="210" y="350" width="15" height="15"/><rect x="230" y="350" width="15" height="15"/><rect x="250" y="350" width="15" height="15"/><rect x="270" y="350" width="15" height="15"/><rect x="290" y="350" width="15" height="15"/><rect x="310" y="350" width="15" height="15"/><rect x="330" y="350" width="15" height="15"/><rect x="350" y="350" width="15" height="15"/>
                <rect x="210" y="380" width="15" height="15"/><rect x="230" y="380" width="15" height="15"/><rect x="250" y="380" width="15" height="15"/><rect x="270" y="380" width="15" height="15"/><rect x="290" y="380" width="15" height="15"/><rect x="310" y="380" width="15" height="15"/><rect x="330" y="380" width="15" height="15"/><rect x="350" y="380" width="15" height="15"/>
                <rect x="210" y="410" width="15" height="15"/><rect x="230" y="410" width="15" height="15"/><rect x="250" y="410" width="15" height="15"/><rect x="270" y="410" width="15" height="15"/><rect x="290" y="410" width="15" height="15"/><rect x="310" y="410" width="15" height="15"/><rect x="330" y="410" width="15" height="15"/><rect x="350" y="410" width="15" height="15"/>
            </g>
            <!-- monorail track beam -->
            <rect x="60" y="325" width="380" height="10" fill="#546e7a"/>
            <rect x="60" y="335" width="380" height="5" fill="#37474f"/>
            <!-- support pillars -->
            <rect x="100" y="335" width="20" height="100" fill="#546e7a"/>
            <rect x="240" y="335" width="20" height="100" fill="#546e7a"/>
            <rect x="380" y="335" width="20" height="100" fill="#546e7a"/>
            <!-- road below -->
            <rect x="0" y="450" width="800" height="50" fill="#3e2723"/>
            <g stroke="#fdd835" stroke-width="3" stroke-dasharray="20,15"><line x1="0" y1="475" x2="800" y2="475"/></g>
            <!-- cars -->
            <rect x="150" y="455" width="50" height="20" rx="4" fill="#ff5252"/>
            <rect x="160" y="460" width="10" height="8" fill="#80cbc4"/>
            <rect x="175" y="460" width="10" height="8" fill="#80cbc4"/>
            <rect x="500" y="455" width="60" height="20" rx="4" fill="#90caf9"/>
            <rect x="510" y="460" width="10" height="8" fill="#b3e5fc"/>
            <rect x="525" y="460" width="10" height="8" fill="#b3e5fc"/>
            <rect x="540" y="460" width="10" height="8" fill="#b3e5fc"/>
            <!-- onlookers -->
            <g fill="#5d4037"><circle cx="660" cy="440" r="6"/><rect x="656" y="446" width="8" height="14"/><circle cx="685" cy="440" r="6"/><rect x="681" y="446" width="8" height="14"/><circle cx="710" cy="440" r="6"/><rect x="706" y="446" width="8" height="14"/></g>
            <text x="40" y="35" font-family="serif" font-size="22" fill="#1a0e0a" font-weight="700">李子坝·轻轨穿楼</text>
            <text x="40" y="55" font-family="sans-serif" font-size="11" fill="#3e2723">Liziba Monorail · 8D Magical City</text>
        </svg>`
    },
    // 3. 重庆夜景 Skyscrapers on River
    {
        label: 'Chongqing Skyline · 山城夜景',
        svg: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cq3-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#311b92"/><stop offset="50%" stop-color="#5e35b1"/><stop offset="100%" stop-color="#ec407a"/>
                </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#cq3-sky)"/>
            <!-- mist -->
            <ellipse cx="400" cy="280" rx="500" ry="40" fill="#fff" opacity="0.2"/>
            <!-- mountain ranges behind -->
            <path d="M0 250 L100 200 L200 240 L320 180 L450 220 L580 190 L720 230 L800 200 L800 280 L0 280 Z" fill="#311b92" opacity="0.7"/>
            <!-- cliffside skyscrapers - dense vertical -->
            <g>
                <rect x="50" y="200" width="50" height="200" fill="#1a237e"/>
                <rect x="110" y="170" width="50" height="230" fill="#283593"/>
                <rect x="170" y="190" width="50" height="210" fill="#1a237e"/>
                <rect x="230" y="150" width="60" height="250" fill="#303f9f"/>
                <rect x="300" y="180" width="50" height="220" fill="#1a237e"/>
                <rect x="360" y="160" width="60" height="240" fill="#283593"/>
                <rect x="430" y="190" width="50" height="210" fill="#1a237e"/>
                <rect x="490" y="170" width="50" height="230" fill="#303f9f"/>
                <rect x="550" y="200" width="50" height="200" fill="#1a237e"/>
                <rect x="610" y="170" width="50" height="230" fill="#283593"/>
                <rect x="670" y="190" width="50" height="210" fill="#1a237e"/>
                <rect x="730" y="200" width="50" height="200" fill="#283593"/>
            </g>
            <!-- window lights -->
            <g fill="#fdd835">
                <rect x="55" y="210" width="3" height="3"/><rect x="65" y="210" width="3" height="3"/><rect x="75" y="210" width="3" height="3"/><rect x="85" y="210" width="3" height="3"/>
                <rect x="55" y="230" width="3" height="3"/><rect x="75" y="230" width="3" height="3"/>
                <rect x="115" y="180" width="3" height="3"/><rect x="125" y="180" width="3" height="3"/><rect x="135" y="180" width="3" height="3"/><rect x="145" y="180" width="3" height="3"/>
                <rect x="115" y="200" width="3" height="3"/><rect x="135" y="200" width="3" height="3"/>
                <rect x="175" y="200" width="3" height="3"/><rect x="195" y="200" width="3" height="3"/><rect x="205" y="200" width="3" height="3"/>
                <rect x="175" y="220" width="3" height="3"/><rect x="195" y="220" width="3" height="3"/>
                <rect x="240" y="160" width="3" height="3"/><rect x="250" y="160" width="3" height="3"/><rect x="270" y="160" width="3" height="3"/><rect x="280" y="160" width="3" height="3"/>
                <rect x="240" y="180" width="3" height="3"/><rect x="260" y="180" width="3" height="3"/><rect x="280" y="180" width="3" height="3"/>
                <rect x="240" y="200" width="3" height="3"/><rect x="260" y="200" width="3" height="3"/>
                <rect x="310" y="190" width="3" height="3"/><rect x="320" y="190" width="3" height="3"/><rect x="340" y="190" width="3" height="3"/>
                <rect x="370" y="170" width="3" height="3"/><rect x="380" y="170" width="3" height="3"/><rect x="400" y="170" width="3" height="3"/><rect x="410" y="170" width="3" height="3"/>
                <rect x="370" y="190" width="3" height="3"/><rect x="400" y="190" width="3" height="3"/>
                <rect x="440" y="200" width="3" height="3"/><rect x="460" y="200" width="3" height="3"/><rect x="475" y="200" width="3" height="3"/>
                <rect x="500" y="180" width="3" height="3"/><rect x="510" y="180" width="3" height="3"/><rect x="525" y="180" width="3" height="3"/><rect x="535" y="180" width="3" height="3"/>
                <rect x="560" y="210" width="3" height="3"/><rect x="580" y="210" width="3" height="3"/><rect x="590" y="210" width="3" height="3"/>
                <rect x="620" y="180" width="3" height="3"/><rect x="630" y="180" width="3" height="3"/><rect x="645" y="180" width="3" height="3"/><rect x="655" y="180" width="3" height="3"/>
                <rect x="680" y="200" width="3" height="3"/><rect x="700" y="200" width="3" height="3"/><rect x="710" y="200" width="3" height="3"/>
                <rect x="740" y="210" width="3" height="3"/><rect x="760" y="210" width="3" height="3"/><rect x="775" y="210" width="3" height="3"/>
            </g>
            <!-- Yangtze river -->
            <rect x="0" y="400" width="800" height="100" fill="#1a237e"/>
            <g fill="#fdd835" opacity="0.5"><rect x="80" y="420" width="40" height="2"/><rect x="180" y="430" width="60" height="2"/><rect x="300" y="425" width="50" height="2"/><rect x="420" y="440" width="70" height="2"/><rect x="540" y="430" width="80" height="2"/><rect x="660" y="445" width="60" height="2"/><rect x="120" y="460" width="80" height="2"/><rect x="280" y="475" width="60" height="2"/><rect x="450" y="470" width="80" height="2"/><rect x="600" y="480" width="70" height="2"/></g>
            <!-- ferry boat -->
            <ellipse cx="600" cy="450" rx="40" ry="6" fill="#fff"/>
            <rect x="580" y="435" width="40" height="15" fill="#fff"/>
            <g fill="#fdd835"><circle cx="585" cy="442" r="1.5"/><circle cx="595" cy="442" r="1.5"/><circle cx="605" cy="442" r="1.5"/><circle cx="615" cy="442" r="1.5"/></g>
            <text x="40" y="475" font-family="serif" font-size="22" fill="#fdd835" font-weight="700">山城·重庆</text>
            <text x="40" y="492" font-family="sans-serif" font-size="11" fill="#90caf9">Magical Mountain City · 8D立体都市</text>
        </svg>`
    }
]

};

/**
 * Get art for a city.
 * @param {string} cityId
 * @param {number} index - 0|1|2 for dawn/noon/night
 * @returns {string} SVG string or empty
 */
function getCityArt(cityId, index = 0) {
    const scenes = CITY_ART[cityId];
    if (!scenes || !scenes[index]) return '';
    return scenes[index].svg;
}

/**
 * Get caption for a city art scene.
 */
function getCityArtCaption(cityId, index = 0) {
    const scenes = CITY_ART[cityId];
    if (!scenes || !scenes[index]) return '';
    return scenes[index].label;
}