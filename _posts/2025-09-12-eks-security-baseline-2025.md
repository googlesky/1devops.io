---
layout: post
title: "EKS Security Baseline 2025"
description: "Updated guardrails for running Amazon EKS securely in 2025, covering PSA policies, image signing, runtime protection, and threat detection."
categories: [security, kubernetes]
tags: [EKS, Kubernetes, Security, Falco, Kyverno, Gatekeeper]
excerpt: "A practical checklist for keeping Amazon EKS clusters compliant and resilient in 2025."
---

Running Amazon EKS at scale in 2025 demands a layered security model that balances velocity with compliance. Over the last quarter we refreshed our reference architecture for financial-services customers and distilled the must-have controls into this baseline.

## Enforce Pod Security Admission

Pod Security Admission (PSA) is now the default gatekeeper in EKS. Define namespace-level policies that match your workload sensitivity:

- `baseline` for shared dev/test clusters
- `restricted` for production namespaces
- dedicated break-glass namespaces for debugging with tight audit logging

Combine PSA with Kyverno or Gatekeeper policies to block privileged pods, hostPath mounts, and unsigned images before they reach the API server.

## Sign and Verify Container Images

Adopt **Sigstore cosign** and build SBOMs with **Syft** during CI. Publish attestations to an OCI registry and enforce verification at admission time. This closes the loop between build provenance and runtime deployment, satisfying SLSA level 2 requirements.

## Runtime Threat Detection with Falco

Falco continues to be our go-to runtime sensor. Pair it with AWS Security Lake or CloudWatch metrics to centralise detections and route high-severity events into PagerDuty. The newest Falco rulesets include detections for exfil attempts via SSM Session Manager and credential harvesting from projected tokens.

## Observability with Guardrails

Measure security and reliability together. Define SLOs for:

- Image verification success rate
- Admission webhook latency
- Falco alert MTTA / MTTR

Dashboards in Grafana fed by Prometheus and Loki make it easy to correlate control plane events with workload behaviour.

## Remediation Runbooks

Document automated and manual steps for findings:

1. Quarantine the namespace via network policies
2. Rotate relevant IAM roles or service account tokens
3. Trigger Terraform modules to re-issue baseline configuration

Store runbooks with version control and link them to Zendesk or Jira for audit evidence.

Need help implementing or auditing your EKS security controls? [Book a discovery call]({{ '/contact/' | relative_url }}) and we’ll tailor the baseline to your compliance objectives.
