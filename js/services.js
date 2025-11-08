// خاص بالـPopup Modal بتاع "Read More" في الخدمات، وفتح/غلق النوافذ دي
const serviceDetails = {
    web: {
        en: {
            title: "Web Development",
            icon: '<i class="fas fa-code"></i>',
            description: "Our web development services focus on creating responsive, high-performance websites that deliver exceptional user experiences. We leverage the latest technologies and frameworks to build scalable solutions that grow with your business.",
            features: [
                "Responsive design for all devices",
                "Custom web applications",
                "E-commerce solutions",
                "Content management systems",
                "API integration",
                "Performance optimization"
            ],
            additional: "We follow agile development methodologies to ensure timely delivery and continuous improvement of your web presence."
        },
        ar: {
            title: "تطوير الويب",
            icon: '<i class="fas fa-code"></i>',
            description: "تركز خدمات تطوير الويب لدينا على إنشاء مواقع ويب متجاوبة عالية الأداء تقدم تجارب مستخدم استثنائية. نستفيد من أحدث التقنيات والأطر لبناء حلول قابلة للتطوير تنمو مع عملك.",
            features: [
                "تصميم متجاوب لجميع الأجهزة",
                "تطبيقات ويب مخصصة",
                "حلول التجارة الإلكترونية",
                "أنظمة إدارة المحتوى",
                "تكامل واجهة برمجة التطبيقات",
                "تحسين الأداء"
            ],
            additional: "نتبع منهجيات التطوير الرشيقة لضمان التسليم في الوقت المحدد والتحسين المستمر لوجودك على الويب."
        }
    },
    mobile: {
        en: {
            title: "Mobile Apps",
            icon: '<i class="fas fa-mobile-alt"></i>',
            description: "We develop native and cross-platform mobile applications that provide seamless experiences on both iOS and Android devices. Our apps are designed with user engagement and business objectives in mind.",
            features: [
                "Native iOS and Android development",
                "Cross-platform solutions",
                "User-centered design",
                "Backend integration",
                "App store optimization",
                "Ongoing maintenance and updates"
            ],
            additional: "Our mobile development process includes thorough testing across multiple devices to ensure optimal performance and user satisfaction."
        },
        ar: {
            title: "تطبيقات الموبايل",
            icon: '<i class="fas fa-mobile-alt"></i>',
            description: "نطور تطبيقات جوال أصلية ومتعددة المنصات توفر تجارب سلسة على أجهزة iOS وAndroid. تم تصميم تطبيقاتنا مع مراعاة مشاركة المستخدم وأهداف العمل.",
            features: [
                "تطوير iOS وAndroid الأصلي",
                "حلول متعددة المنصات",
                "تصميم متمحور حول المستخدم",
                "تكامل الخلفية",
                "تحسين متجر التطبيقات",
                "الصيانة والتحديثات المستمرة"
            ],
            additional: "تتضمن عملية التطوير للجوال لدينا اختبارًا شاملاً عبر أجهزة متعددة لضمان الأداء الأمثل ورضا المستخدم."
        }
    },
    security: {
        en: {
            title: "Cyber Security",
            icon: '<i class="fas fa-shield-alt"></i>',
            description: "Protect your digital assets with our comprehensive cybersecurity solutions. We implement multi-layered security measures to safeguard your systems, data, and reputation from evolving threats.",
            features: [
                "Vulnerability assessments",
                "Penetration testing",
                "Security monitoring",
                "Incident response planning",
                "Data encryption",
                "Compliance consulting"
            ],
            additional: "Our security experts stay current with the latest threats and protection strategies to provide you with cutting-edge security solutions."
        },
        ar: {
            title: "الأمن السيبراني",
            icon: '<i class="fas fa-shield-alt"></i>',
            description: "احمِ أصولك الرقمية مع حلول الأمن السيبراني الشاملة لدينا. ننفذ إجراءات أمنية متعددة الطبقات لحماية أنظمتك وبياناتك وسمعتك من التهديدات المتطورة.",
            features: [
                "تقييمات الثغرات الأمنية",
                "اختبار الاختراق",
                "المراقبة الأمنية",
                "تخطيط استجابة الحوادث",
                "تشفير البيانات",
                "استشارات الامتثال"
            ],
            additional: "يبقى خبراء الأمن لدينا على اطلاع دائم بأحدث التهديدات واستراتيجيات الحماية لتزويدك بحلول أمنية متطورة."
        }
    },
    design: {
        en: {
            title: "UI/UX Design",
            icon: '<i class="fas fa-palette"></i>',
            description: "Create engaging digital experiences with our UI/UX design services. We combine aesthetic appeal with functional design to create interfaces that users love and that drive business results.",
            features: [
                "User research and analysis",
                "Wireframing and prototyping",
                "Visual design systems",
                "Interaction design",
                "Usability testing",
                "Design system development"
            ],
            additional: "We follow a human-centered design approach, ensuring that every design decision is backed by user research and testing."
        },
        ar: {
            title: "تصميم واجهات المستخدم",
            icon: '<i class="fas fa-palette"></i>',
            description: "أنشئ تجارب رقمية جذابة مع خدمات تصميم واجهات المستخدم لدينا. نجمع بين الجاذبية الجمالية والتصميم الوظيفي لإنشاء واجهات يحبها المستخدمون وتدفع نتائج الأعمال.",
            features: [
                "بحث وتحليل المستخدم",
                "إنشاء الهياكل والنماذج الأولية",
                "أنظمة التصميم المرئي",
                "تصميم التفاعل",
                "اختبار قابلية الاستخدام",
                "تطوير نظام التصميم"
            ],
            additional: "نتبع نهج التصميم المتمحور حول الإنسان، مما يضمن دعم كل قرار تصميم بأبحاث واختبارات المستخدم."
        }
    },
    ai: {
        en: {
            title: "AI Solutions",
            icon: '<i class="fas fa-robot"></i>',
            description: "Leverage the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications that give you a competitive edge.",
            features: [
                "Machine learning models",
                "Natural language processing",
                "Computer vision solutions",
                "Predictive analytics",
                "AI-powered chatbots",
                "Data mining and analysis"
            ],
            additional: "Our AI solutions are tailored to your specific business needs, helping you harness the power of data to make smarter decisions."
        },
        ar: {
            title: "حلول الذكاء الاصطناعي",
            icon: '<i class="fas fa-robot"></i>',
            description: "استفد من قوة الذكاء الاصطناعي لأتمتة العمليات، واكتساب رؤى من البيانات، وإنشاء تطبيقات ذكية تمنحك ميزة تنافسية.",
            features: [
                "نماذج التعلم الآلي",
                "معالجة اللغة الطبيعية",
                "حلول رؤية الكمبيوتر",
                "التحليلات التنبؤية",
                "روبوتات المحادثة المدعومة بالذكاء الاصطناعي",
                "تعدين البيانات والتحليل"
            ],
            additional: "تم تصميم حلول الذكاء الاصطناعي لدينا خصيصًا لاحتياجات عملك المحددة، مما يساعدك على تسخير قوة البيانات لاتخاذ قرارات أكثر ذكاءً."
        }
    },
    marketing: {
        en: {
            title: "Digital Marketing",
            icon: '<i class="fas fa-chart-line"></i>',
            description: "Boost your online presence and drive growth with our data-driven digital marketing strategies. We create comprehensive campaigns that increase visibility, engagement, and conversions.",
            features: [
                "Search engine optimization (SEO)",
                "Social media marketing",
                "Content marketing",
                "Pay-per-click advertising",
                "Email marketing campaigns",
                "Analytics and reporting"
            ],
            additional: "We measure and analyze campaign performance continuously, allowing us to optimize strategies for maximum ROI."
        },
        ar: {
            title: "التسويق الرقمي",
            icon: '<i class="fas fa-chart-line"></i>',
            description: "عزز وجودك على الإنترنت وقم بدفع النمو باستخدام استراتيجيات التسويق الرقمي القائمة على البيانات لدينا. ننشئ حملات شاملة تزيد من الظهور والمشاركة والتحويلات.",
            features: [
                "تحسين محركات البحث (SEO)",
                "التسويق عبر وسائل التواصل الاجتماعي",
                "تسويق المحتوى",
                "الإعلان بنظام الدفع بالنقرة",
                "حملات التسويق عبر البريد الإلكتروني",
                "التحليلات وإعداد التقارير"
            ],
            additional: "نقوم بقياس وتحليل أداء الحملة باستمرار، مما يسمح لنا بتحسين الاستراتيجيات لأقصى عائد على الاستثمار."
        }
    },
    graphic: {
        en: {
            title: "Graphic Design",
            icon: '<i class="fas fa-paint-brush"></i>',
            description: "Transform your brand identity with our creative graphic design services. We craft visually compelling designs that communicate your message effectively and resonate with your target audience.",
            features: [
                "Logo design and branding",
                "Print design (brochures, flyers)",
                "Social media graphics",
                "Packaging design",
                "Illustrations and infographics",
                "Brand style guides"
            ],
            additional: "Our design team combines artistic creativity with strategic thinking to create visuals that not only look great but also drive results for your business."
        },
        ar: {
            title: "تصميم الجرافيك",
            icon: '<i class="fas fa-paint-brush"></i>',
            description: "حوّل هوية علامتك التجارية مع خدمات تصميم الجرافيك الإبداعية لدينا. نصنع تصاميم بصرية مقنعة تنقل رسالتك بشكل فعال وتتوافق مع جمهورك المستهدف.",
            features: [
                "تصميم الشعار والهوية البصرية",
                "التصميم المطبوع (الكتيبات، النشرات)",
                "رسومات وسائل التواصل الاجتماعي",
                "تصميم التغليف",
                "الرسوم التوضيحية والإنفوجرافيك",
                "أدلة نمط العلامة التجارية"
            ],
            additional: "يجمع فريق التصميم لدينا بين الإبداع الفني والتفكير الاستراتيجي لإنشاء مرئيات لا تبدو رائعة فحسب، بل تحقق أيضًا نتائج لعملك."
        }
    }
};

function initServices() {
    // مودال الخدمات
    const serviceModal = document.getElementById('service-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalFeaturesList = document.getElementById('modal-features-list');
    const modalAdditional = document.getElementById('modal-additional');
    const serviceReadMoreButtons = document.querySelectorAll('.service-read-more');
    
    // دالة للحصول على اللغة الحالية
    function getCurrentLanguage() {
        return document.documentElement.getAttribute('lang') || 'en';
    }
    
    // فتح مودال الخدمة
    serviceReadMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const currentLang = getCurrentLanguage();
            const serviceData = serviceDetails[service]?.[currentLang] || serviceDetails[service]?.en;
            
            if (serviceData) {
                modalIcon.innerHTML = serviceData.icon;
                modalTitle.textContent = serviceData.title;
                modalDescription.textContent = serviceData.description;
                modalAdditional.textContent = serviceData.additional;
                
                // إضافة الميزات
                modalFeaturesList.innerHTML = '';
                serviceData.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeaturesList.appendChild(li);
                });
                
                // عرض المودال
                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // إغلاق مودال الخدمة
    modalClose.addEventListener('click', function() {
        serviceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // إغلاق المودال بالنقر خارج المحتوى
    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // زر View All للموبايل
    const viewAllBtn = document.getElementById('viewAllServices');
    const servicesGrid = document.querySelector('.services-grid');
    const viewAllContainer = document.querySelector('.view-all-container');
    const hiddenServices = document.querySelectorAll('.mobile-hidden-service');
    
    if (viewAllBtn && servicesGrid && viewAllContainer) {
        viewAllBtn.addEventListener('click', function() {
            // إظهار جميع الخدمات
            servicesGrid.classList.add('show-all');
            
            // إضافة أنيميشن لكل خدمة مخفية
            hiddenServices.forEach((service, index) => {
                setTimeout(() => {
                    service.classList.add('revealed');
                }, index * 150); // تأخير متدرج للأنيميشن
            });
            
            // إخفاء زر View All بعد النقر
            viewAllContainer.classList.add('hidden');
            
            // تحديث النص حسب اللغة
            const currentLang = getCurrentLanguage();
            if (currentLang === 'ar') {
                this.querySelector('span').textContent = 'عرض الكل';
            } else {
                this.querySelector('span').textContent = 'View All';
            }
        });
    }

    // تحديث المودال عند تغيير اللغة
    function updateServiceModalLanguage() {
        if (serviceModal.classList.contains('active')) {
            // البحث عن الزر الذي تم النقر عليه مسبقاً
            const activeService = document.querySelector('.service-read-more.active');
            if (activeService) {
                activeService.click(); // إعادة فتح المودال باللغة الجديدة
            }
        }
    }

    // استمع لتغيير اللغة (إذا كان عندك event listener للغة)
    document.addEventListener('languageChanged', updateServiceModalLanguage);
}

// دالة مساعدة لتحديث جميع المودالات عند تغيير اللغة
function updateAllModalsOnLanguageChange() {
    // تحديث مودال الخدمات
    if (document.getElementById('service-modal')?.classList.contains('active')) {
        const activeServiceBtn = document.querySelector('.service-read-more.active');
        if (activeServiceBtn) {
            activeServiceBtn.click();
            // إعادة فتح المودال بعد تغيير اللغة
            setTimeout(() => {
                activeServiceBtn.click();
            }, 100);
        }
    }
    
    // تحديث مودال المشاريع (إذا كان موجود)
    if (document.getElementById('project-modal')?.classList.contains('active')) {
        const activeProjectCard = document.querySelector('.project-card.active');
        if (activeProjectCard) {
            activeProjectCard.click();
            setTimeout(() => {
                activeProjectCard.click();
            }, 100);
        }
    }
}

// أضف هذا الـevent listener في دالة initLanguage
// في دالة setLanguage أضف هذا السطر:
// updateAllModalsOnLanguageChange();