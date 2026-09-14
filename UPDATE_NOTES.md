# Website update — 14 September 2026

The existing proposal, guided journey and application structure are retained.

- One sidebar replaces the two-sidebar layout.
- The dashboard derives sales, expenses and counts from confirmed local records; illustrative scores and fixed dashboard figures were removed.
- Receipts can be read, corrected and saved. Duplicate checks use the source hash or matching date, party, type and amount.
- Records persist in local storage; source receipts are retained in IndexedDB on the same device. CSV export protects spreadsheet formula cells.
- Blank calculator input is rejected and eligibility/full-year confirmation is required. Existing published tax formulas are retained.
- Kiswahili payment questions no longer match the generic calculator route first. Main review and calculator labels are translated.

The optional document reader reuses the existing sibling `../TIDRE-web/io.js`, `core.js` and vendored assets on the same GitHub Pages host. If that reader cannot load, manual entry remains available. Moving this site independently requires hosting those reader assets alongside it or adjusting the reader URL in `workspace.js`.

Guidance remains curated; production AI, voice, authenticated taxpayer accounts and live TRA connections remain planned. The submitted PDF is unchanged.

Official references: [TRA services](https://www.tra.go.tz/), [individual income tax](https://www.tra.go.tz/page/income-tax-for-individuals), [receipt verification](https://verify.tra.go.tz/Home/Index).
