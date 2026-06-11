---
title: OWASP Juice Shop Analysis
tag: Web application security
techs: [Burp Suite, Nuclei, SQLmap, Gobuster, Docker]
github: https://github.com/DanielHallbro/OWASP_Juice_Shop_Analysis
date: February 2026
description: Black/Grey box penetration test of OWASP Juice Shop. Custom Kali toolset with automated exploitation scripts for OWASP Top 10 vulnerabilities.
---

## Overview

A black/grey box penetration test of OWASP Juice Shop v19.1.1, conducted as part of a course assignment. The entire engagement ran inside an isolated Docker network — a vulnerable Node.js target and a custom Kali attacker container with a pre-built toolset. The goal was to identify and exploit vulnerabilities mapped to the OWASP Top 10:2025.

## What I built

The attacker container was built from a custom Dockerfile on top of Kali Linux rolling, with Nuclei, Gobuster, SQLmap, curl and Python3 pre-installed alongside SecLists wordlists fetched at build time. I also wrote a small bash script — brute_reset.sh — to automate exploitation of the password reset mechanism. The target's security question answers were case-sensitive, so the script converted a 1000-entry name wordlist to title case on the fly and implemented a low-and-slow delay to stay under the rate limiter.

For the stored XSS findings I used Python's http.server to host a listener on port 9999 inside the attacker container, capturing stolen session cookies as they arrived.

## What I learned

Going in with no prior black box experience was its own lesson. Without knowing the application's internals, the first step was just methodically mapping the attack surface — directory brute-forcing, header inspection, source code hints in the browser. Learning to think like that, to approach an unknown target systematically rather than jumping straight to exploitation, was probably the most transferable thing I took away from the project.

The assignment also required a full vulnerability report, which taught me a lot about how to communicate security findings professionally. Explaining each vulnerability step by step — what it is, how it was exploited, what the impact is, and how to fix it — forces a level of clarity that you don't get from just running tools and screenshotting results.