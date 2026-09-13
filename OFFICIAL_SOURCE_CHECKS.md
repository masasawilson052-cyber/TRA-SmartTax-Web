# Official Source Checks — 2 September 2026

This file records the public official guidance used to remove unsafe or unsupported claims from the KodiRahisi AI demonstration. It is **not legal advice** and it is not a substitute for a TRA-maintained production rules service.

## 1. Presumptive income tax — individual traders

Official source: Tanzania Revenue Authority — Income Tax for Individuals  
https://www.tra.go.tz/page/income-tax-for-individuals

The public TRA page reviewed on 2 September 2026 states that eligible resident individual traders under the presumptive regime are taxed by annual turnover and that turnover for this regime does not exceed TZS 200 million. The current page shows:

| Annual turnover | Records incomplete | Records complete |
|---|---:|---:|
| Up to TZS 4,000,000 | NIL | NIL |
| Above TZS 4,000,000 to TZS 7,000,000 | TZS 100,000 | 3% of turnover above TZS 4,000,000 |
| Above TZS 7,000,000 to TZS 11,000,000 | TZS 250,000 | TZS 90,000 + 3% of turnover above TZS 7,000,000 |
| Above TZS 11,000,000 to TZS 200,000,000 | 4% of turnover | 4% of turnover |

The same public page describes an application-based 12-month income-tax relief for an individual obtaining a TIN to start a business for the first time, subject to the stated presumptive-regime conditions and Commissioner approval. The prototype **does not automatically apply this relief**.

## 2. VAT return / payment timing

Official source: Tanzania Revenue Authority — Value Added Tax (VAT)  
https://www.tra.go.tz/page/value-added-tax-vat

The current TRA page states that VAT is payable by a registered person on or before the **20th day of the following month**, which is also the return deadline.

## 3. Skills Development Levy return timing

Official source: Tanzania Revenue Authority — Skills Development Levy (SDL)  
https://www.tra.go.tz/page/skills-development-levy-sdl

The current TRA page states that the monthly SDL return is submitted on or before the **7th day of the month following the payroll month**.

## 4. Tax calendar and official services

- TRA Tax Calendar: https://www.tra.go.tz/tax-calendar
- TRA Taxpayer Portal: https://identity.tra.go.tz/Account/Login
- TRA receipt verification: https://verify.tra.go.tz/Home/Index
- TRA EFD receipt API information: https://virtual.tra.go.tz/efdmsRctApi/

The prototype links users to official services instead of pretending to perform official taxpayer-account, filing, payment or fiscal-receipt actions.

## 5. Personal data protection

Official source: Personal Data Protection Commission — Personal Data Protection Act, 2022  
https://www.pdpc.go.tz/the-personal-data-protection-act-2022/

The Act establishes requirements for personal-data collection and processing in Tanzania. The public KodiRahisi prototype therefore avoids asking users to enter real passwords, OTPs or confidential taxpayer credentials and does not upload selected receipt files to a project backend.

## Production rule

A live tax system should not depend on static JavaScript tax rules. Production implementation should use formally approved, version-controlled rules and source data with effective dates, testing, audit history and named operational ownership.
