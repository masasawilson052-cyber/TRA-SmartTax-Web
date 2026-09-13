'use strict';

/**
 * KodiRahisi AI — independent innovation prototype.
 * This public build intentionally has no live TRA, payment, EFD, taxpayer-account,
 * OCR or production-AI integration. It demonstrates user journeys and controls.
 */

const OFFICIAL = {
    traHome: 'https://www.tra.go.tz/',
    taxpayerPortal: 'https://identity.tra.go.tz/Account/Login',
    incomeTaxIndividuals: 'https://www.tra.go.tz/page/income-tax-for-individuals',
    taxCalendar: 'https://www.tra.go.tz/tax-calendar',
    receiptVerification: 'https://verify.tra.go.tz/Home/Index',
    pdpcAct: 'https://www.pdpc.go.tz/the-personal-data-protection-act-2022/'
};

const translations = {
    en: {
        navJourney: 'Guided Demo',
        navAssistant: 'Guided Assistant',
        navDashboard: 'Dashboard',
        navCalculator: 'Tax Calculator',
        navRecords: 'Receipt Capture & Review',
        navDeadlines: 'Deadlines',
        navEfd: 'e-Receipt Integration Demo',
        navProposal: 'Pilot, Safety & Evidence',
        darkMode: 'Dark Mode',
        aiGreetTitle: 'How can I help you today?',
        inputPlaceholder: 'Ask KodiRahisi AI demo...',
        disclaimer: 'KodiRahisi AI is a guided prototype, not official tax advice. Verify current rules and complete formal actions through TRA.',
        sg1Title: 'Register for TIN', sg1Sub: 'Find the official starting point', sg1Prompt: 'How do I start TIN registration?',
        sg2Title: 'Estimate Tax', sg2Sub: 'Use the focused presumptive calculator', sg2Prompt: 'How can I estimate presumptive tax?',
        sg3Title: 'Late Filing', sg3Sub: 'Understand the safe next step', sg3Prompt: 'What should I do if I file late?',
        sg4Title: 'e-Receipt / EFD', sg4Sub: 'Understand the proposed integration', sg4Prompt: 'How would the e-Receipt / EFD feature work?',
        sg5Prompt: 'How do I file a tax return?',
        sg6Prompt: 'How should I make an official tax payment?',
        chip1: 'TIN Registration', chip2: 'Estimate Tax', chip3: 'Late Filing', chip4: 'e-Receipt / EFD', chip5: 'File Returns', chip6: 'Official Payment',
        dashTitle: 'Hello, Amina.', dashSubtitle: 'Here is your illustrative tax-readiness summary.', dashTax: 'Example Tax Estimate', dashDeadline: 'Next Reminder', dashReceipts: 'Demo Records',
        recordsTitle: 'Receipt Capture & Review',
        remTitle: 'Tax Calendar & Reminders', remSub: 'Use verified dates where available and confirm current obligations with TRA.',
        deadVat: 'Value Added Tax (VAT) Return / Payment', deadVatSub: 'TRA states VAT is due on or before the 20th day of the following month.',
        deadPaye: 'Skills Development Levy (SDL)', deadPayeSub: 'TRA states the monthly SDL return is due on or before the 7th day of the month following the payroll month.',
        deadCorp: 'Estimated Income Tax Instalment', deadCorpSub: "The schedule depends on the taxpayer's year of income. Confirm the applicable date in official TRA guidance.",
        efdTitle: 'e-Receipt Integration Demo', efdSub: 'Demonstrates a proposed receipt-preparation flow. This public prototype does not issue legal TRA fiscal receipts and is not connected to EFDMS.',
        efdFormTitle: 'Prepare Demo e-Receipt', efdCust: 'Customer Name (Optional)', efdDesc: 'Item Description', efdAmt: 'Amount (TZS)', efdBtn: 'Generate demo receipt',
        propTitle: 'Pilot, Safety & Evidence', propSub: 'How the innovation would be tested, governed and scaled only with evidence.',
        chartTitle: 'Illustrative Quarterly Sales & Expenses (TZS)',
        uploadTitle: 'Tap to preview a receipt', scanTitle: 'Proposed Extraction Review', scanConfirm: 'Confirm demo record'
    },
    sw: {
        navJourney: 'Onyesho la Hatua',
        navAssistant: 'Msaidizi wa Mwongozo',
        navDashboard: 'Dashibodi',
        navCalculator: 'Kikokotoo cha Kodi',
        navRecords: 'Pakia na Hakiki Risiti',
        navDeadlines: 'Tarehe Muhimu',
        navEfd: 'Onyesho la Muunganiko wa e-Risiti',
        navProposal: 'Majaribio, Usalama na Ushahidi',
        darkMode: 'Hali ya Giza',
        aiGreetTitle: 'Nikusaidie nini leo?',
        inputPlaceholder: 'Uliza onyesho la KodiRahisi AI...',
        disclaimer: 'KodiRahisi AI ni onyesho la mwongozo, si ushauri rasmi wa kodi. Thibitisha kanuni za sasa na ukamilishe hatua rasmi kupitia TRA.',
        sg1Title: 'Usajili wa TIN', sg1Sub: 'Fungua njia rasmi ya kuanzia', sg1Prompt: 'Ninaanzaje usajili wa TIN?',
        sg2Title: 'Kadiria Kodi', sg2Sub: 'Tumia kikokotoo cha mfumo wa makadirio', sg2Prompt: 'Nawezaje kukadiria kodi ya presumptive?',
        sg3Title: 'Kuchelewa Kuwasilisha', sg3Sub: 'Jua hatua salama inayofuata', sg3Prompt: 'Nifanye nini nikichelewa kuwasilisha ritani?',
        sg4Title: 'e-Risiti / EFD', sg4Sub: 'Elewa muunganiko unaopendekezwa', sg4Prompt: 'Sehemu ya e-Risiti / EFD ingefanyaje kazi?',
        sg5Prompt: 'Ninawasilishaje ritani ya kodi?',
        sg6Prompt: 'Nifanyeje malipo rasmi ya kodi?',
        chip1: 'Usajili wa TIN', chip2: 'Kadiria Kodi', chip3: 'Kuchelewa', chip4: 'e-Risiti / EFD', chip5: 'Wasilisha Ritani', chip6: 'Malipo Rasmi',
        dashTitle: 'Habari, Amina.', dashSubtitle: 'Huu ni mfano wa hali ya utayari wa rekodi zako za kodi.', dashTax: 'Mfano wa Kadirio la Kodi', dashDeadline: 'Kikumbusho Kijacho', dashReceipts: 'Rekodi za Mfano',
        recordsTitle: 'Pakia na Hakiki Risiti',
        remTitle: 'Kalenda ya Kodi na Vikumbusho', remSub: 'Tumia tarehe zilizothibitishwa pale inapowezekana na thibitisha wajibu wako wa sasa kupitia TRA.',
        deadVat: 'Ritani / Malipo ya VAT', deadVatSub: 'TRA inaeleza VAT inalipwa na ritani kuwasilishwa kabla au tarehe 20 ya mwezi unaofuata.',
        deadPaye: 'Skills Development Levy (SDL)', deadPayeSub: 'TRA inaeleza ritani ya SDL ya mwezi huwasilishwa kabla au tarehe 7 ya mwezi unaofuata mwezi wa mishahara.',
        deadCorp: 'Awamu ya Makadirio ya Kodi ya Mapato', deadCorpSub: 'Ratiba hutegemea mwaka wa mapato wa mlipakodi. Thibitisha tarehe rasmi kupitia TRA.',
        efdTitle: 'Onyesho la Muunganiko wa e-Risiti', efdSub: 'Inaonyesha mtiririko unaopendekezwa. Onyesho hili halitoi risiti halali ya TRA wala halijaunganishwa na EFDMS.',
        efdFormTitle: 'Andaa e-Risiti ya Mfano', efdCust: 'Jina la Mteja (Si lazima)', efdDesc: 'Maelezo ya Bidhaa/Huduma', efdAmt: 'Kiasi (TZS)', efdBtn: 'Tengeneza risiti ya mfano',
        propTitle: 'Majaribio, Usalama na Ushahidi', propSub: 'Jinsi ubunifu ungejaribiwa, kusimamiwa na kupanuliwa baada ya ushahidi.',
        chartTitle: 'Mfano wa Mauzo na Gharama kwa Robo Mwaka (TZS)',
        uploadTitle: 'Gusa kuona risiti', scanTitle: 'Onyesho la Uhakiki wa Data', scanConfirm: 'Thibitisha rekodi ya mfano'
    }
};

let currentLang = 'en';
let taxChartInstance = null;
let toastTimer = null;
let journeyStep = 0;

function storageSet(key, value) { try { window.localStorage.setItem(key, value); } catch (_) { /* unavailable in some local preview contexts */ } }
function storageGet(key) { try { return window.localStorage.getItem(key); } catch (_) { return null; } }

const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
};

function setLanguage(lang) {
    currentLang = translations[lang] ? lang : 'en';
    const t = translations[currentLang];
    document.documentElement.lang = currentLang === 'sw' ? 'sw' : 'en';
    storageSet('kodirahisi-language', currentLang);

    document.getElementById('btn-en')?.classList.toggle('active', currentLang === 'en');
    document.getElementById('btn-sw')?.classList.toggle('active', currentLang === 'sw');

    const mapping = {
        't-nav-journey': t.navJourney,
        't-nav-assistant': t.navAssistant,
        't-nav-dashboard': t.navDashboard,
        't-nav-calculator': t.navCalculator,
        't-nav-records': t.navRecords,
        't-nav-deadlines': t.navDeadlines,
        't-nav-efd': t.navEfd,
        't-nav-proposal': t.navProposal,
        't-dark-mode': t.darkMode,
        't-ai-greet-title': t.aiGreetTitle,
        't-disclaimer': t.disclaimer,
        't-sg1-title': t.sg1Title, 't-sg1-sub': t.sg1Sub,
        't-sg2-title': t.sg2Title, 't-sg2-sub': t.sg2Sub,
        't-sg3-title': t.sg3Title, 't-sg3-sub': t.sg3Sub,
        't-sg4-title': t.sg4Title, 't-sg4-sub': t.sg4Sub,
        't-chip-1': t.chip1, 't-chip-2': t.chip2, 't-chip-3': t.chip3,
        't-chip-4': t.chip4, 't-chip-5': t.chip5, 't-chip-6': t.chip6,
        't-dash-title': t.dashTitle, 't-dash-subtitle': t.dashSubtitle,
        't-dash-tax': t.dashTax, 't-dash-deadline': t.dashDeadline, 't-dash-receipts': t.dashReceipts,
        't-records-title': t.recordsTitle,
        't-reminders-title': t.remTitle, 't-reminders-sub': t.remSub,
        't-dead-vat': t.deadVat, 't-dead-vat-sub': t.deadVatSub,
        't-dead-paye': t.deadPaye, 't-dead-paye-sub': t.deadPayeSub,
        't-dead-corp': t.deadCorp, 't-dead-corp-sub': t.deadCorpSub,
        't-efd-title': t.efdTitle, 't-efd-sub': t.efdSub, 't-efd-form-title': t.efdFormTitle,
        't-efd-cust': t.efdCust, 't-efd-desc': t.efdDesc, 't-efd-amt': t.efdAmt, 't-efd-btn': t.efdBtn,
        't-prop-title': t.propTitle, 't-prop-sub': t.propSub,
        't-chart-title': t.chartTitle,
        't-upload-title': t.uploadTitle, 't-scan-title': t.scanTitle, 't-scan-confirm': t.scanConfirm
    };
    Object.entries(mapping).forEach(([id, value]) => setText(id, value));
    const chatInput = document.getElementById('chatInput');
    if (chatInput) chatInput.placeholder = t.inputPlaceholder;

    if (taxChartInstance) {
        taxChartInstance.data.datasets[0].label = currentLang === 'sw' ? 'Mauzo ya Mfano' : 'Illustrative Sales';
        taxChartInstance.data.datasets[1].label = currentLang === 'sw' ? 'Gharama za Mfano' : 'Illustrative Expenses';
        taxChartInstance.update();
    }
    renderJourneyStep();
    if (document.querySelector('.deadline-date')) initializeDeadlines();
}

function toggleTheme() {
    const checkbox = document.getElementById('checkbox');
    const dark = Boolean(checkbox?.checked);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    storageSet('kodirahisi-theme', dark ? 'dark' : 'light');
    if (taxChartInstance) {
        const textColor = dark ? '#9CA3AF' : '#6B7280';
        taxChartInstance.options.scales.x.ticks.color = textColor;
        taxChartInstance.options.scales.y.ticks.color = textColor;
        taxChartInstance.update();
    }
}

function showPrototypeNotice(message) {
    const toast = document.getElementById('prototype-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 5000);
}

function initChart() {
    const canvas = document.getElementById('taxChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (taxChartInstance) taxChartInstance.destroy();

    const ctx = canvas.getContext('2d');
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = dark ? '#9CA3AF' : '#6B7280';
    const gridColor = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
    const revenueGradient = ctx.createLinearGradient(0, 0, 0, 400);
    revenueGradient.addColorStop(0, 'rgba(37, 99, 235, 0.35)');
    revenueGradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
    const expenseGradient = ctx.createLinearGradient(0, 0, 0, 400);
    expenseGradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
    expenseGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

    taxChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                { label: currentLang === 'sw' ? 'Mauzo ya Mfano' : 'Illustrative Sales', data: [4500000, 5200000, 4800000, 6000000], borderColor: '#2563EB', backgroundColor: revenueGradient, borderWidth: 3, tension: 0.35, fill: true, pointRadius: 4 },
                { label: currentLang === 'sw' ? 'Gharama za Mfano' : 'Illustrative Expenses', data: [3100000, 3600000, 3400000, 4000000], borderColor: '#10B981', backgroundColor: expenseGradient, borderWidth: 3, tension: 0.35, fill: true, pointRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { labels: { color: textColor, usePointStyle: true, padding: 20 } },
                tooltip: {
                    backgroundColor: dark ? 'rgba(0,0,0,.86)' : 'rgba(255,255,255,.96)',
                    titleColor: dark ? '#fff' : '#111827', bodyColor: dark ? '#fff' : '#111827',
                    borderColor: 'rgba(0,0,0,.1)', borderWidth: 1, padding: 12,
                    callbacks: { label: (context) => `${context.dataset.label}: TZS ${Number(context.raw).toLocaleString()}` }
                }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor, callback: (v) => `${(v / 1000000).toFixed(v ? 1 : 0)}M` } },
                x: { grid: { display: false }, ticks: { color: textColor } }
            }
        }
    });
}

function navigateTo(targetId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    const targetView = document.getElementById(`view-${targetId}`);
    if (targetView) targetView.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.toggle('active', nav.getAttribute('data-target') === targetId));
    if (targetId === 'dashboard') setTimeout(initChart, 30);
    if (targetId === 'journey') renderJourneyStep();

    const sidebar = document.querySelector('.sidebar-secondary');
    const overlay = document.getElementById('mobile-overlay');
    sidebar?.classList.remove('mobile-active');
    overlay?.classList.remove('active');
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo(item.getAttribute('data-target'));
    });
});

function launchApp(target = 'dashboard') {
    const landing = document.getElementById('landing-page');
    const mainApp = document.getElementById('main-app');
    if (!landing || !mainApp) return;
    landing.style.opacity = '0';
    landing.style.transition = 'opacity .35s ease';
    setTimeout(() => {
        landing.style.display = 'none';
        mainApp.style.display = 'flex';
        navigateTo(target);
    }, 360);
}

function launchJourney() { launchApp('journey'); }

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar-secondary');
    const overlay = document.getElementById('mobile-overlay');
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle('mobile-active');
    overlay.classList.toggle('active', sidebar.classList.contains('mobile-active'));
}

// ---------------- Guided taxpayer journey ----------------
const journeySteps = [
    {
        icon: 'fa-user-check', title: "1. Onboard safely",
        en: 'Amina sees a clear data-use notice. This public prototype does not ask for her real TIN, password or OTP.',
        sw: 'Amina anaona taarifa wazi ya matumizi ya data. Onyesho hili haliombi TIN halisi, nenosiri au OTP.',
        action: null
    },
    {
        icon: 'fa-camera', title: '2. Capture a receipt',
        en: 'She selects a supplier receipt. The current public build previews the file locally and demonstrates the proposed AI-review step.',
        sw: 'Anachagua risiti ya muuzaji. Onyesho la sasa linaonyesha faili ndani ya kivinjari na kuonyesha hatua inayopendekezwa ya AI.',
        action: { label: 'Open Receipt Demo', target: 'records' }
    },
    {
        icon: 'fa-pen-to-square', title: '3. Confirm before saving',
        en: 'Proposed extracted fields are never treated as final just because AI suggested them. Amina reviews and corrects each field.',
        sw: 'Data iliyopendekezwa na AI haitachukuliwa kuwa ya mwisho bila uhakiki. Amina anahakiki na kurekebisha kila sehemu.',
        action: null
    },
    {
        icon: 'fa-folder-tree', title: '4. Organize monthly records',
        en: 'Confirmed sales and expenses form a clearer monthly record. The goal is readiness and traceability, not silent automatic filing.',
        sw: 'Mauzo na matumizi yaliyothibitishwa yanaunda rekodi bora ya mwezi. Lengo ni utayari na ufuatiliaji, si kuwasilisha bila uhakiki.',
        action: { label: 'See Dashboard', target: 'dashboard' }
    },
    {
        icon: 'fa-comments', title: '5. Understand the next step',
        en: 'The guided assistant explains routine concepts and sends uncertain or formal actions to official TRA channels.',
        sw: 'Msaidizi anaeleza mambo ya kawaida na kuelekeza masuala yasiyo na uhakika au hatua rasmi kwenye huduma za TRA.',
        action: { label: 'Try Guided Assistant', target: 'assistant' }
    },
    {
        icon: 'fa-list-check', title: '6. Review readiness',
        en: 'Amina sees missing records and upcoming dates early enough to act. Pilot measurement would test whether this improves timeliness.',
        sw: 'Amina anaona rekodi zinazokosekana na tarehe muhimu mapema. Majaribio yangepima kama hii inaboresha uwajibikaji kwa wakati.',
        action: { label: 'View Pilot Evidence', target: 'proposal' }
    },
    {
        icon: 'fa-arrow-up-right-from-square', title: '7. Continue to an approved service',
        en: 'KodiRahisi does not become a parallel tax authority. Formal registration, filing, payment and valid receipt actions continue through approved TRA services.',
        sw: 'KodiRahisi haitakuwa mfumo mbadala wa TRA. Usajili, ritani, malipo na risiti halali huendelea kupitia huduma rasmi za TRA.',
        action: { label: 'Open Official TRA Portal', url: OFFICIAL.taxpayerPortal }
    }
];

function renderJourneyStep() {
    const stage = document.getElementById('journey-stage');
    if (!stage) return;
    journeyStep = Math.max(0, Math.min(journeySteps.length - 1, journeyStep));
    const step = journeySteps[journeyStep];
    const copy = currentLang === 'sw' ? step.sw : step.en;
    let actionHtml = '';
    if (step.action?.target) actionHtml = `<button type="button" class="btn-primary journey-action" onclick="navigateTo('${step.action.target}')">${step.action.label} <i class="fa-solid fa-arrow-right"></i></button>`;
    if (step.action?.url) actionHtml = `<a class="btn-primary link-button journey-action" target="_blank" rel="noopener noreferrer" href="${step.action.url}">${step.action.label} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
    stage.innerHTML = `<div class="journey-icon"><i class="fa-solid ${step.icon}"></i></div><div><span class="status-pill">HUMAN CONTROL</span><h2>${step.title}</h2><p>${copy}</p>${actionHtml}</div>`;
    setText('journey-counter', `${journeyStep + 1} / ${journeySteps.length}`);
    const bar = document.getElementById('journey-progress-bar');
    if (bar) bar.style.width = `${((journeyStep + 1) / journeySteps.length) * 100}%`;
    const prev = document.getElementById('journey-prev');
    const next = document.getElementById('journey-next');
    if (prev) prev.disabled = journeyStep === 0;
    if (next) {
        next.disabled = journeyStep === journeySteps.length - 1;
        next.innerHTML = journeyStep === journeySteps.length - 1 ? 'Complete <i class="fa-solid fa-check"></i>' : 'Next <i class="fa-solid fa-arrow-right"></i>';
    }
}

function changeJourneyStep(delta) {
    journeyStep = Math.max(0, Math.min(journeySteps.length - 1, journeyStep + delta));
    renderJourneyStep();
}

// ---------------- Focused tax guidance calculator ----------------
function calculateTax() {
    const revenue = Number(document.getElementById('calc-revenue')?.value || 0);
    const recordStatus = document.getElementById('calc-records')?.value || 'complete';
    const result = document.getElementById('calc-result');
    const amountEl = document.getElementById('calc-amount');
    const explanationEl = document.getElementById('calc-explanation');
    const reliefEl = document.getElementById('calc-relief-note');
    if (!result || !amountEl || !explanationEl || !reliefEl) return;

    result.style.display = 'block';
    reliefEl.style.display = 'none';

    if (!Number.isFinite(revenue) || revenue < 0) {
        amountEl.textContent = '—';
        explanationEl.textContent = currentLang === 'sw' ? 'Weka mauzo ya mwaka yenye thamani sahihi.' : 'Enter a valid non-negative annual turnover.';
        return;
    }

    if (revenue > 200_000_000) {
        amountEl.textContent = 'Outside demo scope';
        explanationEl.innerHTML = currentLang === 'sw'
            ? `Mauzo ya <strong>TZS ${revenue.toLocaleString()}</strong> yako nje ya upeo wa kikokotoo hiki cha mfano. Tumia mwongozo rasmi wa TRA kwa mfumo unaokuhusu.`
            : `Turnover of <strong>TZS ${revenue.toLocaleString()}</strong> is outside this prototype's presumptive-tax scope. Use official TRA guidance for the applicable regime.`;
        return;
    }

    let tax = 0;
    let rule = '';
    if (revenue <= 4_000_000) {
        tax = 0;
        rule = currentLang === 'sw' ? 'Mauzo hayazidi TZS 4,000,000: kiwango cha mfumo huu ni NIL.' : 'Turnover does not exceed TZS 4,000,000: the presumptive schedule shows NIL.';
    } else if (revenue <= 7_000_000) {
        if (recordStatus === 'complete') {
            tax = 0.03 * (revenue - 4_000_000);
            rule = currentLang === 'sw' ? 'Kwa rekodi zinazokidhi masharti: 3% ya mauzo yanayozidi TZS 4,000,000.' : 'With the applicable record-keeping requirement met: 3% of turnover above TZS 4,000,000.';
        } else {
            tax = 100_000;
            rule = currentLang === 'sw' ? 'Kwa rekodi zisizokidhi masharti: kiasi cha TZS 100,000 kwenye daraja hili.' : 'Without the applicable record-keeping requirement met: TZS 100,000 in this band.';
        }
    } else if (revenue <= 11_000_000) {
        if (recordStatus === 'complete') {
            tax = 90_000 + (0.03 * (revenue - 7_000_000));
            rule = currentLang === 'sw' ? 'Kwa rekodi zinazokidhi masharti: TZS 90,000 + 3% ya mauzo yanayozidi TZS 7,000,000.' : 'With the applicable record-keeping requirement met: TZS 90,000 + 3% of turnover above TZS 7,000,000.';
        } else {
            tax = 250_000;
            rule = currentLang === 'sw' ? 'Kwa rekodi zisizokidhi masharti: kiasi cha TZS 250,000 kwenye daraja hili.' : 'Without the applicable record-keeping requirement met: TZS 250,000 in this band.';
        }
    } else {
        tax = revenue * 0.04;
        rule = currentLang === 'sw' ? 'Kwa mauzo zaidi ya TZS 11,000,000 hadi TZS 200,000,000, ukurasa wa sasa wa TRA unaonyesha 4% ya mauzo.' : 'For turnover above TZS 11,000,000 up to TZS 200,000,000, the current TRA page shows 4% of turnover.';
    }

    tax = Math.max(0, Math.round(tax));
    amountEl.textContent = `TZS ${tax.toLocaleString()}`;
    explanationEl.innerHTML = `<strong>${currentLang === 'sw' ? 'Mauzo yaliyowekwa' : 'Turnover entered'}:</strong> TZS ${revenue.toLocaleString()}<br><strong>${currentLang === 'sw' ? 'Kanuni iliyotumika' : 'Rule applied'}:</strong> ${rule}`;

    if (document.getElementById('calc-new-business')?.checked) {
        reliefEl.style.display = 'flex';
        reliefEl.innerHTML = currentLang === 'sw'
            ? '<i class="fa-solid fa-seedling"></i><div><strong>Kumbuka msamaha wa biashara mpya:</strong> TRA inaeleza kuwa mtu anayepata TIN kwa mara ya kwanza kuanzisha biashara anaweza kuomba msamaha wa kodi ya mapato wa miezi 12, kwa masharti ya mfumo wa presumptive na idhini ya TRA. Onyesho hili halipunguzi makadirio moja kwa moja.</div>'
            : '<i class="fa-solid fa-seedling"></i><div><strong>New-business relief note:</strong> TRA states that an individual obtaining a TIN for the first time to commence business may apply for 12 months of income-tax relief, subject to presumptive-regime conditions and TRA approval. This prototype does not automatically reduce the estimate.</div>';
    }
}

// ---------------- Guided assistant (rule-based demonstration) ----------------
function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}

function sendSuggestion(key) {
    const prompt = translations[currentLang]?.[`${key}Prompt`] || key;
    const input = document.getElementById('chatInput');
    if (!input) return;
    input.value = prompt;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input?.value.trim();
    if (!message) return;

    document.getElementById('aiGreeting')?.style.setProperty('display', 'none');
    const chatBox = document.getElementById('chatBox');
    const suggestions = document.getElementById('bottomSuggestions');
    if (chatBox) chatBox.style.display = 'flex';
    if (suggestions) suggestions.style.display = 'flex';

    appendMessage('user', message);
    input.value = '';
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        appendMessage('ai', generateAIResponse(message));
    }, 550);
}

function appendMessage(sender, text) {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fa-solid fa-user"></i>' : '<i class="fa-solid fa-sparkles"></i>';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    if (sender === 'user') {
        // Never inject user input as HTML.
        const p = document.createElement('p');
        p.textContent = text;
        bubble.appendChild(p);
    } else {
        // AI-demo content is hard-coded below and does not contain user-provided HTML.
        bubble.innerHTML = text;
    }

    msgDiv.append(avatar, bubble);
    chatBox.appendChild(msgDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ai-message';
    msgDiv.id = 'typing-indicator';
    msgDiv.innerHTML = '<div class="msg-avatar"><i class="fa-solid fa-sparkles"></i></div><div class="msg-bubble"><div class="typing-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div></div>';
    chatBox.appendChild(msgDiv);
    scrollToBottom();
}
function removeTypingIndicator() { document.getElementById('typing-indicator')?.remove(); }
function scrollToBottom() { const box = document.getElementById('chatBox'); if (box) box.scrollTop = box.scrollHeight; }

function linkButton(label, url) {
    return `<a class="btn-primary link-button inline-action" target="_blank" rel="noopener noreferrer" href="${url}">${label} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
}
function internalButton(label, target) {
    return `<button type="button" class="btn-primary inline-action" onclick="navigateTo('${target}')">${label} <i class="fa-solid fa-arrow-right"></i></button>`;
}

function generateAIResponse(message) {
    const m = message.toLowerCase();
    const sw = currentLang === 'sw';
    const prefix = `<div class="assistant-answer-label"><i class="fa-solid fa-flask"></i> ${sw ? 'MWONGOZO WA MFANO' : 'PROTOTYPE GUIDANCE'}</div>`;

    if (/privacy|data|otp|password|faragha|taarifa|nenosiri/.test(m)) {
        return prefix + (sw
            ? `<p><strong>Usalama kwanza:</strong> Usitumie TIN halisi, nenosiri, OTP au taarifa nyeti kwenye onyesho hili la umma. Faili ya risiti unayochagua inaonyeshwa ndani ya kivinjari na script hii haitumi kwenye backend.</p><p>Mfumo wa uzalishaji ungehitaji msingi wa kisheria, upunguzaji wa data, udhibiti wa ufikiaji, muda wa kuhifadhi na tathmini ya faragha.</p>${internalButton('Angalia Usalama na Faragha', 'proposal')}`
            : `<p><strong>Safety first:</strong> Do not enter a real TIN, password, OTP or confidential taxpayer data in this public prototype. A selected receipt is previewed locally and this script does not upload it to a backend.</p><p>A production service would require lawful purpose, data minimisation, access controls, retention rules and privacy assessment.</p>${internalButton('See Safety & Privacy', 'proposal')}`);
    }
    if (/calculate|estimate|presumptive|kadiria|makadirio|kodi/.test(m)) {
        return prefix + (sw
            ? `<p>Kodi hutegemea aina ya mlipakodi, shughuli, mauzo/mapato, rekodi na kanuni za sasa. Onyesho hili linakokotoa tu ratiba ya <strong>presumptive income tax</strong> kwa watu binafsi wanaostahili.</p><p>Kikokotoo kinaonyesha chanzo na hakibadilishi tathmini rasmi ya TRA.</p>${internalButton('Fungua Kikokotoo', 'calculator')}`
            : `<p>Tax depends on taxpayer type, activity, turnover/income, records and current law. This demo calculates only the <strong>presumptive income-tax schedule</strong> for eligible resident individual businesses.</p><p>The calculator shows its rule source and does not replace a TRA assessment.</p>${internalButton('Open Tax Calculator', 'calculator')}`);
    }
    if (/tin|register|registration|sajili|usajili/.test(m)) {
        return prefix + (sw
            ? `<p>Usajili rasmi wa TIN unapaswa kufanywa kupitia huduma rasmi za TRA. Mahitaji hutegemea aina ya mwombaji na biashara, hivyo onyesho hili halitengenezi orodha ya nyaraka kama sheria ya kudumu.</p><p><strong>Usishiriki nenosiri au OTP hapa.</strong></p>${linkButton('Fungua TRA Taxpayer Portal', OFFICIAL.taxpayerPortal)}`
            : `<p>Official TIN registration should be completed through TRA's approved services. Requirements vary by applicant and business type, so this prototype does not present a fixed document list as legal advice.</p><p><strong>Never share a password or OTP with this prototype.</strong></p>${linkButton('Open TRA Taxpayer Portal', OFFICIAL.taxpayerPortal)}`);
    }
    if (/penalty|penalties|late|interest|faini|adhabu|chelewa/.test(m)) {
        return prefix + (sw
            ? `<p>Kuchelewa kuwasilisha au kulipa kunaweza kusababisha adhabu na riba kulingana na aina ya kodi na hali husika. Viwango hubadilika, hivyo onyesho hili halitoi kiwango cha faini kisichothibitishwa.</p><p>Thibitisha tarehe na masharti ya sasa kupitia TRA.</p>${linkButton('Fungua Kalenda Rasmi ya Kodi', OFFICIAL.taxCalendar)}`
            : `<p>Late filing or payment can lead to statutory penalties and interest depending on the tax and circumstances. Rates can change, so this prototype intentionally avoids inventing a fixed penalty figure.</p><p>Confirm the current deadline and rule directly with TRA.</p>${linkButton('Open Official TRA Tax Calendar', OFFICIAL.taxCalendar)}`);
    }
    if (/efd|receipt|e-receipt|risiti/.test(m)) {
        return prefix + (sw
            ? `<p>Sehemu ya e-Risiti hapa ni <strong>onjesho la muunganiko</strong>. Haitoi risiti halali ya TRA. Mfumo wa uzalishaji ungehitaji EFD/VFD au interface iliyoidhinishwa, usalama, namba rasmi na rekodi za ukaguzi.</p>${internalButton('Angalia Onyesho la e-Risiti', 'efd')} ${linkButton('Hakiki Risiti Halisi ya TRA', OFFICIAL.receiptVerification)}`
            : `<p>The e-Receipt feature here is an <strong>integration demonstration</strong>. It does not issue a legal TRA fiscal receipt. Production would require an approved EFD/VFD or taxpayer-system interface, security controls, official numbering and auditability.</p>${internalButton('View e-Receipt Demo', 'efd')} ${linkButton('Verify a Real TRA Receipt', OFFICIAL.receiptVerification)}`);
    }
    if (/file|return|ritani|wasilisha/.test(m)) {
        return prefix + (sw
            ? `<p>KodiRahisi inapendekeza kusaidia mlipakodi kufika kwenye hatua ya kuwasilisha akiwa na rekodi zilizo wazi. Uwasilishaji rasmi unabaki kwenye huduma zilizoidhinishwa za TRA.</p>${linkButton('Fungua TRA Taxpayer Portal', OFFICIAL.taxpayerPortal)}`
            : `<p>KodiRahisi is designed to help a taxpayer reach filing with clearer records and fewer preventable mistakes. Formal submission remains within approved TRA services.</p>${linkButton('Open TRA Taxpayer Portal', OFFICIAL.taxpayerPortal)}`);
    }
    if (/pay|payment|ussd|lipa|malipo/.test(m)) {
        return prefix + (sw
            ? `<p>Onyesho hili <strong>halikusanyi malipo</strong> wala halitengenezi control number. Malipo rasmi yanapaswa kufanywa kwa njia na control number zilizotolewa kupitia huduma rasmi za TRA/Serikali.</p>${linkButton('Fungua TRA', OFFICIAL.traHome)}`
            : `<p>This prototype <strong>does not collect money</strong> and does not generate payment control numbers. Official payments should use approved TRA/Government channels and the control number generated for the specific obligation.</p>${linkButton('Open Official TRA', OFFICIAL.traHome)}`);
    }

    return prefix + (sw
        ? `<p>Mimi ni onyesho la KodiRahisi AI linalotumia mwongozo wa kanuni zilizowekwa ndani ya ukurasa huu. Si modeli ya AI ya uzalishaji.</p><p>Naweza kukuonyesha TIN, makadirio ya presumptive tax, tarehe muhimu, risiti, faragha na njia rasmi za TRA.</p>${internalButton('Anza Safari ya Amina', 'journey')}`
        : `<p>I am the KodiRahisi AI guided demonstration. The public build uses curated rule-based responses rather than a production AI model.</p><p>I can demonstrate TIN guidance, presumptive-tax estimates, deadlines, receipt review, privacy controls and routes to official TRA services.</p>${internalButton("Start Amina's Journey", 'journey')}`);
}

// ---------------- Receipt capture & review ----------------
function simulateScan() {
    const input = document.getElementById('file-upload');
    const file = input?.files?.[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
        showPrototypeNotice('For this public demo, choose a file smaller than 8 MB.');
        input.value = '';
        return;
    }

    document.getElementById('upload-container').style.display = 'none';
    document.getElementById('receipt-preview-container').style.display = 'block';
    document.getElementById('empty-state').style.display = 'none';
    document.getElementById('scan-details').style.display = 'none';
    document.getElementById('success-state').style.display = 'none';
    document.getElementById('scan-loading').style.display = 'block';

    const img = document.getElementById('receipt-image-preview');
    const filePreview = document.getElementById('receipt-file-preview');
    const fileName = document.getElementById('receipt-file-name');
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
            img.src = reader.result;
            img.style.display = 'block';
            filePreview.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        img.style.display = 'none';
        filePreview.style.display = 'flex';
        fileName.textContent = file.name;
    }

    setTimeout(() => {
        document.getElementById('scan-loading').style.display = 'none';
        document.getElementById('scan-details').style.display = 'block';
        const date = document.getElementById('scan-date');
        if (date && !date.value) date.value = new Date().toISOString().slice(0, 10);
    }, 650);
}

function loadDemoExtraction() {
    const today = new Date().toISOString().slice(0, 10);
    document.getElementById('scan-date').value = today;
    document.getElementById('scan-seller').value = 'Mlimani Office Supplies — illustrative';
    document.getElementById('scan-total').value = '50000';
    document.getElementById('scan-tax').value = '7627.12';
    showPrototypeNotice('Illustrative extraction loaded. Correct any field before confirming.');
}

function confirmReceipt() {
    const confirmed = document.getElementById('scan-confirmed')?.checked;
    const total = Number(document.getElementById('scan-total')?.value || 0);
    if (!confirmed) {
        showPrototypeNotice('Please confirm that you reviewed the prototype fields before saving the demo record.');
        return;
    }
    if (!Number.isFinite(total) || total <= 0) {
        showPrototypeNotice('Enter a valid total amount before confirming the demo record.');
        return;
    }
    document.getElementById('scan-details').style.display = 'none';
    document.getElementById('success-state').style.display = 'block';
}

function resetScan() {
    const input = document.getElementById('file-upload');
    if (input) input.value = '';
    const img = document.getElementById('receipt-image-preview');
    if (img) { img.src = ''; img.style.display = 'none'; }
    document.getElementById('receipt-file-preview').style.display = 'none';
    document.getElementById('receipt-preview-container').style.display = 'none';
    document.getElementById('success-state').style.display = 'none';
    document.getElementById('scan-details').style.display = 'none';
    document.getElementById('upload-container').style.display = 'block';
    document.getElementById('empty-state').style.display = 'block';
    ['scan-date', 'scan-seller', 'scan-total', 'scan-tax'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    const cb = document.getElementById('scan-confirmed'); if (cb) cb.checked = false;
}

// ---------------- e-Receipt integration demonstration ----------------
function generateReceipt() {
    const cust = document.getElementById('efd-input-cust')?.value.trim() || 'Cash Customer';
    const desc = document.getElementById('efd-input-desc')?.value.trim() || 'General item / service';
    const amount = Number(document.getElementById('efd-input-amt')?.value || 0);
    if (!Number.isFinite(amount) || amount <= 0) {
        showPrototypeNotice('Enter a valid amount to generate the demonstration receipt.');
        return;
    }

    setText('efd-out-cust', `Customer: ${cust}`);
    setText('efd-out-desc', desc);
    const formatted = amount.toLocaleString('en-TZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    setText('efd-out-amt', formatted);
    setText('efd-out-total', formatted);
    const refValue = (window.crypto && window.crypto.getRandomValues) ? window.crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * 1e9);
    const ref = refValue.toString().slice(-7).padStart(7, '0');
    setText('efd-out-num', `Demo Ref: KR-DEMO-${ref}`);
    setText('efd-out-date', `Created: ${new Date().toLocaleString('en-TZ')}`);
    document.getElementById('efd-preview').style.display = 'block';
    showPrototypeNotice('Demo receipt created. It is not a legal TRA fiscal receipt.');
}

// ---------------- Calendar reminders ----------------
function nextDayOfMonth(day) {
    const now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), day, 9, 0, 0);
    if (date < new Date(now.getFullYear(), now.getMonth(), now.getDate())) date = new Date(now.getFullYear(), now.getMonth() + 1, day, 9, 0, 0);
    return date;
}
function formatDate(date) { return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }); }
function icsDate(date) { return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); }

function initializeDeadlines() {
    document.querySelectorAll('.deadline-date').forEach(el => {
        const rule = el.dataset.rule;
        if (rule === 'vat') el.textContent = formatDate(nextDayOfMonth(20));
        if (rule === 'paye') el.textContent = formatDate(nextDayOfMonth(7));
        if (rule === 'estimated') el.textContent = currentLang === 'sw' ? 'Thibitisha ratiba' : 'Confirm official schedule';
    });
}

function downloadReminder(button) {
    const card = button.closest('.content-card');
    const dateEl = card?.querySelector('.deadline-date');
    const rule = dateEl?.dataset.rule;
    if (rule === 'estimated') {
        showPrototypeNotice('Estimated income-tax instalment dates depend on the taxpayer year of income. Opening the official TRA calendar instead of inventing a date.');
        window.open(OFFICIAL.taxCalendar, '_blank', 'noopener,noreferrer');
        return;
    }
    const date = rule === 'vat' ? nextDayOfMonth(20) : nextDayOfMonth(7);
    const title = card?.querySelector('h3')?.textContent.trim() || 'TRA tax reminder';
    const end = new Date(date.getTime() + 30 * 60 * 1000);
    const description = `Personal reminder created by the KodiRahisi AI prototype. Confirm the current obligation and deadline with TRA: ${OFFICIAL.taxCalendar}`;
    const content = [
        'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//KodiRahisi AI Prototype//EN','BEGIN:VEVENT',
        `UID:${Date.now()}@kodirahisi-prototype`, `DTSTAMP:${icsDate(new Date())}`, `DTSTART:${icsDate(date)}`, `DTEND:${icsDate(end)}`,
        `SUMMARY:${title.replace(/,/g, '\\,')}`, `DESCRIPTION:${description.replace(/,/g, '\\,')}`, 'END:VEVENT','END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `kodirahisi-reminder-${rule}.ics`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    showPrototypeNotice('Calendar reminder downloaded. Confirm the current deadline with TRA before relying on it.');
}

// ---------------- Proposal tabs ----------------
function switchProposalTab(tabId, button) {
    document.querySelectorAll('.proposal-tab-content').forEach(tab => { tab.style.display = 'none'; });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.style.borderBottom = '3px solid transparent';
        btn.style.color = 'var(--text-muted)';
        btn.classList.remove('active');
    });
    const tab = document.getElementById(`tab-${tabId}`); if (tab) tab.style.display = 'block';
    if (button) {
        button.style.borderBottom = '3px solid var(--primary-accent)';
        button.style.color = 'var(--primary-accent)';
        button.classList.add('active');
    }
}

// ---------------- Search ----------------
const searchableItems = [
    { title: 'Dashboard Overview', target: 'dashboard', icon: 'fa-solid fa-chart-line' },
    { title: "Amina's Guided Journey", target: 'journey', icon: 'fa-solid fa-route' },
    { title: 'Guided Assistant', target: 'assistant', icon: 'fa-solid fa-sparkles' },
    { title: 'Presumptive Tax Calculator', target: 'calculator', icon: 'fa-solid fa-calculator' },
    { title: 'Receipt Capture & Review', target: 'records', icon: 'fa-solid fa-file-invoice' },
    { title: 'e-Receipt Integration Demo', target: 'efd', icon: 'fa-solid fa-qrcode' },
    { title: 'Tax Deadlines', target: 'reminders', icon: 'fa-regular fa-calendar-check' },
    { title: 'Pilot, Safety & Evidence', target: 'proposal', icon: 'fa-solid fa-shield-halved' }
];

function initSearch() {
    const search = document.getElementById('globalSearch');
    const results = document.getElementById('searchResults');
    if (!search || !results) return;
    search.addEventListener('input', (event) => {
        const q = event.target.value.trim().toLowerCase();
        if (!q) { results.style.display = 'none'; return; }
        const matches = searchableItems.filter(item => item.title.toLowerCase().includes(q));
        results.replaceChildren();
        if (!matches.length) {
            const empty = document.createElement('div'); empty.className = 'search-result-item'; empty.textContent = 'No results found'; results.appendChild(empty);
        } else {
            matches.forEach(match => {
                const row = document.createElement('button'); row.type = 'button'; row.className = 'search-result-item search-result-button';
                row.innerHTML = `<i class="${match.icon}"></i><span>${match.title}</span>`;
                row.addEventListener('click', () => { navigateTo(match.target); search.value = ''; results.style.display = 'none'; });
                results.appendChild(row);
            });
        }
        results.style.display = 'block';
    });
}

window.addEventListener('load', () => {
    const savedTheme = storageGet('kodirahisi-theme');
    const checkbox = document.getElementById('checkbox');
    if (savedTheme === 'dark' && checkbox) checkbox.checked = true;
    toggleTheme();
    setLanguage(storageGet('kodirahisi-language') || 'en');
    initializeDeadlines();
    initSearch();
    renderJourneyStep();
    setTimeout(initChart, 80);
});
