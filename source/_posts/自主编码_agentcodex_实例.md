---
title: "自主编码 Agent：Codex 实例"
date: 2026-03-11 20:44:33
updated: 2026-03-11 20:44:33
tags:
  - AI
  - Technology
categories:
  - Technology
origin_title: "Autonomous coding agents: A Codex example"
author: "Martin Fowler"
---


_原文来源：Martin Fowler_

_抓取时间：2026-03-11 20:40:01_

---

# 自主编码 Agent：Codex 实例

Birgitta 是 Thoughtworks 的杰出工程师（Distinguished Engineer）和 AI 辅助交付专家。她拥有超过 20 年的软件开发、架构师和技术领导者经验。

本文是"探索生成式 AI（Exploring Gen AI）"系列的一部分。该系列记录了 Thoughtworks 技术专家探索将生成式 AI（gen ai）技术用于软件开发的过程。

2025 年 6 月 4 日

在过去的几周里，多个"自主后台编码 Agent（autonomous background coding agents）"相继发布。

- **监督式编码 Agent（Supervised coding agents）**：由开发者驱动和指导的交互式聊天 Agent。在 IDE 中本地创建代码。工具示例：GitHub Copilot、Windsurf、Cursor、Cline、Roo Code、Claude Code、Aider、Goose 等
- **自主后台编码 Agent（Autonomous background coding agents）**：无头 Agent（Headless agents），你可以派遣它们自主完成整个任务。代码在专为该 Agent 启动的环境中创建，通常会产生一个拉取请求（pull request）。其中一些也可以在本地运行。工具示例：OpenAI Codex、Google Jules、Cursor 后台 Agent、Devin 等

我给 OpenAI Codex 和其他一些 Agent 分配了一个任务，想看看能学到什么。以下是某次 Codex 运行的记录，帮助你了解幕后情况并得出自己的结论，随后是我的一些观察。

## 任务

我们有一个名为 Haiven 的内部应用程序，用作软件交付提示库（prompt library）的演示前端，并在软件团队上尝试不同的 AI 辅助体验。该应用程序的代码是公开的。

我给 Codex 的任务是关于以下 UI 问题：

**实际情况：**

**我希望 Agent 做的：**

**提示（Prompt）：** 当我们在仪表板上创建过滤标签时，我们根据已有的类别创建人类可读的标签。"client-research"被转换为"Client-Research"，"deliveryManagement"被转换为"DeliveryManagement"。请改进"类别转人类可读（category-to-human-readable）"逻辑的复杂度，使标签对用户显示为"Client Research"和"Delivery Management"

```
When we create the filter labels on the dashboard, we create human readable labels based on the categories we have. "client-research" is turned into "Client-Research", "deliveryManagement" into "DeliveryManagement". Improve the sophistication of the "category-to-human-readable" logic so that the labels are appearing to the user as "Client Research" and "Delivery Management"
```

这个任务是：

- 相对较小
- 典型的"美化（cosmetics）"任务，不太紧急，可能会一再被降低优先级

## Agent 日志

我在这里分享详细的日志，让你了解幕后发生了什么。

以下是 Codex 中日志视图的样子：

**首先收集信息**

前 17 条日志都是关于读取 AGENTS.md 和 README.md 的：

- "我需要检查仓库根目录中的 AGENTS.md 获取指示。"
- 查找 AGENTS.md，但我实际上把它命名为 AGENT.md，这导致了一些来回反复，直到它弄明白
- 读取 README.md
- 查看 .pre-commit，找到测试设置

下表逐字列出了其余的日志消息。在每条消息之后，Agent 执行了一个命令，其中一些我添加了实际命令以供参考。我确信这些日志消息只是幕后实际发生的内容的摘要，因为这些消息太短了，无法代表模型必须经历的完整"思考"过程。

**使用大量 grep 搜索相关代码**

```
grep
```

```
grep -R "human readable" -n
```

```
grep -R "human-readable" -n ui/src | head
```

```
grep -R "Human" -n | head
```

```
grep -R "human" app -n | head
```

```
grep -R "human" app | wc -l
```

```
wc
```

```
head
```

**终于接近了！** 标签之前是通过 CSS 粗略大写的，它找到了：

```
root@0c5de6379b32:/workspace/haiven# grep -R "capitalize" -n ui/src | head
ui/src/pages/index.js:250:                                    className="capitalize"
ui/src/styles/globals.css:1915:.capitalize {
ui/src/styles/globals.css:1916:  text-transform: capitalize;
ui/src/styles/globals.css:1931:  text-transform: capitalize;
```

**现在它开始在 app 文件夹中检查更多相关代码**，后端在那里。它什么都没找到，这是正确的，那里没有相关的东西：

```
app
```

```
grep -R "categories" -n app | head
```

```
grep -R "client" -n app | head
```

```
grep -R "categories:" -n app/tests | head
```

```
grep -R "client-research" -n
```

```
sed -n '1,100p' ui/src/app/_navigation_items.js
```

**现在它回到 ui 文件夹搜索** —— 它之前找到了 CSS，现在正在寻找可以重用来解决任务的现有代码。这很好，因为我们确实已经有一个类似的函数，它找到了：

```
grep -R "to.*Readable" -n ui/src | head
```

**它现在发现了现有函数实现中的一个缺口：**

**更新它想要更改的函数的测试：**

```
git status --short
```

你可以在 Codex 中配置一些环境启动命令，我把它配置为 `yarn install`，结果如下：

```
yarn install
```

```
git log --oneline -n 1
```

```
grep yarn .gitignore
```

```
cat ui/.gitignore
```

**实际的代码更改：**

```
sed -n '1,30p' ...
```

```
git diff
```

**接下来运行代码检查器（linter），不错：**

```
cd ui && npx prettier -w ...
```

```
prettier
```

**尝试运行测试 —— 失败了：**

```
Error: Not implemented: window.getComputedStyle(elt, pseudoElt)
```

**跑题去设置 venv**，这完全没必要，因为它只计划更改前端代码：

**放弃测试，现在收尾更改：**

```
nl -ba ui/src/pages/index.js | sed -n '12,28p'
```

**以下是 Codex 创建的完整拉取请求（pull request）。**

## 观察

### 暴力文本搜索（Brute text search）

我发现有趣的是，Codex 和我使用的大多数其他编码助手越来越倾向于使用简单的文本搜索来查找相关代码。在上面的日志中，你可以看到 Codex 如何通过 `grep` 遍历一堆搜索词来查找相关代码片段（"human"、"human readable"、"humanReadable"等）。我觉得这有趣的原因是，已经有很多看似更复杂的代码搜索机制被实现，比如使用向量/嵌入（vectors/embeddings）对代码库索引进行语义搜索（Cursor、GH Copilot、Windsurf），或者使用抽象语法树（abstract syntax tree）作为起点（Aider、Cline）。后者仍然相当简单，但用 `grep` 进行文本搜索是最简单的。

```
grep
```

似乎工具创作者发现这种简单的搜索毕竟还是最有效的？或者他们在这里做了某种权衡，在简单性和有效性之间？

### 远程开发环境是这些 Agent"后台"工作的关键

以下是 Codex 环境配置屏幕的截图（截至 2025 年 5 月底）。截至目前，你可以配置容器镜像、环境变量、密钥和启动脚本。他们指出，在该启动脚本执行后，环境将不再能访问互联网，这将沙盒化（sandbox）环境并减轻一些安全风险。

对于这些"自主后台 Agent（autonomous background agents）"，为 Agent 设置的远程开发环境（remote dev environment）的成熟度至关重要，这是一个棘手的挑战。例如在这种情况下，Codex 没能运行测试。

事实证明，当拉取请求创建时，确实有两个测试因回归（regression）而失败，这很可惜，因为如果它知道的话，本可以轻松地修复测试，这是一个微不足道的修复：

这个特定项目 Haiven 实际上有一个脚本化的开发者安全网，形式是相当详细的 `.pre-commit` 配置。理想情况下，Agent 应该能在创建拉取请求之前执行完整的 pre-commit。然而，要运行所有步骤，它需要：

- Node 和 yarn（运行 UI 测试和前端 linter）
- Python 和 poetry（运行后端测试）
- Semgrep（用于安全相关的静态代码分析）
- Ruff（Python linter）
- Gitleaks（密钥扫描器）

……当然，所有这些都必须有正确的版本。

如果你想真正"后台"运行这些 Agent 产品，而不是在开发者机器上运行，弄清楚如何顺利启动恰好适合 Agent 的环境是关键。这不是一个新问题，在某种程度上已经解决，毕竟我们在 CI 流水线（CI pipelines）中一直这样做。但这也不简单，目前我的印象是，环境成熟度在大多数这些产品中仍然是一个问题，配置和测试环境设置的用户体验与 CI 流水线一样令人沮丧，甚至更糟。

### 解决方案质量

我在 OpenAI Codex 中运行了相同的提示 3 次，在 Google 的 Jules 中运行了 1 次，在 Claude Code 中本地运行了 2 次（虽然它不是完全自主的，我需要手动对所有内容说"yes"）。虽然这是一个相对简单的任务和解决方案，但结果之间存在质量差异。

先说好消息：Agent 每次都提出了可行的解决方案（暂且不说破坏性的回归测试，老实说我实际上并没有运行每一个解决方案来确认）。我认为这个任务是生成式 AI Agent 已经能够独立工作的任务和规模的很好例子。但解决方案质量有两个方面存在差异：

- **发现可重用的现有代码**：在这里的日志中，你会发现 Codex 发现了一个现有组件"动态数据渲染器（dynamic data renderer）"，它已经有将技术键转换为人类可读版本的功能。在我做的 6 次运行中，只有 2 次相应的 Agent 找到了这段代码。在其他 4 次中，Agent 创建了一个带有新函数的新文件，导致代码重复。

- **发现应该使用此逻辑的其他位置**：团队目前正在开发一个新功能，也在下拉菜单中向用户显示类别名称。在 6 次运行中的 1 次中，Agent 实际上发现了这一点，并建议也更改该位置以使用新功能。

我将这些结果放入表格中，以说明在分配给 Agent 的每个任务中，我们有多个质量维度，即我们希望"正确"的事情。每次 Agent 运行都可能在其中一个或多个维度上"出错"，维度越多，Agent 完全按照我们想要的方式完成所有事情的可能性就越低。

### 沉没成本谬误（Sunk cost fallacy）

我一直在想 —— 假设一个团队对这种类型的任务使用后台 Agent，即那些有点小、既不重要也不紧急的任务。Haiven 是一个面向内部的应用程序，目前只分配了两名开发者，所以这种美化修复实际上被认为是低优先级的，因为它会占用开发者处理更重要事情的精力。当 Agent 只部分成功而不是完全成功时 —— 团队会在什么情况下丢弃拉取请求，在什么情况下会投入时间完成最后 20%，即使花费精力在这上面已经被降低优先级？这让我想知道我们最终可能会遇到多少未优先处理的尾端工作。

---

**最新文章（3 月 4 日）：**
Humans and Agents in Software Engineering Loops

**上一篇文章：**
Building Custom Tooling with LLMs

**下一篇文章：**
I still care about the code