---
title: "The Execution"
description: "Delivering Horizon 1 and Horizon 2 migrations with Azure Migrate, MI Link, and DevOps — MCEM Stage 3: Empower and Achieve"
sidebar:
  order: 1
---

:::tip[TL;DR]
H1 runs in parallel with H2. VMs and SQL MI migrate in waves over weeks;
.NET containerization and Azure SQL DB take months. Every wave follows a
pre-migrate → migrate → validate → optimize guardrail. The customer team
builds cloud skills throughout.
:::

The roadmap is approved. The workloads are assigned to horizons. Now we
execute — methodically, with guardrails, and with continuous validation
at every step.

## MCEM Stage 3 — Empower and Achieve

This is **MCEM Stage 3: Empower and Achieve**. The customer team is enabled
to deliver the migration with Microsoft support, tooling, and best practices.
The goal is not just to move workloads — it is to build the customer's
capability to operate and evolve their Azure environment independently.

## Execution by Horizon

```mermaid
gantt
  title Migration Execution Timeline
  dateFormat YYYY-MM
  axisFormat %b %Y
  section Horizon 1
    VM assessment & planning     :h1a, 2026-01, 1M
    VM migration waves           :h1b, after h1a, 2M
    SQL MI migration & validation:h1c, after h1a, 2M
    Fabric mirroring setup       :h1d, after h1c, 1M
  section Horizon 2
    .NET upgrade & containerization :h2a, 2026-03, 3M
    Azure SQL DB migration          :h2b, after h2a, 1M
    CI/CD pipeline setup            :h2c, 2026-03, 2M
    Fabric mirroring setup          :h2d, after h2b, 1M
```

### Horizon 1 — Execution Steps

1. **Prepare landing zone** (CAF [Ready](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/) phase) —
   Azure Virtual Network, NSGs, Azure Backup vaults, monitoring baselines
2. **Migrate VMs in waves** — Use Azure Migrate to replicate and cut over
   VMs in planned waves, starting with low-risk workloads
3. **Migrate databases** — Use the Managed Instance link (preferred for
   minimal downtime) or Azure Database Migration Service (DMS) for
   online migration to SQL Managed Instance
4. **Validate and optimize** — Run functional tests, validate performance,
   right-size VMs based on actual Azure utilization data
5. **Enable Fabric mirroring** — Configure SQL MI Mirroring to OneLake
   for workloads where analytics is a strategic priority

### Horizon 2 — Execution Steps

1. **Upgrade .NET applications** — Use the .NET Upgrade Assistant or the
   GitHub Copilot modernization agent to migrate from .NET Framework
   to .NET 8+, resolve breaking changes
2. **Containerize** — Create Dockerfiles, set up Azure Container Registry,
   configure Azure Container Apps environments
3. **Set up CI/CD** — Build GitHub Actions or Azure DevOps pipelines for
   automated build, test, and deployment
4. **Migrate databases** — Move to Azure SQL Database, adjust connection
   strings, validate query performance
5. **Enable Fabric mirroring** — Configure Azure SQL DB mirroring to OneLake

## Migration Guardrails

Every migration wave follows the same validation pattern:

```mermaid
graph LR
  classDef step fill:#0078d4,stroke:#005a9e,color:#fff
  PRE(["<b>Pre-migration</b><br/>Backup, snapshot,<br/>rollback plan"]):::step
  MIG(["<b>Migrate</b><br/>Replicate and<br/>cut over"]):::step
  VAL(["<b>Validate</b><br/>Functional tests,<br/>performance checks"]):::step
  OPT(["<b>Optimize</b><br/>Right-size,<br/>tune, monitor"]):::step
  PRE --> MIG --> VAL --> OPT
```

:::caution[Never skip validation]
Every workload gets a validation checkpoint after migration. Functional
testing, performance benchmarking, and user acceptance — all before the
on-premises source is decommissioned. Rollback plans remain active until
validation is complete.
:::

## Building Customer Capability

Execution is also a learning opportunity. Throughout the migration, the
customer team builds skills in:

- Azure networking and security fundamentals
- Infrastructure-as-code (Bicep or Terraform)
- Container operations and CI/CD pipelines
- Fabric administration and analytics development
- Cost management and optimization practices

By the time the migration is complete, the customer does not just have
workloads in Azure — they have a team that knows how to operate them.

[← Back to Horizons](/dc2fabric/horizons/) · [Continue to Outcomes →](/dc2fabric/outcomes/)
