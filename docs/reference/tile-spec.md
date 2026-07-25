# Overworld Tile Spec

The artist-facing drawing contract for the **planet adventure map** tileset — the artist-facing
subset of the engine's `assets/overworld/MANIFEST.md`. This page covers **only** the pipeline,
geometry, colour rules, border strategy, and naming contract; it deliberately excludes every
asset inventory (which biomes/structures/overlays exist, RELEASE reservations, the authoring
checklist).

This is the artist-facing drawing contract only — pipeline, geometry, colour, borders, naming.
For what is currently shipped, see the [sprite gallery](../sprites.md), which is generated from
the files on disk and so cannot go stale.

## Pipeline

- **Author** in PixEdit as `.pixel.md` under `assets/overworld/src/`.
- **Export** to PNG under `assets/overworld/png/` (same basename). The engine loads **PNG only**
  — it never parses `.pixel.md`.
- Keep `src/` (authoring truth) and `png/` (runtime) basenames identical, e.g.
  `src/biomes/biome-cnamh.pixel.md` → `png/biomes/biome-cnamh.png`.

## Geometry (every tile)

- **Canvas 64×64.** Art is a **2:1 isometric diamond**: 64 wide × 32 tall, centred vertically;
  corners and the top/bottom bands are transparent.
- Diamond mask: `abs(x-31.5)/32 + abs(y-31.5)/16 <= 1.0`.
- Engine places tile `(i, j)` at screen `((i-j)*32, (i+j)*16)`. Diamonds interlock with no gaps.
- Structures use the same 64×64 canvas, drawn over the ground tile at identical x/y (same-origin
  overlay). The **footprint is centred on the diamond centre** (canvas row ~32), NOT at the front
  vertex — standing objects contact the ground at row ~35 and rise toward row 0; flat pieces (pad,
  crater) are centred on the diamond centre. The drop-shadow must stay inside the diamond so the
  object reads as planted *on* the tile rather than hanging off its front edge.

## Colour rules

From the `pixel-format` skill:

- Cells: `#rrggbb` (opaque), `#rrggbbaa` (alpha), or blank (transparent). Lowercase; omit alpha
  when opaque.
- `width: 64`, `height: 64` front-matter required.

## Border strategy

- **NOW = A (hard edges).** Each ground tile is one biome; borders are crisp diamond edges. The
  engine renders a single ground layer. No transition/shoreline art.
- **RELEASE = C (edge-overlay autotiling).** Each biome gets a base tile + edge-overlay sprites
  drawn on top where a higher-priority biome meets a lower one. Naming and priority are reserved
  so C drops in without renaming the NOW set.

## Naming contract

- Sprites are organised into **category subfolders** (mirrored identically in `src/` and `png/`)
  purely for authoring/navigation. **Asset keys stay flat basenames** — `Assets::load` walks the
  tree and indexes every PNG by basename, so the engine loads `biome-machaire` wherever the file
  physically lives. Basenames are **globally unique** across the tree (a collision would be an
  authoring error).
- `src/biome-<name>.pixel.md` → `png/biome-<name>.png` for biome ground tiles.
- `src/struct-<name>.pixel.md` → `png/struct-<name>.png` for structure/site markers.
- `src/feature-<name>.pixel.md` → `png/feature-<name>.png` for feature overlays.
- Every Mag Mell (Machaire/Terran) bespoke key contains `machaire` and is hand-authored in
  PixEdit; `tools/gen_overworld.py` never touches these.

!!! note "Drawing units, not terrain?"
    Unit sprites are a **128×128 canvas / 128×64 diamond**, not 64×64 —
    see [Commission #2](../briefs/units-ui.md) §3.1.
