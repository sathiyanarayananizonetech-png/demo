# Design System Specification: The Ethereal Atelier

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Atelier"**

This design system is not a utility; it is a digital concierge. To achieve a high-performance luxury aesthetic for a premium beauty salon, we must move away from the rigid, boxed-in layouts of traditional web design. Our goal is to simulate the experience of a high-end physical space—where light, texture, and breathability define the atmosphere.

The "Ethereal Atelier" approach breaks the template through **intentional asymmetry** and **tonal depth**. We favor overlapping elements that feel like fine stationery or frosted glass layers. High-contrast typography scales (massive display text vs. delicate labels) create an editorial rhythm that signals authority and sophistication.

---

## 2. Color & Surface Philosophy
The palette is built on a foundation of warm neutrals and "Liquid Gold," balanced by the depth of "Charcoal Slate" and "Tertiary Navy."

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to section off content. In this design system, boundaries are defined exclusively through background color shifts or tonal transitions. 
*   Use `surface-container-low` (#f6f3f2) to define a section against a `surface` (#fcf9f8) background. 
*   Visual separation must feel like the natural shadow of a page, not a drawn line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of luxury materials (fine paper, silk, frosted glass).
*   **Base:** `surface` (#fcf9f8).
*   **Nested Elements:** Use `surface-container-lowest` (#ffffff) for high-importance cards to create a "lifted" feel, or `surface-container-high` (#eae7e7) to "recess" secondary information.

### The "Glass & Gradient" Rule
To elevate the experience beyond flat design:
*   **Glassmorphism:** For floating navigation or modal overlays, use a semi-transparent `surface` color with a `backdrop-blur` (12px to 20px). This allows the rich golds and navy accents to bleed through softly.
*   **Signature Textures:** Apply a linear gradient (45deg) from `primary` (#795900) to `primary_container` (#c9a24a) on primary CTAs and hero accents. This mimics the shimmer of gold leaf.

---

## 3. Typography: The Editorial Voice
We utilize a four-font stack to create a bespoke, high-end rhythmic flow.

*   **Primary Headings (Poppins):** Used for `headline` and `title` scales. It provides a geometric, modern structure that feels high-performance and clean.
*   **Secondary Headings (Montserrat):** Used for sub-navigation and metadata to provide a slightly wider, more grounded architectural feel.
*   **Decorative Accents (Gelasio/Pacifico):** Use these sparingly for pull-quotes or "Signature" elements. Map these to the `display` scales when an editorial flourish is required.
*   **Body & Utility (Inter):** Reserved for `body` and `label` scales. Inter provides the clinical legibility required for service menus and booking flows.

**The Scale Strategy:** Use extreme contrast. A `display-lg` heading (3.5rem) should often sit near a `label-md` (0.75rem) to create a sense of curated fashion-magazine layout.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, never through heavy drop shadows.

*   **Layering Principle:** Place a `surface-container-lowest` card on top of a `surface-container-low` section. This creates a soft, natural "step" in the UI.
*   **Ambient Shadows:** If an element must float (like a "Book Now" FAB), use an extra-diffused shadow. 
    *   *Spec:* `0px 12px 32px rgba(43, 43, 43, 0.06)`. 
    *   The shadow should be a tinted version of `on-surface` (#1b1c1c), mimicking natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` (#d1c5b2) at **15% opacity**. It should be felt, not seen.

---

## 5. Component Guidelines

### Buttons: The Touch of Gold
*   **Primary:** Linear gradient (`primary` to `primary_container`). White text (`on_primary`). Roundedness: `md` (0.375rem).
*   **Secondary:** Ghost style. No background, `outline` color for text, with a `surface-container-highest` background on hover.
*   **Tertiary (Navy):** Used for "High-Performance" actions (e.g., Clinical Data or Forms). Use `tertiary` (#465f86).

### Cards & Lists
*   **No Dividers:** Forbid the use of horizontal rules. Separate list items using 16px–24px of vertical white space or a subtle shift from `surface` to `surface-container-low`.
*   **Glass Cards:** For hero overlays, use 80% opacity `surface` with a 1px `outline-variant` at 10% opacity for a "frosted edge."

### Input Fields
*   **Style:** Minimalist. No four-sided boxes. Use a `surface-container-low` background with a `primary` (#795900) bottom-only border (2px) that animates on focus. 
*   **Labeling:** Use `label-md` in `on_surface_variant` (#4e4637).

### Signature Component: The "Service Drawer"
For the salon menu, use an asymmetrical grid where images overlap the edges of `surface-container` tiers. Incorporate a `display-sm` accent in `Gelasio` that breaks the grid container, creating a high-fashion, un-templated look.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace White Space:** Treat the screen like a gallery wall. If in doubt, add more padding.
*   **Use Tonal Shifts:** Use the difference between `surface_bright` and `surface_dim` to guide the eye.
*   **Layer Elements:** Allow high-quality photography of beauty treatments to sit behind semi-transparent `surface` glass panels.

### Don't:
*   **Don't use 100% Black:** Always use `on_surface` (#1b1c1c) or `Charcoal Slate` (#2B2B2B) for text to maintain a soft, luxury feel.
*   **Don't use Default Shadows:** Standard 0.2 alpha shadows will "cheapen" the gold palette. Keep them light (max 8%).
*   **Don't use Center-Alignment for Everything:** Luxury is found in the unexpected. Use left-aligned display text with right-aligned body copy to create dynamic tension.