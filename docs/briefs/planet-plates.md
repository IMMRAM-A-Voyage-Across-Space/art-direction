# IMMRAM — Concept Art Commission Brief

> **Project:** IMMRAM — *A Voyage Across Space* — an Irish-myth 4X-roguelite (Heroes of Might & Magic economy +
> X-COM tactical battles). Stylised, readable, pixel-art-friendly.
> **This round:** 6 **planet landscape plates** only. Everything else is parked for later rounds (§5).
> **Downstream use:** these plates are the *art bible*. A pixel artist derives the in-game isometric
> tiles and sprites from them, so palette, lighting, and how each feature reads must be locked here.

## 1. The approach

One **landscape plate per planet**, all six using the **identical composition** (§4). Because the only
variable between plates is the planet itself, the set becomes a direct comparison that defines each
world's palette, light, and material treatment — and gives the pixel artist one consistent reference per
feature, per biome.

**Each planet is mono-biome.** A planet is *one* biome plus *one* liquid type — not a patchwork. The plate
should read as a single coherent world, with intra-biome variety coming from terrain features (elevation,
liquid bodies, rock/crystal/flora formations), not from other biomes bleeding in.

## 2. Style & technical targets

- **Aspect / size:** 16:9, delivered at **2560×1440** (a 1920×1080 is fine for early roughs).
- **Lighting:** a **single fixed sun**, upper-left, ~35° — identical across all six plates (this locks the
  light direction every derived sprite will be shaded to). No second key light.
- **Readability over realism:** chunky, clear silhouettes and material reads. The eventual pixel target is
  **64×64 isometric tiles on a 2:1 diamond** (64 wide × 32 tall) — keep forms legible when reduced to that
  scale. Avoid fine filigree that won't survive downsampling.
- **Deliverables per plate:**
  1. Flat composite PNG (final).
  2. Layered source (PSD/Krita) with at least: sky · background/elevation · midground terrain · liquid ·
     structures · foreground — so the pixel artist can isolate each feature.
  3. A **palette swatch strip** (the dominant ramps actually used) baked into the file margin.

## 3. The six planets

Each plate = biome ground + the planet's liquid + the shared feature set. Palettes are *starting ramps*
(dark / base / light) — refine for mood, but keep each planet distinct from its neighbours.

| Planet | Biome | Ground ramp (dark / base / light) | Liquid | Liquid ramp |
|--------|-------|-----------------------------------|--------|-------------|
| **Mag Mell** | Machaire: green plain & forest | `#3a6b2f` / `#5a8f43` / `#8fc46a` | water (blue) | `#1f4f7a` / `#2d6aa0` / `#7fb6d9` |
| **Tír na nÓg** | Draíocht: bioluminescent growth | `#1d5a4d` / `#2f7d6b` / `#7ef0d0` | algal water (teal) | `#1e5a52` / `#2f8a78` / `#8fe6cf` |
| **Gorias** | Meirg: rust-red iron dunes | `#6f3d26` / `#9c5a38` / `#c07a4e` | acid (toxic green) | `#3a7a1e` / `#7bd84f` / `#d6ff8a` |
| **Murias** | Oighear: methane ice plains | `#8fa9bd` / `#bcd2e0` / `#e6f1f8` | liquid methane (cyan) | `#1e6a7a` / `#4fd8d8` / `#bff7f7` |
| **Tech Duinn** | Gríosach: black volcanic rock | `#232027` / `#3a3640` / `#55505c` (ember `#e2622a`) | lava (molten) | `#7a1e0a` / `#e2622a` / `#ffcf6b` |
| **Falias** | Cnámh: bone-grey dust & craters | `#4e4a44` / `#6f6a63` / `#8d877d` | the Veil (cold slate) | `#2a3b46` / `#3f5a68` / `#7fa0b0` |

Each plate's **sky** should also sell the world: atmosphere colour, one or two moons, and the same sun
position. Mag Mell reads warm and familiar; Murias thin and cold; Tech Duinn dark with ember glow; Falias near-
airless and stark; Gorias hazy ochre; Tír na nÓg humid and luminous.

## 4. The fixed composition (identical on every plate)

Pure environment — **no characters or units**. Same slots, same rough placement, every plate:

- **Sky band:** atmosphere + moon(s) + the fixed upper-left sun.
- **Background:** a **mountain range / cliffs** — the elevation reference.
- **Midground (left → right):** the planet's **liquid body** (lake → shoreline, planet-specific colour) ·
  a **crystal formation** · an **alien-flora cluster** · a **rock formation** · a **unique feature** (craater/Large tree/) · a
  **geyser / vent/ waterfall** etc.
- **The boss capital / citadel:** a **fully-rendered fortified structure** sited in the scene (NOT a
  silhouette) — imposing, clearly the planet's stronghold.
- **Other neutral built features:** **dropship landing pad** · **ruin / wreckage**.
- **Foreground:** ground-texture detail + a **resource cache** and a **relic / anomaly** for scale.

**Explicitly excluded from the plate (commissioned individually later):** resource extractor / mine,
recruitment building, any units, ships, or characters.

## 5. Parking lot — later commission rounds

Not part of this round; listed so the artist knows the world's full scope and can keep it coherent.

- **Individual overworld structures:** resource extractor / mine (per resource: credits, alloy, ore,
  plasma, crystal), recruitment building, plus variants of the sites shown on the plates.
- **Battlefield plates:** the tactical-battle ground + cover objects, one fixed-composition plate per biome.
- **Unit roster:** the army — melee (Marine, Mech), ranged (Gunner), flyer (Drone), and the higher tiers;
  consistent scale & lighting.
- **Ships:** the dropship (mobile base) + its upgrade states, and the unlockable hull variants
  (brawler / carrier / science / mining), plus the enemy fleet.
- **Commanders:** the unlockable portrait roster + enemy commander(s).
- **UI / HUD:** 5 resource icons, unit cards, building & tech-tree icons, ability icons, initiative queue,
  cursors, fog & cover overlays, minimap, logo/wordmark, unlock icons.
- **VFX / atmosphere:** per-biome weather (dust, snow, ash), warp/jump transition, orbital strike, shields.

## 6. Acceptance checklist (per plate)

- [ ] 16:9, 2560×1440, single upper-left sun consistent with the other plates
- [ ] Mono-biome — no other biome bleeds in
- [ ] All §4 slots present, in the shared layout
- [ ] Boss capital fully rendered (not silhouetted); no figures/units
- [ ] Layered source + flat composite + palette swatch strip delivered
- [ ] Forms legible reduced toward a 64×64 / 2:1 iso tile
