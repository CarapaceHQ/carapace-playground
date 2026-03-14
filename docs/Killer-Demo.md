# Demonstration Environment

## Overview

The Carapace Demonstration Environment provides a reproducible way to observe how the platform detects and responds to malicious AI agent behavior.

The goal of the demonstration environment is to allow developers, researchers, and organizations to run a local simulation of agent activity and observe how behavioral telemetry is processed through the Carapace pipeline.

The demonstration illustrates the full platform workflow:

agent activity
telemetry generation
event ingestion
behavioral detection
risk scoring
policy enforcement

This environment can be used for:

* developer education
* conference demonstrations
* testing detection rules
* evaluating trust scoring
* security research

---

# Demonstration Scenario

The demo simulates a malicious AI agent interacting with a protected API.

The agent generates behavior patterns associated with automation abuse, such as:

* high request velocity
* prompt injection attempts
* endpoint enumeration
* infrastructure anomalies

Carapace detects these patterns and raises the agent risk score in real time.

---

# Demo Architecture

Simulated Agent
↓
Telemetry SDK
↓
Event Ingestion Service
↓
Detection Engine
↓
Risk Scoring Engine
↓
Trust Graph
↓
Dashboard / API

The demonstration environment runs all components locally.

---

# Demo Components

## Simulated Agent

A simulated agent generates automated requests to an example API.

Behavior patterns may include:

* rapid request bursts
* repeated prompt submissions
* endpoint enumeration
* abnormal retry patterns

These actions generate behavioral telemetry events.

---

## Telemetry Generation

The telemetry SDK captures behavioral signals and emits standardized risk events.

Example signals generated during the demo include:

* requests_per_minute
* endpoint_diversity
* prompt_injection_signature
* datacenter_detected
* retry_pattern_detected

These signals follow the Carapace Risk Event Schema.

---

## Event Pipeline

Generated telemetry events pass through the event pipeline.

Steps include:

event generation
event ingestion
event validation
stream processing

Events are forwarded to the detection engine for evaluation.

---

## Detection Engine

The detection engine evaluates incoming events using rule-based logic.

Example detections triggered during the demo may include:

* high request velocity
* prompt injection detection
* endpoint enumeration behavior
* suspicious infrastructure origin

Each detection produces risk flags and scoring inputs.

---

## Risk Scoring

The risk scoring engine aggregates detection outputs into a normalized risk score.

As malicious behavior continues, the agent's risk score increases.

Example score progression during the demo:

Initial agent score: 10

After request burst: 35

After prompt injection detection: 60

After repeated abuse: 85

This progression illustrates how behavioral analysis affects trust evaluation.

---

## Trust Graph

The trust graph visualizes relationships between entities in the system.

During the demo the graph may show connections between:

* the simulated agent
* infrastructure nodes
* service interactions
* risk signals

Graph visualization helps illustrate how coordinated behavior can be detected.

---

# Running the Demo

A demonstration environment may be launched using containerized infrastructure.

Example workflow:

Clone the Carapace repository.

Start the demo environment.

Launch the simulated agent.

Observe telemetry, detections, and risk score changes.

The demo environment is designed to run on a developer laptop.

---

# Example Demonstration Flow

Step 1

Start the Carapace platform locally.

Step 2

Launch the simulated agent.

Step 3

The agent begins sending API requests.

Step 4

Telemetry events are generated.

Step 5

Detection rules trigger.

Step 6

Risk score increases.

Step 7

The dashboard displays behavioral signals and trust evaluation.

---

# Demonstration Goals

The demonstration environment helps users understand how Carapace transforms behavioral telemetry into actionable trust intelligence.

Key goals include:

illustrating the telemetry pipeline

demonstrating detection rule execution

visualizing risk score progression

showing real-time behavioral analysis

demonstrating policy enforcement decisions

---

# Future Enhancements

Future versions of the demonstration environment may include:

multiple simulated agents

agent farm simulations

prompt injection attack scenarios

API abuse simulations

graph-based fraud detection examples

These scenarios help developers explore how Carapace detects complex automation attacks.

---

# Summary

The Carapace Demonstration Environment provides a practical way to explore the platform.

By simulating agent behavior and observing the detection pipeline in action, developers can better understand how Carapace enables real-time behavioral trust analysis for the agentic web.
