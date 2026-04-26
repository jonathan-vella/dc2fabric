import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid-lite";

export default defineConfig({
  site: "https://jonathan-vella.github.io",
  base: "/dc2fabric",
  trailingSlash: "always",
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlight({
      title: "dc2fabric",
      tagline: "The Modernization Journey from Datacenter to Microsoft Fabric",
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          attrs: {
            type: "module",
          },
          content: `import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs"; mermaid.initialize({ startOnLoad: true, theme: "base", themeVariables: { primaryColor: "#0078d4", primaryTextColor: "#ffffff", primaryBorderColor: "#005a9e", lineColor: "#505050", secondaryColor: "#deecf9", tertiaryColor: "#f3f2f1", fontFamily: "Segoe UI, system-ui, sans-serif" }});`,
        },
      ],
      sidebar: [
        {
          label: "Strategy",
          badge: { text: "Stage 1", variant: "note" },
          autogenerate: { directory: "strategy" },
        },
        {
          label: "Assessment",
          badge: { text: "Stage 2", variant: "note" },
          autogenerate: { directory: "assessment" },
        },
        {
          label: "Modernization Paths",
          badge: { text: "Stage 2", variant: "note" },
          autogenerate: { directory: "horizons" },
        },
        {
          label: "Execution",
          badge: { text: "Stage 3", variant: "note" },
          autogenerate: { directory: "execution" },
        },
        {
          label: "Outcomes",
          badge: { text: "Stage 4–5", variant: "note" },
          autogenerate: { directory: "outcomes" },
        },
        {
          label: "Journey Map",
          autogenerate: { directory: "journey-map" },
        },
        {
          label: "Partner Guide",
          link: "/industries/partner-guide/",
          badge: { text: "Partners", variant: "caution" },
        },
        {
          label: "Industries",
          badge: { text: "Stories", variant: "tip" },
          items: [
            { label: "Industry Stories", link: "/industries/" },
            { label: "Manufacturing", link: "/industries/manufacturing/" },
            {
              label: "Financial Services",
              link: "/industries/financial-services/",
            },
            { label: "Retail", link: "/industries/retail/" },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/jonathan-vella/dc2fabric/edit/main/site/",
      },
    }),
  ],
});
