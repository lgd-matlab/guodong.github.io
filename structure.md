# 📂 guodong.github.io 功能-代码映射报告

## 🏗️ 项目概览
- **技术栈**: Jekyll, Ruby, SASS/SCSS, JavaScript
- **架构模式**: Jekyll-based (Convention over configuration), Static Site Generation
- **状态管理**: N/A (Static Site)
- **样式方案**: SASS/SCSS (located in `_sass`)
- **构建工具**: Jekyll, Bundler (via `Gemfile`)
- **包管理**: Bundler (for Ruby Gems), npm/yarn (for JS, via `package.json`)

## 📊 功能模块统计
- **页面级组件**: To be determined
- **可复用组件**: To be determined
- **业务逻辑模块**: To be determined
- **样式文件**: 100+ (in `_sass`)
- **配置文件**: `_config.yml`, `Gemfile`, `package.json`

## 🗂️ 目录结构概览

`guodong.github.io/`
├── `_config.yml`       # 主配置文件
├── `_data/`            # 数据文件 (e.g., navigation)
├── `_includes/`        # 可重用的HTML片段 (e.g., header, footer, sidebar)
├── `_layouts/`         # 页面布局模板
├── `_pages/`           # 网站的主要页面 (e.g., About, CV)
├── `_posts/`           # 博客文章
├── `_publications/`    # 出版物列表
├── `_talks/`           # 演讲列表
├── `_teaching/`        # 教学信息
├── `_portfolio/`       # 作品集
├── `_sass/`            # 样式文件
├── `assets/`           # 静态资源 (CSS, JS, images)
└── `images/`           # 用户上传的图片

---

## 🎯 功能映射表

### 导航功能 - 顶部主导航栏

**🔤 用户描述方式**:
- 主要: "主菜单", "顶部导航栏", "网站导航", "Header navigation"
- 别名: "页面链接", "菜单项"

**📍 代码位置**:
- 数据文件: `_data/navigation.yml` - 定义导航链接的文字、URL和顺序。
- 主文件: `_includes/masthead.html` - 渲染导航栏的HTML结构和逻辑。
- 样式: `_sass/` 目录中与 `masthead` 相关的SCSS文件 (e.g., `_masthead.scss`).

**🎨 视觉标识**:
- 外观: 位于页面顶部的水平链接列表。
- 文本: "Publications", "Talks", "Teaching", "Portfolio", "Blog Posts", "CV", "Guide".

**⚡ 修改指引**:
- **修改/添加/删除/重排链接**: 编辑 `_data/navigation.yml` 文件。
- **修改导航栏样式 (颜色、字体、间距)**: 查找并编辑 `_sass/` 目录下与 `.masthead` 和 `.masthead__menu-item` 相关的样式规则。
- **修改HTML结构**: 编辑 `_includes/masthead.html` 文件。

---

### 界面元素 - 作者信息侧边栏

**🔤 用户描述方式**:
- 主要: "作者简介", "左边栏个人信息", "Author sidebar"
- 别名: "头像", "社交链接", "个人简介", "Follow按钮"

**📍 代码位置**:
- 数据文件: `_config.yml` - 在 `author:` 部分定义默认的作者信息 (姓名, 简介, 头像, 社交账号等)。
- 主文件: `_includes/author-profile.html` - 渲染侧边栏的HTML结构和逻辑。
- 样式: `_sass/` 目录中与 `author` 相关的SCSS文件 (e.g., `_sidebar.scss`, `_author-profile.scss`).

**🎨 视觉标识**:
- 外观: 通常位于页面左侧的固定区域，包含一个圆形头像、姓名、简介和一列图标链接。
- 文本: "Follow", "Website", "Email", "Google Scholar", "GitHub", etc.

**⚡ 修改指引**:
- **修改个人信息 (姓名, 简介, 地点等)**: 编辑 `_config.yml` 文件中的 `author:` 部分。
- **修改头像**: 替换 `/images/profile.png` 文件，或在 `_config.yml` 的 `author.avatar` 字段中指定新的图片路径。
- **添加/修改社交或学术链接**: 在 `_config.yml` 的 `author:` 部分填写或修改相应的字段 (e.g., `github: your-username`).
- **修改侧边栏布局和样式**: 编辑 `_includes/author-profile.html` (for structure) 和 `_sass/` 目录下的相关样式文件 (for appearance).

---

### 内容展示 - 出版物列表 (Publications)

**🔤 用户描述方式**:
- 主要: "出版物列表", "我的论文", "Publications page"
- 别名: "学术成果", "发表的文章", "Journal articles"

**📍 代码位置**:
- 数据文件: `_publications/` 目录下的各个Markdown文件。每个文件代表一篇出版物。
- 列表页面: `_pages/publications.html` - 控制出版物列表页的整体布局和标题。
- 列表项模板: `_includes/archive-single.html` - 定义了列表中每一项的显示格式 (标题、期刊、年份等)。
- 详情页面布局: `_layouts/single.html` - 定义了点击单个出版物后进入的详情页面的布局。

**🎨 视觉标识**:
- 外观: 一个按类别（如 Journal Articles）组织的条目列表。每个条目包含标题、发表地点和年份。
- 文本: "Published in...", "Download Paper", "Download Bibtex".

**⚡ 修改指引**:
- **添加/修改/删除出版物**: 在 `_publications/` 目录下创建、编辑或删除对应的Markdown文件。文件内的元数据 (e.g., `title`, `venue`, `date`, `paperurl`) 决定了显示的内容。
- **修改列表页的标题或介绍**: 编辑 `_pages/publications.html`。
- **修改列表项的显示样式** (e.g., 调整信息顺序): 编辑 `_includes/archive-single.html` 中 `post.collection == 'publications'` 的部分。
- **修改详情页的布局**: 编辑 `_layouts/single.html`。

---

### 内容展示 - 演讲, 教学, & 作品集 (Talks, Teaching, & Portfolio)

**🔤 用户描述方式**:
- 主要: "演讲列表", "教学页面", "作品集", "Talks", "Teaching", "Portfolio"
- 别名: "我的演讲", "课程材料", "项目展示"

**📍 代码位置**:
- **数据文件**:
  - `_talks/` (演讲)
  - `_teaching/` (教学)
  - `_portfolio/` (作品集)
- **列表页面**:
  - `_pages/talks.html`
  - `_pages/teaching.html`
  - `_pages/portfolio.html`
- **列表项模板**: `_includes/archive-single.html` - (通用模板)
- **详情页面布局**:
  - `_layouts/talk.html` (用于演讲)
  - `_layouts/single.html` (用于教学和作品集)

**🎨 视觉标识**:
- 外观: 与出版物列表类似，都是按时间或类别排列的条目列表。
- 文本: 每个条目显示标题、日期、地点等元数据。

**⚡ 修改指引**:
- **添加/修改内容**: 在对应的 `_talks/`, `_teaching/`, 或 `_portfolio/` 目录下编辑Markdown文件。
- **修改列表页**: 编辑 `_pages/` 目录下的 `talks.html`, `teaching.html`, 或 `portfolio.html`。
- **修改列表项显示**: 编辑 `_includes/archive-single.html`。
- **修改详情页布局**: 编辑 `_layouts/talk.html` (for talks) 或 `_layouts/single.html` (for others)。

---

### 内容展示 - 博客文章 (Blog Posts)

**🔤 用户描述方式**:
- 主要: "博客文章", "博客列表", "Blog posts"
- 别名: "文章归档", "Posts by year"

**📍 代码位置**:
- 数据文件: `_posts/` 目录下的各个Markdown文件。每个文件代表一篇博客。
- 列表页面: `_pages/year-archive.html` - 按年份对所有博客文章进行分组和展示。
- 列表项模板: `_includes/archive-single.html` - 定义了列表中每一篇文章的显示格式。
- 详情页面布局: `_layouts/single.html` - 定义了单篇博客文章的页面布局。

**🎨 视觉标识**:
- 外观: 按年份（大标题）组织的博客文章列表。
- 文本: 每个条目显示文章标题和发布日期。

**⚡ 修改指引**:
- **撰写/修改博客**: 在 `_posts/` 目录下创建或编辑Markdown文件。文件名格式必须是 `YYYY-MM-DD-title.md`。
- **修改归档页面的标题**: 编辑 `_pages/year-archive.html`。
- **修改列表项的显示样式**: 编辑 `_includes/archive-single.html`。
- **修改单篇博客的布局**: 编辑 `_layouts/single.html`。

---

## 🚀 使用说明

### 对于用户
当您想修改某个功能时，只需告诉我：
- "我想修改顶部导航栏的'CV'链接，让它指向一个新页面"
- "左边作者简介里的头像需要更换"
- "把'Publications'列表里每篇文章的年份都加粗"

### 对于AI
收到用户需求后，我将：
1. 在本映射报告中搜索相关的"用户描述方式"或功能点。
2. 定位到对应的"代码位置"。
3. 根据"修改指引"和您的具体要求，定位并修改相关文件。
