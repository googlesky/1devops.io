---
layout: post
title: "FinOps in Practice: Turning AWS CUR Data into Action"
description: "How we helped a SaaS team cut 32% of their AWS spend by combining Cost and Usage Reports, Athena, and Grafana dashboards."
categories: [finops, cloud]
tags: [FinOps, AWS, CUR, Cost Optimization, Grafana]
excerpt: "A repeatable playbook for analysing AWS CUR data, driving accountability with tagging, and visualising savings opportunities."
---

Cloud spend is now a board-level topic for most of our clients. Here’s how we translated raw AWS Cost and Usage Reports (CUR) into a repeatable FinOps practice that saved a data analytics platform 32% of their monthly bill.

## Normalise Tags and Ownership

We began with a tagging workshop. Product, environment, and cost-centre tags were standardised through Terraform modules and CI enforcement. Within two weeks, coverage climbed from 41% to 92%, enabling meaningful chargeback reports.

## Query CUR with Athena

The team had CUR files landing daily in S3. We provisioned an Athena workgroup with saved queries that answer:

- Top spenders by team and product
- Idle EC2/RDS resources over 14 days
- Unattached EBS and outdated snapshots

Outputs were exported to CSV and fed into a lightweight backlog of remediation actions.

## Visualise Trends with Grafana

Grafana Cloud dashboards made the data accessible. Key widgets included:

- Daily burn rate vs budget
- Savings plan utilisation
- Idle resource tracker with links back to AWS Console

Email digests and Slack alerts kept engineering managers accountable.

## Automate Follow-up

A simple Lambda routine closed the loop—terminating orphaned snapshots, right-sizing over-provisioned nodes, and notifying owners for manual approvals where required. These automations alone delivered $76k in annualised savings.

## Lessons Learned

1. **Governance needs empathy.** Provide recommendations with context, not just red alerts.
2. **Dashboards beat spreadsheets.** Real-time views drive action faster than monthly exports.
3. **Celebrate wins.** Publishing a monthly FinOps scorecard kept engagement high.

Want a similar accelerator for your platform? [Reach out]({{ '/contact/' | relative_url }}) and we’ll share the templates and Terraform modules we use to kick-start FinOps programmes.
