# 📂 Guodong.github.io 功能-代码映射报告 (Part 2)

## 🎯 功能映射表 - 侧边栏与作者信息

### 界面元素 - 作者信息侧边栏

**🔤 用户描述方式**:
- 主要: "作者简介", "个人信息栏", "左侧边栏", "作者侧边栏"
- 别名: "个人资料", "作者信息", "Author sidebar", "个人简介区"
- 英文: "Author profile", "Sidebar", "Bio section"

**📍 代码位置**:
- 主文件: `_includes/author-profile.html` - 侧边栏HTML结构
- 数据配置: `_config.yml` 中的 `author:` 部分 - 所有个人信息
- 样式文件: `_sass/layout/_sidebar.scss` - 侧边栏布局样式
- 附加样式: `_sass/layout/_author-profile.scss` - 作者信息专属样式

**🎨 视觉标识**:
- 外观: 位于页面左侧的固定区域，包含头像、姓名、简介、社交链接
- 内容: 圆形头像 + 姓名 + 简介文字 + "Follow"按钮 + 图标链接列表
- 位置: 桌面端固定左侧，移动端收起可展开

**⚡ 修改指引**:
- **修改个人信息**: 编辑 `_config.yml` 的 `author:` 部分
  - `name`: 姓名
  - `bio`: 个人简介
  - `location`: 所在地
  - `employer`: 工作单位
  - `email`: 电子邮箱
- **修改侧边栏宽度**: 编辑 `_sass/layout/_sidebar.scss` 中的 `.sidebar` 宽度
- **调整头像大小**: 编辑 `_sass/layout/_sidebar.scss` 中的 `.author__avatar` 尺寸
- **隐藏侧边栏**: 在页面的YAML front matter中设置 `author_profile: false`

---

### 界面元素 - 用户头像

**🔤 用户描述方式**:
- 主要: "头像", "用户头像", "个人头像", "个人照片"
- 别名: "头像图片", "profile picture", "avatar", "照片"

**📍 代码位置**:
- 图片文件: `images/profile.png` - 默认头像位置
- 配置: `_config.yml` 中的 `author.avatar: "profile.png"`
- HTML: `_includes/author-profile.html` (第10-14行) - 头像显示逻辑
- 样式: `_sass/layout/_sidebar.scss` 中的 `.author__avatar` 样式

**🎨 视觉标识**:
- 外观: 圆形图片，位于侧边栏顶部
- 尺寸: 默认150x150像素（响应式）
- 特征: 圆形边框，悬停可能有过渡效果

**⚡ 修改指引**:
- **更换头像**: 替换 `images/profile.png` 文件，或上传新图片并修改 `_config.yml` 中的路径
- **修改头像形状**: 编辑 `_sass/layout/_sidebar.scss`，修改 `border-radius` (100% = 圆形)
- **调整头像尺寸**: 编辑 `_sass/layout/_sidebar.scss` 中的 `.author__avatar` 的 width/height
- **添加边框/阴影**: 在 `.author__avatar` 样式中添加 `border` 或 `box-shadow` 属性

---

### 界面元素 - Follow按钮

**🔤 用户描述方式**:
- 主要: "Follow按钮", "关注按钮", "社交链接展开按钮"
- 别名: "跟随按钮", "联系方式按钮"

**📍 代码位置**:
- 主文件: `_includes/author-profile.html` (第24行) - Follow按钮HTML
- 样式: `_sass/layout/_buttons.scss` - 按钮样式定义
- 交互: 移动端点击展开社交链接列表

**🎨 视觉标识**:
- 外观: 深色背景的按钮，显示"Follow"文字
- 位置: 位于个人简介下方、社交链接列表上方
- 功能: 桌面端纯装饰，移动端用于展开/收起社交链接

**⚡ 修改指引**:
- **修改按钮文字**: 编辑 `_includes/author-profile.html`，修改 `Follow` 文本
- **修改按钮颜色**: 编辑 `_sass/layout/_buttons.scss` 中的 `.btn--inverse` 样式
- **隐藏按钮**: 在 `_includes/author-profile.html` 中注释或删除第24行
- **修改按钮形状**: 编辑 `.btn` 的 `border-radius` 属性

---

### 界面元素 - 社交链接列表

**🔤 用户描述方式**:
- 主要: "社交链接", "联系方式", "社交媒体图标", "外部链接"
- 别名: "学术链接", "GitHub链接", "邮箱链接", "社交图标"
- 英文: "Social links", "Contact links", "Social icons"

**📍 代码位置**:
- 主文件: `_includes/author-profile.html` (第25-165行) - 社交链接生成逻辑
- 数据配置: `_config.yml` 中的 `author:` 部分各个社交平台字段
- 图标库: Font Awesome + Academicons (通过CDN加载)
- 样式: `_sass/layout/_sidebar.scss` 中的 `.author__urls` 相关样式

**🎨 视觉标识**:
- 外观: 带图标的链接列表，每行一个链接
- 图标: 
  - 学术: Google Scholar, ORCID, ResearchGate, arXiv
  - 代码: GitHub, Bitbucket, Kaggle
  - 社交: Twitter, LinkedIn, Facebook, Instagram
  - 其他: Email, Website, Location, Employer
- 特征: 图标在左，文字在右，悬停有颜色变化

**⚡ 修改指引**:
- **添加社交链接**: 在 `_config.yml` 的 `author:` 部分填写对应字段
  ```yaml
  github: "your-username"
  googlescholar: "https://scholar.google.com/your-profile"
  ```
- **删除不需要的链接**: 在 `_config.yml` 中留空或删除对应字段
- **调整链接顺序**: 编辑 `_includes/author-profile.html`，重排HTML顺序
- **修改图标**: 编辑对应链接的 `<i>` 标签，使用不同的Font Awesome class
- **修改链接颜色**: 编辑 `_sass/layout/_sidebar.scss` 中的 `.author__urls a` 样式
- **添加自定义链接**: 在 `author-profile.html` 中按照现有格式添加新的 `<li>` 元素

---

### 界面元素 - 位置与机构信息

**🔤 用户描述方式**:
- 主要: "所在地", "工作单位", "位置信息", "机构信息"
- 别名: "地理位置", "单位", "Employer", "Location"

**📍 代码位置**:
- 配置: `_config.yml` 中的 `author.location` 和 `author.employer`
- HTML: `_includes/author-profile.html` (第27-32行)
- 图标: Font Awesome的 `fa-location-dot` 和 `fa-building-columns`

**🎨 视觉标识**:
- 外观: 位置图标📍 + 地点文字
- 外观: 建筑图标🏛️ + 机构名称
- 位置: 在社交链接列表最顶部

**⚡ 修改指引**:
- **修改位置**: 编辑 `_config.yml` 中的 `author.location: "Your City, Country"`
- **修改机构**: 编辑 `_config.yml` 中的 `author.employer: "Your Organization"`
- **隐藏信息**: 将对应字段留空或删除
- **修改图标**: 编辑 `author-profile.html` 中的 Font Awesome class
