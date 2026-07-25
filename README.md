# IMMRAM — Art Direction

Art direction, world bible, and commission briefs for
**IMMRAM — *A Voyage Across Space***, an Irish-myth 4X-roguelite.

**Site:** https://immram-a-voyage-across-space.github.io/art-direction/

This repo is public because GitHub Pages on a free organisation requires it.
It is **not** open source — see `LICENSE`. Pages carry `noindex`, so the site
is unlisted but publicly reachable by URL.

## Built with Zensical

The site is a [Zensical](https://zensical.org/) project. Markdown under `docs/`
is the single source of truth; the theme supplies navigation, chrome, search,
and the dark/light palette — `zensical.toml` configures all of it, including
an explicit `nav` so the sidebar follows the order an artist should read in.

| Path | Contents |
|---|---|
| `docs/index.md` | Landing page |
| `docs/bible.md` | The world & art bible — canon |
| `docs/palette.md` | The locked colour palette |
| `docs/sprites.md` | Gallery of shipped sprites |
| `docs/briefs/` | Commission briefs |
| `docs/reference/` | Tile spec, stained-glass UI direction |
| `docs/codex/` | Factions, neutrals, lore |
| `docs/robots.txt` | Crawling policy (copied into the built site as-is) |
| `zensical.toml` | Site configuration: nav, theme, palette, fonts |

## Building

```sh
uvx zensical build --clean   # writes site/ (git-ignored, not committed)
uvx zensical serve           # local preview with live reload
```

Deployment is handled by the generated GitHub Actions workflow
(`.github/workflows/docs.yml`): it builds the site and publishes the result to
GitHub Pages. Nothing runs at request time — Pages serves static output only.
