# Product

## Register

brand

## Users

Two audiences, one site:

1. **Indie filmmakers & cinematographers** — smartphone/DSLR shooters who want repeatable camera moves for VFX (clean plates, crowd duplication, seamless transitions) but can't afford $1k–$68k motion control gear. They evaluate by feel: does this look like gear I'd trust on a set?
2. **Makers & engineers** — 3D-printer owners, ESP32 tinkerers, open-hardware contributors. They evaluate by substance: specs, architecture, licenses, honest status.

Context: arriving from GitHub, YouTube, or word of mouth at openmotionfx.com, deciding in ~30 seconds whether this project is credible and worth following/building/contributing to.

## Product Purpose

The official website for OpenMotionFX — an open-source, modular motion control system for smartphone filmmaking and VFX (~$400 in parts vs $1,000–$68,000 commercial systems). Pan/tilt head, slider, dolly, turntable, focus motor, lights and sync box, all on the same ESP32-S3 wireless platform, commanded by a laptop "Conductor" app. Every take exports camera position/lens/lighting data to Blender and Unreal.

The site must explain the system simply (no jargon walls), sell the vision to filmmakers, satisfy engineers with real specs, and be honest that the project is in the planning/pre-build phase (clear status + roadmap). Success: a filmmaker understands "repeatable camera moves, cheap, open" in one fold; an engineer stars the repo.

## Brand Personality

**Precise, hands-on, cinematic.** The voice of a seasoned camera assistant who also solders: calm confidence, exact numbers, no hype. Camera-department aesthetic — timecode, frame brackets, focus marks, gaffer-tape orange — not generic "dev tool dark mode." Warmth comes from the maker ethos ("boring parts, clever geometry"), not from softness.

## Anti-references

- Generic SaaS landing pages: gradient text, hero-metric blocks, identical feature-card grids.
- Vaporware crypto/hardware sites that overpromise; the site must never claim hardware exists before it does.
- Sterile enterprise mocap sites (Vicon/OptiTrack) — corporate, cold, price-on-request energy.
- The invented content in the original mockups (fictional C++/CUDA "sub-0.42ms" specs) — every claim on the site must trace to the real repo docs.

## Design Principles

1. **Frame everything** — the camera-viewport motif (brackets, safe areas, motion paths, timecode) is the brand system; use it deliberately, not as decoration on every element.
2. **Every claim is a spec** — numbers from the real docs ($400, ESP32-S3, GO beacon sync, FBX/USD/JSON), never invented; honesty about pre-build status is a feature.
3. **Show the move** — motion is the product; the site itself should demonstrate smooth, deterministic, repeatable motion (animated camera paths, precise easing), never bouncy or decorative.
4. **Two readers, one page** — every section leads with the filmmaker's benefit in plain words, backed by the engineer's detail one glance deeper (spec tables, protocol notes).
5. **Simple to explain** — a non-technical artist should understand every page; jargon gets a one-line plain-English gloss.

## Accessibility & Inclusion

WCAG AA: body text ≥4.5:1 on the dark charcoal, large text ≥3:1. Full `prefers-reduced-motion` alternatives for all animation (crossfade/static paths). Semantic HTML, keyboard-navigable nav, focus-visible states. Works without JavaScript (JS enhances, never gates content).
