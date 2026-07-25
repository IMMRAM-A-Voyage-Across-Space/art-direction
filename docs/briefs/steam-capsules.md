# IMMRAM — Commission #3: Steam capsule set

> **Project:** IMMRAM — *A Voyage Across Space* — an Irish-myth 4X-roguelite (HoMM3 economy + X-COM
> tactical battles). Stylised, readable, pixel-art-friendly.
> **This round:** the **Steam store and library capsule set** — the seven images Valve requires before
> the store page can go live, plus the **wordmark** they all depend on (§0).
> **Why it matters more than its size suggests:** these are the only art most people will ever see.
> The small capsule (§2) is the game's whole pitch at 462×174, and it is what appears in every Steam
> search result, every list, every wishlist mail.
> **References (read first):** the world bible's [Neon Celtic Pop](../bible.md#neon-celtic-pop) look and
> [Celtic Filigree](../bible.md#celtic-filigree) ornament layer, the
> [locked palette](../palette.md#3-locked-palette), and
> [Commission #1](planet-plates.md) for each isle's light and material treatment.

!!! danger "Hard date — this set gates the store page"

    The Steam page must be **live 24 August 2026** to clear the **31 August** Next Fest registration
    cliff. Valve wants the Coming Soon review request **at least 7 business days** before the page goes
    live, which puts submission on **Thursday 13 August 2026** — so the capsule set is **final by
    Wednesday 12 August**.

    If the commissioned art cannot hit that, the page ships on a competent placeholder and the final
    set is swapped in afterwards. Steam allows asset updates at any time; the registration deadline is
    the one thing that cannot move. **Art must never be the reason the fest is missed.**

## 0. Before anything: the wordmark does not exist yet

Every asset below requires a legible **IMMRAM logotype**, and the library logo requires it as a
**transparent PNG on its own**. Nothing else in this commission can be finished without it. It is
currently parked in [Commission #2, Phase 3](units-ui.md#53-full-hud-ui) — it needs to come out of
there and be drawn **first**.

**Wordmark deliverable**

- **`immram-wordmark`** — PNG, transparent background, at least **1280px wide *or* 720px tall** (that
  is Steam's library-logo requirement, and it comfortably covers every other use).
- **Logotype + optional logomark only.** Steam forbids any other text in the library logo, so the
  tagline must be a *separate* element you can switch off — not baked into the letters.
- Must survive being reduced to **~11px cap-height** (see §1). That rules out fine serifs, hairline
  strokes, and interior filigree inside the letterforms.
- Drawn in [Illumination Gold](../palette.md#illumination-gold-celtic-ornament) `#e8b83a` with
  `#ffdf8a` glint, outlined in Void `#08060f`. Insular-Irish letter feeling — but **legibility beats
  authenticity**; a half-uncial IMMRAM that no one can read at thumbnail size has failed.
- Also deliver a **flat single-colour version** (`#e8ecff` on transparent) for overlays and press use.

!!! tip "The tagline is not part of the logo"

    *A Voyage Across Space* is the official subtitle, which Steam **does** permit on store capsules —
    but not in the library logo or library hero. Author it as a separable layer so the same wordmark
    file serves both.

## 1. The one job — legibility at 120×45

Steam generates small versions of the small capsule automatically, down to **120×45** and **184×69**,
and it does not ask permission. Valve's own rule is that the logo must stay *"clearly legible even at
the smallest generated sizes."*

The plate below is a **single mock capsule** drawn once and placed at all three sizes Steam renders —
no retouching between them, exactly what Steam does to your file.

<figure markdown class="plate-figure">
<svg class="plate" style="max-width:798px;margin:0 auto" viewBox="0 0 798 216" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="capHalo" cx="24%" cy="54%" r="64%">
      <stop offset="0%" stop-color="#4ff2ff" stop-opacity=".28"/>
      <stop offset="100%" stop-color="#4ff2ff" stop-opacity="0"/>
    </radialGradient>
    <symbol id="capMock" viewBox="0 0 462 174">
      <rect width="462" height="174" fill="#08060f"/>
      <rect width="462" height="174" fill="url(#capHalo)"/>
      <circle cx="384" cy="34" r="2" fill="#e8ecff"/>
      <circle cx="418" cy="60" r="1.6" fill="#e8ecff"/>
      <circle cx="330" cy="22" r="1.4" fill="#e8ecff"/>
      <path d="M-60,174 A215 215 0 0 1 236,174 Z" fill="#3a6b2f"/>
      <path d="M-60,174 A215 215 0 0 1 236,174 Z" fill="none" stroke="#8fc46a" stroke-width="3"/>
      <g transform="translate(92,84)">
        <path d="M-44,12 L44,12 L28,30 L-28,30 Z" fill="#08060f" stroke="#4ff2ff" stroke-width="3"/>
        <path d="M0,12 L0,-44" stroke="#4ff2ff" stroke-width="3"/>
        <path d="M0,-42 L34,-6 L0,-6 Z" fill="#14102a" stroke="#4ff2ff" stroke-width="3"/>
      </g>
      <path d="M12,12 L60,12 M12,12 L12,46 M24,24 L48,24 L48,36" fill="none" stroke="#e8b83a" stroke-width="4.5"/>
      <path d="M450,162 L402,162 M450,162 L450,128 M438,150 L414,150 L414,138" fill="none" stroke="#e8b83a" stroke-width="4.5"/>
      <text x="316" y="92" fill="#e8b83a" font-family="Georgia,serif" font-size="38" font-weight="bold" letter-spacing="3" text-anchor="middle">IMMRAM</text>
      <text x="316" y="116" fill="#9a96b4" font-family="Georgia,serif" font-size="11" letter-spacing="2.5" text-anchor="middle">A VOYAGE ACROSS SPACE</text>
    </symbol>
  </defs>
  <use href="#capMock" x="0" y="20" width="462" height="174"/>
  <use href="#capMock" x="478" y="20" width="184" height="69"/>
  <use href="#capMock" x="678" y="20" width="120" height="45"/>
  <text x="0" y="12" fill="#9a96b4" font-family="Georgia,serif" font-size="11">462 × 174 — what you deliver</text>
  <text x="478" y="12" fill="#9a96b4" font-family="Georgia,serif" font-size="11">184 × 69</text>
  <text x="678" y="12" fill="#9a96b4" font-family="Georgia,serif" font-size="11">120 × 45</text>
  <text x="0" y="212" fill="#e8ecff" font-family="Georgia,serif" font-size="11">The wordmark survives. The tagline is gone by 184 × 69. The knotwork corners are mush.</text>
</svg>

<figcaption><b>The legibility ladder.</b> One mock capsule, placed at all three sizes Steam will
render it at — same file, no per-size retouching, shown at approximately true pixel size on a desktop
display. Everything that fails here fails on the storefront. Note what dies first: <b>small text, then
ornament detail, then anything relying on thin strokes.</b> What survives is <b>silhouette, value
contrast, and the wordmark</b>. Run this test in your own tool before delivering — export at 120 × 45
and look at it, rather than judging by eye at 100%.</figcaption>
</figure>

**The rules this forces**

- **One subject, one silhouette.** If a player cannot say what they are looking at in a quarter of a
  second, the capsule has failed. No crowd scenes, no six-unit line-ups.
- **Value contrast does the work, not hue.** Squint until the image blurs; the subject must still
  separate from the ground. Our near-black grounds make this easy — use them.
- **Wordmark cap-height ≥ 12% of capsule height.** At 462×174 that is ~21px, which lands at ~5px in
  the 120×45 render. Bigger is better.
- **Nothing important in the outer 5%.** Steam overlays discount flags, "Coming Soon" banners, and
  wishlist chrome over capsule edges in various views.
- **Ornament is a frame, not a texture.** Gold knotwork reads as a *gesture* at thumbnail size. Two
  strong corners beat a delicate full border that turns to noise.

!!! tip "The small capsule may be its own crop"

    Valve explicitly allows it: *"The art in the small capsule does not need to be the same as your
    other capsules."* Because 462×174 is such a violent letterbox, the honest answer is usually a
    **tighter crop with a larger wordmark** rather than the main key art squeezed down. Treat it as a
    separate composition that shares the same key art.

## 2. The deliverables

All seven are required for the page to go live (page background is optional but we want it). Sizes
below are the **current** ones — Steam raised most capsule dimensions in August 2024 and states plainly
that *"old dimensions are no longer accepted."* If you find a guide quoting 616×353 or 460×215, it is
out of date.

<figure markdown class="plate-figure">
<svg class="plate" viewBox="0 0 320 404" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="404" fill="#08060f"/>
  <g font-family="Georgia,serif" font-size="8" fill="#9a96b4">
    <text x="14" y="14" fill="#ffdf8a" font-size="10">Wide — the letterbox problem</text>
    <rect x="14" y="22" width="240" height="77.5" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <rect x="107.1" y="48.9" width="53.75" height="23.75" fill="none" stroke="#4ff2ff" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="110" y="63" fill="#4ff2ff" font-size="7">safe area</text>
    <text x="14" y="108" fill="#e8ecff">Library hero 3840 × 1240 — no text at all · only the centre 860 × 380 is never cropped</text>
    <rect x="14" y="118" width="28.9" height="10.9" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <text x="50" y="126" fill="#e8ecff">Small capsule 462 × 174 — the one that sells the game</text>
    <text x="14" y="152" fill="#ffdf8a" font-size="10">Landscape</text>
    <rect x="14" y="160" width="57.5" height="26.9" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <text x="78" y="176" fill="#e8ecff">Header + library header 920 × 430 — same shape, two uploads</text>
    <rect x="14" y="196" width="77" height="44.1" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <text x="98" y="220" fill="#e8ecff">Main capsule 1232 × 706 — front-page carousel</text>
    <rect x="14" y="248" width="89.9" height="50.6" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <text x="110" y="275" fill="#e8ecff">Page background 1438 × 810 — optional</text>
    <text x="14" y="316" fill="#ffdf8a" font-size="10">Portrait</text>
    <rect x="14" y="324" width="46.75" height="56" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <text x="37.4" y="388" fill="#9a96b4" font-size="6.5" text-anchor="middle">748 × 896</text>
    <rect x="70" y="324" width="37.5" height="56.25" fill="#14102a" stroke="#e8b83a" stroke-width="1.2"/>
    <text x="88.75" y="388" fill="#9a96b4" font-size="6.5" text-anchor="middle">600 × 900</text>
    <text x="118" y="348" fill="#e8ecff">Vertical capsule 748 × 896 (sales pages)</text>
    <text x="118" y="360" fill="#e8ecff">Library capsule 600 × 900 (the player's own shelf)</text>
    <text x="14" y="400" fill="#6a6472" font-size="7">All boxes share one scale — the relative shapes and areas are true.</text>
  </g>
</svg>

<figcaption><b>The capsule family, to scale.</b> Three aspect groups, so three compositions — not
seven. Solve the wide letterbox, the ~2:1 landscape, and the portrait; every asset is a crop or
re-stage of one of those.</figcaption>
</figure>

| # | Asset | Size | Format | Where it appears | Text allowed |
|---|---|---|---|---|---|
| 1 | **Small capsule** | **462 × 174** | JPG/PNG | Search results, top sellers, new releases, wishlist mail | Title + subtitle |
| 2 | **Header capsule** | **920 × 430** | JPG/PNG | Top of the store page, "Recommended For You", Big Picture | Title + subtitle |
| 3 | **Main capsule** | **1232 × 706** | JPG/PNG | Store front-page carousel — the featured slot | Title + subtitle |
| 4 | **Vertical capsule** | **748 × 896** | JPG/PNG | Seasonal sale and event pages | Title + subtitle |
| 5 | **Library capsule** | **600 × 900** | PNG | The player's library grid, after they own it | **Title only** |
| 6 | **Library header** | **920 × 430** | PNG | Library "Recent Games" and client shelves | **Title only** |
| 7 | **Library hero** | **3840 × 1240** | PNG | Banner at the top of the library detail page | **None — no words at all** |
| 8 | **Library logo** | ≥1280 wide **or** ≥720 tall | PNG, **transparent** | Overlaid on the hero (§0) | Logotype only |
| — | Page background | 1438 × 810 | JPG/PNG | Store page backdrop *(optional — Steam derives one from the last screenshot otherwise)* | None |

**Notes that catch people out**

- **Library hero safe area is 860 × 380, centred.** The other 3840×1240 is croppable at any moment.
  Compose so the hero still works when everything outside that box is gone — and put the *interest*
  slightly off-centre-left, because the library logo lands over it.
- **Steam auto-generates the half-size variants** (300×450, 1920×620, 120×45, 184×69). You do not
  upload them, and you do not get to hand-tune them. Design for the worst one.
- **Library assets are PNG**; store capsules take JPG or PNG. Deliver PNG throughout and let Valve's
  pipeline do the rest.
- **Use Valve's official templates** — layered files at the correct sizes with the crop guides marked,
  linked from the [Graphical Assets overview](https://partner.steamgames.com/doc/store/assets)
  ([direct template download](https://www.dropbox.com/scl/fo/cvkwbosmrimklcl9h0qko/AF5IPErKP-mQM_3YO1Dw2lA?rlkey=b3ad0izykq367g4luasrinw9z&st=zo3c4bco&dl=0)).

## 3. What Valve forbids

These are enforcement rules, not suggestions — breaking them costs store visibility and makes the game
ineligible for sale and event featuring. From the
[graphical asset rules](https://partner.steamgames.com/doc/store/assets/rules):

| Not allowed anywhere | Why it bites us |
|---|---|
| **Review scores** of any kind — Steam or press | No "9/10", no "Overwhelmingly Positive" |
| **Award names, symbols or logos** | No festival laurels on the capsule, ever |
| **Discount or marketing copy** | No "Wishlist Now", "Coming Soon", "Early Access" text baked in |
| **Text promoting a different product** | No engine or publisher badges |
| **Any text beyond the title and official subtitle** | No feature bullets, no "18 Commanders · 6 Worlds" |
| **Non-PG-13 artwork** | Keep the mythic violence stylised |

Additionally: **no words at all** on the library hero, and **title only** (no subtitle) on the library
capsule and library header.

!!! warning "The temptation to fix later"

    Time-limited text — a fest badge, an update callout — is only permitted through **Artwork
    Overrides**, capped at one month, and it must be localised into every language the game supports.
    It is not a way to sneak marketing copy onto the base capsule.

## 4. The look — where it comes from on this site

Nothing here is invented for the store. The capsule is the game's art direction compressed to a
poster, so every choice traces to a page you can read.

| Read this | For |
|---|---|
| [Neon Celtic Pop](../bible.md#neon-celtic-pop) | The whole look in three ideas: neon on the dark, Celtic gold, pop punch |
| [What it looks like](../bible.md#what-it-looks-like) | The one-line recipe — dark ground · 1–2 neon accents · bloom on the light |
| [Colour — guidance, not a lock](../bible.md#colour-guidance-not-a-lock) | The five hard rules; everything else is yours |
| [Celtic Filigree](../bible.md#celtic-filigree) | The gold ornament vocabulary — key fret, triskele, plait, knot |
| [Core palette](../palette.md#core-universal) | Void `#08060f`, Shadow `#14102a`, Starlight `#e8ecff` |
| [Illumination gold](../palette.md#illumination-gold-celtic-ornament) | `#e8b83a` bands, `#ffdf8a` glint — the wordmark and all ornament |
| [Armies & UI](../palette.md#armies-ui-universal) | Player rim `#4ff2ff` · Enemy rim `#ff4fd8` — the game's signature opposition |
| [The through-line](../bible.md#the-through-line) | *Every war here is a family argument fought with the same hands* |
| [The Voyage of the Grandchild](../bible.md#the-voyage-of-the-grandchild) | The story the capsule is selling — grief, voyage, release |
| [Commission #1 plates](planet-plates.md#3-the-six-planets) | Per-isle ramps if the capsule sites itself on a named world |
| [Reference wells](../bible.md#reference-wells-the-other-two-thirds) | The look's ancestors — John Harris, Moebius, Signalnoise, Hyper Light Drifter |
| [Stained-glass UI](../reference/stained-glass.md) | How gold leading over neon glass is actually drawn here |

**The five rules, restated for a capsule**

1. **Ground near-black and desaturated.** Void `#08060f` is the canvas. Let big dark areas breathe.
2. **One or two saturated neons.** No more. A rainbow capsule reads as noise at 120×45.
3. **Gold is all ornament.** Knotwork, frame, wordmark — nothing else is gold.
4. **Bloom on neon and gold only.** Never on terrain, never on mid-tones.
5. **Cyan is the player, magenta is the enemy.** If the capsule shows opposition, it uses those rims.

!!! danger "Echoes, not transcription"

    The bible's [one rule](../index.md) applies to the store art too. No harps, no shamrocks, no
    Celtic-cross-in-space. The Irishness arrives through **ornament, letterform, and the mood of a
    voyage** — drawn as the grandchildren would half-remember it, not as heritage decoration.

## 5. The composition — what IMMRAM's capsule should show

The game is a **voyage**, not a battle. Six mythic isles, a clan-host rowing between them, permadeath
at every landing. Two proposals, in preference order — both are one subject against the void, which is
what §1 demands.

**A. The currach against the isle** *(recommended)*

The clan-host's vessel — small, hand-made, rimmed in Ion Cyan `#4ff2ff` — silhouetted against the limb
of a mythic world that fills the lower third. Gold key-fret ornament frames two corners like a
manuscript margin. The wordmark occupies the open void where the sky is emptiest.

- Reads instantly: *a small boat, a huge unknown world.* That is the pitch.
- Scales: at 120×45 you still have a boat, a green curve, and IMMRAM.
- The isle can be **Mag Mell** — machaire green `#3a6b2f / #5a8f43 / #8fc46a`, the campaign home and
  the warmest, most inviting of the six.

**B. The grandchild, lit from below**

A lone commander figure in three-quarter silhouette, face lost to shadow, lit from beneath by the neon
of the isle they are about to land on, with the bloodline knotwork on their shoulder catching gold.

- Sells *lineage and grief* — the emotional core — rather than the voyage.
- Riskier at thumbnail: figures need more pixels to read than a boat does. If chosen, the small capsule
  should crop to the head and shoulder only.

**Fixed across either option**

- **Single key light, upper-left, ~35°** — the same sun every asset in this project is shaded to.
- **No UI, no HUD, no isometric tiles.** The capsule is not a screenshot.
- **No stack counts, no numbers, no readable interface.**
- The portrait crops (748×896, 600×900) get **vertical breathing room, not a stretched landscape** —
  re-stage the subject taller, do not scale it.
- The library hero gets the **same scene with the subject pushed right of centre** and the wordmark
  removed entirely, so the overlaid library logo has clean void on the left to sit in.

## 6. Worth studying on Steam

Open these and look at the **small capsule** in a search-results list, not the store page. That is the
comparison that matters.

**Legibility masterclass — steal the restraint**

| Game | What to take |
|---|---|
| [Into the Breach](https://store.steampowered.com/app/590380/) | The benchmark. One mech, enormous wordmark, almost no detail. Survives any downscale |
| [Slay the Spire](https://store.steampowered.com/app/646570/) | Flat, graphic, poster-thinking — no rendering for its own sake |
| [Battle Brothers](https://store.steampowered.com/app/365360/) | Near-monochrome and dark, and it still pops in a list. Proof that low colour count wins |
| [Hades](https://store.steampowered.com/app/1145360/) | One figure, one colour story, wordmark treated as ornament rather than a label |

**Genre neighbours — what we sit beside in a Steam list**

| Game | What to take |
|---|---|
| [Songs of Conquest](https://store.steampowered.com/app/867210/) | The closest comparison — a HoMM-lineage 4X with pixel-art units. Study how it signals both |
| [Age of Wonders 4](https://store.steampowered.com/app/1669000/) | How grand-strategy fantasy claims scale in one image |
| [Shogun Showdown](https://store.steampowered.com/app/2084000/) | A recent pixel roguelite — current-decade expectations for our shelf |
| [Dead Cells](https://store.steampowered.com/app/588650/) | A pixel-art game whose capsule is *not* pixel art. Decide this deliberately, do not drift into it |
| [Children of Morta](https://store.steampowered.com/app/330020/) | Pixel game, painted capsule, and a *family/lineage* theme — our exact subject matter |

**Our specific fusion — gold ornament over neon dark**

| Game | What to take |
|---|---|
| [Hyper Light Drifter](https://store.steampowered.com/app/257850/) | The bible's declared north star. Neon on dark, done with almost nothing |
| [Pentiment](https://store.steampowered.com/app/1205520/) | Illuminated manuscript as a *store identity* — how far gold-and-vellum can be pushed and still read |
| [Inkulinati](https://store.steampowered.com/app/957960/) | Medieval marginalia as pop art. The nearest anyone has come to "ancient ornament, modern punch" |
| [Blasphemous](https://store.steampowered.com/app/774361/) | Sacred iconography as framing device; gold on near-black |
| [The Banner Saga](https://store.steampowered.com/app/237990/) | Mythic north-European material treated with restraint and real gold |
| [Röki](https://store.steampowered.com/app/1067540/) | Folklore *echoed*, not transcribed — the bible's one rule, executed on a storefront |

## 7. Steam's own documentation

- [Graphical Assets — Overview](https://partner.steamgames.com/doc/store/assets) — the index, and the
  link to Valve's current layered templates
- [Store Graphical Assets](https://partner.steamgames.com/doc/store/assets/standard) — sizes and
  placement for capsules, screenshots, page background
- [Library Assets](https://partner.steamgames.com/doc/store/assets/libraryassets) — library capsule,
  header, hero, logo; safe areas and transparency
- [Graphical Asset Rules](https://partner.steamgames.com/doc/store/assets/rules) — the forbidden list
  in §3, and the enforcement policy behind it
- [Coming Soon pages](https://partner.steamgames.com/doc/store/coming_soon) — the review process these
  assets feed, and the ≥7-business-day lead time that sets our 13 August submission

## 8. Acceptance checklist

**Wordmark (§0) — must clear before anything else starts**

- [ ] Transparent PNG, ≥1280px wide or ≥720px tall
- [ ] Logotype (+ optional logomark) only; tagline on a separate, switchable layer
- [ ] Legible at ~11px cap-height — verified by actually shrinking it, not by eye at 100%
- [ ] Illumination Gold `#e8b83a` / glint `#ffdf8a` / Void `#08060f` outline, plus a flat `#e8ecff` variant

**Per capsule**

- [ ] Exact current dimensions (§2) — not the pre-2024 sizes
- [ ] One subject, one silhouette, readable in a quarter-second
- [ ] Wordmark cap-height ≥12% of capsule height
- [ ] Nothing important in the outer 5%
- [ ] Ground near-black; 1–2 saturated neons; gold only on ornament; bloom only on neon and gold
- [ ] Single upper-left key light, ~35°, consistent with every other asset in the project
- [ ] No review scores, awards, discount copy, feature bullets, or third-party logos
- [ ] Passes the squint test — subject still separates from ground when blurred

**Per set**

- [ ] Library hero has **zero text** and works cropped to its centre 860 × 380
- [ ] Library capsule and library header carry the **title only**, no subtitle
- [ ] Portrait crops re-staged, not stretched
- [ ] The three aspect groups (§2) look like one game
- [ ] Rendered at 120 × 45 and 184 × 69 and reviewed at those sizes before delivery
- [ ] Layered source + flat PNG per asset, as in [Commission #1](planet-plates.md#2-style-technical-targets)

## 9. Delivery

Same convention as the other commissions: **layered source** (PSD/Krita) plus **flat PNG** per asset,
with a **palette swatch strip** baked into the source file's margin.

Basenames, so nothing has to be renamed at upload time:

```
immram-wordmark            transparent PNG, the dependency for everything else
immram-wordmark-flat       single-colour #e8ecff variant
capsule-small              462 x 174
capsule-header             920 x 430
capsule-main               1232 x 706
capsule-vertical           748 x 896
library-capsule            600 x 900
library-header             920 x 430
library-hero               3840 x 1240   (no text)
library-logo               transparent PNG logotype
page-background            1438 x 810    (optional)
```

Tracked as **issue #2** in the launch plan, milestone *M1 — Store Page Live*. The fallback if the
schedule slips is in §0: **ship the page on a placeholder, swap the set in later.**
