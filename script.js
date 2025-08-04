class AIExcuseGenerator {
    constructor() {
        this.excuseTemplates = {
            work: {
                low: [
                    "I'm experiencing some minor technical difficulties with my home internet connection that may cause slight delays in my responses today.",
                    "I have a brief family commitment that requires my attention, but I'll be available for most of the day.",
                    "I'm dealing with a small plumbing issue at home that needs immediate attention to prevent any damage."
                ],
                medium: [
                    "My car broke down unexpectedly this morning, and I'm waiting for roadside assistance. I should be able to work remotely once this is resolved.",
                    "I woke up feeling quite unwell and think it's best if I work from home today to avoid spreading anything to colleagues.",
                    "There's been a family emergency that requires my immediate attention, but I expect to be available later today."
                ],
                high: [
                    "I've been called for jury duty and must appear in court today. This was completely unexpected and I apologize for the short notice.",
                    "My child's school called with a medical emergency and I need to pick them up immediately and take them to the doctor.",
                    "There's been a significant water leak in my apartment building and I need to be present for emergency repairs."
                ],
                emergency: [
                    "I'm currently at the hospital with a family member who was in an accident. I'll update you as soon as I can on my availability.",
                    "My home has been affected by a power outage due to severe weather, and I have no internet or phone service.",
                    "I've been in a minor car accident and need to deal with police reports and insurance. I'm okay but will be unavailable for several hours."
                ]
            },
            school: {
                low: [
                    "I'm experiencing some technical issues with my laptop that are preventing me from accessing the online materials properly.",
                    "I have a minor medical appointment that I couldn't reschedule, but I should be back in time for most of the class.",
                    "My internet connection has been unstable this morning, which might affect my participation in online discussions."
                ],
                medium: [
                    "I'm feeling quite unwell today and think it's best if I don't attend class to avoid spreading illness to other students.",
                    "My car wouldn't start this morning and I'm waiting for a mechanic. I'm trying to arrange alternative transportation.",
                    "There's been a family situation that requires my immediate attention, but I hope to resolve it quickly."
                ],
                high: [
                    "I've been called for an important medical appointment that couldn't be rescheduled, and it conflicts with class time.",
                    "My apartment building had a fire alarm malfunction and we've been evacuated while they investigate the issue.",
                    "I'm dealing with a serious family emergency that requires me to travel out of town immediately."
                ],
                emergency: [
                    "I'm currently at the emergency room with a family member and cannot leave at this time.",
                    "My area has been affected by severe weather conditions that have made travel dangerous and knocked out power.",
                    "I've been in an accident and am currently dealing with emergency responders and medical attention."
                ]
            },
            social: {
                low: [
                    "I'm not feeling 100% today and think it might be better if I stay home and rest up.",
                    "I have some unexpected work commitments that came up last minute that I need to handle.",
                    "I'm dealing with some minor car trouble and don't feel comfortable driving right now."
                ],
                medium: [
                    "I'm feeling quite sick and don't want to risk getting anyone else ill at the gathering.",
                    "I have a family obligation that I completely forgot about and can't get out of.",
                    "My pet is having some health issues and I need to take them to the emergency vet."
                ],
                high: [
                    "I've come down with what seems like food poisoning and am really not well enough to leave the house.",
                    "There's been a family emergency that requires my immediate attention and presence.",
                    "I'm having severe car problems and my mechanic says it's not safe to drive until it's fixed."
                ],
                emergency: [
                    "I'm currently at the hospital dealing with a medical emergency with a close family member.",
                    "My home has been affected by a burst pipe and I need to deal with emergency repairs and water damage.",
                    "I've been in an accident and am currently handling the situation with emergency services."
                ]
            },
            family: {
                low: [
                    "I have some minor household repairs that need immediate attention before they become bigger problems.",
                    "I'm not feeling my best today and think it would be better for everyone if I stayed home and rested.",
                    "I have some work commitments that unexpectedly extended and I need to finish them up."
                ],
                medium: [
                    "I'm feeling quite unwell and don't want to risk spreading anything to family members, especially the elderly ones.",
                    "My car is having issues and I don't feel safe driving the distance required to attend.",
                    "I have an important appointment that I couldn't reschedule that conflicts with the family gathering."
                ],
                high: [
                    "I'm dealing with a significant work crisis that requires my immediate and full attention.",
                    "I've come down with what appears to be the flu and am really too sick to be around others.",
                    "I'm having serious car problems and my mechanic says it's not safe to drive until major repairs are completed."
                ],
                emergency: [
                    "I'm currently dealing with a medical emergency and am at the hospital.",
                    "My home has been affected by severe weather damage and I need to handle emergency repairs.",
                    "I've been in an accident and am currently dealing with emergency responders and medical care."
                ]
            },
            health: {
                low: [
                    "I'm experiencing some mild symptoms that I want to monitor before they potentially worsen.",
                    "I have a minor medical appointment that I need to attend for a routine check-up.",
                    "I'm feeling slightly under the weather and think it's best to rest and recover."
                ],
                medium: [
                    "I'm experiencing some concerning symptoms that I need to have checked out by a medical professional.",
                    "I have a medical appointment that was difficult to schedule and I can't reschedule it.",
                    "I'm feeling quite unwell and think it's important to stay home and monitor my condition."
                ],
                high: [
                    "I'm experiencing significant symptoms that require immediate medical attention and evaluation.",
                    "I have an urgent medical appointment that cannot be postponed due to the nature of my condition.",
                    "I'm feeling very ill and my doctor has advised me to stay home and rest completely."
                ],
                emergency: [
                    "I'm currently at the emergency room receiving medical treatment for a serious condition.",
                    "I've had a medical emergency that requires immediate hospitalization and treatment.",
                    "I'm experiencing a severe medical episode that requires emergency medical intervention."
                ]
            },
            transportation: {
                low: [
                    "My car is making some concerning noises and I want to have it checked before driving long distances.",
                    "I'm having minor issues with my vehicle that make me uncomfortable driving right now.",
                    "My usual transportation method is temporarily unavailable due to minor technical issues."
                ],
                medium: [
                    "My car broke down and I'm waiting for roadside assistance to help me get it running again.",
                    "I'm having significant car trouble that requires immediate mechanical attention before I can drive safely.",
                    "My transportation has been affected by unexpected mechanical failures that need professional repair."
                ],
                high: [
                    "My vehicle has completely broken down and requires major repairs before it will be safe to drive.",
                    "I'm stranded due to serious car problems and am waiting for emergency roadside assistance.",
                    "My car has suffered significant mechanical failure and is currently undriveable."
                ],
                emergency: [
                    "I've been in a car accident and am currently dealing with emergency responders and vehicle recovery.",
                    "My vehicle has been severely damaged and I'm currently handling the emergency situation.",
                    "I'm stranded in an emergency situation due to complete vehicle failure in unsafe conditions."
                ]
            },
            technology: {
                low: [
                    "I'm experiencing some minor technical difficulties with my internet connection that may cause delays.",
                    "My computer is running slowly today and I'm having trouble accessing some online resources.",
                    "I'm having some connectivity issues that are making it difficult to participate fully in digital activities."
                ],
                medium: [
                    "My internet service has been intermittent all day and I can't maintain a stable connection.",
                    "I'm experiencing significant computer problems that are preventing me from completing digital tasks.",
                    "My technology setup has been affected by technical issues that require professional assistance."
                ],
                high: [
                    "My computer has crashed and I'm unable to access any of my files or online resources.",
                    "I'm experiencing a complete internet outage that has left me without any digital connectivity.",
                    "My primary technology devices have failed and I have no backup systems available."
                ],
                emergency: [
                    "I've experienced a complete technology failure affecting all my devices and internet connectivity.",
                    "My area has been affected by a major internet and power outage due to infrastructure damage.",
                    "I'm dealing with a critical technology emergency that has left me completely disconnected."
                ]
            }
        };

        this.analytics = {
            totalExcuses: parseInt(localStorage.getItem('totalExcuses') || '0'),
            categoryStats: JSON.parse(localStorage.getItem('categoryStats') || '{}'),
            believabilitySum: parseFloat(localStorage.getItem('believabilitySum') || '0'),
            lastResponseTime: parseFloat(localStorage.getItem('lastResponseTime') || '0.8')
        };

        this.initializeEventListeners();
        this.updateAnalytics();
        this.initializeNavigation();
    }

    initializeEventListeners() {
        const generateBtn = document.getElementById('generateBtn');
        const copyBtn = document.getElementById('copyBtn');
        const regenerateBtn = document.getElementById('regenerateBtn');
        const believabilitySlider = document.getElementById('believability');

        generateBtn.addEventListener('click', () => this.generateExcuse());
        copyBtn.addEventListener('click', () => this.copyExcuse());
        regenerateBtn.addEventListener('click', () => this.generateExcuse());

        // Update slider value display
        believabilitySlider.addEventListener('input', (e) => {
            const value = e.target.value;
            const labels = e.target.parentElement.querySelector('.slider-labels');
            const leftLabel = labels.children[0];
            const rightLabel = labels.children[1];
            
            if (value <= 3) {
                leftLabel.style.fontWeight = 'bold';
                rightLabel.style.fontWeight = 'normal';
            } else if (value >= 8) {
                leftLabel.style.fontWeight = 'normal';
                rightLabel.style.fontWeight = 'bold';
            } else {
                leftLabel.style.fontWeight = 'normal';
                rightLabel.style.fontWeight = 'normal';
            }
        });
    }

    initializeNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Scroll to section
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Update active nav on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    async generateExcuse() {
        const generateBtn = document.getElementById('generateBtn');
        const btnText = generateBtn.querySelector('.btn-text');
        const btnLoader = generateBtn.querySelector('.btn-loader');
        const resultsSection = document.getElementById('resultsSection');

        // Show loading state
        btnText.classList.add('hidden');
        btnLoader.classList.remove('hidden');
        generateBtn.disabled = true;

        // Get form values
        const category = document.getElementById('category').value;
        const urgency = document.getElementById('urgency').value;
        const tone = document.getElementById('tone').value;
        const believability = parseInt(document.getElementById('believability').value);
        const context = document.getElementById('context').value;

        // Simulate AI processing time
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
        const responseTime = (Date.now() - startTime) / 1000;

        // Generate excuse
        const excuse = this.createExcuse(category, urgency, tone, believability, context);
        const metrics = this.calculateMetrics(excuse, believability, tone, urgency);

        // Update analytics
        this.updateAnalyticsData(category, metrics.believability, responseTime);

        // Display results
        this.displayResults(excuse, metrics);

        // Hide loading state
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
        generateBtn.disabled = false;

        // Show results section
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    createExcuse(category, urgency, tone, believability, context) {
        const templates = this.excuseTemplates[category][urgency];
        let baseExcuse = templates[Math.floor(Math.random() * templates.length)];

        // Modify based on tone
        baseExcuse = this.adjustTone(baseExcuse, tone);

        // Modify based on believability
        baseExcuse = this.adjustBelievability(baseExcuse, believability);

        // Add context if provided
        if (context.trim()) {
            baseExcuse = this.incorporateContext(baseExcuse, context);
        }

        return baseExcuse;
    }

    adjustTone(excuse, tone) {
        const toneModifiers = {
            professional: {
                prefix: "I regret to inform you that ",
                suffix: " I apologize for any inconvenience this may cause and will keep you updated on the situation."
            },
            casual: {
                prefix: "Hey, so ",
                suffix: " Sorry about this!"
            },
            apologetic: {
                prefix: "I'm really sorry, but ",
                suffix: " I feel terrible about this and will make it up to you."
            },
            confident: {
                prefix: "I need to let you know that ",
                suffix: " I'm handling the situation and will update you soon."
            },
            humorous: {
                prefix: "Well, this is awkward, but ",
                suffix: " Life has a funny way of throwing curveballs, doesn't it?"
            }
        };

        const modifier = toneModifiers[tone];
        if (modifier) {
            // Remove the first letter and make it lowercase for better flow
            const modifiedExcuse = excuse.charAt(0).toLowerCase() + excuse.slice(1);
            return modifier.prefix + modifiedExcuse + modifier.suffix;
        }

        return excuse;
    }

    adjustBelievability(excuse, believability) {
        if (believability <= 3) {
            // More creative/outlandish
            const creativeElements = [
                " It's like something out of a movie, honestly.",
                " I couldn't make this up if I tried.",
                " The timing is almost comically bad.",
                " It's one of those things that only happens to me."
            ];
            return excuse + creativeElements[Math.floor(Math.random() * creativeElements.length)];
        } else if (believability >= 8) {
            // More realistic/mundane
            const realisticElements = [
                " These things happen, unfortunately.",
                " It's a common issue that many people face.",
                " I've dealt with this before, but it's still inconvenient.",
                " It's just one of those everyday problems."
            ];
            return excuse + realisticElements[Math.floor(Math.random() * realisticElements.length)];
        }

        return excuse;
    }

    incorporateContext(excuse, context) {
        const contextIntegrations = [
            ` Given that ${context.toLowerCase()}, this situation is particularly challenging.`,
            ` This is especially problematic because ${context.toLowerCase()}.`,
            ` With ${context.toLowerCase()}, I really can't afford for this to happen right now.`,
            ` Considering ${context.toLowerCase()}, this couldn't have come at a worse time.`
        ];

        return excuse + contextIntegrations[Math.floor(Math.random() * contextIntegrations.length)];
    }

    calculateMetrics(excuse, believabilityInput, tone, urgency) {
        // Calculate believability score (influenced by input and other factors)
        let believabilityScore = believabilityInput * 10;
        
        // Adjust based on tone
        const toneAdjustments = {
            professional: 5,
            casual: -2,
            apologetic: 3,
            confident: 1,
            humorous: -5
        };
        believabilityScore += toneAdjustments[tone] || 0;

        // Adjust based on urgency
        const urgencyAdjustments = {
            low: 5,
            medium: 0,
            high: -3,
            emergency: -8
        };
        believabilityScore += urgencyAdjustments[urgency] || 0;

        // Add some randomness
        believabilityScore += (Math.random() - 0.5) * 10;

        // Ensure it's within bounds
        believabilityScore = Math.max(10, Math.min(100, believabilityScore));

        // Calculate creativity score (inverse relationship with believability)
        const creativityScore = Math.max(10, Math.min(100, 110 - believabilityScore + (Math.random() - 0.5) * 20));

        return {
            believability: Math.round(believabilityScore),
            creativity: Math.round(creativityScore)
        };
    }

    displayResults(excuse, metrics) {
        const excuseText = document.getElementById('excuseText');
        const believabilityBar = document.getElementById('believabilityBar');
        const believabilityScore = document.getElementById('believabilityScore');
        const creativityBar = document.getElementById('creativityBar');
        const creativityScore = document.getElementById('creativityScore');

        // Display excuse with typing effect
        this.typeWriter(excuseText, excuse, 30);

        // Animate metrics
        setTimeout(() => {
            believabilityBar.style.width = `${metrics.believability}%`;
            believabilityScore.textContent = `${metrics.believability}%`;
            
            creativityBar.style.width = `${metrics.creativity}%`;
            creativityScore.textContent = `${metrics.creativity}%`;
        }, 1000);
    }

    typeWriter(element, text, speed) {
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    copyExcuse() {
        const excuseText = document.getElementById('excuseText').textContent;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(excuseText).then(() => {
                this.showCopyFeedback();
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = excuseText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopyFeedback();
        }
    }

    showCopyFeedback() {
        const copyBtn = document.getElementById('copyBtn');
        const originalText = copyBtn.innerHTML;
        
        copyBtn.innerHTML = '<span>✓</span> Copied!';
        copyBtn.style.background = '#10b981';
        copyBtn.style.color = 'white';
        copyBtn.style.borderColor = '#10b981';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
            copyBtn.style.borderColor = '';
        }, 2000);
    }

    updateAnalyticsData(category, believability, responseTime) {
        this.analytics.totalExcuses++;
        this.analytics.believabilitySum += believability;
        this.analytics.lastResponseTime = responseTime;

        // Update category stats
        if (!this.analytics.categoryStats[category]) {
            this.analytics.categoryStats[category] = 0;
        }
        this.analytics.categoryStats[category]++;

        // Save to localStorage
        localStorage.setItem('totalExcuses', this.analytics.totalExcuses.toString());
        localStorage.setItem('believabilitySum', this.analytics.believabilitySum.toString());
        localStorage.setItem('lastResponseTime', this.analytics.lastResponseTime.toString());
        localStorage.setItem('categoryStats', JSON.stringify(this.analytics.categoryStats));

        // Update display
        this.updateAnalytics();
    }

    updateAnalytics() {
        const totalExcusesEl = document.getElementById('totalExcuses');
        const avgBelievabilityEl = document.getElementById('avgBelievability');
        const popularCategoryEl = document.getElementById('popularCategory');
        const responseTimeEl = document.getElementById('responseTime');

        // Update numbers
        totalExcusesEl.textContent = this.analytics.totalExcuses.toLocaleString();
        
        const avgBelievability = this.analytics.totalExcuses > 0 
            ? Math.round(this.analytics.believabilitySum / this.analytics.totalExcuses)
            : 0;
        avgBelievabilityEl.textContent = `${avgBelievability}%`;
        
        responseTimeEl.textContent = `${this.analytics.lastResponseTime.toFixed(1)}s`;

        // Find most popular category
        let mostPopular = 'Work';
        let maxCount = 0;
        
        for (const [category, count] of Object.entries(this.analytics.categoryStats)) {
            if (count > maxCount) {
                maxCount = count;
                mostPopular = category.charAt(0).toUpperCase() + category.slice(1);
            }
        }
        
        popularCategoryEl.textContent = mostPopular;

        // Update chart
        this.updateChart();
    }

    updateChart() {
        const chartBars = document.querySelectorAll('.chart-bar');
        const total = this.analytics.totalExcuses || 1;

        chartBars.forEach(bar => {
            const category = bar.dataset.category;
            const count = this.analytics.categoryStats[category] || 0;
            const percentage = Math.round((count / total) * 100);
            
            bar.style.height = `${Math.max(5, percentage * 2)}%`;
            bar.querySelector('.bar-value').textContent = `${percentage}%`;
        });
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIExcuseGenerator();
});

// Add some interactive animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe analytics cards
    document.querySelectorAll('.analytics-card, .about-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});