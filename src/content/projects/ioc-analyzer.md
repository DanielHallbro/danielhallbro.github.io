---
title: IOC Analyzer
tag: Threat intel
techs: [Python, VirusTotal, AbuseIPDB, IPinfo.io, JA4+, Anthropic/Gemini API]
github: https://github.com/DanielHallbro/IOC_Analyzer
date: 2025 — ongoing
description: CLI tool for automated triage of Indicators of Compromise across multiple threat intelligence sources.
---

## Overview

IOC Analyzer is a Python CLI tool for automating the triage of Indicators of Compromise — IPs, URLs, file hashes, and TLS fingerprints. It pulls data from VirusTotal, AbuseIPDB, and IPinfo, and optionally synthesizes everything into an AI-powered verdict via Gemini or Claude. The project has gone through three major versions, each adding a new layer of capability.

## What I built

v1.0.0 started as a straightforward script — submit an IOC, get back aggregated threat data from multiple APIs. v2.0.0 introduced a watch folder monitor mode and automatic SHA-256 hashing of binary files, turning it into something closer to an automated analysis station. v3.0.0 added JA4+ TLS fingerprinting via tshark, which lets you drop a pcap into the watch folder and get fingerprint lookups without touching the terminal, and an AI verdict layer that synthesizes all signals into a structured Clean/Suspicious/Malicious assessment with reasoning and suggested next steps.

The codebase is split into a modules/ directory — one file per concern, virustotal.py, abuseipdb.py, ja4.py, llm_verdict.py and so on — which made it straightforward to add new sources without touching existing logic.

## What I learned

IOC Analyzer v1.0.0 was the first real Python project I built from scratch. Writing it taught me about modular design for the first time — splitting logic into separate files with clear responsibilities — and that way of thinking has carried into every project I've built since.

Each new version introduced concepts I hadn't worked with before. The watch folder in v2 came from a conversation with someone senior in the industry, which also pointed me toward JA4+ fingerprinting before it landed in v3. Learning about TLS fingerprinting that way — hearing why it matters in practice before going off and implementing it — made it stick in a way that just reading documentation wouldn't have.

Working with APIs was also a bigger learning curve than expected. Before this project I had a surface-level understanding of how they worked — after integrating five different sources with different authentication methods, rate limits, response structures and error handling, I came away with a much more practical grasp of how to read documentation, handle edge cases and build something reliable on top of external services.