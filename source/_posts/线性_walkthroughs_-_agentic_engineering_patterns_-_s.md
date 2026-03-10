---
title: "线性 walkthroughs - Agentic Engineering Patterns - Simon Willison 的 Weblog"
date: 2026-03-10 21:42:31
updated: 2026-03-10 21:42:31
tags:
  - AI
  - Technology
categories:
  - Technology
---

# 线性 walkthroughs - Agentic Engineering Patterns - Simon Willison 的 Weblog

有时，让编码代理为你提供代码库的结构化 walkthrough 是很有用的。

也许是你需要快速了解的现有代码，也许是你自己写的但忘记了细节的代码，或者也许你是 vibe coded 整个项目，需要了解它实际是如何工作的。

具有合适 agent harness 的前沿模型可以构建详细的 walkthrough，帮助你理解代码是如何工作的。

## 使用 Showboat 和 Present 的示例

我最近在我的 Mac 上使用 Claude Code 和 Opus 4.6 [vibe coded 了一个 SwiftUI 幻灯片演示应用](https://simonwillison.net/2026/Feb/25/present/)。

我当时在谈论 2025 年 11 月到 2026 年 2 月之间前沿模型的进展，我喜欢在我的演讲中至少包含一个噱头（一个 [STAR moment](https://simonwillison.net/2019/Dec/10/better-presentations/) - Something They'll Always Remember，他们将永远记住的时刻）。在这种情况下，我决定噱头是在演示结束时揭示幻灯片机制本身就是 vibe coding 能做什么的一个例子。

我将代码发布 [到 GitHub](https://github.com/simonw/present)，然后意识到我对它实际如何工作一无所知——我通过提示让它整个存在（[部分转录在这里](https://gisthost.github.io/?bfbc338977ceb71e298e4d4d5ac7d63c)），而没有注意它编写的代码。

所以我启动了一个新的 Claude Code for web 实例，指向我的仓库并提示：

[Showboat](https://github.com/simonw/showboat)

是我构建的一个工具，用于帮助编码代理编写展示他们工作的文档。你可以看到

[showboat --help 输出在这里](https://github.com/simonw/showboat/blob/main/help.txt)

，它旨在为模型提供使用该工具所需的一切信息。

`showboat note` 命令将 Markdown 添加到文档中。`showboat exec` 命令接受一个 shell 命令，执行它然后将命令及其输出都添加到文档中。

通过告诉它使用"sed 或 grep 或 cat 或任何你需要包含你正在谈论的代码片段的东西"，我确保 Claude Code 不会手动将代码片段复制到文档中，因为这可能会引入幻觉或错误的风险。

这效果非常好。这是 [Claude Code 使用 Showboat 创建的文档](https://github.com/simonw/present/blob/main/walkthrough.md)，它详细讲解了所有六个 `.swift` 文件，并提供了关于代码如何工作的清晰且可操作的解释。

仅仅通过阅读这个文档，我就学到了很多关于 SwiftUI 应用如何构建的知识，并吸收了一些关于 Swift 语言本身的扎实细节。

如果你担心 LLM 可能会降低你学习新技能的速度，我强烈建议采用像这样的模式。即使是一个约 40 分钟的 vibe coded 玩具项目，也可以成为探索新生态系统并掌握一些有趣新技巧的机会。

---

**原文链接**: [https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/](https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/)
