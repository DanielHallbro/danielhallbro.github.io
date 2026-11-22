---
title: "OWASP Stockholm - Security in the Agentic SDLC and Autonomous Pentesting"
tag: "Meetup"
date: "October 2026"
description: "The first OWASP Stockholm evening I organized myself - two talks at Scila on AppSec inside the agentic loop and coverage in autonomous pentesting."
---

## The evening

This was the first OWASP Stockholm event I organized myself. I had helped out before, but this time I was the one holding it together. Two talks at Scila on Sveavägen, both about what happens to security work when AI agents are part of the process.

I put a lot of time into it. Speakers, the venue sponsor, the agenda, the banner, the Meetup page and the posts all depend on each other, and something changes every day. The waitlist grew past what we expected. One speaker asked for more time than the schedule allowed. None of it was hard on its own, but keeping track of everything took real effort. I was nervous right up until the first talk started. After that it mostly took care of itself.

## Ernest Bartosevic - Security in the agentic SDLC

Ernest from Semgrep argued that when agents both write and review code, the old gates stop working because the volume of PRs is too high for humans to keep up. His point was that AppSec has to live inside the agentic loop, with deterministic guardrails and triage built into the pipeline.

The first part was a good framing of the problem. The end leaned more toward sales than I would have liked, with a lot of focus on what Semgrep does. During speaker coordination, I put a lot of emphasis on our meetups being vendor agnostic but unfortunately it did not quite shine through here. Lesson learned!

## Yacine Souam - The coverage failure in autonomous pentesting

Yacine from Escape talked about the gap between finding bugs and covering the attack surface. His first designs, an orchestrator and then a pool of agents, both lost control of breadth. What worked was a scheduler, task-bounded agents and a shared wiki of prioritised attack paths.

What made it stand out was the Q&A. He got a lot of questions and had a good answer for almost all of them, especially on how Escape designed the flow and why. It showed he had actually been a key player in designing and building the system.

## Takeaway

Both talks said the same thing from different angles. Agents get useful when the structure around them is good.

For me the bigger lesson was about organizing. Most of the work happens before anyone arrives, and the plan changes anyway. The time I put in paid off, and I learned more from running this one night than from attending many.
