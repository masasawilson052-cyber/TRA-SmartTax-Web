const translations = {
    en: {
        navAssistant: "AI Assistant",
        navDashboard: "Dashboard",
        navCalculator: "Tax Calculator",
        navRecords: "AI Receipt Scan",
        navDeadlines: "Deadlines",
        darkMode: "Dark Mode",
        welcome1: "Hello! I'm your TRA SmartTax AI. I can help you understand tax requirements, calculate estimates, or get your TIN.",
        welcome2: "How can I assist you today?",
        aiGreetTitle: "How can I help you today?",
        sg1Title: "Register for TIN",
        sg1Sub: "Learn the step-by-step process",
        sg1Prompt: "How do I register for a new TIN?",
        sg2Title: "Calculate Tax",
        sg2Sub: "Estimate for small businesses",
        sg2Prompt: "Calculate my estimated tax for a small shop",
        sg3Title: "Late Penalties",
        sg3Sub: "Understand VAT fines",
        sg3Prompt: "What are the penalties for late VAT filing?",
        sg4Title: "Virtual EFD",
        sg4Sub: "Guide to digital receipts",
        sg4Prompt: "How do I generate an e-Receipt (Virtual EFD)?",
        sg5Prompt: "How do I file my monthly tax returns?",
        sg6Prompt: "How do I pay my taxes using USSD (*152*00#)?",
        chip1: "TIN Registration",
        chip2: "Calculate Tax",
        chip3: "Penalties",
        chip4: "Virtual EFD",
        chip5: "File Returns",
        chip6: "Pay by USSD",
        dashTitle: "Overview",
        dashSubtitle: "Your personalized tax summary",
        dashTax: "Est. Tax Due",
        dashDeadline: "Next Deadline",
        dashReceipts: "Receipts Issued",
        recordsTitle: "AI Receipt Scanner",
        inputPlaceholder: "Message SmartTax AI...",
        disclaimer: "SmartTax AI can make mistakes. Please verify important tax information.",
        calcOpt1: "Presumptive Tax (Small Trader / Machinga)",
        calcOptTransport: "Passenger Transport (Daladala/Bodaboda)",
        calcOptInd: "Sole Proprietor (Individual Income Tax)",
        calcOptProf: "Professional Services (Consultant)",
        calcOpt2: "Corporate Tax (Company - 30%)",
        remTitle: "Tax Calendar & Deadlines",
        remSub: "Never miss a TRA deadline with automated reminders.",
        deadVat: "Value Added Tax (VAT) Return",
        deadVatSub: "Due by the 20th of the following month",
        deadPaye: "PAYE & SDL Returns",
        deadPayeSub: "Due by the 7th of the following month",
        deadCorp: "Corporate Tax Installment",
        deadCorpSub: "Quarterly provisional estimates",
        navEfd: "Virtual EFD (e-Receipt)",
        efdTitle: "Virtual EFD System",
        efdSub: "Generate TRA-compliant electronic receipts directly from the web.",
        efdFormTitle: "New e-Receipt",
        efdCust: "Customer Name (Optional)",
        efdDesc: "Item Description",
        efdAmt: "Amount (TZS)",
        efdBtn: "Generate e-Receipt",
        navProposal: "TRA Proposal Docs",
        propTitle: "TRA Proposal Documentation",
        propSub: "Business case, implementation roadmap, and security compliance.",
        dashScoreTitle: "Business Readiness Score",
        dashScore1: "TIN registered and verified.",
        dashScore2: "Receipts uploaded this month.",
        dashScore3: "Business profile complete.",
        dashActTitle: "Recent Activity",
        dashAct1: "Receipt added",
        dashAct2: "Expense corrected",
        dashAct3: "Deadline reminder created",
        dashAct4: "Monthly summary reviewed",
        dashReview: "Records requiring review",
        chartTitle: "Revenue vs Estimated Tax (2026)",
        calcTitle: "Interactive Tax Calculator",
        calcSub: "Instantly estimate your TRA tax obligations",
        calcTypeLabel: "Business Type",
        calcRevLabel: "Estimated Annual Turnover (TZS)",
        calcBtn: "Calculate Tax",
        calcResTitle: "Tax Estimate",
        calcWarnTitle: "Estimate Warning",
        calcWarnText: "This is an estimate based on provided figures. Final tax obligations are subject to official TRA review and assessment.",
        uploadTitle: "Tap to capture receipt",
        scanTitle: "AI Extracted Data",
        scanConfirm: "Confirm and save to records"
    },
    sw: {
        navAssistant: "Msaidizi wa AI",
        navDashboard: "Dashibodi",
        navCalculator: "Kikokotoo cha Kodi",
        navRecords: "Skani Risiti (AI)",
        navDeadlines: "Muda wa Mwisho",
        darkMode: "Hali ya Giza",
        welcome1: "Hujambo! Mimi ni Msaidizi wako wa TRA SmartTax. Naweza kukusaidia kuelewa mahitaji ya kodi, kukadiria kodi, au kupata TIN.",
        welcome2: "Nikusaidie nini leo?",
        aiGreetTitle: "Nikusaidie nini leo?",
        sg1Title: "Jisajili kupata TIN",
        sg1Sub: "Jifunze hatua kwa hatua",
        sg1Prompt: "Je, nitajisajili vipi kupata TIN mpya?",
        sg2Title: "Kadiria Kodi",
        sg2Sub: "Makadirio ya wafanyabiashara",
        sg2Prompt: "Kadiria kodi ya duka langu dogo",
        sg3Title: "Adhabu na Faini",
        sg3Sub: "Faini za kuchelewa VAT",
        sg3Prompt: "Kuna faini gani kwa kuchelewa kulipa VAT?",
        sg4Title: "EFD Mtandaoni",
        sg4Sub: "Mwongozo wa e-Risiti",
        sg4Prompt: "Nitatoaje e-Risiti (Virtual EFD)?",
        sg5Prompt: "Nitawasilishaje ritani zangu za kodi kila mwezi?",
        sg6Prompt: "Nitalipaje kodi kwa njia ya USSD (*152*00#)?",
        chip1: "Usajili wa TIN",
        chip2: "Kadiria Kodi",
        chip3: "Faini",
        chip4: "e-Risiti (EFD)",
        chip5: "Wasilisha Ritani",
        chip6: "Lipa kwa USSD",
        dashTitle: "Muhtasari",
        dashSubtitle: "Taarifa zako za kodi",
        dashTax: "Kodi Inayokadiriwa",
        dashDeadline: "Tarehe ya Mwisho",
        dashReceipts: "Risiti Zilizotolewa",
        recordsTitle: "Skani Risiti (AI)",
        inputPlaceholder: "Tuma ujumbe kwa SmartTax AI...",
        disclaimer: "SmartTax AI inaweza kufanya makosa. Tafadhali thibitisha taarifa muhimu za kodi.",
        calcOpt1: "Biashara Ndogo (Machinga/Duka)",
        calcOptTransport: "Usafirishaji Abiria (Daladala/Bodaboda)",
        calcOptInd: "Mtu Binafsi (Kodi ya Mapato)",
        calcOptProf: "Huduma za Kitaalamu (Ushauri)",
        calcOpt2: "Kampuni (Limited Company)",
        remTitle: "Kalenda ya Kodi na Muda wa Mwisho",
        remSub: "Usipitwe na muda wa mwisho wa TRA ukitumia vikumbusho vyetu.",
        deadVat: "Kodi ya Ongezeko la Thamani (VAT)",
        deadVatSub: "Mwisho ni tarehe 20 ya mwezi unaofuata",
        deadPaye: "Kodi za PAYE na SDL",
        deadPayeSub: "Mwisho ni tarehe 7 ya mwezi unaofuata",
        deadCorp: "Kodi ya Makampuni (Awamu)",
        deadCorpSub: "Kadirio la kila robo mwaka",
        navEfd: "EFD Mtandaoni (e-Risiti)",
        efdTitle: "Mfumo wa EFD Mtandaoni",
        efdSub: "Tengeneza risiti halali za TRA moja kwa moja mtandaoni.",
        efdFormTitle: "Risiti Mpya (e-Receipt)",
        efdCust: "Jina la Mteja (Sio lazima)",
        efdDesc: "Maelezo ya Bidhaa/Huduma",
        efdAmt: "Kiasi (TZS)",
        efdBtn: "Tengeneza Risiti",
        navProposal: "Nyaraka za Pendekezo",
        propTitle: "Nyaraka za Pendekezo la TRA",
        propSub: "Umuhimu wa biashara, mpango wa utekelezaji, na usalama wa data.",
        dashScoreTitle: "Kiwango cha Utayari wa Biashara",
        dashScore1: "TIN imesajiliwa na kuhakikiwa.",
        dashScore2: "Risiti zimepakiwa mwezi huu.",
        dashScore3: "Taarifa za biashara zimekamilika.",
        dashActTitle: "Shughuli za Hivi Karibuni",
        dashAct1: "Risiti imeongezwa",
        dashAct2: "Matumizi yamerekebishwa",
        dashAct3: "Kikumbusho kimetengenezwa",
        dashAct4: "Muhtasari wa mwezi umekaguliwa",
        dashReview: "Rekodi zinazohitaji uhakiki",
        chartTitle: "Mauzo dhidi ya Kodi Inayokadiriwa (2026)",
        calcTitle: "Kikokotoo cha Kodi",
        calcSub: "Kadiria kodi yako ya TRA hapo hapo",
        calcTypeLabel: "Aina ya Biashara",
        calcRevLabel: "Kadirio la Mauzo kwa Mwaka (TZS)",
        calcBtn: "Kadiria Kodi",
        calcResTitle: "Kadirio la Kodi",
        calcWarnTitle: "Tahadhari ya Kadirio",
        calcWarnText: "Hili ni kadirio kulingana na takwimu ulizotoa. Kodi ya mwisho itategemea uhakiki na tathmini rasmi ya TRA.",
        uploadTitle: "Gusa kupiga picha ya risiti",
        scanTitle: "Data Zilizotolewa na AI",
        scanConfirm: "Thibitisha na hifadhi kwenye rekodi"
    }
};

let currentLang = 'en';
let taxChartInstance = null;

function setLanguage(lang) {
    currentLang = lang;
    
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-sw').classList.toggle('active', lang === 'sw');
    
    const t = translations[lang];
    document.getElementById('t-nav-assistant').textContent = t.navAssistant;
    document.getElementById('t-nav-dashboard').textContent = t.navDashboard;
    document.getElementById('t-nav-calculator').textContent = t.navCalculator;
    document.getElementById('t-nav-records').textContent = t.navRecords;
    document.getElementById('t-nav-deadlines').textContent = t.navDeadlines;
    document.getElementById('t-dark-mode').textContent = t.darkMode;
    
    const w1 = document.getElementById('t-welcome-1');
    if(w1) w1.textContent = t.welcome1;
    const w2 = document.getElementById('t-welcome-2');
    if(w2) w2.textContent = t.welcome2;
    
    document.getElementById('t-dash-title').textContent = t.dashTitle;
    document.getElementById('t-dash-subtitle').textContent = t.dashSubtitle;
    document.getElementById('t-dash-tax').textContent = t.dashTax;
    document.getElementById('t-dash-deadline').textContent = t.dashDeadline;
    document.getElementById('t-dash-receipts').textContent = t.dashReceipts;
    document.getElementById('t-records-title').textContent = t.recordsTitle;
    document.getElementById('chatInput').placeholder = t.inputPlaceholder;
    document.getElementById('t-disclaimer').textContent = t.disclaimer;
    
    // AI Assistant
    const aiGreetTitle = document.getElementById('t-ai-greet-title');
    if(aiGreetTitle) aiGreetTitle.textContent = t.aiGreetTitle;
    
    const sg1Title = document.getElementById('t-sg1-title');
    if(sg1Title) sg1Title.textContent = t.sg1Title;
    const sg1Sub = document.getElementById('t-sg1-sub');
    if(sg1Sub) sg1Sub.textContent = t.sg1Sub;
    
    const sg2Title = document.getElementById('t-sg2-title');
    if(sg2Title) sg2Title.textContent = t.sg2Title;
    const sg2Sub = document.getElementById('t-sg2-sub');
    if(sg2Sub) sg2Sub.textContent = t.sg2Sub;
    
    const sg3Title = document.getElementById('t-sg3-title');
    if(sg3Title) sg3Title.textContent = t.sg3Title;
    const sg3Sub = document.getElementById('t-sg3-sub');
    if(sg3Sub) sg3Sub.textContent = t.sg3Sub;
    
    const sg4Title = document.getElementById('t-sg4-title');
    if(sg4Title) sg4Title.textContent = t.sg4Title;
    const sg4Sub = document.getElementById('t-sg4-sub');
    if(sg4Sub) sg4Sub.textContent = t.sg4Sub;

    const chip1 = document.getElementById('t-chip-1');
    if(chip1) chip1.textContent = t.chip1;
    const chip2 = document.getElementById('t-chip-2');
    if(chip2) chip2.textContent = t.chip2;
    const chip3 = document.getElementById('t-chip-3');
    if(chip3) chip3.textContent = t.chip3;
    const chip4 = document.getElementById('t-chip-4');
    if(chip4) chip4.textContent = t.chip4;
    const chip5 = document.getElementById('t-chip-5');
    if(chip5) chip5.textContent = t.chip5;
    const chip6 = document.getElementById('t-chip-6');
    if(chip6) chip6.textContent = t.chip6;

    // Calculator dropdown options
    const opt1 = document.getElementById('t-calc-opt1');
    if(opt1) opt1.textContent = t.calcOpt1;
    const optTransport = document.getElementById('t-calc-opt-transport');
    if(optTransport) optTransport.textContent = t.calcOptTransport;
    const optInd = document.getElementById('t-calc-opt-ind');
    if(optInd) optInd.textContent = t.calcOptInd;
    const optProf = document.getElementById('t-calc-opt-prof');
    if(optProf) optProf.textContent = t.calcOptProf;
    const opt2 = document.getElementById('t-calc-opt2');
    if(opt2) opt2.textContent = t.calcOpt2;
    
    // Deadlines
    const remTitle = document.getElementById('t-reminders-title');
    if(remTitle) remTitle.textContent = t.remTitle;
    const remSub = document.getElementById('t-reminders-sub');
    if(remSub) remSub.textContent = t.remSub;
    
    const deadVat = document.getElementById('t-dead-vat');
    if(deadVat) deadVat.textContent = t.deadVat;
    const deadVatSub = document.getElementById('t-dead-vat-sub');
    if(deadVatSub) deadVatSub.textContent = t.deadVatSub;
    
    const deadPaye = document.getElementById('t-dead-paye');
    if(deadPaye) deadPaye.textContent = t.deadPaye;
    const deadPayeSub = document.getElementById('t-dead-paye-sub');
    if(deadPayeSub) deadPayeSub.textContent = t.deadPayeSub;
    
    const deadCorp = document.getElementById('t-dead-corp');
    if(deadCorp) deadCorp.textContent = t.deadCorp;
    const deadCorpSub = document.getElementById('t-dead-corp-sub');
    if(deadCorpSub) deadCorpSub.textContent = t.deadCorpSub;
    
    // Virtual EFD
    const navEfd = document.getElementById('t-nav-efd');
    if(navEfd) navEfd.textContent = t.navEfd;
    const efdTitle = document.getElementById('t-efd-title');
    if(efdTitle) efdTitle.textContent = t.efdTitle;
    const efdSub = document.getElementById('t-efd-sub');
    if(efdSub) efdSub.textContent = t.efdSub;
    const efdFormTitle = document.getElementById('t-efd-form-title');
    if(efdFormTitle) efdFormTitle.textContent = t.efdFormTitle;
    const efdCust = document.getElementById('t-efd-cust');
    if(efdCust) efdCust.textContent = t.efdCust;
    const efdDesc = document.getElementById('t-efd-desc');
    if(efdDesc) efdDesc.textContent = t.efdDesc;
    const efdAmt = document.getElementById('t-efd-amt');
    if(efdAmt) efdAmt.textContent = t.efdAmt;
    const efdBtn = document.getElementById('t-efd-btn');
    if(efdBtn) efdBtn.textContent = t.efdBtn;

    // Newly Added Translations
    const navProp = document.getElementById('t-nav-proposal');
    if(navProp) navProp.textContent = t.navProposal;
    const propTitle = document.getElementById('t-prop-title');
    if(propTitle) propTitle.textContent = t.propTitle;
    const propSub = document.getElementById('t-prop-sub');
    if(propSub) propSub.textContent = t.propSub;

    const dashScoreTitle = document.getElementById('t-dash-score-title');
    if(dashScoreTitle) dashScoreTitle.textContent = t.dashScoreTitle;
    const dashScore1 = document.getElementById('t-dash-score-1');
    if(dashScore1) dashScore1.textContent = t.dashScore1;
    const dashScore2 = document.getElementById('t-dash-score-2');
    if(dashScore2) dashScore2.textContent = t.dashScore2;
    const dashScore3 = document.getElementById('t-dash-score-3');
    if(dashScore3) dashScore3.textContent = t.dashScore3;

    const dashActTitle = document.getElementById('t-dash-activity-title');
    if(dashActTitle) dashActTitle.textContent = t.dashActTitle;
    const dashAct1 = document.getElementById('t-dash-act-1');
    if(dashAct1) dashAct1.textContent = t.dashAct1;
    const dashAct2 = document.getElementById('t-dash-act-2');
    if(dashAct2) dashAct2.textContent = t.dashAct2;
    const dashAct3 = document.getElementById('t-dash-act-3');
    if(dashAct3) dashAct3.textContent = t.dashAct3;
    const dashAct4 = document.getElementById('t-dash-act-4');
    if(dashAct4) dashAct4.textContent = t.dashAct4;

    const dashReview = document.getElementById('t-dash-review');
    if(dashReview) dashReview.textContent = t.dashReview;
    const chartTitle = document.getElementById('t-chart-title');
    if(chartTitle) chartTitle.textContent = t.chartTitle;

    const calcTitle = document.getElementById('t-calc-title');
    if(calcTitle) calcTitle.textContent = t.calcTitle;
    const calcSub = document.getElementById('t-calc-sub');
    if(calcSub) calcSub.textContent = t.calcSub;
    const calcTypeLabel = document.getElementById('t-calc-type-label');
    if(calcTypeLabel) calcTypeLabel.textContent = t.calcTypeLabel;
    const calcRevLabel = document.getElementById('t-calc-rev-label');
    if(calcRevLabel) calcRevLabel.textContent = t.calcRevLabel;
    const calcBtn = document.getElementById('t-calc-btn');
    if(calcBtn) calcBtn.textContent = t.calcBtn;
    
    const calcResTitle = document.getElementById('t-calc-res-title');
    if(calcResTitle) calcResTitle.textContent = t.calcResTitle;
    const calcWarnTitle = document.getElementById('t-calc-warn-title');
    if(calcWarnTitle) calcWarnTitle.textContent = t.calcWarnTitle;
    const calcWarnText = document.getElementById('t-calc-warn-text');
    if(calcWarnText) calcWarnText.textContent = t.calcWarnText;

    const uploadTitle = document.getElementById('t-upload-title');
    if(uploadTitle) uploadTitle.textContent = t.uploadTitle;
    const scanTitle = document.getElementById('t-scan-title');
    if(scanTitle) scanTitle.textContent = t.scanTitle;
    const scanConfirm = document.getElementById('t-scan-confirm');
    if(scanConfirm) scanConfirm.textContent = t.scanConfirm;


    // Update Chart if it exists
    if(taxChartInstance) {
        taxChartInstance.data.datasets[0].label = lang === 'sw' ? 'Mauzo (Revenue)' : 'Revenue';
        taxChartInstance.data.datasets[1].label = lang === 'sw' ? 'Kodi Inayokadiriwa' : 'Estimated Tax';
        taxChartInstance.update();
    }
}

function toggleTheme() {
    const isChecked = document.getElementById('checkbox').checked;
    document.documentElement.setAttribute('data-theme', isChecked ? 'dark' : 'light');
    
    // Update chart text colors for dark mode
    if(taxChartInstance) {
        const textColor = isChecked ? '#9CA3AF' : '#6B7280';
        taxChartInstance.options.scales.x.ticks.color = textColor;
        taxChartInstance.options.scales.y.ticks.color = textColor;
        taxChartInstance.update();
    }
}

// Init Chart.js
function initChart() {
    const canvas = document.getElementById('taxChart');
    if (!canvas) return;
    
    if (taxChartInstance) {
        taxChartInstance.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    const isDark = document.getElementById('checkbox').checked;
    const textColor = isDark ? '#9CA3AF' : '#6B7280';
    const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

    // Modern Gradient for Revenue Line
    const revenueGradient = ctx.createLinearGradient(0, 0, 0, 400);
    revenueGradient.addColorStop(0, 'rgba(37, 99, 235, 0.4)');
    revenueGradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

    // Modern Gradient for Tax Line
    const taxGradient = ctx.createLinearGradient(0, 0, 0, 400);
    taxGradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
    taxGradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

    taxChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: currentLang === 'sw' ? 'Mauzo (Revenue)' : 'Revenue',
                    data: [4500000, 5200000, 4800000, 6000000],
                    borderColor: '#2563EB',
                    backgroundColor: revenueGradient,
                    borderWidth: 3,
                    tension: 0.4, // Smooth curved line
                    fill: true,
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#2563EB',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: currentLang === 'sw' ? 'Kodi Inayokadiriwa' : 'Estimated Tax',
                    data: [135000, 156000, 144000, 180000],
                    borderColor: '#10B981',
                    backgroundColor: taxGradient,
                    borderWidth: 3,
                    tension: 0.4, // Smooth curved line
                    fill: true,
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#10B981',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: { 
                    labels: { color: textColor, usePointStyle: true, padding: 20 } 
                },
                tooltip: {
                    backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
                    titleColor: isDark ? '#FFF' : '#000',
                    bodyColor: isDark ? '#FFF' : '#000',
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 1,
                    padding: 12,
                    boxPadding: 6
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: gridColor, drawBorder: false },
                    ticks: { color: textColor, padding: 10 }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: textColor, padding: 10 }
                }
            }
        }
    });
}

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        const targetId = item.getAttribute('data-target');
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        
        const targetView = document.getElementById(`view-${targetId}`);
        if(targetView) {
            targetView.classList.add('active');
            if (targetId === 'dashboard') {
                setTimeout(initChart, 50); // slight delay to ensure canvas is visible
            }
        }

        // Close mobile sidebar if it's open
        const sidebar = document.querySelector('.sidebar-secondary');
        if (sidebar && sidebar.classList.contains('mobile-active')) {
            sidebar.classList.remove('mobile-active');
        }
    });
});

// Tax Calculator Logic
function calculateTax() {
    const type = document.getElementById('calc-type').value;
    const revInput = document.getElementById('calc-revenue').value;
    const revenue = parseFloat(revInput) || 0;
    
    let tax = 0;
    let explanation = "";
    
    if (type === 'corporate') {
        tax = revenue * 0.30;
        explanation = currentLang === 'sw' 
            ? `Kama kampuni iliyosajiliwa, unawajibika kulipa kodi ya makampuni ya 30% ya faida. Makadirio ya kodi kwa mauzo yako ni <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.` 
            : `As a registered corporation, you are liable for a 30% corporate tax rate on profit. Your estimated obligation based on turnover is <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.`;
    } else if (type === 'professional') {
        tax = revenue * 0.05;
        explanation = currentLang === 'sw' 
            ? `Kama mtoa huduma za kitaalamu, unatozwa zuio la 5%. Makadirio ya kodi yako ni <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.` 
            : `As a professional services provider, you are subject to a 5% withholding estimate. Your estimated obligation is <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.`;
    } else if (type === 'presumptive_transport') {
        tax = revenue * 0.02;
        explanation = currentLang === 'sw' 
            ? `Katika sekta ya usafirishaji, unatumia viwango maalum. Makadirio ya kodi yako ni <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.` 
            : `In the passenger transport sector, you qualify for special presumptive rates. Your estimated obligation is <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.`;
    } else if (type === 'individual') {
        if(revenue <= 3270000) tax = 0;
        else tax = revenue * 0.15;
        explanation = currentLang === 'sw' 
            ? `Kama mfanyabiashara binafsi, kodi inategemea faida halisi (kadirio la wastani 15%). Makadirio ya kodi yako ni <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.` 
            : `As a sole proprietor, tax is based on progressive bands. Using an average 15% estimate, your obligation is <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.`;
    } else {
        // Presumptive retail
        if (revenue <= 4000000) {
            tax = 0;
            explanation = currentLang === 'sw' 
                ? `Kwa sababu mauzo yako yako chini ya 4M, unasamehewa kodi. Makadirio ya kodi yako ni <strong style="color: var(--primary-accent);">TZS 0</strong>.` 
                : `Because your turnover is under 4M, you qualify for a nil rate under presumptive tax. Your estimated obligation is <strong style="color: var(--primary-accent);">TZS 0</strong>.`;
        } else if (revenue <= 7000000) {
            tax = 100000;
            explanation = currentLang === 'sw' 
                ? `Kwa mauzo ya kati ya 4M na 7M, unalipa kodi maalum ya TZS 100,000. Makadirio ya kodi yako ni <strong style="color: var(--primary-accent);">TZS 100,000</strong>.` 
                : `For turnover between 4M and 7M, you qualify for a fixed presumptive tax of 100,000. Your estimated obligation is <strong style="color: var(--primary-accent);">TZS 100,000</strong>.`;
        } else if (revenue <= 11000000) {
            tax = 250000;
            explanation = currentLang === 'sw' 
                ? `Kwa mauzo ya kati ya 7M na 11M, unalipa kodi maalum ya TZS 250,000. Makadirio ya kodi yako ni <strong style="color: var(--primary-accent);">TZS 250,000</strong>.` 
                : `For turnover between 7M and 11M, you qualify for a fixed presumptive tax of 250,000. Your estimated obligation is <strong style="color: var(--primary-accent);">TZS 250,000</strong>.`;
        } else {
            tax = revenue * 0.035;
            explanation = currentLang === 'sw' 
                ? `Kwa mauzo zaidi ya 11M, kodi inakadiriwa kwa asilimia. Makadirio yako ni <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.` 
                : `For turnover above 11M, tax is estimated using a percentage rate. Your estimated obligation is <strong style="color: var(--primary-accent);">TZS ${tax.toLocaleString()}</strong>.`;
        }
    }
    
    document.getElementById('calc-result').style.display = 'block';
    document.getElementById('calc-explanation').innerHTML = explanation;
}


// Chatbot Logic
function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}

function sendSuggestion(key) {
    const t = translations[currentLang];
    // Use the prompt from translations if it exists, otherwise use raw text
    const text = t[key + 'Prompt'] || key;
    document.getElementById('chatInput').value = text;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message === '') return;

    // Hide Greeting and Show ChatBox and Bottom Suggestions
    const greeting = document.getElementById('aiGreeting');
    if (greeting) greeting.style.display = 'none';
    const chatBox = document.getElementById('chatBox');
    if (chatBox) chatBox.style.display = 'flex';
    const bottomSuggestions = document.getElementById('bottomSuggestions');
    if (bottomSuggestions) bottomSuggestions.style.display = 'flex';

    appendMessage('user', message);
    input.value = '';
    showTypingIndicator();
    scrollToBottom();

    setTimeout(() => {
        removeTypingIndicator();
        const aiResponse = generateAIResponse(message);
        appendMessage('ai', aiResponse);
    }, 1500);
}

function appendMessage(sender, text) {
    const chatBox = document.getElementById('chatBox');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fa-solid fa-user"></i>' : '<i class="fa-solid fa-sparkles"></i>';
    
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    
    const formattedText = text.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('');
    bubble.innerHTML = formattedText;
    
    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);
    chatBox.appendChild(msgDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    const chatBox = document.getElementById('chatBox');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ai-message`;
    msgDiv.id = 'typing-indicator';
    
    msgDiv.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-sparkles"></i></div>
        <div class="msg-bubble" style="display:flex; align-items:center;">
            <div class="typing-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    chatBox.appendChild(msgDiv);
    scrollToBottom();
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if(indicator) indicator.remove();
}

function scrollToBottom() {
    const chatBox = document.getElementById('chatBox');
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(message) {
    const lowerMsg = message.toLowerCase();
    const isSwahili = currentLang === 'sw';

    if (lowerMsg.includes('calculate') || lowerMsg.includes('kadiria') || lowerMsg.includes('estimate') || lowerMsg.includes('makadirio')) {
        return isSwahili
            ? `<strong>Jibu Fupi:</strong> Kodi inategemea na mauzo yako. Kwa mauzo chini ya TZS 4,000,000, hulipi kodi (Presumptive tax).\n\n<strong>Hatua za Kufuata:</strong>\n- Kusanya rekodi zako zote za mauzo.\n- Jua kiasi cha mauzo kwa mwaka mzima.\n- Tumia kikokotoo chetu kujua kiasi kamili.\n\n<i class="fa-solid fa-triangle-exclamation" style="color:var(--highlight)"></i> <strong>Tahadhari:</strong> Hiki ni makadirio tu. TRA wanaweza kuhitaji uthibitisho wa mauzo yako.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('calculator')">Nenda kwenye Kikokotoo</button>`
            : `<strong>Short Answer:</strong> Your tax depends on your annual turnover. For turnover below TZS 4,000,000, you pay no tax under the presumptive tax system.\n\n<strong>Recommended Steps:</strong>\n- Gather all your sales records.\n- Determine your total annual turnover.\n- Use our interactive calculator for a precise estimate.\n\n<i class="fa-solid fa-triangle-exclamation" style="color:var(--highlight)"></i> <strong>Warning:</strong> This is an estimate. Final tax obligations are subject to TRA assessment and verification.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('calculator')">Go to Tax Calculator</button>`;
    } 
    else if (lowerMsg.includes('tin') || lowerMsg.includes('register') || lowerMsg.includes('sajili')) {
        return isSwahili 
            ? `<strong>Jibu Fupi:</strong> Kila mfanyabiashara anahitaji TIN. Unaweza kusajili TIN mtandaoni kupitia TRA e-Services au ofisi ya TRA.\n\n<strong>Hatua za Kufuata:</strong>\n- Andaa Kitambulisho chako cha NIDA.\n- Andaa mkataba wa pango au hati ya umiliki wa eneo la biashara.\n- Jaza fomu ya maombi mtandaoni au nenda ofisi ya TRA iliyo karibu.\n\n<i class="fa-solid fa-triangle-exclamation" style="color:var(--highlight)"></i> <strong>Tahadhari:</strong> Usajili wa TIN ni BURE. Usikubali kulipishwa na matapeli.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="window.open('https://www.tra.go.tz', '_blank')">Tembelea Tovuti ya TRA</button>`
            : `<strong>Short Answer:</strong> Every business owner needs a TIN. You can register online via TRA e-Services or at any TRA branch.\n\n<strong>Recommended Steps:</strong>\n- Prepare your National ID (NIDA).\n- Prepare your lease agreement or title deed for the business premises.\n- Fill out the application form online or visit a TRA office.\n\n<i class="fa-solid fa-triangle-exclamation" style="color:var(--highlight)"></i> <strong>Warning:</strong> TIN registration is COMPLETELY FREE. Do not pay anyone for this service.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="window.open('https://www.tra.go.tz', '_blank')">Visit TRA Website</button>`;
    } 
    else if (lowerMsg.includes('penalty') || lowerMsg.includes('penalties') || lowerMsg.includes('vat') || lowerMsg.includes('faini') || lowerMsg.includes('adhabu')) {
        return isSwahili
            ? `<strong>Jibu Fupi:</strong> Kuchelewa kuwasilisha ritani kunavutia faini. Kwa VAT, faini ni 2.5% ya kodi au TZS 100,000 (kiasi kikubwa zaidi).\n\n<strong>Hatua za Kufuata:</strong>\n- Jua tarehe za mwisho za kuwasilisha (mf. tarehe 20 kwa VAT).\n- Weka vikumbusho kwenye mfumo huu.\n- Wasilisha hata kama huna mauzo (Nil Return).\n\n<i class="fa-solid fa-triangle-exclamation" style="color:var(--highlight)"></i> <strong>Tahadhari:</strong> Riba huongezeka kila siku kwa kodi ambayo haijalipwa.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('reminders')">Nenda kwenye Vikumbusho</button>`
            : `<strong>Short Answer:</strong> Late filing attracts penalties. For VAT, it's 2.5% of tax due or TZS 100,000 (whichever is higher) per month.\n\n<strong>Recommended Steps:</strong>\n- Know your deadlines (e.g., 20th for VAT).\n- Set automated reminders in this portal.\n- File a 'Nil Return' even if you had no sales.\n\n<i class="fa-solid fa-triangle-exclamation" style="color:var(--highlight)"></i> <strong>Warning:</strong> Statutory interest accrues daily on unpaid taxes.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('reminders')">Go to Deadlines Calendar</button>`;
    }
    else if (lowerMsg.includes('efd') || lowerMsg.includes('receipt') || lowerMsg.includes('risiti')) {
        return isSwahili
            ? `<strong>Jibu Fupi:</strong> Mfumo huu una Virtual EFD inayokuwezesha kutoa e-Risiti moja kwa moja bila mashine.\n\n<strong>Hatua za Kufuata:</strong>\n- Bofya kitufe cha Virtual EFD.\n- Weka jina la mteja na kiasi.\n- Bofya Tengeneza Risiti.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('efd')">Nenda kwenye Virtual EFD</button>`
            : `<strong>Short Answer:</strong> This prototype includes a Virtual EFD feature that lets you issue e-Receipts directly from your device.\n\n<strong>Recommended Steps:</strong>\n- Click on the Virtual EFD tool.\n- Enter customer details and the amount.\n- Click Generate e-Receipt.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('efd')">Go to Virtual EFD</button>`;
    }
    else if (lowerMsg.includes('file') || lowerMsg.includes('return') || lowerMsg.includes('ritani') || lowerMsg.includes('wasilisha')) {
        return isSwahili
            ? `<strong>Jibu Fupi:</strong> Unaweza kuwasilisha ritani zako kupitia mfumo wa TRA e-Filing mtandaoni.\n\n<strong>Hatua za Kufuata:</strong>\n- Andaa taarifa zote za mauzo kupitia sehemu ya AI Receipt Scan.\n- Ingia kwenye TRA e-Filing system.\n- Jaza na uthibitishe kiasi.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('records')">Nenda kwenye AI Receipt Scan</button>`
            : `<strong>Short Answer:</strong> You must file your tax returns accurately through the TRA e-Filing system.\n\n<strong>Recommended Steps:</strong>\n- Organize your revenue records using our AI Receipt Scan tool.\n- Log in to the official TRA e-Filing system.\n- Enter your summary and submit.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('records')">Go to AI Receipt Scan</button>`;
    }
    else {
        return isSwahili
            ? `<strong>Jibu Fupi:</strong> Mimi ni KodiRahisi AI. Naweza kukusaidia kujua kodi, kusajili TIN, na kuandaa rekodi zako.\n\n<strong>Hatua za Kufuata:</strong>\n- Uliza swali lolote kuhusu kodi.\n- Piga picha ya risiti uipange.\n- Tengeneza risiti ya EFD mtandaoni.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('dashboard')">Rudi kwenye Dashboard</button>`
            : `<strong>Short Answer:</strong> I am KodiRahisi AI. I can assist you with estimating taxes, understanding TIN registration, and organizing your records.\n\n<strong>Recommended Steps:</strong>\n- Ask me any tax-related question.\n- Use the receipt scanner to organize your expenses.\n- Generate an e-receipt using Virtual EFD.\n\n<button class="btn-primary" style="margin-top:12px;" onclick="navigateTo('dashboard')">Back to Dashboard</button>`;
    }
}

// Virtual EFD Logic
function generateReceipt() {
    const custInput = document.getElementById('efd-input-cust').value.trim();
    const descInput = document.getElementById('efd-input-desc').value.trim();
    const amtInput = parseFloat(document.getElementById('efd-input-amt').value);

    // Fallbacks if empty
    const cust = custInput || 'Cash Customer';
    const desc = descInput || 'General Items / Services';
    const amt = isNaN(amtInput) ? 0 : amtInput;

    // Update Output Elements
    document.getElementById('efd-out-cust').textContent = `Customer: ${cust}`;
    document.getElementById('efd-out-desc').textContent = desc;

    const formattedAmt = amt.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('efd-out-amt').textContent = formattedAmt;
    document.getElementById('efd-out-total').textContent = formattedAmt;

    // Generate Random Receipt Number
    const rctNum = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('efd-out-num').textContent = `Rct Num: TZ-EFD-${rctNum}`;

    // Generate Current Date/Time
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0];
    document.getElementById('efd-out-date').textContent = `Date: ${dateStr} ${timeStr}`;

    // Show Preview
    document.getElementById('efd-preview').style.display = 'block';
}
// Proposal Tabs Logic
function switchProposalTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.proposal-tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remove active state from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.style.borderBottom = '3px solid transparent';
        btn.style.color = 'var(--text-muted)';
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`tab-${tabId}`).style.display = 'block';
    
    // Set active state on clicked button
    const activeBtn = event.currentTarget;
    activeBtn.style.borderBottom = '3px solid var(--primary-accent)';
    activeBtn.style.color = 'var(--primary-accent)';
    activeBtn.classList.add('active');
}

// Initialization on load
window.onload = () => {
    setLanguage('en');
    
    // Check which view is currently active on load and initialize chart if it's the dashboard
    const activeNav = document.querySelector('.nav-item.active');
    if(activeNav && activeNav.getAttribute('data-target') === 'dashboard') {
        setTimeout(initChart, 100);
    }
};

// Global Search Spotlight Logic
const searchableItems = [
    { title: "Dashboard Overview", target: "dashboard", icon: "fa-solid fa-chart-line" },
    { title: "AI Assistant", target: "assistant", icon: "fa-solid fa-sparkles" },
    { title: "Tax Calculator", target: "calculator", icon: "fa-solid fa-calculator" },
    { title: "AI Receipt Scan", target: "records", icon: "fa-solid fa-file-invoice" },
    { title: "Virtual EFD (e-Receipt)", target: "efd", icon: "fa-solid fa-qrcode" },
    { title: "Tax Deadlines", target: "reminders", icon: "fa-regular fa-calendar-check" },
    { title: "Register for TIN", target: "assistant", icon: "fa-solid fa-id-card" }
];

const globalSearch = document.getElementById('globalSearch');
if(globalSearch) {
    globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        
        if (query.length < 1) {
            resultsContainer.style.display = 'none';
            return;
        }
        
        const matches = searchableItems.filter(item => item.title.toLowerCase().includes(query));
        
        if (matches.length > 0) {
            resultsContainer.innerHTML = matches.map(match => `
                <div class="search-result-item" onclick="navigateTo('${match.target}'); document.getElementById('globalSearch').value=''; document.getElementById('searchResults').style.display='none';">
                    <i class="${match.icon}" style="color: var(--primary-accent); width: 24px; text-align: center;"></i>
                    <span style="color: var(--text-dark); font-weight: 500;">${match.title}</span>
                </div>
            `).join('');
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.innerHTML = `
                <div class="search-result-item" style="color: var(--text-muted); justify-content: center;">
                    No results found
                </div>`;
            resultsContainer.style.display = 'block';
        }
    });
}

function navigateTo(targetId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    // Show target view
    const targetView = document.getElementById(`view-${targetId}`);
    if(targetView) targetView.classList.add('active');
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(nav => {
        if(nav.getAttribute('data-target') === targetId) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });

    if (targetId === 'dashboard') {
        setTimeout(initChart, 50);
    }

    // Close mobile sidebar if it's open
    const sidebar = document.querySelector('.sidebar-secondary');
    const overlay = document.getElementById('mobile-overlay');
    if (sidebar && sidebar.classList.contains('mobile-active')) {
        sidebar.classList.remove('mobile-active');
        if (overlay) overlay.classList.remove('active');
    }
}

function simulateScan() {
    const file = document.getElementById('file-upload').files[0];
    if(!file) return;

    document.getElementById('upload-container').style.display = 'none';
    document.getElementById('receipt-preview-container').style.display = 'block';
    
    document.getElementById('empty-state').style.display = 'none';
    document.getElementById('scan-details').style.display = 'none';
    document.getElementById('success-state').style.display = 'none';
    
    const loader = document.getElementById('scan-loading');
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        document.getElementById('scan-details').style.display = 'block';
    }, 2500); // simulate 2.5s AI processing time
}

function confirmReceipt() {
    document.getElementById('scan-details').style.display = 'none';
    document.getElementById('success-state').style.display = 'block';
}

function resetScan() {
    document.getElementById('file-upload').value = '';
    document.getElementById('receipt-preview-container').style.display = 'none';
    document.getElementById('success-state').style.display = 'none';
    document.getElementById('scan-details').style.display = 'none';
    document.getElementById('upload-container').style.display = 'block';
    document.getElementById('empty-state').style.display = 'block';
}

// Landing Page & Mobile Menu Logic
function launchApp() {
    const landing = document.getElementById('landing-page');
    const mainApp = document.getElementById('main-app');
    
    // Fade out landing
    landing.style.opacity = '0';
    landing.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainApp.style.display = 'flex';
        // Re-render chart to ensure it fits the new container dimensions
        if (window.taxChartInstance) {
            window.taxChartInstance.resize();
        }
    }, 500);
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar-secondary');
    const overlay = document.getElementById('mobile-overlay');
    
    if (sidebar) {
        sidebar.classList.toggle('mobile-active');
        if (sidebar.classList.contains('mobile-active')) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
}
