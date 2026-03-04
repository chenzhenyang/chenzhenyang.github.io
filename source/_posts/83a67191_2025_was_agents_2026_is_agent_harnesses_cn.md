---
title: "2025 是 Agent 之年，2026 是 Agent Harness 之年"
date: 2026-03-05 00:30:21
updated: 2026-03-05 00:30:21
tags:
  - AI
  - Agent
  - Harness
categories:
  - Technology
---

![Image: NotebookLM](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_YKFuJUVo4ZdWqeXT5hIQZw.png)

每个人都在构建 AI agent。大多数人都在构建错误的东西。

他们在优化模型，而不是优化 harness。**模型是商品，harness 才是护城河。**

Claude Code 证明了这一点。什么正在爆发？不是 Claude 本身。是 Claude Code。因为 Claude Code 是围绕相同模型构建的更好的 harness。

## What an Agent Harness Actually Is

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_sTGCLdS1Ds0xMxGXSFelXg.png)

Agent harness 包裹在模型周围，用于可靠地管理长期运行的任务。

模型生成响应。Harness 处理其他一切。人类审批。子 agent 协调。文件系统访问。提示预设。生命周期钩子。规划和执行。

把模型想象成引擎。Harness 是汽车。最好的引擎没有方向盘和刹车也无处可去。

[Anthropic 的 computer use](https://www.anthropic.com/news/3-5-models-and-computer-use) 证明了这一点。模型生成动作。Harness 控制允许的内容、验证动作，并管理人类干预。

## Why Harnesses Matter More Than Models

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_E18ZPWkexL4swv5t1Lh-LQ.png)

*三家公司证明 harness 成为了竞争护城河。*

**Manus 在六个月内重写了他们的 harness 五次。** 相同的模型。五种架构。每次重写都提高了可靠性和任务完成率。模型没有改变。Harness 改变了。

**LangChain 在一年内重新架构了 Deep Research 四次。** 不是因为模型改进了。因为他们发现了更好的方法来构建工作流、管理上下文和协调子任务。架构在进化，而模型保持不变。

**Vercel 移除了 80% 的 agent 工具并获得了更好的结果。** 更少的工具意味着更少的步骤、更少的 token、更快的响应、更高的成功率。通过减法实现 harness 改进。两周前发布。

模型质量很重要。Harness 质量决定了 agent 是否真正有效。

## The 6 Components That Make Harnesses Work

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_yQop364wloQGLUumA6Yybw.png)

**组件 1：Human-in-the-loop controls（人类在环控制）。** Agent 在关键决策时暂停。删除数据库？扣款？发送客户邮件？Harness 需要审批。[Replit 的 agent](https://blog.replit.com/ai-agent-code) 生成代码，但在部署前需要人类确认。

**组件 2：Filesystem access management（文件系统访问管理）。** Harness 定义可访问的目录、允许的操作和冲突解决。Claude Code 的 harness 精确控制模型执行的文件系统操作。永不触碰系统文件。

**组件 3：Tool call orchestration（工具调用编排）。** 糟糕的编排会创建无限循环和级联故障。Vercel 的 80% 工具削减揭示了 harness 思维。正确的工具、正确的时间、正确的顺序、适当的错误处理。

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_hJQ2lrU4d2-1ny51pAIqyw.png)

**组件 4：Sub-agent coordination（子 agent 协调）。** 复杂任务需要专门的 agent。一个研究，另一个写作，第三个审查。Harness 管理通信、合并输出、解决冲突。LangChain 的 Deep Research 协调多个研究子 agent。

**组件 5：Prompt preset management（提示预设管理）。** 不同的任务需要不同的指令。代码审查与代码生成。Bug 修复与功能开发。Harness 维护提示库。

**组件 6：Lifecycle hooks（生命周期钩子）。** 初始化上下文。运行任务。保存状态。处理故障。重试逻辑。日志记录。Harness 实现可靠的工作流。

## Why Better Models Don't Solve Harness Problems

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_JdJgp19jrmxtKuOV5U-9YQ.png)

*更好的模型让 harness 更重要，而不是更不重要。*

**Capability expansion（能力扩展）。** 更好的模型能做更多。更多能力意味着更多故障模式。更多故障模式需要复杂的错误处理。

**Cost optimization（成本优化）。** 更好的模型成本更高。好的 harness 将简单任务路由到便宜模型，复杂任务路由到昂贵模型。

**Reliability requirements（可靠性要求）。** 生产需要 99.9% 的正常运行时间。模型是概率性的。Harness 实现重试逻辑、回退和验证。

**Organizational integration（组织集成）。** 模型无法处理身份验证、权限、速率限制、合规性。Harness 可以。

## The Old Moat Versus the New Moat

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_ZSqRP4XBWcpu2B8P36qEnQ.png)

**Old moat: model quality（旧护城河：模型质量）。** OpenAI 有 GPT-4。Anthropic 有 Claude。Google 有 Gemini。模型差异化创造了优势。

这个护城河正在侵蚀。模型质量正在趋同。GPT-4、Claude Sonnet、Gemini Pro 表现相似。你可以在六个月内训练出有竞争力的模型。

**New moat: harness quality（新护城河：harness 质量）。** 构建可靠的 harness 需要数千个工程小时。Manus 花了六个月进行五次重写。LangChain 花了一年时间进行四种架构。

你无法从 Hugging Face 下载 harness。你必须构建、测试、失败、学习、重建。早期构建优秀 harness 的公司拥有结构性优势。

## What "Getting Out of the Model's Way" Means

最好的 harness 改进通常来自少做。

Vercel 从全面的工具库开始。搜索、代码、文件、API 工具。每种能力。结果很糟糕。Agent 感到困惑，做出冗余调用，采取不必要的步骤。

Vercel 剥离到基本要素。移除冗余选项。简化决策。Agent 变得更少选择，更快更可靠。

Phil Schmid 关于 agent 架构的研究支持这一点。简单的 harness 通常优于复杂的脚手架。模型足够聪明。Harness 只需防止灾难性故障。

## The Three Harness Design Principles

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_nAlcgV6-xErnbO7jrMj28Q.png)

**Principle 1: Minimal necessary intervention（最小必要干预）。** 只在模型无法自我纠正时干预。让模型处理歧义。在不可逆操作或安全边界时介入。

**Principle 2: Progressive disclosure（渐进式披露）。** 从有限的工具和权限开始。随着任务需要而扩展。除非需要，否则不要给数据库删除权限。默认最小权限。

**Principle 3: Fail-fast with recovery（快速失败并恢复）。** 快速检测故障。不要让 agent 陷入困境。当故障发生时，提供恢复路径。用不同方法重试。回退到人类。永不静默失败。

## How to Build Your Harness

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_psIQJ1aQBrgjmdQKHbeguQ.png)

**Start with one task end-to-end（从头到尾开始一个任务）。** 选择一个能交付价值的 agent 任务。构建最小 harness 使其可靠。部署。从生产中学习。

**Instrument everything（工具化一切）。** 记录每个工具调用、错误、人类干预、超时。你无法改进你无法衡量的东西。

**Iterate based on failure modes（基于故障模式迭代）。** 每个故障揭示缺失的护栏。添加护栏。部署。找到下一个故障。

**Measure outcomes, not activity（衡量结果，而不是活动）。** 跟踪任务完成，而不是 token 计数。衡量满意度，而不是速度。优化可靠性，而不是能力。

## The Timeline That Matters

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_IgJvvJJIqfHY1x9DV5vtLw.png)

Manus 花了六个月进行五次重写。LangChain 花了一年时间进行四种架构。世界级的团队拥有资源。你的时间线将相似或更长。

你可以在几周内微调有竞争力的模型。构建生产就绪的 harness 需要数月或数年。现在投资 harness 工程的公司构建了持久的优势。

## The Bottom Line

2025 证明了 agent 可以工作。2026 年是让 agent 可靠工作。

模型是商品。Claude、GPT-4、Gemini 表现相似。Harness 决定了 agent 是成功还是失败。

优秀的 harness 管理人类审批、文件系统访问、工具编排、子 agent、提示和生命周期。它们最小化干预，但防止灾难性故障。

Manus、LangChain 和 Vercel 花费了数千个工程小时构建 harness。这种投资创造了模型改进无法克服的护城河。

> Stop optimizing models. Start building harnesses. The competitive advantage in 2026 comes from infrastructure, not intelligence.
> 
> 停止优化模型。开始构建 harness。2026 年的竞争优势来自基础设施，而不是智能。

早期弄清楚 harness 的人是赢家。其他人用商品模型追赶。

![Image](https://raw.githubusercontent.com/chenzhenyang/images/master/litercrawler-test/8d040aba/1_jhPjhiivX8molWl9-w8CVw.png)

另外，如果你在 [LinkedIn](https://www.linkedin.com/in/aagupta/) 上想联系，让我们开始吧！

---

**原文链接**: [https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e](https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e)
