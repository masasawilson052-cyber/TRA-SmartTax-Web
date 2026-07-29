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
        efdBtn: "Generate e-Receipt"
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
        efdBtn: "Tengeneza Risiti"
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
    let breakdown = "";
    
    if (type === 'corporate') {
        tax = revenue * 0.30;
        breakdown = currentLang === 'sw' ? "Kodi ya Makampuni (30% ya Faida/Mauzo)" : "Corporate Tax (30% flat rate used for estimate)";
    } else if (type === 'professional') {
        tax = revenue * 0.05; // 5% withholding / standard estimate
        breakdown = currentLang === 'sw' ? "Huduma za Kitaalamu (Kadirio la 5%)" : "Professional Services (5% estimate)";
    } else if (type === 'presumptive_transport') {
        tax = revenue * 0.02; // Special flat rate estimate for transport
        breakdown = currentLang === 'sw' ? "Kodi ya Usafirishaji (Kadirio maalum)" : "Transport Tax (Special presumptive rate)";
    } else if (type === 'individual') {
        // Highly simplified progressive brackets
        if(revenue <= 3270000) tax = 0;
        else tax = revenue * 0.15; // Average simplified rate
        breakdown = currentLang === 'sw' ? "Kodi ya Mtu Binafsi (Kadirio la Wastani)" : "Individual Income Tax (Average Estimate)";
    } else {
        // Presumptive retail
        if (revenue <= 4000000) {
            tax = 0;
            breakdown = currentLang === 'sw' ? "Hakuna Kodi (Mauzo chini ya 4M)" : "Nil Tax (Turnover below 4M)";
        } else if (revenue <= 7000000) {
            tax = 100000;
            breakdown = currentLang === 'sw' ? "Kodi Maalum (Mauzo 4M - 7M)" : "Fixed Tax (Turnover 4M - 7M)";
        } else if (revenue <= 11000000) {
            tax = 250000;
            breakdown = currentLang === 'sw' ? "Kodi Maalum (Mauzo 7M - 11M)" : "Fixed Tax (Turnover 7M - 11M)";
        } else {
            tax = revenue * 0.035; // Simplified presumptive 3.5%
            breakdown = currentLang === 'sw' ? "3.5% ya Mauzo (Kadirio la juu ya 11M)" : "3.5% of Turnover (Estimate for >11M)";
        }
    }
    
    document.getElementById('calc-result').style.display = 'block';
    document.getElementById('calc-amount').textContent = `TZS ${tax.toLocaleString()}`;
    document.getElementById('calc-breakdown').textContent = breakdown;
}

// AI Receipt Scanner Logic
function simulateScan() {
    const btn = document.querySelector('.upload-zone');
    const loading = document.getElementById('scan-loading');
    const table = document.getElementById('scan-table');
    const empty = document.getElementById('empty-state');
    
    btn.style.opacity = '0.5';
    btn.style.pointerEvents = 'none';
    empty.style.display = 'none';
    table.style.display = 'none';
    loading.style.display = 'block';
    
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        loading.style.display = 'none';
        table.style.display = 'table';
    }, 3000); // 3 second mock scan
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
            ? "**Kukadiria Kodi ya Biashara (Presumptive Tax):**\nKama wewe ni mfanyabiashara mdogo, kodi yako inakadiriwa kulingana na mauzo yako ya mwaka:\n\n- **Tsh 0 hadi Milioni 4:** Hulipi kodi kabisa (TZS 0).\n- **Milioni 4 hadi Milioni 7:** TZS 100,000/= kwa mwaka.\n- **Milioni 7 hadi Milioni 11:** TZS 250,000/= kwa mwaka.\n- **Milioni 11 hadi Milioni 100:** Kiasi kinachozidi hutozwa asilimia maalum.\n\nIli kupata makadirio sahihi ya kodi yako, tafadhali bofya 'Tax Calculator' (Kikokotoo cha Kodi) kwenye menyu ya kushoto."
            : "**Estimating Presumptive Tax:**\nFor small business owners, your tax is calculated based on your annual turnover (revenue):\n\n- **TZS 0 to 4 Million:** No tax is payable (TZS 0).\n- **4 Million to 7 Million:** TZS 100,000/= per year.\n- **7 Million to 11 Million:** TZS 250,000/= per year.\n- **11 Million to 100 Million:** The excess is taxed at a specific percentage.\n\nFor a precise and personalized calculation, please use the 'Tax Calculator' located in the left menu of this dashboard.";
    } 
    else if (lowerMsg.includes('tin') || lowerMsg.includes('register') || lowerMsg.includes('sajili')) {
        return isSwahili 
            ? "**Usajili wa TIN Mpya:**\nIli kufanya biashara yoyote au kulipa kodi Tanzania, unahitaji Namba ya Utambulisho wa Mlipakodi (TIN). \n\n**Hatua za Kufuata:**\n1. Tembelea mfumo wa TRA e-Service au ofisi yoyote ya TRA iliyo karibu nawe.\n2. Hakikisha una Kitambulisho chako cha Taifa (NIDA).\n3. Jaza fomu ya maombi mtandaoni au ofisini.\n4. Usajili wa TIN ni **BURE KABISA**. Epuka matapeli wanaokuomba pesa kwa ajili ya usajili wa TIN."
            : "**Registering for a New TIN:**\nTo participate in any business or pay taxes in Tanzania, you are required to have a Taxpayer Identification Number (TIN). \n\n**Steps to Register:**\n1. Visit the TRA e-Service portal online or any nearby TRA branch.\n2. Ensure you have a valid National ID (NIDA).\n3. Fill out the application form online or in person.\n4. TIN Registration is **COMPLETELY FREE**. Please do not pay anyone claiming to charge for TIN registration.";
    } 
    else if (lowerMsg.includes('penalty') || lowerMsg.includes('penalties') || lowerMsg.includes('vat') || lowerMsg.includes('faini') || lowerMsg.includes('adhabu')) {
        return isSwahili
            ? "**Faini za Kuchelewa:**\nNi muhimu sana kuwasilisha ritani zako kwa wakati ili kuepuka faini zisizokuwa za lazima. \n\n**Mfano kwa VAT:**\n- Kuchelewa kuwasilisha ritani ya VAT baada ya tarehe 20 ya mwezi inavutia faini ya **2.5% ya kodi inayodaiwa**, au TZS 100,000/=, kiasi chochote kile ambacho ni kikubwa zaidi kwa kila mwezi unaochelewa.\n- Kuchelewa kulipa kunavutia riba ya ziada (statutory rate) inayohesabiwa kila siku.\n\nKama mfumo wa SmartTax unapendekeza, tafadhali weka 'Reminders' ziwake kwenye menyu ya kushoto ili usikose tarehe za mwisho!"
            : "**Late Filing Penalties:**\nIt is crucial to file your returns on time to avoid unnecessary financial penalties. \n\n**Example for VAT:**\n- Failing to file your VAT return by the 20th of the month attracts a penalty of **2.5% of the tax due**, or TZS 100,000/=, whichever is higher, for every month it is delayed.\n- Late payments also attract daily statutory interest.\n\nI highly recommend using the 'Deadlines' calendar on the left menu of this SmartTax portal to keep track of your due dates and avoid these fines!";
    }
    else if (lowerMsg.includes('efd') || lowerMsg.includes('receipt') || lowerMsg.includes('risiti')) {
        return isSwahili
            ? "**Kuhusu Virtual EFD:**\nHauhitaji tena kununua mashine za EFD za bei ghali. Mfumo huu una 'Virtual EFD' inayoruhusu kutoa e-Risiti moja kwa moja.\n\n1. Nenda kwenye tab ya **'Virtual EFD (e-Receipt)'** kwenye menyu ya kushoto.\n2. Weka jina la mteja, maelezo, na kiasi cha pesa.\n3. Bofya 'Tengeneza Risiti'. Mfumo utatoa risiti yenye namba ya kipekee na QR Code kwa ajili ya uhakiki na TRA.\n\nHii ni rahisi, ya haraka, na inakidhi matakwa ya kisheria ya TRA!"
            : "**About Virtual EFDs:**\nYou no longer need to purchase expensive hardware EFD machines. This portal includes a built-in 'Virtual EFD' feature.\n\n1. Simply navigate to the **'Virtual EFD (e-Receipt)'** tab on the left sidebar.\n2. Enter your customer's name, the item description, and the amount.\n3. Click 'Generate e-Receipt'. The system instantly creates a legally binding receipt complete with a unique Receipt ID and a verification QR Code.\n\nIt is entirely compliant with TRA regulations and works directly from your phone or PC!";
    }
    else if (lowerMsg.includes('file') || lowerMsg.includes('return') || lowerMsg.includes('ritani') || lowerMsg.includes('wasilisha')) {
        return isSwahili
            ? "**Kuwasilisha Ritani:**\nKila mlipakodi anapaswa kuwasilisha ritani zake kwa usahihi na wakati. Unaweza kufanya hivi mtandaoni kupitia TRA e-Filing system.\n\n**Tarehe Muhimu:**\n- **VAT (Kodi ya Ongezeko la Thamani):** Mwisho wa kuwasilisha ni tarehe 20 ya mwezi unaofuata.\n- **PAYE (Kodi ya Mishahara):** Mwisho wa kuwasilisha ni tarehe 7 ya mwezi unaofuata.\n\nJe, unataka nikusaidie kuandaa kumbukumbu zako za mauzo kwa ajili ya ritani ya mwezi huu?"
            : "**Filing Tax Returns:**\nEvery registered taxpayer must file their tax returns accurately and on time via the TRA e-Filing system.\n\n**Crucial Deadlines:**\n- **VAT (Value Added Tax):** Returns and payments are due on the 20th of the following month.\n- **PAYE (Pay As You Earn):** Returns are due by the 7th of the following month.\n\nWould you like me to help you organize your revenue records so you are prepared to file this month's return?";
    }
    else if (lowerMsg.includes('ussd') || lowerMsg.includes('sssd') || lowerMsg.includes('mobile money') || lowerMsg.includes('lipa')) {
        return isSwahili
            ? "**Jinsi ya Kulipa Kodi kwa USSD (Simu):**\nKulipa kodi ni rahisi sana na unaweza kutumia simu yako ya mkononi (M-Pesa, Tigo Pesa, Airtel Money) kupitia Mfumo wa GePG.\n\n**Hatua za Kulipa:**\n1. Andaa *Control Number* yako (Namba ya Malipo) uliyopewa na TRA.\n2. Kwenye simu yako, piga **\*152\*00#**.\n3. Chagua **4 (Malipo)**.\n4. Chagua Mtandao wako wa simu (Kama M-Pesa au Tigo Pesa).\n5. Ingiza *Control Number* yako.\n6. Weka Namba ya Siri kuthibitisha.\n\nRisiti ya TRA itatumwa kwa njia ya SMS mara tu malipo yakikamilika!"
            : "**How to Pay Taxes via USSD (Mobile Money):**\nPaying your taxes is extremely convenient and can be done from any basic mobile phone using M-Pesa, Tigo Pesa, or Airtel Money via the GePG system.\n\n**Steps to Pay:**\n1. Obtain your 12-digit **Control Number** from TRA.\n2. On your phone dialer, type **\*152\*00#**.\n3. Select Option **4 (Payments/Malipo)**.\n4. Choose your mobile network provider.\n5. Enter your TRA Control Number.\n6. Enter your Mobile Money PIN to confirm the transaction.\n\nYou will instantly receive a TRA clearance receipt via SMS!";
    }
    else {
        return isSwahili
            ? "Hilo ni swali zuri sana. Mimi ni AI msaidizi wa mfumo huu niliyebuniwa kurahisisha mambo yote yanayohusu kodi nchini Tanzania. Je, unataka nikusaidie kujisajili na TIN, au labda nikuonyeshe jinsi ya kutumia Virtual EFD?"
            : "That's an excellent question! I am the SmartTax AI assistant designed to simplify all tax matters here in Tanzania. Would you like me to guide you through TIN registration, or perhaps show you how to generate a Virtual EFD receipt?";
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
    if (sidebar && sidebar.classList.contains('mobile-active')) {
        sidebar.classList.remove('mobile-active');
    }
}

function simulateScan() {
    const file = document.getElementById('file-upload').files[0];
    if(!file) return;

    document.getElementById('empty-state').style.display = 'none';
    document.getElementById('scan-table').style.display = 'none';
    const loader = document.getElementById('scan-loading');
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        document.getElementById('scan-table').style.display = 'table';
    }, 2500); // simulate 2.5s AI processing time
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
    if (sidebar) {
        sidebar.classList.toggle('mobile-active');
    }
}
