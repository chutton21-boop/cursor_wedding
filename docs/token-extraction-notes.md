# Figma token extraction notes

**Source:** Figma MCP `get_variable_defs` (no node ID = current selection / file variables).

## What was extracted

- **Colors:** From Figma variables `Color/Black`, `Color/White`, `Color/White Transparent`, `Color/Grey`, `Color/Black Transparent`. All values used as-is; none invented.
- **Type:** From Figma variables `Heading/XL`, `Heading/L`, `Heading/S`, `Heading/XS`, `Body/M`, `Body/S`. Font sizes and line heights are in px/% as returned by Figma. Letter spacing from Figma is numeric (-3); in Tailwind we use the equivalent `-0.03em`.

## What was not in Figma variables

- **Space / padding / gap:** No spacing variables were returned. Left empty in `tokens.json`. Add values here after you define spacing in Figma (e.g. as variables or from a frame audit).
- **Radius:** No border radius variables were returned. Left empty.
- **Shadow:** No shadow variables were returned. Left empty.

## Semantic mapping (Tailwind)

- **bg** → `#ffffff` (Color/White)
- **surface** → `#ffffff` (White); use for cards/surfaces
- **text** → `#1d1d1d` (Color/Black)
- **muted** → `#d9d9d9` (Color/Grey) for muted text; alternate `blackTransparent` for subtle text
- **border** → `#d9d9d9` (Color/Grey)
- **accent** → `#1d1d1d` (Color/Black). No separate “accent” color in Figma; Black is the only dark for emphasis.
- **accentHover** → `#1d1d1d33` (Color/Black Transparent) for hover state.

## Normalization

- **Line height:** Figma returned `100` for most types (interpreted as 100%) and `64` for Heading/XL (64px). In Tailwind we use unitless equivalents (e.g. `1` for 100%, or explicit `fontSize/lineHeight` pairs).
- **Letter spacing:** Figma `-3` used as `-0.03em` in Tailwind.
