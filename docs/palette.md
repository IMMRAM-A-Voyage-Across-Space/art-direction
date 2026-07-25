# IMMRAM — Art Direction & Palette

> The locked palette for IMMRAM. Every sprite colour must come from this set —
> `tools/palette_check.py` in the game repo flags anything outside it.

Palette/layer reference for IMMRAM (*A Voyage Across Space*; former working titles
STARFALL / SpaceHeroes). Locks the palette and the rules
that turn it into sprites. Interactive palette explorer:
https://claude.ai/code/artifact/1fd3a246-5138-4ef6-8b59-05a5d8320f77

## 0. The world (read first)

**IMMRAM — *A Voyage Across Space*** is an Irish myth reimagined in space. An *immram* is Ireland's own
genre of story — a sea-voyage rowed out to Otherworld islands (the Voyages of
Bran and of Máel Dúin). Here the islands are **planets**, and the voyage is
across the stars. Everything you draw sits at that fusion: **Celtic myth ×
neon retro-futurism.**

What that means at the pencil:
- **Insular-Irish ornament** is the decorative grammar — key-fret borders,
  triskeles, spirals, interlace knotwork. It lives on UI chrome, structures,
  and the 12 faction emblems. Rendered in **Illumination Gold** (glowing, like
  gilding on a manuscript page lit by neon).
- **The cast is mythic, not military.** Factions and units carry Irish names
  (the Bláth, the Draoithe, the Fomhóir); worlds are named for the Otherworld
  and the Four Cities (Mag Mell, Tír na nÓg, Gorias, Murias, Falias). Draw
  gods, druids, and monsters crossing the void — not soldiers.
- **Tone:** vast and lonely yet electric — a manuscript illumination that also
  glows like a synth. When in doubt, ask "would this feel at home in an
  illuminated Otherworld voyage?"

**Who you're drawing — the grandchildren of the immrama.** The cast are the
*descendants* of the legendary voyagers (Máel Dúin, Bran, Brendan). They inherit
the old voyages the way we inherit family stories — so draw people who *carry
their lineage on them*: weathered heirlooms, an ancestral emblem worn like a
crest, knotwork that reads as a bloodline mark, gear handed down and re-forged.
Not fresh recruits — inheritors of a long sea-road. The story they're living is a
voyage that turns from **vengeance toward forgiveness**, so let the mood carry
both edges: grief and hardness early, wonder and release as it opens out.

**Echoes, not transcription (the one rule for island/planet art).** We do *not*
re-stage the old tales literally — no literal isle of ants, no literal crystal
bridge. Inherit the *mood and shape* of an ancestral wonder, then invent the
*matter* in space: "ants that eat the boat" becomes a scavenger-swarm stripping a
derelict; "the land of eternal youth" becomes a planet that tempts you to stop
voyaging. Half-remembered legend-motifs — the **Cloud** (a red-crowned volcanic
mountain), the **White Tree** (shedding leaves like white birds), the **Star** at
the edge of the dark — recur as signature *wonder-planets*, not stage props.
Draw the legend as the grandchildren would half-remember it, not as a re-enactment.

**Reference — the source tales (for mood, never to copy).** Read for the
*feeling* of these wonders, then invent our own in space:
- [Máel Dúin (via CELT)](https://celt.ucc.ie/transpage.html) — the deepest bank
  of strange islands (shape-shifting beasts, a sky raining fish, a sea you can
  see fortresses beneath). Fastest read: the
  [Uí Corra commentary](https://www.medievaldeathtrip.com/the-voyage-of-the-ui-corra-part-1/).
- [St Brendan's *Navigatio*](https://archive.org/details/voyageofsaintbre0000unse)
  + Tolkien's **"Imram"** ([overview](https://tolkiengateway.net/wiki/Imram)) —
  the source of our signature motifs: the **Cloud** (red-crowned volcanic
  mountain), the **White Tree**, the **Star** at the edge of the dark.
- [The Voyage of Bran](https://archive.org/details/voyageofbransono01meye) — the
  Otherworld's colour and light (the silver apple-branch, the plain of many hues).

Full scholarly source list lives in the story-layer design doc
(`docs/superpowers/specs/2026-07-08-immram-story-layer-design.md`).

**Reference — space & neon pop (the other two thirds of the fusion).** The tales
above feed the *myth*; these feed the *look*. Read for calibration, then bend to
our palette and pixel medium.

*Space — the "vast, full and empty" voyage:*
- **1970s SF paperback art** — Chris Foss (bold, impossible ships), **John Harris
  (monumental structures in hazy light — our full-and-empty at once)**, Peter
  Elson. Collected in
  [*Worlds Beyond Time*](https://www.counter-print.co.uk/products/worlds-beyond-time-sci-fi-art-of-the-1970s).
- [**Moebius / Jean Giraud**](https://en.wikipedia.org/wiki/Jean_Giraud) — *Arzach*
  for the lone-voyage-through-wonder mood (clean skies, endless horizons). Take
  the clear-horizon Moebius, NOT his gritty cyberpunk — that grime is a different
  mode from our bold-clean neon.

*Neon pop — the retro-futurist skin:*
- [**James White / Signalnoise "Outrun" series**](https://signalnoise.com/outrun-series) —
  the definitive synthwave artist; magenta/cyan/violet neon, chrome, grids. That
  palette *is* our player-cyan / enemy-magenta rim logic.
  ([movement overview](https://en.wikipedia.org/wiki/Synthwave)).
- [**Hyper Light Drifter**](https://en.wikipedia.org/wiki/Hyper_Light_Drifter) —
  the north star: *pixel art* doing exactly our neon-on-dark discipline (deep
  shadows, stylized silhouettes, painterly neon). If you look at one thing, this.
  *Katana Zero* for neon-soaked layered lighting.

The one thing no reference has: illuminated-manuscript **gold knotwork over
synthwave neon**. These wells feed the two halves; the Celtic × neon fusion is ours.

## 1. Direction

**Bold neon retro-futurist.** Space is vast — full and empty at the same time;
every screen should feel *on the edge of its seat, building toward something*.
Grounds stay dark and near-neutral so a few saturated neons carry all the
energy. Discipline is structural, not numeric: ~110 colors, but every one
belongs to a named layer with a defined job.

## 2. Layer architecture

| Layer | Scope | Job |
|---|---|---|
| **Core** | universal | void ground, ambient shadow, star highlight |
| **Terrain** | per world | the 5-band value ramp for ground/rock shading |
| **Materials** | per world | that world's stuff — wood, ice, metal, obsidian… |
| **Creatures** | per world | body + eye kit to draw the biome's ecology |
| **Pop** | per world | one environmental accent (glow/energy/hazard) |
| **Faction banners** | 12, reserved | identity only — flags, emblems, unit markers |
| **Effects** | universal | combat FX: blood, poison, fire… |
| **Armies & UI** | universal | team rims, status, resources |

Two hard separations:
- **Banner ≠ pop.** Banners are a reserved identity set; they appear only on
  emblems/flags/unit markers, never as terrain or generic accent. A pop painted
  into a world stays environmental and never reads as allegiance.
- **Terrain is self-contained.** No shared material pool — a moon has no trees,
  so brown lives in Terran's own palette. Only Core, Effects, and Armies & UI
  are shared, because units and the HUD appear on every world.

## 3. Locked palette

### Core (universal)
```
Void      #08060f   darkest, outlines, deep space
Shadow    #14102a   ambient occlusion / cast shadow
Starlight #e8ecff   universal specular highlight
```

### Per world — terrain ramp · materials · creatures · pop
Ramp order: `Shade Dark Base Light Hi`.

**Regolith** (barren moon)
```
terrain    #241f2a #4a453d #9a9082 #ece2d0 #fbf6ec
materials  Crater #1a1620  Rock #524d58  Mineral #8fb0c0
creatures  Hide #544a5a  Carapace #8a8296  Eye #6fd8ff
pop        Red glow #ff5a5a
```
**Ferrite** (oxidised iron — Deep Oxide)
```
terrain    #24100c #5a2416 #944228 #c86842 #e89870
materials  Gunmetal #3a4250  Pipe #5a6572  Ember #ff7a3d  Oil #14100a
creatures  Hide #3a2a22  Plate #6a5a4a  Eye #ff8a3d
pop        Green glow #4ee06a
```
**Cryo** (ice)
```
terrain    #101a3a #2a5fa8 #4f9ce0 #a8e6ff #e6f6ff
materials  Snow #eef6ff  Deep ice #1f4a7a  Rock #3a4250
creatures  Hide #6a7a94  Frost-skin #aebfd4  Eye #a8f6ff
pop        Magenta #ff6ad8
```
**Terran** (earth green)
```
terrain    #0a2a2a #0f7a45 #22c874 #4dff9e #c0ffe0
materials  Wood #6e4428  Bark #3a2416  Water #2f7ac0  Soil #4a3420  Rock #5a5a52
creatures  Hide #3a4a22  Moss #6a8a3a  Eye #ffe14f
pop        Blue glow #5f82ff
```
**Basalt** (volcanic boss — Molten)
```
terrain    #2a0c08 #9c2408 #e04810 #ff6a2a #ffb070
materials  Obsidian #120a10  Ash #4a4550  Char #2a1c1c  Ember #ff9a4f
creatures  Char-hide #3a1c16  Cracked #7a2a1a  Eye #ff5a2a
pop        Cyan glow #2ad6ff
```
**Xenoturf** (psychedelic)
```
terrain    #1f0a3a #6a1fa8 #b03fe0 #f06aff #ffc0ff
materials  Spore #ff9fe0  Bio-cyan #4ff2d0  Flesh #d66a9c  Rot #5a4a2a
creatures  Flesh #7a3a8a  Membrane #c86ad0  Eye #a8ff3d
pop        Yellow #ffe24a
```

Pops form a **hexad** (two triads, 60° apart) so no two read alike, and each is
a triadic/tetradic accent of its own terrain, clear of its own two banners.

### Faction banners (12, reserved identity)
Two rival causes per biome, **complementary** so A and B always oppose.
```
Regolith  A Gold  #ffcf3a    B Indigo  #6a4cff
Ferrite   A Red   #ff3b30    B Cyan    #33e6f0
Cryo      A Azure #2e8bff    B Orange  #ff8a1e
Terran    A Green #1fbf5f    B Magenta #ff3ec9
Basalt    A Lime  #b6f53a    B Violet  #a94ce6
Xenoturf  A Teal  #1fd6a8    B Rose    #ff6f8f
```

### Liquids (per planet)
Each planet's liquid is its own tinted tile (deep → base → foam), chosen at
render by the planet's theme biome (`liquid_asset_key(map.theme)` →
`biome-liquid-<world>`), so it contrasts that planet's land and reads as its
liquid type. The game only picks the key; the colours live in the generator.
```
Terran  (water)   #0a2a4a #2f7ac0 #9fd4f0
Regolith(water)   #14243a #4a6a8a #9ab0c8
Xenoturf(water)   #0a2e3a #2ad0c8 #9ff0e8
Ferrite (acid)    #163a12 #6ec828 #c8ff6a
Cryo    (methane) #0a3230 #22b8a8 #a8f0e4
Basalt  (lava)    #3a0c04 #ff5a14 #ffd24a
```

### Illumination (gold + Celtic ornament)
The Celtic layer, added over the neon. Two shared gold tones; knot outlines
reuse Void. Gold blooms in post like other neons.
```
Illumination Gold #e8b83a   interlace bands, borders, emblem fills
Gold Glint        #ffdf8a   raised highlight on gold
(outline)         #08060f   = Void
```
Ornament vocabulary (Insular Irish): key/step (fret) borders, triskele &
double-spiral bosses (shipped); plaited interlace trim, zoomorphic terminals,
and Ogham strokes are planned. Applied to UI chrome, structures, and faction
emblems — never so heavy that terrain or unit silhouettes stop reading.

### Effects (universal)
```
Blood #a01020  Poison #7dff3d  Fire #ff7a1f  Frost #8fe6ff
Shock #ffe14f  Heal #3dff88   Shield #4f9cff  Smoke #6a6472
```

### Armies & UI (universal)
```
Player rim  #4ff2ff (Ion Cyan)      Enemy rim #ff4fd8 (Magenta)
Wild/neutral #c7bca8               Outline   #08060f (= Void)
Status   Health #3dff88  Low #ff3d4f  Damage #ffffff  Select #ffe14f  XP #4ff2ff
Resources Credits #ffd24f  Alloy #b8c0d0  Ore #c8763f  Plasma #ff5ff0  Crystal #6fe0ff
```

## 4. Shading rules

- **Bands.** Shade sprites with the world's 5-band ramp. `Base` is the local
  colour; `Dark`/`Shade` for occlusion, `Light`/`Hi` for lit faces. Use
  `Shadow` (core) for the darkest cast shadow, `Starlight` for a single
  specular tick only. Do not introduce off-ramp intermediate tones.
- **Light.** One key light from top-left; keep it consistent across every
  sprite so the world reads as one scene.
- **Economy.** Terrain tiles: 3–4 bands. Small props/units: 2–3 bands + outline.
  Neon (pop/banner/effect/eye) is a spot colour, never a full body fill.

## 5. Outlines, rims & allegiance

- **Outline** = Void `#08060f`, selective (darkest where forms overlap; lighter
  or absent on lit silhouette edges). Never pure `#000`.
- **Team rim.** Allegiance is the fastest read in battle: a rim-light in
  **Player Ion Cyan** or **Enemy Magenta** around the unit silhouette. This is
  the primary side cue; banners are secondary.
- **Eye glow.** Each creature's Eye colour is the one always-lit accent — the
  "life" spark — and gets the strongest bloom.
- Rim (side) and banner (faction) never occupy the same pixels: rim is the
  silhouette edge, banner is an emblem/flash on the body.

## 6. Creatures

Draw the body from the world's creature kit (Hide → Carapace/Plate/Membrane for
bands) plus terrain-ramp/material tones for detail; the kit is tuned to
*contrast* its own ground so units never blend into terrain. Eye = the lit
accent. Team rim carries side; a small banner flash carries faction.

## 7. Structures & banners

- Player/built structures read as tech: use a world's Metal-like material
  (Ferrite Gunmetal/Pipe; elsewhere Rock + a cool grey) with the **team rim**.
- **Banners** are where faction identity lives — flags over capitals/mines,
  shoulder flashes on units, and faction cards in UI. Always the flat, saturated
  banner hue (no shading past a 1px dark edge) so identity stays unambiguous.
- In a battle the enemy is one faction: enemy units carry the Magenta team rim
  *and* their faction banner. Keep the banner as an emblem so it doesn't fight
  the rim.

## 8. Pop, effects, signal

- **Pop** is environmental only: crystal glows, energy conduits, hazard washes,
  ambient particles. One per world; bloomed. Never used as a unit/faction mark.
- **Effects** are universal and override local colour on top (blood splatter,
  poison cloud, fire, frost, shock arc, heal sparkle, shield bubble, smoke).
- **Signal** colours are UI-only (health bar, low-HP flash, white damage pop,
  yellow selection ring, cyan XP). Resource pips use the resource set.

## 9. Post-processing

Applied as a full-screen pass over crisp pixel art (keep integer scaling; do not
pre-blur the source):
- **Bloom** on neons only — pop, banner, effect, eye, team rim, `Hi`/Starlight
  ticks. Grounds and mid-bands must not bloom, or the "vast dark" is lost.
- **CRT** subtle: faint scanlines + slight vignette. Keep it low; it's mood, not
  a filter gag.
- **Chromatic aberration** minimal, edges only.
- `prefers-reduced-motion` / low-spec: bloom + vignette may scale to zero; the
  base palette must still read fully without post.

## 10. pixedit mapping & discipline

- Sprites are `pixedit/1`: YAML frontmatter (`format/name/width/height`) + a
  hex-per-cell markdown grid. Colours are **raw hex**, so palette discipline is
  editorial — every non-empty cell must be a hex from §3 (a ramp/material/
  creature/pop for that world, or a universal Core/Effect/Army value).
- Validator: `tools/palette_check.py` scans `assets/**/*.pixel.md` and screams
  about off-palette colours (nearest-match hint, per-world for `biome-*`). It
  models ramps as polylines so gradient tones between bands pass. It does **not**
  block — exit 0 by default; `--strict` opts into exit 1 for CI, `--tolerance N`
  tunes the allowed RGB distance (default 18), `--list` shows every offender.
- **Migration status: complete.** Land biomes, resource pips, structures,
  features, UI icons/chrome (`tools/gen_ui.py`), and per-planet liquids are all
  recoloured to the locked palette — `palette_check.py` is green for every
  sprite. Regenerate overworld art via `tools/gen_overworld.py`, UI via
  `tools/gen_ui.py`. Liquids render per planet: `liquid_asset_key(map.theme)`
  picks `biome-liquid-<world>`; `map.theme` is the planet's generation biome.
  Celtic visual layer applied: Illumination Gold + ornament on UI chrome,
  structures, and 12 faction emblems (emblem placement wired in the Naming layer).

## 11. Contrast checklist

- Player Cyan vs Enemy Magenta: distinct in hue *and* lightness → survives most
  colour-blindness; the rim placement (not just colour) reinforces side.
- Every creature Hide separates from its terrain Base by value.
- Banners: all 12 mutually distinct; each biome's A/B are complementary.
- Pops: hexad — mutually distinct and each clear of its own banners.
