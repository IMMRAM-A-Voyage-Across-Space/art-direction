# IMMRAM — Stained-Glass UI

**IMMRAM UI — Stained-Glass Art Direction**

Art-direction reference · **Neon Reliquary** · Celtic × space-age · vector mockup only — ship
hand-pixeled in Pixaki with engine-added gold bloom.

<figure markdown class="plate-figure">
<svg width="0" height="0" style="position:absolute"><defs>
  <filter id="gold" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="neon" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <radialGradient id="halo" cx="50%" cy="46%" r="56%"><stop offset="0%" stop-color="#ffcf3a" stop-opacity=".4"/><stop offset="100%" stop-color="#ffcf3a" stop-opacity="0"/></radialGradient>
  <g id="cornt">
    <path d="M0,0 L330,0 Q130,72 0,190 Z" fill="#0d0a1a"/>
    <path d="M330,0 Q130,72 0,190 L12,178 Q138,80 322,10 Z" fill="#37e6ff" opacity=".08"/>
    <path d="M297,0 Q117,65 0,171" fill="none" stroke="#ffcf3a" stroke-width="1.1" opacity=".5" stroke-dasharray="6 6"/>
    <path d="M330,0 Q130,72 0,190" fill="none" stroke="#ffcf3a" stroke-width="3" filter="url(#gold)"/>
    <g transform="translate(147,84) scale(.8)" fill="none" stroke="#ffe9a8" stroke-width="2" filter="url(#gold)"><path d="M0,-14 L12,10 L-12,10 Z"/><path d="M0,-4 L6,8 L-6,8 Z"/></g>
    <path d="M8,40 L8,10 L38,10 L38,34 L20,34 L20,22" fill="none" stroke="#ffcf3a" stroke-width="1.8" filter="url(#gold)"/>
  </g>
</defs></svg>

<figcaption>Shared SVG defs — gold/neon glow filters, the halo gradient, and the reusable
corner-triangle group (`#cornt`) reused four times by the HUD plate below. Not rendered on its
own; feeds the two plates that follow.</figcaption>
</figure>

## 1 · Menu / non-game screens — Gothic rose panel

Commander-select, main menu, codex, results. Ornate: radial rosette, glowing gold knotwork
leading, flat neon glass panes. Density high (static screens can carry it).

<figure markdown class="plate-figure">
<svg class="plate" viewBox="0 0 260 330" xmlns="http://www.w3.org/2000/svg">
  <rect width="260" height="330" fill="#08060f"/><rect width="260" height="330" fill="url(#halo)"/>
  <path d="M40,315 L40,150 C40,72 96,34 130,34 C164,34 220,72 220,150 L220,315 Z" fill="#0d0a1a"/>
  <g stroke="#ffcf3a" stroke-width="3.5" filter="url(#gold)">
    <path d="M130,74 A54 54 0 0 1 130,182 A54 54 0 0 1 130,74 Z" fill="#37e6ff" opacity=".85"/>
    <path d="M130,74 A54 54 0 0 1 130,182 A54 54 0 0 1 130,74 Z" fill="#a45cff" opacity=".85" transform="rotate(120 130 150)"/>
    <path d="M130,74 A54 54 0 0 1 130,182 A54 54 0 0 1 130,74 Z" fill="#2ff0c0" opacity=".85" transform="rotate(240 130 150)"/>
  </g>
  <circle cx="130" cy="150" r="64" fill="none" stroke="#ffcf3a" stroke-width="4" stroke-dasharray="10 6" filter="url(#gold)"/>
  <path d="M40,315 L40,150 C40,72 96,34 130,34 C164,34 220,72 220,150 L220,315 Z" fill="none" stroke="#ffcf3a" stroke-width="5" filter="url(#gold)"/>
  <path d="M130,128 A18 18 0 0 1 145,166 A18 18 0 0 1 115,166 A18 18 0 0 1 130,128 Z" fill="none" stroke="#fff4c8" stroke-width="4" filter="url(#gold)"/>
  <text x="130" y="300" fill="#ffe9a8" font-size="15" font-family="Georgia,serif" text-anchor="middle" letter-spacing="2">MEDB</text>
</svg>

<figcaption><b>Commander panel.</b> Pointed lancet frame · triquetra core · gold "cames"
(leading) that glow · panes tinted to the faction ramp.</figcaption>
</figure>

**Rules for menu density**

- Symmetric rosette + heavy glowing knotwork.
- Full jewel-band / multi-pane fans allowed here.
- Text sits *beside* the panel, not over it.
- Each commander = a "star-saint" in glass.

## 2 · In-game HUD — triangular corner panes

Four congruent right-triangle panels cover the void outside the rounded-diamond playfield.
Toned down: the **glass panes are the UI cells** — portrait · nameplate · vitals, one cell per
resource / ability. Gameplay reads first.

<figure markdown class="plate-figure">
<svg class="plate" viewBox="0 0 660 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="660" height="380" fill="#0a0a16"/>
  <g fill="#242c48"><circle cx="330" cy="60" r="1.3"/><circle cx="470" cy="150" r="1.3"/><circle cx="200" cy="230" r="1.3"/><circle cx="330" cy="320" r="1.3"/><circle cx="150" cy="150" r="1.3"/><circle cx="510" cy="250" r="1.3"/></g>
  <path d="M330,0 Q530,72 660,190 Q530,308 330,380 Q130,308 0,190 Q130,72 330,0 Z" fill="#0c1226"/>
  <path d="M330,0 Q530,72 660,190 Q530,308 330,380 Q130,308 0,190 Q130,72 330,0 Z" fill="none" stroke="#243056" stroke-width="1.5"/>
  <g stroke="#1b2340" stroke-width="1"><line x1="330" y1="20" x2="330" y2="360"/><line x1="40" y1="190" x2="620" y2="190"/></g>
  <polygon points="330,150 400,190 330,230 260,190" fill="#141c38" stroke="#2a3358" stroke-width="1.5"/>
  <polygon points="330,168 348,178 330,188 312,178" fill="#37e6ff" opacity=".7" filter="url(#neon)"/>
  <use href="#cornt"/><use href="#cornt" transform="translate(660,0) scale(-1,1)"/><use href="#cornt" transform="translate(0,380) scale(1,-1)"/><use href="#cornt" transform="translate(660,380) scale(-1,-1)"/>
  <polygon points="38,14 58,26 58,50 38,62 18,50 18,26" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="2" filter="url(#neon)"/>
  <polygon points="38,22 50,29 50,47 38,54 26,47 26,29" fill="#a45cff" opacity=".4"/>
  <path d="M32,50 Q38,34 44,50 Z" fill="#ffdf8a"/><rect x="30" y="36" width="16" height="5" fill="#37e6ff"/>
  <rect x="66" y="14" width="124" height="28" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.5"/><rect x="66" y="14" width="124" height="28" fill="#a45cff" opacity=".1"/>
  <text x="74" y="28" fill="#ffe9a8" font-size="14" font-family="Georgia,serif">MEDB</text>
  <text x="74" y="38" fill="#7fa6c8" font-size="8" letter-spacing="1">DRAÍOCHT · LV 7</text>
  <rect x="66" y="46" width="124" height="26" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.5"/>
  <text x="70" y="57" fill="#5f7fa0" font-size="7">HP</text><rect x="86" y="51" width="98" height="5" fill="#10182e"/><rect x="87" y="52" width="70" height="3" fill="#37e6ff" filter="url(#neon)"/>
  <text x="70" y="67" fill="#5f7fa0" font-size="7">XP</text><rect x="86" y="62" width="98" height="4" fill="#10182e"/><rect x="87" y="63" width="44" height="2" fill="#a45cff" filter="url(#neon)"/>
  <g font-family="Georgia,serif" font-size="13">
    <rect x="488" y="52" width="52" height="30" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.5"/><rect x="488" y="52" width="52" height="30" fill="#ffcf3a" opacity=".08"/>
    <polygon points="500,60 508,65 508,73 500,78 492,73 492,65" fill="#ffcf3a" opacity=".9" filter="url(#neon)"/><text x="514" y="72" fill="#ffe9a8">248</text>
    <rect x="546" y="52" width="52" height="30" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.5"/><rect x="546" y="52" width="52" height="30" fill="#37e6ff" opacity=".08"/>
    <polygon points="558,60 566,65 566,73 558,78 550,73 550,65" fill="#37e6ff" opacity=".9" filter="url(#neon)"/><text x="572" y="72" fill="#cfeeff">76</text>
    <rect x="604" y="52" width="52" height="30" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.5"/><rect x="604" y="52" width="52" height="30" fill="#2ff0c0" opacity=".08"/>
    <polygon points="616,60 624,65 624,73 616,78 608,73 608,65" fill="#2ff0c0" opacity=".9" filter="url(#neon)"/><text x="630" y="72" fill="#c8fff0">12</text>
  </g>
  <rect x="18" y="286" width="96" height="14" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.4"/>
  <text x="66" y="296" fill="#ffe9a8" font-size="8" font-family="Georgia,serif" text-anchor="middle" letter-spacing="1">LÉARSCÁIL</text>
  <rect x="18" y="302" width="96" height="64" fill="#070b18" stroke="#ffcf3a" stroke-width="1.5"/>
  <g fill="#2f6aa0"><circle cx="40" cy="322" r="3"/><circle cx="72" cy="314" r="3"/><circle cx="88" cy="348" r="3"/></g>
  <polygon points="58,332 66,336 58,340 50,336" fill="#37e6ff" filter="url(#neon)"/>
  <rect x="486" y="312" width="150" height="54" fill="#0d0a1a" stroke="#ffcf3a" stroke-width="1.5"/>
  <polygon points="498,320 522,320 522,346 510,358 498,346" fill="#0a1424" stroke="#ffcf3a" stroke-width="1.8"/><polygon points="510,328 518,338 502,338" fill="#37e6ff" filter="url(#neon)"/>
  <polygon points="548,320 572,320 572,346 560,358 548,346" fill="#0a1424" stroke="#ffcf3a" stroke-width="1.8"/><rect x="554" y="330" width="12" height="12" fill="#a45cff" filter="url(#neon)"/>
  <polygon points="598,320 622,320 622,346 610,358 598,346" fill="#0a1424" stroke="#ffcf3a" stroke-width="1.8"/><polygon points="610,326 618,336 610,346 602,336" fill="#2ff0c0" filter="url(#neon)"/>
</svg>

<figcaption><b>HUD frame.</b> Congruent triangles · glowing gold hypotenuse faces the map · one
triquetra boss + subtle beaded rib per edge · panes = cells. Density lower than menus so the
battlefield reads.</figcaption>
</figure>

## 3 · The rules (for the pixel pass)

- **Base look = "Neon Reliquary":** the leading itself glows. Dark near-black glass, gold
  "cames," flat neon panes.
- **Celtic, made angular:** round spirals → squared **key-frets**; round arches → soft
  **lancets** (pointed, shoulders slightly rounded); flowing knots → **angular triquetra /
  woven-straight**.
- **Panes define things:** every glass pane is a UI cell (portrait, nameplate, vitals, a
  resource, an ability). Leading is the layout grid, not just decoration.
- **Faction tint lives in the glass:** pane fill uses the faction/planet ramp (e.g. Draíocht →
  violet). Reuse `COMMISSION.md` planet ramps.
- **HUD = triangles covering the void:** four congruent right-triangles, curved hypotenuse forms
  a rounded-diamond window on the iso map.
- **Density: menus > HUD.** Ornate rose-windows on static screens; restrained panes in-game so
  gameplay reads first.
- **Hybrid production:** hand-pixel the glass in Pixaki; mark the **lightest tint in each ramp as
  emissive** so the engine (macroquad) adds the gold/neon bloom, hover pulse, and state
  highlights without redraws.

<div markdown>
**Swatches**

<span class="swatch" style="background:#08060f"></span> `#08060f` void
<span class="swatch" style="background:#0d0a1a"></span> `#0d0a1a` glass
<span class="swatch" style="background:#ffcf3a"></span> `#ffcf3a` gold came
<span class="swatch" style="background:#37e6ff"></span> `#37e6ff` cyan
<span class="swatch" style="background:#a45cff"></span> `#a45cff` violet
<span class="swatch" style="background:#2ff0c0"></span> `#2ff0c0` teal
<span class="swatch" style="background:#ff3ea5"></span> `#ff3ea5` magenta
</div>
