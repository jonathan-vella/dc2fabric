---
title: "Partner Guide"
description: "Conversation starters, talking points, and quick-reference cards for partners delivering the dc2fabric journey"
sidebar:
  order: 10
  badge:
    text: Partners
    variant: caution
---

:::tip[TL;DR]
This page collects everything a Microsoft partner needs to position and
deliver the dc2fabric modernization journey — conversation starters,
path decision criteria, Fabric value propositions, and objection
handling — all in one place.
:::

## Opening the Conversation

The best modernization conversations start with the business, not the
technology. Use these questions to understand the customer's situation:

| Question                                                                   | What You Learn                          |
| -------------------------------------------------------------------------- | --------------------------------------- |
| What business outcomes are you trying to achieve in the next 12–18 months? | Strategic priorities and urgency        |
| Where is your data today, and who can access it when they need it?         | Data silos and analytics gaps           |
| What happens during peak demand — can your systems handle it?              | Scale limitations and business impact   |
| How long does it take to deploy a change to production?                    | DevOps maturity and agility constraints |
| What keeps your CISO or compliance team up at night?                       | Security and regulatory pressures       |

:::note[Lead with outcomes, not services]
Avoid opening with "Have you considered Azure?" Instead, listen to the
business problem first. The technology recommendation gains credibility
when it directly addresses a stated business need.
:::

## The Two Modernization Paths Decision Framework

Use this decision tree to match workloads to the right path:

| Criteria                      | Stabilize                           | Transform                               |
| ----------------------------- | ----------------------------------- | --------------------------------------- |
| **Business change frequency** | Stable, low change rate             | Actively developed, frequent releases   |
| **Scale requirements**        | Predictable, steady load            | Spiky, elastic, or growing rapidly      |
| **Application complexity**    | Works well as-is                    | Needs refactoring or new capabilities   |
| **Risk tolerance**            | Low — minimize disruption           | Moderate — willing to invest in change  |
| **Time to value**             | Weeks                               | Months                                  |
| **Cost model**                | Azure Migrate and TCO estimate      | PaaS/serverless model validated by data |
| **Fabric integration**        | SQL MI Mirroring for supported data | SQL DB Mirroring plus data products     |
| **Best for**                  | ERP, back-office, stable LOB apps   | Customer-facing, e-commerce, new builds |

## Fabric Value Proposition — By Audience

Tailor the Fabric message to the stakeholder:

### For the CTO / CIO

> "Fabric can reduce the need for separate ETL pipelines and duplicated
> analytical stores. Supported operational data from both modernization paths
> can land in OneLake and be governed for BI, ML, and AI workloads."

### For the CFO

> "Traditional analytics infrastructure requires separate investments in
> ETL tooling, data warehouses, and BI platforms. Fabric consolidates
> these into a single capacity-based model. Combine Azure Migrate business
> cases, the Azure TCO Calculator, and Fabric capacity planning to quantify
> the customer's actual total cost of ownership."

### For the Line-of-Business Leader

> "Your team gets near-real-time dashboards and AI-powered insights on
> supported operational data — without building custom ETL for mirrored
> tables. If the data exists in SQL MI or Azure SQL DB and meets mirroring
> prerequisites, it can become a governed Fabric data product."

### For the CISO / Data Governance Lead

> "Mirroring does not automatically copy SQL row-level security, object
> permissions, dynamic data masking, or Purview sensitivity labels into
> OneLake. The engagement includes a Fabric governance baseline so access,
> labels, ownership, and review processes are rebuilt before broad use."

## Objection Handling

| Objection                                         | Response                                                                                                                                                                                                                           |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "We are not ready for a full cloud migration."    | The path model is designed for exactly this — start with Stabilize for quick wins and low risk, then Transform only where the business case justifies it.                                                                          |
| "We already have a data warehouse."               | Fabric does not replace an existing warehouse overnight. SQL MI Mirroring runs alongside your current setup. Start with one workload, prove the value, then expand.                                                                |
| "Kubernetes is too complex for our team."         | Azure Container Apps abstracts away Kubernetes. Your developers deploy containers without managing clusters, nodes, or networking.                                                                                                 |
| "We cannot afford downtime for migration."        | The Managed Instance link uses near-real-time replication to SQL MI and limits downtime to final cutover. Azure DMS is available as a fallback. VM migration uses replication with planned cutover windows and rollback criteria.  |
| "How is this different from just using Power BI?" | Power BI is the visualization layer. Fabric includes the data lake (OneLake), data engineering (Spark), data science (ML), and real-time intelligence — all on one platform. Power BI becomes more powerful when backed by Fabric. |

## Fabric Readiness Checklist

Before positioning Fabric mirroring as an execution milestone, validate:

- Source database permissions needed for mirroring are approved and least
  privilege is documented
- Row-level security, object permissions, dynamic data masking, and sensitivity
  labels that must exist in Fabric are designed explicitly
- Private SQL MI connectivity uses a virtual network data gateway or
  on-premises data gateway with access to the private endpoint
- Unsupported table, column, feature, identity, and tenant scenarios are known
  before timeline commitments are made
- Data-product ownership, endorsement, lineage, access reviews, and support
  paths are assigned

## Industry Quick Cards

### Manufacturing (Contoso Industries)

- **Trigger**: Board-level mandate for near-real-time supply chain visibility
- **Stabilize workloads**: ERP, MES (127 VMs, 22 databases)
- **Transform workloads**: Customer portal, supply chain dashboard
- **Fabric payoff**: Predictive maintenance + supply chain Power BI dashboard
- [Full story →](/dc2fabric/industries/manufacturing/)

### Financial Services (Woodgrove Bank)

- **Trigger**: Regulatory requirement for near-real-time transaction monitoring
- **Stabilize workloads**: Core banking, regulatory databases (340 VMs, 45 databases)
- **Transform workloads**: Digital banking app, fraud detection engine
- **Fabric payoff**: Regulatory dashboards + fraud analytics and monitoring
- [Full story →](/dc2fabric/industries/financial-services/)

### Retail (Northwind Traders)

- **Trigger**: CEO digital-first strategy, e-commerce scaling failures
- **Stabilize workloads**: ERP, loyalty program (65 VMs, 12 databases)
- **Transform workloads**: E-commerce platform, customer analytics
- **Fabric payoff**: Customer 360 dashboard + recommendation engine
- [Full story →](/dc2fabric/industries/retail/)

## Engagement Timeline Template

Use this as a starting point — adjust based on estate size and complexity:

| Phase                             | Duration   | Activities                                                    |
| --------------------------------- | ---------- | ------------------------------------------------------------- |
| **Discovery & Strategy** (MCEM 1) | 2–4 weeks  | Business workshops, stakeholder alignment, CAF Strategy       |
| **Assess & Design** (MCEM 2)      | 4–6 weeks  | Azure Migrate scan, path classification, architecture         |
| **Stabilize Execution** (MCEM 3)  | 4–12 weeks | VM waves, SQL MI migration, Fabric mirroring                  |
| **Transform Execution** (MCEM 3)  | 3–6 months | .NET modernization, containerization, CI/CD, Azure SQL DB     |
| **Value Realization** (MCEM 4)    | 2–4 weeks  | Cost review, analytics rollout, outcomes measurement          |
| **Manage & Optimize** (MCEM 5)    | Ongoing    | Continuous optimization, Fabric expansion, skills development |

:::caution[Timelines scale with estate size]
A 50-VM estate might complete in 3 months. A 500-VM enterprise might take
12–18 months. The structure is the same — the timeline scales with the
estate size, complexity, and customer readiness.
:::
