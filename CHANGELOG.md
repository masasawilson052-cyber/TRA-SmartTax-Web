# Changelog

## Competition-strengthening revision — September 2026

### Critical credibility fixes
- Standardized visible branding to **KodiRahisi AI**.
- Removed claims that the public site generates “TRA-compliant” receipts.
- Reframed Virtual EFD as an **e-Receipt Integration Demo**.
- Demo receipt numbers now use `KR-DEMO-*`, not TRA-like `TZ-EFD-*` identifiers.
- Added a prominent **DEMO — NOT VALID FOR TAX PURPOSES** watermark.
- Removed fake “PDF downloaded”, “Google Calendar synced”, attachment and voice success alerts.
- Added real `.ics` reminder download for supported dates.
- Removed unsafe corporate/professional/transport tax estimates.
- Replaced the calculator with a focused presumptive-tax guidance calculator linked to current official TRA guidance.
- Added current 2026 new-business relief information as a note only; it never silently changes the result.

### AI / data honesty
- Labeled the public assistant as a **rule-based demo**.
- Removed unsupported fixed penalty amounts from chatbot answers.
- Added approved-source / human-escalation production principles.
- Added privacy guidance: do not enter real TINs, passwords or OTPs.
- Fixed a DOM-XSS weakness by rendering user chat input with `textContent` rather than injecting it as HTML.

### Receipt workflow
- Selected images are now previewed locally in the browser.
- Public build explicitly states that it does not upload the selected receipt to a backend.
- OCR is labeled as simulated.
- Added editable review fields, a demo-extraction button and explicit user confirmation.

### Competition evidence
- Added a 7-step guided **Amina's Shop** journey.
- Added a prototype transparency section distinguishing functional, simulated and production-only capabilities.
- Rebuilt proposal content around pilot KPIs, a six-month controlled pilot and responsible-AI/privacy controls.
- Added official TRA / PDPC source links.
- Improved focus and mobile presentation for new sections.

### Technical quality
- Added local theme/language persistence.
- Improved search and removed unsafe dynamic HTML from search results.
- Fixed proposal-tab reliance on the browser-global `event` object.
- Improved accessible focus styles and primary-button contrast.
- Added file-size validation for receipt previews.


### Final verification pass
- Removed an unsupported exact effective-date claim from the new-business relief note; the live prototype now states only what the reviewed public TRA guidance supports.
- Narrowed the 7th-day reminder to SDL, which is explicitly supported by current TRA SDL guidance.
- Replaced an illustrative sales-versus-tax chart whose numbers could be misread as legal tax calculations with an explicitly illustrative sales-versus-expenses chart.
- Removed the stale hard-coded dashboard date and labeled the example tax value with its illustrative basis.
- Added `OFFICIAL_SOURCE_CHECKS.md` and post-submission deployment notes.
