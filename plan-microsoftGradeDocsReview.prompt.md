## Plan: Microsoft-Grade Docs Review

Review and improve the published dc2fabric documentation under
`site/src/content/docs` for Microsoft employee and Microsoft partner use.

The review should be source-grounded, conservative, and substantive. Preserve
the journey model while correcting unsupported claims, adding Fabric governance
and mirroring caveats, improving industry navigation, and validating the result.

**Scope**

- Published site docs under `site/src/content/docs`.
- Site navigation in `site/astro.config.mjs` when needed.
- Official Microsoft references for Azure, CAF, MCEM, Azure Migrate,
  Microsoft Fabric, SQL mirroring, and migration execution.
- The dc2fabric changelog when release notes need to describe the work.

**Review Focus**

1. Baseline the workspace and validation state before edits.
2. Align CAF terminology with Strategy, Plan, Ready, Adopt, Govern, Secure,
   and Manage.
3. Replace unsupported savings percentages with customer-specific business-case
   and TCO language.
4. Replace zero-impact, zero-downtime, and broad zero-ETL claims with supported,
   readiness-tested language.
5. Add Fabric mirroring caveats for permissions, row-level security, object and
   column permissions, dynamic data masking, sensitivity labels, private SQL MI
   connectivity, identity constraints, tenant boundaries, and unsupported data.
6. Treat Fabric as a governed data-products platform, not only a mirror target.
7. Improve industry stories so fictional outcomes are illustrative and credible.
8. Add an industries landing page when navigation needs a higher-level entry.
9. Add `%%{init: {'theme':'neutral'}}%%` to each Mermaid fence in published docs.
10. Run focused validation and separate baseline issues from new regressions.

**Validation**

- `npm run lint:md`
- `npm run lint:links:docs`
- `npm run lint:deprecated-refs`
- `npm run lint:docs-freshness`
- `npm run validate:terminology`
- `npm run docs:build`
- `git diff --check`

**Decisions**

- Starlight frontmatter remains the title mechanism for published docs.
- Use official Microsoft sources for newly introduced external references.
- Keep edits focused and avoid reverting unrelated workspace changes.
- Treat Microsoft Fabric mirroring limitations as fast-moving product details.
- Prefer readable, partner-ready guidance over marketing absolutes.
