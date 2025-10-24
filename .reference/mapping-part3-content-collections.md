# 📂 Guodong.github.io 功能-代码映射报告 (Part 3)

## 🎯 功能映射表 - 内容集合

### 内容展示 - 出版物列表 (Publications)

**🔤 用户描述方式**:
- 主要: "出版物", "论文列表", "发表文章", "Publications"
- 别名: "我的论文", "学术成果", "发表的文章", "科研成果", "期刊文章"
- 英文: "Publications", "Papers", "Research papers", "Articles"

**📍 代码位置**:
- 数据文件: `_publications/` 目录 - 每个`.md`文件代表一篇出版物
- 列表页面: `_pages/publications.html` - 出版物列表页配置
- 列表项模板: `_includes/archive-single.html` (第40-42行) - 出版物显示格式
- 详情页布局: `_layouts/single.html` - 单篇出版物详情页
- 样式: `_sass/layout/_archive.scss` - 列表样式

**🎨 视觉标识**:
- 外观: 按类别分组的条目列表（如"Journal Articles"）
- 内容: 每个条目显示标题、发表期刊、年份
- 链接: "Download Paper", "Download Slides", "Download Bibtex"
- 排序: 默认按日期倒序（最新的在前）

**⚡ 修改指引**:
- **添加新出版物**: 在 `_publications/` 创建新的`.md`文件，使用以下模板：
  ```markdown
  ---
  title: "论文标题"
  collection: publications
  category: manuscripts  # 或 books, conferences
  permalink: /publication/2024-paper-title
  excerpt: '简短描述'
  date: 2024-01-01
  venue: 'Journal Name'
  paperurl: 'http://link-to-paper.com'
  citation: 'Your citation format'
  ---
  详细内容...
  ```
- **修改出版物信息**: 编辑 `_publications/` 中对应的`.md`文件
- **修改显示格式**: 编辑 `_includes/archive-single.html` 中publications相关部分
- **修改类别**: 在 `_config.yml` 的 `publication_category:` 下添加或修改类别
- **调整排序**: 编辑 `_pages/publications.html`，修改循环语句（添加 `reversed` 或排序逻辑）
- **修改页面标题/介绍**: 编辑 `_pages/publications.html` 的front matter和内容

---

### 内容展示 - 演讲列表 (Talks)

**🔤 用户描述方式**:
- 主要: "演讲", "报告列表", "学术报告", "Talks"
- 别名: "我的演讲", "会议报告", "讲座", "Presentations"

**📍 代码位置**:
- 数据文件: `_talks/` 目录 - 每个`.md`文件代表一次演讲
- 列表页面: `_pages/talks.html` - 演讲列表页配置
- 列表项模板: `_includes/archive-single-talk.html` - 演讲显示格式
- 详情页布局: `_layouts/talk.html` - 单次演讲详情页
- 地图页面: `_pages/talkmap.html` - 演讲地点地图（可选）

**🎨 视觉标识**:
- 外观: 时间倒序的演讲列表
- 内容: 演讲标题、类型（talk/tutorial/workshop）、地点、日期
- 特色: 可选择显示演讲地点地图

**⚡ 修改指引**:
- **添加新演讲**: 在 `_talks/` 创建新的`.md`文件：
  ```markdown
  ---
  title: "演讲标题"
  collection: talks
  type: "Talk"  # 或 Tutorial, Workshop
  permalink: /talks/2024-talk-title
  venue: "Conference Name"
  date: 2024-03-15
  location: "City, Country"
  ---
  演讲摘要...
  ```
- **修改演讲信息**: 编辑 `_talks/` 中对应的`.md`文件
- **启用地图功能**: 在 `_config.yml` 设置 `talkmap_link: true`
- **修改显示格式**: 编辑 `_includes/archive-single-talk.html`
- **修改详情页布局**: 编辑 `_layouts/talk.html`

---

### 内容展示 - 教学信息 (Teaching)

**🔤 用户描述方式**:
- 主要: "教学", "课程", "教学经历", "Teaching"
- 别名: "授课", "教学活动", "课程列表", "教学经验"

**📍 代码位置**:
- 数据文件: `_teaching/` 目录 - 每个`.md`文件代表一门课程或教学活动
- 列表页面: `_pages/teaching.html` - 教学列表页配置
- 列表项模板: `_includes/archive-single.html` (第39行) - 教学显示格式
- 详情页布局: `_layouts/single.html` - 课程详情页

**🎨 视觉标识**:
- 外观: 课程列表，按时间排序
- 内容: 课程类型（Undergraduate/Graduate）、课程名称、年份

**⚡ 修改指引**:
- **添加新课程**: 在 `_teaching/` 创建新的`.md`文件：
  ```markdown
  ---
  title: "课程名称"
  collection: teaching
  type: "Undergraduate course"  # 或 Graduate course, Workshop
  permalink: /teaching/2024-course
  venue: "University Name, Department"
  date: 2024-01-01
  location: "City, Country"
  ---
  课程描述...
  ```
- **修改课程信息**: 编辑 `_teaching/` 中对应的`.md`文件
- **修改显示格式**: 编辑 `_includes/archive-single.html` 中teaching相关部分
- **调整列表布局**: 编辑 `_pages/teaching.html`

---

### 内容展示 - 作品集 (Portfolio)

**🔤 用户描述方式**:
- 主要: "作品集", "项目展示", "Portfolio", "项目列表"
- 别名: "我的项目", "研究项目", "工作成果"

**📍 代码位置**:
- 数据文件: `_portfolio/` 目录 - 每个`.md`文件代表一个项目
- 列表页面: `_pages/portfolio.html` - 作品集列表页配置
- 列表项模板: `_includes/archive-single.html` - 项目显示格式
- 详情页布局: `_layouts/single.html` - 项目详情页

**🎨 视觉标识**:
- 外观: 项目卡片或列表
- 内容: 项目标题、简短描述、可选的预览图片

**⚡ 修改指引**:
- **添加新项目**: 在 `_portfolio/` 创建新的`.md`文件：
  ```markdown
  ---
  title: "项目名称"
  excerpt: "项目简介"
  collection: portfolio
  ---
  详细的项目描述...
  ```
- **修改项目信息**: 编辑 `_portfolio/` 中对应的`.md`文件
- **添加项目图片**: 在文件中使用 `header.teaser` 指定预览图
- **修改列表布局**: 编辑 `_pages/portfolio.html`，可改为网格布局

---

### 下载功能 - 论文/演讲文件下载

**🔤 用户描述方式**:
- 主要: "下载论文", "下载PDF", "文件下载", "Download Paper"
- 别名: "下载链接", "下载按钮", "Download Slides", "Download Bibtex"

**📍 代码位置**:
- 链接生成: `_includes/archive-single.html` (第68-95行) - 下载链接逻辑
- 文件存储: `files/` 目录 - 存放PDF、Bibtex等文件
- 配置: 各content文件的front matter中的 `paperurl`, `slidesurl`, `bibtexurl`

**🎨 视觉标识**:
- 外观: 蓝色下划线链接，通常显示为"Download Paper"
- 位置: 在出版物或演讲条目的底部

**⚡ 修改指引**:
- **添加下载链接**: 在文章的front matter中添加：
  ```yaml
  paperurl: '/files/paper.pdf'
  slidesurl: '/files/slides.pdf'
  bibtexurl: '/files/citation.bib'
  ```
- **上传文件**: 将PDF、Bibtex等文件放入 `files/` 目录
- **修改链接文字**: 编辑 `_includes/archive-single.html` 中的"Download Paper"等文字
- **使用外部链接**: 直接使用完整URL（如DOI链接）
