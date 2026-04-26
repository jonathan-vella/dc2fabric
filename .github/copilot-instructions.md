# dc2fabric - Copilot Instructions

> VS Code Copilot-specific orchestration guidance.
> For project conventions, build commands, Azure defaults, and validation commands, see the root `AGENTS.md`.

## Operating Context

dc2fabric is the external modernization journey from datacenter platforms to Azure and Microsoft Fabric. APEX is the
agentic platform engineering engine that turns that journey into governed infrastructure artifacts and deployable IaC.

- Use `site/src/content/docs/` for business-domain context: CAF, MCEM, Horizons, migration execution, Fabric outcomes,
  and industry examples.
- Use `AGENTS.md`, `.github/skills/`, `.github/instructions/`, and the workflow graph for technical conventions.
- Treat `.github/copilot-instructions.md` as repo-owned in this branch. The former weekly upstream-sync workflow has
  been deleted and must not be described as active.

## Quick Start

1. Open Chat with `Ctrl+Shift+I`.
2. Select `01-Orchestrator` for the standard workflow, or `01-Orchestrator (Fast Path)` for simple Azure projects.
3. Describe the datacenter-to-Azure or Fabric modernization project.
4. Let the Orchestrator guide requirements, approvals, planning, IaC generation, deployment, and documentation.

Subagent support is configured in `.vscode/settings.json`.

## Session State with apex-recall

All workflow session state is managed through `apex-recall`. Do not read or write `00-session-state.json` directly.

```bash
# On start or resume
apex-recall show <project> --json

# During work
apex-recall checkpoint <project> <step> <phase> --json
apex-recall decide <project> --key <k> --value <v> --json
apex-recall decide <project> --decision "<text>" --rationale "<why>" --json
apex-recall finding <project> --add "<text>" --json

# On completion
apex-recall complete-step <project> <step> --json

# New project
apex-recall init <project> --json

# Review tracking
apex-recall review-audit <project> <step> ... --json
```

If `apex-recall` returns useful context, use it to avoid redundant file reads. If it returns empty results or errors,
continue normally; it is a convenience, not a blocker.

Useful read-only orientation commands include `apex-recall sessions`, `apex-recall files`,
`apex-recall search '<term>'`, and `apex-recall decisions`. Use `--json` when available.

## Workflow Routing

The machine-readable workflow source is `.github/skills/workflow-engine/templates/workflow-graph.json`. Use it for phase
order, gates, optional design paths, outputs, and Bicep or Terraform routing.

High-level flow:

- Requirements capture business goals, constraints, workload details, and the `iac_tool` decision.
- Architecture maps the solution to Azure Well-Architected Framework pillars and cost expectations.
- Design can add diagrams and ADRs when visual or formal decision artifacts are useful.
- Governance discovers subscription policy constraints before implementation planning.
- IaC planning creates the implementation plan and diagrams.
- Code generation routes to Bicep or Terraform based on the recorded requirement decision.
- Deployment agents preview and execute the selected IaC track with approval gates.
- As-built documentation captures the deployed workload and operational handoff.

All generated workflow artifacts belong under `agent-output/{project}/`. Bicep output goes under
`infra/bicep/{project}/`; Terraform output goes under `infra/terraform/{project}/`.

## Skills and Subagents

Skills are auto-discovered by the `description` field in `.github/skills/{name}/SKILL.md`. When a skill applies, load
the relevant `SKILL.md` directly before acting.

At higher context pressure, prefer the skill digest or minimal variant when present:

- Above moderate context use: `SKILL.digest.md`
- Near the context limit: `SKILL.minimal.md`

Use the Explore subagent for read-only codebase research and specify thoroughness explicitly.

| Lookup Type                           | Thoroughness | Examples                                             |
| ------------------------------------- | ------------ | ---------------------------------------------------- |
| Single file read or config check      | `quick`      | Find an `azure.yaml` path or inspect one config file |
| Multi-file comparison or pattern scan | `medium`     | Compare how agents reference skills                  |
| Deep codebase research                | `thorough`   | Audit security patterns or dependency structure      |

Before calling Explore, check whether the information is already present from earlier file reads.

## GitHub Operations

- If a user message starts with `gh`, treat it as a GitHub operation.
- For issues and pull requests, prefer GitHub MCP tools over the `gh` CLI.
- Use `gh` only when there is no equivalent MCP write tool in the current environment.
- In dev containers, do not run `gh auth` commands unless the user asks for CLI authentication troubleshooting.
- `GH_TOKEN` is set through VS Code user settings. Shell exports do not propagate reliably.

## Validation

Use focused validation first, then broaden as needed. Common checks for guidance and documentation changes are:

```bash
npm run lint:md
npm run validate:instruction-checks
npm run validate:terminology
npm run lint:deprecated-refs
npm run lint:workflow-table-sync
npm run lint:docs-freshness
npm run validate:no-hardcoded-counts
npm run lint:links
npm run lint:orphaned-content
npm run validate:agent-registry
```

For full project validation before a PR, run `npm run validate:all`.
