---
title: "Horizon 1 + Fabric"
description: "SQL Managed Instance Mirroring to Microsoft Fabric — analytics without re-architecting"
sidebar:
  order: 3
---

:::tip[TL;DR]
SQL MI Mirroring replicates operational data into Fabric’s OneLake in near
real-time — zero ETL, zero code changes, zero impact on the production
database. Analytics, BI, and ML become available on day one.
:::

Here is the multiplier on Horizon 1: **without changing a single line of
application code**, you can stream operational data from SQL Managed Instance
into Microsoft Fabric for near-real-time analytics, reporting, and AI.

## SQL MI Mirroring to Fabric

SQL Managed Instance Mirroring creates a continuous, low-latency replication
of your database into Fabric's **OneLake** — the unified data lake that
underpins all Fabric workloads.

```mermaid
graph LR
  classDef azure   fill:#0078d4,stroke:#005a9e,color:#fff
  classDef onelake fill:#742774,stroke:#5a1e5a,color:#fff
  classDef bi      fill:#fde8f9,stroke:#742774,color:#3a003a
  SQLMI[("Azure SQL<br/>Managed Instance")]:::azure
  ONELAKE(["OneLake<br/>Fabric Data Lake"]):::onelake
  PBI["Power BI<br/>Reports & Dashboards"]:::bi
  ENG["Data Engineering<br/>Spark / Notebooks"]:::bi
  SCI["Data Science<br/>ML Models"]:::bi
  SQLMI -->|"Mirroring (near real-time)"| ONELAKE
  ONELAKE --> PBI
  ONELAKE --> ENG
  ONELAKE --> SCI
```

## Why This Matters

Traditional approaches to analytics require building ETL pipelines,
maintaining a separate data warehouse, and accepting hours or days
of data latency. SQL MI Mirroring eliminates all of that:

| Traditional Approach              | With Mirroring                      |
| --------------------------------- | ----------------------------------- |
| Build and maintain ETL pipelines  | Zero-ETL — mirroring is built in    |
| Hours or days of data latency     | Near-real-time (seconds to minutes) |
| Separate data warehouse to manage | Data lands directly in OneLake      |
| Additional infrastructure cost    | Uses existing Fabric capacity       |

## What You Unlock

Once data is in Fabric, the entire Fabric platform is available:

- **Power BI** — Interactive dashboards on live operational data
- **Data Engineering** — Spark-based data transformation and enrichment
- **Data Science** — Machine learning models trained on production data
- **Real-Time Intelligence** — Event-driven analytics and alerting

:::note[Minimal disruption to the running application]
The mirrored database in Fabric is a read replica. The production SQL MI
instance continues to serve the application with minimal performance impact.
The analytics workload runs entirely in Fabric, on Fabric capacity.
:::

:::note[Mirroring is one of two Fabric data access methods]
Fabric also supports **shortcuts** — a virtualization layer that provides
zero-copy access to data in Azure Data Lake Storage, Amazon S3, Dataverse,
and other sources without replicating it. For SQL MI, mirroring is the
primary mechanism; shortcuts complement it for non-SQL data sources.
:::

## When to Enable Mirroring

Mirroring makes sense when the customer's strategy includes:

- Business intelligence on operational data (not just historical snapshots)
- Cross-system analytics (combining data from multiple databases)
- AI/ML initiatives that need access to production-quality data
- Reducing the complexity of existing ETL/data warehouse infrastructure

If these are not strategic priorities today, mirroring can be enabled
later — it is a configuration change, not a re-architecture.

[← Back to H1 Lift & Shift](/dc2fabric/horizons/h1-lift-shift/) · [Next: H2 Modernize →](/dc2fabric/horizons/h2-modernize/)
