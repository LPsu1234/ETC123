# 易通中国 · GitHub 上传与免费分发指南

> 本指南面向零基础用户：从注册 GitHub 账号 → 上传项目 → 开通免费网站（GitHub Pages）→ 让所有人免费下载使用，全流程图文说明。

---

## 目录

1. [准备工作](#一准备工作)
2. [注册 GitHub 账号](#二注册-github-账号)
3. [创建仓库](#三创建仓库)
4. [上传项目文件（两种方式任选）](#四上传项目文件两种方式任选)
   - [方式 A：网页拖拽上传（最简单，推荐新手）](#方式-a网页拖拽上传最简单推荐新手)
   - [方式 B：git 命令行上传（专业，方便日后更新）](#方式-bgit-命令行上传专业方便日后更新)
5. [开通免费网站 GitHub Pages](#五开通免费网站-github-pages)
6. [让所有人免费下载与使用](#六让所有人免费下载与使用)
7. [常见问题 FAQ](#七常见问题-faq)

---

## 一、准备工作

上传前请先确认拿到本资料包（`easytochina` 文件夹），其中已包含：

| 文件/文件夹 | 作用 |
|---|---|
| `index.html` | 应用入口 |
| `css/` `js/` `images/` | 样式、逻辑、图片资源（71 张城市实景 + 24 张 3D 代言人） |
| `sw.js` `manifest.json` `icon.svg` | PWA 离线缓存与安装配置 |
| `README.md` | 项目介绍（已含中英双语） |
| `LICENSE` | MIT 开源许可证（免费使用/修改/商用） |
| `.gitignore` | 上传时自动排除无关文件 |

> ✅ 本项目为**纯前端、零依赖**，无需安装 Node/npm、无需构建，上传即可运行。

---

## 二、注册 GitHub 账号

1. 打开 **https://github.com**（如无法访问，需科学上网）
2. 点击 **Sign up**，按提示填写邮箱、密码、用户名（建议用拼音/英文，如 `yourname`）
3. 完成邮箱验证
4. 建议在 **Settings → Appearance** 中切换为简体中文界面（可选）

---

## 三、创建仓库

1. 登录后点击右上角 **+ → New repository**（新建仓库）
2. 填写：
   - **Repository name 仓库名**：`easytochina`（小写字母）
   - **Description 描述**：`易通中国 - 面向外国人的实用汉语学习 + 真实中国社区（PWA）`
   - **Public / Private**：选 **Public 公开**（这样别人才能免费下载和使用）
   - 其余选项保持默认（**不要**勾选 Add a README，避免冲突）
3. 点击 **Create repository** 完成创建

---

## 四、上传项目文件（两种方式任选）

### 方式 A：网页拖拽上传（最简单，推荐新手）

1. 进入刚创建的仓库页面，点击 **uploading an existing file**（上传现有文件）链接
2. 在本地打开 `easytochina` 文件夹
3. **将文件夹内所有内容拖入**网页虚线框（注意：是拖"内容"，不要把文件夹本身拖进去）
   - 一次可直接拖入多个文件与文件夹（`css` `js` `images` 整个文件夹都能拖）
   - 如果一次拖不完，可分批：先拖 `index.html` `sw.js` 等散文件，再逐个拖文件夹
4. 拖完后点击 **Commit changes**（提交更改），输入提交说明如 `v1.3.2 initial upload`
5. 等待上传完成即可（71+24 张图片，约几分钟）

> 💡 GitHub 单文件上限 100MB，本项目所有文件均远小于此，可放心上传。
> 若图片较多上传失败，可换**方式 B** 用 git 批量推送（更稳定）。

### 方式 B：git 命令行上传（专业，方便日后更新）

适合电脑上装了 git、以后要频繁更新版本的情况。

**第 1 步：安装 git**
- Windows：下载 https://git-scm.com/download/win 安装，全程默认下一步
- 验证：打开命令提示符，输入 `git --version` 有输出版本号即成功

**第 2 步：配置身份（首次需要）**
```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

**第 3 步：推送项目**
```bash
# 进入项目文件夹
cd C:\Users\win\WorkBuddy\2026-08-15-09-15-15\speak-chinese

# 初始化仓库
git init

# 添加所有文件（.gitignore 会自动排除无关文件）
git add .

# 提交
git commit -m "v1.3.2 易通中国 EasyToChina 首发"

# 关联远程仓库（换成你自己的用户名）
git branch -M main
git remote add origin https://github.com/你的用户名/easytochina.git

# 推送
git push -u origin main
```
> 首次推送会弹出 GitHub 登录窗口（或要求输入用户名 + **Personal Access Token**，在 GitHub **Settings → Developer settings → Personal access tokens** 生成，勾选 `repo` 权限）。

**日后更新版本（只改了几个文件时）**：
```bash
git add .
git commit -m "v1.4.0 更新内容说明"
git push
```

---

## 五、开通免费网站 GitHub Pages

上传完成后，你的应用会自动变成**一个免费的公开网站**，手机/电脑浏览器都能打开：

1. 进入仓库页 → **Settings（设置）**
2. 左侧菜单点击 **Pages（页面）**
3. **Build and deployment → Source** 选择 **Deploy from a branch（从分支部署）**
4. **Branch** 选择 `main` → 目录选 `/(root)` → 点击 **Save（保存）**
5. 等待 1–2 分钟，页面顶部会出现绿色提示条：
   **`Your site is live at https://你的用户名.github.io/easytochina/`**
6. 打开该链接即可访问！

> 💡 以后每次 `git push`，GitHub Pages 都会**自动更新**网站，无需手动重新部署。
> 💡 手机浏览器打开后，可通过菜单"**添加到主屏幕**"把应用安装为桌面 App（PWA）。

---

## 六、让所有人免费下载与使用

### 1. 任何人直接下载源码（免费）
- 打开仓库主页 `https://github.com/你的用户名/easytochina`
- 点绿色 **Code → Download ZIP**，即可下载整个项目
- 无需登录、无需付费、不限次数

### 2. 发布 Releases 正式版本（推荐，供下载"安装包"）
> Releases 是 GitHub 的"发布版本"功能，用户可在 Releases 页面看到版本说明并下载。

1. 仓库主页 → **Releases → Create a new release**
2. **Choose a tag** 输入 `v1.3.2` → 点击 **Create new tag**
3. **Title**：`v1.3.2 - 易通中国首发版`
4. 写版本说明（可复制 README 的功能列表）
5. 把 `easytochina` 文件夹压缩成 zip，**拖入"Attach binaries"附件框**（建议同时提供 zip 与 exe/安装包——纯前端项目提供 zip 即可）
6. 点击 **Publish release** 发布

发布后，用户打开 **Releases 页面**即可看到版本列表与下载按钮，这是最规范的"免费下载"方式。

### 3. 免费使用规则（MIT 开源协议）
本项目采用 **MIT License**，意味着任何人可以：
- ✅ 免费下载、免费使用
- ✅ 自由修改、二次开发
- ✅ 自由分发、甚至商用
- ⚠️ 唯一要求：保留版权声明（LICENSE 文件）

> 如果你想对某些功能收费（如 1 对 1 教学），可单独提供付费服务，但源码本身保持 MIT 免费开源。

---

## 七、常见问题 FAQ

**Q1：上传后网页打开是空白/旧版？**
A：GitHub Pages 部署需 1–2 分钟生效；浏览器请**硬刷新**（Ctrl+Shift+R）或清缓存。PWA 用户首次打开后建议再刷新一次以拿到最新缓存。

**Q2：images 图片上传失败/超时？**
A：网络不稳定时逐批上传，或改用 git 方式推送。确认图片在 `images/cities`（71 张）与 `images/mascots`（24 张）目录内。

**Q3：GitHub 打不开/速度慢？**
A：GitHub 在国内部分网络需科学上网；若无法解决，可先用本地服务器 `python -m http.server 8080` 演示，或使用 Gitee（码云）替代（流程类似）。

**Q4：想改仓库名/换成私有仓库？**
A：仓库 Settings → General → Repository name 可改名；Private/Public 可随时切换。改名后 GitHub Pages 链接会同步变化。

**Q5：如何让更多人发现这个项目？**
A：在 README 顶部加徽章、在 **About** 栏添加 Topics（如 `chinese-learning`、`mandarin`、`pwa`、`education`）、分享 GitHub Pages 链接到社交平台；或提交到 Hacker News / Product Hunt 等社区。

---

*易通中国 EasyToChina · v1.3.2 · MIT License · 祝你开源顺利 🚀*
