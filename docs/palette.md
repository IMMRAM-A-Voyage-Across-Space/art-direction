# IMMRAM — Art Direction & Palette

> The locked palette for IMMRAM. Every sprite colour must come from this set —
> `tools/palette_check.py` in the game repo flags anything outside it.

Palette/layer reference for IMMRAM (*A Voyage Across Space*; former working titles
STARFALL / SpaceHeroes). Locks the palette and the rules
that turn it into sprites.

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

A fuller annotated source list lives in [the world bible](bible.md#the-source-tales-the-well).

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
  so brown lives in Machaire's own palette. Only Core, Effects, and Armies & UI
  are shared, because units and the HUD appear on every world.

## 3. Locked palette

### Core (universal)

<div markdown>
| | Name | Hex | Use |
|---|---|---|---|
| <span class="swatch" style="background:#08060f"></span> | Void | `#08060f` | darkest, outlines, deep space |
| <span class="swatch" style="background:#14102a"></span> | Shadow | `#14102a` | ambient occlusion / cast shadow |
| <span class="swatch" style="background:#e8ecff"></span> | Starlight | `#e8ecff` | universal specular highlight |
</div>

### Per world — terrain ramp · materials · creatures · pop
Ramp order: `Shade Dark Base Light Hi`.

**Falias · Cnámh** (bone-grey dust & craters)

<div markdown>
*Terrain ramp:*

| Shade | Dark | Base | Light | Hi |
|---|---|---|---|---|
| <span class="swatch" style="background:#241f2a"></span> `#241f2a` | <span class="swatch" style="background:#4a453d"></span> `#4a453d` | <span class="swatch" style="background:#9a9082"></span> `#9a9082` | <span class="swatch" style="background:#ece2d0"></span> `#ece2d0` | <span class="swatch" style="background:#fbf6ec"></span> `#fbf6ec` |

*Materials, creatures & pop:*

| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#1a1620"></span> | Materials | Crater | `#1a1620` |
| <span class="swatch" style="background:#524d58"></span> | Materials | Rock | `#524d58` |
| <span class="swatch" style="background:#8fb0c0"></span> | Materials | Mineral | `#8fb0c0` |
| <span class="swatch" style="background:#544a5a"></span> | Creatures | Hide | `#544a5a` |
| <span class="swatch" style="background:#8a8296"></span> | Creatures | Carapace | `#8a8296` |
| <span class="swatch" style="background:#6fd8ff"></span> | Creatures | Eye | `#6fd8ff` |
| <span class="swatch" style="background:#ff5a5a"></span> | Pop | Red glow | `#ff5a5a` |
</div>

**Gorias · Meirg** (rust-red iron dunes)

<div markdown>
*Terrain ramp:*

| Shade | Dark | Base | Light | Hi |
|---|---|---|---|---|
| <span class="swatch" style="background:#24100c"></span> `#24100c` | <span class="swatch" style="background:#5a2416"></span> `#5a2416` | <span class="swatch" style="background:#944228"></span> `#944228` | <span class="swatch" style="background:#c86842"></span> `#c86842` | <span class="swatch" style="background:#e89870"></span> `#e89870` |

*Materials, creatures & pop:*

| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#3a4250"></span> | Materials | Gunmetal | `#3a4250` |
| <span class="swatch" style="background:#5a6572"></span> | Materials | Pipe | `#5a6572` |
| <span class="swatch" style="background:#ff7a3d"></span> | Materials | Ember | `#ff7a3d` |
| <span class="swatch" style="background:#14100a"></span> | Materials | Oil | `#14100a` |
| <span class="swatch" style="background:#3a2a22"></span> | Creatures | Hide | `#3a2a22` |
| <span class="swatch" style="background:#6a5a4a"></span> | Creatures | Plate | `#6a5a4a` |
| <span class="swatch" style="background:#ff8a3d"></span> | Creatures | Eye | `#ff8a3d` |
| <span class="swatch" style="background:#4ee06a"></span> | Pop | Green glow | `#4ee06a` |
</div>

**Murias · Oighear** (methane ice)

<div markdown>
*Terrain ramp:*

| Shade | Dark | Base | Light | Hi |
|---|---|---|---|---|
| <span class="swatch" style="background:#101a3a"></span> `#101a3a` | <span class="swatch" style="background:#2a5fa8"></span> `#2a5fa8` | <span class="swatch" style="background:#4f9ce0"></span> `#4f9ce0` | <span class="swatch" style="background:#a8e6ff"></span> `#a8e6ff` | <span class="swatch" style="background:#e6f6ff"></span> `#e6f6ff` |

*Materials, creatures & pop:*

| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#eef6ff"></span> | Materials | Snow | `#eef6ff` |
| <span class="swatch" style="background:#1f4a7a"></span> | Materials | Deep ice | `#1f4a7a` |
| <span class="swatch" style="background:#3a4250"></span> | Materials | Rock | `#3a4250` |
| <span class="swatch" style="background:#6a7a94"></span> | Creatures | Hide | `#6a7a94` |
| <span class="swatch" style="background:#aebfd4"></span> | Creatures | Frost-skin | `#aebfd4` |
| <span class="swatch" style="background:#a8f6ff"></span> | Creatures | Eye | `#a8f6ff` |
| <span class="swatch" style="background:#ff6ad8"></span> | Pop | Magenta | `#ff6ad8` |
</div>

**Mag Mell · Machaire** (green plain)

<div markdown>
*Terrain ramp:*

| Shade | Dark | Base | Light | Hi |
|---|---|---|---|---|
| <span class="swatch" style="background:#0a2a2a"></span> `#0a2a2a` | <span class="swatch" style="background:#0f7a45"></span> `#0f7a45` | <span class="swatch" style="background:#22c874"></span> `#22c874` | <span class="swatch" style="background:#4dff9e"></span> `#4dff9e` | <span class="swatch" style="background:#c0ffe0"></span> `#c0ffe0` |

*Materials, creatures & pop:*

| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#6e4428"></span> | Materials | Wood | `#6e4428` |
| <span class="swatch" style="background:#3a2416"></span> | Materials | Bark | `#3a2416` |
| <span class="swatch" style="background:#2f7ac0"></span> | Materials | Water | `#2f7ac0` |
| <span class="swatch" style="background:#4a3420"></span> | Materials | Soil | `#4a3420` |
| <span class="swatch" style="background:#5a5a52"></span> | Materials | Rock | `#5a5a52` |
| <span class="swatch" style="background:#3a4a22"></span> | Creatures | Hide | `#3a4a22` |
| <span class="swatch" style="background:#6a8a3a"></span> | Creatures | Moss | `#6a8a3a` |
| <span class="swatch" style="background:#ffe14f"></span> | Creatures | Eye | `#ffe14f` |
| <span class="swatch" style="background:#5f82ff"></span> | Pop | Blue glow | `#5f82ff` |
</div>

**Tech Duinn · Gríosach** (black volcanic rock)

<div markdown>
*Terrain ramp:*

| Shade | Dark | Base | Light | Hi |
|---|---|---|---|---|
| <span class="swatch" style="background:#2a0c08"></span> `#2a0c08` | <span class="swatch" style="background:#9c2408"></span> `#9c2408` | <span class="swatch" style="background:#e04810"></span> `#e04810` | <span class="swatch" style="background:#ff6a2a"></span> `#ff6a2a` | <span class="swatch" style="background:#ffb070"></span> `#ffb070` |

*Materials, creatures & pop:*

| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#120a10"></span> | Materials | Obsidian | `#120a10` |
| <span class="swatch" style="background:#4a4550"></span> | Materials | Ash | `#4a4550` |
| <span class="swatch" style="background:#2a1c1c"></span> | Materials | Char | `#2a1c1c` |
| <span class="swatch" style="background:#ff9a4f"></span> | Materials | Ember | `#ff9a4f` |
| <span class="swatch" style="background:#3a1c16"></span> | Creatures | Char-hide | `#3a1c16` |
| <span class="swatch" style="background:#7a2a1a"></span> | Creatures | Cracked | `#7a2a1a` |
| <span class="swatch" style="background:#ff5a2a"></span> | Creatures | Eye | `#ff5a2a` |
| <span class="swatch" style="background:#2ad6ff"></span> | Pop | Cyan glow | `#2ad6ff` |
</div>

**Tír na nÓg · Draíocht** (bioluminescent growth)

<div markdown>
*Terrain ramp:*

| Shade | Dark | Base | Light | Hi |
|---|---|---|---|---|
| <span class="swatch" style="background:#1f0a3a"></span> `#1f0a3a` | <span class="swatch" style="background:#6a1fa8"></span> `#6a1fa8` | <span class="swatch" style="background:#b03fe0"></span> `#b03fe0` | <span class="swatch" style="background:#f06aff"></span> `#f06aff` | <span class="swatch" style="background:#ffc0ff"></span> `#ffc0ff` |

*Materials, creatures & pop:*

| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#ff9fe0"></span> | Materials | Spore | `#ff9fe0` |
| <span class="swatch" style="background:#4ff2d0"></span> | Materials | Bio-cyan | `#4ff2d0` |
| <span class="swatch" style="background:#d66a9c"></span> | Materials | Flesh | `#d66a9c` |
| <span class="swatch" style="background:#5a4a2a"></span> | Materials | Rot | `#5a4a2a` |
| <span class="swatch" style="background:#7a3a8a"></span> | Creatures | Flesh | `#7a3a8a` |
| <span class="swatch" style="background:#c86ad0"></span> | Creatures | Membrane | `#c86ad0` |
| <span class="swatch" style="background:#a8ff3d"></span> | Creatures | Eye | `#a8ff3d` |
| <span class="swatch" style="background:#ffe24a"></span> | Pop | Yellow | `#ffe24a` |
</div>

Pops form a **hexad** (two triads, 60° apart) so no two read alike, and each is
a triadic/tetradic accent of its own terrain, clear of its own two banners.

### Faction banners (12, reserved identity)
Two rival causes per biome, **complementary** so A and B always oppose.

<div markdown>
| Biome | Cause | | Name | Hex |
|---|---|---|---|---|
| Cnámh | A | <span class="swatch" style="background:#ffcf3a"></span> | Gold | `#ffcf3a` |
| Cnámh | B | <span class="swatch" style="background:#6a4cff"></span> | Indigo | `#6a4cff` |
| Meirg | A | <span class="swatch" style="background:#ff3b30"></span> | Red | `#ff3b30` |
| Meirg | B | <span class="swatch" style="background:#33e6f0"></span> | Cyan | `#33e6f0` |
| Oighear | A | <span class="swatch" style="background:#2e8bff"></span> | Azure | `#2e8bff` |
| Oighear | B | <span class="swatch" style="background:#ff8a1e"></span> | Orange | `#ff8a1e` |
| Machaire | A | <span class="swatch" style="background:#1fbf5f"></span> | Green | `#1fbf5f` |
| Machaire | B | <span class="swatch" style="background:#ff3ec9"></span> | Magenta | `#ff3ec9` |
| Gríosach | A | <span class="swatch" style="background:#b6f53a"></span> | Lime | `#b6f53a` |
| Gríosach | B | <span class="swatch" style="background:#a94ce6"></span> | Violet | `#a94ce6` |
| Draíocht | A | <span class="swatch" style="background:#1fd6a8"></span> | Teal | `#1fd6a8` |
| Draíocht | B | <span class="swatch" style="background:#ff6f8f"></span> | Rose | `#ff6f8f` |
</div>

### Liquids (per planet)
Each planet's liquid is its own tinted tile (deep → base → foam), chosen at
render by the planet's theme biome (`liquid_asset_key(map.theme)` →
`biome-liquid-<world>`), so it contrasts that planet's land and reads as its
liquid type. The game only picks the key; the colours live in the generator.

<div markdown>
| Biome | Liquid | Deep | Base | Foam |
|---|---|---|---|---|
| Machaire | water | <span class="swatch" style="background:#0a2a4a"></span> `#0a2a4a` | <span class="swatch" style="background:#2f7ac0"></span> `#2f7ac0` | <span class="swatch" style="background:#9fd4f0"></span> `#9fd4f0` |
| Cnámh | water | <span class="swatch" style="background:#14243a"></span> `#14243a` | <span class="swatch" style="background:#4a6a8a"></span> `#4a6a8a` | <span class="swatch" style="background:#9ab0c8"></span> `#9ab0c8` |
| Draíocht | water | <span class="swatch" style="background:#0a2e3a"></span> `#0a2e3a` | <span class="swatch" style="background:#2ad0c8"></span> `#2ad0c8` | <span class="swatch" style="background:#9ff0e8"></span> `#9ff0e8` |
| Meirg | acid | <span class="swatch" style="background:#163a12"></span> `#163a12` | <span class="swatch" style="background:#6ec828"></span> `#6ec828` | <span class="swatch" style="background:#c8ff6a"></span> `#c8ff6a` |
| Oighear | methane | <span class="swatch" style="background:#0a3230"></span> `#0a3230` | <span class="swatch" style="background:#22b8a8"></span> `#22b8a8` | <span class="swatch" style="background:#a8f0e4"></span> `#a8f0e4` |
| Gríosach | lava | <span class="swatch" style="background:#3a0c04"></span> `#3a0c04` | <span class="swatch" style="background:#ff5a14"></span> `#ff5a14` | <span class="swatch" style="background:#ffd24a"></span> `#ffd24a` |
</div>

### Illumination (gold + Celtic ornament)
The Celtic layer, added over the neon. Two shared gold tones; knot outlines
reuse Void. Gold blooms in post like other neons.

<div markdown>
| | Name | Hex | Use |
|---|---|---|---|
| <span class="swatch" style="background:#e8b83a"></span> | Illumination Gold | `#e8b83a` | interlace bands, borders, emblem fills |
| <span class="swatch" style="background:#ffdf8a"></span> | Gold Glint | `#ffdf8a` | raised highlight on gold |
| <span class="swatch" style="background:#08060f"></span> | (outline) | `#08060f` | = Void |
</div>

Ornament vocabulary (Insular Irish): key/step (fret) borders, triskele &
double-spiral bosses (shipped); plaited interlace trim, zoomorphic terminals,
and Ogham strokes are planned. Applied to UI chrome, structures, and faction
emblems — never so heavy that terrain or unit silhouettes stop reading.

### Effects (universal)

<div markdown>
| | Name | Hex |
|---|---|---|
| <span class="swatch" style="background:#a01020"></span> | Blood | `#a01020` |
| <span class="swatch" style="background:#7dff3d"></span> | Poison | `#7dff3d` |
| <span class="swatch" style="background:#ff7a1f"></span> | Fire | `#ff7a1f` |
| <span class="swatch" style="background:#8fe6ff"></span> | Frost | `#8fe6ff` |
| <span class="swatch" style="background:#ffe14f"></span> | Shock | `#ffe14f` |
| <span class="swatch" style="background:#3dff88"></span> | Heal | `#3dff88` |
| <span class="swatch" style="background:#4f9cff"></span> | Shield | `#4f9cff` |
| <span class="swatch" style="background:#6a6472"></span> | Smoke | `#6a6472` |
</div>

### Armies & UI (universal)

<div markdown>
| | Category | Name | Hex |
|---|---|---|---|
| <span class="swatch" style="background:#4ff2ff"></span> | Team rim | Player rim (Ion Cyan) | `#4ff2ff` |
| <span class="swatch" style="background:#ff4fd8"></span> | Team rim | Enemy rim (Magenta) | `#ff4fd8` |
| <span class="swatch" style="background:#c7bca8"></span> | Neutral | Wild/neutral | `#c7bca8` |
| <span class="swatch" style="background:#08060f"></span> | Neutral | Outline (= Void) | `#08060f` |
| <span class="swatch" style="background:#3dff88"></span> | Status | Health | `#3dff88` |
| <span class="swatch" style="background:#ff3d4f"></span> | Status | Low | `#ff3d4f` |
| <span class="swatch" style="background:#ffffff"></span> | Status | Damage | `#ffffff` |
| <span class="swatch" style="background:#ffe14f"></span> | Status | Select | `#ffe14f` |
| <span class="swatch" style="background:#4ff2ff"></span> | Status | XP | `#4ff2ff` |
| <span class="swatch" style="background:#ffd24f"></span> | Resources | Credits | `#ffd24f` |
| <span class="swatch" style="background:#b8c0d0"></span> | Resources | Alloy | `#b8c0d0` |
| <span class="swatch" style="background:#c8763f"></span> | Resources | Ore | `#c8763f` |
| <span class="swatch" style="background:#ff5ff0"></span> | Resources | Plasma | `#ff5ff0` |
| <span class="swatch" style="background:#6fe0ff"></span> | Resources | Crystal | `#6fe0ff` |
</div>

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
  (Meirg Gunmetal/Pipe; elsewhere Rock + a cool grey) with the **team rim**.
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
