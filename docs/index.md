# IMMRAM — Art Direction

*A Voyage Across Space*

**IMMRAM** is Irish myth reimagined as neon retro-futurism. An *immram* is Ireland's own genre of
story — a clan-host's sea-voyage rowed out to strange Otherworld islands (the Voyages of Bran and
of Máel Dúin). Here the islands are recast as **planets**, and the voyage is a passage across the
stars: six mythic isles, twelve causes fighting over them, one shared roster of units per world —
the army you command is the army you meet across the table.

This site is the art-direction reference for that world: the world bible, the locked palette, the
pixel-art tile spec, the sprites that have actually shipped, and the commission briefs that direct
the artists doing the drawing.

!!! warning "The one rule — echoes, not transcription"

    Every wonder on these isles inherits the **mood and shape** of an old Irish tale — it never
    re-stages the tale itself. "Ants that eat the boat" becomes a scavenger-swarm stripping a
    derelict; "the land of eternal youth" becomes a planet that tempts you to stop voyaging. Draw
    the legend as the grandchildren would half-remember it, not as a re-enactment.

## Read in this order

An artist arriving cold should work through these four in sequence — each narrows what the last
one opened:

1. **[The world bible](bible.md)** — the through-line, the naming rules, and the per-isle
   deliverable checklists. Start here.
2. **[Palette](palette.md)** — the locked colour set and the rules that turn it into sprites.
   Every colour used anywhere on this site traces back to this page.
3. **[Tile spec](reference/tile-spec.md)** — the artist-facing drawing contract for the overworld
   tileset: geometry, pipeline, border strategy, naming.
4. **[Shipped sprites](sprites.md)** — every sprite that has actually shipped, generated straight
   from what's on disk, so it can't drift the way a hand-maintained inventory can.

## The three briefs

Beyond the bible, three commission briefs hand the work to an artist directly:

- **[Commission #1 — Planet plates](briefs/planet-plates.md)** covers the six landscape plates,
  one per planet, that lock each world's palette, light, and material treatment — the art bible a
  pixel artist derives every isometric tile from.
- **[Commission #2 — Units, ships & UI](briefs/units-ui.md)** covers everything Commission #1
  parked for later: battlefield units, buildings and capitals, ships, commander portraits, and the
  HUD/UI, delivered in phases so Phase 1 scopes exactly what the first playable battle needs.
- **[Commission #3 — Steam capsules](briefs/steam-capsules.md)** covers the store and library
  capsule set, plus the wordmark everything else depends on. Smallest brief, hardest deadline: the
  Steam page must be live **24 August 2026** to clear Next Fest registration.

!!! info "Public, but `noindex`"

    This site is public so it can be served as a website, and every page carries
    `<meta name="robots" content="noindex,nofollow">` — deliberately kept out of search results.
    That's **courtesy, not access control**: public visibility does not grant a licence. See the
    [licence](licence.md) for what use is and isn't permitted.
