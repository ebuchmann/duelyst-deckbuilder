const neutral = [
  { id: 19052, name: 'Bloodtear Alchemist', set: 'core', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 1 damage to an enemy minion or General.' },
  { id: 10001, name: 'Dragonlark', set: 'core', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'neutral', text: '<b>Flying</b>' },
  { id: 11022, name: 'Dreamgazer', set: 'core', type: 'minion', cost: 1, rarity: 'epic', attack: 1, health: 1, faction: 'neutral', text: 'When you replace this card, summon it nearby. Your General takes 2 damage.' },
  { id: 19002, name: 'Helm of MECHAZ0R', set: 'core', type: 'minion', race: 'mech', cost: 1, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' },
  { id: 11053, name: 'Koi', type: 'minion', set: 'shimzar', race: 'battle pet', cost: 1, rarity: 'common', attack: 3, health: 1, faction: 'neutral', text: 'Takes no damage from Generals.' },
  { id: 10018, name: 'Komodo Charger', set: 'core', type: 'minion', cost: 1, rarity: 'basic', attack: 1, health: 3, faction: 'neutral', text: '' },
  { id: 10019, name: 'Planar Scout', set: 'core', type: 'minion', cost: 1, rarity: 'basic', attack: 2, health: 1, faction: 'neutral', text: '<b>Airdrop</b>' },
  { id: 11016, name: 'Prophet of the White Palm', set: 'core', type: 'minion', cost: 1, rarity: 'rare', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Prevent ALL spell damage until your next turn.' },
  { id: 19025, name: 'Swamp Entangler', set: 'core', type: 'minion', cost: 1, rarity: 'common', attack: 0, health: 3, faction: 'neutral', text: '<b>Provoke</b>' },
  { id: 11083, name: 'Zyx', set: 'core', type: 'minion', cost: 1, rarity: 'rare', attack: 1, health: 2, faction: 'neutral', text: '<b>Opening Gambit:</b> Summon a copy of this minion on a random nearby space.' },
  { id: 10993, name: 'Aethermaster', set: 'core', type: 'minion', race: 'arcanyst', cost: 2, rarity: 'epic', attack: 1, health: 3, faction: 'neutral', text: 'You may replace an additional card each turn.' },
  { id: 11001, name: 'Amu', type: 'minion', set: 'shimzar', race: 'battle pet', cost: 2, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '' },
  { id: 11017, name: 'Araki Headhunter', set: 'core', type: 'minion', cost: 2, rarity: 'epic', attack: 1, health: 3, faction: 'neutral', text: 'Whenever you summon a minion with Opening Gambit from your action bar, gain +2 Attack.' },
  { id: 11084, name: 'Azure Herald', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b> Restore 3 Health to your General.' },
  { id: 19050, name: 'Azure Horn Shaman', set: 'core', type: 'minion', cost: 2, rarity: 'rare', attack: 1, health: 4, faction: 'neutral', text: '<b>Dying Wish</b>: Give +4 Health to friendly minions around it.' },
  { id: 19029, name: 'Bluetip Scorpion', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 1, faction: 'neutral', text: 'Deals double damage to minions.' },
  { id: null, name: 'Cryptographer', set: 'bloodborn', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit:</b> Refresh your Bloodborn Spell.' },
  { id: 10020, name: 'Ephemeral Shroud', set: 'core', type: 'minion', cost: 2, rarity: 'basic', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Dispel 1 nearby space.' },
  { id: 19051, name: 'Flameblood Warlock', set: 'core', type: 'minion', cost: 2, rarity: 'rare', attack: 3, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 3 damage to BOTH Generals.' },
  { id: 11009, name: 'Ghost Lynx', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Teleport a nearby minion to a random space.' },
  { id: 19038, name: 'Golem Metallurgist', set: 'core', type: 'minion', race: 'golem', cost: 2, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: 'The first Golem you summon each turn costs 1 less.' },
  { id: 10981, name: 'Healing Mystic', set: 'core', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Restore 2 Health to a minion or General.' },
  { id: 11014, name: 'Jaxi', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 1, faction: 'neutral', text: '<b>Dying Wish</b>: Summon a 1/1 Ranged Mini-Jax in a random unoccupied corner.' },
  { id: 10302, name: 'Manaforger', set: 'core', type: 'minion', race: 'arcanyst', cost: 2, rarity: 'rare', attack: 1, health: 3, faction: 'neutral', text: 'The first non-Bloodborn spell you cast each turn costs 1 less.' },
  { id: 10979, name: 'Maw', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 2 damage to a nearby enemy minion.' },
  { id: 19040, name: 'Piercing Mantis', set: 'core', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 2, faction: 'neutral', text: '<b>Frenzy</b>' },
  { id: 19037, name: 'Primus Fist', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Give a nearby friendly minion +2 Attack this turn.' },
  { id: 19026, name: 'Rock Pulverizer', set: 'core', type: 'minion', cost: 2, rarity: 'basic', attack: 1, health: 4, faction: 'neutral', text: '<b>Provoke</b>' },
  { id: 10957, name: 'Rust Crawler', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Destroy a random enemy artifact.' },
  { id: 11046, name: 'Shiro Puppydragon', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 1, health: 4, faction: 'neutral', text: 'At the end of your turn, give each nearby friendly minion +1 Attack.' },
  { id: 19048, name: 'Skyrock Golem', set: 'core', type: 'minion', race: 'golem', cost: 2, rarity: 'basic', attack: 3, health: 2, faction: 'neutral', text: '' },
  { id: 11066, name: 'Sol', type: 'minion', set: 'shimzar', race: 'battle pet', cost: 2, rarity: 'rare', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Activate a friendly Battle Pet.' },
  { id: 10021, name: 'Vale Hunter', set: 'core', type: 'minion', cost: 2, rarity: 'basic', attack: 1, health: 2, faction: 'neutral', text: '<b>Ranged</b>' },
  { id: 19003, name: 'Wings of MECHAZ0R', set: 'core', type: 'minion', race: 'mech', cost: 2, rarity: 'common', attack: 1, health: 4, faction: 'neutral', text: '<b>Airdrop</b><br> <b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' },
  { id: 11075, name: 'Wood-Wen', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Provoke</b><br> <b>Opening Gambit</b>: Give a nearby friendly minion Provoke.' },
  { id: 11061, name: 'Z0r', type: 'minion', set: 'shimzar', race: 'battle pet', cost: 2, rarity: 'epic', attack: 2, health: 1, faction: 'neutral', text: '<b>Dying Wish</b>: Put a random MECH minion into your action bar.' },
  { id: 11039, name: 'Abjudicator', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Lower the cost of all spells in your action bar by 1.' },
  { id: 10304, name: 'Alcuin Loremaster', set: 'core', type: 'minion', race: 'arcanyst', cost: 3, rarity: 'epic', attack: 3, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a copy of the most recently cast spell into your action bar.' },
  { id: 11038, name: 'Bastion', set: 'core', type: 'minion', race: 'structure', cost: 3, rarity: 'epic', attack: 0, health: 5, faction: 'neutral', text: 'At the end of your turn, give other friendly minions +1 Health.' },
  { id: 10013, name: 'Blaze Hound', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Both players drop a card.' },
  { id: 11043, name: 'Blistering Skorn', set: 'core', type: 'minion', cost: 4, rarity: 'common', attack: 4, health: 5, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 1 damage to ALL minions and Generals (including itself).' },
  { id: 10205, name: 'Bloodshard Golem', set: 'core', type: 'minion', race: 'golem', cost: 3, rarity: 'basic', attack: 4, health: 3, faction: 'neutral', text: '' },
  { id: 19004, name: 'Cannon of MECHAZ0R', set: 'core', type: 'minion', race: 'mech', cost: 3, rarity: 'rare', attack: 2, health: 2, faction: 'neutral', text: '<b>Ranged</b><br> <b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' },
  { id: 10962, name: 'Chaos Elemental', set: 'core', type: 'minion', cost: 3, rarity: 'epic', attack: 4, health: 4, faction: 'neutral', text: 'Whenever this minion takes damage, it randomly teleports.' },
  { id: 19030, name: 'Crimson Oculus', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: 'Whenever opponent summons a minion, this minion gains +1/+1.' },
  { id: 10953, name: 'Crossbones', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Destroy an enemy minion with Ranged.' },
  { id: 11079, name: 'Day Watcher', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: 'Whenever a friendly minion attacks, restore 1 health to your general.' },
  { id: 11076, name: 'Elkowl', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Gain two random abilities.' },
  { id: 11056, name: 'Golden Mantella', set: 'shimzar', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a random Battle Pet into your action bar.' },
  { id: 19039, name: 'Golem Vanquisher', set: 'core', type: 'minion', race: 'golem', cost: 3, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: '<b>Provoke</b><br> Your other Golem minions have <b>Provoke</b>.' },
  { id: 11052, name: 'Hydrax', set: 'shimzar', type: 'minion', cost: 3, rarity: 'legendary', attack: 3, health: 3, faction: 'neutral', text: 'Whenever a friendly Battle Pet dies, draw a card.' },
  { id: 11051, name: 'Ion', set: 'shimzar', type: 'minion', race: 'battle pet', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: '<b>Ranged</b><br> Deals double damage to Generals.' },
  { id: 10987, name: 'Lady Locke', set: 'core', type: 'minion', cost: 3, rarity: 'legendary', attack: 2, health: 2, faction: 'neutral', text: '<b>Provoke</b><br> <b>Opening Gambit</b>: Other minions you summon this turn gain +1/+1 and <b>Provoke</b>.' },
  { id: 19047, name: 'Mirkblood Devourer', set: 'core', type: 'minion', cost: 3, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: 'Friendly minions summoned nearby this minion gain +1/+1.' },
  { id: 11008, name: 'Mogwai', set: 'core', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 3, faction: 'neutral', text: 'After this moves, draw a card.' },
  { id: 10303, name: 'Prismatic Illusionist', set: 'core', type: 'minion', race: 'arcanyst', cost: 3, rarity: 'rare', attack: 2, health: 3, faction: 'neutral', text: 'Whenever you cast a spell, summon a 2/1 Illusion on a random nearby space.' },
  { id: 19033, name: 'Putrid Dreadflayer', set: 'core', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 4, faction: 'neutral', text: '<b>Flying</b>' },
  { id: 10016, name: 'Repulsor Beast', set: 'core', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: Push a nearby enemy minion to any space.' },
  { id: 10012, name: 'Saberspine Tiger', set: 'core', type: 'minion', cost: 3, rarity: 'basic', attack: 3, health: 2, faction: 'neutral', text: '<b>Rush</b>' },
  { id: 10014, name: 'Sand Burrower', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 2, health: 4, faction: 'neutral', text: 'When this minion survives damage, it returns to your action bar.' },
  { id: 11027, name: 'Sapphire Seer', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 2, health: 2, faction: 'neutral', text: '<b>Forcefield</b>' },
  { id: 19045, name: 'Sarlac the Eternal', set: 'core', type: 'minion', cost: 3, rarity: 'legendary', attack: 1, health: 1, faction: 'neutral', text: '<b>Dying Wish</b>: Re-summon this minion on a random space.' },
  { id: 10009, name: 'Silvertongue Corsair', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: 'Takes no damage from Generals.' },
  { id: 11035, name: 'Skywing', set: 'core', type: 'minion', race: 'warmaster', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Flying</b><br> Your other minions with <b>Flying</b> cost 1 less.' },
  { id: 11058, name: 'Soboro', set: 'shimzar', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 4, faction: 'neutral', text: 'Whenever this damages a neutral minion, destroy that minion.' },
  { id: 19049, name: 'Sojourner', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 1, health: 5, faction: 'neutral', text: 'Whenever this minion deals damage, draw a card.' },
  { id: 10992, name: 'Songweaver', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Give a nearby friendly minion +1/+1.' },
  { id: 10301, name: 'Sun Seer', set: 'core', type: 'minion', race: 'arcanyst', cost: 3, rarity: 'common', attack: 2, health: 4, faction: 'neutral', text: 'Whenever this minion deals damage, restore 2 Health to your General.' },
  { id: 19005, name: 'Sword of MECHAZ0R', set: 'core', type: 'minion', race: 'mech', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Frenzy</b><br> <b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%.' },
  { id: 10954, name: 'Sworn Avenger', set: 'core', type: 'minion', cost: 3, rarity: 'epic', attack: 1, health: 3, faction: 'neutral', text: '<b>Ranged</b><br> Whenever your General takes damage, this minion gains +1 Attack.' },
  { id: 10974, name: 'Syvrel the Exile', set: 'core', type: 'minion', cost: 3, rarity: 'epic', attack: 1, health: 4, faction: 'neutral', text: '<b>Ranged</b><br> Minions damaged by Syvrel are pulled in front of him.' },
  { id: 10960, name: 'Venom Toth', set: 'core', type: 'minion', cost: 3, rarity: 'epic', attack: 3, health: 3, faction: 'neutral', text: 'Whenever your opponent summons a minion, deal 1 damage to the enemy General.' },
  { id: 10982, name: 'Void Hunter', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 4, health: 2, faction: 'neutral', text: '<b>Dying Wish</b>: Draw a card.' },
  { id: 11007, name: 'Wind Runner', set: 'core', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: 'After this minion moves, give all friendly minions around it +1/+1.' },
  { id: 19010, name: 'Wind Stopper', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 1, health: 7, faction: 'neutral', text: 'Ranged attackers must attack this minion first.' },
  { id: 11020, name: 'Wings of Paradise', set: 'core', type: 'minion', cost: 3, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Flying</b><br> Whenever you replace a card, this minion gains +2 Attack this turn.' },
  { id: 11004, name: 'Yun', set: 'shimzar', type: 'minion', race: 'battle pet', cost: 3, rarity: 'common', attack: 5, health: 4, faction: 'neutral', text: '' },
  { id: 11059, name: 'Zukong', set: 'shimzar', type: 'minion', cost: 3, rarity: 'legendary', attack: 3, health: 4, faction: 'neutral', text: 'You control your Battle Pets.' },
  { id: 11033, name: 'Arrow Whistler', set: 'core', type: 'minion', race: 'warmaster', cost: 4, rarity: 'common', attack: 2, health: 4, faction: 'neutral', text: '<b>Ranged</b><br> Your other minions with <b>Ranged</b> have +1 Attack.' },
  { id: 10961, name: 'Artifact Hunter', set: 'core', type: 'minion', cost: 4, rarity: 'epic', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Draw a random artifact from your deck.' },
  { id: 11006, name: 'Black Locust', set: 'core', type: 'minion', cost: 4, rarity: 'legendary', attack: 2, health: 2, faction: 'neutral', text: '<b>Flying</b><br> After this minion moves, summon a Black Locust nearby.' },
  { id: 10989, name: 'Captain Hank Hart', set: 'core', type: 'minion', cost: 4, rarity: 'epic', attack: 2, health: 4, faction: 'neutral', text: '<b>Ranged</b><br> Whenever this minion deals damage, restore that much Health to it.' },
  { id: 19006, name: 'Chassis of MECHAZ0R', set: 'core', type: 'minion', race: 'mech', cost: 4, rarity: 'epic', attack: 5, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Progresses MECHAZ0R build by +20%. Cannot be targeted by ANY spells.' },
  { id: 11086, name: 'Decimus', set: 'core', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 4, faction: 'neutral', text: 'Whenever your opponent draws a card, deal 2 damage to the enemy General.' },
  { id: 10976, name: 'Dioltas', set: 'core', type: 'minion', cost: 4, rarity: 'epic', attack: 5, health: 3, faction: 'neutral', text: '<b>Dying Wish</b>: Summon a 0/10 Tombstone minion with Provoke nearby your General.' },
  { id: 10995, name: 'Emerald Rejuvenator', set: 'core', type: 'minion', cost: 4, rarity: 'rare', attack: 4, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Restore 4 Health to BOTH Generals.' },
  { id: 10017, name: 'Fire Spitter', set: 'core', type: 'minion', cost: 4, rarity: 'basic', attack: 3, health: 2, faction: 'neutral', text: '<b>Ranged</b>' },
  { id: 19042, name: 'Frostbone Naga', set: 'core', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 2 damage to ALL minions and Generals around it.' },
  { id: 11057, name: 'Gnasher', set: 'shimzar', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Dying Wish</b>: This minion deals 3 damage to all enemies around it.' },
  { id: 10978, name: 'Hailstone Golem', set: 'core', type: 'minion', race: 'golem', cost: 4, rarity: 'basic', attack: 4, health: 6, faction: 'neutral', text: '' },
  { id: 10306, name: 'Lightbender', set: 'core', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Dispel ALL spaces around it.' },
  { id: 10965, name: 'Mindwarper', set: 'core', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 4, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Gain a copy of a random spell from your opponent\'s action bar.' },
  { id: 10988, name: 'Moebius', set: 'core', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'epic', attack: 3, health: 5, faction: 'neutral', text: 'At the start of your turn, restore this minion to full Health and switch its Attack and Health.' },
  { id: 11080, name: 'Night Watcher', set: 'core', type: 'minion', cost: 4, rarity: 'epic', attack: 2, health: 4, faction: 'neutral', text: '<b>Forcefield</b><br> Whenever ANY player summons a minion with <b>Rush</b>, exhaust it.' },
  { id: 10305, name: 'Owlbeast Sage', set: 'core', type: 'minion', race: 'arcanyst', cost: 4, rarity: 'rare', attack: 4, health: 4, faction: 'neutral', text: 'Whenever you cast a spell, your Arcanyst minions gain +2 Health.' },
  { id: 19027, name: 'Primus Shieldmaster', set: 'core', type: 'minion', cost: 4, rarity: 'basic', attack: 3, health: 6, faction: 'neutral', text: '<b>Provoke</b>' },
  { id: 10991, name: 'Purgatos, The Realmkeeper', set: 'core', type: 'minion', cost: 4, rarity: 'epic', attack: 3, health: 4, faction: 'neutral', text: 'Whenver this minion deals damage, either deal 3 damage to the enemy General OR restore 3 Health to your General.' },
  { id: null, name: 'Sanguinar', set: 'bloodborn', type: 'minion', cost: 4, rarity: 'rare', attack: 5, health: 4, faction: 'neutral', text: 'Your Bloodborn Spell costs 1 less to activate.' },
  { id: 19044, name: 'Silhouette Tracer', set: 'core', type: 'minion', cost: 4, rarity: 'common', attack: 2, health: 6, faction: 'neutral', text: '<b>Opening Gambit</b>: Teleport your General up to 3 spaces.' },
  { id: 10975, name: 'Spelljammer', set: 'core', type: 'minion', cost: 4, rarity: 'legendary', attack: 3, health: 5, faction: 'neutral', text: 'Each player draws an additional card at the end of their turns.' },
  { id: 11078, name: 'Sphynx', set: 'core', type: 'minion', cost: 4, rarity: 'legendary', attack: 5, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a Riddle in your opponent\'s action bar.' },
  { id: 11015, name: 'Sun Elemental', set: 'core', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Give two random friendly minions +2 Health.' },
  { id: 11028, name: 'Sunsteel Defender', set: 'core', type: 'minion', cost: 4, rarity: 'rare', attack: 4, health: 3, faction: 'neutral', text: '<b>Forcefield</b>' },
  { id: 11041, name: `Sworn Sister L'Kian`, set: 'core', type: 'minion', cost: 4, rarity: 'legendary', attack: 2, health: 4, spirit: 0, faction: 'neutral', text: '<b>Opening Gambit</b>: Add 2 random cards from your Faction to your action bar.' },
  { id: 11025, name: 'Tethermancer', set: 'core', type: 'minion', cost: 4, rarity: 'rare', attack: 1, health: 6, faction: 'neutral', text: '<b>Provoke</b><br> Dispel any minion that deals damage to this one.' },
  { id: 19031, name: 'Thorn Needler', set: 'core', type: 'minion', cost: 4, rarity: 'basic', attack: 6, health: 4, faction: 'neutral', text: '' },
  { id: 11036, name: 'Unseven', set: 'core', type: 'minion', race: 'warmaster', cost: 4, rarity: 'legendary', attack: 2, health: 4, faction: 'neutral', text: '<b>Dying Wish</b>: Summon a minion with <b>Dying Wish</b> from your action bar.' },
  { id: 11019, name: 'White Widow', set: 'core', type: 'minion', cost: 4, rarity: 'rare', attack: 3, health: 4, faction: 'neutral', text: 'Whenever you replace a card, deal 2 damage to a random enemy minion or General.' },
  { id: 19034, name: 'Young Flamewing', set: 'core', type: 'minion', cost: 4, rarity: 'basic', attack: 5, health: 4, faction: 'neutral', text: '<b>Flying</b>' },
  { id: 11040, name: 'Alter Rexx', set: 'core', type: 'minion', race: 'mech', cost: 5, rarity: 'legendary', attack: 4, health: 4, faction: 'neutral', text: 'Whenever you summon MECHAZ0R, put a MECHAZ0R in your action bar.' },
  { id: 10983, name: 'Ash Mephyt', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Summon two copies of this minion on random spaces.' },
  { id: 11054, name: 'Beastmaster', set: 'shimzar', type: 'minion', cost: 5, rarity: 'rare', attack: 2, health: 5, faction: 'neutral', text: '<b>Frenzy</b>, <b>Celerity</b>' },
  { id: 10204, name: 'Brightmoss Golem', set: 'core', type: 'minion', race: 'golem', cost: 5, rarity: 'basic', attack: 4, health: 9, faction: 'neutral', text: '' },
  { id: 11063, name: 'Calculator', set: 'shimzar', type: 'minion', cost: 5, rarity: 'epic', attack: 1, health: 1, faction: 'neutral', text: '<b>Opening Gambit</b>: Gain the combined Attack and Health of all Battle Pets in your action bar.' },
  { id: 11042, name: 'Chakkram', set: 'core', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 5, faction: 'neutral', text: 'Costs 2 less if your General took damage on your opponent\'s last turn.' },
  { id: 10958, name: 'Dagger Kiri', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 8, faction: 'neutral', text: '<b>Celerity</b>' },
  { id: 10959, name: 'Dancing Blades', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 4, health: 6, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 3 damage to ANY minion in front of this.' },
  { id: 11048, name: 'Envybaer', set: 'core', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 7, faction: 'neutral', text: 'Whenever this minion damages an enemy, teleport that enemy to a random unoccupied corner.' },
  { id: 19028, name: 'Fireblazer', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 5, health: 5, faction: 'neutral', text: '<b>Provoke</b>' },
  { id: 11011, name: 'Firestarter', set: 'core', type: 'minion', race: 'arcanyst', cost: 5, rarity: 'rare', attack: 3, health: 5, faction: 'neutral', text: 'Whenever you cast a spell, summon a 1/1 Spellspark with <b>Rush</b> on a random nearby space.' },
  { id: 11034, name: 'Golden Justicar', set: 'core', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 6, faction: 'neutral', text: '<b>Provoke</b><br> Your other minions with <b>Provoke</b> can move two additional spaces.' },
  { id: 11049, name: 'Grincher', set: 'core', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a random artifact into your action bar. It costs 2 less.' },
  { id: 11024, name: 'Hollow Grovekeeper', set: 'core', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Destroy ANY nearby minion with Provoke or Frenzy. If you do, this minion gains Provoke and Frenzy.' },
  { id: 11064, name: 'Inquisitor Kron', set: 'shimzar', type: 'minion', cost: 5, rarity: 'legendary', attack: 4, health: 4, faction: 'neutral', text: '<b>Provoke</b><br> Whenever you replace a card, summon a 2/2 Prisoner with a random ability nearby.' },
  { id: 11085, name: 'Ironclad', set: 'core', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 3, faction: 'neutral', text: '<b>Dying Wish:</b> Dispell all enemy minions.' },
  { id: 11018, name: 'Keeper of the Vale', set: 'core', type: 'minion', cost: 5, rarity: 'legendary', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Summon a random non-token friendly minion destroyed this game nearby.' },
  { id: 10973, name: 'Lux Ignis', set: 'core', type: 'minion', cost: 5, rarity: 'epic', attack: 2, health: 5, faction: 'neutral', text: '<b>Ranged</b><br> At the end of your turn, restore 2 Health to all nearby friendly minions.' },
  { id: 11031, name: 'Necroseer', set: 'core', type: 'minion', cost: 5, rarity: 'basic', attack: 5, health: 4, faction: 'neutral', text: '<b>Dying Wish</b>: Draw a card.' },
  { id: 11060, name: 'Rawr', set: 'shimzar', type: 'minion', race: 'battle pet', cost: 5, rarity: 'legendary', attack: 3, health: 7, faction: 'neutral', text: 'Whenever this minion takes damage, summon a random Battle Pet nearby.' },
  { id: 19032, name: 'Rogue Warden', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 4, health: 3, faction: 'neutral', text: '<b>Ranged</b>' },
  { id: 11030, name: 'Sunset Paragon', set: 'core', type: 'minion', cost: 5, rarity: 'epic', attack: 3, health: 2, faction: 'neutral', text: '<b>Opening Gambit</b>: ALL nearby minions deal damage to themselves equal to their Attack.' },
  { id: 10955, name: 'Sworn Defender', set: 'core', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 7, faction: 'neutral', text: 'Whenever your General takes damage, restore this minion to full Health.' },
  { id: 10985, name: 'The High Hand', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 2, health: 3, faction: 'neutral', text: '<b>Opening Gambit</b>: Gains +1/+1 for each card in your opponent\'s action bar.' },
  { id: 10022, name: 'Twilight Sorcerer', set: 'core', type: 'minion', cost: 5, rarity: 'epic', attack: 3, health: 6, faction: 'neutral', text: '<b>Opening Gambit</b>: Put a copy of a random spell you cast this game into your action bar.' },
  { id: 19043, name: 'Archon Spellbinder', set: 'core', type: 'minion', race: 'arcanyst', cost: 6, rarity: 'legendary', attack: 7, health: 7, faction: 'neutral', text: `Your opponent's non-Bloodborn spells cost 1 more to cast.` },
  { id: 11032, name: 'Bloodletter', set: 'core', type: 'minion', cost: 6, rarity: 'basic', attack: 4, health: 6, faction: 'neutral', text: 'Deals double damage to Generals.' },
  { id: 11023, name: 'Bonereaper', set: 'core', type: 'minion', cost: 6, rarity: 'epic', attack: 2, health: 9, faction: 'neutral', text: '<b>Provoke</b><br> At the end of your turn, deal 2 damage to all nearby enemy minions.' },
  { id: 10980, name: 'Deathblighter', set: 'core', type: 'minion', cost: 6, rarity: 'common', attack: 3, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Deal 3 damage to all enemy minions around it.' },
  { id: 11037, name: 'Diamond Golem', set: 'core', type: 'minion', race: 'golem', cost: 6, rarity: 'common', attack: 4, health: 11, faction: 'neutral', text: '' },
  { id: 11082, name: 'Dust Wailer', set: 'core', type: 'minion', cost: 6, rarity: 'rare', attack: 3, health: 4, faction: 'neutral', text: '<b>Flying</b><br> <b>Opening Gambit:</b> Deal 3 damage to all enemies in front of this.' },
  { id: 10986, name: 'Eclipse', set: 'core', type: 'minion', race: 'arcanyst', cost: 6, rarity: 'legendary', attack: 3, health: 7, faction: 'neutral', text: 'Whenever this minion takes damage, it deals that much damage to the enemy General.' },
  { id: 10984, name: 'First Sword of Akrane', set: 'core', type: 'minion', cost: 6, rarity: 'common', attack: 7, health: 7, faction: 'neutral', text: 'Your other minions have +1 Attack.' },
  { id: 11077, name: 'Grove Lion', set: 'core', type: 'minion', cost: 6, rarity: 'epic', attack: 5, health: 5, faction: 'neutral', text: 'While this minion is on the battlefield, your General has <b>Forcefield</b>.' },
  { id: 10963, name: 'Jax Truesight', set: 'core', type: 'minion', cost: 6, rarity: 'legendary', attack: 1, health: 1, faction: 'neutral', text: '<b>Ranged</b><br> <b>Opening Gambit</b>: Summon a 1/1 Ranged Mini-Jax in each unoccupied corner.' },
  { id: 11081, name: 'Quartermaster Gauj', set: 'core', type: 'minion', cost: 6, rarity: 'legendary', attack: 5, health: 2, faction: 'neutral', text: 'Takes no damage from minions or generals.' },
  { id: 11045, name: 'Ruby Rifter', set: 'core', type: 'minion', cost: 6, rarity: 'legendary', attack: 4, health: 6, faction: 'neutral', text: 'Whenever your General takes damage, give this minion +2 Attack and draw a card.' },
  { id: 10307, name: 'Serpenti', set: 'core', type: 'minion', cost: 6, rarity: 'common', attack: 7, health: 4, faction: 'neutral', text: '<b>Frenzy</b>' },
  { id: 11055, name: 'Silverbeak', set: 'shimzar', type: 'minion', cost: 6, rarity: 'common', attack: 6, health: 9, faction: 'neutral', text: '' },
  { id: 19035, name: 'Storm Aratha', set: 'core', type: 'minion', cost: 6, rarity: 'common', attack: 6, health: 5, faction: 'neutral', text: '<b>Flying</b>' },
  { id: 10207, name: 'Stormmetal Golem', set: 'core', type: 'minion', race: 'golem', cost: 6, rarity: 'basic', attack: 8, health: 8, faction: 'neutral', text: '' },
  { id: 11047, name: 'The Scientist', set: 'core', type: 'minion', cost: 6, rarity: 'epic', attack: 6, health: 6, faction: 'neutral', text: 'Whenever you cast a spell that targets a friendly minion, draw a card.' },
  { id: 10994, name: `Zen'Rui, The BlightSpawned`, set: 'core', type: 'minion', cost: 6, rarity: 'legendary', attack: 4, health: 4, faction: 'neutral', text: '<b>Opening Gambit</b>: Take control of a nearby enemy minion with 2 or less Attack.' },
  { id: 11021, name: 'Astral Crusader', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 6, faction: 'neutral', text: 'Whenever you replace this card, it costs 1 less and gains +1/+1.' },
  { id: 19046, name: 'Dark Nemesis', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 4, health: 10, faction: 'neutral', text: 'At the start of your turn, deal 4 damage to the enemy General and this minion gains +4 Attack.' },
  { id: 10206, name: 'Dragonbone Golem', set: 'core', type: 'minion', race: 'golem', cost: 7, rarity: 'basic', attack: 10, health: 10, faction: 'neutral', text: '' },
  { id: 11029, name: `E'Xun`, set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 5, faction: 'neutral', text: '<b>Forcefield</b><br> Whenever this minion attacks or is attacked, draw a card.' },
  { id: 11010, name: 'Grailmaster', set: 'core', type: 'minion', cost: 7, rarity: 'epic', attack: 6, health: 6, faction: 'neutral', text: 'Whenever you summon a minion, this minion gains a random keyword ability.' },
  { id: null, name: 'Meltdown', set: 'bloodborn', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'neutral', text: '<b>Blood Surge:</b> Deal 7 damage to a random enemy.' },
  { id: 10997, name: 'Paddo', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 12, health: 6, faction: 'neutral', text: '<b>Airdrop</b><br> <b>Opening Gambit</b>: Push ALL nearby minions and Generals to random spaces on the battlefield.' },
  { id: 10966, name: 'Pandora', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 3, health: 10, faction: 'neutral', text: 'At the end of your turn, summon a 3/3 Spirit Wolf with a random ability on a nearby space.' },
  { id: 10956, name: 'Red Synja', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 7, health: 7, faction: 'neutral', text: 'Whenever your General takes damage, deal 7 damage to a random nearby enemy minion.' },
  { id: 10990, name: 'Rook', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 5, faction: 'neutral', text: 'At the end of your turn, this minion gains a random Faction ability.' },
  { id: 11026, name: 'War Talon', set: 'core', type: 'minion', cost: 7, rarity: 'common', attack: 4, health: 9, faction: 'neutral', text: '<b>Frenzy</b>, <b>Provoke</b>' },
  { id: 19036, name: 'Whistling Blade', set: 'core', type: 'minion', cost: 7, rarity: 'common', attack: 2, health: 15, faction: 'neutral', text: '<b>Provoke</b>' },
  { id: 10996, name: 'Zurael, the Lifegiver', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 4, health: 7, faction: 'neutral', text: '<b>Opening Gambit</b>: Summon all non-token friendly minions destroyed on your opponent\'s last turn on random spaces.' },
  { id: 11013, name: 'Khymera', set: 'core', type: 'minion', cost: 8, rarity: 'legendary', attack: 5, health: 12, faction: 'neutral', text: 'Whenever this minion takes damage, summon a random token minion nearby.' },
  { id: 11044, name: 'Blood Taura', set: 'core', type: 'minion', cost: 25, rarity: 'epic', attack: 12, health: 12, faction: 'neutral', text: `<b>Provoke</b><br> This minion's cost is equal to your General's Health.` },
]

export default neutral
