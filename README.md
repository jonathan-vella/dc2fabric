<!-- markdownlint-disable MD013 MD033 MD041 -->

# dc2fabric

> A structured modernization journey from datacenter platforms to Azure and Microsoft Fabric, powered by the
> APEX agentic infrastructure workflow.

[![Azure][badge-azure]][azure]
[![Microsoft Fabric][badge-fabric]][fabric]
[![Bicep][badge-bicep]][bicep]
[![Terraform][badge-terraform]][terraform]
[![GitHub Copilot][badge-copilot]][copilot]
[![License: MIT][badge-license]][license]

## Overview

dc2fabric is a modernization guide and implementation workspace for moving from on-premises datacenters to Azure
and Microsoft Fabric. The public site is the business journey: Cloud Adoption Framework strategy, MCEM engagement
stages, workload assessment, H1 / H2 modernization horizons, migration execution, and Fabric outcomes.

This repository adds the implementation engine underneath that journey. APEX, the Agentic Platform Engineering
eXperience for Azure, provides Copilot agents, skills, validation scripts, and Infrastructure as Code patterns that
turn modernization decisions into governed, deployable Azure environments.

Use the repository when you want to:

- Explain the datacenter-to-Fabric journey to customers, partners, or internal teams.
- Capture workload requirements and architecture decisions through a guided agent workflow.
- Generate Bicep or Terraform infrastructure that follows Azure Well-Architected and CAF conventions.
- Validate governance, security, naming, documentation, and artifact quality before deployment.
- Keep journey documentation and implementation guidance aligned in one workspace.

## Journey Model

The public documentation at [dc2fabric](https://jonathan-vella.github.io/dc2fabric/) is the source of truth for the
modernization narrative.

| Area                  | Purpose                                       | Repository support                          |
| --------------------- | --------------------------------------------- | ------------------------------------------- |
| Strategy              | Align outcomes, CAF guidance, and scope       | Requirements and architecture artifacts     |
| Discover and design   | Assess workloads, dependencies, and readiness | Architecture assessment, diagrams, and ADRs |
| Migrate and modernize | Choose H1 or H2 per workload                  | Bicep and Terraform tracks                  |
| Realize the value     | Connect migration to cost and Fabric value    | Cost estimates, summaries, and runbooks     |
| Optimize and grow     | Improve reliability, cost, and security       | As-built docs and governance evidence       |

The Horizons model keeps execution pragmatic:

- **H1**: move eligible workloads quickly with minimal redesign.
- **H2**: modernize selected workloads over time using Azure platform services and Microsoft Fabric integration.

## Prerequisites

| Requirement             | Details                                               |
| ----------------------- | ----------------------------------------------------- |
| VS Code                 | Latest stable release                                 |
| GitHub Copilot          | Active license (Individual, Business, or Enterprise)  |
| Docker Desktop          | For the dev container, or use GitHub Codespaces       |
| Azure subscription      | Optional for planning; required for deployment        |
| Microsoft Fabric tenant | Required only for Fabric-specific implementation work |

## Quick Start

### Clone and Open

```bash
git clone https://github.com/jonathan-vella/dc2fabric.git
cd dc2fabric
code .
```

When VS Code prompts you, select **Reopen in Container**. You can also run
**Dev Containers: Reopen in Container** from the Command Palette. The container installs the Azure CLI, Terraform,
Bicep, GitHub CLI, Node.js, Python, Go, validation tooling, and local MCP server dependencies.

### Install Dependencies

```bash
npm install
```

### Prepare a Derived Repository

If you created your own repository from this one, run the initialization script after the dev container starts:

```bash
npm run init -- --dry-run
npm run init
```

The script replaces template repository references with the current GitHub remote. Review the diff before committing.

### Authenticate for Azure Work

```bash
az login
```

Azure authentication is required for governance discovery, deployment previews, and live deployments. Planning and
local documentation work can run without an Azure session.

## Project Structure

```text
.github/
  agents/                  # Copilot agent definitions
  skills/                  # Reusable agent skills
  instructions/            # Glob-scoped coding and documentation rules
  copilot-instructions.md  # VS Code Copilot orchestration guidance
  workflows/               # Repository-owned GitHub Actions
agent-output/              # Generated workflow artifacts by project
infra/
  bicep/                   # Bicep project templates and conventions
  terraform/               # Terraform project templates and conventions
site/                      # Astro Starlight dc2fabric public documentation
tools/
  mcp-servers/             # Local MCP servers used by agents
  registry/                # Agent, count, and workflow registries
  schemas/                 # JSON schemas for validation
  scripts/                 # Validation and automation scripts
tests/                     # Test fixtures and validation coverage
```

## Working With APEX Agents

The APEX workflow moves from requirements through architecture, governance, implementation planning, IaC generation,
deployment, and as-built documentation. The machine-readable source of truth is
`.github/skills/workflow-engine/templates/workflow-graph.json`.

Start in VS Code Chat with the Orchestrator agent and describe the Azure modernization project. The workflow captures
human approvals at key gates, writes artifacts to `agent-output/{project}/`, and routes infrastructure code to either
`infra/bicep/{project}/` or `infra/terraform/{project}/` based on the requirements decision.

The public site gives agents the business context for dc2fabric. The workflow graph, AGENTS files, skills, and
instruction files give agents the technical source of truth for implementation.

## Infrastructure Tracks

Both Azure IaC tracks are supported.

| Factor     | Bicep                                             | Terraform                                          |
| ---------- | ------------------------------------------------- | -------------------------------------------------- |
| Azure fit  | Native Azure DSL and ARM deployment semantics     | AzureRM provider with state-managed workflows      |
| Modules    | Azure Verified Modules from the Bicep registry    | Azure Verified Modules from the Terraform registry |
| Validation | `bicep build` and `bicep lint`                    | `terraform fmt`, `terraform init`, and `validate`  |
| Deployment | Azure deployment commands or azd where configured | Terraform plan and apply                           |

## Updating This Repository

The former weekly upstream-sync workflow is not active in this branch. Do not assume automated upstream refreshes are
running. Treat the repository guidance, Copilot instructions, site, scripts, and workflows as repo-owned unless a
separate change explicitly restores a sync model.

Manual update options remain available:

- Pull selected improvements from the upstream APEX project by normal Git review.
- Use `npm run sync:workflows` only when you intentionally want to refresh workflow files from the configured script.
- Keep local dc2fabric changes in reviewable commits so updates can be compared cleanly.

## Validation

Run the focused checks for the files you changed, then broaden validation before a pull request.

```bash
# Markdown and repository documentation
npm run lint:md
npm run lint:docs-freshness
npm run validate:no-hardcoded-counts

# Instruction and workflow integrity
npm run validate:instruction-checks
npm run lint:workflow-table-sync
npm run validate:agent-registry

# Full validation suite
npm run validate:all
```

Infrastructure-specific checks:

```bash
# Bicep validation, replace {project}
bicep build infra/bicep/{project}/main.bicep
bicep lint infra/bicep/{project}/main.bicep

# Terraform validation
terraform fmt -check -recursive infra/terraform/
cd infra/terraform/{project} && terraform init -backend=false && terraform validate
```

## Resources

- [dc2fabric public site](https://jonathan-vella.github.io/dc2fabric/)
- [dc2fabric journey map](https://jonathan-vella.github.io/dc2fabric/journey-map/)
- [APEX upstream project](https://github.com/jonathan-vella/azure-agentic-infraops)
- [APEX documentation](https://jonathan-vella.github.io/azure-agentic-infraops/)
- [Azure Cloud Adoption Framework](https://learn.microsoft.com/azure/cloud-adoption-framework/)
- [Microsoft Fabric documentation](https://learn.microsoft.com/fabric/)

## License

[MIT](LICENSE)

[azure]: https://azure.microsoft.com
[badge-azure]: https://img.shields.io/badge/Azure-0078D4?logo=microsoft-azure&logoColor=white
[badge-bicep]: https://img.shields.io/badge/Bicep-0078D4?logo=azure-pipelines&logoColor=white
[badge-copilot]: https://img.shields.io/badge/GitHub_Copilot-000000?logo=github-copilot&logoColor=white
[badge-fabric]: https://img.shields.io/badge/Microsoft_Fabric-0078D4?logo=microsoft&logoColor=white
[badge-license]: https://img.shields.io/badge/License-MIT-yellow.svg
[badge-terraform]: https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white
[bicep]: https://github.com/Azure/bicep
[copilot]: https://github.com/features/copilot
[fabric]: https://www.microsoft.com/microsoft-fabric
[license]: LICENSE
[terraform]: https://www.terraform.io
