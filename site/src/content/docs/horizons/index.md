---
title: "The Horizons Model"
description: "Designing a modernization roadmap with Horizon 1 (Lift & Shift) and Horizon 2 (Modernize) — MCEM Stage 2: Inspire and Design"
sidebar:
  order: 1
---

:::tip[TL;DR]
Not every workload needs the same treatment. Horizon 1 (Lift & Shift) gets
workloads to Azure in weeks with minimal risk. Horizon 2 (Modernize) re-architects
for cloud-native agility over months. Strategy decides which path each workload takes.
:::

The assessment gave us the evidence. Now we design the roadmap.
**Not every workload needs the same treatment.** The Horizons model
provides a structured way to match each workload to the right level of
modernization — based on business strategy, not technical ambition.

## MCEM Stage 2 — Inspire and Design (continued)

Horizons design is the second half of **MCEM Stage 2: Inspire and Design**.
We take the assessment findings, overlay the customer's strategic priorities,
and produce a concrete plan that balances quick wins with long-term
transformation.

## Two Horizons

```mermaid
graph TB
  classDef azure  fill:#0078d4,stroke:#005a9e,color:#fff
  classDef fabric fill:#742774,stroke:#5a1e5a,color:#fff
  subgraph h1["Horizon 1 — Lift & Shift & Optimize"]
    H1_VM(["VMs → Azure VMs"]):::azure
    H1_SQL[("SQL Server → SQL Managed Instance")]:::azure
    H1_FAB(["SQL MI Mirroring → Fabric"]):::fabric
  end
  subgraph h2["Horizon 2 — Modernize"]
    H2_APP(["NET → Containerized .NET"]):::azure
    H2_SQL[("SQL Server → Azure SQL Database")]:::azure
    H2_FAB(["Azure SQL DB → Fabric"]):::fabric
  end
  H1_VM --> H1_SQL
  H1_SQL -.-> H1_FAB
  H2_APP --> H2_SQL
  H2_SQL -.-> H2_FAB
  style h1 fill:#e6f3ff,stroke:#0078d4
  style h2 fill:#e6f3ff,stroke:#0078d4
```

### Horizon 1 — Lift & Shift & Optimize

Move workloads to Azure with minimal application changes.
VMs migrate to Azure VMs. SQL Server databases migrate to
**Azure SQL Managed Instance** — a fully managed service that
provides near-100% compatibility with on-premises SQL Server.

**Why choose H1?**

- Fast time to value — weeks, not months
- Minimal application risk — the code does not change
- Immediate infrastructure cost savings (right-sizing, reserved instances)
- If aligned with strategy: enable **SQL MI Mirroring to Fabric**
  for near-real-time analytics without re-architecting anything

### Horizon 2 — Modernize

Re-architect applications for cloud-native benefits.
.NET Framework applications are upgraded to .NET (Core) and
containerized. Databases migrate to **Azure SQL Database** —
a cloud-native PaaS service with elastic scale, built-in HA,
and advanced security.

**Why choose H2?**

- Elastic scale — handle traffic spikes without over-provisioning
- CI/CD and DevOps-ready — containers enable modern deployment pipelines
- Lower long-term TCO — PaaS services reduce operational overhead
- If aligned with strategy: enable **Azure SQL DB in Fabric**
  for a unified, AI-ready data platform

## Sequential, Parallel, or Both

The Horizons model is not a rigid sequence. Strategy decides
which pattern fits:

```mermaid
graph LR
  classDef h1     fill:#0078d4,stroke:#005a9e,color:#fff
  classDef h2     fill:#038387,stroke:#025356,color:#fff
  classDef phased fill:#742774,stroke:#5a1e5a,color:#fff
  A{"Workload<br/>assessment"}
  A -->|"Stable, low-change"| H1(["<b>Horizon 1</b><br/>Lift & Shift"]):::h1
  A -->|"High business value,<br/>needs agility"| H2(["<b>Horizon 2</b><br/>Modernize"]):::h2
  A -->|"Start H1,<br/>evolve later"| BOTH(["<b>H1 → H2</b><br/>Phased"]):::phased
```

- **Some workloads stay H1 forever** — they are stable, well-understood,
  and the business does not need them to change
- **Some workloads go directly to H2** — they are high-priority,
  customer-facing, or need capabilities that only cloud-native provides
- **Some workloads start H1 and evolve to H2** — get them to Azure quickly,
  then modernize when the team is ready

:::note[Strategy decides, not technology]
The worst modernization programs try to modernize everything at once.
The best ones let the business strategy determine the right horizon
for each workload — and accept that not everything needs to be cloud-native.
:::

## Deep Dives

Explore each horizon and its Fabric integration in detail:

- [Horizon 1 — Lift & Shift & Optimize](/dc2fabric/horizons/h1-lift-shift/)
- [Horizon 1 + Fabric](/dc2fabric/horizons/h1-fabric/)
- [Horizon 2 — Modernize](/dc2fabric/horizons/h2-modernize/)
- [Horizon 2 + Fabric](/dc2fabric/horizons/h2-fabric/)

[← Back to Assessment](/dc2fabric/assessment/) · [Skip to Execution →](/dc2fabric/execution/)
