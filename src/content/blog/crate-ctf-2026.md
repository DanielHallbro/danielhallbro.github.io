---
title: "Crate-CTF 2026"
tag: "CTF"
date: "November 2026"
description: "Eight hours of FOI's CTF with a team of eight - OSINT, web, forensics, a blackjack deck that never got shuffled and AI as a note-taker."
---

## What it is

Crate-CTF is a Swedish CTF run by FOI, the Swedish Defence Research Agency. It runs for eight hours on a Saturday in November, and this year eight of us from class signed up as FSH_Crate_2026 in the university bracket.

## The format

The scoring was dynamic, so every challenge lost value as more teams solved it. At one point in the afternoon I was sitting on around 3600 points. By the end of the night the same flags were worth 100 each.

I also tried something new this time. Before the competition I wrote a custom skill for Claude that set up how we would work, with each challenge in its own chat. AI helped out as a sparring partner along the way, but the main job was taking notes. When a challenge was done, solved or not, it turned the session into a short writeup that I saved in Obsidian. The dead ends are always the first thing I forget, so having them written down while they were still fresh made a real difference.

## The challenges

I took five flags. Vandraren was an OSINT video where the real clue was a map that flashed by for less than a second. I pulled every frame from that window with ffmpeg and ranked them by sharpness until a lake name became readable. Tabadabort was a web challenge where a TODO comment in the JavaScript leaked a delete endpoint that never made it into the UI. Deleting and restoring my own account was enough to get the flag.

KlappKaos was a pile of presents wrapped in a dozen compression formats with deliberately wrong file extensions. A small unpacker that read magic bytes instead made quick work of it. Triqode turned out to be a voxel cube where each side view was its own 2D code, one QR, one Data Matrix and one Aztec.

Tjugo Ett was my favorite. It was blackjack over netcat where you had to turn $100 into $100 000 with a fixed bet size, so luck alone would never get you there. The trick was that the deck was never shuffled and just rotated between games. Once we knew that, a solver could simulate every hand ahead of time and plan the winning route.

ByteDB got away. I spent an hour trying to sneak a blocked opcode past a filter that parsed input exactly like the engine did, and the real bug was somewhere else entirely.

## Takeaway

FSH_Crate_2026 finished 126th with 2200 points and 22 flags. I took five of them, which was the second highest on the team. Writing a short note after every challenge was the best habit I picked up this time. Looking forward to doing this again next year!
