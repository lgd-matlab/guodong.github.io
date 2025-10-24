# 📂 Guodong.github.io 功能-代码映射报告 (Part 5)

## 🎯 功能映射表 - 页脚与样式定制

### 界面元素 - 网站页脚 (Footer)

**🔤 用户描述方式**:
- 主要: "页脚", "底部", "Footer", "网站底部"
- 别名: "页面底部", "底部信息", "版权信息"

**📍 代码位置**:
- 主文件: `_includes/footer.html` - 页脚HTML结构
- 子目录: `_includes/footer/` - 页脚自定义内容（可选）
- 样式: `_sass/layout/_footer.scss` - 页脚样式
- 配置: `_config.yml` 中的相关设置（如RSS、作者信息）

**🎨 视觉标识**:
- 外观: 页面最底部的深色区域
- 内容: 
  - "Follow" 标签
  - GitHub链接（如果配置）
  - RSS Feed链接
  - 版权信息："© 2024 Guodong Lu"
  - "Powered by Jekyll & AcademicPages"
  - 最后更新日期

**⚡ 修改指引**:
- **修改版权信息**: 编辑 `_includes/footer.html` (第23行)
- **添加/删除社交链接**: 在 `_config.yml` 的 `author` 部分配置相应字段
- **隐藏RSS链接**: 在 `_config.yml` 设置 `atom_feed.hide: true`
- **修改"Powered by"文字**: 编辑 `_includes/footer.html` (第23行)
- **修改页脚背景色**: 编辑 `_sass/layout/_footer.scss` 中的背景色
- **添加自定义内容**: 在 `_includes/footer.html` 中添加HTML

---

### 界面元素 - RSS Feed链接

**🔤 用户描述方式**:
- 主要: "RSS", "订阅", "Feed", "RSS订阅"
- 别名: "RSS链接", "订阅源", "Feed链接"

**📍 代码位置**:
- 主文件: `_includes/footer.html` (第16-18行)
- Feed生成: Jekyll自动生成 `feed.xml`
- 配置: `_config.yml` 中的 `atom_feed` 部分

**🎨 视觉标识**:
- 外观: 页脚中的RSS图标 + "Feed"文字链接
- 功能: 点击获取网站RSS订阅源

**⚡ 修改指引**:
- **隐藏RSS链接**: 在 `_config.yml` 设置 `atom_feed: {hide: true}`
- **自定义Feed路径**: 在 `_config.yml` 设置 `atom_feed: {path: custom-feed.xml}`
- **修改链接文字**: 编辑 `_data/ui-text.yml` 中的 `feed_label`

---

### 样式定制 - 网站配色方案

**🔤 用户描述方式**:
- 主要: "配色", "颜色", "网站颜色", "主题色"
- 别名: "色彩方案", "配色方案", "Color scheme"

**📍 代码位置**:
- 主题配置: `_config.yml` 中的 `site_theme: "default"` 
- 亮色主题: `_sass/theme/_default_light.scss`
- 暗色主题: `_sass/theme/_default_dark.scss`
- Air亮色: `_sass/theme/_air_light.scss`
- Air暗色: `_sass/theme/_air_dark.scss`
- 主题系统: `_sass/_themes.scss` - 主题切换逻辑

**🎨 视觉标识**:
- 默认主题: 深蓝色标题栏，白色背景
- Air主题: 更轻量的颜色方案
- 暗色模式: 深色背景，浅色文字

**⚡ 修改指引**:
- **切换主题**: 编辑 `_config.yml`，修改 `site_theme: "air"`
- **自定义颜色**: 编辑对应主题文件（如 `_default_light.scss`）
  ```scss
  $primary-color: #0066cc;  // 主色调
  $background-color: #ffffff;  // 背景色
  $text-color: #333333;  // 文字色
  ```
- **创建自定义主题**: 
  1. 复制现有主题文件
  2. 重命名（如 `_custom_light.scss`）
  3. 修改颜色变量
  4. 在 `_sass/_themes.scss` 中注册新主题

---

### 样式定制 - 字体设置

**🔤 用户描述方式**:
- 主要: "字体", "字体大小", "文字字体", "Font"
- 别名: "字号", "字体样式", "Typography"

**📍 代码位置**:
- 字体配置: `_config.yml` 可能包含字体设置
- 全局字体: `_sass/layout/_base.scss` - 基础字体定义
- 变量: `_sass/vendor/breakpoint/_settings.scss` - 可能包含字体变量
- Font Awesome: 通过CDN加载（图标字体）

**🎨 视觉标识**:
- 正文: 通常使用无衬线字体（Sans-serif）
- 标题: 可能使用不同字重或字体
- 代码: 等宽字体（Monospace）

**⚡ 修改指引**:
- **修改字体系列**: 编辑 `_sass/layout/_base.scss`
  ```scss
  body {
    font-family: "Helvetica Neue", Arial, sans-serif;
  }
  ```
- **修改字体大小**: 编辑 `_sass/layout/_base.scss` 中的 `font-size`
- **使用Google Fonts**: 
  1. 在 `_includes/head.html` 添加字体链接
  2. 在样式文件中引用字体

---

### 样式定制 - 布局宽度与间距

**🔤 用户描述方式**:
- 主要: "布局宽度", "页面宽度", "内容区宽度"
- 别名: "最大宽度", "间距", "边距", "Layout width"

**📍 代码位置**:
- 布局样式: `_sass/layout/_base.scss` - 基础布局
- 页面样式: `_sass/layout/_page.scss` - 页面容器
- 侧边栏: `_sass/layout/_sidebar.scss` - 侧边栏宽度
- 归档页: `_sass/layout/_archive.scss` - 列表页布局

**🎨 视觉标识**:
- 内容区: 中等宽度，居中显示
- 侧边栏: 固定宽度（约300px）
- 响应式: 移动端自适应

**⚡ 修改指引**:
- **修改最大宽度**: 编辑 `_sass/layout/_base.scss` 或 `_page.scss`
  ```scss
  .page__content {
    max-width: 1200px;  // 修改最大宽度
  }
  ```
- **修改侧边栏宽度**: 编辑 `_sass/layout/_sidebar.scss`
- **调整内边距**: 修改各布局文件中的 `padding` 值
- **修改外边距**: 修改 `margin` 值

---

### 样式定制 - 代码高亮

**🔤 用户描述方式**:
- 主要: "代码高亮", "代码块", "代码样式"
- 别名: "语法高亮", "Code highlighting", "代码颜色"

**📍 代码位置**:
- 主文件: `_sass/_syntax.scss` - 代码高亮样式
- 配置: `_config.yml` 中的 `highlighter: rouge`
- 可能的主题: Pygments或Rouge主题

**🎨 视觉标识**:
- 外观: 代码块带背景色，关键字彩色显示
- 支持: 多种编程语言语法高亮

**⚡ 修改指引**:
- **修改代码块背景**: 编辑 `_sass/_syntax.scss` 中的背景色
- **修改语法高亮颜色**: 编辑 `_syntax.scss` 中各语法元素的颜色
- **更换高亮主题**: 替换整个 `_syntax.scss` 文件（可从网上下载主题）

---

### 交互功能 - 响应式设计

**🔤 用户描述方式**:
- 主要: "手机版", "移动端", "响应式", "自适应"
- 别名: "移动端布局", "Responsive", "Mobile view"

**📍 代码位置**:
- 断点配置: `_sass/vendor/breakpoint/` - 响应式断点系统
- 各布局文件: 包含 `@media` 查询的样式规则
- 导航: `_includes/masthead.html` - 汉堡菜单（移动端）

**🎨 视觉标识**:
- 桌面端: 左侧侧边栏 + 主内容区
- 移动端: 汉堡菜单 + 全宽内容 + 折叠侧边栏

**⚡ 修改指引**:
- **修改断点**: 编辑 `_sass/vendor/breakpoint/_settings.scss`
- **调整移动端样式**: 在各布局SCSS文件中修改 `@media` 查询内的样式
- **修改汉堡菜单**: 编辑 `_includes/masthead.html` 和相关样式

---

### 性能优化 - 图片与资源

**🔤 用户描述方式**:
- 主要: "图片", "图片优化", "加载速度"
- 别名: "图片压缩", "资源加载", "Performance"

**📍 代码位置**:
- 图片目录: `images/` - 用户图片
- 资源目录: `assets/` - CSS、JS等资源
- 头部: `_includes/head.html` - 资源加载
- SEO: `_includes/seo.html` - Meta标签

**⚡ 修改指引**:
- **压缩图片**: 使用图片压缩工具处理 `images/` 中的图片
- **延迟加载**: 在图片标签添加 `loading="lazy"`
- **优化资源**: 使用minified版本的CSS/JS
- **添加CDN**: 在 `_includes/head.html` 中使用CDN链接

---

## 🚀 快速修改场景

### 场景1: "我想修改网站标题"
→ 编辑 `_config.yml` → `title: "新标题"`

### 场景2: "我想添加一篇新论文"
→ 在 `_publications/` 创建新`.md`文件 → 填写front matter

### 场景3: "我想更换头像"
→ 替换 `images/profile.png` 或修改 `_config.yml` 中的 `author.avatar`

### 场景4: "我想修改导航菜单"
→ 编辑 `_data/navigation.yml`

### 场景5: "我想改变网站配色"
→ 编辑 `_sass/theme/_default_light.scss` 或 `_default_dark.scss`

### 场景6: "我想添加社交链接"
→ 编辑 `_config.yml` → `author:` 部分 → 填写对应平台的用户名

### 场景7: "我想写一篇新博客"
→ 在 `_posts/` 创建 `YYYY-MM-DD-title.md` 文件

### 场景8: "我想修改首页内容"
→ 编辑 `_pages/about.md`
