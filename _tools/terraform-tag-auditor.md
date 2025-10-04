---
layout: tool
title: "Terraform Tag Auditor"
category: "Platform Automation"
description: "CLI utility and Terraform module that enforces tagging standards across AWS, Azure, and GCP from your CI/CD pipelines."
tech_stack:
  - Terraform
  - Go
  - GitHub Actions
features:
  - Validates required business and cost tags during plan/apply
  - Generates compliance reports as JSON and HTML artefacts
  - Integrates with GitHub Actions, GitLab CI, and Jenkins pipelines
github_url: "https://github.com/1devops/terraform-tag-auditor"
order: 2
permalink: /tools/terraform-tag-auditor/
---

The auditor keeps tagging policies consistent by blocking non-compliant Terraform plans, producing remediation hints, and emailing weekly compliance summaries to FinOps teams.
