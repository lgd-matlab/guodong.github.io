# 📂 Guodong.github.io 功能-代码映射报告 (Part 4)

## 🎯 功能映射表 - 页面与博客

### 内容展示 - 首页/关于页 (About Me)

**🔤 用户描述方式**:
- 主要: "首页", "关于页", "About页", "个人介绍页"
- 别名: "主页", "欢迎页", "个人简介", "About Me"

**📍 代码位置**:
- 主文件: `_pages/about.md` - 首页内容
- 布局: `_layouts/default.html` 或页面自定义的layout
- 配置: 文件front matter中 `permalink: /` 指定为首页
- 样式: `_sass/layout/_page.scss` - 页面样式

**🎨 视觉标识**:
- 外观: 标准页面布局，左侧侧边栏 + 右侧主要内容区
- 内容: 个人介绍、研究兴趣、个人爱好等
- 标题: "About Me"

**⚡ 修改指引**:
- **修改首页内容**: 编辑 `_pages/about.md`，修改markdown内容
- **修改页面标题**: 编辑front matter中的 `title: "About Me"`
- **调整布局**: 修改front matter中的 `layout` 字段
- **隐藏侧边栏**: 设置 `author_profile: false`
- **添加图片**: 在markdown中使用标准语法 `![alt](path/to/image.jpg)`

---

### 内容展示 - 简历页 (CV)

**🔤 用户描述方式**:
- 主要: "简历", "CV", "个人简历", "履历"
- 别名: "简历页面", "个人履历", "Resume", "Curriculum Vitae"

**📍 代码位置**:
- 主文件: `_pages/cv.md` - Markdown格式CV
- 备选: `_pages/cv-json.md` - JSON格式CV（可选）
- JSON数据: `_data/cv.json` - 结构化CV数据
- 布局: `_layouts/archive.html` - 标准归档布局
- 特殊布局: `_layouts/cv-layout.html` - CV专用布局
- 样式: `_sass/layout/_json_cv.scss` - JSON CV样式

**🎨 视觉标识**:
- 外观: 结构化的简历内容，包含多个部分
- 内容: 教育背景、工作经历、研究经历、技能、出版物列表等
- 特征: 使用Liquid模板自动引入出版物、演讲等collection数据

**⚡ 修改指引**:
- **修改简历内容**: 编辑 `_pages/cv.md`，按markdown格式编辑
- **使用JSON格式**: 
  1. 编辑 `_data/cv.json` 填写结构化数据
  2. 修改 `_data/navigation.yml` 将CV链接改为 `/cv-json/`
- **添加新部分**: 在markdown中添加新的 `##` 标题和内容
- **修改出版物显示**: 编辑 `_includes/archive-single-cv.html`
- **自定义CV布局**: 编辑 `_layouts/cv-layout.html`
- **下载PDF**: 添加链接到 `files/` 目录中的PDF简历

---

### 内容展示 - 博客文章 (Blog Posts)

**🔤 用户描述方式**:
- 主要: "博客", "博客文章", "文章列表", "Blog"
- 别名: "我的博客", "Posts", "文章归档", "博文"

**📍 代码位置**:
- 数据文件: `_posts/` 目录 - 博客文章markdown文件
- 列表页面: `_pages/year-archive.html` - 按年份归档
- 分类页面: `_pages/category-archive.html` - 按分类浏览
- 标签页面: `_pages/tag-archive.html` - 按标签浏览
- 列表项模板: `_includes/archive-single.html` - 文章显示格式
- 详情页布局: `_layouts/single.html` - 单篇文章页面

**🎨 视觉标识**:
- 外观: 按年份分组的文章列表
- 内容: 文章标题、发布日期、摘要、分类/标签
- 排序: 最新文章在前

**⚡ 修改指引**:
- **添加新文章**: 在 `_posts/` 创建新文件，命名格式 `YYYY-MM-DD-title.md`：
  ```markdown
  ---
  title: '文章标题'
  date: 2024-01-01
  permalink: /posts/2024/01/blog-post-title/
  tags:
    - tag1
    - tag2
  categories:
    - category1
  ---
  文章内容...
  ```
- **修改文章**: 编辑 `_posts/` 中对应的`.md`文件
- **设置文章摘要**: 使用 `excerpt:` 字段或在内容中添加 `<!--more-->`
- **启用评论**: 在 `_config.yml` 配置评论系统（disqus等）
- **修改归档页标题**: 编辑 `_pages/year-archive.html`
- **显示阅读时间**: 在front matter设置 `read_time: true`

---

### 导航功能 - 分类与标签浏览

**🔤 用户描述方式**:
- 主要: "分类", "标签", "文章分类", "Tags"
- 别名: "类别", "标签云", "Categories", "文章标签"

**📍 代码位置**:
- 分类页: `_pages/category-archive.html` - 分类归档页
- 标签页: `_pages/tag-archive.html` - 标签归档页
- 分类列表: `_includes/category-list.html` - 分类列表组件
- 标签列表: `_includes/tag-list.html` - 标签列表组件
- 样式: `_sass/layout/_archive.scss` - 归档页样式

**🎨 视觉标识**:
- 外观: 分类/标签名称 + 文章数量
- 交互: 点击分类/标签查看相关文章

**⚡ 修改指引**:
- **在文章中添加分类**: 在文章front matter添加 `categories: [category1, category2]`
- **在文章中添加标签**: 在文章front matter添加 `tags: [tag1, tag2]`
- **修改归档页样式**: 编辑 `_sass/layout/_archive.scss`
- **自定义分类显示**: 编辑 `_includes/category-list.html`

---

### 功能页面 - 站点地图 (Sitemap)

**🔤 用户描述方式**:
- 主要: "站点地图", "网站地图", "Sitemap"
- 别名: "所有页面", "页面列表"

**📍 代码位置**:
- 主文件: `_pages/sitemap.md` - 站点地图页面
- 自动生成: Jekyll自动生成XML sitemap（用于SEO）

**🎨 视觉标识**:
- 外观: 所有页面的链接列表
- 用途: 帮助用户快速找到所有内容

**⚡ 修改指引**:
- **修改站点地图**: 编辑 `_pages/sitemap.md`
- **排除页面**: 在页面front matter添加 `sitemap: false`

---

### 功能页面 - 404错误页

**🔤 用户描述方式**:
- 主要: "404页面", "错误页", "页面未找到"
- 别名: "Not Found", "错误提示页"

**📍 代码位置**:
- 主文件: `_pages/404.md` - 404错误页面
- 布局: 使用default布局

**🎨 视觉标识**:
- 外观: 简单的错误提示信息
- 内容: "Page not found"提示 + 返回首页链接

**⚡ 修改指引**:
- **修改404内容**: 编辑 `_pages/404.md`
- **自定义错误页**: 添加友好的提示、搜索框或导航链接
- **修改样式**: 在 `_sass/` 中添加 `.error-page` 相关样式

---

### 内容展示 - 页面分页器

**🔤 用户描述方式**:
- 主要: "分页", "翻页", "上一页下一页", "Pagination"
- 别名: "页码", "分页导航"

**📍 代码位置**:
- 主文件: `_includes/paginator.html` - 分页器HTML
- 配置: `_config.yml` 中的 `paginate: 5` - 每页文章数
- 样式: `_sass/layout/_navigation.scss` - 分页器样式

**🎨 视觉标识**:
- 外观: 页面底部的页码导航
- 内容: "Previous" / "Next" 按钮，页码数字

**⚡ 修改指引**:
- **修改每页文章数**: 编辑 `_config.yml` 中的 `paginate` 值
- **修改分页器样式**: 编辑 `_includes/paginator.html` 和对应样式文件
- **禁用分页**: 删除或注释 `_config.yml` 中的 `paginate` 配置
