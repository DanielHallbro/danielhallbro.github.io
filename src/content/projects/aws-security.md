---
title: AWS Security Project
tag: Cloud security
techs: [Terraform, AWS, IAM, CloudTrail, S3]
github: https://github.com/DanielHallbro/AWS_Cloud_Security_Project
date: May 2026
description: Incident response simulation for a fictional SaaS company. ClickOps to Terraform IaC rewrite across eu-north-1.
---

## Overview

A cloud security course project built around a fictional SaaS company called CloudCorp. The scenario involved an active incident - unauthorized access, exposed credentials, misconfigured S3 buckets - and the task was to both respond to the incident and rebuild the infrastructure securely from scratch. Delivered as a 30-page incident report, a 17-page cost breakdown appendix, a full ClickOps implementation in eu-north-1, and a Terraform IaC rewrite documented in a GitHub repo.

## What I built

I started by manually implementing the entire environment in AWS via ClickOps, then rewrote it in Terraform using a flat structure - one .tf file per component. IAM policies were written following least-privilege, CloudTrail logging was enabled throughout, and S3 buckets were locked down against public access. The project also included a presentation summarizing the incident and architectural decisions for a non-technical audience.

## What I learned

One thing that stuck with me was how hard it is to mentally model all the ways a cloud environment can be compromised. It's not one misconfiguration - it's the combination of them. Drawing out the architecture and mapping the attack paths visually made it much easier to spot where things could go wrong, in a way that reading through IAM policies line by line never did.

Rewriting everything in Terraform also changed how I think about infrastructure. When the configuration lives in code, a security review becomes more like a code review. It's a lot harder to accidentally leave a bucket public when that decision is explicit in a .tf file. Building it one component at a time - one .tf file per resource - also made debugging a lot more manageable. When something broke, I knew exactly where to look.