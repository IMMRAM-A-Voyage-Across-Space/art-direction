# IMMRAM — Faction Codex

*IMMRAM · Faction Codex · v1*

> An immram-roguelite — HoMM3 economy, X-COM tactics. A clan-host sails the star-sea from isle to
> isle; every isle breeds one host, and two causes wage war over it. **The one you lead is the one
> you'll later fight.**

| Isles | Causes | Units · v1 | Commanders |
|---|---|---|---|
| 6 | 12 | 36 | 18 |

## How factions work

**One ecology, split by belief.** Each isle breeds a single creature ecology — one shared six-tier
roster. Two causes lay claim to it under opposing banners, so the host you command is the host
you'll meet across the table when you invade a rival's home. Same crew, different reason to fight.

**Pick a commander.** Choosing your Commander sets your cause for the run. The world's other
commanders rally to the opposing cause and hunt you.

**Shared roster.** Both causes field the same six tiers in v1. A signature **T7** champion per
cause is reserved for v2 — where the two visibly diverge.

**Dropship bays.** Your mobile base persists across the run. A faction's bay tree unlocks tiers and
refreshes recruits weekly — and is the **only** source of T7.

**Overworld dwellings.** A generic recruitment dome + a unit marker (same idea as the mine's
resource pips). Flag for growth, or capture rival dwellings to recruit cross-cause.

**Wild dens.** Neutral apex wildlife & mercenaries — recruitable only from dens on the map, by
whoever flags them. See the companion Wild & Neutral Codex (a forthcoming page in this site).

## Reading the codex

- **MEL** — Melee · **RNG** — Ranged · **FLY** — Flyer
- Resource pips: Ór (credits) · Cruach (alloy) · Mianach (ore) · Caor (plasma) · Criostal (crystal)
- **T5** tiers gate on **Caor** (plasma); **T6** tiers gate on **Criostal** (crystal)

Resource keys in the source data (`credits`, `alloy`, `ore`, `plasma`, `crystal`) are rendered below
under their in-world display names — Ór, Cruach, Mianach, Caor, Criostal — per the `R` lookup table
in the script.

---

## 01 · Mag Mell

*Machaire · green plain · water*

<div markdown>
**Ramp:** <span class="swatch" style="background:#3a6b2f"></span> `#3a6b2f`
<span class="swatch" style="background:#5a8f43"></span> `#5a8f43`
<span class="swatch" style="background:#8fc46a"></span> `#8fc46a`
<span class="swatch" style="background:#1f4f7a"></span> `#1f4f7a`
<span class="swatch" style="background:#2d6aa0"></span> `#2d6aa0`
<span class="swatch" style="background:#7fb6d9"></span> `#7fb6d9`

**Accent:** <span class="swatch" style="background:#8fc46a"></span> `#8fc46a`
</div>

**Ident:** Combined-arms generalist

Clan-host military-industrial — warriors, walkers, drones, war-crows. The natural starting isle;
absorbs the Óglach / Fiach / Gallóglach / Ceithearnach starters.

### Causes

#### Tuatha Bláth — folk of blossom · grow & hold

The settler-line who broke the plain by hand; hold ground others would abandon. Economy & defense.

**Resource lean:** Ór, Mianach

**Faction buff:** Recruits cost less; +Ór from mines.

#### An Ard-Riail — the High Command · "The Directorate" · expand & strike

The centralised admiralty and its plasma-armed hosting. Logistics & firepower.

**Resource lean:** Cruach, Caor

**Faction buff:** +offense; faster tier unlocks.

### Roster

| Tier | Unit | Class | Signature | Resources |
|---|---|---|---|---|
| T1 | Óglach | MEL | Swarm chaff; soaks retaliation. | Ór |
| T2 | Ceithearnach | RNG | Line infantry; overwatch specialist. | Ór, Mianach |
| T3 | Fiach | FLY | High sight; reveals fog, fast flank. | Cruach |
| T4 | Gallóglach | MEL | Heavy tank; strong retaliation, tramples cover. | Cruach, Mianach |
| T5 | Badhbh | FLY | Artillery flyer; long-range strike. | Caor (gate) |
| T6 | Fomhórach | MEL | Champion; ignores cover, terror. | Criostal (gate) |

Reserved signature T7 (v2):

- **Tuatha Bláth → Greenwarden** — Terraform-mech wreathed in growth; area-heal and regen.
- **An Ard-Riail → Aegis Dreadnought** — State war-engine; orbital-linked plasma siege.

### Commanders

**Bríd, the Kindler** *(Tuatha Bláth)*
:   Quote: *"We didn't break this plain to hand it back. Dig in."*
:   Role: Entrenches and outlasts; spends ammunition like water in a drought.
:   Passive: Recruits cost less.
:   Active: Entrench — grant cover to all stacks for 1 round.
:   Tree: Economy / defense.

**Medb, the Ledger-Queen** *(An Ard-Riail)*
:   Quote: *"Sentiment is a supply problem. I have solved it."*
:   Role: Wins by out-growing the enemy — fresh stacks faster than they fall.
:   Passive: +weekly recruit growth.
:   Active: Sleá Lugha — once/battle AoE.
:   Tree: Logistics / firepower.

**Fergus, the Ironside** *(hardliner)*
:   Quote: *"It held because I was on it."*
:   Role: Stands in the front rank taking the retaliation; rallies the line.
:   Passive: +retaliation & defense for melee.
:   Active: Slógadh — +1 AP to one stack.
:   Tree: Frontline combat.

### Bays

Drop-Barracks → Motor Pool → Air Wing Hangar → Titan Foundry

### Dwellings

Settlement, Drone Bay, Mech Hangar, Airfield

**Capital:** Space Castle · **Recruitment:** Recruitment Hall

### Apex Beast

**Glas Gaibhleann** — *the Grazer-Titan*

The mythic cow of endless plenty, grown monstrous. "The plain was theirs first." A single charge
tramples an entire rank flat.

---

## 02 · Tír na nÓg

*Draíocht · bioluminescent growth · algal water*

<div markdown>
**Ramp:** <span class="swatch" style="background:#1d5a4d"></span> `#1d5a4d`
<span class="swatch" style="background:#2f7d6b"></span> `#2f7d6b`
<span class="swatch" style="background:#7ef0d0"></span> `#7ef0d0`
<span class="swatch" style="background:#1e5a52"></span> `#1e5a52`
<span class="swatch" style="background:#2f8a78"></span> `#2f8a78`
<span class="swatch" style="background:#8fe6cf"></span> `#8fe6cf`

**Accent:** <span class="swatch" style="background:#7ef0d0"></span> `#7ef0d0`
</div>

**Ident:** Regen & swarm attrition

Living biology — spore-broods, vine-beasts, luminescent flyers, regenerating biomass. A roster that
heals and overwhelms.

### Causes

#### Na Draoithe — the Druids · harmony & sustain

The isle waking to defend itself: a gestalt hive-mind, harmony and regeneration. Sustain & biomass.

**Resource lean:** Criostal, Ór

**Faction buff:** All stacks regenerate HP each round.

#### Na Beangáin — the grafts · "The Grafted" · mutation & aggression

Healers who stopped studying the isle and started *wearing* it. Mutation & aggression.

**Resource lean:** Caor, Mianach

**Faction buff:** Killing a stack grants the killer stacking +Attack.

### Roster

| Tier | Unit | Class | Signature | Resources |
|---|---|---|---|---|
| T1 | Síolán | MEL | Swarm chaff; bursts into a spore cloud on death. | Ór |
| T2 | Féithleog | RNG | Tendril whip; snares, zone control. | Ór, Mianach |
| T3 | Leamhan Sí | FLY | Reveals fog and blinds. | Cruach |
| T4 | Sligeach | MEL | Tank; chitin armor, regenerates, slow. | Mianach |
| T5 | Máthair Shíl | RNG | Artillery; spore-bombs, spawns free Síolán. | Caor (gate) |
| T6 | An Bilé | MEL | Champion; regenerates each round, terror. | Criostal (gate) |

Reserved signature T7 (v2):

- **Na Draoithe → Grove-Mind Avatar** — Army-wide heal and buff aura.
- **Na Beangáin → Chimera Apex** — Assimilates fallen enemies into itself to grow.

### Commanders

**Dian Cécht** *(Na Draoithe)*
:   Quote: *"Nothing is lost here. It is only re-sung."*
:   Role: Sings to keep the chorus whole; heals as a forest heals a burn.
:   Passive: All stacks regen each round.
:   Active: Bloom — full-heal + cleanse a stack.
:   Tree: Sustain / biomass.

**Miach, the Grafter** *(Na Beangáin)*
:   Quote: *"Why inherit a body when you can author one?"*
:   Role: Grows stronger from everything that dies near him.
:   Passive: Kills grant the killer +Attack.
:   Active: Infest — spread spore-DoT in an area.
:   Tree: Mutation / aggression.

**Naomh Folamh, the Hollow Saint** *(zealot)*
:   Quote: *"Be still. The bloom is coming for you, and it is patient."*
:   Role: Leads a tide of sporelings; nearby enemies forget their orders.
:   Passive: Enemies adjacent to you lose AP.
:   Active: Awaken — summon a free Síolán stack.
:   Tree: Swarm / control.

### Bays

Spore Vat → Vine Nursery → Brood Hollow → Worldheart Chamber

### Dwellings

Spore Pod, Vine Thicket, Lumen Hollow, Carapace Den

**Capital:** Newgrange-style Fort · **Recruitment:** Mushroom-Hall

### Apex Beast

**Gaoth Sí** — *the Pollen Wraith*

The fairy-wind that steals wits — a drifting veil of spores with no body to kill. Even the living
isle fears it.

---

## 03 · Gorias

*Meirg · rust-red iron dunes · acid*

<div markdown>
**Ramp:** <span class="swatch" style="background:#6f3d26"></span> `#6f3d26`
<span class="swatch" style="background:#9c5a38"></span> `#9c5a38`
<span class="swatch" style="background:#c07a4e"></span> `#c07a4e`
<span class="swatch" style="background:#3a7a1e"></span> `#3a7a1e`
<span class="swatch" style="background:#7bd84f"></span> `#7bd84f`
<span class="swatch" style="background:#d6ff8a"></span> `#d6ff8a`

**Accent:** <span class="swatch" style="background:#cf8a52"></span> `#cf8a52`
</div>

**Ident:** Corrosion & salvage attrition

Scrappers and rust-machines, acid-adapted war rigs, jury-rigged salvage tech. Attrition and
corrosion.

### Causes

#### Na Fomóiri — Fomorian raiders · salvage & attrition

Scrapper clans: a wreck is a promise, a salvaged bolt is sacred. Salvage & attrition.

**Resource lean:** Mianach, Cruach

**Faction buff:** Gain resources from any stack destroyed — yours or theirs.

#### An Creimeadh — the corrosion · dissolve & terror

An acid-doctrine war-state: nothing deserves to last, the rust is holy. Corrosion & terror.

**Resource lean:** Caor, Ór

**Faction buff:** Attacks shred enemy Defense (armor-corrosion).

### Roster

| Tier | Unit | Class | Signature | Resources |
|---|---|---|---|---|
| T1 | Meirgín | MEL | Swarm chaff; explodes on death. | Ór |
| T2 | Aigéadóir | RNG | Corrosive sprayer; applies Defense-shred. | Ór, Mianach |
| T3 | Sciathán Meirge | FLY | Fast, fragile salvage-strafe; ignores dunes. | Cruach |
| T4 | Carnán | MEL | Tank; absorbs wreckage to self-repair, slow. | Mianach, Cruach |
| T5 | Creimire | RNG | Artillery; acid shells leave a lingering pool. | Caor (gate) |
| T6 | Iarnphéist | MEL | Champion; melts cover and armor, terror. | Criostal (gate) |

Reserved signature T7 (v2):

- **Na Fomóiri → The Monarch Rig** — Mobile factory that builds scrap stacks mid-battle.
- **An Creimeadh → The Dissolver** — A roaming acid storm that corrodes everything in range.

### Commanders

**Balor of the Evil Eye** *(Na Fomóiri)*
:   Quote: *"Everything that dies on my sand pays rent."*
:   Role: War chest swells off the dead; welds his mechs back mid-fight.
:   Passive: +resources from kills.
:   Active: Tobar Sláine — rebuild a mechanical stack.
:   Tree: Economy / attrition.

**Bres, the Blighted** *(An Creimeadh)*
:   Quote: *"All things return to rust. I merely keep the schedule."*
:   Role: Eats the enemy's defenses away layer by layer, then it rains.
:   Passive: Attacks shred enemy Defense.
:   Active: Acid Rain — AoE corrosion + DoT.
:   Tree: Corrosion / terror.

**Fáidh na Meirge, the Rust Prophet** *(warlord)*
:   Quote: *"The desert doesn't count its dead. Neither do I. Surge."*
:   Role: Conjures fresh waves out of the wreckage faster than they fall.
:   Passive: Swarm units cheaper & larger.
:   Active: Scrap Surge — summon a free Meirgín stack.
:   Tree: Swarm / zealotry.

### Bays

Salvage Yard → Acid Works → Corroder Foundry → Leviathan Pit

### Dwellings

Scrap Heap, Acid Still, Hangar Wreck, Golem Forge

**Capital:** Mad-Max Fort · **Recruitment:** Scrap-Yard

### Apex Beast

**Oilliphéist** — *the Dune Serpent*

The great Irish worm that carved rivers, swimming the rust like water. It surfaces *under*
whatever's heaviest. The Corrosion calls it a saint.

---

## 04 · Murias

*Oighear · methane ice · liquid methane*

<div markdown>
**Ramp:** <span class="swatch" style="background:#8fa9bd"></span> `#8fa9bd`
<span class="swatch" style="background:#bcd2e0"></span> `#bcd2e0`
<span class="swatch" style="background:#e6f1f8"></span> `#e6f1f8`
<span class="swatch" style="background:#1e6a7a"></span> `#1e6a7a`
<span class="swatch" style="background:#4fd8d8"></span> `#4fd8d8`
<span class="swatch" style="background:#bff7f7"></span> `#bff7f7`

**Accent:** <span class="swatch" style="background:#8fdfe8"></span> `#8fdfe8`
</div>

**Ident:** Control & denial

Cryo-adapted beasts, ice constructs, and freeze-tech. Control through slow, deny, and entrench.

### Causes

#### Dún Seaca — the frost-fort · "Frostbound Hold" · fortification & defense

Survival is endurance: hold the wall, yield nothing. Fortification & defense.

**Resource lean:** Mianach, Criostal

**Faction buff:** Stacks gain bonus Defense while stationary.

#### An Díorma Oighir — the ice-raiders · "Glacial Vanguard" · ambush & control

The cold is a blade — freeze an enemy mid-step, be gone before the storm clears. Ambush & control.

**Resource lean:** Cruach, Caor

**Faction buff:** Your freeze effects also cut enemy Initiative/AP.

### Roster

| Tier | Unit | Class | Signature | Resources |
|---|---|---|---|---|
| T1 | Oighrín | MEL | Swarm chaff; chill-on-hit. | Ór |
| T2 | Siocaire | RNG | Freeze-rifle; applies Slow. | Ór, Mianach |
| T3 | Biorán Reo | FLY | Ice-shard strafe, reveals fog, brittle. | Cruach |
| T4 | Famhair Oighir | MEL | Tank; immune to slow, very slow. | Mianach, Criostal |
| T5 | Síobaire | RNG | Artillery; AoE freeze storm. | Caor (gate) |
| T6 | An Reoiteoir | MEL | Champion; freezes its attackers, terror. | Criostal (gate) |

Reserved signature T7 (v2):

- **Dún Seaca → The Bastion-Heart** — Grants the whole army cover / shield.
- **An Díorma Oighir → The White Death** — Flash-freeze predator that strikes from fog and resets.

### Commanders

**Cathair, the Warden** *(Dún Seaca)*
:   Quote: *"We do not take ground. We refuse to give it."*
:   Role: Raises ice ramparts; a stack that plants its feet is nearly immovable.
:   Passive: Stationary stacks gain Defense.
:   Active: Frost Wall — raise an ice cover-barrier.
:   Tree: Fortification / defense.

**Scáthach, the Vanguard** *(An Díorma Oighir)*
:   Quote: *"The cold is already inside your line. I just told it where to bite."*
:   Role: Steals an enemy's turn out from under them; strikes and vanishes.
:   Passive: Freezes cut enemy AP.
:   Active: Cold Snap — skip an enemy stack's next turn.
:   Tree: Ambush / control.

**An Doleáite, the Thawless** *(zealot)*
:   Quote: *"Cold is a question. We stopped answering."*
:   Role: Ignores enemy freeze; seals a whole field of ice against all but her own.
:   Passive: Your stacks ignore enemy slow/control.
:   Active: Deep Freeze — lock an area, denying movement.
:   Tree: Endurance / control.

### Bays

Cryo Barracks → Frost Hangar → Blizzard Spire → Colossus Vault

### Dwellings

Ice Warren, Cryo Armory, Glaive Roost, Golem Glacier

**Capital:** Frozen Spire Fortress · **Recruitment:** Ice-Hall

### Apex Beast

**Seaca-Phéist** — *the Hoarfrost Drake*

The first winter, given wings. A breath that freezes a whole line; a shadow that leaves statues
behind.

---

## 05 · Tech Duinn

*Gríosach · black volcanic rock · lava*

<div markdown>
**Ramp:** <span class="swatch" style="background:#232027"></span> `#232027`
<span class="swatch" style="background:#3a3640"></span> `#3a3640`
<span class="swatch" style="background:#55505c"></span> `#55505c`
<span class="swatch" style="background:#7a1e0a"></span> `#7a1e0a`
<span class="swatch" style="background:#e2622a"></span> `#e2622a`
<span class="swatch" style="background:#ffcf6b"></span> `#ffcf6b`

**Accent:** <span class="swatch" style="background:#f0742e"></span> `#f0742e`
</div>

**Ident:** Armor + burn brawling

Forge-fire creatures, magma-beasts, molten war machines, ember-tech. Armor and burn.

### Causes

#### Na Gaibhne — the smiths · "Emberwrights" · armor & industry

Forge-priests who venerate fire as a *maker*. Armor & industry.

**Resource lean:** Cruach, Mianach

**Faction buff:** +Defense to all stacks; heavy units cost less Cruach.

#### Clann na Luaithe — the ash-born · "Cinderborn" · sacrifice & frenzy

Heretics who venerate fire as a *destroyer* — burn brightest closest to death. Sacrifice & frenzy.

**Resource lean:** Caor, Criostal

**Faction buff:** Attacks apply Burn DoT; stacks hit harder below half HP.

### Roster

| Tier | Unit | Class | Signature | Resources |
|---|---|---|---|---|
| T1 | Gríosán | MEL | Swarm chaff; leaves burning ground on death. | Ór |
| T2 | Lasaire | RNG | Flamethrower cone; Burn DoT. | Ór, Mianach |
| T3 | Séideán Tine | FLY | Fast firebomb strafe, ignores terrain. | Cruach, Caor |
| T4 | An tInneoin | MEL | Tank; molten armor, burns attackers, slow. | Cruach, Mianach |
| T5 | Teilgeoir Gríosach | RNG | Artillery; lava-mortar leaves a pool. | Caor (gate) |
| T6 | Coire Lasrach | MEL | Champion; living volcano, AoE burn aura, terror. | Criostal (gate) |

Reserved signature T7 (v2):

- **Na Gaibhne → The Anvil Sovereign** — Forge-walker that armors and repairs allies mid-battle.
- **Clann na Luaithe → The Pyre Herald** — Self-immolating avatar spreading an expanding firestorm.

### Commanders

**Goibniu, the Forgemaster** *(Na Gaibhne)*
:   Quote: *"Fire does not destroy iron. It teaches it shape."*
:   Role: Reforges what shatters mid-battle; armors what survives.
:   Passive: +Defense; cheaper heavy units.
:   Active: Tobar Sláine — restore armor / heal a golem or mech.
:   Tree: Armor / industry.

**Aodh, the Ashlord** *(Clann na Luaithe)*
:   Quote: *"I am the spark that doesn't care what it lands on."*
:   Role: Leaves the enemy alight and dwindling; fights hottest as it burns out of control.
:   Passive: Attacks apply Burn.
:   Active: Immolate — AoE fire burst anywhere.
:   Tree: Burn / aggression.

**Naomh na Luaithe, the Cinder Saint** *(fire-cult)*
:   Quote: *"Give the fire what it asks. It only ever asks for everything."*
:   Role: Spends half a stack to make the other half burn twice as bright.
:   Passive: Bonus damage below half HP.
:   Active: Pyre — sacrifice part of a stack to massively buff its damage.
:   Tree: Sacrifice / frenzy.

### Bays

Ember Forge → Magma Hangar → Cinder Mortar Works → Inferno Crucible

### Dwellings

Ash Pit, Flame Works, Drake Roost, Golem Forge

**Capital:** Lava Fortress · **Recruitment:** Forge-Hall

### Apex Beast

**Aillén** — *the Magma Leviathan*

Aillén the Burner, who torched Tara each Samhain — a slow mountain of living magma that doesn't
attack so much as *arrive*.

---

## 06 · Falias

*Cnámh · bone-grey dust & craters · the Veil*

<div markdown>
**Ramp:** <span class="swatch" style="background:#4e4a44"></span> `#4e4a44`
<span class="swatch" style="background:#6f6a63"></span> `#6f6a63`
<span class="swatch" style="background:#8d877d"></span> `#8d877d`
<span class="swatch" style="background:#2a3b46"></span> `#2a3b46`
<span class="swatch" style="background:#3f5a68"></span> `#3f5a68`
<span class="swatch" style="background:#7fa0b0"></span> `#7fa0b0`

**Accent:** <span class="swatch" style="background:#a4bccb"></span> `#a4bccb`
</div>

**Ident:** Range · recon · economy

Vacuum-hardened miners, drones, low-g exo-troops, mass-driver and kinetic tech. Range, recon, and
economy.

### Causes

#### Cumann na Piocóide — the miners' union · "Pickaxe Union" · economy & swarm

A labor-militia of hardhats and drilling drones; win in numbers. Economy & swarm.

**Resource lean:** Mianach, Ór

**Faction buff:** +mine output; drones / swarm cost less.

#### An tOrd Tostach — the silent order · stealth & precision

A vacuum-monastic sect sworn to quiet and dark — the only ones who know the Veil. Stealth &
precision.

**Resource lean:** Criostal, Caor

**Faction buff:** Stacks begin battle stealthed (first-strike from fog).

### Roster

| Tier | Unit | Class | Signature | Resources |
|---|---|---|---|---|
| T1 | Pollaire | MEL | Swarm chaff; self-destruct on death. | Ór |
| T2 | Diúracóir | RNG | Railgun; long range, ignores cover. | Ór, Mianach |
| T3 | Súileach | FLY | Best scout; widest sight, very fragile. | Cruach |
| T4 | Tarathar | MEL | Tank; drill-exosuit, breaches cover, slow. | Mianach, Cruach |
| T5 | Ga Fada | FLY | Artillery; precise long-range kinetic strike. | Caor (gate) |
| T6 | Lia Fáil | RNG | Champion; planet-cracker rail pierces a whole line, terror. | Criostal (gate) |

Reserved signature T7 (v2):

- **Cumann na Piocóide → The Mother Lode** — Mobile refinery-titan generating resources and drones
  each round.
- **An tOrd Tostach → The Quietus** — Vacuum-phantom that strikes from stealth and vanishes.

### Commanders

**Sreng, the Foreman** *(Cumann na Piocóide)*
:   Quote: *"One drill breaks. Ten thousand don't stop."*
:   Role: Floods the dust with bodies and machines; refuses, at scale, to lose.
:   Passive: +mine output; cheaper drones.
:   Active: Reinforce — summon a free Pollaire stack.
:   Tree: Economy / swarm.

**Tost, the Silent** *(An tOrd Tostach)*
:   Quote: *"[no transmission]"*
:   Role: Opens every battle gone from the enemy's sensors; marks a target for the Order's fire.
:   Passive: Stacks start stealthed.
:   Active: Mark — all your stacks deal bonus vs a target.
:   Tree: Stealth / precision.

**Díthreabhach an Fholúis, the Vacuum Hermit** *(savant)*
:   Quote: *"Gravity is a suggestion. Distance is a habit. I have quit both."*
:   Role: Flyers and drones move farther and see more than physics should allow.
:   Passive: Flyers & drones gain Speed & Sight.
:   Active: Low-G Leap — huge move + flank for one stack.
:   Tree: Mobility / recon.

### Bays

Mining Bay → Rail Works → Strike Relay → Leviathan Quarry

### Dwellings

Dust Warren, Rail Yard, Drone Roost, Exo-Hangar

**Capital:** Cathedral · **Recruitment:** Ossuary-Hall

### Apex Beast

**Cú Sí** — *the Void Stalker*

The spectral death-hound of the mist — unseen until the instant it isn't. On Falias, the dark has
teeth.

---

*IMMRAM · FACTION CODEX · v1 · 6 WORLDS · 12 FACTIONS · 18 COMMANDERS*
