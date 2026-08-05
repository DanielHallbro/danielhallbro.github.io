---
title: "Undutmaning 2026"
tag: "CTF"
date: "March 2026"
description: "Eight hours of CTF with a team of seven - OSINT, web exploitation, forensics and a programming challenge that put up a fight."
---

## What it is

Undutmaning is an annual CTF competition organized jointly by FRA, MUST and Säkerhetspolisen. The format is straightforward — solve challenges across different categories, collect flags, score points. We formed a team of seven classmates and ran the whole thing over Discord on a Saturday, somewhere between eight hours of focused chaos.

## The format

One thing that stood out was how the time limit changed the way you approached problems. Eight hours sounds like a lot until you're forty minutes deep into something that isn't moving. The format forced a discipline that solo CTF work doesn't - at some point you have to cut your losses, hand it off to a teammate or move on and come back later. Keeping track of who was working on what so you didn't accidentally steal a flag from under someone's nose added an extra layer to the coordination.

## The challenges

I solved four flags across OSINT, web and forensics categories.
The OSINT challenge I solved involved a photo with a post-it note asking who founded a particular organization - the answer was hidden in the image itself. I ran the image through AI to identify the location, which turned out to be the campus of Tecnológico de Monterrey in Mexico. The founder, formatted in snake_case, was the flag.

On the web side I worked through Recycling, which involved digging a secret token out of a pcap file using strings and navigating to a hidden endpoint, and Fånga fisken - a path traversal challenge where hints buried in the app's files pointed toward directory traversal.
The forensics challenge was the most involved. Kapten Sträng had a RAR archive buried inside a TCP stream in a pcap file - extracted it with tshark and xxd, cracked the password with strings, and found the flag in image EXIF metadata via exiftool. A few moving parts but nothing that didn't fall into place eventually.

The programming challenge was a different story. Navigating a maze over TLS while avoiding sharks, with the added twist that the grid in the provided image didn't match the actual server grid. I spent a long time mapping it by probing the server directly and building the layout from responses. Got close but never crossed the finish line - one of those challenges where you learn a lot and have nothing to show for it.

## Takeaway

Team FSHCS2025 finished 173rd with 710 points. I ended up taking four of the team's eight flags, which felt good. The collaborative format suits this kind of competition well - there's something about solving problems together that makes the whole thing more fun than sitting alone with a machine. Will be back next year.