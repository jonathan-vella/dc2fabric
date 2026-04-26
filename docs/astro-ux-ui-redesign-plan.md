## Astro UX/UI Redesign Plan

This plan defines the end-to-end UX and UI improvement path for the dc2fabric Astro Starlight site. It captures the
requirements gathered so far, the target information architecture, the simplified landing page model, implementation
phases, validation steps, and release approach.

## Executive Summary

dc2fabric should feel like a modern Microsoft-aligned partner enablement site: clear, calm, credible, and easy to use
in customer conversations. The current site has useful content, but the landing page carries too many concepts at once
and uses internal shorthand such as H1/H2 Horizons too early.

The redesign should simplify the first experience around one idea:

> dc2fabric helps Microsoft partners explain and deliver a structured modernization journey from datacenter platforms
> to Azure and Microsoft Fabric.

The public-facing concept should be **Two Modernization Paths**:

- **Stabilize**: move and optimize priority workloads on Azure with lower disruption.
- **Transform**: modernize applications, data platforms, and analytics foundations with Azure and Fabric.

The existing Horizons model remains valid as the internal planning methodology behind those paths, but it should not be
the first label a new visitor has to decode.

## Requirements Captured

### Audience

Primary audience:

- Microsoft partners who need a repeatable customer conversation and delivery story.

Secondary audiences:

- Microsoft sellers who need MCEM and account planning alignment.
- Customer executives who need business value and risk framing.
- Customer architects who need credible migration, governance, and Fabric detail.

### Landing Page Goal

The landing page should help first-time visitors understand the model quickly. It should explain the modernization
journey, show the two path choices, and route visitors to the next useful page.

### Visual Direction

The preferred visual direction is **Microsoft enterprise clean**:

- polished but restrained;
- strong spacing and hierarchy;
- Azure blue as the anchor color;
- restrained secondary accents;
- modern cards and route panels;
- no hype-heavy marketing visuals.

### Simplification Scope

Use moderate simplification. Keep the model, but remove homepage clutter and move supporting detail deeper into the
site.

### Must Keep On The Landing Page

- MCEM journey stages.
- Two Modernization Paths.
- Fabric as the analytics destination.

### Tone

The tone must stay Microsoft-ready and conservative:

- source-grounded;
- clear about caveats and assumptions;
- partner-ready;
- credible for customer conversations;
- free of unsupported savings, speed, or zero-impact claims.

### Delivery Preference

Use a full site UX pass, delivered through phased pull requests.

## Terminology Decision

### Public Label

Use **Two Modernization Paths** on the landing page and high-level navigation copy.

### Path Labels

| Public Label  | Meaning                                                                   | Current Mapping           |
| ------------- | ------------------------------------------------------------------------- | ------------------------- |
| **Stabilize** | Move and optimize existing workloads on Azure with lower disruption       | H1 / lift-and-shift       |
| **Transform** | Modernize applications, data platforms, analytics foundations, and AI use | H2 / deeper modernization |

### Supporting Methodology

Use this explanation in deeper docs:

> The Horizons model is the planning method behind the two modernization paths: Stabilize and Transform.

### Terms To Avoid On The Landing Page

- H1/H2 as standalone labels.
- Horizons as the first explanation of the path model.
- Zero ETL, zero impact, guaranteed savings, or absolute migration claims.

## Target User Journey

The redesigned site should support this visitor flow:

1. A partner lands on the homepage and understands dc2fabric in one screen.
2. The partner sees the MCEM-aligned journey at a glance.
3. The partner understands that workloads choose between Stabilize and Transform paths.
4. The partner sees Fabric as the governed analytics destination, with caveats.
5. The partner chooses one of three primary routes:
   - explore the Journey Map;
   - compare the Two Modernization Paths;
   - open the Partner Guide.
6. The partner can move into detailed pages for assessment, execution, outcomes, industries, and governance.

## Information Architecture Plan

### Homepage Priority Routes

The homepage should route to these destinations first:

- **Journey Map**: the complete MCEM-aligned view.
- **Two Modernization Paths**: currently the existing Horizons route.
- **Partner Guide**: customer conversation and delivery guidance.

### Sidebar Priorities

Keep the existing content areas, but make the experience feel clearer:

- Strategy.
- Assessment.
- Modernization Paths.
- Execution.
- Outcomes.
- Journey Map.
- Industries.
- Partner Guide.

The route can remain `/horizons/` during the first redesign to avoid routing churn, while the visible label changes to
Modernization Paths.

### Partner Guide Placement

Recommended direction:

- Make Partner Guide easier to find than a nested industry support page.
- Consider a top-level sidebar entry in a later PR.
- Keep industry stories available as examples, not as primary homepage content.

## Landing Page Redesign

### Current Issues

The current homepage includes several useful sections, but they compete for attention:

- MCEM journey visual;
- By the Numbers cards;
- What You Will Learn grid;
- industry story cards;
- partner callout;
- Fabric, TCO, Horizons, and MCEM terminology in close proximity.

The result is content-rich but visually dense. The redesign should reduce the number of choices and make the model
easier to understand.

### Proposed Homepage Structure

#### Hero

Purpose: make the proposition clear in one screen.

Recommended headline:

```text
Modernize from datacenter to Azure and Microsoft Fabric
```

Recommended supporting copy:

```text
dc2fabric gives Microsoft partners a structured way to frame strategy, assess workloads, choose the right
modernization path, and connect Azure migration outcomes to governed Fabric analytics.
```

Primary CTA:

```text
Explore the Journey
```

Secondary CTA:

```text
Open Partner Guide
```

#### Model Snapshot

Purpose: show the journey without forcing the visitor to read a long explanation.

Recommended visual flow:

```text
Strategy -> Assess -> Choose Path -> Realize Value -> Optimize & Grow
```

The MCEM stage labels should remain visible, but the plain-language stage names should carry the meaning.

#### Two Modernization Paths

Purpose: replace H1/H2 shorthand with customer-friendly path choices.

Use a two-column section:

| Path          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| **Stabilize** | Move priority workloads to Azure, reduce datacenter dependency, right-size  |
| **Transform** | Modernize apps, data platforms, and analytics foundations with Azure Fabric |

Expanded copy:

- Stabilize critical workloads first when speed, risk reduction, and datacenter exit pressure matter most.
- Transform platforms when managed services, application modernization, Fabric analytics, and AI readiness create
  measurable value.

#### Fabric Destination

Purpose: explain Fabric clearly and conservatively.

Recommended copy direction:

- Fabric is the governed analytics destination for supported mirrored and integrated data.
- Mirroring depends on source support, permissions, networking, security, capacity, and readiness validation.
- The site should explain Fabric as an outcome of modernization, not a universal one-click destination.

#### Three Primary Route Cards

Replace the current grids with three focused cards:

| Card                        | Destination                            | Purpose                                     |
| --------------------------- | -------------------------------------- | ------------------------------------------- |
| **Explore the Journey Map** | `/dc2fabric/journey-map/`              | See the end-to-end modernization sequence   |
| **Compare the Two Paths**   | `/dc2fabric/horizons/`                 | Choose Stabilize or Transform per workload  |
| **Use the Partner Guide**   | `/dc2fabric/industries/partner-guide/` | Prepare customer conversations and delivery |

### Homepage Content To Remove Or Move

Move these items off the homepage or fold them into tighter sections:

- By the Numbers grid.
- What You Will Learn grid.
- Industry story cards.
- Partner admonition block.

Industry examples should move behind a single Industries route and remain useful for workshops and solution framing.

## Global Theme And UI Plan

### Visual Principles

- Use whitespace to make the site feel calmer and more premium.
- Use fewer cards, but make each card more intentional.
- Keep Azure blue as the primary brand color.
- Use purple only when it signals the Optimize and Grow stage or AI-enabled growth.
- Avoid decorative blobs, heavy gradients, oversized illustrations, and generic stock imagery.

### Typography

Improve hierarchy while staying close to Microsoft product norms:

- stronger hero heading scale;
- clearer section headings;
- tighter card titles;
- improved intro paragraph width;
- readable line length for long content pages.

### Cards And Panels

Refine card styles:

- consistent border radius;
- subtle border and shadow treatment;
- stronger hover states for route cards;
- no nested cards;
- predictable height and spacing across responsive breakpoints.

### Journey Visual

Improve the MCEM visual:

- equal card dimensions;
- clear stage labels;
- balanced connector spacing;
- cleaner mobile stacking;
- purposeful final Optimize and Grow treatment.

### Color System

Recommended palette:

- Azure blue for primary actions and journey stages.
- Deep blue or neutral ink for headings.
- Light blue for subtle backgrounds.
- Purple accent only for Optimize and Grow or AI-enabled value.
- Neutral grays for body text, borders, and supporting copy.

### Responsive Behavior

Desktop:

- hero and model snapshot should fit comfortably in the first meaningful viewport;
- path cards should scan left to right;
- route cards should align cleanly.

Tablet:

- journey visual may wrap, but card sizes should remain stable;
- route cards can use a two-column layout.

Mobile:

- journey visual should stack vertically;
- CTAs should remain thumb-friendly;
- route cards should become full-width;
- text should never overflow or overlap.

## Content UX Plan

### Page Pattern

Each major docs page should follow a consistent pattern:

1. Plain-language opening.
2. Who the page is for.
3. What decision the page helps make.
4. Practical framework or model.
5. Caveats and assumptions.
6. Next step links.

### Content Cleanup Priorities

- Reduce repeated explanations of CAF, MCEM, Horizons, and Fabric.
- Replace internal shorthand with partner-ready terms.
- Keep caveats visible but not heavy.
- Prefer shorter sections with clearer transitions.
- Move detailed industry examples deeper into the site.

### Pages To Update

| Page          | UX Goal                                                               |
| ------------- | --------------------------------------------------------------------- |
| Homepage      | Simplify into hero, model snapshot, two paths, Fabric, and routes     |
| Journey Map   | Align stage names with Strategy, Assess, Choose Path, Value, Optimize |
| Horizons      | Retitle or frame as Two Modernization Paths while preserving route    |
| Outcomes      | Tie value realization to Stabilize, Transform, and Fabric governance  |
| Partner Guide | Make it more discoverable and workshop-ready                          |
| Industries    | Reframe stories as optional examples, not core homepage content       |

## Accessibility Plan

### Required Checks

- Preserve semantic headings.
- Use accessible link text.
- Keep color contrast high for blue and purple surfaces.
- Ensure route cards are keyboard accessible.
- Keep journey cards readable when stacked on mobile.
- Avoid using color alone to communicate meaning.

### Visual Accessibility

- Add text labels to every stage and path.
- Keep final-stage purple supported by wording, not color alone.
- Make focus states visible.
- Ensure responsive text wrapping does not create layout shifts.

## SEO And Metadata Plan

### Homepage Metadata

Update the homepage description to reflect the simplified positioning:

```text
A partner-ready modernization journey from datacenter platforms to Azure and Microsoft Fabric.
```

### Page Titles

Consider these visible title changes:

- Horizons -> Modernization Paths.
- H1 Lift and Shift -> Stabilize Workloads.
- H2 Modernize -> Transform Platforms.

Routes can remain stable in the first phase to avoid link churn.

## Implementation Plan

### Phase 1: Landing Page Redesign

Scope:

- Rewrite homepage hero copy.
- Replace H1/H2 public language with Two Modernization Paths.
- Simplify the homepage structure.
- Replace current content grids with three focused route cards.
- Improve MCEM journey visual polish.
- Add a concise Fabric destination section with caveats.

Files likely touched:

- `site/src/content/docs/index.mdx`
- `site/src/styles/custom.css`

Validation:

- `npm run lint:md`
- `npm run docs:build`
- desktop and mobile browser review

Expected PR:

```text
docs: simplify landing page modernization journey
```

### Phase 2: Navigation And IA Polish

Scope:

- Update sidebar labels to use Modernization Paths language.
- Make Partner Guide easier to find.
- Keep route stability unless a route migration is explicitly approved.
- Update cross-links from homepage, Journey Map, Outcomes, and Partner Guide.

Files likely touched:

- `site/astro.config.mjs`
- `site/src/content/docs/horizons/index.md`
- `site/src/content/docs/journey-map/index.md`
- `site/src/content/docs/outcomes/index.md`
- `site/src/content/docs/industries/partner-guide.md`

Validation:

- `npm run lint:md`
- `npm run lint:links:docs`
- `npm run docs:build`

Expected PR:

```text
docs: improve modernization path navigation
```

### Phase 3: Global Visual System

Scope:

- Refine global spacing.
- Improve card styles.
- Improve link card states.
- Improve typography scale.
- Add responsive constraints for journey and route sections.
- Review color usage for consistency and contrast.

Files likely touched:

- `site/src/styles/custom.css`
- optional Astro components if static layout reuse becomes worthwhile

Validation:

- `npm run docs:build`
- browser screenshot review on desktop and mobile
- CSS and accessibility review

Expected PR:

```text
style: modernize dc2fabric site visual system
```

### Phase 4: Content UX Consistency

Scope:

- Apply the page pattern to major content pages.
- Reduce duplicate framing.
- Improve next-step links.
- Make caveats and assumptions easier to scan.
- Reframe industry pages as examples and workshop aids.

Files likely touched:

- `site/src/content/docs/strategy/index.md`
- `site/src/content/docs/assessment/index.md`
- `site/src/content/docs/horizons/*.md`
- `site/src/content/docs/execution/index.md`
- `site/src/content/docs/outcomes/index.md`
- `site/src/content/docs/industries/*.md`

Validation:

- `npm run lint:md`
- `npm run lint:links:docs`
- `npm run validate:terminology`
- `npm run docs:build`

Expected PR:

```text
docs: align site content with two modernization paths
```

### Phase 5: Final Review And Release

Scope:

- Run final validation.
- Review screenshots across breakpoints.
- Confirm terminology consistency.
- Confirm links and sidebar labels.
- Update changelog if the redesign is release-significant.

Validation:

- `npm run lint:md`
- `npm run lint:links:docs`
- `npm run lint:deprecated-refs`
- `npm run lint:docs-freshness`
- `npm run validate:terminology`
- `npm run docs:build`

Expected PR:

```text
chore: finalize dc2fabric site ux refresh
```

## Acceptance Criteria

### Landing Page

- A new visitor can understand dc2fabric in under one minute.
- The page leads with partner-ready modernization language.
- H1/H2 shorthand is not used as the primary public concept.
- Two Modernization Paths are visible and understandable.
- Fabric is presented as a governed analytics destination with caveats.
- The page has no more than three primary route choices after the model explanation.
- The page looks balanced on desktop, tablet, and mobile.

### Visual Design

- Cards have consistent dimensions and spacing.
- The MCEM visual is polished and readable.
- The final Optimize and Grow treatment is intentional and explained.
- Typography hierarchy feels modern and enterprise-ready.
- Colors are consistent, accessible, and not visually noisy.

### Navigation

- Partner Guide is easy to find.
- Journey Map and Modernization Paths are prominent.
- Existing routes remain stable unless route migration is approved.
- Internal links resolve successfully.

### Content Quality

- Claims remain conservative and Microsoft-ready.
- Unsupported savings or zero-impact language is avoided.
- Official references remain available where needed.
- Caveats around Fabric mirroring, governance, security, and capacity remain visible.

## Validation Checklist

Run these checks before each PR is marked ready:

```bash
npm run lint:md
npm run lint:links:docs
npm run docs:build
```

Run these checks before the final redesign PR or release:

```bash
npm run lint:md
npm run lint:links:docs
npm run lint:deprecated-refs
npm run lint:docs-freshness
npm run validate:terminology
npm run docs:build
```

Manual review checklist:

- Desktop homepage screenshot.
- Mobile homepage screenshot.
- Sidebar navigation review.
- Journey visual scan.
- Route card click-through test.
- Partner Guide discoverability check.
- Fabric caveat readability check.

## Risks And Mitigations

| Risk                                 | Mitigation                                                              |
| ------------------------------------ | ----------------------------------------------------------------------- |
| Route churn breaks links             | Keep `/horizons/` route during first redesign                           |
| Public labels drift from methodology | Explain Horizons as the method behind Stabilize and Transform           |
| Homepage becomes too marketing-heavy | Keep Microsoft-ready conservative tone and clear caveats                |
| Visual polish reduces docs usability | Preserve Starlight structure, search, sidebar, headings, and link cards |
| Fabric story sounds too absolute     | Keep readiness, governance, security, and capacity caveats visible      |

## Out Of Scope For First PR

- Full route renames.
- New visual asset generation.
- Full industry story rewrites.
- New interactive framework components.
- Analytics instrumentation.
- Deployment workflow changes.

## Open Decisions

These decisions can be made before implementation or during PR review:

- Whether Partner Guide should become a top-level sidebar item.
- Whether the `/horizons/` route should eventually be renamed.
- Whether the homepage hero should mention Microsoft partners directly.
- Whether industry stories should become solution briefs.
- Whether custom Astro components should replace inline MDX sections for reusable homepage blocks.

## Recommended Next Step

Start with Phase 1 as a focused PR:

```text
docs: simplify landing page modernization journey
```

This gives the site a clearer first impression, validates the Two Modernization Paths language, and creates a solid
foundation for the broader visual and content UX pass.
