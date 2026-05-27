# Paper Writing Skills

面向科研论文写作的一套 Agent Skills。它把“理解研究内容”和“写论文”分开处理，适合深度学习、机器学习、计算科学，以及其他需要代码、实验、图表和论文叙事共同支撑的研究项目。

这套 skills 的目标不是让 agent 简单润色英文，而是让 agent 先建立事实边界，再建立写作策略，最后逐节完成可以投稿的论文草稿。

```text
code / logs / results / notes
        |
        v
content_analysis.md       target papers / journal style
        |                         |
        +-----------+-------------+
                    v
          writing_blueprint.md
                    |
                    v
title / abstract / introduction / methods / results / discussion / conclusion
                    |
                    v
          research-writing-reviser
```

## Core Idea

科研论文写作有两个容易混在一起的问题：

1. 研究事实是什么：模型设计、实验设置、结果、消融、失败实验、限制条件。
2. 论文应该怎样讲：目标读者是谁、目标期刊怎样组织引言和讨论、贡献点应该放在哪里、claim 应该多强。

本项目把这两个问题拆成两个中间文件：

| File | Role | Owner Skill |
| --- | --- | --- |
| `content_analysis.md` | 技术事实、证据链、贡献候选、claim 边界 | `deep-learning-content-analyzer` |
| `writing_blueprint.md` | 目标期刊写法、读者路径、章节 move map、术语策略 | `science-writing-foundations` |

后续所有章节写作 skills 都优先读取这两个文件。这样 agent 不需要每次重新猜贡献点，也能避免“摘要说一套、引言说一套、结果支撑不了讨论”的问题。

## Skill Catalog

### `deep-learning-content-analyzer`

用于分析一个深度学习项目文件夹，把代码和实验材料转成写论文可用的技术证据图。

它会做什么：

- 找核心模型文件、训练脚本、评估脚本、数据处理、config、实验日志、结果表、checkpoint 和项目笔记。
- 区分真正的模型/方法创新、工程实现、参数调优、复现实验和普通实验管线。
- 把贡献候选逐条追溯到代码、配置、日志或结果。
- 标记不可靠、缺失、过期或无法支撑强 claim 的证据。
- 生成或更新 `content_analysis.md`，供后续写摘要、引言、方法、结果和讨论使用。

典型输出：

```text
content_analysis.md
  - project map
  - core technical idea
  - model / data / training / evaluation evidence
  - result summary
  - contribution candidates
  - claim boundaries
  - missing evidence
```

### `science-writing-foundations`

用于分析目标论文和目标期刊写法，生成整篇论文的写作蓝图。

它会做什么：

- 阅读用户提供的目标论文、目标期刊文章或已有草稿。
- 反向工程标题、摘要、引言、方法、结果、讨论、结论的常见结构。
- 把目标论文中的写作方式抽象成“功能”，例如建立重要性、缩小问题、指出 gap、说明 present study、解释贡献、限定 claim。
- 结合 `content_analysis.md`，把研究事实转成目标读者能接受的论文叙事。
- 生成 `writing_blueprint.md`，作为所有章节 skills 的共享写作策略。

典型输出：

```text
writing_blueprint.md
  - target journal / reader / article type
  - target paper conventions
  - global narrative arc
  - central contribution statement
  - section-level move maps
  - terminology and acronym decisions
  - claim and certainty boundaries
  - downstream handoff notes
```

### `research-title-writer`

用于创建、诊断、缩短或改写科研论文标题。

它会做什么：

- 基于 `content_analysis.md` 确认标题承诺是否被结果支撑。
- 基于 `writing_blueprint.md` 匹配目标期刊的标题长度、冒号使用、关键词密度和 acronym 风格。
- 生成不同侧重点的标题版本：方法导向、问题导向、结果导向、应用导向、机制导向。
- 检查标题中的名词堆叠、介词链、语法歧义、关键词遗漏和过度承诺。
- 协助生成标题和关键词之间的匹配方案。

常见输出：

```text
5-10 candidate titles
title-content alignment notes
keyword coverage notes
recommended final title
```

### `research-abstract-writer`

用于起草、压缩、诊断或改写摘要，包括普通摘要、结构式摘要、会议摘要和 journal-specific abstract。

它会做什么：

- 读取 `content_analysis.md` 中的核心贡献、方法和结果证据。
- 读取 `writing_blueprint.md` 中的目标读者、摘要 move map、词数限制和 claim 边界。
- 组织摘要中的背景、gap、目的、方法、关键结果、贡献和意义。
- 在词数限制内保留最重要的贡献，而不是平均压缩所有信息。
- 输出 word count、sentence-level move map 和必要的 claim 风险提示。

常见输出：

```text
abstract draft
word count
sentence-level move map
claim / evidence warnings
```

### `research-introduction-writer`

用于写引言、改引言、建立文献地图、诊断 gap 和组织 present study。

它会做什么：

- 把背景从目标读者能进入的位置开始，逐步收窄到具体研究问题。
- 组织选择性的文献地图，而不是堆砌 bibliography。
- 明确 gap、limitation、uncertainty、opportunity 或 unresolved problem。
- 把用户的研究设计成“这个 gap 之后自然出现的下一步”。
- 检查每一段的功能：为什么需要这段、它如何推动读者进入当前研究。
- 避免编造文献和 unsupported novelty claim。

常见输出：

```text
paragraph-level outline
literature map
gap statement variants
Introduction draft
missing citation list
```

### `research-methods-writer`

用于写 Methods、Materials and Methods、Methodology、Model、Dataset、Training、Evaluation 或 Implementation 相关章节。

它会做什么：

- 从 `content_analysis.md` 中提取模型结构、数据、预处理、训练、推理、评估、baseline 和配置细节。
- 按目标期刊习惯决定主文和 supplementary 的信息密度。
- 把方法写成读者可理解、可评估、可复现的过程，而不是代码注释或实验记录。
- 区分用户自己的方法、标准过程、引用自前人的方法和普通实现细节。
- 标记缺失的超参数、数据划分、baseline 设置、随机种子、评估协议和硬件/软件环境。

常见输出：

```text
Methods section outline
model / data / training / evaluation subsections
reproducibility audit
main-text vs supplement split
```

### `research-results-writer`

用于写 Results、Experiments、Evaluation、Ablation、Benchmark、Case Study 或 Results and Discussion。

它会做什么：

- 把结果句子逐条连接到表格、图、日志、metric、baseline 或用户确认的数据。
- 决定结果顺序：按研究问题、实验、数据集、指标、模型组件、图表或消融组织。
- 引导读者看图表，而不是机械列数字。
- 区分 observed result、comparison、interpretation 和 implication。
- 对 noisy、limited、preliminary 或 indirect evidence 使用合适的 certainty language。
- 检查 Results 是否支撑 Abstract、Introduction 和 Discussion 的主要 claim。

常见输出：

```text
Results outline
figure/table narrative
ablation writeup
evidence-to-claim map
certainty warnings
```

### `research-discussion-writer`

用于写 Discussion、限制、意义、未来工作，或把 Results and Discussion 拆分/合并。

它会做什么：

- 从关键结果出发解释意义，而不是重复 Results。
- 把发现和已有研究、目标读者关心的问题、方法贡献或应用场景联系起来。
- 根据证据强度决定 claim 的强弱。
- 写出有功能的 limitations：哪些限制影响解释、泛化、应用或下一步研究。
- 组织 future work，使其从真实限制和真实机会中产生。
- 检查 Discussion 是否兑现 Introduction 提出的 gap，同时不超出 Results。

常见输出：

```text
Discussion outline
interpretation map
literature comparison plan
limitations and future work
claim calibration notes
```

### `research-conclusion-writer`

用于写 Conclusion、最终 Discussion 段落、贡献总结、应用意义和 future direction。

它会做什么：

- 从 Results 和 Discussion 中提炼最后应让读者记住的贡献。
- 避免把 Conclusion 写成第二个 Abstract。
- 简洁总结研究做了什么、发现了什么、贡献是什么、边界在哪里。
- 根据目标期刊习惯决定是否强调应用、限制或未来工作。
- 检查最终结论是否引入新证据、过度推广或弱化了实际贡献。

常见输出：

```text
Conclusion draft
final Discussion paragraph
take-home contribution statement
ending variants
```

### `research-writing-reviser`

用于全文或单节的结构修订、语言修订、claim audit 和投稿前一致性检查。

它会做什么：

- 检查标题、摘要、引言、方法、结果、讨论和结论是否讲同一个故事。
- 检查每个 claim 是否被结果或方法支撑。
- 诊断段落功能、句子流、known-to-new 信息顺序、术语漂移和贡献归属不清。
- 修正影响科学含义的语法和词汇问题，例如 tense、article、preposition、active/passive、pronoun reference。
- 在投稿前输出 high-impact findings，而不是只做表面润色。

常见输出：

```text
pre-submission audit
cross-section consistency report
claim-to-evidence table
revised text
terminology audit
```

## Installation Model

本仓库地址：

```bash
export PAPER_WRITING_SKILLS_REPO="https://github.com/wanglixin-DLUT/paper-writing-skills.git"
```

如果你的 GitHub 账户已经配置 SSH key，也可以使用 SSH 地址：

```bash
export PAPER_WRITING_SKILLS_REPO="git@github.com:wanglixin-DLUT/paper-writing-skills.git"
```

### Clone Once

先把 skills 仓库 clone 到本地：

```bash
git clone "$PAPER_WRITING_SKILLS_REPO" ~/paper-writing-skills
cd ~/paper-writing-skills
```

后续更新：

```bash
cd ~/paper-writing-skills
git pull
```

### Skill Directory List

所有平台安装时都使用这 10 个目录。下面的安装命令默认你已经在 zsh/bash 中定义了这个数组。同名 skill 会被替换。

```bash
SKILLS=(
  deep-learning-content-analyzer
  science-writing-foundations
  research-title-writer
  research-abstract-writer
  research-introduction-writer
  research-methods-writer
  research-results-writer
  research-discussion-writer
  research-conclusion-writer
  research-writing-reviser
)
```

## Install To Codex

Codex 的本地 skill 安装路径是 `$CODEX_HOME/skills`，未设置 `CODEX_HOME` 时通常是 `~/.codex/skills`。这是原生全局安装方式，适合个人长期使用。

### Codex Global Install

```bash
cd ~/paper-writing-skills

SKILLS=(
  deep-learning-content-analyzer
  science-writing-foundations
  research-title-writer
  research-abstract-writer
  research-introduction-writer
  research-methods-writer
  research-results-writer
  research-discussion-writer
  research-conclusion-writer
  research-writing-reviser
)

DEST="${CODEX_HOME:-$HOME/.codex}/skills"
mkdir -p "$DEST"

for skill in "${SKILLS[@]}"; do
  rm -rf "$DEST/$skill"
  cp -R "$skill" "$DEST/$skill"
done
```

安装后重启 Codex，让新 skills 被发现。

### Codex Project-Scoped Use

Codex 当前更适合用全局 skills。若希望某个论文项目固定使用这套写作系统，推荐把本仓库作为项目依赖纳入 git，并在项目级 `AGENTS.md` 中声明使用方式。

```bash
cd /path/to/your-paper-project
git submodule add "$PAPER_WRITING_SKILLS_REPO" agent-skills/paper-writing-skills
```

创建或更新 `AGENTS.md`：

```md
# Paper Writing Workflow

For scientific manuscript writing tasks, use the skills under:

agent-skills/paper-writing-skills/

Workflow:
1. Use `deep-learning-content-analyzer` to create or update `content_analysis.md`.
2. Use `science-writing-foundations` to create or update `writing_blueprint.md`.
3. Use section-specific skills for title, abstract, introduction, methods, results, discussion, and conclusion.
4. Use `research-writing-reviser` for pre-submission consistency and claim audit.
```

这种方式的优点是项目可复现、团队可共享；缺点是它依赖 agent 读取项目说明，不等同于 Codex 的全局 native skill install。

## Install To Claude Code

Claude Code 原生支持 personal skills 和 project skills。

### Claude Code Global Install

个人全局安装路径：

```text
~/.claude/skills/<skill-name>/SKILL.md
```

安装命令：

```bash
cd ~/paper-writing-skills

SKILLS=(
  deep-learning-content-analyzer
  science-writing-foundations
  research-title-writer
  research-abstract-writer
  research-introduction-writer
  research-methods-writer
  research-results-writer
  research-discussion-writer
  research-conclusion-writer
  research-writing-reviser
)

DEST="$HOME/.claude/skills"
mkdir -p "$DEST"

for skill in "${SKILLS[@]}"; do
  rm -rf "$DEST/$skill"
  cp -R "$skill" "$DEST/$skill"
done
```

重启 Claude Code 后生效。

### Claude Code Project Install

项目级安装路径：

```text
.claude/skills/<skill-name>/SKILL.md
```

方式 A：直接把 skills 复制进项目并提交到 git。

```bash
cd /path/to/your-paper-project
mkdir -p .claude/skills

TMP_SKILLS_DIR="$(mktemp -d)"
git clone "$PAPER_WRITING_SKILLS_REPO" "$TMP_SKILLS_DIR/paper-writing-skills"

SKILLS=(
  deep-learning-content-analyzer
  science-writing-foundations
  research-title-writer
  research-abstract-writer
  research-introduction-writer
  research-methods-writer
  research-results-writer
  research-discussion-writer
  research-conclusion-writer
  research-writing-reviser
)

for skill in "${SKILLS[@]}"; do
  rm -rf ".claude/skills/$skill"
  cp -R "$TMP_SKILLS_DIR/paper-writing-skills/$skill" ".claude/skills/$skill"
done

git add .claude/skills
git commit -m "Add paper writing skills"
```

方式 B：如果项目还没有 `.claude/skills`，可以把整个仓库作为该目录的 submodule。

```bash
cd /path/to/your-paper-project
mkdir -p .claude
git submodule add "$PAPER_WRITING_SKILLS_REPO" .claude/skills
git commit -m "Add paper writing skills submodule"
```

这种方式要求 `.claude/skills` 目录目前不存在或可以作为 submodule 管理。它的优点是更新简单：

```bash
cd /path/to/your-paper-project/.claude/skills
git pull
```

## Use With Cursor

Cursor 目前更适合通过 Rules 使用这套系统，而不是原生安装 `SKILL.md`。推荐用 Project Rules，因为它可以随项目进入 git。

### Cursor Project Install

把本仓库作为项目依赖：

```bash
cd /path/to/your-paper-project
git submodule add "$PAPER_WRITING_SKILLS_REPO" agent-skills/paper-writing-skills
mkdir -p .cursor/rules
```

创建 `.cursor/rules/paper-writing-skills.mdc`：

```mdc
---
description: Use the paper-writing-skills workflow for scientific manuscript writing, especially deep learning papers and manuscript sections.
alwaysApply: false
---

When the user asks for scientific manuscript writing, use the skill files under:

@agent-skills/paper-writing-skills/deep-learning-content-analyzer/SKILL.md
@agent-skills/paper-writing-skills/science-writing-foundations/SKILL.md
@agent-skills/paper-writing-skills/research-title-writer/SKILL.md
@agent-skills/paper-writing-skills/research-abstract-writer/SKILL.md
@agent-skills/paper-writing-skills/research-introduction-writer/SKILL.md
@agent-skills/paper-writing-skills/research-methods-writer/SKILL.md
@agent-skills/paper-writing-skills/research-results-writer/SKILL.md
@agent-skills/paper-writing-skills/research-discussion-writer/SKILL.md
@agent-skills/paper-writing-skills/research-conclusion-writer/SKILL.md
@agent-skills/paper-writing-skills/research-writing-reviser/SKILL.md

Default workflow:
1. Create or read `content_analysis.md`.
2. Create or read `writing_blueprint.md`.
3. Use the relevant section skill.
4. Run `research-writing-reviser` before submission.

Do not invent data, citations, baselines, or results. Mark missing evidence explicitly.
```

提交到项目：

```bash
git add .cursor/rules/paper-writing-skills.mdc .gitmodules agent-skills/paper-writing-skills
git commit -m "Add paper writing skills workflow"
```

### Cursor Global Use

Cursor 的 User Rules 是全局文本规则，不是 MDC 文件，也不会像 Claude Code 那样原生发现 `SKILL.md`。如果要全局使用，建议：

1. 把本仓库 clone 到固定路径，例如 `~/paper-writing-skills`。
2. 在 Cursor Settings -> Rules -> User Rules 中加入一段短规则。

示例：

```text
For scientific manuscript writing tasks, use my local paper writing workflow in ~/paper-writing-skills. Prefer this order: deep-learning-content-analyzer, science-writing-foundations, section-specific writer, research-writing-reviser. Do not invent data, citations, or unsupported claims.
```

如果需要完整能力，仍然建议每个论文项目使用 Project Rule，并用 `@agent-skills/.../SKILL.md` 显式引用 skill 文件。

## Full Manuscript Workflow

下面是一套从研究项目到投稿稿件的推荐流程。它不是强制线性流程，但按这个顺序做，信息依赖最清楚。

### 0. Prepare The Project Folder

建议每篇论文有一个独立工作目录：

```text
paper-project/
  code/                    # optional: model, training, evaluation
  data-notes/              # dataset notes, preprocessing notes
  experiments/             # logs, result tables, ablations
  figures/                 # candidate figures and tables
  literature/
    target-papers/         # 4-6 target journal papers
    key-references/        # references to cite
  manuscript/
    draft.md               # or .docx / .tex
  content_analysis.md      # generated by deep-learning-content-analyzer
  writing_blueprint.md     # generated by science-writing-foundations
```

最重要的输入不是“让 agent 自己想”，而是把证据放到能被检查的位置。

### 1. Build The Technical Evidence Map

使用 `deep-learning-content-analyzer`。

Prompt 示例：

```text
请使用 deep-learning-content-analyzer 分析这个项目。重点找到核心模型设计文件、训练脚本、评估脚本、config、实验日志、baseline、ablation 和结果表。请生成 content_analysis.md，并标记哪些贡献点有证据支持，哪些还缺实验。
```

完成标准：

- 核心方法能被定位到具体文件或实验。
- 主要结果能追溯到表格、日志或图。
- 贡献点不是凭感觉写的，而是有证据等级。
- 缺失实验和不该过度 claim 的地方被列出。

### 2. Build The Writing Blueprint

使用 `science-writing-foundations`。

Prompt 示例：

```text
请使用 science-writing-foundations，读取 content_analysis.md 和 literature/target-papers/ 中的目标论文，生成 writing_blueprint.md。重点反向工程目标期刊的标题、摘要、引言、方法、结果、讨论和结论写法，并给出我的论文 narrative arc 和 section-level move map。
```

完成标准：

- 有明确目标读者和目标期刊习惯。
- 有一句中心贡献陈述。
- 每个章节有 move map。
- 已确定术语、缩写、claim 强度和文章主线。

### 3. Draft A Working Title And Abstract

先用 `research-title-writer` 和 `research-abstract-writer` 做工作版，不必一开始追求最终版。

Prompt 示例：

```text
请使用 research-title-writer，基于 content_analysis.md 和 writing_blueprint.md 给我 8 个标题版本，并说明每个版本强调的是方法、任务、结果还是应用。
```

```text
请使用 research-abstract-writer 写一个 200 词以内的工作版 abstract。请附上 sentence-level move map，并标记哪些句子依赖尚未完全确认的实验结果。
```

完成标准：

- 标题没有承诺论文做不到的范围。
- 摘要中的方法、结果和贡献都能回到 `content_analysis.md`。
- 摘要和引言计划中的 gap 一致。

### 4. Draft The Introduction

使用 `research-introduction-writer`。

Prompt 示例：

```text
请使用 research-introduction-writer，基于 writing_blueprint.md 和 key-references，先给出 paragraph-level outline：每段功能、需要引用的文献类型、要建立的 gap。确认后再写 Introduction draft。
```

完成标准：

- 引言不是文献堆砌。
- 每段都在帮助读者走向当前研究。
- gap 与当前研究的贡献对应。
- present study 没有提前写成 Results 或 Discussion。

### 5. Draft The Methods

使用 `research-methods-writer`。

Prompt 示例：

```text
请使用 research-methods-writer，根据 content_analysis.md、代码和 config 写 Methods。请分成 model architecture、data preprocessing、training protocol、evaluation setup、baselines、implementation details，并列出缺失的可复现性信息。
```

完成标准：

- 方法细节能支撑 Results 的解释。
- 数据、训练、评估和 baseline 设置足够清楚。
- 用户自己的方法和标准方法被区分。
- 缺失信息被标记，而不是被泛化填补。

### 6. Draft The Results

使用 `research-results-writer`。

Prompt 示例：

```text
请使用 research-results-writer，基于 content_analysis.md 中的结果表、日志、baseline 和 ablation，组织 Results section。每个结果句子都要能追溯到表格、图或日志，并给出 figure/table narrative。
```

完成标准：

- Results 不是流水账，而是有读者路径。
- 关键结果、baseline、ablation 和 secondary results 有明确层级。
- 数字、指标和比较关系可追溯。
- 解释性语言没有超过证据。

### 7. Draft The Discussion

使用 `research-discussion-writer`。

Prompt 示例：

```text
请使用 research-discussion-writer，基于 Results draft、content_analysis.md 和 writing_blueprint.md 写 Discussion outline。请把每个关键结果映射到 interpretation、literature comparison、limitation 和 implication。
```

完成标准：

- Discussion 解释结果的意义，而不是重复结果。
- 文献比较服务于贡献和边界。
- limitations 是真实限制，不是模板句。
- claim strength 与证据强度匹配。

### 8. Draft The Conclusion

使用 `research-conclusion-writer`。

Prompt 示例：

```text
请使用 research-conclusion-writer，基于 Abstract、Results 和 Discussion 写一个简洁 Conclusion。请避免重复摘要，重点收束贡献、关键结果、应用意义和未来工作。
```

完成标准：

- 结论明确说清本研究最终贡献。
- 没有引入新结果或新文献。
- 没有比 Discussion 更强的 claim。
- ending 与目标期刊风格一致。

### 9. Run Pre-Submission Revision

使用 `research-writing-reviser`。

Prompt 示例：

```text
请使用 research-writing-reviser 对全文做 pre-submission audit。重点检查 title、abstract、introduction gap、methods、results、discussion 和 conclusion 是否一致；所有 claim 是否有证据；术语和贡献表述是否稳定。请先输出问题清单，再给修改建议。
```

完成标准：

- 标题承诺、摘要贡献、引言 gap、结果证据、讨论解释和结论收束相互一致。
- 没有 unsupported claim。
- 术语、缩写、模型名称、数据集名称和指标名称稳定。
- 关键段落的 reader path 清楚。
- 可以进入人工最终校对、格式整理和投稿系统检查。

## Agent Routing Guide

如果你是 agent，按下面规则选择 skill：

| User Request | Use |
| --- | --- |
| “帮我分析这个深度学习项目，找创新点” | `deep-learning-content-analyzer` |
| “帮我参考这些目标论文，设计整篇论文结构” | `science-writing-foundations` |
| “帮我起标题/改标题/检查标题是否夸大” | `research-title-writer` |
| “帮我写摘要/压缩摘要/结构式摘要” | `research-abstract-writer` |
| “帮我写引言/找 gap/组织文献” | `research-introduction-writer` |
| “帮我写方法/模型/训练/评估/可复现性” | `research-methods-writer` |
| “帮我写结果/实验/消融/图表说明” | `research-results-writer` |
| “帮我写讨论/限制/意义/未来工作” | `research-discussion-writer` |
| “帮我写结论/最后一段/贡献收束” | `research-conclusion-writer` |
| “帮我全文检查/投稿前审查/统一术语/降 claim” | `research-writing-reviser` |

通用规则：

- 如果 `content_analysis.md` 存在，先读它。
- 如果 `writing_blueprint.md` 存在，先读它。
- 如果两者冲突，技术事实以 `content_analysis.md` 为准，写作策略可以调整。
- 不要编造数据、文献、baseline、显著性、实验设置或贡献。
- 缺少证据时明确标记，不要用流畅语言掩盖。

## Updating Skills

全局安装后更新：

先复用上文的 `SKILLS` 数组，然后执行：

```bash
cd ~/paper-writing-skills
git pull

DEST="${CODEX_HOME:-$HOME/.codex}/skills"   # Codex
# DEST="$HOME/.claude/skills"               # Claude Code

for skill in "${SKILLS[@]}"; do
  rm -rf "$DEST/$skill"
  cp -R "$skill" "$DEST/$skill"
done
```

项目 submodule 更新：

```bash
cd /path/to/your-paper-project
git submodule update --remote --merge
```

然后根据实际安装方式提交存在的路径：

```bash
# Codex project-scoped use or Cursor project install
git add .gitmodules agent-skills/paper-writing-skills
git commit -m "Update paper writing skills"

# Claude Code submodule install
git add .gitmodules .claude/skills
git commit -m "Update paper writing skills"
```

## When To Use This Suite

适合使用：

- 你已经有一个深度学习项目，但贡献点和论文叙事还没理清。
- 你有实验表、baseline、ablation、日志，但 Results 不知道怎么组织。
- 你想模仿目标期刊写法，但不想复制目标论文句子。
- 你要写英文科研论文，但希望先把中文研究思路转成清楚的英文论文结构。
- 你担心摘要、引言、结果、讨论和结论互相不兑现。
- 你准备投稿前做 claim audit 和一致性检查。

不适合使用：

- 让 agent 编造实验、文献、数据或贡献。
- 在实验结果还未确定时要求最终版摘要和结论。
- 只需要普通英文润色，不需要研究逻辑、证据链或投稿结构检查。

## Repository Structure

```text
paper-writing-skills/
  README.md
  deep-learning-content-analyzer/
    SKILL.md
    references/
    scripts/
  science-writing-foundations/
    SKILL.md
    references/
  research-title-writer/
    SKILL.md
    references/
  research-abstract-writer/
    SKILL.md
    references/
  research-introduction-writer/
    SKILL.md
    references/
  research-methods-writer/
    SKILL.md
    references/
  research-results-writer/
    SKILL.md
    references/
  research-discussion-writer/
    SKILL.md
    references/
  research-conclusion-writer/
    SKILL.md
    references/
  research-writing-reviser/
    SKILL.md
    references/
```

## Platform References

- Claude Code Skills: https://docs.claude.com/en/docs/claude-code/skills
- Claude Code slash commands and skills: https://code.claude.com/docs/en/slash-commands
- OpenAI Agent Skills repository: https://github.com/openai/skills
- Cursor Rules: https://docs.cursor.com/context/rules

## Copyright And Boundaries

这套 skills 的写作思想深受 Hilary Glasman-Deal 教授著作 *Science Research Writing* 的启发。原书对 STEMM 科研写作、非英语母语作者、reverse engineering 写作方法、IMRaD 章节结构、句子功能和写作工具做出了卓越贡献。本仓库只是把这些方法论进一步工程化为 agent 可调用的工作流；所有核心写作教育贡献应归功于原书作者和出版团队。

强烈推荐所有看到这个仓库的人亲自阅读原书。读原书能获得本仓库无法替代的训练过程、例句分析、练习、FAQ、词汇和语法工具。

购买入口：

- 中文版：《英语科技写作（第二版）》，Hilary Glasman-Deal 著，世界图书出版公司，ISBN `9787523202876`
  - 京东 ISBN 搜索：https://search.jd.com/Search?keyword=9787523202876
  - 当当 ISBN 搜索：https://search.dangdang.com/?key=9787523202876
- 英文版：*Science Research Writing: For Native and Non-Native Speakers of English (Second Edition)*, Hilary Glasman-Deal, World Scientific, DOI `10.1142/q0232`
  - World Scientific 官方页面：https://www.worldscientific.com/worldscibooks/10.1142/q0232
  - VitalSource eTextbook：https://www.vitalsource.com/products/science-research-writing-for-native-and-non-native-hilary-glasman-deal-v9781786348340

这套 skills 是对科研写作方法的抽象和工程化，不包含原书长段内容，也不复制目标论文正文。使用时应该总结结构、功能、写作模式和证据关系，不应搬运受版权保护的文本。

这套系统不会替你发明研究贡献。它的价值在于把事实、证据、写作策略和 claim 边界分开，让论文从技术事实出发，经过目标期刊叙事组织，最后形成可审查、可修改、可投稿的稿件。
