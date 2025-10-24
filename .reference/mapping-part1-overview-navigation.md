# 📂 Guodong.github.io 功能-代码映射报告 (Part 1)

## 🏗️ 项目概览
- **技术栈**: Jekyll 3.9+, Ruby, Liquid模板引擎, SASS/SCSS, JavaScript (minimal)
- **架构模式**: Jekyll静态站点生成器 (约定优于配置), Collection-based内容组织
- **状态管理**: N/A (静态网站)
- **样式方案**: SASS/SCSS (位于 `_sass/` 目录), Font Awesome图标
- **构建工具**: Jekyll, Bundler (Ruby依赖管理)
- **包管理**: Bundler (通过 `Gemfile`), npm/yarn (通过 `package.json`)
- **主题基础**: AcademicPages (fork自Minimal Mistakes)

## 📊 功能模块统计
- **页面级组件**: 18个 (About, CV, Publications, Talks, Teaching, Portfolio, Blog等)
- **可复用组件**: 44个 (_includes目录中的HTML组件)
- **布局模板**: 8个 (_layouts目录)
- **内容集合**: 5个 (publications, talks, teaching, portfolio, posts)
- **样式文件**: 111个 SCSS文件 (核心样式 + 第三方库)
- **配置文件**: 3个 (_config.yml, Gemfile, package.json)

## 🗂️ 目录结构概览

```
guodong.github.io/
├── _config.yml                 # 网站主配置文件
├── _data/                      # 数据文件
│   ├── navigation.yml          # 顶部导航菜单配置
│   ├── ui-text.yml            # 界面文本多语言配置
│   └── cv.json                # CV数据(JSON格式)
├── _includes/                  # 可重用HTML片段
│   ├── masthead.html          # 顶部导航栏
│   ├── author-profile.html    # 作者信息侧边栏
│   ├── footer.html            # 页脚
│   ├── archive-single.html    # 列表项模板
│   └── [40+ 其他组件]
├── _layouts/                   # 页面布局模板
│   ├── default.html           # 默认布局
│   ├── single.html            # 单篇文章/详情页
│   ├── archive.html           # 列表页布局
│   └── [5+ 其他布局]
├── _pages/                     # 主要页面
│   ├── about.md               # 首页/关于页
│   ├── cv.md                  # 简历页
│   ├── publications.html      # 出版物列表
│   ├── talks.html             # 演讲列表
│   ├── teaching.html          # 教学列表
│   ├── portfolio.html         # 作品集列表
│   └── [12+ 其他页面]
├── _publications/              # 出版物Markdown文件
├── _talks/                     # 演讲Markdown文件
├── _teaching/                  # 教学Markdown文件
├── _portfolio/                 # 作品集Markdown文件
├── _posts/                     # 博客文章Markdown文件
├── _sass/                      # 样式文件
│   ├── layout/                # 布局样式
│   ├── theme/                 # 主题样式
│   └── vendor/                # 第三方库样式
├── assets/                     # 静态资源
│   ├── css/                   # 编译后的CSS
│   └── js/                    # JavaScript文件
├── images/                     # 用户图片资源
└── files/                      # 可下载文件(PDF等)
```

---

## 🎯 功能映射表

### 导航功能 - 顶部主导航栏

**🔤 用户描述方式**:
- 主要: "主菜单", "顶部导航栏", "顶部菜单", "网站导航"
- 别名: "Header导航", "页面链接", "菜单项", "导航链接"
- 英文: "Main navigation", "Top menu", "Header menu"

**📍 代码位置**:
- 数据文件: `_data/navigation.yml` - 定义导航链接的文字、URL和顺序
- 主文件: `_includes/masthead.html` - 渲染导航栏的HTML结构
- 样式文件: `_sass/layout/_masthead.scss` - 导航栏样式定义

**🎨 视觉标识**:
- 外观: 位于页面最顶部的水平链接列表，包含网站标题和菜单项
- 文本: "Publications", "Talks", "Teaching", "Portfolio", "Blog Posts", "CV"
- 特征: 深色主题切换按钮位于右侧，响应式设计(移动端显示汉堡菜单)

**⚡ 修改指引**:
- **添加/删除/重排菜单项**: 编辑 `_data/navigation.yml`，在 `main:` 下添加或删除条目
  ```yaml
  - title: "新页面"
    url: /new-page/
  ```
- **修改导航栏颜色**: 编辑 `_sass/layout/_masthead.scss`，修改 `.masthead` 的背景色
- **修改链接文字**: 编辑 `_data/navigation.yml` 中的 `title` 字段
- **修改网站标题**: 编辑 `_config.yml` 中的 `title` 字段
- **调整导航栏高度/间距**: 编辑 `_sass/layout/_masthead.scss` 中的padding/height属性

---

### 导航功能 - 主题切换按钮

**🔤 用户描述方式**:
- 主要: "主题切换", "深色模式切换", "亮色/暗色切换"
- 别名: "夜间模式开关", "Dark mode按钮", "主题按钮"
- 英文: "Theme toggle", "Dark/Light mode switch"

**📍 代码位置**:
- 主文件: `_includes/masthead.html` (第18-20行) - 主题切换按钮HTML
- JavaScript: `assets/js/main.min.js` - 主题切换逻辑
- 样式文件: `_sass/_themes.scss` - 主题颜色定义
- 主题配置: `_sass/theme/` 目录下的4个主题文件

**🎨 视觉标识**:
- 外观: 位于顶部导航栏最右侧的太阳/月亮图标
- 图标: 亮色模式显示太阳☀️，暗色模式显示月亮🌙
- 交互: 点击切换主题，自动保存用户偏好

**⚡ 修改指引**:
- **修改默认主题**: 编辑 `_config.yml` 中的 `site_theme: "default"` (可选: default, air)
- **自定义主题颜色**: 编辑 `_sass/theme/_default_light.scss` 或 `_default_dark.scss`
- **修改切换图标**: 编辑 `_includes/masthead.html` 中的 `fa-sun` class
- **移除主题切换**: 从 `_includes/masthead.html` 删除 `<li id="theme-toggle">` 整个元素

---

### 导航功能 - 面包屑导航

**🔤 用户描述方式**:
- 主要: "面包屑", "路径导航", "当前位置"
- 别名: "页面路径", "导航路径", "Breadcrumbs"

**📍 代码位置**:
- 主文件: `_includes/breadcrumbs.html` - 面包屑HTML生成
- 配置: `_config.yml` 中的 `breadcrumbs: false` - 开关控制
- 样式: `_sass/layout/_navigation.scss` - 面包屑样式

**🎨 视觉标识**:
- 外观: 页面顶部显示如 "Home > Publications > Article Title"
- 特征: 默认关闭，可通过配置开启

**⚡ 修改指引**:
- **启用面包屑**: 编辑 `_config.yml`，设置 `breadcrumbs: true`
- **修改分隔符**: 编辑 `_includes/breadcrumbs.html`，修改 `>` 符号
- **修改样式**: 编辑 `_sass/layout/_navigation.scss` 中的 `.breadcrumbs` 相关样式
