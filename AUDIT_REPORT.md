# KodiRahisi AI — Deep Technical & Competition Audit

## Executive assessment

The original repository had a strong visual concept and a clear SME-focused story, but several implementation details could undermine trust if a technical TRA reviewer inspected the code. The largest risks were not visual: they were **claims that looked production-ready while the code was only simulating them**.

The strengthened build deliberately improves credibility rather than adding random features. KodiRahisi remains focused on the submitted proposition: helping micro and small businesses build better records, understand routine tax steps and reach approved TRA services with greater confidence.

## High-risk issues found in the original code

### 1. Brand inconsistency
The UI mixed “KodiRahisi AI”, “SmartTax AI”, “TRA SmartTax AI” and a `TRA-SmartTax-Web` repository name. The live product now consistently presents itself as **KodiRahisi AI**, while the existing repository name can remain for URL continuity.

### 2. Virtual EFD overclaim
The original page stated that it generated **TRA-compliant electronic receipts**, while the JavaScript only created a random receipt number in the browser. That wording was too strong. The feature is now an **e-Receipt Integration Demo** and all generated output is explicitly non-fiscal.

### 3. Unsafe tax calculator
The original calculator used simplified percentages for multiple regimes. One serious example multiplied corporate **turnover** by 30% while the explanation referred to corporate tax on **profit**. Passenger transport, professional services and individual-income rules were also oversimplified.

The replacement calculator only covers the presumptive-tax schedule for eligible resident individual businesses and shows the source and assumptions. Complex regimes are intentionally not guessed.

### 4. Simulated OCR shown as AI extraction
The old `simulateScan()` simply waited 2.5 seconds and then displayed fixed TANESCO data, regardless of the uploaded file. The new flow previews the actual selected image locally, clearly labels OCR as simulated, gives the user editable fields and requires explicit confirmation.

### 5. Chatbot was not production AI
The original `generateAIResponse()` used keyword `if/else` logic. The upgraded interface now says this directly. Production AI is described as requiring approved knowledge, evaluation, confidence thresholds, reason codes, change control and human escalation.

### 6. Fake-success UI
The original app used browser alerts such as “Reminder synced to your Google Calendar!”, “Listening...” and “PDF Downloaded!” even though those actions were not implemented. These were replaced with honest prototype notices; calendar reminders now generate an actual `.ics` file.

### 7. DOM-XSS weakness
User messages were inserted into the chat bubble through `innerHTML`. A user could inject HTML into the page. User text is now rendered with `textContent`; only trusted hard-coded assistant templates use HTML.

### 8. Unsupported penalty claims
The original assistant gave a fixed late-VAT penalty formula without a linked current legal source. It now avoids presenting an unverified fixed penalty and directs users to current official TRA guidance.

### 9. Overconfident security claims
The old proposal screen promised specific production controls such as local data residency, TLS 1.3 and AES-256 as if already implemented. The public repository has no backend, so those claims were not evidence of actual implementation. The strengthened version presents them as **production requirements / design controls**, not current system facts.

## Strong elements preserved

- Clear focus on Tanzania's micro and small businesses.
- English / Kiswahili concept.
- Simple dashboard and low-friction navigation.
- Daily-record → monthly-readiness idea.
- Taxpayer review before finalizing extracted information.
- Pilot-first thinking rather than immediate national rollout.
- Mobile-first visual structure.

## Competition-strengthening additions

### Guided 3-minute judge demo
A new **Amina's Shop** journey lets a reviewer understand the innovation without randomly clicking through menus. It demonstrates onboarding, receipt capture, confirmation, record organization, guidance, readiness and handoff to an official TRA service.

### Prototype transparency
The landing page now explicitly separates:
1. interactive features that work now;
2. AI/OCR behavior that is simulated;
3. production integrations requiring TRA approval.

This is designed to increase trust when the code is inspected.

### Pilot evidence
The prototype now surfaces the submitted pilot logic: 1,000 businesses, two regions, four sectors, six months, with baseline and decision gates. It also shows measurable KPIs instead of promising guaranteed revenue increases.

### Responsible AI
The site now makes the non-negotiable boundary visible: AI should not autonomously impose a tax liability, issue a penalty or transmit taxpayer information without approved legal and operational authority.

## Current calculator source note

The public calculator was aligned to the current official TRA “Income Tax for Individuals” page reviewed in September 2026. That page publishes the presumptive-tax schedule and currently describes a TZS 200 million turnover ceiling, as well as first-time-business relief conditions. The strengthened prototype deliberately avoids asserting an effective date that is not stated on that public guidance page.

A production system should **not** hard-code these rules into frontend JavaScript. The correct architecture is a TRA-maintained, version-controlled rules engine with effective dates and audit history.

## Remaining limitations after this upgrade

This is still a front-end proof-of-concept. It does not prove:
- real AI model accuracy;
- OCR accuracy;
- live EFD/EFDMS issuance;
- integration with taxpayer accounts or IDRAS;
- payment processing;
- production authentication or authorization;
- production security controls;
- measured compliance impact.

Those are appropriate subjects for the proposed controlled pilot, not claims for a public static prototype.

## Recommended next step if shortlisted

Do not broaden the product into a national mega-platform. KodiRahisi's advantage is focus. If shortlisted, the strongest next engineering step would be a small backend sandbox with:
1. versioned tax rules;
2. a real OCR experiment using synthetic/consented receipts;
3. confidence scoring and correction measurement;
4. audit logging;
5. mock/sandbox TRA interfaces; and
6. a pilot analytics dashboard that measures the KPIs already defined in the proposal.

