---
title: "5 Agent Skill design patterns every ADK developer should know"
date: 2026-03-21 16:07:55
updated: 2026-03-21 16:07:55
tags:
  - AI
  - Technology
categories:
  - Technology
origin_title: "5 Agent Skill design patterns every ADK developer should know"
author: "Google Cloud Tech"
skill_id: "x_2033953579824758855"
generated: "2026-03-21T15:15:00+08:00"
---

# 5 个每个 ADK 开发者都应该知道的 Agent Skill 设计模式 (5 Agent Skill design patterns every ADK developer should know)

**作者**: Google Cloud Tech (@GoogleCloudTech)  
**发布时间**: 上午 1:08 · 2026 年 3 月 18 日  
**互动数据**: 93 回复 · 1,059 转帖 · 4,082 喜欢 · 8,740 书签 · 160.6 万查看

---

## 引言

说到 SKILL.md，开发者往往过于关注格式——确保 YAML 正确、构建目录结构、遵循规范。但随着超过 30 个 agent 工具（如 Claude Code、Gemini CLI 和 Cursor）都标准化为相同的布局，格式问题实际上已经过时了。

现在的挑战是内容设计。规范解释了如何打包一个 skill，但对于如何组织其中的逻辑却没有提供任何指导。

通过研究生态系统中 skill 的构建方式——从 Anthropic 的仓库到 Vercel 和 Google 的内部指南——我们发现了五个可以帮助开发者构建 agent 的常见设计模式。

**作者**: @Saboo_Shubham_ 和 @lavinigam

### 5 个模式概览

![5 Agent Skill design patterns](/images/HDoDJqGXAAg3-F-.jpg)

1. **Tool Wrapper（工具包装器）**: 让你的 agent 瞬间成为任何库的专家
2. **Generator（生成器）**: 从可复用的模板生成结构化文档
3. **Reviewer（审查器）**: 根据严重程度对照清单对代码进行评分
4. **Inversion（反转）**: agent 在行动前先采访你
5. **Pipeline（流水线）**: 强制执行带有检查点的严格多步骤工作流

---

## Pattern 1: The Tool Wrapper（工具包装器）

![Pattern 1: Tool Wrapper](/images/HDoDgs6XAAYtw04.jpg)

Tool Wrapper 为你的 agent 提供针对特定库的按需上下文。与其将 API 约定硬编码到 system prompt 中，不如将它们打包到一个 skill 中。

### 示例：FastAPI Tool Wrapper
```yaml
# skills/api-expert/SKILL.md
---
name: api-expert
description: FastAPI development best practices and conventions. Use when building, reviewing, or debugging FastAPI applications, REST APIs, or Pydantic models.
metadata:
  pattern: tool-wrapper
  domain: fastapi
---

You are an expert in FastAPI development. Apply these conventions to the user's code or question.

## Core Conventions

Load 'references/conventions.md' for the complete list of FastAPI best practices.

## When Reviewing Code
1. Load the conventions reference
2. Check the user's code against each convention
3. For each violation, cite the specific rule and suggest the fix

## When Writing Code
1. Load the conventions reference
2. Follow every convention exactly
3. Add type annotations to all function signatures
4. Use Annotated style for dependency injection
```

---

## Pattern 2: The Generator（生成器）

![Pattern 2: Generator](/images/HDoDoIeXAAUmQoy.jpg)

如果说 Tool Wrapper 应用知识，那么 Generator 则强制执行一致的输出。

### 示例：Technical Report Generator（技术报告生成器）
```yaml
# skills/report-generator/SKILL.md
---
name: report-generator
description: Generates structured technical reports in Markdown. Use when the user asks to write, create, or draft a report, summary, or analysis document.
metadata:
  pattern: generator
  output-format: markdown
---

You are a technical report generator. Follow these steps exactly:

Step 1: Load 'references/style-guide.md' for tone and formatting rules.

Step 2: Load 'assets/report-template.md' for the required output structure.

Step 3: Ask the user for any missing information needed to fill the template:
- Topic or subject
- Key findings or data points
- Target audience (technical, executive, general)

Step 4: Fill the template following the style guide rules. Every section in the template must be present in the output.

Step 5: Return the completed report as a single Markdown document.
```

---

## Pattern 3: The Reviewer（审查器）

![Pattern 3: Reviewer](/images/HDoEa51XEAIKSnO.jpg)

Reviewer 模式将"检查什么"与"如何检查"分离开来。

### 示例：Code Reviewer（代码审查器）
```yaml
# skills/code-reviewer/SKILL.md
---
name: code-reviewer
description: Reviews Python code for quality, style, and common bugs. Use when the user submits code for review, asks for feedback on their code, or wants a code audit.
metadata:
  pattern: reviewer
  severity-levels: error,warning,info
---

You are a Python code reviewer. Follow this review protocol exactly:

Step 1: Load 'references/review-checklist.md' for the complete review criteria.

Step 2: Read the user's code carefully. Understand its purpose before critiquing.

Step 3: Apply each rule from the checklist to the code. For every violation found:
- Note the line number (or approximate location)
- Classify severity: error (must fix), warning (should fix), info (consider)
- Explain WHY it's a problem, not just WHAT is wrong
- Suggest a specific fix with corrected code

Step 4: Produce a structured review with these sections:
- **Summary**: What the code does, overall quality assessment
- **Findings**: Grouped by severity (errors first, then warnings, then info)
- **Score**: Rate 1-10 with brief justification
- **Top 3 Recommendations**: The most impactful improvements
```

---

## Pattern 4: Inversion（反转）

![Pattern 4: Inversion](/images/HDoEo5XbEAUaaFG.jpg)

Agent 天生倾向于立即猜测和生成。Inversion 模式翻转了这种动态。

### 示例：Project Planner（项目规划器）
```yaml
# skills/project-planner/SKILL.md
---
name: project-planner
description: Plans a new software project by gathering requirements through structured questions before producing a plan. Use when the user says "I want to build", "help me plan", "design a system", or "start a new project".
metadata:
  pattern: inversion
  interaction: multi-turn
---

You are conducting a structured requirements interview. DO NOT start building or designing until all phases are complete.

## Phase 1 — Problem Discovery (ask one question at a time, wait for each answer)

Ask these questions in order. Do not skip any.

- Q1: "What problem does this project solve for its users?"
- Q2: "Who are the primary users? What is their technical level?"
- Q3: "What is the expected scale? (users per day, data volume, request rate)"

## Phase 2 — Technical Constraints (only after Phase 1 is fully answered)

- Q4: "What deployment environment will you use?"
- Q5: "Do you have any technology stack requirements or preferences?"
- Q6: "What are the non-negotiable requirements? (latency, uptime, compliance, budget)"

## Phase 3 — Synthesis (only after all questions are answered)

1. Load 'assets/plan-template.md' for the output format
2. Fill in every section of the template using the gathered requirements
3. Present the completed plan to the user
4. Ask: "Does this plan accurately capture your requirements? What would you change?"
5. Iterate on feedback until the user confirms
```

---

## Pattern 5: The Pipeline（流水线）

![Pattern 5: Pipeline](/images/HDoE195bEAABitY.jpg)

对于复杂任务，你不能承受跳过步骤或忽略指令的代价。

### 示例：Documentation Pipeline（文档流水线）
```yaml
# skills/doc-pipeline/SKILL.md
---
name: doc-pipeline
description: Generates API documentation from Python source code through a multi-step pipeline. Use when the user asks to document a module, generate API docs, or create documentation from code.
metadata:
  pattern: pipeline
  steps: "4"
---

You are running a documentation generation pipeline. Execute each step in order. Do NOT skip steps or proceed if a step fails.

## Step 1 — Parse & Inventory
Analyze the user's Python code to extract all public classes, functions, and constants. Present the inventory as a checklist. Ask: "Is this the complete public API you want documented?"

## Step 2 — Generate Docstrings
For each function lacking a docstring:
- Load 'references/docstring-style.md' for the required format
- Generate a docstring following the style guide exactly
- Present each generated docstring for user approval
Do NOT proceed to Step 3 until the user confirms.

## Step 3 — Assemble Documentation
Load 'assets/api-doc-template.md' for the output structure. Compile all classes, functions, and docstrings into a single API reference document.

## Step 4 — Quality Check
Review against 'references/quality-checklist.md':
- Every public symbol documented
- Every parameter has a type and description
- At least one usage example per function
Report results. Fix issues before presenting the final document.
```

---

## 选择正确的模式

![决策树：选择正确的 Agent Skill 模式](/images/HDoFWovXAAsbb8C.jpg)

## 总结

这些模式并不是相互排斥的。它们可以组合使用。

- 一个 Pipeline skill 可以在末尾包含一个 Reviewer 步骤
- 一个 Generator 可以在最开始依赖 Inversion 来收集变量

不要再试图将复杂而脆弱的指令塞进单个 system prompt 中。把你的工作流分解开来，应用合适的结构模式，构建可靠的 agent。

**开始使用**: [Google Agent Development Kit](https://google.github.io/adk-docs/)

---

**原文链接**: https://x.com/GoogleCloudTech/status/2033953579824758855
