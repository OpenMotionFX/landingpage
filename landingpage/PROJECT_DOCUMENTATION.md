# OpenMotionFX Landing Page Project Documentation

## Overview

This project is the static marketing and project-information website for OpenMotionFX, an open-source modular motion-control system for smartphone filmmaking and VFX. The site explains the product vision, hardware architecture, sync model, development status, and contribution paths for two primary audiences: filmmakers who need repeatable camera moves, and makers or engineers who want enough technical substance to trust and contribute to the project.

The project is intentionally small and direct. There is no build step, package manager, framework, server-side code, or deployment script in this directory. The website can be served as static files from the `site/` folder.

## Source Prompt And Product Inputs

The main source file for the overall creative and strategic direction is `masterprompt.md`. It is a large prompt/context archive that includes the high-level instruction set used to shape the site, including product positioning, tone expectations, safety and formatting rules, Anthropic product context, artifact/API guidance, and other generation context.

The concise product brief is `PRODUCT.md`. It is the most useful day-to-day reference for maintaining the website because it clearly defines the product, users, personality, anti-references, design principles, and accessibility expectations.

Important maintenance note: `masterprompt.md` appears to contain broad assistant/system-prompt material, not just public-facing product strategy. Treat it as internal context. Do not publish it as website content unless it has been carefully reviewed and redacted.

## Product Positioning

OpenMotionFX is presented as an open-source, modular motion-control ecosystem for filmmakers. Its central promise is repeatable camera motion: the same move can be run across multiple takes so clean plates, crowd duplication, twinning, impossible transitions, product spins, lighting passes, and VFX composites line up reliably.

The core product story is:

- Motion control is normally expensive, closed, or limited.
- OpenMotionFX uses accessible 3D-printer ecosystem parts and ESP32-S3 modules.
- The system is planned around roughly `$400` in parts instead of commercial systems that can cost thousands to tens of thousands of dollars.
- Each module is independently useful, with the pan/tilt head treated as the first complete product.
- The current status is planning and bench prototyping; the website is careful not to claim finished hardware exists or is for sale.

The brand voice is precise, hands-on, cinematic, and honest. The preferred feel is camera-department craft: timecode, viewfinder brackets, focus marks, technical readouts, and gaffer-tape orange. The site avoids generic SaaS gradients, vague hype, and invented specifications.

## Audience

The site serves two audiences at once.

Filmmakers and cinematographers should quickly understand the creative benefit: repeatable motion makes advanced VFX techniques possible on a small budget. They need the site to feel credible, set-ready, and visually connected to filmmaking.

Makers and engineers should see real constraints, specs, architecture, protocols, costs, licensing intent, and contribution opportunities. They need the project to feel technically grounded rather than aspirational vaporware.

## Project Structure

```text
landingpage/
  PRODUCT.md
  masterprompt.md
  PROJECT_DOCUMENTATION.md
  site/
    index.html
    system.html
    how-it-works.html
    roadmap.html
    contribute.html
    assets/
      css/
        style.css
      img/
        favicon.svg
      js/
        main.js
```

## Site Pages

### `site/index.html`

The homepage introduces the full OpenMotionFX story. It contains the primary positioning headline, current project status, an animated viewfinder demo, repeatability use cases, the market price gap, a simplified system pipeline, module summary, VFX data export story, design principles, and honest roadmap status.

Important homepage sections include:

- Hero: "The same move. Every take."
- Status: planning and bench prototyping.
- Animated camera path viewfinder showing repeated takes.
- Repeatability explanation for multi-pass VFX.
- Price comparison between consumer, prosumer, professional, and OpenMotionFX.
- Four-step compile/upload/arm/go workflow.
- Eight-module system overview.
- `.omfx` move-file concept and Blender/Unreal export positioning.
- Six project design principles.
- Current roadmap summary.
- SEO-oriented FAQ section with visible answers and `FAQPage` structured data.

This page also includes Open Graph metadata, a canonical URL, favicon, Google Fonts, structured data using `SoftwareSourceCode`, and shared header/footer navigation.

### `site/system.html`

The system page documents the hardware architecture and module catalog. It emphasizes that every node uses the ESP32-S3 and that there is no required central hardware controller.

Main content includes:

- Hardware architecture hero.
- Terminal-style network scan readout.
- Specs for the pan/tilt head, slider, focus/zoom motor, lighting modules, turntable, dolly, and sync box.
- Interactive bill-of-materials calculator powered by `main.js`.

The calculator uses checkbox inputs with `data-lo` and `data-hi` attributes to sum estimated cost ranges. The default selected module is the pan/tilt head.

### `site/how-it-works.html`

This page explains the technical operating model in plain language. The central concept is that the laptop performs the heavy planning work while modules execute locally from preloaded motion data.

Main content includes:

- Core architecture hero: math on the laptop, execution on the node.
- Pipeline diagram from Conductor keyframes to Bezier math, JSON payload, ESP32 flash, and GO beacon.
- Local-first broadcast architecture.
- Four-step sync protocol: handshake, local storage, arming/homing, and GO beacon.
- `.omfx` move-file explanation for VFX workflows.

This page reinforces a key principle from `PRODUCT.md`: Wi-Fi carries plans, not real-time motion.

### `site/roadmap.html`

The roadmap page documents project status and expected phases. It is written to avoid vaporware claims and to make clear that the project is still in development.

Current roadmap content:

- Phase 0: Bench prototyping and architecture.
- Phase 1: Pan/tilt module and Conductor v0.1.
- Phase 2: Linear tracking with slider and turntable.
- Phase 3: Lighting and sync box ecosystem.
- Phase 4: Public 1.0 release.

The page includes exit conditions where available, which helps make the roadmap concrete and testable.

### `site/contribute.html`

The contribute page explains how people can help. It frames OpenMotionFX as bringing open-source hardware/software culture from 3D printing into cinematography.

Main content includes:

- Contribution hero.
- Calls to view repositories and join Discord.
- Skill matrix for embedded C++, Vue/Electron, CAD/mechanical design, and VFX pipeline work.
- Licensing philosophy section.
- License intent: GPLv3 for software, CERN-OHL-S for hardware CAD, CC-BY-SA for docs, and CC0 for the communications protocol.

The Discord link is currently `href="#"`, which is a placeholder.

## Shared Design System

The design system lives in `site/assets/css/style.css`. It defines a dark camera-department visual language with a single saturated orange accent.

Core visual choices:

- Warm charcoal backgrounds.
- Gaffer-tape orange accent.
- Archivo for display/body typography.
- Fragment Mono for technical labels, timecode, terminal panels, and UI readouts.
- Uppercase display headings with expanded Archivo width.
- Viewfinder corner brackets.
- Terminal-style panels.
- Table-based specs.
- Timeline phases.
- Utility classes for sections, split layouts, buttons, flow diagrams, and module rows.

The CSS uses modern features such as `oklch()`, `color-mix()`, `clamp()`, `text-wrap`, `font-variation-settings`, `offset-path`, and `prefers-reduced-motion`. This gives the site a modern browser target.

## JavaScript Behavior

The only JavaScript file is `site/assets/js/main.js`. It is written as progressive enhancement. The site content remains readable without JavaScript.

JavaScript responsibilities:

- Adds a `js` class to the root element.
- Reveals `.reveal` elements on scroll using `IntersectionObserver`.
- Respects `prefers-reduced-motion`.
- Runs the homepage viewfinder animation and timecode counter.
- Lets users replay the viewfinder animation.
- Updates the system-page bill-of-materials calculator.

There are no external JavaScript dependencies.

## SEO And Structured Data

The homepage includes two JSON-LD blocks: `SoftwareSourceCode` for the project identity and `FAQPage` for the homepage FAQ. The FAQ content is also visible on the page as native `<details>` and `<summary>` elements, so it helps both readers and retrieval systems without hiding content in metadata only.

When editing FAQ copy, keep the visible answer and the JSON-LD answer aligned. The FAQ should lead with intent-based questions a filmmaker or maker would actually search, such as cheap repeatable camera moves, clean plates, phone VFX, DIY camera robots, Blender or Unreal camera data, and open-source motion control. Brand-specific questions should appear after those pain-first searches.

Google removed the FAQ rich result feature from Search in 2026, so `FAQPage` markup should not be treated as a guaranteed visual SERP enhancement. Keep it because it is clean structured context, but the real SEO value is the visible, useful, specific answer text.

## Accessibility

The product brief requires WCAG AA-level care. The current site includes several accessibility-oriented choices:

- Semantic HTML sections, headers, nav, tables, and footer.
- Skip link to main content.
- `aria-current="page"` on active nav links.
- `aria-label` descriptions for visual diagrams and terminal-like figures.
- Keyboard-focus styling through `:focus-visible`.
- Reduced-motion support for scroll reveals and viewfinder animation.
- Content remains present without JavaScript.

Areas to watch during future edits:

- Maintain color contrast when adding new colors.
- Avoid placing essential information only inside decorative terminal readouts.
- Keep interactive controls keyboard accessible.
- Add real text alternatives when new visual assets are introduced.

## Content Rules

All product claims should trace back to `PRODUCT.md` or real OpenMotionFX repository documentation. The site should not invent hardware performance, commercial status, or compatibility.

Use careful language around project maturity. Good language includes "planning", "bench prototyping", "planned", "estimated", and "license intent". Avoid language that suggests hardware is shipping, sold, proven on set, or already widely tested unless the repo later supports that claim.

The strongest approved claims currently used across the site include:

- Open-source modular motion control.
- Smartphone filmmaking and VFX focus.
- ESP32-S3 module platform.
- Laptop Conductor app concept.
- Local-first execution model.
- GO beacon synchronization concept.
- `.omfx` move-file package.
- Blender, Unreal, FBX, USD, JSON, and CSV export concepts.
- Rough parts-cost estimates.

## Running Locally

Because this is a static site, the simplest local check is to open `site/index.html` in a browser.

For a closer production-like preview, serve the `site/` directory with any static file server, then open the local URL in a browser.

Example:

```powershell
cd C:\Users\Frogg\Downloads\landingpage\site
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Deployment Notes

Deploy the contents of `site/` as the web root. The current canonical URLs assume:

```text
https://www.openmotionfx.com/
```

The static host should serve:

- `/index.html`
- `/system.html`
- `/how-it-works.html`
- `/roadmap.html`
- `/contribute.html`
- `/assets/css/style.css`
- `/assets/js/main.js`
- `/assets/img/favicon.svg`

No server routing is required.

## Known Gaps And Follow-Up Items

- The Discord link on `contribute.html` is a placeholder and should be replaced with the real community URL or removed until available.
- The GitHub links point to the OpenMotionFX organization and repositories; verify they exist and match the intended public repo names before launch.
- The cost estimates and performance specs should be rechecked against real hardware documentation before broad public promotion.
- The roadmap phases should be updated as prototypes move from planning to physical validation.
- The site currently depends on Google Fonts. If offline, privacy-preserving, or self-hosted operation is required, the fonts should be vendored or replaced with system fonts.
- `masterprompt.md` should be reviewed before any public repository release because it contains internal prompt context.

## Maintenance Checklist

Before publishing a content change:

- Confirm every technical claim has a source in project docs.
- Keep project maturity language honest.
- Test all pages at desktop and mobile widths.
- Check keyboard navigation for header links, buttons, and calculator controls.
- Check reduced-motion mode for animated areas.
- Verify external links.
- Open the homepage without JavaScript to confirm content is still usable.

## File Ownership Summary

`PRODUCT.md` is the strategic brief.

`masterprompt.md` is the broad generation/context prompt archive and should be treated as internal.

`site/*.html` files are the public pages.

`site/assets/css/style.css` is the entire visual system.

`site/assets/js/main.js` contains optional enhancements.

`site/assets/img/favicon.svg` contains the viewfinder-style brand mark used as the favicon.
