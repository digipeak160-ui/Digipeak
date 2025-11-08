// إعدادات AOS المتجاوبة حسب حجم الشاشة
function initAOS() {
    // الكشف عن حجم الشاشة
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    // إعدادات مختلفة حسب حجم الشاشة
    const aosConfig = {
        // الإعدادات الأساسية
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        
        // إعدادات تختلف حسب حجم الشاشة
        offset: isMobile ? 80 : (isTablet ? 120 : 200),
        delay: isMobile ? 0 : (isTablet ? 50 : 100),
        duration: isMobile ? 500 : (isTablet ? 600 : 800),
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom'
    };
    
    // تهيئة AOS بالإعدادات
    AOS.init(aosConfig);
    
    // إعادة تهيئة AOS عند تغيير حجم الشاشة
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            AOS.refresh();
        }, 250);
    });
}

// تهيئة AOS عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initAOS();
});

// خاص بالمشاريع في الكاتجري + الـPopup اللي بيعرض تفاصيل المشروع عند الضغط عليه
const projectDetails = {
    web1: {
        en: {
            title: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "A comprehensive online shopping platform with advanced features and secure payment integration. This project involved developing a full-stack e-commerce solution with user authentication, product management, shopping cart functionality, and secure payment processing.",
            features: [
                "User authentication and authorization",
                "Product catalog with search and filtering",
                "Shopping cart and checkout process",
                "Secure payment gateway integration",
                "Order management system",
                "Customer reviews and ratings"
            ],
            additional: "The platform was built using React for the frontend and Node.js for the backend, with MongoDB for data storage. It supports multiple payment methods and includes an admin dashboard for managing products, orders, and customers.",
            link: "#"
        },
        ar: {
            title: "منصة التجارة الإلكترونية",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "منصة تسوق شاملة عبر الإنترنت مع ميزات متقدمة وتكامل دفع آمن. تضمن هذا المشروع تطوير حل تجارة إلكترونية كامل مع مصادقة المستخدم، وإدارة المنتجات، ووظائف سلة التسوق، ومعالجة الدفع الآمن.",
            features: [
                "مصادقة المستخدم والتفويض",
                "كتالوج المنتجات مع البحث والتصفية",
                "سلة التسوق وعملية الدفع",
                "تكامل بوابة الدفع الآمن",
                "نظام إدارة الطلبات",
                "تقييمات وتقييمات العملاء"
            ],
            additional: "تم بناء المنصة باستخدام React للواجهة الأمامية وNode.js للخلفية، مع MongoDB لتخزين البيانات. تدعم طرق دفع متعددة وتتضمن لوحة تحكم للمشرف لإدارة المنتجات والطلبات والعملاء.",
            link: "#"
        }
    },
    web2: {
        en: {
            title: "Corporate Website",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "A modern corporate website with CMS integration and responsive design for optimal user experience. This project focused on creating a professional online presence for a multinational corporation with multiple regional offices.",
            features: [
                "Content management system integration",
                "Multi-language support",
                "Responsive design for all devices",
                "Interactive company portfolio",
                "Contact forms and lead generation",
                "SEO optimization"
            ],
            additional: "The website was developed using WordPress with custom themes and plugins to meet the client's specific requirements. It includes advanced features like location-based content and integrated analytics.",
            link: "#"
        },
        ar: {
            title: "موقع الشركة",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "موقع شركة حديث مع تكامل نظام إدارة المحتوى وتصميم متجاوب لتجربة مستخدم مثالية. ركز هذا المشروع على إنشاء وجود إلكتروني احترافي لشركة متعددة الجنسيات مع مكاتب إقليمية متعددة.",
            features: [
                "تكامل نظام إدارة المحتوى",
                "دعم متعدد اللغات",
                "تصميم متجاوب لجميع الأجهزة",
                "محفظة الشركة التفاعلية",
                "نماذج الاتصال وتوليد العملاء المحتملين",
                "تحسين محركات البحث"
            ],
            additional: "تم تطوير الموقع باستخدام WordPress مع سمات وإضافات مخصصة لتلبية متطلبات العميل المحددة. يتضمن ميزات متقدمة مثل المحتوى القائم على الموقع والتحليلات المتكاملة.",
            link: "#"
        }
    },
    mobile1: {
        en: {
            title: "Fitness Tracking App",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations. This app helps users achieve their fitness goals through data-driven insights and personalized coaching.",
            features: [
                "Workout tracking and planning",
                "Nutrition and calorie tracking",
                "Health metrics monitoring",
                "Personalized recommendations",
                "Social features and challenges",
                "Integration with wearables"
            ],
            additional: "The app was developed using React Native for cross-platform compatibility, with a Node.js backend and Firebase for real-time data synchronization. It includes AI-powered recommendations based on user behavior and goals.",
            link: "#"
        },
        ar: {
            title: "تطبيق تتبع اللياقة البدنية",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تطبيق جوال لتتبع التمارين والتغذية ومقاييس الصحة مع توصيات مخصصة. يساعد هذا التطبيق المستخدمين على تحقيق أهدافهم الرياضية من خلال رؤى قائمة على البيانات والتوجيه الشخصي.",
            features: [
                "تتبع التمارين والتخطيط",
                "تتبع التغذية والسعرات الحرارية",
                "مراقبة مقاييس الصحة",
                "توصيات مخصصة",
                "ميزات اجتماعية وتحديات",
                "التكامل مع الأجهزة القابلة للارتداء"
            ],
            additional: "تم تطوير التطبيق باستخدام React Native للتطابق عبر المنصات، مع خلفية Node.js وFirebase لمزامنة البيانات في الوقت الفعلي. يتضمن توصيات مدعومة بالذكاء الاصطناعي بناءً على سلوك المستخدم وأهدافه.",
            link: "#"
        }
    },
    mobile2: {
        en: {
            title: "Personal Finance App",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "An intuitive mobile application for managing personal finances, budgets, and investment portfolios. This app provides users with comprehensive financial insights and tools to make informed decisions.",
            features: [
                "Expense tracking and categorization",
                "Budget planning and monitoring",
                "Investment portfolio management",
                "Bill reminders and payments",
                "Financial goal setting",
                "Secure data encryption"
            ],
            additional: "Built with Flutter for seamless performance across iOS and Android, the app integrates with banking APIs for automatic transaction import and uses machine learning for spending pattern analysis.",
            link: "#"
        },
        ar: {
            title: "تطبيق التمويل الشخصي",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تطبيق جوال بديهي لإدارة الشؤون المالية الشخصية والميزانيات ومحافظ الاستثمار. يوفر هذا التطبيق للمستخدمين رؤى مالية شاملة وأدوات لاتخاذ قرارات مستنيرة.",
            features: [
                "تتبع النفقات وتصنيفها",
                "تخطيط الميزانية ومراقبتها",
                "إدارة محفظة الاستثمار",
                "تذكير الفواتير والمدفوعات",
                "تحديد الأهداف المالية",
                "تشفير البيانات الآمن"
            ],
            additional: "تم بناء التطبيق باستخدام Flutter لأداء سلس عبر iOS وAndroid، ويدمج التطبيق مع واجهات برمجة التطبيقات المصرفية لاستيراد المعاملات التلقائي ويستخدم التعلم الآلي لتحليل أنماط الإنفاق.",
            link: "#"
        }
    },
    security1: {
        en: {
            title: "Enterprise Security System",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "A comprehensive security solution for enterprise networks with threat detection and prevention capabilities. This system protects organizations from cyber threats through advanced monitoring and response mechanisms.",
            features: [
                "Network intrusion detection",
                "Real-time threat monitoring",
                "Automated incident response",
                "Vulnerability assessment",
                "Security policy enforcement",
                "Compliance reporting"
            ],
            additional: "The system was implemented using a combination of open-source security tools and custom-developed components to meet the specific security requirements of the enterprise environment.",
            link: "#"
        },
        ar: {
            title: "نظام أمن المؤسسات",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "حل أمني شامل لشبكات المؤسسات مع قدرات الكشف عن التهديدات والوقاية منها. يحمي هذا النظام المنظمات من التهديدات الإلكترونية من خلال آليات المراقبة والاستجابة المتقدمة.",
            features: [
                "كشف التسلل إلى الشبكة",
                "مراقبة التهديدات في الوقت الفعلي",
                "استجابة الحوادث الآلية",
                "تقييم الثغرات الأمنية",
                "تنفيذ سياسات الأمان",
                "تقارير الامتثال"
            ],
            additional: "تم تنفيذ النظام باستخدام مزيج من أدوات الأمان مفتوحة المصدر والمكونات المطورة خصيصًا لتلبية متطلبات الأمان المحددة لبيئة المؤسسة.",
            link: "#"
        }
    },
    security2: {
        en: {
            title: "Data Protection Framework",
            image: "https://images.unsplash.com/photo-1563013541-2d0e9fba7c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Implementation of a robust data protection framework with encryption and access control mechanisms. This project focused on securing sensitive data across multiple systems and applications.",
            features: [
                "Data encryption at rest and in transit",
                "Role-based access control",
                "Data loss prevention",
                "Audit logging and monitoring",
                "Data classification and tagging",
                "Compliance with data protection regulations"
            ],
            additional: "The framework was designed to be scalable and adaptable to different data protection requirements, with support for various encryption algorithms and access control models.",
            link: "#"
        },
        ar: {
            title: "إطار حماية البيانات",
            image: "https://images.unsplash.com/photo-1563013541-2d0e9fba7c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تنفيذ إطار قوي لحماية البيانات مع آليات التشفير والتحكم في الوصول. ركز هذا المشروع على تأمين البيانات الحساسة عبر أنظمة وتطبيقات متعددة.",
            features: [
                "تشفير البيانات في حالة السكون والنقل",
                "التحكم في الوصول القائم على الأدوار",
                "منع فقدان البيانات",
                "تسجيل التدقيق والمراقبة",
                "تصنيف البيانات ووسمها",
                "الامتثال لأنظمة حماية البيانات"
            ],
            additional: "تم تصميم الإطار ليكون قابلاً للتطوير والتكيف مع متطلبات حماية البيانات المختلفة، مع دعم خوارزميات التشفير المختلفة ونماذج التحكم في الوصول.",
            link: "#"
        }
    },
    marketing1: {
        en: {
            title: "Digital Marketing Campaign",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "A comprehensive digital marketing campaign that increased brand awareness by 150% in 3 months. This campaign utilized multiple channels and strategies to reach target audiences effectively.",
            features: [
                "Social media marketing",
                "Content marketing strategy",
                "Email marketing automation",
                "PPC advertising campaigns",
                "Influencer partnerships",
                "Performance analytics and optimization"
            ],
            additional: "The campaign resulted in significant increases in website traffic, social media engagement, and lead generation, with a strong return on investment for the client.",
            link: "#"
        },
        ar: {
            title: "حملة التسويق الرقمي",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "حملة تسويق رقمية شاملة زادت من الوعي بالعلامة التجارية بنسبة 150٪ في 3 أشهر. استخدمت هذه الحملة قنوات واستراتيجيات متعددة للوصول إلى الجماهير المستهدفة بشكل فعال.",
            features: [
                "التسويق عبر وسائل التواصل الاجتماعي",
                "استراتيجية تسويق المحتوى",
                "أتمتة التسويق عبر البريد الإلكتروني",
                "حملات الإعلان بنظام الدفع بالنقرة",
                "شراكات المؤثرين",
                "تحليلات الأداء والتحسين"
            ],
            additional: "أدت الحملة إلى زيادات كبيرة في حركة مرور الموقع، والمشاركة على وسائل التواصل الاجتماعي، وتوليد العملاء المحتملين، مع عائد قوي على الاستثمار للعميل.",
            link: "#"
        }
    },
    marketing2: {
        en: {
            title: "SEO Optimization Strategy",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Implementation of an SEO strategy that improved organic search rankings and increased website traffic by 200%. This project involved comprehensive technical and content optimization.",
            features: [
                "Technical SEO audit and fixes",
                "Keyword research and strategy",
                "Content optimization and creation",
                "Link building campaign",
                "Local SEO optimization",
                "Performance monitoring and reporting"
            ],
            additional: "The strategy focused on both on-page and off-page SEO factors, resulting in improved search visibility and higher quality traffic to the client's website.",
            link: "#"
        },
        ar: {
            title: "استراتيجية تحسين محركات البحث",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تنفيذ استراتيجية SEO حسنت ترتيب البحث العضوي وزادت حركة المرور إلى الموقع بنسبة 200٪. تضمن هذا المشروع التحسين التقني والمحتوى الشامل.",
            features: [
                "مراجعة SEO التقنية والإصلاحات",
                "بحث الكلمات الرئيسية والاستراتيجية",
                "تحسين المحتوى وإنشاؤه",
                "حملة بناء الروابط",
                "تحسين SEO المحلي",
                "مراقبة الأداء وإعداد التقارير"
            ],
            additional: "ركزت الاستراتيجية على عوامل SEO داخل الصفحة وخارجها، مما أدى إلى تحسين ظهور البحث وحركة مرور عالية الجودة إلى موقع العميل.",
            link: "#"
        }
    },
    design1: {
        en: {
            title: "Banking App UI Design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "A modern and intuitive user interface design for a mobile banking application with enhanced user experience. This design focuses on simplicity, security, and ease of use for financial transactions.",
            features: [
                "User-centered design approach",
                "Secure authentication flows",
                "Intuitive transaction interfaces",
                "Personalized dashboard",
                "Accessibility considerations",
                "Consistent design system"
            ],
            additional: "The design was created following extensive user research and testing, resulting in a banking app that users find both secure and easy to navigate for their financial needs.",
            link: "#"
        },
        ar: {
            title: "تصميم واجهة تطبيق مصرفي",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تصميم واجهة مستخدم حديثة وبديهية لتطبيق مصرفي على الهاتف المحمول مع تجربة مستخدم محسنة. يركز هذا التصميم على البساطة والأمان وسهولة الاستخدام للمعاملات المالية.",
            features: [
                "نهج التصميم المتمحور حول المستخدم",
                "عمليات المصادقة الآمنة",
                "واجهات المعاملات البديهية",
                "لوحة التحكم الشخصية",
                "اعتبارات إمكانية الوصول",
                "نظام تصميم متسق"
            ],
            additional: "تم إنشاء التصميم بعد بحث واختبار مكثفين للمستخدمين، مما أدى إلى تطبيق مصرفي يجد المستخدمون أنه آمن وسهل التنقل لاحتياجاتهم المالية.",
            link: "#"
        }
    },
    design2: {
        en: {
            title: "E-commerce UX Research",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Comprehensive user experience research and redesign for an e-commerce platform to improve conversion rates. This project identified pain points in the user journey and implemented solutions to enhance the shopping experience.",
            features: [
                "User journey mapping",
                "Usability testing and analysis",
                "Information architecture optimization",
                "Checkout process simplification",
                "Mobile experience enhancement",
                "A/B testing and validation"
            ],
            additional: "The research led to a 35% increase in conversion rates and significant improvements in user satisfaction scores, demonstrating the value of user-centered design in e-commerce.",
            link: "#"
        },
        ar: {
            title: "بحث تجربة المستخدم للتجارة الإلكترونية",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "بحث شامل في تجربة المستخدم وإعادة تصميم لمنصة التجارة الإلكترونية لتحسين معدلات التحويل. حدد هذا المشروع نقاط الألم في رحلة المستخدم ونفذ حلولاً لتعزيز تجربة التسوق.",
            features: [
                "رسم خرائط رحلة المستخدم",
                "اختبار قابلية الاستخدام والتحليل",
                "تحسين هيكل المعلومات",
                "تبسيط عملية الدفع",
                "تحسين تجربة الجوال",
                "اختبار A/B والتحقق"
            ],
            additional: "أدى البحث إلى زيادة بنسبة 35٪ في معدلات التحويل وتحسينات كبيرة في درجات رضا المستخدم، مما يظهر قيمة التصميم المتمحور حول المستخدم في التجارة الإلكترونية.",
            link: "#"
        }
    },
    ai1: {
        en: {
            title: "AI-Powered Chatbot",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Development of an intelligent chatbot for customer service with natural language processing capabilities. This AI solution handles customer inquiries, provides support, and escalates complex issues to human agents.",
            features: [
                "Natural language understanding",
                "Contextual conversation management",
                "Multi-language support",
                "Integration with knowledge base",
                "Sentiment analysis",
                "Seamless handoff to human agents"
            ],
            additional: "The chatbot was trained on extensive customer service data and can handle over 70% of common inquiries without human intervention, significantly reducing response times and improving customer satisfaction.",
            link: "#"
        },
        ar: {
            title: "روبوت محادثة مدعوم بالذكاء الاصطناعي",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تطوير روبوت محادثة ذكي لخدمة العملاء مع قدرات معالجة اللغة الطبيعية. يتعامل حل الذكاء الاصطناعي هذا مع استفسارات العملاء، ويقدم الدعم، ويصعد القضايا المعقدة إلى الوكلاء البشريين.",
            features: [
                "فهم اللغة الطبيعية",
                "إدارة المحادثة السياقية",
                "دعم متعدد اللغات",
                "التكامل مع قاعدة المعرفة",
                "تحليل المشاعر",
                "نقل سلس إلى الوكلاء البشريين"
            ],
            additional: "تم تدريب روبوت المحادثة على بيانات خدمة عملاء واسعة النطاق ويمكنه التعامل مع أكثر من 70٪ من الاستفسارات الشائعة دون تدخل بشري، مما يقلل بشكل كبير من أوقات الاستجابة ويحسن رضا العملاء.",
            link: "#"
        }
    },
    ai2: {
        en: {
            title: "Predictive Analytics System",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Implementation of a machine learning system for predictive analytics and business intelligence. This system analyzes historical data to forecast trends, identify opportunities, and support data-driven decision making.",
            features: [
                "Data collection and preprocessing",
                "Machine learning model training",
                "Real-time prediction capabilities",
                "Interactive dashboards and reports",
                "Anomaly detection",
                "Automated insights generation"
            ],
            additional: "The system processes large volumes of data from multiple sources and provides accurate predictions that have helped clients optimize operations, reduce costs, and identify new revenue opportunities.",
            link: "#"
        },
        ar: {
            title: "نظام التحليلات التنبؤية",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "تنفيذ نظام تعلم آلي للتحليلات التنبؤية وذكاء الأعمال. يحلل هذا النظام البيانات التاريخية للتنبؤ بالاتجاهات، وتحديد الفرص، ودعم اتخاذ القرارات القائمة على البيانات.",
            features: [
                "جمع البيانات والمعالجة المسبقة",
                "تدريب نماذج التعلم الآلي",
                "قدرات التنبؤ في الوقت الفعلي",
                "لوحات التحكم والتقارير التفاعلية",
                "كشف الشذوذ",
                "توليد الرؤى الآلي"
            ],
            additional: "يعالج النظام كميات كبيرة من البيانات من مصادر متعددة ويوفر تنبؤات دقيقة ساعدت العملاء على تحسين العمليات، وتقليل التكاليف، وتحديد فرص إيرادات جديدة.",
            link: "#"
        }
    }
};

function initProjects() {
    // دالة للحصول على اللغة الحالية
    function getCurrentLanguage() {
        return document.documentElement.getAttribute('lang') || 'en';
    }

    // تصفية المشاريع حسب الفئة
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // دالة لعرض مشروعين فقط من كل فئة مع fade سريع
    function showTwoProjectsPerCategory(category) {
        // إخفاء جميع المشاريع أولاً
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.display = 'none';
        });
        
        // استخدام setTimeout بفارق 0 لتجنب تأخير العرض
        setTimeout(() => {
            if (category === 'all') {
                // عرض أول مشروعين من كل فئة
                const categories = ['web', 'mobile', 'security', 'marketing', 'design', 'ai'];
                categories.forEach(cat => {
                    const categoryProjects = document.querySelectorAll(`.project-card[data-category="${cat}"]`);
                    for (let i = 0; i < 2 && i < categoryProjects.length; i++) {
                        categoryProjects[i].style.display = 'block';
                        // fade سريع جداً
                        setTimeout(() => {
                            categoryProjects[i].style.opacity = '1';
                        }, 10);
                    }
                });
            } else {
                // عرض أول مشروعين من الفئة المحددة
                const categoryProjects = document.querySelectorAll(`.project-card[data-category="${category}"]`);
                for (let i = 0; i < 2 && i < categoryProjects.length; i++) {
                    categoryProjects[i].style.display = 'block';
                    // fade سريع جداً
                    setTimeout(() => {
                        categoryProjects[i].style.opacity = '1';
                    }, 10);
                }
            }
        }, 0);
    }
    
    // تهيئة العرض الأولي - عرض مشروعين من كل فئة
    showTwoProjectsPerCategory('web');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة الفئة النشطة من جميع الأزرار
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الفئة النشطة للزر المحدد
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            showTwoProjectsPerCategory(category);
        });
    });

    // مودال المشاريع
    const projectModal = document.getElementById('project-modal');
    const projectModalClose = document.getElementById('project-modal-close');
    const projectModalImg = document.getElementById('project-modal-img');
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectModalDescription = document.getElementById('project-modal-description');
    const projectModalFeaturesList = document.getElementById('project-modal-features-list');
    const projectModalAdditional = document.getElementById('project-modal-additional');
    const projectModalLink = document.getElementById('project-modal-link');
    
    // فتح مودال المشروع
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const project = this.getAttribute('data-project');
            const currentLang = getCurrentLanguage();
            const projectData = projectDetails[project]?.[currentLang] || projectDetails[project]?.en;
            
            if (projectData) {
                projectModalImg.src = projectData.image;
                projectModalTitle.textContent = projectData.title;
                projectModalDescription.textContent = projectData.description;
                projectModalAdditional.textContent = projectData.additional;
                projectModalLink.href = projectData.link;
                
                // تحديث نص زر View Live Project حسب اللغة
                const projectModalLinkText = projectModalLink.querySelector('span');
                if (projectModalLinkText) {
                    projectModalLinkText.textContent = currentLang === 'ar' ? 'عرض المشروع مباشرة' : 'View Live Project';
                }
                
                // إضافة الميزات
                projectModalFeaturesList.innerHTML = '';
                projectData.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    projectModalFeaturesList.appendChild(li);
                });
                
                // عرض المودال
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // إغلاق مودال المشروع
    projectModalClose.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // إغلاق المودال بالنقر خارج المحتوى
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // تحديث المودال عند تغيير اللغة
    function updateProjectModalLanguage() {
        if (projectModal.classList.contains('active')) {
            // البحث عن الكارد الذي تم النقر عليه مسبقاً
            const activeProjectCard = document.querySelector('.project-card.active');
            if (activeProjectCard) {
                // إعادة فتح المودال باللغة الجديدة
                setTimeout(() => {
                    activeProjectCard.click();
                }, 100);
            }
        }
    }

    // استمع لتغيير اللغة
    document.addEventListener('languageChanged', updateProjectModalLanguage);
}

// دالة لتحديث جميع المودالات عند تغيير اللغة
function updateAllModalsOnLanguageChange() {
    // تحديث مودال المشاريع
    if (document.getElementById('project-modal')?.classList.contains('active')) {
        const activeProjectCard = document.querySelector('.project-card.active');
        if (activeProjectCard) {
            setTimeout(() => {
                activeProjectCard.click();
            }, 100);
        }
    }
    
    // تحديث مودال الخدمات
    if (document.getElementById('service-modal')?.classList.contains('active')) {
        const activeServiceBtn = document.querySelector('.service-read-more.active');
        if (activeServiceBtn) {
            setTimeout(() => {
                activeServiceBtn.click();
            }, 100);
        }
    }
}

// في دالة initLanguage أضف هذا السطر في آخر دالة setLanguage:
// updateAllModalsOnLanguageChange();