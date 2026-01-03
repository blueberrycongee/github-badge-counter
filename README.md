# GitHub Profile Visitor Counter

一个简单的 GitHub Profile 访客计数器，部署在 Vercel 上。

## 预览效果

部署后，徽章效果类似这样：

| 样式 | 预览 |
|------|------|
| Classic (默认) | ![Profile Views](https://img.shields.io/badge/Profile%20Views-12,345-purple) |
| Flat | ![Profile Views](https://img.shields.io/badge/Profile%20Views-12,345-purple?style=flat) |
| 绿色 | ![Views](https://img.shields.io/badge/Views-6,789-green) |
| 橙色 | ![Visitors](https://img.shields.io/badge/Visitors-999-orange) |
| 粉色 | ![👀 Views](https://img.shields.io/badge/👀%20Views-2,048-pink) |

## 使用方法

在你的 GitHub Profile README 中添加：

```markdown
![Profile Views](https://your-domain.vercel.app/api/counter)
```

### 自定义参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `label` | Profile Views | 左侧标签文字 |
| `color` | purple | 颜色 (blue, green, red, orange, yellow, purple, pink, grey, cyan) |
| `style` | classic | 样式 (classic, flat) |

### 示例

```markdown
<!-- 默认紫色 -->
![Profile Views](https://your-domain.vercel.app/api/counter)

<!-- 绿色 + 自定义标签 -->
![Views](https://your-domain.vercel.app/api/counter?label=Views&color=green)

<!-- 带 emoji -->
![👀 Views](https://your-domain.vercel.app/api/counter?label=👀%20Views&color=pink)

<!-- 扁平样式 -->
![Profile Views](https://your-domain.vercel.app/api/counter?style=flat)
```

## 部署

1. Fork 或 Clone 此仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 在项目设置 → Storage → 创建 KV 数据库并连接
4. 部署完成后即可使用

## 技术栈

- Next.js 15 (App Router)
- Vercel KV (Redis)
- badgen (SVG 徽章生成)
