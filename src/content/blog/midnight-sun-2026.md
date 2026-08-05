---
title: Midnight Sun Security Conference 2026
tag: Event
date: June 2026
description: Two days of talks on civil resilience, AI in the cyber domain, and bug bounty - my first proper security conference.
---

## Two days in Palmsalen

I bought a ticket to Midnight Sun back in the winter after hearing a lot of good things about it. Turned out most of my class had the same idea - we ended up being a solid group of 8. Two days of talks in Stockholm, June 4–5, organized by Cparta Cyber Defense.

## Pontus Johnsson - The Calm Before the Storm Before the Calm

Pontus Johnsson, professor of cybersecurity at KTH, gave one of the more thought-provoking talks on day one. The premise was that generative AI is reshaping cybersecurity faster than most organizations can adapt - and that this cuts both ways. AI makes attackers faster and more scalable, but the same capabilities can help defenders find weaknesses earlier and prioritize what actually matters.

One of the slides he showed came from Daniel Stenberg and illustrated how the quality of AI-generated vulnerability reports has increased significantly throughout 2026. It's no longer a question of whether AI will become relevant in vulnerability research - it already is. That landed with me, partly because it's exactly the environment I'm about to step into.

## Johan Carlsson (joaxcar) - Bug bounty as a career

Johan Carlsson's talk was one of the most enjoyable to sit through. He came from an arts background, switched to computer science, and found bug bounty as his way into security. It's now his full-time job, and he's the highest-ranked hunter on GitLab's bug bounty program - after more than five years of hacking the same platform.

What stuck wasn't any specific finding but what he said about the mindset behind it. Committing five years to the same target is a choice. It means not losing interest once the low-hanging fruit is gone, and being willing to learn something new every time you get stuck. One thing he mentioned that I hadn't considered before: a lot of the bugs he finds are ones that have come back over time. When people leave GitLab and new developers come in, things get forgotten - and for certain parts of the codebase, Johan knows it better than the people who actually work there.

As someone just getting started with bug bounty and CTFs, it was a good reminder that there's no single path into this.

## Matthias Pleschinger and Faith - deeply technical talks

Day two had two talks operating on a different technical level entirely. Matthias Pleschinger walked through his work on the V8 VRP - the bug bounty program for Chrome's JavaScript engine - covering several CVEs he found during his time there. Faith presented CVE-2025-38352, a Linux/Android kernel vulnerability in the POSIX CPU timers implementation that was exploited in the wild, and walked through the exploit he built for it.

I didn't follow everything - neither did most of the room, I think. Faith's was a bit more accessible, but Matthias's V8 deep-dive was something else. What stayed with me wasn't the technical details but how they talked about the research itself. Both had gone completely all-in on one thing and would not let go. It's easy to feel like that's out of reach, but then again - they were presenting it precisely because it was hard. That's the point.

## 1v1 pwn

The last thing I stuck around for before heading home. Two participants facing off in a head-to-head binary exploitation tournament on stage - timed, live, in front of an audience. You could feel the tension, but the crowd kept it fun rather than stressful. The highlight was watching competitors from Japan and South Korea hunt for the pipe character on an English keyboard layout - the whole room laughed along with them. A very specific kind of pressure to have when you're trying to exploit something on stage.

## Takeaway

Day one leaned more towards policy and high-level strategy - interesting, but a lot of it covered ground I'd heard before. Day two was where it clicked for me. Strong speakers, and a good reminder of how broad the field actually is - from Johan's five years on one platform to Faith and Matthias going completely all-in on one stack. Both feel relevant going into the summer break.