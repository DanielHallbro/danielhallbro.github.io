---
title: HackTheBox Stockholm Meetups
tag: Meetup
date: February — May 2026
description: Monthly HTB meetups hosted at Detectify's office in Stockholm — solving boxes in groups across difficulty tracks.
---

## What it is

HackTheBox Stockholm Group meets monthly at Detectify's office in Stockholm. Around 20–30 people show up each time, split into groups based on experience level — first-timers tackle an introductory box, while those who have attended longer go for an easy or medium difficulty box. The format is collaborative rather than competitive - you work through the box together and learn from whoever in the group has seen something similar before.

I've been going since February 2026 and it's become one of the better ways I've found to stay sharp outside of coursework — there's a different energy to solving something in a room full of people compared to sitting alone with a machine.

## June (Discord meetup) — Funnel (Very easy box)

The June meetup was a trial run for keeping things going over the summer — moved online over Discord, which worked surprisingly well. Sofia, one of the organizers who works as a pentester, screen-shared and walked through Funnel live — no looking up steps, just her actual black box process from scratch.

Funnel is a very easy box and I solved it on the side while following along, but that wasn't really the point. Watching someone experienced work through a box methodically — how she structured her notes in Obsidian, what she wrote down and when, how she reasoned out loud when something didn't immediately work — was more valuable than the box itself. She kept a deliberate pace so everyone could follow, which made it easy to pause and compare approaches.

One of the better formats so far for actually learning something rather than just solving something.

## May — Manage (Easy box)

Manage was the first box we fully completed — root flag and all. The attack chain started with JMX exploitation using beanshooter, which gave us initial RCE. Getting the TonkaBean deployed and the chain working took a while — everything eventually became tonka this, tonka that before it clicked. From there we found a backup archive containing a Google Authenticator seed and an SSH private key for a user with TOTP-protected access. After extracting the seed and generating the right one-time code with oathtool, we got in via SSH.

Privilege escalation was the most interesting part. There was a sudo rule allowing the current user to run adduser as root — the trick was figuring out that creating a user called `admin` on Ubuntu automatically grants sudo access via the admin group. We didn't find it through methodology, one of us just started trying different usernames manually until admin worked. In retrospect, the answer was hiding in plain sight: Ubuntu ships with a set of standard privileged users, and the system was simply missing one of them.

Having one of the organizers share their screen and keep the red thread throughout made a real difference — it kept the group focused and moving forward rather than splitting into ten different rabbit holes.

More than half the group were classmates, which made it extra fun. First completed box as a group, which felt good after two months of getting stuck before the finish line.

## April — Silentium (Easy box)

Silentium was a standard HTB easy box — officially easy, at least. The foothold involved vhost enumeration to discover a staging subdomain running Flowise — an AI workflow tool — and then chaining two CVEs to get initial access: one for an unauthenticated password reset token leak, and another for RCE via a custom MCP node.

We got a shell but when we tried to stabilize it we got stuck — outbound firewall restrictions from the container made it unreliable, and we ran out of time before we could get the flags.

Frustrating, but it was the most technically interesting evening so far. I came away with a much better understanding of vhost enumeration and what chaining CVEs actually looks like in practice.

## March — Easy box (forgot name)

The jump in difficulty from February was bigger than I expected. I moved up to the easy box of the month and even with more experienced people in the room, we struggled. The group managed to work through most of it but we never got the root flag — which was frustrating but also a useful reality check after feeling fairly comfortable with Cap the month before.

I learned a lot sitting next to people with many more years of experience, hearing how they reasoned through lateral movement and privilege escalation. The technical knowledge mattered less than I expected — what was harder to grasp was the methodical thinking, knowing what to look for and where to look next when you're stuck. Even though we hit a wall multiple times, we kept nudging forward until we ran out of time and had to admit defeat to the mighty r00t.

I don't remember which box it was, which probably says something about how overwhelmed I felt that evening. Writing this in June - so much has happened since then!

## February — Cap (Introduction box)

I showed up to the first meetup feeling fairly confident. I was wrapping up my Application Security course, had just finished the Juice Shop analysis, and had been working through some of Portswigger's learning paths. I figured I had a decent foundation.

I had never touched an HTB box before.

Cap is the standard first-timer box at these meetups, and it was harder than I expected — not because it's a particularly difficult machine, but because the mindset is different from anything I'd done before. I was a bit lost in the beginning, which felt uncomfortable sitting in a room full of people who, i thought, absolutely knew what they were doing (they were mostly as new as me of course). Akka, one of the organizers, gave me a few nudges in the right direction without giving anything away, and eventually things clicked and we got it.

I was hooked immediately. There's something about solving a box in a room with other people that makes the learning stick in a way that solo work doesn't.