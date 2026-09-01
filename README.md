# 易通中国 · EasyToChina (ETC)

> **Learn practical spoken Chinese for travel and business — completely different from HSK and Confucius Institute.**
> 面向外国人的实用汉语学习 + 真实中国社区应用（纯前端 PWA，零依赖）。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA](https://img.shields.io/badge/PWA-Installable-blue.svg)](https://developer.mozilla.org/docs/Web/Progressive_web_apps)
[![Version](https://img.shields.io/badge/Version-1.3.2-green.svg)](https://github.com/yourusername/easytochina/releases)
[![Zero Dependency](https://img.shields.io/badge/Dependencies-0-orange.svg)]()

---

## 🎯 What Makes ETC Different | 定位差异

| HSK / Confucius Institute | EasyToChina (ETC) |
|---|---|
| Grammar rules first | **Sentences first** — hear it, say it, use it |
| Practice character writing | Practice **speaking & pronunciation** (AI-powered) |
| Reading and exams | **Listening and speaking**, practical only |
| Academic vocabulary | **Survival + Business** vocabulary |
| Years before you can use it | **Day one usability** |
| Textbook China | **Real China Today** — live community photos |

---

## ✨ Features | 功能特性 (v1.3.2)

### 📚 Learn — 12 场景 · 120+ 实用句
- **🆘 Survival 生存**: Airport arrival, Hotel check-in, Transportation, Mobile payment, Asking directions
- **🍜 Daily Life 日常**: Restaurant ordering (with allergy expressions), Shopping & bargaining, Social chatting
- **💼 Business 商务**: Business introductions (card etiquette), Business meetings (negotiation), Business banquets (toasting culture)
- **🚨 Emergency 应急**: Medical emergencies, Lost items, Seeking help

### 🏙️ City Explorer — 24 座城市双语探索
- **23 座中国城市 + 伦敦 London**（海外学员"起点城市"，含 `country` 标识）
- 每城 **3–4 类城市特色实景照片**（上海：外滩/豫园城隍庙/南京路；西安：城墙/大雁塔/钟楼……共 71 张真实照片）
- **24 位 Pixar 风格 3D 城市代言人**（上海旗袍时尚女、北京端庄红旗袍、西安盛唐公主、伦敦英伦绅士 Leo…），加载失败自动回退 SVG
- 每城 The Story / Industry / Highlights / 方言俚语 / 实用中文短语（含拼音与英文）
- 代言人聊天问答 + TTS 朗读

### 🌐 China Today — 真实中国社区（双重审核）
- 国内用户上传家乡照片/视频；海外用户发布旅行/商务求助，获得中方帮助
- **双重内容审核**：AI 初审（涉黄/涉毒/涉赌/涉政关键词命中直接拦截）→ 人工复审 → 发布
- 中文帖配英文字幕、英文帖配中文字幕（AI 双语配文）
- Categories: City / Food / Culture / Travel / Tech
- 点赞、收藏、朗读字幕
- **Review 审核后台仅管理员可见**（普通用户端完全隐藏）

### 🔊 Speech 语音
- **TTS 朗读** — 标准普通话发音，每句可听
- **语音识别练习** — 麦克风跟读，AI 评分（70%+ 及格）
- **慢速朗读** — 难句放慢

### 👤 我的页面（Me）
- 我的内容四状态：**已发布 / 审核中 / 已拒绝 / 本地草稿**
- 语言设置、学习进度（连续打卡/场景完成度）、使用权益与免责条款、关于

### 🌍 多语言界面（i18n）
- **5 种语言**：中文(zh) / English(en) / Русский(ru) / العربية(ar) / 한국어(ko)
- 阿拉伯语自动启用 RTL 布局；语言偏好本地记忆
- 顶栏全局语言切换 + 「我的」页语言设置入口

### 📊 Progress 学习进度
- Daily streak 连续打卡、Per-scenario 完成度、书签复习、随机练习模式、四声调训练

---

## 🚀 Quick Start | 快速开始

### ▶️ 在线体验 (Live Demo)
访问已部署的演示站：**https://8676389f7b3b4ec09b6b55a8403f6932.app.workbuddy.link** （部署到 GitHub Pages 后可在此替换为正式链接）

### 💻 本地运行 (Run Locally)
```bash
git clone https://github.com/yourusername/easytochina.git
cd easytochina
python -m http.server 8080
# 打开 http://localhost:8080
```

> 提示：直接双击 index.html 也可运行，但 PWA 离线缓存与部分功能建议通过本地服务器体验。

### 🚢 部署到 GitHub Pages（免费公网访问）
1. 在 GitHub 创建仓库并上传本项目（见 `GITHUB_UPLOAD_GUIDE.md` 中文教程）
2. 进入仓库 **Settings → Pages**
3. **Source**: Deploy from a branch → `main` → `/(root)` → **Save**
4. 等待 1–2 分钟，应用上线：
   `https://<你的用户名>.github.io/easytochina/`
5. 手机浏览器打开该链接，即可"添加到主屏幕"安装为 PWA

---

## 🛠️ Tech Stack | 技术栈

- **Zero dependencies** — 纯 HTML/CSS/JS，无框架、无构建步骤
- **PWA** — 可安装、首次加载后可离线使用（network-first 策略）
- **Web Speech API** — 浏览器原生 TTS 与语音识别
- **localStorage** — 进度与数据本地保存
- **Responsive** — 移动优先，手机/平板/桌面自适应

## 📁 Project Structure | 项目结构

```
easytochina/
├── index.html            # 入口页面
├── css/style.css         # 全部样式（浅蓝护眼主题）
├── js/
│   ├── app.js            # 主逻辑（路由/探索/城市/上传/我的）
│   ├── data.js           # 12 场景 120+ 句 + 24 城数据
│   ├── city-mascots.js   # 24 城 3D 代言人数据（含 SVG 回退）
│   ├── city-photos.js    # 24 城 71 张实景照片数据
│   ├── city-art*.js      # 城市抽象插画（回退用）
│   ├── auth.js           # 三角色账号（国内/海外/管理员）
│   ├── community.js      # 双重审核社区逻辑
│   ├── i18n.js           # 5 语国际化 + RTL
│   └── speech.js         # TTS + 语音识别引擎
├── images/
│   ├── cities/           # 71 张城市实景照片
│   └── mascots/          # 24 张 3D 代言人
├── manifest.json         # PWA 配置
├── sw.js                 # Service Worker（离线缓存 v15）
├── icon.svg              # 应用图标
├── README.md
├── LICENSE               # MIT
└── .gitignore
```

## 💡 Design Philosophy | 设计理念

**ETC is built on one principle: learn what you'll actually use.**
大多数汉语学习应用先教语法和用不到的汉字；ETC 反其道而行：

1. **Listen** 听真实场景中的句子
2. **Imitate** 模仿母语发音（AI 反馈）
3. **Practice** 场景化练习
4. **Use** 下飞机就能用

**China Today** 让外国人看到课本外的中国——深圳无人机配送、长沙夜市、哈尔滨冰雪节、西安汉服文化。真实的人、真实的城市、真实的语言。

## 📜 License | 开源许可

**MIT License** — 完全免费，可自由使用、修改、分发、商用。
详见 [LICENSE](LICENSE)。

## 🤝 Contributing | 参与贡献

- **国内用户**：上传你所在城市的照片，帮助世界看见真实的中国
- **开发者**：欢迎 PR 贡献新场景、新语言、新功能
- 详细流程见 [CONTRIBUTING](GITHUB_UPLOAD_GUIDE.md)（含中英文说明）

## 🙏 Credits | 图片来源

- 城市实景照片：[Unsplash](https://unsplash.com)（免费商用授权，各文件 credit 标注于 `js/city-photos.js`）
- 3D 城市代言人：AI 生成（Pixar 风格概念）
- 伦敦地标照片：Unsplash（大本钟/塔桥/伦敦眼）

## 🔮 Future Plans | 未来规划

- [ ] 正式后端（真实上传、账号体系、对象存储、内容安全 API、翻译引擎）
- [ ] 更多场景（租房、签证、网购）
- [ ] 更多语言（日语、韩语、西语、法语）
- [ ] 付费版：与国内用户 1 对 1 语言交换
- [ ] 付费版：中外商务对接
- [ ] 更多城市与 AI 配文模板
