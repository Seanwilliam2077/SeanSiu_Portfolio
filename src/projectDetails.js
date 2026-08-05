/* Detail pages data, migrated from the original Wix portfolio.
   Gallery images are hot-linked from Wix media CDN as placeholders —
   swap URLs (or point to local files in ./assets) when HD versions are ready. */

const wix = id => `https://static.wixstatic.com/media/${id}/v1/fit/w_1000,h_1000,q_80/img.png`;

const projectDetails = {
  "wolf-soga": {
    title: "Wolf Soga",
    meta: [
      "Type: 3D ARPG",
      "Engine: Unreal",
      "Platform: PC",
      "Dev Time: 2 Months",
      "Team: 5 (4 artists + 1 programmer)"
    ],
    roles: ["Programmer", "UI Interact", "VFX", "Animation", "Prototype", "PlayTest"],
    intro:
      "This project is a team project of 5 people in total. I developed this game together with 4 3D artists. It is an ARPG where the player fights monsters and explores the world. I was the solo programmer on the team.",
    video: {type: "vimeo", id: "1111774512"},
    sections: [
      {
        heading: "Core Systems (Dev as Programmer)",
        bullets: [
          "Third-person combat system — dodge, run, melee attack, magic attack, parry, falling down, respawn",
          "Enemy behavior system — melee attack, range attack, magic attack, final BOSS battle",
          "Item system — player level up (HP & attack), random items in level to pick up",
          "UI system — tutorial hints and interactive UI"
        ]
      },
      {
        heading: "Character Functions",
        body: "Scan switch world, heal, death/respawn, stance change between sword and magic, HUD display, magic spell, melee attack, block and parry, dodge, falling damage, level system, interact system."
      },
      {
        heading: "Enemy Logic — Four Enemy Types on an AI Controller Base",
        bullets: [
          "Melee enemy — 4 attack functions: 20s-cooldown spinning attack, smash, long-range jump attack and short-range thunder. Patrols or stands guard, picks up its weapon, closes to attack range and stays focused on the player.",
          "Range enemy — shoots when the player is in range and finds cover when health drops under 30%.",
          "Magic enemy — 5 attack functions: basic magic shot, close-range thunder, multiple random shots around the player, teleport-hide, self-heal under 30%.",
          "BOSS — 9 attack functions: 50s-cooldown ultimate, teleport axe throw, 20% chance jump attack by range, quick attacks in close range, teleport attack at distance, and 4 melee combo patterns."
        ]
      },
      {
        heading: "Item & Level Logic",
        body: "Teleport spawn enemy, door opens under condition, scan to show hidden road, FX functions, checkpoint respawn, key for door, HP pickups, enemy lock-on, platform movement, scannable items, UI system."
      }
    ],
    gallery: [
      "29049e_85ba48946368470d8edf3c2e266c9500~mv2.png",
      "29049e_ebb82a4e1f014d27b9dd78d52c2f0148~mv2.png",
      "29049e_7749d561da1447829284d06ef32ddbc5~mv2.png",
      "29049e_bc6238e4478947da90f693cf4ffdbc2c~mv2.png",
      "29049e_710d5f0a42eb45b692129316a00ca436~mv2.png",
      "29049e_67a35f60562f438a8e889f6ac39ddf19~mv2.png",
      "29049e_12f89d9681534d7b9ad815080e69cd96~mv2.png",
      "29049e_2dad878110f94e5cb4c44f7c6d4610e4~mv2.png",
      "29049e_52f13768658c4858bd27fa553bc64fab~mv2.png",
      "29049e_894e18d710f743b1998791898e138ad6~mv2.png",
      "29049e_33e2fb399fa74dd2b38359169f486014~mv2.png",
      "29049e_dec790e80fc54d56b712182ffe1377b1~mv2.png",
      "29049e_d3b6b138b7414f0e93bb9cbf4ca58093~mv2.png",
      "29049e_6ad5c983d4b344a38ca40aeb7f5a76eb~mv2.png",
      "29049e_a5cdeb7df08540028f8b1352c01d5902~mv2.png",
      "29049e_800da694577e4888ac36a55f96a6877e~mv2.png",
      "29049e_975dfef163f44827a730718eda84f8b9~mv2.png",
      "29049e_e998fafebe9045e78241746b24384406~mv2.png",
      "29049e_a887d177749f4906bda135d4c42771ab~mv2.png",
      "29049e_787f5d57a14a4279960697bff71d29b2~mv2.png",
      "29049e_49d4f2498d7f4e279922904ce28e0634~mv2.png",
      "29049e_030e3a9febd946e5b336fc345fdaa273~mv2.png",
      "29049e_4de04c3addd441c59f02f7f61e9e1331~mv2.png",
      "29049e_402c1852c3c64eb3bab1e10644094c7a~mv2.png",
      "29049e_da7219d104524448a1b07c94010a4e45~mv2.png",
      "29049e_0049e99924df4afc85ae9f0fcbd0a0b8~mv2.png",
      "29049e_bdafff8b5cd44c198e8c8bd167fb5874~mv2.png",
      "29049e_9698359f38c74d72aa114b0112f566e2~mv2.png",
      "29049e_411f9cc8384c4cfdb34a5f2192ef59fa~mv2.png",
      "29049e_f7deddd7a41a490a99c7e8e4cbf6faf3~mv2.png",
      "29049e_10662d95c265447ea457cbb12bba8970~mv2.png",
      "29049e_a9d5978ca8604d83b8bf71d49ea4be9f~mv2.png",
      "29049e_7f509531ad7948aa8de1a764077d44a6~mv2.png",
      "29049e_07ea27f604b64778a9fd4e2d2df288b6~mv2.png",
      "29049e_48ee871888a84016987a2cf457ed2df1~mv2.png",
      "29049e_d0a9d728bcac4005a4bb742e8a3a7501~mv2.png"
    ].map(wix)
  },

  "rpg-parkour-system": {
    title: "RPG Parkour System",
    meta: [
      "Type: 3D RPG Parkour",
      "Engine: Unreal",
      "Dev Time: 2 Months",
      "Team: Solo"
    ],
    roles: ["Programmer", "Animation", "Prototype", "PlayTest"],
    intro:
      "Built a parkour system in Unreal for ARPG and used all the mechanics to build up a playable level.",
    video: {type: "vimeo", id: "1110810152"},
    sections: [
      {
        heading: "Movement Functions (Blueprint)",
        bullets: [
          "Slide — perform a slide when descending a slope to maintain momentum; slide under a certain height, auto-crouch under ceilings",
          "Vault / Mantle — jump over obstacles below a height threshold; climb over obstacles below a height threshold",
          "Beam — automatically move along a spline path inside a trigger volume; the player can jump off at any time",
          "Grab Edge — grab and move along wall edges; animations adapt to wall spacing; jump between edges by holding Jump",
          "Cover — enter cover and move along the wall based on wall height; jump between walls when a gap is detected",
          "Wall run & climb & slide — run along walls slowly losing height; scale vertical walls by holding the climb key; slide after a threshold",
          "Dodge / Sprint — quick evasive movement to avoid attacks; sprint to run much faster"
        ]
      },
      {
        heading: "AI Enemy & NPC Dialogue",
        bullets: [
          "Enemies move in patrol and can see / hear / hurt the player",
          "Initiate conversation with NPCs and choose from multiple dialogue options"
        ]
      }
    ],
    gallery: [
      "29049e_cd901c9b091442429d7e66ec09631f68~mv2.png",
      "29049e_c7550af672cf46deb856263d8617716a~mv2.png",
      "29049e_ae9215275ad140a482e4d778010d19ea~mv2.png",
      "29049e_26277a5e1c0a4ee19fa938463f734dd5~mv2.png",
      "29049e_5086968ad2b64555854fc6abac859560~mv2.png",
      "29049e_df524253eecd46d69b072f5a17fdc053~mv2.png",
      "29049e_de834235fe084f90a6221f176a783e26~mv2.png",
      "29049e_468a5e35a5ce425b8f58855b9e4e9ef7~mv2.png",
      "29049e_92b3fb61609d4383a174f1d984ee729a~mv2.png",
      "29049e_465ef729dac74083a3a05090e921fdb1~mv2.png",
      "29049e_0c0d493c670b4d9880f9f1bcfafeb833~mv2.png",
      "29049e_21d1bb9c84684caeb2c97eb46d51f97d~mv2.png",
      "29049e_d2a1f297672746a2825ac2d08f0b519d~mv2.png"
    ].map(wix)
  },

  "city-of-sorrow": {
    title: "City Of Sorrow",
    meta: [
      "Type: 3D ARPG",
      "Engine: Unity (C#)",
      "Platform: PC",
      "Dev Time: 3 Months",
      "Team: Solo"
    ],
    roles: ["Programmer", "Level Layout", "Storytelling", "Animation", "Prototype", "PlayTest"],
    intro:
      "City of Sorrow is a 3D action role-playing game set in a mysterious medieval fantasy world. Players take on the role of a brave adventurer with a heavy responsibility: to step forward and save the castle shrouded by dark forces. All art assets and animations are online resources — everything else is built solo.",
    video: {type: "vimeo", id: "1111780483"},
    sections: [
      {
        heading: "NPC & Story",
        body: "An NPC at the beginning of the level tells the player the story of the castle and gives basic instructions. When the player defeats the final BOSS, the air wall to the Duke's room is disabled and the Duke congratulates the player on saving the castle; the scene then automatically jumps to the ending."
      },
      {
        heading: "Enemy Design — 12 Monster Types",
        body: "Difficulty increases with the level. Sizes range from knee-high minions to huge monsters, placed across the level so they sometimes appear in unexpected places. Archers stand and attack from a distance; each melee monster has tap and continuous attacks triggered randomly; elite monsters (like the one on the watchtower) mix ranged and melee attacks depending on distance. Movement also varies — some stand or hide in corners, others pathfind within an area."
      },
      {
        heading: "Level Scripting",
        body: "Triggers pop up level names as the player passes checkpoints. The shortcut elevator shows as unavailable the first time the player touches it and only unlocks after opening another lift higher up. Checkpoints and respawn flow are scripted throughout the castle."
      },
      {
        heading: "Summary",
        body: "This was the first game I made. From the initial confusion of a complex game engine to wiring animation controllers, optimizing character movement, and debugging C# — monsters whose arrows missed, monsters that kept following after death, inaccurate attack pathfinding — I fixed them one after another. In this project I learned engine workflow, scene construction, lighting, character animation, modeling, rigging, scene transitions and C#. I shared every bit of progress with friends; developing this game brought me infinite fun."
      }
    ],
    gallery: [
      "29049e_f9e603b5640c40ad86ec3b72b5edd0c1~mv2.png",
      "29049e_c73a549f74964078bb9644e7b35a412d~mv2.png",
      "29049e_7e8d2c3239a541268fdc8261fe6dbf44~mv2.png",
      "29049e_01a0a6477cb44e59bc7dd01f315e569a~mv2.png",
      "29049e_67a45cbd9a8640e6b5d7c6648af7afd9~mv2.png",
      "29049e_38cf0917ab084d348a076e45482a091e~mv2.jpg",
      "29049e_f4ad599c95f847b8b47101c08ee2face~mv2.png",
      "29049e_2e170d7b0b1e4c029796ab0f65997ba4~mv2.png",
      "29049e_2d8b09bf4ee649298f65fd26f1f8bb78~mv2.png",
      "29049e_eb3a3cb2688c49fd8c7db2aa29e054bd~mv2.png",
      "29049e_760cf8dafd304135a878428d3074370b~mv2.png",
      "29049e_edc75a98815041fb9c1977c1cbb4dc9d~mv2.png",
      "29049e_799d9544181c4795a69b68bc6b040490~mv2.png",
      "29049e_421e54b7242942ceb433060d832e4f58~mv2.jpg",
      "29049e_a83ff3745d054e5e9bf78bc2395321af~mv2.jpg",
      "29049e_8db619e6074944bab6c58c2fef4972e0~mv2.png",
      "29049e_2e1de090151e444dade2b455048166e9~mv2.png",
      "29049e_40b52bddb9a84550a6891b04f230b558~mv2.png",
      "29049e_82c10d2808034d1e962435d04af46234~mv2.png",
      "29049e_8d9b4d2df5cb4de9933ff248e6578df2~mv2.png",
      "29049e_04370a4422c246a88485d2a8bc9510fa~mv2.png",
      "29049e_660d12e184bd4cbe808dc20377d33e4c~mv2.png",
      "29049e_b279e955d5994819adb03d07322f5f78~mv2.png",
      "29049e_db39cb3f709642f68a8e32e5886397a2~mv2.png",
      "29049e_5a7fb4fc8cad448abd5bf9950e1745d5~mv2.png",
      "29049e_f859756e448b4ccf928ba0a25bba0a58~mv2.png",
      "29049e_ed1eac542fc74cab8e973812ddc9aa28~mv2.png",
      "29049e_fdd8b54146144e60aa34e5f5273355ef~mv2.png",
      "29049e_d6572aa1b51b48528801f7f0f9ca3ca7~mv2.png",
      "29049e_2ea31f1d3f26432797bfcb3412c39337~mv2.png",
      "29049e_87ce5c89a27e457fbe4d8f2835e87217~mv2.png",
      "29049e_2d839c7c4b23499186d7246954e426ee~mv2.png",
      "29049e_6b0f7a2553d2400899f7f0ef464cf1a0~mv2.png",
      "29049e_829bce16059947418f0603090c9bc7be~mv2.png",
      "29049e_24bf89566cf044478f1953734167a4c7~mv2.png",
      "29049e_794cb30553fa4ec29fbb73bc2a58f2a1~mv2.png",
      "29049e_2cb1738d712d4f2c8cff18f2b7579991~mv2.png",
      "29049e_1d7152b15a724fbdade937b1ba55269c~mv2.png",
      "29049e_d1edbc8c1f8f42359c2fce4cd8243ac9~mv2.png",
      "29049e_095c7141cf2c4b65be56577bf880de4b~mv2.png"
    ].map(wix)
  },

  "let-me-out": {
    title: "Let Me Out",
    meta: [
      "Type: 2D Puzzle (text deciphering)",
      "Engine: Unity",
      "Dev Time: 2 Days — Global Game Jam 2024",
      "Team: 3 People"
    ],
    roles: ["Producer", "Programmer", "Level Layout", "Storytelling", "Animation", "Communicate"],
    intro:
      "Let Me Out is a 2D text-deciphering game made in 48 hours for Global Game Jam 2024. The jam theme was Make Us Laugh — we adopted a pixel style and told a funny story set in a hospital ward through text riddles.",
    video: {type: "vimeo", id: "1111777397"},
    sections: [
      {
        heading: "What I Did",
        bullets: [
          "Producer — scoped the 48-hour plan and kept the 3-person team in sync",
          "Programmer — dialogue/riddle scripting, scene flow and endings",
          "Level layout, storytelling and animation for the ward scenes"
        ]
      }
    ],
    gallery: [
      "29049e_595b164898b94115ae9b964d83b8271f~mv2.png",
      "29049e_ae5fb6d61f164f0e885fcb3d3cf07be7~mv2.png",
      "29049e_4fe35a01c33a4a4c9db1c3a9deeb8c70~mv2.png",
      "29049e_98292412549a445f9a039e00262b18a3~mv2.png",
      "29049e_c807f57499df437eabded92867aaa0d1~mv2.jpg",
      "29049e_ac504646d16d4e3aa381fa8325077143~mv2.png",
      "29049e_3015640d69d9496f8605a6740ab114fe~mv2.png",
      "29049e_c3a319889af8416a9ae39c83210aabe6~mv2.png",
      "29049e_f05c05139d794ad79390525a480978c4~mv2.png",
      "29049e_98c969e2cdd14280bb1ee67bbc07691c~mv2.png",
      "29049e_e3a6ce81c4d445b19db9510694670d79~mv2.png",
      "29049e_bb912c0f9c3249f3a2d828e446707f70~mv2.png",
      "29049e_e7986b4624e14dddbfb89fecd00aab27~mv2.png",
      "29049e_45039d7d0f704cafb2c17184879437f1~mv2.png",
      "29049e_b814b8fbe9f9414e896327dad5e5f526~mv2.png",
      "29049e_b202bd5fe221407a90c9bd616f2c84da~mv2.png"
    ].map(wix)
  },

  "roi-journey": {
    title: "ROI Journey",
    meta: [
      "Type: 2D Platformer",
      "Engine: Unity",
      "Platform: PC",
      "Dev Time: 3 Months",
      "Team: Solo"
    ],
    roles: ["Programmer", "2D Art", "Graphic Design", "Story & Environment Design"],
    intro:
      "ROI Journey is a 2D platformer focused on exploration and emotional expression. Players take on the role of a boy named Roi who, after enduring a tragic childhood, embarks on a journey towards the city — a story filled with revelation and healing.",
    video: {
      type: "mp4",
      src: "https://video.wixstatic.com/video/29049e_c95801204e1c4d639ca2a89dbdb7e5f7/1080p/mp4/file.mp4"
    },
    sections: [
      {
        heading: "Environment Story — Five Scenes",
        bullets: [
          "Scene 1 — Roi's lonely life as a left-behind child: a black forest portrays his helpless dark life, with white as background to highlight his shadow.",
          "Scene 2 — A ruined sky city: Roi bids farewell to his reflection in the water and navigates crumbling rubble where one careless step means falling into the abyss.",
          "Scene 3 — The desert: down the steep slope of Sky City, even the sun is barely visible in the sand; Roi feels the vastness of the world and his own insignificance, but keeps moving forward.",
          "Scene 4 — A colorful jungle: the tone shifts from decay to beauty; Roi meets a squirrel — his first friend — and his heart opens.",
          "Scene 5 — A colorful city: Roi falls and loses his friend, but having grown, he chooses to move forward alone. At the other side the goddess of Victory holds flowers for him, and Roi realizes the meaning of life."
        ]
      }
    ],
    gallery: [
      "29049e_4af4eea517fa4c24bfeaf6d439046e52~mv2.jpg",
      "29049e_6f3593b0be3b46858ba736d02af7cbc3~mv2.jpg",
      "29049e_3417bfb330904727bb643eb6c032565c~mv2.jpg",
      "29049e_58eaff84837548c28b3d3b438782fa69~mv2.jpg",
      "29049e_e8e247916c9e4081978ca364c13874f9~mv2.png",
      "29049e_f30c2969a9d346a99e56dd55995fc028~mv2.png",
      "29049e_5b2dc4912da9404489ac7555db84b071~mv2.png",
      "29049e_82d21e1f3e8443c7bc8a20d2d0a0839c~mv2.png",
      "29049e_e9d25d98eac040eb965b1edaa5065efe~mv2.png",
      "29049e_a61c8cbb38f0420a843b21e04e09f5d6~mv2.jpg",
      "29049e_570954b6650a40cca892d0eaeed7b31a~mv2.png",
      "29049e_b136ac96af38421eb9db943672c2d71d~mv2.png",
      "29049e_5c33ac51be9749fcadf46a54bdca0f30~mv2.png",
      "29049e_1fc5806464b34d218fd14e147f397e01~mv2.png",
      "29049e_1e0cd6f72b4c478cb8272cee2cbcf918~mv2.png",
      "29049e_3c21f66f725443ff89a5715ab7b2d200~mv2.png",
      "29049e_29cb4a7dc2804457bdda93af7a960826~mv2.png",
      "29049e_c57dd680a30f425da013dce91ae173f6~mv2.png",
      "29049e_6b6f9d54cde841a7b9481eea3f7c116c~mv2.png",
      "29049e_90c8a78e6f3343a58c9f55078a2987d8~mv2.png",
      "29049e_3e9d717f531e4893892ef7df17d4d38e~mv2.png",
      "29049e_b1e2c3a0cbf940dd8d4609035dbc4041~mv2.png"
    ].map(wix)
  },

  "cyber-shoot-vr": {
    title: "Cyber Shoot (VR)",
    meta: [
      "Type: VR FPS",
      "Engine: Unity",
      "Platform: Meta Quest 3",
      "Dev Time: 2 Weeks (ongoing)",
      "Team: Solo"
    ],
    roles: ["Programmer", "Design"],
    intro:
      "Cyber Shoot is a VR FPS set in the future: after humans build highly developed robots and begin to indulge in fun, the player accidentally discovers the robots will attack humans — and chooses to fight to save the world. The game is full of science fiction and exciting combat.",
    video: {
      type: "mp4",
      src: "https://video.wixstatic.com/video/29049e_ce09018aceef4d0a97830b2db4640750/720p/mp4/file.mp4"
    },
    sections: [
      {
        heading: "Bullet Time",
        body: "The player can turn on Bullet Time to grab a bullet fired by the enemy mid-air, or quickly dodge it. The Bullet Time skill cooldown is shown in the orange circle on the right hand."
      },
      {
        heading: "Summary",
        body: "VR gaming was a whole new challenge — I didn't even own a decent VR device before. After purchasing a Meta Quest 3 I was surprised how different VR feels from traditional games, and began studying how to make one. Developer mode annoyed me for a long time (I was in a country where the headset couldn't connect to the internet), and I tried many ways to import the Unity game into the headset. Development continues."
      }
    ],
    gallery: [
      "29049e_347dcaf5fc464ea39358d49654717d85~mv2.png",
      "29049e_3ef380ba34874393bca2a499c625d428~mv2.png",
      "29049e_4ef19295da354284bc27ae795b271db7~mv2.png",
      "29049e_1038462772c74bc7a3ac49e61bce14c8~mv2.png",
      "29049e_2786e34cf2b34f0d9a8f8a171e71ab2e~mv2.jpg",
      "29049e_16eff39a468447c388ebb529db42ceb7~mv2.jpg",
      "29049e_c70d51353ce74ef3b66e8f6469cfc28a~mv2.png",
      "29049e_5df1bbeaa12f491ba978aa2a2f5d99cd~mv2.png",
      "29049e_d2af105e6ef04b6daedb4f3d5d7f6d96~mv2.gif",
      "29049e_00fbecb95e6a4a7b81e67c3fd5b98b06~mv2.webp"
    ].map(wix)
  },

  gobuzz: {
    title: "GoBuzz — Location-Based Social App",
    meta: [
      "Type: Mobile Social App",
      "Stack: Flutter · FastAPI · Google Cloud",
      "Platform: Android",
      "Team: 5 people",
      "Event: Google AI Vibeathon (entry #263)",
      "Status: Working demo"
    ],
    intro:
      "GoBuzz helps international students and newcomers — people who feel alone in a crowded, unfamiliar city — find nearby people who share their niche interests. Instead of real-name, always-online matching, it uses anonymous location-based matching to gather people around shared interests, and asynchronous message drops so company does not depend on both sides being online at the same time.",
    video: {type: "youtube", id: "ZHFhkxaPVQo", portrait: true},
    externalLinks: [
      {
        name: "GitHub Repository",
        url: "https://github.com/GuGuYou/GoogleConnectTheWorld"
      },
      {
        name: "Demo APK (Releases)",
        url: "https://github.com/GuGuYou/GoogleConnectTheWorld/releases"
      }
    ],
    sections: [
      {
        heading: "Core Features",
        bullets: [
          "HiveScene — anonymous location-based matching that clusters nearby people with shared interest tags into an enterable space",
          "Nearby map — Google Maps rendering of nearby users, activity pins and message bubbles",
          "Asynchronous message drops — leave and receive messages without both users being online",
          "Multiplayer rooms — voice rooms, draw-and-guess, game rooms, cinema and music bar"
        ]
      },
      {
        heading: "Google Technology",
        bullets: [
          "Google Maps Platform (google_maps_flutter) — map rendering and the location layer the whole matching experience is built on",
          "Vertex AI Gemini (gemini-2.5-flash-image) — image-to-image generation that turns a reference photo into a consistent 2D anime-style avatar",
          "Google Cloud — service-account / ADC authentication with the backend deployable to Cloud Run",
          "Google Fonts — dynamic brand typography for the cyber-neon visual style"
        ]
      },
      {
        heading: "Security Architecture",
        body:
          "Rather than hardcoding an API key in the client — the common shortcut that leaks credentials and invites quota abuse — Google Cloud credentials live only in the FastAPI backend. The client calls Vertex AI Gemini through that backend proxy, which also enforces a daily quota. The client touches zero Google credentials."
      },
      {
        heading: "Product Design",
        body:
          "The design bet is that anonymity plus niche interest tags lowers the social pressure of real-name apps, while location keeps matches physically nearby. Asynchronous messages solve the timing problem that live-matching apps ignore: the people who understand your niche interests are rarely online at the same moment you feel alone."
      },
      {
        heading: "User Research",
        body:
          "Around 10 international students in the US logged into the GoBuzz prototype and gave feedback on the core problem — building a social circle after moving to an unfamiliar city, and finding people who share niche interests. Representative feedback: the ability to find like-minded people nearby without exposing a real identity resonated most. Sample size is small and concentrated in the team's reachable network, so broader validation is still open."
      }
    ]
  },

  "vortex-gaussians": {
    title: "Vortex Gaussians",
    meta: [
      "Type: Research System",
      "Topic: 3D Gaussian Splatting · Fluid Simulation",
      "Tech: WebGL2 · GLSL · single-file prototype",
      "Performance: 8.9 ms/frame (112 FPS)",
      "Status: Preprint under review"
    ],
    roles: [
      "Real-Time Rendering",
      "Physical Simulation",
      "Differentiable/Point-Based Graphics",
      "Systems & Benchmarking"
    ],
    intro:
      "Fire and smoke have been missing from Gaussian-splatting scenes: physics-integrated GS handles solids and liquids, GS fire methods only reconstruct flames that were filmed, and the one system that simulates new fire ray-marches volumes over an opaque backdrop at seconds per frame. Vortex Gaussians is the first system to generate fire and smoke by forward physical simulation in real time and render them as native Gaussian-splatting content.",
    video: {
      type: "mp4",
      src: "/research-videos/vortex_gaussians_supplemental.mp4"
    },
    externalLinks: [
      {
        name: "Live Demo & Project Page",
        url: "https://seanwilliam2077.github.io/VortexGaussians/"
      },
      {name: "Code", url: "https://github.com/Seanwilliam2077/VortexGaussians"}
    ],
    sections: [
      {
        heading: "Key insight — one particle set, zero conversion",
        body:
          "Lagrangian vortex particles and 3D Gaussians are the same class of point primitive. A single particle set serves simultaneously as simulation state and render primitive: position becomes the Gaussian mean, temperature becomes emissive blackbody color, density becomes opacity, and the velocity gradient becomes the anisotropic covariance. There is no voxelization, no meshing and no simulation-to-renderer conversion anywhere in the pipeline."
      },
      {
        heading: "Simulation — pressure-free layered vortex-in-cell",
        bullets: [
          "A coarse global vortex solver drives N per-slice 2D vortex-in-cell simulations in a two-level, pressure-free formulation.",
          "A new bidirectional inter-slice vorticity-coupling operator exchanges vorticity across adjacent slices, restoring the out-of-plane transport that naive 2D stacking discards.",
          "Interactive control at runtime: in-scene ignition, wind and coupling strength."
        ]
      },
      {
        heading: "Rendering — correct mutual occlusion",
        body:
          "One depth-sorted emission-absorption rasterizer composites flame, smoke, embers and reconstructed 3DGS scenes together. Because the fire's Gaussians share one global depth order and one blend state with the environment, a foreground scene object correctly occludes the flame and the flame occludes the scene behind it — instead of being composited over an opaque backdrop."
      },
      {
        heading: "Results",
        bullets: [
          "Real time in a browser: 8.9 ms per frame (112 FPS) at default settings on a workstation-class desktop, scaling linearly in slice count.",
          "Ablations isolate the contribution of inter-slice coupling and of anisotropic covariance against fair baselines.",
          "A deterministic-replay harness makes every reported number bit-reproducible."
        ]
      }
    ],
    gallery: [
      "fig_scene_occlusion_sorted.jpg",
      "fig_scene_occlusion_backdrop.jpg",
      "fig_scene_occlusion_naive.jpg",
      "fig_couple_full.jpg",
      "fig_couple_off.jpg",
      "fig_cov_aniso.jpg",
      "fig_cov_iso.jpg",
      "fig_filament.jpg",
      "fig_parallax_34view.jpg",
      "fig_smoke_over.jpg",
      "fig_baseline3d.jpg",
      "fig_post_bloom.jpg"
    ].map(f => `https://seanwilliam2077.github.io/VortexGaussians/static/images/${f}`)
  },

  "character-art": {
    title: "Character Art",
    meta: ["Personal Work", "Software: Blender, Substance Painter"],
    roles: ["Modeling", "Texturing", "Rendering"],
    intro:
      "Full character pipeline — from sketch to model, texture and final render — built in Blender and textured in Substance Painter.",
    video: null,
    externalLinks: [
      {name: "Reference (ArtStation)", url: "https://www.artstation.com/artwork/oOd8GL"}
    ],
    sections: [
      {
        heading: "Process",
        bullets: ["Reference study", "Sketch", "Model", "Texture", "Render"]
      }
    ],
    gallery: [
      "29049e_faee5dca605442629d320ae699dfc020~mv2.jpg",
      "29049e_92d1c0b031ad4e13ba2312f2631b3f11~mv2.jpg",
      "29049e_e3099ae8cada4c30af6c9db4e4f8a99a~mv2.jpg",
      "29049e_db86f998f2664e36a19e0e95d9c26c99~mv2.jpg",
      "29049e_67818207916c4b92a741da7419f80bef~mv2.jpg",
      "29049e_cda73fe2eb5e4b4383ddb95e985a18c3~mv2.png",
      "29049e_6890efcb032244beb170244ae1278bd5~mv2.jpg",
      "29049e_6e0496045fb0456f8817bacf952360a0~mv2.png",
      "29049e_c8117500660544398d2f5b98071e0d1d~mv2.png",
      "29049e_4e3479f3fa1a494dbb4f7983f575db6f~mv2.png",
      "29049e_b2879db8f87f4c7f92cd41c92ad820e2~mv2.png",
      "29049e_74c8fbff01f84a1faaaabc56ccbb9308~mv2.png",
      "29049e_e81e207a63134dd3a9142e1ba921b0eb~mv2.png",
      "29049e_7cdfb623dce942cbad04c0c96e91ce4f~mv2.png",
      "29049e_22a7636fe03b4e6c92ecc3718820393e~mv2.png",
      "29049e_645e404e16c740368c43065d895e109d~mv2.png"
    ].map(wix)
  },

  "environment-art": {
    title: "Environment Art",
    meta: ["Personal Work", "Software: Maya, Substance Painter & Designer"],
    roles: ["Modeling", "Texturing", "Rendering"],
    intro:
      "Environment scene built from block-out to final render in Maya, textured with Substance Painter & Designer.",
    video: {
      type: "mp4",
      src: "https://video.wixstatic.com/video/29049e_993577cc22d3417aa10798b914628c31/480p/mp4/file.mp4"
    },
    sections: [
      {
        heading: "Process",
        bullets: ["Block out", "Modeling", "Texturing", "Render"]
      }
    ],
    gallery: [
      "29049e_fcdafd68ab9a444a8bff6cb45fbbbc70~mv2.png",
      "29049e_26d750f1683b43408981b53e43a9ac8e~mv2.png",
      "29049e_9580becd87a5489493896ae4768bf8cd~mv2.png",
      "29049e_807c7f9b53ae45a6a674a8395a25cd34~mv2.png",
      "29049e_e4fae6ed769841afacabd7f09983c847~mv2.png",
      "29049e_2bdac382312c4e398a95b3e665ff88f3~mv2.png",
      "29049e_49b23cac3faa4f7eb49d66816d87ef36~mv2.png"
    ].map(wix)
  },

  "texture-project": {
    title: "Texture Project",
    meta: ["Personal Work", "Software: Maya, Substance Painter & Designer"],
    roles: ["Material Authoring", "Rendering"],
    intro:
      "Material and texture studies — authored in Substance Painter & Designer and rendered in Maya.",
    video: {type: "vimeo", id: "1111551668"},
    extraVideos: [
      {label: "Render", type: "vimeo", id: "1111556250"},
      {label: "Substance", type: "vimeo", id: "1111553665"}
    ],
    sections: [
      {
        heading: "Process",
        bullets: ["Material", "Render", "Substance"]
      }
    ],
    gallery: [
      "29049e_f1384727adfb4b1da93a693465928757~mv2.png",
      "29049e_be472fa64464491a8541d0f18d65a53f~mv2.png",
      "29049e_d68806d3f10f4ce49dea612676f4d184~mv2.png",
      "29049e_1fe1b02761534345a0e52a51e56719cd~mv2.png",
      "29049e_10b1f596c1ec4000b1d50f949a628815~mv2.png",
      "29049e_14dfd65deabf4324a0464ca4d6daf63a~mv2.png",
      "29049e_26cd0438c2644787ac1558dd5608383b~mv2.png",
      "29049e_f075e2362d1d4fc6bfcc62254b37f346~mv2.png",
      "29049e_152ba128450c4f64807a9c64d805c994~mv2.png",
      "29049e_463ec104b91c4162a0d00dddf0947873~mv2.png",
      "29049e_b8f9951523e14839ad14859990ec406f~mv2.png",
      "29049e_9e4178b3374a4703957b51bbe40504c4~mv2.png",
      "29049e_90305b336fd14e3aaf20e58475f34d55~mv2.png",
      "29049e_32c4dd4c2bee4b6c9594028f36492c9d~mv2.png",
      "29049e_8c7c96b7b7c041c4ab46a03508da8679~mv2.png",
      "29049e_2a1cc033bd9c44f5b11b07e5fafcebf8~mv2.png",
      "29049e_c93a9e53fe724669a4334cab2a658e49~mv2.png",
      "29049e_59e1f9dedb9a4e6eb894e9823d49c9e1~mv2.png",
      "29049e_8222f13df190443996d6857991961440~mv2.png",
      "29049e_7c58690c60954f2bb39b83a0ebad7b79~mv2.png",
      "29049e_08e432cc1c264f05a914a0cd8d481adb~mv2.png",
      "29049e_3bb47930c9c5411e80e2c7e50cdbf279~mv2.png",
      "29049e_9fc0b59b87a840d0a187ddcb19029629~mv2.png",
      "29049e_dea6f7bc93c142728593fdc61ffb6361~mv2.png",
      "29049e_0ec42fa14ddb45889f9f1b4b3fdd9006~mv2.png",
      "29049e_b6ce5a16bfd2450da0576dd4d8eb2db2~mv2.png"
    ].map(wix)
  },

  "sdf-ray-marching": {
    title: "Signed Distance Fields & Ray Marching",
    meta: [
      "Type: Technical Exploration",
      "Topic: SDF · Ray Marching",
      "Tech: WebGL · GLSL fragment shader"
    ],
    roles: ["Shader Programming", "Procedural Geometry", "Real-time Rendering"],
    intro:
      "A real-time scene rendered entirely from an analytic Signed Distance Field. The camera ray-marches a field of primitives (sphere, box, torus) and shades hits with Phong lighting. The two videos show the baseline scene and a creative 'reaching for the void' composition with an emissive spark.",
    video: { type: "mp4", src: "/cgai-videos/DefaultRender_A2a.mp4" },
    extraVideos: [
      { label: "Creative — Reaching for the Void", type: "mp4", src: "/cgai-videos/CreativeRender_A2a.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "Default render: a torus-plus-box SDF scene lit by classic Phong shading (ambient + diffuse + specular) under a single directional light.",
          "Creative render: a pedestal (box SDF) with a glowing cyan spark (sphere SDF) rising from it — an emissive material so the spark lights itself instead of relying on the scene light."
        ]
      },
      {
        heading: "The logic behind it (ray marching an SDF)",
        bullets: [
          "Signed Distance Function sdf(p) returns the shortest distance from point p to the surface (negative inside). Primitives: sdfSphere, sdfBox, sdfTorus.",
          "rayMarch(ro, rd): sphere-trace the ray — each step advances by the SDF value because the SDF is a true distance bound, so it never overshoots the surface. Stops on hit (d < eps) or after max steps / max distance.",
          "calcNormal(p): estimate the surface normal as the gradient of the SDF via central differences — this is what makes lighting possible.",
          "Shading: the Phong model combines ambient, diffuse (N·L) and a specular highlight (R·V)^shininess. Emissive sparks add their own color directly to the output, independent of lighting.",
          "The scene is the union of shapes via min(d1, d2, ...); smooth-min (smin) can blend them for soft transitions."
        ]
      }
    ]
  },

  "neural-implicit-surfaces": {
    title: "Neural Implicit Surfaces (SIREN)",
    meta: [
      "Type: Technical Exploration",
      "Topic: Neural SDF · SIREN",
      "Tech: Python (training) · GLSL (inference)"
    ],
    roles: ["Neural Networks", "Implicit Representations", "Shader Inference"],
    intro:
      "Instead of hard-coding geometry, this experiment trains a SIREN (sinusoidal-activation) neural network to represent the SDF of a 3D mesh, serializes the weights into a GLSL function, and ray-marches the network itself inside the shader. The videos show the bunny/cow reconstruction and a creative 'tangible neural network' with a floating duck.",
    video: { type: "mp4", src: "/cgai-videos/DefaultRender_A2b.mp4" },
    extraVideos: [
      { label: "Creative — A Tangible Neural Network", type: "mp4", src: "/cgai-videos/CreativeRender_A2b.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "Default render: a bunny and a cow whose surfaces are defined by a tiny MLP rather than triangles — the shape emerges from evaluating the network along the ray.",
          "Creative render: adds a floating rubber duck, staging the neural field as a physical, inspectable object."
        ]
      },
      {
        heading: "The logic behind it",
        bullets: [
          "Training: sample points around the mesh, compute their ground-truth SDF, and fit a SIREN MLP sdfNetwork(x, y, z) -> distance. Sinusoidal activations let the network capture the high-frequency detail of the SDF.",
          "Export: the trained weights are serialized into a flat array baked into GLSL; the shader calls the network as a function exactly like an analytic SDF.",
          "Render: rayMarch uses sdfNetwork as the distance estimator and calcNormal uses finite differences of the network — the same marching loop as the analytic SDF scene, but the scene is now a learned function.",
          "Why it matters: one small network stores an entire shape compactly and enables smooth blending between learned objects — a foundation for neural scene representations."
        ]
      }
    ]
  },

  "volumetric-rendering": {
    title: "Volumetric Rendering",
    meta: [
      "Type: Technical Exploration",
      "Topic: Volumetric · Participating Media",
      "Tech: WebGL · GLSL"
    ],
    roles: ["Volumetric Rendering", "Noise & Procedural Fields", "Light Transport"],
    intro:
      "A fully ray-marched volumetric scene — smoke, flame and participating media — built from 3D noise and physically-inspired scattering. The videos show the baseline candle-like flame and a creative 'Two Worlds' split of warm fire and cool ice.",
    video: { type: "mp4", src: "/cgai-videos/DefaultRender_A3a.mp4" },
    extraVideos: [
      { label: "Creative — Two Worlds", type: "mp4", src: "/cgai-videos/CreativeRender_A3a.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "Default render: a procedurally shaped flame driven by 3D value noise, lit from within with a warm color gradient.",
          "Creative render: the left half is a warm flame and the right half a cool 'ice' volume, split by a twisting rotation — two scattering media in one field."
        ]
      },
      {
        heading: "The logic behind it",
        bullets: [
          "Volume ray marching: step through a 3D scalar field; at each sample read density sigma(p) from fbm / value noise plus an emission color.",
          "Transmittance & accumulation: integrate front-to-back; each step attenuates light by exp(-sigma*dt) and adds in-scattered color — classic emission-absorption volume integration.",
          "Phase function: Henyey-Greenstein g controls forward/backward scattering (g > 0 makes light beams forward like a candle), shaping the soft glow.",
          "Shape mask: a 2D cookie texture or analytic profile constrains the noise into a recognizable flame silhouette.",
          "Creative twist: a rotation matrix and a sign-split on world x blend two different color/density fields into one volume."
        ]
      }
    ]
  },

  "nerf": {
    title: "Neural Radiance Fields (NeRF)",
    meta: [
      "Type: Technical Exploration",
      "Topic: Neural Radiance Fields",
      "Tech: Python (training) · WebGL (viewing)"
    ],
    roles: ["Deep Learning", "Volume Rendering", "Novel-View Synthesis"],
    intro:
      "A from-scratch tiny NeRF: a multi-layer perceptron maps a 3D point (with positional encoding) and viewing direction to color + volume density, trained on multi-view images, then volume-rendered into novel views. The videos show the lego scene (baseline) and a chair scene (creative), each with a rotating novel-view orbit.",
    video: { type: "mp4", src: "/cgai-videos/DefaultRender_A3b.mp4" },
    extraVideos: [
      { label: "Creative — Chair", type: "mp4", src: "/cgai-videos/CreativeRender_A3b.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "Default render: the classic lego scene reconstructed from ~100 training views, rotating through novel camera angles (PSNR approx 23.3 dB).",
          "Creative render: a chair scene trained the same way, reaching PSNR approx 23.4 dB."
        ]
      },
      {
        heading: "The logic behind it",
        bullets: [
          "Positional encoding: map (x, y, z) and view direction into a high-frequency basis (sin/cos of scaled frequencies) so the small MLP can represent fine detail.",
          "Network: (encoded point, direction) -> (rgb, sigma density). A tiny MLP trained with a photometric loss between rendered and target images.",
          "Differentiable volume rendering: for each ray, sample points, compute transmittance T_i = exp(-sum sigma*dt) and composite color C = sum T_i (1 - exp(-sigma_i*dt_i)) * c_i.",
          "Novel views: at inference the same network renders any camera pose, including ones never seen during training — that generalization is the core result of NeRF."
        ]
      }
    ]
  },

  "gaussian-splatting-2d": {
    title: "2D Gaussian Splatting",
    meta: [
      "Type: Technical Exploration",
      "Topic: 2D Gaussian Splatting",
      "Tech: Python (training) · GLSL (rasterization)"
    ],
    roles: ["Differentiable Rendering", "Point-Based Reconstruction", "Real-time Rasterization"],
    intro:
      "2D Gaussian Splatting reconstructs a scene from multi-view images as a cloud of anisotropic 2D Gaussians, sorted and alpha-blended in screen space. The '2D GS Fluid' video is the animated splat sequence; the anim-* clips show synthetic (flower) and image-based (cartoon pig) reconstructions at different splat counts.",
    video: { type: "mp4", src: "/cgai-videos/2D_GS_Fluid.mp4" },
    extraVideos: [
      { label: "Synthetic — Flower (N=15)", type: "mp4", src: "/cgai-videos/anim-synthetic.mp4" },
      { label: "Image-based — Cartoon Pig (N=100)", type: "mp4", src: "/cgai-videos/anim-image.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "2D GS Fluid: the trained splats overlaid / animated in the shader — a fluid-like motion of the reconstructed point cloud.",
          "anim-synthetic: a simple flower reconstructed from a handful (N=15) of Gaussians.",
          "anim-image: a cartoon pig reconstructed from N=100 Gaussians, showing how more splats capture finer detail."
        ]
      },
      {
        heading: "The logic behind it",
        bullets: [
          "Each splat = center (mu), 2D covariance Sigma (from scale + rotation), opacity alpha, and color. Covariance is built as Sigma = R S S^T R^T so it stays positive semi-definite.",
          "Projection: splats are transformed into screen space (Jacobian of the camera) and sorted by depth (painter's algorithm).",
          "Differentiable blending: final pixel color = sum alpha_i * c_i * T_i with T_i the accumulated transmittance — fully differentiable end to end.",
          "Training: optimize splat parameters by gradient descent to minimize the image reconstruction error from the multi-view inputs; more splats -> higher fidelity but more overlap."
        ]
      }
    ]
  },

  "xpbd-physics": {
    title: "Position-Based Dynamics (XPBD)",
    meta: [
      "Type: Technical Exploration",
      "Topic: Extended Position-Based Dynamics",
      "Tech: WebGL · GLSL solver"
    ],
    roles: ["Physics Simulation", "Constraint Solving", "Real-time Animation"],
    intro:
      "A real-time XPBD solver: particles are integrated, then constraints (distance springs, collisions) are projected position-by-position with compliance control. The videos show a default rope and a creative octagonal ring ('Dynamic Harmony').",
    video: { type: "mp4", src: "/cgai-videos/Default_a5.mp4" },
    extraVideos: [
      { label: "Creative — Dynamic Harmony (Octagonal Ring)", type: "mp4", src: "/cgai-videos/Creative_a5.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "Default render: a hanging rope of particles connected by distance constraints, swinging under gravity with collision against the floor.",
          "Creative render: an octagonal ring of particles linked by springs that dynamically settles and oscillates — 'Dynamic Harmony'."
        ]
      },
      {
        heading: "The logic behind it",
        bullets: [
          "Predict: x* = x + v*dt + gravity; then solve constraints by directly moving positions (not forces).",
          "Constraint projection: for a distance constraint, move the two endpoints along the constraint gradient so their separation matches the rest length; XPBD adds a compliance alpha that converts stiffness into a physically stable, iteration-count-independent parameter.",
          "Collision: clamp particle positions outside obstacles (e.g. the ground plane / sphere) and feed the correction back into velocity via delta-x / dt.",
          "Stability: because corrections are positional and bounded, XPBD stays stable at large time steps where force-based solvers explode."
        ]
      }
    ]
  },

  "diffusion-models": {
    title: "Diffusion Models",
    meta: [
      "Type: Technical Exploration",
      "Topic: Latent Diffusion · DDIM",
      "Tech: Python · PyTorch"
    ],
    roles: ["Generative Models", "DDPM/DDIM Sampling", "Text-to-Image"],
    intro:
      "An implementation of diffusion-based image generation: a U-Net denoiser operating in latent space, conditioned on text, sampled with DDIM for fast deterministic generation. The videos show the default pipeline and a creative 'Mirror Image' prompt.",
    video: { type: "mp4", src: "/cgai-videos/DefaultRender_a6.mp4" },
    extraVideos: [
      { label: "Creative — Mirror Image", type: "mp4", src: "/cgai-videos/CreativeRender_a6.mp4" }
    ],
    sections: [
      {
        heading: "What the videos show",
        bullets: [
          "Default render: the forward/reverse diffusion animation — noise progressively denoised into a coherent image (and the reverse, image to noise).",
          "Creative render: text prompt 'a person looking at their mirror image' producing a mirrored compositional generation."
        ]
      },
      {
        heading: "The logic behind it",
        bullets: [
          "Forward process: gradually add Gaussian noise to an image over T steps q(x_t | x_{t-1}) until pure noise.",
          "Reverse process: a U-Net epsilon_theta predicts the noise at each step; we subtract it to recover x_{t-1}. Training minimizes the noise-prediction MSE.",
          "Latent diffusion: the U-Net runs in a compressed latent space (from an autoencoder), making generation far cheaper; text is encoded by CLIP and cross-attended into the U-Net.",
          "DDIM sampling: a deterministic, non-Markovian scheduler that reaches good samples in far fewer steps than vanilla DDPM.",
          "Variants compared: UnCLIP (text to CLIP image embedding to latent), GLIDE (text-conditioned diffusion + upsampling) and Stable Diffusion all build on this shared reverse-diffusion core."
        ]
      }
    ]
  }
};

export default projectDetails;
