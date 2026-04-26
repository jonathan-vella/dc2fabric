---
title: "Horizon 1 — Lift & Shift & Optimize"
description: "Migrate VMs to Azure and SQL Server to SQL Managed Instance for quick wins and reduced risk"
sidebar:
  order: 2
---

:::tip[TL;DR]
Horizon 1 migrates VMs to Azure and databases to SQL Managed Instance in
**4–8 weeks** for many small-to-mid estates, with low application-change risk.
Right-sizing, reservations, and managed database operations can improve cost
and resilience, but quantified savings should come from Azure Migrate and TCO
analysis for the customer estate.
:::

Horizon 1 is about getting to Azure quickly and safely. The applications
do not change. The databases stay compatible. But the infrastructure
underneath becomes modern, managed, and cost-optimized.

## What Moves

| On-Premises           | Azure Target                 | Migration Tool      |
| --------------------- | ---------------------------- | ------------------- |
| Windows Server VMs    | Azure Virtual Machines       | Azure Migrate       |
| SQL Server databases  | Azure SQL Managed Instance   | MI Link / Azure DMS |
| Network configuration | Azure Virtual Network + NSGs | Azure Migrate       |

## The Architecture

```mermaid
%%{init: {'theme':'neutral'}}%%
graph TB
  classDef azure fill:#0078d4,stroke:#005a9e,color:#fff
  classDef db    fill:#038387,stroke:#025356,color:#fff
  classDef ops   fill:#deecf9,stroke:#0078d4,color:#003459
  subgraph vnet["Azure Virtual Network"]
    AVM(["Azure VMs<br/>.NET Framework Apps"]):::azure
    SQLMI[("Azure SQL<br/>Managed Instance")]:::db
  end
  subgraph plat["Platform Services"]
    MON["Azure Monitor"]:::ops
    BAK["Azure Backup"]:::ops
  end
  AVM -->|"App traffic"| SQLMI
  AVM -.->|"Telemetry"| MON
  SQLMI -.->|"Telemetry"| MON
  SQLMI -.->|"Backup"| BAK
  style vnet fill:#e6f3ff,stroke:#0078d4
  style plat fill:#f0f9f0,stroke:#107c10
```

## Why SQL Managed Instance

SQL Managed Instance is the key to Horizon 1. It provides near-100%
compatibility with on-premises SQL Server — which means databases move
without application code changes.

**What you keep:**

- SQL Agent jobs
- Cross-database queries
- CLR assemblies
- Linked servers (within the managed instance)
- Database mail

**What you gain:**

- Automated patching and backups
- Built-in high availability
- Transparent data encryption by default
- Elastic scaling without downtime
- Pay-per-use instead of upfront licensing

## Quick Wins

Horizon 1 delivers measurable value within weeks:

- **Right-sizing**: VMs are provisioned to match actual utilization,
  not peak-plus-headroom estimates from five years ago
- **Reserved instances**: Commit to 1-year or 3-year terms for
  eligible, predictable workloads after sizing is validated
- **Automated operations**: Patching, backups, and monitoring move
  from manual processes to managed services
- **Decommission on-premises**: Reduce data center footprint and
  associated facilities costs

## Before and After

| Dimension            | Before (On-Premises)              | After (Horizon 1)                    |
| -------------------- | --------------------------------- | ------------------------------------ |
| **Infrastructure**   | Self-managed VMs, manual patching | Azure VMs with automated patching    |
| **Database**         | SQL Server (self-managed)         | SQL Managed Instance (fully managed) |
| **Backups**          | Manual, on-site                   | Automated, geo-redundant             |
| **Monitoring**       | Basic or manual                   | Azure Monitor with alerts            |
| **Cost model**       | CapEx, over-provisioned           | OpEx, right-sized                    |
| **Analytics**        | Manual spreadsheet exports        | SQL MI Mirroring → Fabric            |
| **Typical timeline** | —                                 | **4–8 weeks**                        |

:::note[Quantify savings per customer]
Use Azure Migrate business cases, Azure Migrate assessments, and the Azure TCO
Calculator to quantify savings. Percentages vary by utilization, license
position, SKU selection, region, reservations, and operational practices.
:::

:::tip[H1 is not a compromise]
Lift and shift is sometimes dismissed as "just moving the problem to the
cloud." But when done right — with proper right-sizing, reserved instances,
and managed database services — H1 delivers immediate, measurable business
value while buying time for deeper modernization where it matters most.
:::

## What Comes Next

Once workloads are running in Azure, you have two paths:

1. **Stay in H1** — For stable, low-change workloads, this is the right answer.
   Add [Fabric integration via SQL MI Mirroring](/dc2fabric/horizons/h1-fabric/)
   to unlock analytics without any further changes.
2. **Evolve to H2** — For workloads that need elasticity, modern DevOps, or
   cloud-native capabilities, plan a [Horizon 2 modernization](/dc2fabric/horizons/h2-modernize/).

[← Back to Horizons Overview](/dc2fabric/horizons/) · [Next: H1 + Fabric →](/dc2fabric/horizons/h1-fabric/)
