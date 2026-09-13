# Deployment Notes — Post-Submission Prototype Update

The competition proposal has already been submitted. Preserve an auditable snapshot of the version that existed at submission time before changing the public GitHub Pages site.

## Recommended Git sequence

```bash
git checkout main
git pull

git add .
git commit -m "Preserve competition submission snapshot" || true
git tag competition-submission-2026
git push origin competition-submission-2026
```

Then copy the strengthened files into the repository root and publish them separately:

```bash
git add .
git commit -m "Strengthen prototype transparency, safety and pilot evidence"
git push origin main
```

If the tag name already exists, do not move it. Keep the original snapshot unchanged and use a new descriptive tag only if necessary.

## Before sharing the updated live link

1. Open the GitHub Pages URL on a phone and a desktop.
2. Test English and Kiswahili switching.
3. Run Amina's guided journey from start to finish.
4. Test the presumptive calculator with TZS 6,500,000, TZS 9,000,000 and an amount above TZS 200,000,000.
5. Confirm the receipt screen says that extraction is illustrative and no receipt is uploaded to a backend.
6. Confirm every demo e-receipt says **DEMO — NOT VALID FOR TAX PURPOSES**.
7. Confirm official TRA / PDPC links open the expected official domains.
8. Never enter real passwords, OTPs, TIN credentials or confidential taxpayer records into this public prototype.

## Important boundary

This revision strengthens the demonstration and corrects misleading prototype behavior. It does not convert the public static site into a production TRA system. Live AI, OCR, EFD/EFDMS, taxpayer accounts, payments, filing, production identity and production security controls still require formal TRA-approved implementation.
