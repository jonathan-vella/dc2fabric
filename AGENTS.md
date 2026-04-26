# dc2fabric Agent Guide

> Implementation conventions for dc2fabric, the datacenter-to-Azure-and-Fabric modernization journey powered by APEX.

dc2fabric uses the public site for business-domain context and APEX for the agentic infrastructure workflow. Agents
should understand both layers: the site explains the modernization journey, while this repository's workflow files,
skills, instructions, and validation scripts define how implementation work is planned, generated, and checked.

## dc2fabric Context

- Treat `site/src/content/docs/` as the source for the modernization story: CAF strategy, MCEM stages, workload
  assessment, H1 / H2 Horizons, migration execution, Microsoft Fabric outcomes, and industry examples.
- Treat `.github/skills/workflow-engine/templates/workflow-graph.json` as the source for workflow order, gates,
  outputs, optional design paths, and Bicep or Terraform routing.
- Keep APEX terminology when describing the agentic platform. Keep dc2fabric terminology when describing the external
  product, public documentation, and modernization journey.
- Do not describe the former weekly upstream sync as active. The workflow file has been deleted, so repo guidance is
  owned here unless a separate change restores a sync model.

## Setup Commands

```bash
# Clone this repository and open it in VS Code.
git clone https://github.com/jonathan-vella/dc2fabric.git
cd dc2fabric
code .

# F1 -> Dev Containers: Reopen in Container

# Install Node.js dependencies for validation scripts and linting.
npm install

# Optional: one-time replacement for derived repositories created from this repo.
npm run init -- --dry-run
npm run init

# Azure and GitHub environment setup for deployment work.
npm run setup
```

Python dependencies for diagrams, Azure Pricing MCP, and `apex-recall` are installed by the dev container's
`post-create.sh` script. Manual `pip install` should not be needed for normal repository work.

## Build and Validation

```bash
# Full validation suite
npm run validate:all

# Frequently used focused checks
npm run lint:md
npm run lint:json
npm run validate:instruction-checks
npm run lint:docs-freshness
npm run validate:no-hardcoded-counts
npm run validate:workflow-graph
npm run lint:workflow-table-sync
npm run validate:agent-registry
npm run validate:iac-security-baseline

# Agent and skill checks
npm run lint:agent-frontmatter
npm run lint:skills-format
npm run validate:skill-checks

# Artifact and governance checks
npm run lint:artifact-templates
npm run lint:h2-sync
npm run lint:governance-refs

# Session and lock checks
npm run validate:session-state
npm run validate:session-lock

# E2E benchmark harness
npm run e2e:validate
npm run e2e:benchmark
```

IaC validation:

```bash
# Bicep validation, replace {project} with the project folder.
bicep build infra/bicep/{project}/main.bicep
bicep lint infra/bicep/{project}/main.bicep

# Terraform validation.
terraform fmt -check -recursive infra/terraform/
cd infra/terraform/{project} && terraform init -backend=false && terraform validate
npm run validate:terraform
```

Pre-commit and pre-push hooks are installed through Lefthook:

```bash
npm run prepare
```

## Code Style

### Naming Conventions

Follow Azure Cloud Adoption Framework naming. Keep names predictable, short enough for Azure limits, and consistent
across generated artifacts.

| Resource        | Abbreviation | Pattern                     | Max Length |
| --------------- | ------------ | --------------------------- | ---------- |
| Resource Group  | `rg`         | `rg-{project}-{env}`        | 90         |
| Virtual Network | `vnet`       | `vnet-{project}-{env}`      | 64         |
| Key Vault       | `kv`         | `kv-{short}-{env}-{suffix}` | 24         |
| Storage Account | `st`         | `st{short}{env}{suffix}`    | 24         |
| App Service     | `app`        | `app-{project}-{env}`       | 60         |

### Required Tags

Every Azure resource must include the required governance tags unless a generated plan documents an approved exception.

| Tag           | Example Values           |
| ------------- | ------------------------ |
| `Environment` | `dev`, `staging`, `prod` |
| `ManagedBy`   | `Bicep` or `Terraform`   |
| `Project`     | Project identifier       |
| `Owner`       | Team or individual name  |

### Default Regions

- Primary: `swedencentral` for EU GDPR-aligned workloads.
- Static Web Apps exception: `westeurope`.
- Failover: `germanywestcentral`.

### Azure Verified Modules First

Prefer Azure Verified Modules over raw resource definitions when an appropriate module exists.

- Bicep: `br/public:avm/res/{provider}/{resource}:{version}`
- Terraform: `registry.terraform.io/Azure/avm-res-{provider}-{resource}/azurerm`

### Unique Suffix Pattern

Generate a suffix once and pass it everywhere.

- Bicep: `uniqueString(resourceGroup().id)`
- Terraform: `random_string` with lowercase output

## Security Baseline

These requirements apply to generated Azure infrastructure unless the approved governance constraints say otherwise.

- TLS 1.2 minimum on all services.
- HTTPS-only traffic where the service supports it.
- No public blob access.
- No shared key access on Storage Accounts; use Microsoft Entra ID.
- Managed identity preferred over keys and connection strings.
- Microsoft Entra-only authentication for SQL.
- HTTP/2 enabled for App Service.
- Container Registry admin user disabled.
- SSL enforcement for MySQL and PostgreSQL.
- Public network access disabled for production data services, with documented dev and test exceptions only.
- No hardcoded secrets, connection strings, API keys, or tokens.
- Key Vault references for secrets that applications need at runtime.
- Check `04-governance-constraints.md` before coding infrastructure for subscription-level policy requirements.

## Agent Workflow

The workflow is a gated, multi-step APEX process. Use the workflow graph as the machine-readable source of truth rather
than maintaining a separate hard-coded count or order in prose.

| Step | Phase                  | Agent or Track                 | Main Output                      | Gate       |
| ---- | ---------------------- | ------------------------------ | -------------------------------- | ---------- |
| 1    | Requirements           | `02-Requirements`              | `01-requirements.md`             | Approval   |
| 2    | Architecture           | `03-Architect`                 | Assessment and cost estimate     | Approval   |
| 3    | Design (optional)      | `04-Design`                    | Diagrams and ADRs                | —          |
| 3.5  | Governance             | `04g-Governance`               | Governance constraints           | Approval   |
| 4    | IaC Plan               | `05-IaC Planner`               | Implementation plan and diagrams | Approval   |
| 5    | IaC Code               | `06b-Bicep` or `06t-Terraform` | IaC project folder               | Validation |
| 6    | Deploy                 | `07b-Bicep` or `07t-Terraform` | `06-deployment-summary.md`       | Approval   |
| 7    | As-Built Documentation | `08-As-Built`                  | `07-*.md` documentation suite    | —          |

All workflow artifacts go to `agent-output/{project}/`. The requirements artifact decides the IaC tool, and the
planner routes implementation to the matching Bicep or Terraform track.

Reviews target AI-generated decisions such as requirements, architecture, governance, plans, and code. Deployment
previews and plan outputs are treated as tool evidence rather than creative content.

## Commit and PR Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>[optional scope]: <description>
```

| Type       | Purpose                               |
| ---------- | ------------------------------------- |
| `feat`     | New feature                           |
| `fix`      | Bug fix                               |
| `docs`     | Documentation only                    |
| `refactor` | Code refactor with no behavior change |
| `ci`       | CI or configuration changes           |
| `chore`    | Maintenance work                      |

Useful scopes include `agents`, `skills`, `instructions`, `bicep`, `terraform`, `mcp`, `docs`, and `scripts`.

Run `npm run lint:md` and the relevant focused validations before committing.

## Conventions Detail

Load deeper guidance only when the task touches the related area:

- Bicep conventions: `infra/bicep/AGENTS.md`
- Terraform conventions: `infra/terraform/AGENTS.md`
- Azure Developer CLI manifest rules: `.github/instructions/azure-yaml.instructions.md`
- Azure defaults: `.github/skills/azure-defaults/SKILL.md`
- Workflow DAG: `.github/skills/workflow-engine/templates/workflow-graph.json`
- Count source of truth: `tools/registry/count-manifest.json`
- Validation reference:
  [Validation and Linting Reference][validation-reference]

[validation-reference]: https://jonathan-vella.github.io/azure-agentic-infraops/reference/validation-reference/
