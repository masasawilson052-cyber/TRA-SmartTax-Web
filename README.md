# KodiRahisi AI — TRA Innovation Prototype

KodiRahisi AI is an **independent innovation prototype** for Tanzania's micro and small businesses. It demonstrates how daily records, guided tax assistance, receipt review, reminders and links to approved TRA services could be combined into a simpler compliance journey.

> **Important:** This repository is not an official Tanzania Revenue Authority (TRA) production system. It has no live taxpayer-account, payment, filing, EFD/EFDMS or production-AI connection. Receipt reading runs on the device.

## What is functional in this public build

- Responsive landing page and application shell.
- English / Kiswahili switching for the core workflow.
- Guided “Amina's Shop” taxpayer journey.
- Rule-linked **presumptive income-tax guidance calculator** for eligible resident individuals.
- On-device image/PDF receipt reading, saved records, record-derived totals and CSV export.
- Editable receipt-review fields and explicit taxpayer confirmation.
- Downloadable `.ics` calendar reminders for dates supported by current TRA guidance.
- Clearly labeled e-receipt **integration demonstration**.
- Pilot, KPI, privacy, security and responsible-AI evidence pages.
- Official links to TRA taxpayer services, tax guidance, tax calendar and receipt verification.

## What is intentionally simulated

- The guided assistant is currently a curated **rule-based demonstration**, not a live LLM/AI model.
- The receipt reader extracts actual text; every field requires review. Generative AI and voice remain planned.
- e-Receipt output is a demonstration only. It uses `KR-DEMO-*` references and is visibly marked **NOT VALID FOR TAX PURPOSES**.

## What a production pilot would require

- Formal TRA product ownership and approved system interfaces.
- Lawful data-processing purpose and privacy impact assessment.
- TIN-based identity, MFA/OTP, role-based access and session controls where approved.
- Approved tax-rules knowledge base with versioning and change control.
- AI/OCR evaluation, confidence thresholds, reason codes, human escalation and monitoring.
- Secure EFD/VFD/EFDMS integration for valid receipt issuance.
- Security testing, audit logging, incident response, backup and recovery.
- Controlled pilot evidence before any scale decision.

## Current official sources used for the strengthened prototype

The updated prototype avoids hard-coded claims where current rules are not sufficiently supported. The following official sources informed the current guidance:

- TRA — Income Tax for Individuals: https://www.tra.go.tz/page/income-tax-for-individuals
- TRA — VAT: https://www.tra.go.tz/page/value-added-tax-vat
- TRA — Skills Development Levy: https://www.tra.go.tz/page/skills-development-levy-sdl
- TRA — Tax Calendar: https://www.tra.go.tz/tax-calendar
- TRA — Taxpayer Portal: https://taxpayersportal.tra.go.tz/
- TRA — Receipt Verification: https://verify.tra.go.tz/Home/Index
- Tanzania Personal Data Protection Commission — Personal Data Protection Act, 2022: https://www.pdpc.go.tz/the-personal-data-protection-act-2022/

Tax rules can change. A production implementation should never rely on static frontend rules; it should use a TRA-maintained, version-controlled rules service.

## Recommended pilot from the submitted proposal

- **1,000** micro and small businesses
- **2** regions
- **4** business sectors
- **6 months** of operational testing
- Baseline → onboarding → live pilot → midpoint review → end-line → independent decision gate

Core measures: record completeness, on-time completion, task time, extraction correction rate, officer escalation, satisfaction, active use/dropout and compliance benefit relative to pilot cost.

## Deploying to the existing GitHub Pages repository

The project remains plain HTML/CSS/JavaScript. Replace the repository contents with the files in this folder and push to the same branch used by GitHub Pages.

Because the innovation proposal has already been submitted, **preserve a submission snapshot before changing the live site**:

```bash
git add .
git commit -m "Preserve competition submission snapshot"
git tag competition-submission-2026
```

Then apply the strengthened version and commit it separately, for example:

```bash
git add .
git commit -m "Strengthen prototype transparency, safety and pilot evidence"
git push
git push origin competition-submission-2026
```

This makes post-submission improvements transparent in Git history.

## Files

- `index.html` — user interface and proposal evidence.
- `styles.css` — responsive design and visual system.
- `script.js` — demo behavior, calculator, reminders and safe local receipt preview.
- `AUDIT_REPORT.md` — detailed review and changes made.
- `CHANGELOG.md` — concise upgrade summary.
- `OFFICIAL_SOURCE_CHECKS.md` — official-source facts reviewed for the current demo.
- `DEPLOYMENT_NOTES.md` — safe post-submission GitHub Pages update steps.


## September 2026 website update

See [UPDATE_NOTES.md](UPDATE_NOTES.md) for the current capabilities, data storage and shared receipt-reader dependency. The submitted PDF and the previous Git commits are retained.
