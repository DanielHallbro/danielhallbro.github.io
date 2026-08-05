---
title: "Network Intrusion Detection - MLOps Pipeline"
tag: "Security Monitoring"
techs: ["Docker", "Kubernetes", "FastAPI", "CI/CD", "MLflow", "Airflow"]
github: "https://github.com/DanielHallbro/MLOps_Pipeline"
date: "Spring 2026"
description: "End-to-end MLOps pipeline for network intrusion detection - from raw data to a served, monitored and auto-scaling prediction API with security-focused observability."
---

## Overview

A school project for the AI, Automation and Machine Learning course - building an end-to-end MLOps pipeline for network intrusion detection. I chose the UNSW-NB15 dataset - a well-established network intrusion benchmark with an official train/test split that's intentionally harder than a random resample, 175,000 training connections across nine attack categories. Two model families were trained and compared, with the best performer served through a production-style stack with scheduling, monitoring and autoscaling.

## What I built

Training and experiment tracking runs through MLflow, with Apache Airflow handling scheduled retraining and DVC versioning the dataset against AWS S3. The supporting stack runs in Docker Compose - Airflow, MLflow (each with their own Postgres), Prometheus and Grafana for monitoring.

FastAPI runs in a local Kubernetes cluster via minikube, with a Horizontal Pod Autoscaler scaling between 1 and 4 replicas under load. CI on GitHub Actions spins up a fully isolated copy of the stack on every push - separate credentials, a dummy model trained on synthetic data - and smoke-tests the real API code path before tearing everything down.

## What I learned

Model evaluation is harder than it looks. Published results on UNSW-NB15 range from 77% to 99% F1 depending on whether the evaluation used the official split or an easier random resample. Using the official, harder split gave around 91% - a result that looks modest until you understand what it's actually measuring.

This was the most technically complex project I've built. The stack has a lot of moving parts and debugging across them meant making decisions, hitting walls, backing out and finding a different path. That cycle — choosing an approach, discovering why it doesn't work, rethinking it - is something development teams do constantly, and going through it here made that very concrete.

The Kubernetes addition taught something less obvious: adding a new orchestration layer can quietly invalidate assumptions the rest of the stack didn't know it was making. The fix wasn't complicated, but finding it required understanding exactly why the pod couldn't reach MLflow - not just that it couldn't.