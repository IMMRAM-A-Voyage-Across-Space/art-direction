# IMMRAM — Commission #2: Units, Buildings, Ships & UI

> **Project:** IMMRAM — *A Voyage Across Space* — an Irish-myth 4X-roguelite (HoMM3 economy + X-COM tactical battles).
> Stylised, readable, pixel-art-friendly.
> **This round:** everything the *art bible* (Commission #1) parked for later — **units, battlefield
> tilesets, buildings/capitals, ships, commander portraits, HUD/UI, and VFX** — delivered in **three
> phases**, with Phase 1 scoped to exactly what the first playable battle needs.
> **References (read first):** [Commission #1 — the six landscape plates](planet-plates.md)
> (the art bible: palette, lighting, material reads), the
> [tile spec](../reference/tile-spec.md)
> (geometry, pipeline, naming), and the
> [faction codex](../codex/factions.md)
> (rosters, causes, recruitment).

## 1. The approach — phased, battle-slice first

The full scope is large, so it ships in phases. **Phase 1 is the only phase needed for the first playable
milestone** (the tactical battle vertical slice). Phases 2–3 are scoped here so the artist sees the whole
and keeps it coherent, but are not started until Phase 1 lands.

- **Phase 1 — Battle slice:** the **Mag Mell** roster (6 units), **one battlefield tileset** (machaire) with
  cover objects, and a **minimal HUD**. This is the pilot that proves the unit pipeline and the battle read.
- **Phase 2 — Factions at scale:** the other five factions' rosters (30 units), the **neutral roster**
  (6 apex wildlife + 5 mercenaries), the six **capitals**, **dwelling overlays**, and the five remaining
  **battlefield tilesets**.
- **Phase 3 — Ships, commanders, full UI, VFX:** the dropship + hull variants + enemy fleet, the 18
  **commander portraits**, the complete **HUD/UI**, and **VFX**.

## 2. Style & technical targets (all phases)

Everything is derived from the **six plates** — they are the locked art bible.

- **Palette & material:** pull each faction's ramps from its plate (and from the
  [faction codex](../codex/factions.md)'s
  per-cause palettes). Keep material reads consistent with the plate they come from.
- **Lighting:** the **single fixed sun, upper-left, ~35°** from Commission #1 — every sprite is shaded to
  it. No second key light. No per-asset relighting.
- **Readability over realism:** chunky silhouettes, clear material reads. Every unit must read at a glance
  on a busy battlefield.
- **Two view geometries — same projection, different scale.** The map engine renders the overworld and the
  battle board with the *same* 2:1 isometric projection, but as two **views**:
  - **Overworld view** — `64×64` canvas, `64×32` diamond (the existing geometry documented in the
    [tile spec](../reference/tile-spec.md)). Used by
    world-surface structures: **capitals, dwellings, mines, dropship pad**.
  - **Battle view** — `128×128` canvas, `128×64` diamond (2:1 preserved), a closer/zoomed camera. Used by
    **battle units and battlefield tiles/cover**, so individual units, cover, and height read clearly.

  Both use the **same-origin overlay** convention (footprint centred on the diamond centre, art rising
  upward; drop-shadow stays inside the diamond).
- **Units this round are STATIC:** one sprite, **single facing**, **no animation**. Stack size is shown by
  a **count badge** in the HUD (HoMM3-style), not by drawing N creatures. Author each unit so it can be
  **animated later without a redraw** — lock silhouette, palette, and the fixed light now.
- **Pipeline (unchanged):** author in PixEdit as `.pixel.md` under `assets/.../src/`, export **PNG** under
  `.../png/` with identical basenames. The runtime loads **PNG only**.
- **Deliverables per asset:** flat PNG (final) + layered source; a per-faction **palette swatch strip**
  baked into the file margin (as in Commission #1).

---

## 3. Phase 1 — the battle slice *(the only phase the first playable needs)*

### 3.0 Mag Mell — the isle, and the war for it *(background for the artist)*

Mag Mell was the clan-host's first landfall beyond the home star — the Plain of Delight, a green world the
early voyage-fleets broke and sowed into the **breadbasket of the star-sea**. For a generation it was the
jewel: forest-belt holds, endless machaire fields, the isle every later landfall measured itself against.
"Mag Mell" became the word for *the good years*.

Then the home fleet reasserted itself. **An Ard-Riail** — the centralised admiralty and its professional,
plasma-armed hosting — moved to bring the isle, its resources, and its sea-lanes back under direct command.
**Tuatha Blátha** — the folk of blossom, the settler-line who broke the plain with their own hands — refused,
holding that Mag Mell belongs to those who made it bloom.

So IMMRAM's first war is a *civil* one: the same folk, the same warriors, the same craft, split over who Mag
Mell belongs to and how the clan-host should sail on. That's why it's the isle you start on — familiar, warm,
and quietly heartbreaking.

**What this means for the art — two dialects on one chassis:**
- **An Ard-Riail** — uniform, state-issue, clean steel with **plasma accents** (`#d24fd2`); drilled
  and matched. Its capital, the **Ard-Riail Spire**, is a fortified seat of command.
- **Tuatha Blátha** — improvised and agrarian; weathered, sun-faded **greens and earth tones**
  (`#3a6b2f / #5a8f43 / #8fc46a`), field-repaired gear, salvaged plating.
- Crucially, the **silhouettes are shared** — a Tuatha Blátha warrior and an Ard-Riail warrior are the *same*
  soldier; only finish, palette, and insignia differ. This is the visual proof of "same creatures, different
  cause," and it carries across the whole game.

*(For Phase 1, author the **neutral / shared** version of each Mag Mell unit; the two-cause skins are a light
recolour pass that can follow.)*

### 3.1 Units — Mag Mell roster (6)

Six static **battle-view** sprites (`128×128` canvas, `128×64` diamond), single facing, shaded to the fixed
sun, drawn from Mag Mell's machaire ramps (`#3a6b2f / #5a8f43 / #8fc46a`; Ard-Riail accents may lean plasma
`#d24fd2`). The larger battle canvas gives each unit presence — use it: distinct silhouettes so the six read
apart instantly, with clear height so flyers, tanks, and the champion are obvious.

| File | Unit | Class | Silhouette / read |
|---|---|---|---|
| `unit-magmell-conscript` | Conscript | melee | small, hunched riot-trooper; the chaff — clearly the weakest |
| `unit-magmell-marine` | Marine | ranged | upright rifle infantry; the recognisable "line" read |
| `unit-magmell-recon-drone` | Recon Drone | flyer | small hovering drone, slight cast shadow gap to read as airborne |
| `unit-magmell-combat-walker` | Combat Walker | melee (tank) | bulky bipedal mech; heaviest, widest footprint |
| `unit-magmell-gunship` | Gunship | flyer (artillery) | winged gunship, airborne; reads as ranged/air support |
| `unit-magmell-titan` | Titan | melee (champion) | towering — fills the canvas height; unmistakably the boss unit |

Flyers read as airborne via a shadow gap beneath the body (shadow still inside the diamond). Tanks/champion
read by mass and footprint width.

### 3.2 Battlefield tileset — machaire *(separate from the overworld set)*

A small **battle board** tileset at **battle-view** geometry (`128×128` canvas, `128×64` diamond) — its own
asset set, distinct from the overworld map per the game design.

| File | Asset | Notes |
|---|---|---|
| `battle-machaire-ground` | base battle ground | machaire palette; seamless mod-64, no baked sun direction in the texture |
| `battle-machaire-ground-v2` | variant | reduce repetition across the board |
| `cover-rock` | cover object | boulder; **half-cover** read |
| `cover-wreck` | cover object | wreckage; **full-cover** read |
| `cover-foliage` | cover object | scrub/foliage; **half-cover** read |
| `tile-height-step` | elevation marker | optional ledge tile to read a height tier (height advantage) |

Cover objects are overlay sprites (transparent except the object), drawn over the ground tile. The two
cover tiers (half/full) must be **visually distinguishable** — the tactics layer keys off them.

### 3.3 Minimal HUD

Just enough to play and read the slice:

| File | Element | Notes |
|---|---|---|
| `hud-initiative-strip` | initiative queue | horizontal strip of upcoming actors (small unit icons + side colour) |
| `hud-unit-card` | selected-stack card | frame for unit sprite + name + count + the 9 stats |
| `icon-res-credits/-alloy/-ore/-plasma/-crystal` | 5 resource icons | match the manifest pip colours (`#e9c84a / #7f95b0 / #9c5a38 / #d24fd2 / #4fd8d8`) |
| `hud-ap-pips` | action-point indicator | 2 pips default; spent/unspent states |
| `overlay-select` | selection ring | fits the 2:1 diamond |
| `overlay-move` / `overlay-target` | move/attack tile overlays | reachable tiles vs valid targets |

---

## 4. Phase 2 — factions at scale

### 4.1 Remaining faction rosters (30 units)
The five other factions' six-tier rosters, same spec as §3.1, each from its biome's plate palette:
Tír na nÓg, Gorias, Murias, Findias, Tech Duinn. Naming: `unit-<faction>-<unit>` (e.g. `unit-findias-magma-drake`).
*(Signature T7 champions are v2 — not commissioned yet.)*

### 4.2 Neutral roster (11)
Recruitable only from wild dens (see the
[faction codex](../codex/factions.md)). Same
128×128 canvas / 128×64 diamond spec as §3.1.
- **Apex wildlife (6):** `unit-wild-grazer-titan`, `-pollen-wraith`, `-dune-serpent`, `-hoarfrost-drake`,
  `-magma-leviathan`, `-void-stalker` — each themed to its home biome's palette.
- **Mercenaries (5):** `unit-merc-drifter-corsairs`, `-rogue-drone-swarm`, `-ronin-blades`,
  `-derelict-war-mech`, `-void-psalmists` — cross-biome; a neutral steel/gold palette, not biome-tied.

### 4.3 Capitals (6)
One fully-rendered fortified capital per biome — the boss objective. Iterates the existing
`struct-capital` slot, recoloured/retooled per biome (`struct-capital-<biome>`). Imposing, clearly the
planet's stronghold (consistent with the plate's capital read).

### 4.4 Dwelling overlays
Per the recruitment model: **no unique building per unit.** Reuse the generic `struct-recruitment` dome and
author a small **unit-marker overlay** (same idea as the mine's resource pips) so a dwelling reads as
"produces X." Deliver the overlay marker set, keyed by unit.

### 4.5 Remaining battlefield tilesets (5)
Battle boards for draíocht, meirg, oighear, gríosach, cnámh — same structure as §3.2 (ground + variant +
3 cover tiers + optional height), each in its biome palette.

---

## 5. Phase 3 — ships, commanders, full UI, VFX

### 5.1 Ships / hulls
- **Dropship** (the persistent mobile base) + its upgrade states.
- **Hull variants:** brawler / carrier / science / mining (the army-capacity + economy-lean layer).
- **Enemy fleet** silhouettes.

### 5.2 Commander portraits (18 + enemy)
Portrait art for the 18 commanders (3 per biome; see the
[faction codex](../codex/factions.md)) plus
enemy-commander framing.
Consistent framing, lit to the same key.

### 5.3 Full HUD / UI
Unit cards (full), building & tech-tree icons, ability icons (per the commander actives + unit signatures —
overwatch, orbital strike, freeze, burn, acid, spore, etc.), cursors, fog & cover overlays, minimap,
logo / wordmark, unlock icons.

### 5.4 VFX / atmosphere
Per-biome weather (dust, snow, ash), warp / jump transition, orbital strike, shields, and the unit/ability
effects (burn DoT, freeze, acid pool, spore cloud, stealth shimmer).

---

## 6. Asset register & naming (extends the project's internal asset manifest)

Reserve these basename patterns so the runtime contract stays stable:

- **Units:** `unit-<faction>-<name>` and `unit-wild-<name>` / `unit-merc-<name>`.
- **Battle tiles:** `battle-<biome>-ground[-vN]`, `cover-<kind>`, `tile-height-step`.
- **Capitals:** `struct-capital-<biome>`.
- **Dwelling markers:** `mark-<unit>` overlays over the existing `struct-recruitment`.
- **Wild dens:** a new neutral structure `struct-wild-den` (reserved in the
  [faction codex](../codex/factions.md)).
- **HUD/UI:** `hud-*`, `icon-*`, `overlay-*`.

These are registered in the project's internal asset manifests (overworld and battle) as they are
authored.

## 7. Acceptance checklist

**Per unit sprite**
- [ ] Battle-view geometry: `128×128` canvas, `128×64` 2:1 diamond, same-origin overlay; drop-shadow inside the diamond
- [ ] Single facing, static; shaded to the fixed upper-left sun (~35°)
- [ ] Distinct silhouette vs its faction siblings; reads at tile scale
- [ ] Drawn from its faction/biome plate palette; palette strip in the margin
- [ ] Flyers read as airborne (shadow gap); tanks/champions read by mass

**Per battlefield tile / cover**
- [ ] Seamless mod-64 ground; no baked sun direction in the texture
- [ ] Half-cover vs full-cover objects are visually distinguishable

**Per phase**
- [ ] Layered source + flat PNG + palette strip delivered
- [ ] Basenames match the register (§6) and the relevant MANIFEST
- [ ] Forms legible at their view's target (battle units/board at `128×64`; overworld structures at `64×32`)

**Phase 1 done when:** Mag Mell's 6 units + the machaire battle board + cover + the minimal HUD set are
delivered and drop into the battle milestone without renaming.
