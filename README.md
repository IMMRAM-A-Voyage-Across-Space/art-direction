# IMMRAM — Art Direction

Art direction, world bible, and commission briefs for
**IMMRAM — *A Voyage Across Space***, an Irish-myth 4X-roguelite.

**Site:** https://immram-a-voyage-across-space.github.io/art-direction/

This repo is public because GitHub Pages on a free organisation requires it.
It is **not** open source — see `LICENSE`. Pages carry `noindex`, so the site
is unlisted but publicly reachable by URL.

## Layout

| Path | Contents |
|---|---|
| `bible/` | The world & art bible — canon |
| `palette/` | The locked ~110-colour palette |
| `briefs/` | Commission briefs |
| `reference/` | Tile spec, stained-glass UI direction |
| `codex/` | Factions, neutrals, lore |
| `sprites/` | Gallery of shipped sprites |
| `assets/source/` | Markdown sources |
| `scripts/` | One-shot generators and the link checker |

## Regenerating

`palette/`, `sprites/`, and `codex/lore/` are generated; their output is committed.
GitHub Pages serves static files only — nothing runs at deploy time.

    python3 scripts/gen_palette.py
    python3 scripts/gen_sprites.py
    python3 scripts/gen_lore.py
    ./scripts/check-links.sh
