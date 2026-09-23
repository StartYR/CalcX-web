# CalcX-web 项目全貌

## 这是什么项目

CalcX-web 是 CalculatorX 的官方产品网站。它的核心任务不是复刻应用功能，而是用清楚、可信且具有产品感的方式回答用户最关心的几个问题：

1. CalculatorX 是什么？
2. 它能解决哪些问题？
3. 它为什么适合在 HarmonyOS NEXT 上使用？
4. 用户可以从哪里安装、阅读帮助或查看源码？

因此，本项目是 CalculatorX 的“产品介绍层”。真正的计算能力、界面行为和版本状态来自主应用，详细操作说明则由独立的文档项目维护。

## CalculatorX 当前形态

CalculatorX 被定位为面向 HarmonyOS NEXT 的原生数学工作区，而不只是一个四则运算工具。网站当前围绕以下已发布能力组织内容：

- 科学计算与符号计算，包括三角、对数、导数、积分、极限、求和与求积；
- 分数、根式、π 等精确形式与高精度近似结果之间的切换；
- 一元方程以及最多六元方程组；
- 1×1 至 6×6 矩阵、逆、转置、行列式、秩、rref、迹和特征值；
- 显函数、参数方程、极坐标、隐函数与独立点五类图像，最多同时绘制十条；
- 172 种货币与资产的汇率换算、搜索、排序、缓存和离线查看；
- 按模块保存、检索并回填表达式与结果的历史记录。

网站目前展示的产品版本为 1.6.5（在 `src/data/version.ts` 中集中维护）。这个数字属于产品内容，不等同于 `package.json` 中网站工程自身的版本号。

## 三个仓库的职责

CalculatorX 相关内容分布在三个项目中：

| 项目 | 负责内容 | 是否是本仓库的事实来源 |
| --- | --- | --- |
| `CalculatorX` | HarmonyOS NEXT 应用本体、ArkTS/C++ 实现、版本和真实功能 | 是，产品能力与版本的最高优先级来源 |
| `CalcX-docs` | 面向用户的详细帮助、教程与功能说明 | 是，适合核对用户可见行为和术语 |
| `CalcX-web` | 产品官网、品牌表达、下载入口、双语页面和法律入口 | 否，它应当跟随前两者更新 |

新功能发布后，不能仅凭旧版网页文案判断产品状态。应先核对主应用实现，再核对用户文档，最后更新本网站的结构化内容与元数据。

## 网站讲述顺序

主页由 `src/App.tsx` 组合，内容顺序本身也是产品叙事的一部分：

1. `HeroSection`：一句话定位、主要下载入口与关键产品数字；
2. `CapabilitiesSection`：概览六组核心能力；
3. `ShowcaseSection`：通过固定滚动场景依次解释精确计算、函数图像、方程与矩阵、汇率与历史；
4. `ExperienceSection`：以公式求解过程解释触屏输入、本地优先和原生交互；
5. `TechnologySection`：用横向计算管线介绍 ArkUI、MathLive、N-API 与 C++ 计算链路；
6. `OpenSourceSection`：连接开源属性、源码与架构资料；
7. `DownloadSection`：汇总 AppGallery 与 GitHub Releases 获取方式。

网站使用“先解释价值，再展示能力，最后说明技术和获取方式”的结构。新增内容前应先判断它属于现有叙事的哪一层，而不是默认增加一个新区块。

## 本仓库负责的内容

- 中文 `/` 与英文 `/en/` 产品主页；
- 页面内导航、响应式布局、明暗主题与移动端菜单；
- 产品文案、能力数据和展示场景；
- AppGallery、GitHub、使用文档和问题反馈入口；
- 隐私政策、用户协议和旧帮助入口；
- canonical、hreflang、Open Graph、Twitter Card、JSON-LD、站点地图和 robots.txt；
- 静态构建、预渲染及部署配置。

## 本仓库不负责的内容

- CalculatorX 的 ArkTS 或 C++ 功能实现；
- `/docs` 中的教程和帮助正文；
- AppGallery 发布、签名和安装包管理；
- 尚未在主应用中发布的功能承诺。

`public/help/index.html` 只负责把旧的 `/help/` 地址引导到 `/docs`，并不承载另一套帮助中心。

## 内容事实的判断顺序

当网站内容与其他资料不一致时，按以下顺序判断：

1. CalculatorX 当前源码和配置；
2. CalculatorX 当前用户文档；
3. CalcX-web 的中英文内容与页面元数据；
4. 历史 README、旧截图或旧宣传文案。

同一个产品事实可能同时出现在 `src/data/locales/zh.ts`、`src/data/locales/en.ts`、`index.html`、`en/index.html` 和结构化数据中。理解这些重复位置有助于避免只更新页面正文、却留下旧的搜索摘要或分享卡片。

### 版本号更新机制

产品版本号已收敛至统一入口：
- **唯一定义源**：`src/data/version.ts` 中的 `PRODUCT_VERSION`；
- **全站自动化链路**：
  - 中英文主页的 Hero 指标项（`zh.ts` 与 `en.ts` 中的 `proof`）直接绑定该常量；
  - 下载区域底部标识（`DownloadSection.tsx`）动态渲染该常量；
  - 中英文静态入口（`index.html` 与 `en/index.html`）中的 JSON-LD `softwareVersion` 采用占位符，由 `vite.config.ts` 中的 Vite 插件在构建与预渲染时自动注入替换；
- **更新操作**：发布新版本时，**只需修改 `src/data/version.ts` 中的字符串**，然后执行 `npm run build` 即可，无需手动修改多个文件。

## 当前实现特征

- 中英文共用组件和类型，差异集中在结构化内容文件中；
- 语言由 URL 决定，不依赖运行时翻译服务；
- 主题默认跟随系统，并允许用户手动选择后写入本地存储；
- 产品展示支持浅色与深色图片；图片不可用时，页面会显示内置视觉占位；
- 构建结果是可直接由静态服务器托管的 `dist/` 目录；
- `/docs` 由外部文档项目提供，因此不进入本仓库的 Vite 页面构建。

## 推荐阅读顺序

第一次接触本项目时，建议依次查看：

1. 根目录 [README](../README.md)；
2. [技术架构](./ARCHITECTURE.md)；
3. `src/App.tsx`，了解页面组合；
4. `src/data/content.types.ts`，了解内容模型；
5. `src/data/locales/zh.ts` 与 `src/data/locales/en.ts`，了解实际页面内容；
6. `vite.config.ts` 与 `scripts/prerender.mjs`，了解产物如何生成。

完成这组阅读后，通常已经足以定位一次文案更新、页面结构调整或构建问题。
