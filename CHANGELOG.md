<a id="top"></a>

# Changelog

All notable changes to **dc2fabric** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This changelog is dedicated to the dc2fabric modernization journey. It does not
carry forward historical release notes from the upstream APEX accelerator.

## [0.10.0] — Unreleased

### Added

- Added a published industries landing page for Microsoft employees and
  partners, with guidance for account planning, customer workshops, solution
  framing, and partner delivery alignment.
- Added Fabric mirroring caveats for SQL Managed Instance and Azure SQL
  Database, including source security propagation limits, sensitivity-label
  behavior, private connectivity requirements, identity constraints, and
  readiness review expectations.
- Added Fabric operating-model guidance covering data ownership, classification,
  access reviews, content ownership, Center of Excellence practices, mentoring,
  community of practice, and support paths.
- Added official Microsoft references for Azure Migrate, CAF migration planning,
  migration wave planning, Managed Instance link migration, Fabric mirroring
  limitations, Fabric data security, and the Fabric adoption roadmap.
- Added neutral Mermaid initialization directives to published site diagrams for
  consistent Starlight rendering.

### Changed

- Reframed the repository as **dc2fabric**, the datacenter-to-Azure-and-Fabric
  modernization journey powered by APEX as the implementation engine.
- Updated the root README, agent guide, and Copilot instructions to describe the
  dc2fabric journey, the APEX workflow, supported Bicep and Terraform tracks,
  validation commands, and the current repository ownership model.
- Reworked published site documentation under `site/src/content/docs/` for a
  Microsoft employee and Microsoft partner audience, with stronger source
  grounding and clearer customer-conversation language.
- Corrected Cloud Adoption Framework terminology to the current methodology
  model: Strategy, Plan, Ready, Adopt, Govern, Secure, and Manage.
- Replaced unsupported savings percentages with customer-specific TCO language
  based on Azure Migrate business cases, Azure Migrate assessments, telemetry,
  and the Azure TCO Calculator.
- Replaced broad zero-ETL, zero-impact, and zero-downtime phrasing with
  supported-data, near-real-time, readiness-tested, and final-cutover language.
- Expanded migration execution guidance with dependency grouping, nonproduction
  rehearsal, wave sequencing, migration-method selection, rollback criteria,
  stakeholder approval, and post-cutover validation.
- Refined manufacturing, financial-services, and retail stories so fictional
  outcomes are illustrative rather than benchmark claims.
- Clarified that Fabric IQ and Foundry IQ are preview-era capabilities when they
  are mentioned as future expansion options.

### Removed

- Removed legacy Agentic InfraOps changelog history from this file so dc2fabric
  has a dedicated release narrative.
- Removed references that described the former weekly upstream-sync workflow as
  active in this branch.

### Validation

- `npm run lint:links:docs` passes for the published site docs.
- `npm run lint:deprecated-refs` passes with existing baseline warnings outside
  the published site docs.
- `npm run lint:docs-freshness` passes.
- `npm run validate:terminology` passes.
- `npm run docs:build` passes after installing site dependencies.
- `npm run lint:md` still has pre-existing baseline markdown failures outside
  the published site docs.

<div align="right"><a href="#top"><b>Back to Top</b></a></div>
