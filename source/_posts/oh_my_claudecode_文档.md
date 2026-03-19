---
title: "文档 | Oh My Claudecode"
date: 2026-03-19 10:09:09
updated: 2026-03-19 10:09:09
tags:
  - AI
  - Technology
categories:
  - Technology
origin_title: "Documentation | Oh My Claudecode"
author: "Yeachan Heo"
skill_id: "475c9c9f"
generated: "2026-03-19T09:51:31.753992"
original_url: "https://yeachan-heo.github.io/oh-my-claudecode-website/docs.html#introduction"
---

# Oh My Claudecode 文档

将 Claude Code 转变为智能多 Agent（智能体）编排系统。你成为指挥家，而非表演者。

### 19 个专用 Agent（智能体）

跨越 3 个功能区的 19 个 Agent（智能体）统一目录，使用优化模型（Opus/Sonnet/Haiku）。

### 10 种执行模式

从用于完全自主的 Autopilot（自动模式）到用于原生协调的 Team（团队）模式，以及用于持久化的 Ralph（持久化代理）。

集成工具链，包括 Language Servers（语言服务器）、AST grep、Python REPL（读取 - 求值 - 输出循环）和外部 AI 模型。

### 原生 Team（团队）

利用 Claude Code 的原生 Team（团队）能力，配合分阶段执行 Pipeline（流水线）。

## #发布说明

快速摘要

这些更新改进了运行时安全性、Team（团队）工作流和发布可靠性。打开每个版本查看详情。

查看 v4.8.0 的变更

  * **Tracer Agent（追踪智能体） & Trace Skill（追踪技能）：** 证据驱动的因果追踪，包含假设排名、支持/反对证据追踪和不确定性量化。（/trace 命令）
  * **安全加固：** 修补了 21 个安全漏洞，包括 SSRF（服务器端请求伪造）绕过、命令注入、原型污染和 Shell 注入向量。
  * **HUD（抬头显示）Token 使用追踪：** 在 HUD（抬头显示）中实时显示 Token 使用情况，可选显示转录 Token 总计以提高成本可见性。
  * **OMX Team（团队）治理回溯移植：** 加固团队运行时，包含领导者提示指导和改进的窗格停滞启发式规则。
  * **统一 MCP（模型上下文协议）注册表：** 同步的 MCP（模型上下文协议）注册表现在同步到 Codex 配置，以实现一致的服务器管理。



查看 v4.7.0 的变更

  * **原生 Team（团队）/Task（任务）API（应用程序接口）：** 添加了 `TeamCreate`、`TaskCreate`、`TaskList`、`TaskGet`、`TaskUpdate` 和 `SendMessage` 用于细粒度 Agent（智能体）编排。
  * **omc ask 命令：** 新的 `omc ask <claude|codex|gemini>` 流程，用于明确的三模型路由。
  * **Skill（技能）扩展：** 添加了 14 个新 Skill（技能），包括 `configure-openclaw`、`deepinit`、`project-session-manager`、`tdd` 和 `trace`。
  * **Agent（智能体）目录更新：** 在构建功能区引入了 `code-simplifier` Agent（智能体）。
  * **弃用：** 遗留的 `omc_run_team_*` 运行时工具现已弃用， favor 使用 Team（团队）API（应用程序接口）。



查看 v4.6.0 的变更

  * **多模型恢复：** 恢复了 `ask-codex` 和 `ask-gemini` 作为非 tmux（终端复用器）环境的高级 Skill（技能）。
  * **上下文优化：** 改进了 `external-context` Hook（钩子）以加快大型仓库分析。
  * **用户体验优化：** 增强了 `hud` 状态行，包含实时 Agent（智能体）心跳指示器。



查看 v4.5.1 的变更

  * **CLI（命令行界面）命令网关类型：** OpenClaw 可以使用 Shell 命令唤醒基于 CLI（命令行界面）的 Agent（智能体），而不是 HTTP 调用。
  * **tmux（终端复用器）尾部捕获：** 捕获最后 15 行终端内容用于停止和会话结束通知。
  * **错误修复：** 修复了 OpenClaw 在 CLI（命令行界面）Agent（智能体）上的 `HTTP 405` 错误。



查看 v4.5.0 的变更

  * **完整通知系统：** 当 Claude 完成工作或需要输入时，你可以在 Discord、Telegram、Slack 或任何 Webhook（网络钩子）上收到警报。
  * **Hook（钩子）配置和模板引擎：** 你可以使用 `{{variable}}` 模板自定义通知文本。
  * **平台门禁：** 仅当你传递正确的 CLI（命令行界面）标志（如 `--telegram` 或 `--discord`）时才会触发通知。
  * **OpenClaw Webhook（网络钩子）网关：** 它将你的工作流连接到外部自动化工具。
  * **可靠性修复：** 改进了团队协调、项目记忆、LSP（语言服务器协议）工具和 Hook（钩子）生命周期行为的稳定性。
  * **清理：** 从遗留兼容层中移除了死代码。



查看 v4.4.0 的变更

  * **破坏性变更：** Codex 和 Gemini MCP（模型上下文协议）提供商在 v4.4.0 中被移除（在 v4.6.0 中作为高级 `ask-codex` 和 `ask-gemini` Skill（技能）恢复）。对于 tmux（终端复用器）工作器，请使用 `/omc-teams N:codex` 或 `/omc-teams N:gemini`。
  * **tmux（终端复用器）CLI（命令行界面）工作器：** 你可以在可见的 tmux（终端复用器）分割窗格中生成 Claude、Codex 或 Gemini CLI（命令行界面）工作器。
  * **按需生命周期：** 工作器在任务到达时启动，任务完成后停止。
  * **/ccg 三模型 Skill（技能）：** 工作扇出到 Codex 和 Gemini 并行执行，然后 Claude 组合结果。
  * **安全加固：** 作业 ID 验证阻止路径遍历，会话清理绝不会杀死你的 Shell。



查看 v4.3.x 的变更

  * **团队架构改革：** 团队现在遵循分阶段 Pipeline（流水线）：`plan → prd → exec → verify → fix`。
  * **统一目录：** 19 个统一 Agent（智能体）取代了旧的分层系统，并移除了 `-low` 和 `-medium` 后缀。
  * **Skill（技能）整合：** `ralplan` 合并到 `/plan --consensus`，`review` 合并到 `/plan --review`。
  * **MCP（模型上下文协议）提供商升级：** Codex 现在使用 `gpt-5.3-codex`，Gemini 使用 `gemini-3-pro-preview`。



查看 v4.1.0 的变更

  * **原生 Team（团队）：** Claude Code 支持带有分阶段 Pipeline（流水线）的团队执行。
  * **Team（团队） + Ralph 组合：** 你可以将 Team（团队）模式与 Ralph 结合以实现持久化执行。
  * **模式变更：** Swarm（集群模式）已弃用， favor 使用 Team（团队）模式。



## #安装
    
    
    1
    2
    3
    4
    5
    6
    7
    8# 1. 添加插件
    /plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
    
    # 2. 安装它
    /plugin install oh-my-claudecode
    
    # 3. 运行设置向导
    /oh-my-claudecode:omc-setup

## #快速开始

OMC 使用“魔法关键词”来检测你的意图。只需描述你想做什么。

  * #### 不确定需求？

`"/deep-interview '我想构建一个任务管理器'"` — 苏格拉底式提问，在执行前澄清模糊的想法。

  * #### 自主构建

`"autopilot build a React dashboard"` — 从想法到代码的完全自主执行。

  * #### 重构

`"ralph refactor the API"` — 持续工作直到验证清理完毕（“巨石永不停止”）。

  * #### 并行工作

`"ulw fix all typescript errors"` — 并行运行多个 Agent（智能体）以提高速度。

  * #### 原生 Team（团队）

`"team 5:executor refactor backend"` — 生成由领导者协调的 5 个 Agent（智能体）团队。

  * #### 规划

`"plan the auth system"` — 启动交互式规划访谈。




## #指挥家哲学

OMC 的核心原则是：**你是指挥家，而非表演者。**

黄金法则

绝不要直接进行代码更改。始终委托给专用 Agent（智能体）。你的角色是指导、审查和编排。

Agent（智能体）具有专用角色。**架构师**看到大局，**执行者**编写代码，**验证者**证明其有效。尊重这种分工确保更高质量的输出。

## #团队架构

v4.1 利用原生分阶段 Pipeline（流水线）进行团队管理。过渡严格定义以确保质量门禁。

| 从        | 到                      | 触发条件                      |
|-------------|-------------------------|----------------------------------------|
| team-plan   | team-prd                | 规划和分解完成    |
| team-prd    | team-exec               | 验收标准明确定义 |
| team-exec   | team-verify             | 所有任务达到终端状态         |
| team-verify | team-fix / complete     | 验证结果                   |
| team-fix    | team-exec / team-verify | 修复策略定义                 |



### #模型路由

OMC 智能地将任务路由到最合适的模型层级，以平衡成本和能力。

| 复杂度   | 模型   | 用例                                                        |
|--------------|---------|-----------------------------------------------------------------|
| **简单**   |  Haiku  | 查询、格式化、简单文档（“这返回什么？”）     |
| **标准** |  Sonnet | 实现、测试、重构（“添加错误处理”）       |
| **复杂**  |  Opus   | 架构、深度调试、规划（“重构认证系统”） |



### #委托规则

  * **✅ 委托：** 多文件实现、重构、调试、审查、规划、研究、验证。 
  * **🛑 自己动手：** 小澄清、快速状态检查、单命令操作。直接写入 `.omc/`、`.claude/` 配置文件是可以的。 



## #执行模式

旗舰模式。从想法到交付代码的完全自主执行。自修正循环。

  * 扩展（分析师 + 架构师）
  * 规划（架构师 + 评论家）
  * 执行（Ralph + Ultrawork）
  * QA 循环（UltraQA）



“巨石永不停止。”持久化模式。持续工作直到架构师验证目标达成。

  * 无限持久化循环
  * 自动包含 Ultrawork
  * 严格的验证要求



最大并行性。积极地将子任务委托给多个后台 Agent（智能体）。

  * 最多 5+ 个并发 Agent（智能体）
  * 智能模型路由
  * 非阻塞后台执行



### #团队组成

**功能开发：** analyst → planner → executor → test-engineer → verifier

**缺陷修复：** explore → debugger → executor → verifier

## #Agent（智能体）目录

OMC 提供跨越 3 个功能区的 19 个专用 Agent（智能体）统一目录。每个 Agent（智能体）都使用最合适的模型层级针对特定任务进行优化。

构建与分析

### 构建与分析

explore Haiku analyst Opus planner Opus architect Opus debugger Sonnet executor Sonnet verifier Sonnet code-simplifier Opus

审查

### 审查

security-reviewer Sonnet code-reviewer Opus critic Opus

领域专家

### 领域专家

document-specialist Sonnet test-engineer Sonnet designer Sonnet writer Haiku qa-tester Sonnet scientist Sonnet git-master Sonnet tracer Sonnet

## #Team（团队）API（应用程序接口）参考

Team（团队）API（应用程序接口）提供对多 Agent（智能体）编排的细粒度控制。它允许你以编程方式管理团队、任务和 Agent（智能体）间通信。

| 工具          | 参数                                 | 描述                                                |
|---------------|--------------------------------------------|------------------------------------------------------------|
| `TeamCreate`  | `team_name`, `workers`                     | 初始化一个带有指定工作器集的新团队。    |
| `TaskCreate`  | `team_name`, `subject`, `description`      | 向团队的待办列表添加新任务。                       |
| `TaskList`    | `team_name`, `status_filter`               | 列出团队的所有任务，可选按状态过滤。 |
| `TaskUpdate`  | `team_name`, `task_id`, `status`, `result` | 更新特定任务的状态或结果。           |
| `SendMessage` | `team_name`, `to_worker`, `body`           | 向特定团队工作器发送异步消息。   |



### 示例：编程式委托
    
    
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12// 1. 创建专用团队
    TeamCreate(team_name="ui-redesign", workers=["designer", "executor", "verifier"]);
    
    // 2. 分配任务
    TaskCreate(
      team_name="ui-redesign",
      subject="Hero Section",
      description="Redesign the hero section with a focus on modern visual effects."
    );
    
    // 3. 监控进度
    const tasks = TaskList(team_name="ui-redesign", status_filter="completed");

## #Skill（技能）与命令

| 关键词                   | 描述                             | 示例                           |
|---------------------------|-----------------------------------------|-----------------------------------|
| `autopilot`               | 自主执行                    | "autopilot build a login page"    |
| `ralph`                   | 持久化模式                        | "ralph refactor the API"          |
| `ulw`                     | Ultrawork（并行）                    | "ulw fix these 5 bugs"            |
| `team`                    | 原生 Team（团队）                             | "team 3:executor build it"        |
| `plan`                    | 战略规划                      | "plan the migration"              |
| `ask codex`               | 咨询 Codex                           | "ask codex to review this"        |
| `configure-openclaw`      | 通知网关设置              | "/configure-openclaw"             |
| `deepinit`                | 深度代码库初始化            | "/deepinit"                       |
| `external-context`        | 管理外部钩子                   | "/external-context"               |
| `learn-about-omc`         | 使用模式分析                  | "/learn-about-omc"                |
| `learner`                 | 提取已学习技能                  | "/learner"                        |
| `mcp-setup`               | MCP（模型上下文协议）工具配置                  | "/mcp-setup"                      |
| `omc-doctor`              | 诊断工具包                      | "/omc-doctor"                     |
| `omc-help`                | 交互式帮助指南                  | "/omc-help"                       |
| `project-session-manager` | 隔离环境                   | "/project-session-manager"        |
| `ralph-init`              | 初始化 PRD（产品需求文档）循环                     | "/ralph-init"                     |
| `sciomc`                  | 科学研究 Agent（智能体）              | "/sciomc research photosynthesis" |
| `tdd`                     | 测试驱动开发                 | "/tdd build auth"                 |
| `trace`                   | Agent（智能体）流程可视化                | "/trace"                          |
| `writer-memory`           | 作家的智能体记忆              | "/writer-memory"                  |
| `deep-interview`          | 苏格拉底式需求澄清     | "/deep-interview 'vague idea'"    |
| `ralplan`                 | 迭代规划共识            | "ralplan this feature"            |
| `ccg`                     | 三模型扇出（Claude+Codex+Gemini） | "/ccg review this module"         |
| `ultraqa`                 | 自动 QA（质量保证）循环                    | "/ultraqa"                        |
| `ai-slop-cleaner`         | 检测并移除 AI 生成的低质内容     | "deslop this file"                |
| `release`                 | 发布管理工作流             | "/release"                        |
| `configure-notifications` | 设置 Discord/Slack/Telegram 警报    | "/configure-notifications"        |
| `omc-plan`                | 结构化规划模式                | "/omc-plan"                       |



**实用 Skill（技能）：** `/oh-my-claudecode:cancel`, `note`, `omc-setup`, `hud`, `doctor`。

## #状态与记忆

位于 `.omc/notepad.md`。弹性记忆，幸存于上下文修剪。

  * **优先级：** 始终注入到上下文中。
  * **工作：** 7 天后自动修剪。
  * **手动：** 从不修剪。



### 项目记忆

位于 `.omc/project-memory.json`。存储技术栈、约定和架构指令。

## #配置

运行 `/oh-my-claudecode:omc-setup` 以配置默认值。

**工作树路径：**

  * `.omc/state/` \- 模式状态文件* `.omc/logs/` \- 审计日志（Audit logs）
* `.omc/plans/` \- 规划文档（Planning documents）



## #CLI（命令行界面）参考

`omc` 命令行工具让您能够从终端启动、配置和管理 OMC。

### #入门指南

全局安装 OMC，然后运行它。


    1
    2npm install -g oh-my-claude-sisyphus
    omc

三个别名均运行相同的 CLI（命令行界面）：`omc`、`oh-my-claudecode`、`omc-cli`。

提示

只需运行 `omc`。它会自动在 tmux 会话中启动 Claude Code。

### #核心命令

| 命令              | 功能                                                         | 示例                 |
|----------------------|----------------------------------------------------------------------|-------------------------|
| `omc` / `omc launch` | 在 tmux 会话中启动 Claude Code                                  | `omc`                   |
| `omc setup`          | 安装并同步所有 OMC 组件（钩子、智能体、技能）          | `omc setup --force`     |
| `omc config`         | 显示或验证当前配置                                 | `omc config --validate` |
| `omc info`           | 列出可用的 智能体（agents）、技能（skills）和 MCP 工具                         | `omc info`              |
| `omc update`         | 检查并安装更新                                        | `omc update --check`    |
| `omc version`        | 显示详细版本信息（包版本、安装方法、提交记录） | `omc version`           |
| `omc doctor`         | 运行冲突诊断检查                                  | `omc doctor conflicts`  |
| `omc install`        | 将 OMC 安装到 `~/.claude/`                                        | `omc install`           |



### #启动标志

| 标志                  | 功能                                    |
|-----------------------|-------------------------------------------------|
| `--notify false`      | 关闭此会话的所有通知     |
| `--madmax` / `--yolo` | 跳过所有权限提示                     |
| `--telegram`          | 为此会话开启 Telegram 通知 |
| `--discord`           | 为此会话开启 Discord 通知  |
| `--slack`             | 为此会话开启 Slack 通知    |
| `--webhook`           | 为此会话开启 webhook 通知  |
| `--openclaw`          | 为此会话开启 OpenClaw 网关       |



警告

`--madmax` 和 `--yolo` 禁用权限提示。请谨慎使用。

### #Teleport（瞬移）

Teleport 帮助您快速创建和管理 git worktrees（Git 工作树）。


    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14# 从 issue/PR（拉取请求）编号创建工作树
    omc teleport '#42'
    
    # 为功能分支创建工作树
    omc teleport add-auth
    
    # 列出所有工作树
    omc teleport list
    
    # 移除工作树
    omc teleport remove ./path
    
    # 从完整 URL
    omc teleport https://github.com/owner/repo/issues/42

支持 GitHub、GitLab、Bitbucket 和 Azure DevOps。

### #Wait（等待）

`wait` 命令帮助您监控速率限制（rate limits）并自动恢复被阻塞的会话。


    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15# 检查速率限制状态
    omc wait
    
    # 启动自动恢复守护进程（daemon）
    omc wait --start
    
    # 控制后台守护进程
    omc wait daemon start
    omc wait daemon stop
    
    # 扫描被阻塞的会话
    omc wait detect
    
    # 显示详细状态
    omc wait status

### #通知配置文件

从命令行设置通知渠道，然后使用命名配置文件（named profiles）在它们之间切换。


    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12# 设置渠道
    omc config-stop-callback telegram --enable --token <token> --chat <id>
    omc config-stop-callback discord --enable --webhook <url>
    omc config-stop-callback slack --enable --webhook <url>
    omc config-stop-callback file --enable --path ~/.claude/logs/{date}.md
    
    # 管理配置文件
    omc config-notify-profile --list
    omc config-notify-profile work --show
    
    # 使用配置文件启动
    OMC_NOTIFY_PROFILE=work omc

提示

命名配置文件让您快速切换通知设置。使用 `OMC_NOTIFY_PROFILE=work omc` 以特定配置文件启动。

### #其他命令


    1
    2
    3
    4
    5
    6
    7
    8# 分屏 tmux，Claude + Codex 并排
    omc interop
    
    # 运行 HUD 状态行
    omc hud
    
    # 每秒实时刷新 HUD
    omc hud --watch --interval 1000

`omc interop` 打开一个分屏 tmux 布局，Claude 和 Codex 并排显示。需要安装两个 CLI（命令行界面）。

`omc hud` 显示带有会话信息的状态行。使用 `--watch` 进行实时更新。

## #通知

### #概述

通知会告诉您 Claude 何时完成工作、需要您的输入或遇到问题。

它适用于 Discord、Telegram、Slack 和任何 webhook 端点。

通知是非阻塞的，因此永远不会减慢您的工作速度。

每个平台保持休眠状态，直到您在该会话中使用 CLI 标志激活它。

提示

仅为此运行开启您想要的平台，例如 `omc --telegram` 或 `omc --discord`。

### #快速设置

最简单的设置是在 Claude Code 内部运行 `/oh-my-claudecode:configure-notifications`。

它会通过提示引导您完成每一步。

您也可以使用下面的部分手动配置所有内容。

### #支持的平台

#### Telegram

* 在 Telegram 上使用 `@BotFather` 创建机器人并复制机器人令牌（bot token）。
* 给您的机器人发送消息，然后获取您的聊天 ID（chat ID）。
* 将 `notifications.telegram.botToken` 和 `notifications.telegram.chatId` 添加到配置。
* 每会话通过 `omc --telegram` 激活。



#### Discord（Webhook）

* 在您的渠道中：设置 > 集成 > Webhooks > 新建 Webhook。
* 复制 webhook URL。
* 将 `notifications.discord.webhookUrl` 添加到配置。
* 可选提及：`<@USER_ID>` 用于用户，`<@&ROLE_ID>` 用于角色。
* 每会话通过 `omc --discord` 激活。



#### Discord（Bot API）

* 在 Discord 开发者门户创建机器人并复制机器人令牌（bot token）。
* 获取渠道 ID（右键点击渠道 > 在开发者模式下复制 ID）。
* 将 `notifications.discordBot.botToken` 和 `notifications.discordBot.channelId` 添加到配置。
* 每会话通过 `omc --discord` 激活。



#### Slack

* 在 `api.slack.com` 创建应用并启用 Incoming Webhooks。
* 将 webhook 添加到您的工作区并复制 URL。
* 将 `notifications.slack.webhookUrl` 添加到配置。
* 可选提及：`<@UXXXXXXXX>`、`<!channel>`、`<!here>`。
* 每会话通过 `omc --slack` 激活。



#### 通用 Webhook

* 使用任何接受 JSON `POST` 请求的 HTTPS 端点。
* 将 `notifications.webhook.url` 添加到配置。
* 可选：使用 `notifications.webhook.headers` 添加自定义头。
* 每会话通过 `omc --webhook` 激活。



### #通知事件

| 事件               | 触发时机                                                        |
|---------------------|----------------------------------------------------------------------|
| `session-start`     | 新的 Claude 会话开始。                                         |
| `session-end`       | 会话结束。包括持续时间、使用的 智能体（agents）和运行的模式。 |
| `session-stop`      | 持久模式（如 `ralph`）阻止会话停止。   |
| `session-idle`      | 会话正在等待您的输入。                               |
| `ask-user-question` | Claude 提出问题并需要您的回答。                        |
| `agent-call`        | 生成了专门的 智能体（agent）。                                     |



### #详细程度级别

| 级别     | 您将获得的内容                                                         |
|-----------|----------------------------------------------------------------------|
| `minimal` | 仅会话开始和结束。无终端输出。                      |
| `session` | 会话事件加上最后几行终端输出。           |
| `agent`   | `session` 中的所有内容，加上每个生成的 智能体（agent）的通知。 |
| `verbose` | 所有事件和所有输出。                                           |



在配置中使用 `notifications.verbosity` 或 `OMC_NOTIFY_VERBOSITY` 环境变量设置此项。

### #环境变量

使用这些进行零配置设置，无需编辑文件：

* `OMC_TELEGRAM_BOT_TOKEN` \+ `OMC_TELEGRAM_CHAT_ID` — 无需配置文件的 Telegram。
* `OMC_DISCORD_WEBHOOK_URL` — 无需配置文件的 Discord。
* `OMC_SLACK_WEBHOOK_URL` — 无需配置文件的 Slack。
* `OMC_NOTIFY_VERBOSITY` — 设置详细程度级别。
* `OMC_NOTIFY=0` — 关闭所有通知。
* `OMC_NOTIFY_PROFILE` — 使用命名通知配置文件。



### #自定义消息模板

* 模板文件：`~/.claude/omc_config.hook.json`
* 使用 `{{variable}}` 占位符：`{{sessionId}}`、`{{timestamp}}`、`{{projectName}}`、`{{reason}}`、`{{duration}}`
* 使用条件语句：`{{#if variable}}show this{{/if}}`
* 计算值：`duration`、`time`、`modesDisplay`、`agentDisplay`、`footer`、`tmuxTailBlock`
* 您可以为每个事件和每个平台设置不同的模板。



### #配置示例


    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21{
      "notifications": {
        "verbosity": "session",
        "telegram": {
          "botToken": "123456:ABC-DEF",
          "chatId": "-1001234567890"
        },
        "discord": {
          "webhookUrl": "https://discord.com/api/webhooks/...",
          "mention": "<@123456789>"
        },
        "slack": {
          "webhookUrl": "https://hooks.slack.com/services/T.../B.../xxx"
        },
        "events": {
          "session-end": { "telegram": true, "discord": true },
          "ask-user-question": { "telegram": true },
          "session-start": { "discord": true }
        }
      }
    }

将其放入 `~/.claude/.omc-config.json`。

### #回复注入

这是一个用于从手机回答 Claude 的高级功能。

* 后台守护进程（daemon）轮询 Discord 或 Telegram 以获取您的回复。
* 当您回复通知时，您的文本会被发送回您的 tmux 窗格。
* 这让您能够远程回答 Claude 的问题。
* 在 `.omc-config.json` 中配置 `replyListener`，包含轮询间隔和授权用户 ID。
* 安全性：速率限制、输入净化（sanitization）和注入前的窗格验证。



警告

仅允许受信任的用户 ID 进行回复注入。这保护您的 tmux 会话免受不必要的输入。

## #推荐工作流

这些是针对常见任务的久经考验的工作流。每个工作流都以经过验证的顺序链式调用 OMC 技能。选择适合您情况的那个。

### #从 PRD（产品需求文档）全自动执行

当您有需求文档（PRD）并希望从头开始构建所有内容并使用并行 智能体（agents）时使用此方法。

/ralplan → /teams 或 /omc-teams → /ralph

* `/ralplan` 审查您的 PRD 并建立共识计划（规划者 + 架构师 + 批评家达成一致）。
* `/teams` 生成多个 Claude 智能体并行构建。如果您需要 Codex 或 Gemini CLI 工作人员，请改用 `/omc-teams`。
* `/ralph` 持续工作直到架构师验证一切正常。



### #无需动脑（简单任务）

用于清晰、简单的任务，只需完成即可。无需规划。

/autopilot → /ultrawork → /ralph

* `/autopilot` 接受您的请求并立即开始构建。
* `/ultrawork` 将工作拆分给多个 智能体（agents）以提高速度。
* `/ralph` 持续工作直到所有内容完全验证。



### #修复 / 调试

当某些内容损坏且您需要可靠的修复路径时使用此方法。

/plan → /ralph → /ultraqa

* `/plan` 分析问题并制定修复策略。
* `/ralph` 持续修复直到通过检查。
* `/ultraqa` 运行端到端和冒烟测试（Web 应用使用 Playwright，CLI 使用 tmux）。



提示

对于复杂的 bug，首先运行 `/ralplan` 进行更深入的分析。

### #并行问题 / 工单处理

当您需要同时处理许多问题或工单时使用此方法。

/omc-teams N:architect → /omc-teams → /omc-teams → /ralplan → /ralph + /ultrawork → /ultraqa

* 启动架构师工作人员分析所有问题并起草一个完整的计划。
* 在单独的工作树（worktrees）上并行运行工作人员，每个工作人员向 `dev` 提交 PR（拉取请求）。
* 审查并合并开放的 PR（拉取请求），然后运行 `/ralplan` 以安全解决冲突。
* 最后使用 `/ralph`、`/ultrawork` 和 `/ultraqa` 直到所有测试通过。



须知

这四种模式涵盖了大多数实际工作。其他技能适用于特定任务，但您日常很少需要它们。

## #入门指南

本指南引导您安装 OMC、运行设置向导并执行第一条命令。

### 安装

使用单个命令安装 OMC：


    curl -fsSL https://raw.githubusercontent.com/yeachan-heo/oh-my-claudecode/main/install.sh | bash

### 首次设置

安装完成后，打开 Claude Code 并运行设置向导。这将配置钩子（hooks）、智能体（agents）、技能（skills）和 MCP 工具。

### 您的第一条命令

尝试一个简单的 autopilot 命令以查看 OMC 的实际效果。Autopilot 检测您的意图，规划工作，执行它，并验证结果。


    autopilot build a hello world REST API

### 验证您的安装

运行诊断工具以确认所有设置正确。它检查钩子（hooks）、MCP 工具、智能体（agent）可用性和配置。

如果 `/omc-doctor` 报告任何问题，请遵循其打印的建议。大多数问题可以通过重新运行 `/omc-setup` 或安装缺失的依赖项来解决。

## #执行模式指南

OMC 提供多种执行模式，每种模式都针对不同类型的工作进行了优化。选择最适合您任务的模式。

### Autopilot（自动驾驶）

完全自主执行。Autopilot 检测您的意图，与分析师和架构师扩展需求，规划工作，与 Ralph 和 Ultrawork 一起执行，并与 UltraQA 一起验证结果。这是绿地项目功能（全新项目）和“为我构建 X"请求的旗舰模式。


    autopilot build a user auth system with JWT

**何时使用：** 绿地项目功能、新项目、“为我构建 X"请求，您希望端到端自主执行。

### Ralph

自引用持久循环。Ralph 持续工作直到任务被架构师验证完成。它自动包含 Ultrawork 以实现并行性。座右铭是“巨石永不停歇”-- Ralph 将迭代、修复失败并重新验证直到达到目标。


    ralph refactor the entire API layer

**何时使用：** 需要迭代的复杂多步任务、涉及许多文件的重构、您希望保证完成的任务。

### Ultrawork

最大并行度。Ultrawork 积极地将子任务委托给多个并发运行的后台 智能体（agents）（最多 5+ 个 智能体）。它使用智能模型路由来分配正确的模型层级给每个子任务。

```
ulw fix all 5 failing tests
```

**适用场景：** 批量操作、多个独立修复、任何可以拆分为并行子任务的工作。

### Team（团队）

N 个协调的 Claude Agent（智能体），拥有共享任务列表。Team 模式遵循阶段感知流水线：plan, PRD, exec, verify, fix。每个阶段路由到相应的专家 Agent（智能体）。Teams 支持与 Ralph 组合以实现持久化执行（`team ralph`）。

```
team 3:executor build the dashboard
```

**适用场景：** 需要多个专家的大型功能、受益于具有质量门的协调并行 Agent（智能体）的项目。

### Plan（规划）

战略规划，带有可选的访谈工作流。Plan 模式分析你的请求并生成结构化的执行计划。使用 `--consensus` 进行迭代规划，直到 Planner, Architect 和 Critic 达成一致。使用 `--deliberate` 进行带有事前验尸（pre-mortem）分析的高风险工作。

```
plan the database migration strategy
```

**适用场景：** 架构决策、迁移规划、任何前期规划可以减少返工的任务。

### UltraQA

QA 循环 -- 测试、验证、修复、重复。UltraQA 运行端到端测试，验证结果，修复失败，并重复直到所有测试通过。它通常由 Autopilot（自动驾驶）在实现后激活，但也可以独立触发。

**适用场景：** 确保实现后的质量、运行综合测试套件、验证所有验收标准（acceptance criteria）是否满足。

## #Model Routing Guide（模型路由指南）

OMC 智能地将每个 Agent（智能体）路由到最合适的模型层级。这平衡了成本、速度和能力，使得简单任务使用快速轻量级模型，而复杂任务获得 Opus 的全部能力。

### The Three Tiers（三个层级）

*   **Haiku** -- 快速且便宜。用于快速查找、代码库探索、简单文档和格式化任务。
*   **Sonnet** -- 主力模型。用于标准实现、代码审查、测试编写、重构和大多数日常 Agent 工作。
*   **Opus** -- 最大能力。用于架构设计、深度分析、复杂自主工作和关键决策。

### Agent-to-Model Mapping（Agent 到模型映射）

| Tier       | Agents                                                                                                                                                        | Typical Tasks                                            |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| **Haiku**  | `explore`, `writer`                                                                                                                                           | 文件发现、符号映射、文档生成 |
| **Sonnet** | `executor`, `debugger`, `verifier`, `test-engineer`, `designer`, `qa-tester`, `scientist`, `document-specialist`, `git-master`, `security-reviewer`, `tracer` | 实现、测试、审查、调试、领域工作 |
| **Opus**   | `analyst`, `planner`, `architect`, `code-reviewer`, `critic`, `code-simplifier`                                                                               | 架构、规划、深度分析、关键审查  |

### Overriding Model Routing（覆盖模型路由）

你可以通过在 Task 调用时传递 `model` 参数来覆盖任何 Agent 的默认模型层级。当你希望通常为 Sonnet 的 Agent 获得更高质量的结果，或通常为 Opus 的 Agent 获得更快的结果时，这很有用。

```
1
2
3
4
5
# 对需要额外推理的 executor 任务使用 Opus
Task(subagent_type="oh-my-claudecode:executor", model="opus", ...)

# 对快速验证检查使用 Haiku
Task(subagent_type="oh-my-claudecode:verifier", model="haiku", ...)
```

## #Troubleshooting（故障排除）

常见问题及其解决方法。

### "not inside tmux"

OMC team 和 worker 功能需要一个 tmux 会话。在启动 OMC 之前启动一个：

### "codex/gemini: command not found"

Codex 和 Gemini CLI 工具必须全局安装才能使多模型功能正常工作：

```
1
2
3
4
5
# 安装 Codex CLI
npm install -g @openai/codex

# 安装 Gemini CLI
npm install -g @google/gemini-cli
```

### State Conflicts（状态冲突）

如果模式卡住或状态文件变得不一致，使用 cancel 命令或 state_clear 工具清除它们：

```
1
2
3
4
5
# 清除所有活动的模式状态
/cancel --force

# 或清除特定模式的状态
state_clear
```

### Agent Not Responding（Agent 无响应）

如果 Agent 似乎卡住或没有产生输出，检查追踪时间线以获取详情并重启：

```
1
2
3
4
5
# 检查 Agent 流追踪以查找问题
/trace

# 取消并重启当前模式
/cancel
```

### Hook Errors（Hook 错误）

如果 Hook 触发不正确或导致错误，检查跳过列表并运行诊断：

```
1
2
3
4
5
# 检查哪些 Hook 被跳过
echo $OMC_SKIP_HOOKS

# 运行完整诊断检查
/omc-doctor
```

设置 `DISABLE_OMC=1` 以临时禁用所有 OMC Hook，如果你需要排除 Hook 相关问题。设置 `OMC_SKIP_HOOKS` 为逗号分隔的 Hook 名称列表以跳过特定 Hook。

```
1
2
3
4
5
6
7
8
```

`# 1. 添加插件 /plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode # 2. 安装它 /plugin install oh-my-claudecode # 3. 运行设置向导 /oh-my-claudecode:omc-setup`

`lsp_hover`

`lsp_goto_definition`

`lsp_find_references`

`lsp_diagnostics`

`lsp_rename`

`ast_grep_search`

`ast_grep_replace`

```
1
2
3
4
5
6
7
8
9
10
11
12
```

`// 1. 创建 specialized team TeamCreate(team_name="ui-redesign", workers=["designer", "executor", "verifier"]); // 2. 分配任务 TaskCreate( team_name="ui-redesign", subject="Hero Section", description="Redesign the hero section with a focus on modern visual effects." ); // 3. 监控进度 const tasks = TaskList(team_name="ui-redesign", status_filter="completed");`

```
1
2
```

`npm install -g oh-my-claude-sisyphus omc`

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
```

`# 从 issue/PR 编号创建 worktree omc teleport '#42' # 为功能分支创建 worktree omc teleport add-auth # 列出所有 worktrees omc teleport list # 移除 worktree omc teleport remove ./path # 从完整 URL omc teleport https://github.com/owner/repo/issues/42`

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
```

`# 检查速率限制状态 omc wait # 启动自动恢复守护进程 omc wait --start # 控制后台守护进程 omc wait daemon start omc wait daemon stop # 扫描被阻塞的会话 omc wait detect # 显示详细状态 omc wait status`

```
1
2
3
4
5
6
7
8
9
10
11
12
```

`# 设置渠道 omc config-stop-callback telegram --enable --token <token> --chat <id> omc config-stop-callback discord --enable --webhook <url> omc config-stop-callback slack --enable --webhook <url> omc config-stop-callback file --enable --path ~/.claude/logs/{date}.md # 管理配置文件 omc config-notify-profile --list omc config-notify-profile work --show # 使用配置文件启动 OMC_NOTIFY_PROFILE=work omc`

```
1
2
3
4
5
6
7
8
```

`# 分屏 tmux，Claude + Codex 并排 omc interop # 运行 HUD 状态行 omc hud # 每秒实时 HUD 刷新 omc hud --watch --interval 1000`

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
```

`{ "notifications": { "verbosity": "session", "telegram": { "botToken": "123456:ABC-DEF", "chatId": "-1001234567890" }, "discord": { "webhookUrl": "https://discord.com/api/webhooks/...", "mention": "<@123456789>" }, "slack": { "webhookUrl": "https://hooks.slack.com/services/T.../B.../xxx" }, "events": { "session-end": { "telegram": true, "discord": true }, "ask-user-question": { "telegram": true }, "session-start": { "discord": true } } } }`


`curl -fsSL https://raw.githubusercontent.com/yeachan-heo/oh-my-claudecode/main/install.sh | bash`


`/omc-setup`


`autopilot build a hello world REST API`


`/omc-doctor`


`autopilot build a user auth system with JWT`


`ralph refactor the entire API layer`


`ulw fix all 5 failing tests`


`team 3:executor build the dashboard`


`plan the database migration strategy`


`/ultraqa`

```
1
2
3
4
5
```

`# 对需要额外推理的 executor 任务使用 Opus Task(subagent_type="oh-my-claudecode:executor", model="opus", ...) # 对快速验证检查使用 Haiku Task(subagent_type="oh-my-claudecode:verifier", model="haiku", ...)`


`tmux new -s dev`

```
1
2
3
4
5
```

`# 安装 Codex CLI npm install -g @openai/codex # 安装 Gemini CLI npm install -g @google/gemini-cli`

```
1
2
3
4
5
```

`# 清除所有活动的模式状态 /cancel --force # 或清除特定模式的状态 state_clear`

```
1
2
3
4
5
```

`# 检查 Agent 流追踪以查找问题 /trace # 取消并重启当前模式 /cancel`

```
1
2
3
4
5
```

`# 检查哪些 Hook 被跳过 echo $OMC_SKIP_HOOKS # 运行完整诊断检查 /omc-doctor`


---

**原文链接**: [https://yeachan-heo.github.io/oh-my-claudecode-website/docs.html#introduction](https://yeachan-heo.github.io/oh-my-claudecode-website/docs.html#introduction)