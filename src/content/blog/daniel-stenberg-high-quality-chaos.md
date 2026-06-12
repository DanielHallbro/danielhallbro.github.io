---
title: "Daniel Stenberg | High-Quality Chaos"
tag: Event
date: May 2026
description: curl's creator on what happens when AI starts flooding open source projects with vulnerability reports — and what that actually looks like from the inside.
---

## KTH Library, May 2026

IEEE Computer Society Sweden Chapter hosted an evening at KTH's library with Daniel Stenberg — creator of curl, one of the most widely used software components in the world. I'd been following Daniel on LinkedIn throughout the year and watched the story unfold in real time, so I was excited to see it presented in this format.

## The arc

The talk traced a timeline that most people in the security space have only seen from the outside. It started with the artisanal era — finding vulnerabilities took real skill, time and effort. Then AI tools arrived, went through a phase of aggressive hallucinations, and came out the other side producing high-volume, high-quality reports. A vuln apocalypse, as Daniel put it.

What made it interesting was that I'd watched this play out on LinkedIn before I ever walked into the room. The posts shifted from AI slop at the end of last year to something more serious — the bug bounty program got pulled, then brought back. Reports started coming in with long and bloated AI-generated descriptions instead of short and precise ones. The relevant bugs followed. Then Mythos hype had everyone nervous, but when run against curl's codebase it found a single vulnerability — and other models found more in the same version just a week later.

Today Daniel's team is under significantly more load, but their view of AI-generated reports has shifted. More work, but the signal-to-noise ratio is finally moving in the right direction.

## Takeaway

What set the talk apart was the framing — one open source developer's honest account of what it actually looks like when AI starts taking an interest in your codebase. The numbers were real, the frustration was real, and so was the cautious optimism at the end.

For someone about to start a security research internship, it was a useful picture of where the field is heading — not from a vendor selling a solution, but from someone sitting in the middle of the problem. And honestly, getting to see Daniel Stenberg speak in person was pretty cool in itself — curl runs on practically everything, and he's been maintaining it for almost 30 years.