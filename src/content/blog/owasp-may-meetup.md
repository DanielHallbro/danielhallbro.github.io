---
title: OWASP Stockholm - AI Agents and MCP Security
tag: Meetup
date: May 2025
description: Notes from an OWASP Stockholm evening at Epicenter with two talks on deploying AI agents securely and MCP server attack patterns.
---

## The evening

OWASP Stockholm hosted an evening at Epicenter with two talks focused on a topic that's moving fast right now - AI agents, MCP servers, and the security implications that come with them.

## Linus Lagerhjelm - Secure deployments of AI agents

Linus works at Scila, a fintech company focused on banks and financial institutions, and talked through how they've approached deploying AI agents internally in an environment where the security bar is unusually high. It was interesting to hear how the thinking shifts when you're building for a regulated sector - not just "does this work" but "how do we deploy this in a way that won't cause problems in six months." 

Less about the technology itself and more about the risk-oriented decisions around it, which hit me in a good way as I am not as experienced with the technology in a company setting.

## Amine Raji - MCP Security after year one

MCP servers were completely new to me going into this talk. MCP, or Model Context Protocol, is the standard that lets AI agents connect to external tools and services - think of it as the layer that lets an agent read your files, send emails, or query an API. Amine has spent the last year researching the security implications of this, and the short version is that the attack surface is newer and less understood than most people realize.

If I would try to summarize the core problem: the protocol says tool descriptions should be treated as untrusted, but provides no mechanism to actually enforce that. A malicious tool description can contain hidden instructions that the model reads and executes without the user ever seeing them. What made it interesting was how much this breaks from the security assumptions we're used to. You can audit software before you install it, but these attacks happen at runtime. One malicious MCP server among several can silently reach into another and exfiltrate data you never intended it to touch.

The checklist he ended with was practical - pin versions, hash tool descriptions, default-deny outbound network access on MCP processes. None of it requires buying anything, which means it holds up regardless of where the field goes from here.