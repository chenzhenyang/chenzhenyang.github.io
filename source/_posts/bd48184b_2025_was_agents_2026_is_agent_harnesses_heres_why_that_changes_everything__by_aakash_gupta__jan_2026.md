---
title: "2025 Was Agents. 2026 Is Agent Harnesses. Here’s Why That Changes Everything. | by Aakash Gupta | Jan, 2026 | Medium"
skill_id: bd48184b
generated: 2026-03-04T22:31:03.891426
original_url: https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e
---
Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*YKFuJUVo4ZdWqeXT5hIQZw.png)

Image: NotebookLM

# 2025 Was Agents. 2026 Is Agent Harnesses. Here’s Why That Changes Everything.

[![Aakash Gupta](https://miro.medium.com/v2/resize:fill:64:64/1*tURKWAgnK21aYn3DF_quUQ.png)](/?source=post_page---byline--073e9877655e---------------------------------------)

Everyone’s building AI agents. Most are building the wrong thing.

They’re optimizing models when they should be optimizing harnesses. The model is commodity. The harness is moat.

Claude Code proves this. What’s breaking out? Not Claude alone. Claude Code. Because Claude Code is a better harness wrapped around the same model.

## What an Agent Harness Actually Is

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*sTGCLdS1Ds0xMxGXSFelXg.png)

An agent harness wraps around a model to manage long-running tasks reliably.

The model generates responses. The harness handles everything else. Human approvals. Sub-agent coordination. Filesystem access. Prompt presets. Lifecycle hooks. Planning and execution.

Think of the model as an engine. The harness is the car. Best engine without steering and brakes goes nowhere useful.

[Anthropic’s computer use](https://www.anthropic.com/news/3-5-models-and-computer-use) demonstrates this. The model generates actions. The harness controls what’s allowed, validates actions, and manages human intervention.

## Why Harnesses Matter More Than Models

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*E18ZPWkexL4swv5t1Lh-LQ.png)

 _Three companies prove harnesses became the competitive moat._

**Manus rewrote their harness five times in six months.** Same models. Five architectures. Each rewrite improved reliability and task completion. The model didn’t change. The harness did.

**LangChain re-architected Deep Research four times in one year.** Not because models improved. Because they discovered better ways to structure workflows, manage context, and coordinate sub-tasks. Architecture evolved while models stayed constant.

**Vercel removed 80% of their agent’s tools and got better results.** Fewer tools meant fewer steps, fewer tokens, faster responses, higher success. Harness improvement through subtraction. Shipped two weeks ago.

Model quality matters. Harness quality determines whether agents actually work.

## The 6 Components That Make Harnesses Work

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*yQop364wloQGLUumA6Yybw.png)

**Component 1: Human-in-the-loop controls.** Agents pause at critical decisions. Delete database? Charge card? Send customer emails? Harness requires approval. [Replit’s agent](https://blog.replit.com/ai-agent-code) generates code but requires human confirmation before deployment.

**Component 2: Filesystem access management.** Harnesses define accessible directories, allowed operations, and conflict resolution. Claude Code’s harness controls exactly what filesystem operations the model performs. Never touch system files.

**Component 3: Tool call orchestration.** Bad orchestration creates infinite loops and cascading failures. Vercel’s 80% tool reduction reveals harness thinking. Right tools, right times, right order, proper error handling.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*hJQ2lrU4d2-1ny51pAIqyw.png)

**Component 4: Sub-agent coordination.** Complex tasks need specialized agents. One researches, another writes, a third reviews. Harnesses manage communication, merge outputs, resolve conflicts. LangChain’s Deep Research coordinates multiple research sub-agents.

**Component 5: Prompt preset management.** Different tasks need different instructions. Code review versus code generation. Bug fixing versus feature development. Harnesses maintain prompt libraries.

**Component 6: Lifecycle hooks.** Initialize context. Run task. Save state. Handle failures. Retry logic. Logging. Harnesses implement reliable workflows.

## Why Better Models Don’t Solve Harness Problems

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*JdJgp19jrmxtKuOV5U-9YQ.png)

 _Better models make harnesses more important, not less._

**Capability expansion.** Better models can do more. More capabilities mean more failure modes. More failure modes require sophisticated error handling.

**Cost optimization.** Better models cost more. Good harnesses route simple tasks to cheap models, complex tasks to expensive ones.

**Reliability requirements.** Production needs 99.9% uptime. Models are probabilistic. Harnesses implement retry logic, fallbacks, and validation.

[](https://medium.com/write?source=promotion_paragraph---post_body_banner_home_for_stories_blocks--073e9877655e---------------------------------------)

**Organizational integration.** Models can’t handle authentication, permissions, rate limiting, compliance. Harnesses do.

## The Old Moat Versus the New Moat

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*ZSqRP4XBWcpu2B8P36qEnQ.png)

**Old moat: model quality.** OpenAI had GPT-4. Anthropic had Claude. Google had Gemini. Model differentiation created advantage.

This moat is eroding. Model quality converging. GPT-4, Claude Sonnet, Gemini Pro perform similarly. You can train competitive models in six months.

**New moat: harness quality.** Building reliable harnesses requires thousands of engineering hours. Manus spent six months on five rewrites. LangChain spent a year on four architectures.

You can’t download harnesses from Hugging Face. You have to build, test, fail, learn, rebuild. Companies that built great harnesses early have structural advantages.

## What “Getting Out of the Model’s Way” Means

Best harness improvements often come from doing less.

Vercel started with comprehensive tool libraries. Search, code, file, API tools. Every capability. Results were terrible. Agents got confused, made redundant calls, took unnecessary steps.

Vercel stripped to essentials. Removed redundant options. Simplified decisions. Agents became faster and more reliable with fewer choices.

Phil Schmid’s research on agent architectures supports this. Simpler harnesses often outperform complex scaffolding. The model is smart enough. The harness just prevents catastrophic failures.

## The Three Harness Design Principles

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*nAlcgV6-xErnbO7jrMj28Q.png)

**Principle 1: Minimal necessary intervention.** Only intervene when the model can’t self-correct. Let the model handle ambiguity. Step in for irreversible actions or security boundaries.

**Principle 2: Progressive disclosure.** Start with limited tools and permissions. Expand as tasks require. Don’t give database delete permissions unless needed. Least privilege by default.

**Principle 3: Fail-fast with recovery.** Detect failures quickly. Don’t let agents spiral. When failures occur, provide recovery paths. Retry with different approaches. Fall back to humans. Never fail silently.

## How to Build Your Harness

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*psIQJ1aQBrgjmdQKHbeguQ.png)

**Start with one task end-to-end.** Pick one agent task that delivers value. Build minimum harness to make it reliable. Deploy. Learn from production.

**Instrument everything.** Log every tool call, error, human intervention, timeout. You can’t improve what you don’t measure.

**Iterate based on failure modes.** Each failure reveals a missing guardrail. Add guardrail. Deploy. Find next failure.

**Measure outcomes, not activity.** Track task completion, not token counts. Measure satisfaction, not speed. Optimize for reliability, not capability.

## The Timeline That Matters

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*IgJvvJJIqfHY1x9DV5vtLw.png)

Manus spent six months on five rewrites. LangChain spent a year on four architectures. World-class teams with resources. Your timeline will be similar or longer.

You can fine-tune a competitive model in weeks. Building production-ready harnesses takes months or years. Companies investing in harness engineering now build advantages that persist.

## The Bottom Line

2025 proved agents could work. 2026 is about making agents work reliably.

The model is commodity. Claude, GPT-4, Gemini perform similarly. The harness determines whether agents succeed or fail.

Great harnesses manage human approvals, filesystem access, tool orchestration, sub-agents, prompts, and lifecycle. They intervene minimally but prevent catastrophic failures.

Manus, LangChain, and Vercel spent thousands of engineering hours building harnesses. That investment creates moats model improvements can’t overcome.

> Stop optimizing models. Start building harnesses. The competitive advantage in 2026 comes from infrastructure, not intelligence.

Winners figured out harnesses early. Everyone else plays catch-up with commodity models.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*jhPjhiivX8molWl9-w8CVw.png)

Also, if you are on [LinkedIn](https://www.linkedin.com/in/aagupta/) want to connect, let’s do!


---

**原文链接**: [https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e](https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e)
