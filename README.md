# CalculatorX Web

CalculatorX 官方产品网站，面向用户介绍这款为 HarmonyOS NEXT 打造的原生数学工作区。

- 官方网站：<https://calcx.startyi.com>
- CalculatorX 源码：<https://github.com/StartYR/CalculatorX>
- AppGallery：<https://appgallery.huawei.com/app/detail?id=com.startyi.calcx>
- 使用文档：<https://calcx.startyi.com/docs>


## 项目定位

本仓库只负责 CalculatorX 的产品官网，包括产品价值介绍、主要能力展示、下载入口、双语页面、法律页面与搜索引擎元数据。它不包含 CalculatorX 应用本体，也不维护 `/docs` 下的使用教程。

网站当前重点介绍 CalculatorX 1.6.5 的已发布能力：

- 科学计算、精确结果与微积分
- 一元方程及最多六元方程组
- 1×1 至 6×6 矩阵与常用线性代数运算
- 五类函数图像与最多十条函数叠加
- 172 种货币与资产的汇率换算
- 跨模块历史记录

产品事实与版本信息最终以 CalculatorX 主应用仓库为准；本网站是面向用户的产品表达层。

## 页面与路由

| 路径 | 内容 |
| --- | --- |
| `/` | 中文产品主页 |
| `/en/` | 英文产品主页 |
| `/docs` | 独立维护的使用文档 |
| `/privacy/` | 隐私政策 |
| `/agreement/` | 用户协议 |
| `/help/` | 跳转到 `/docs` 的兼容入口 |

中文和英文主页共享同一套 React 组件，文案分别位于 `src/data/locales/zh.ts` 与 `src/data/locales/en.ts`。

## 技术概览

- React 18、TypeScript、Vite 6
- Vite 多页面构建，输出中文与英文静态入口
- 结构化双语内容模型，而不是在组件中散落文案
- GSAP 固定场景、滚动叙事、响应式降级与明暗主题
- Puppeteer 构建后预渲染，生成可直接部署的 HTML
- GitHub Actions 同时发布到 GitHub Pages 与阿里云 ECS

更完整的实现说明见 [技术架构](./docs/ARCHITECTURE.md)。

## 本地开发

建议使用 Node.js 20，并通过锁文件安装依赖：

```bash
npm ci
npm run dev
```

常用命令：

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动 Vite 开发服务器 |
| `npm run build` | 类型检查、多页面构建并预渲染中英文主页 |
| `npm run preview` | 本地预览生产构建 |

`npm run build` 的产物位于 `dist/`。预渲染脚本会优先使用 `PUPPETEER_EXECUTABLE_PATH` 指定的浏览器，也会尝试查找 Windows 上常见的 Chrome 或 Edge 安装位置。

## 从哪里开始阅读

- [项目全貌](./docs/PROJECT_OVERVIEW.md)：网站为什么存在、当前展示什么，以及它和另外两个 CalculatorX 仓库的关系。
- [技术架构](./docs/ARCHITECTURE.md)：源码分层、运行时数据流、双语与主题机制、构建和部署链路。

如果只是修改产品文案，通常从 `src/data/locales/` 开始；如果要调整页面结构，从 `src/App.tsx` 和 `src/components/sections/` 开始。
