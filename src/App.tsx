import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { 
  Github, Linkedin, Mail, ChevronRight, ExternalLink, 
  Code2, Brain, Bot, Smartphone, Award, 
  Briefcase, ArrowUp, Menu, X, Terminal, Network,
  Layers, Download, Sun, Moon, Globe
} from 'lucide-react';

// --- CUSTOM ICONS ---
const KaggleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4l-8 7.5v-7.5H4v16h2.5v-7.5l2.5-2.5 5 10h3l-6.5-11 6.5-5z" fill="currentColor" stroke="none" />
  </svg>
);

const HuggingFaceIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <circle cx="12" cy="12" r="10" />
     <path d="M8 14s1.5 2 4 2 4-2 4-2" />
     <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
     <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// --- CONTEXT FOR THEME & LANGUAGE ---
const AppContext = createContext();

// --- DICTIONARY (TRANSLATIONS & DATA) ---
const DICTIONARY = {
  en: {
    dir: 'ltr',
    personal: {
      name: "Zeyad Mohamed Elfaramawy",
      titles: ["AI Engineer", "Machine Learning Engineer", "Mobile App Developer", "AI Automation Developer"],
      bio: "AI Engineer in progress with a strong focus on Generative AI, AI Agents, Computer Vision and Workflow Automation. Built and deployed intelligent systems ranging from plant disease detection platforms and RAG-based chatbots to AI-powered automation workflows and mobile applications. Passionate about solving complex problems through modern AI technologies and creating products that deliver real value to users.",
      email: "zeyadelfaramawy@gmail.com",
      github: "https://github.com/Zeyad-GenAI",
      linkedin: "https://www.linkedin.com/in/zeyad-el-faramawy-900547342",
      kaggle: "https://www.kaggle.com/zeyadelfaramawy",
      huggingface: "https://huggingface.co/Zeyad13",
      whatsapp: "https://wa.me/201013995894"
    },
    nav: {
      about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact", hire: "Hire Me"
    },
    hero: {
      available: "Available for New Opportunities",
      hi: "Hi, I'm",
      iAm: "And I work as",
      viewWork: "View My Work",
      downloadCv: "Download Resume",
    },
    about: {
      title: "About Me",
      subtitle: "Bridging the gap between intelligent algorithms and user-centric applications.",
      cardTitle: "AI & Automation Solutions Engineer",
      p1: "I don't just build models; I build intelligent systems. My journey in AI is driven by a profound desire to automate the mundane and elevate human potential. With a strong foundation in Machine Learning and a flair for mobile development via Flutter, I bring AI out of the research phase and into the real world.",
      p2: "Whether it's designing highly efficient RAG systems, engineering autonomous AI Agents using n8n, or creating seamless user interfaces, my goal is to deliver production-ready, scalable solutions.",
      stats: {
        projects: "Completed Projects",
        exp: "Years Experience",
        models: "AI Models",
        certs: "Certifications"
      }
    },
    skills: {
      title: "Technical Expertise",
      subtitle: "My technical arsenal for building the future of intelligent software.",
      groups: [
        {
          category: "AI & Machine Learning",
          icon: <Brain className="w-6 h-6 text-blue-500" />,
          items: ["Machine Learning", "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow", "OpenCV", "Prompt Engineering"]
        },
        {
          category: "AI Agents & Automation",
          icon: <Network className="w-6 h-6 text-cyan-500" />,
          items: ["n8n", "Selenium", "GitHub Actions", "Gemini", "ChatGPT", "Claude", "LLMs", "RAG"]
        },
        {
          category: "Programming & Development",
          icon: <Code2 className="w-6 h-6 text-violet-500" />,
          items: ["Python", "Dart", "Flutter", "Android Studio", "API Integration", "Scraping"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing production-ready AI applications and automation workflows.",
      featuresLabel: "Key Features",
      items: [
        {
          title: "AgroSense",
          description: "AI-powered plant disease detection and agricultural assistant platform that combines Computer Vision, Deep Learning and RAG technologies to provide multilingual agricultural guidance through web and mobile applications.",
          features: ["Plant Disease Detection", "Computer Vision", "RAG", "Flutter App"],
          tags: ["PyTorch", "Flutter", "Deep Learning"],
          github: "https://github.com/Zeyad-GenAI/AgroSense",
          demo: "https://drive.google.com/file/d/1TJMDe_5f2jpaETt_NtAa3QmqWfu3J7xV/view?usp=sharing"
        },
        {
          title: "DULMS Automata",
          description: "Built an intelligent university LMS monitoring bot using Selenium, GitHub Actions and Telegram APIs for automated notifications and activity tracking.",
          features: ["Automated Notifications", "Activity Tracking", "Web Scraping"],
          tags: ["Selenium", "GitHub Actions", "Python", "Telegram API"],
          github: "https://github.com/Zeyad-GenAI/DULMS-Automata",
          demo: "https://drive.google.com/file/d/1HRsFVvvVYpJw49qCHxhMTMexsDtWBxdG/view?usp=sharing"
        },
        {
          title: "AI Presentation Generation",
          description: "Developed an AI-powered presentation generation system that automates professional PowerPoint creation using Prompt Engineering, LLMs and RAG pipelines.",
          features: ["PowerPoint Automation", "Prompt Engineering", "LLM Integration"],
          tags: ["Python", "LLMs", "RAG"],
          github: "https://github.com/Zeyad-GenAI/AI_Presentation_Generation",
          demo: "#"
        },
        {
          title: "AI Feedback Sentiment Workflow",
          description: "Designed an intelligent workflow automation system using n8n and GPT models for customer feedback processing, sentiment analysis and automated reporting.",
          features: ["Sentiment Analysis", "Automated Reporting", "Workflow Automation"],
          tags: ["n8n", "GPT Models", "Automation"],
          github: "https://github.com/Zeyad-GenAI/AI-Feedback-Sentiment-Workflow",
          demo: "#"
        }
      ]
    },
    experience: {
      title: "Experience & Training",
      subtitle: "My professional journey and training in the tech industry.",
      items: [
        {
          role: "Freelance AI and Mobile Developer",
          company: "Self Employed, Remote",
          period: "January 2024 - Present",
          description: "Developing intelligent AI applications and mobile interfaces using Flutter and Dart. Building custom RAG pipelines and computer vision models for automated systems while delivering premium UI UX designs."
        },
        {
          role: "AI & Machine Learning Intern",
          company: "Information Technology Institute (ITI), Menofia",
          period: "August 2025 - September 2025",
          description: "Completed a 72-hour training program covering AI, ML, Python, Data Preparation, Statistics, Linear Algebra, Numerical Optimization and Deep Learning."
        },
        {
          role: "Artificial Intelligence Trainee",
          company: "Ambassadors of Artificial Intelligence Program, Egypt",
          period: "August 2025 - October 2025",
          description: "Participated in AI training programs covering Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI and modern AI technologies."
        },
        {
          role: "Mobile App Development Intern",
          company: "Digital Egypt Pioneers Program (DEPI)",
          period: "November 2024 - May 2025",
          description: "Gained hands-on experience in software development and integrating AI capabilities. Worked with Flutter and Dart to build scalable applications."
        },
        {
          role: "Bachelor of Artificial Intelligence (GPA: 3.2)",
          company: "Delta University for Science and Technology",
          period: "September 2023 - June 2027",
          description: "Awarded for outstanding efforts in developing the DULMS Master Bot an intelligent automation system for university tasks during the 2025-2026 academic year."
        }
      ]
    },
    certifications: {
      title: "Certifications",
      subtitle: "Recognitions and specialized training in cutting-edge AI technologies.",
      items: [
        { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", date: "September 2025", link: "https://www.credly.com/badges/ac045bec-2497-4966-8654-26600f1c311e", icon: <Award className="w-8 h-8 text-blue-500" /> },
        { title: "Building LLM Applications With Prompt Engineering", issuer: "NVIDIA", date: "September 2025", link: "https://learn.nvidia.com/certificates?id=ceghN1LpS4qzXsFCxwbfwQ", icon: <Award className="w-8 h-8 text-cyan-500" /> },
        { title: "Digital Egypt Pioneers Program (DEPI) - Mobile App Developer", issuer: "MCIT", date: "May 2025", link: "https://drive.google.com/file/d/1OiW-JOQuNCWi_hWK9R7RsZGeKUBYKbRY/view?usp=sharing", icon: <Smartphone className="w-8 h-8 text-violet-500" /> },
        { title: "Artificial Intelligence & Machine Learning", issuer: "Information Technology Institute (ITI)", date: "August 2025", link: "https://drive.google.com/file/d/1ACtXkJ3mNVHNXaGp4cY-I0IrS84ZU4IR/view?usp=sharing", icon: <Award className="w-8 h-8 text-blue-400" /> }
      ]
    },
    contact: {
      title: "Let's Build the Future Together",
      subtitle: "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      sayHello: "Say Hello",
      rights: "All rights reserved.",
      designed: "Designed with"
    },
    loading: "INITIALIZING AI SYSTEMS..."
  },

  ar: {
    dir: 'rtl',
    personal: {
      name: "زياد محمد الفرماوي",
      titles: ["مهندس ذكاء اصطناعي", "مهندس تعلم آلي", "مطور تطبيقات الموبايل", "مطور أتمتة AI"],
      bio: "مهندس ذكاء اصطناعي متخصص في الذكاء الاصطناعي التوليدي، وكلاء الذكاء الاصطناعي، الرؤية الحاسوبية، وأتمتة سير العمل. قمت ببناء ونشر أنظمة ذكية تتراوح من منصات اكتشاف أمراض النباتات وروبوتات المحادثة المعتمدة على RAG إلى أنظمة الأتمتة وتطبيقات الهاتف. شغوف بحل المشكلات المعقدة لتقديم قيمة حقيقية للمستخدمين.",
      email: "zeyadelfaramawy@gmail.com",
      github: "https://github.com/Zeyad-GenAI",
      linkedin: "https://www.linkedin.com/in/zeyad-el-faramawy-900547342",
      kaggle: "https://www.kaggle.com/zeyadelfaramawy",
      huggingface: "https://huggingface.co/Zeyad13",
      whatsapp: "https://wa.me/201013995894"
    },
    nav: {
      about: "عني", skills: "المهارات", projects: "المشاريع", experience: "الخبرة", contact: "تواصل معي", hire: "وظفني"
    },
    hero: {
      available: "متاح لفرص عمل جديدة",
      hi: "مرحباً، أنا",
      iAm: "وأعمل كـ",
      viewWork: "شاهد أعمالي",
      downloadCv: "تحميل السيرة الذاتية",
    },
    about: {
      title: "عني",
      subtitle: "سد الفجوة بين الخوارزميات الذكية والتطبيقات التي تركز على المستخدم.",
      cardTitle: "مهندس حلول الأتمتة والذكاء الاصطناعي",
      p1: "أنا لا أقوم فقط ببناء النماذج؛ بل أقوم ببناء أنظمة ذكية متكاملة. رحلتي في مجال الذكاء الاصطناعي مدفوعة برغبة عميقة في أتمتة المهام الروتينية والارتقاء بالإمكانات البشرية. بفضل أساس قوي في التعلم الآلي ومهارة في تطوير تطبيقات الموبايل باستخدام Flutter، أنقل الذكاء الاصطناعي من مرحلة الأبحاث إلى أرض الواقع.",
      p2: "سواء كان الأمر يتعلق بتصميم أنظمة RAG عالية الكفاءة، أو هندسة وكلاء ذكاء اصطناعي (AI Agents) مستقلين باستخدام n8n، أو إنشاء واجهات مستخدم سلسة، فإن هدفي هو تقديم حلول قابلة للتطوير وجاهزة للإنتاج.",
      stats: {
        projects: "مشاريع مكتملة",
        exp: "سنوات من الخبرة",
        models: "نماذج ذكاء اصطناعي",
        certs: "شهادات معتمدة"
      }
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "ترسانتي التقنية لبناء مستقبل البرمجيات الذكية.",
      groups: [
        {
          category: "الذكاء الاصطناعي والتعلم الآلي",
          icon: <Brain className="w-6 h-6 text-blue-500" />,
          items: ["Machine Learning", "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow", "OpenCV", "Prompt Engineering"]
        },
        {
          category: "أدوات الذكاء الاصطناعي والأتمتة",
          icon: <Network className="w-6 h-6 text-cyan-500" />,
          items: ["n8n", "Selenium", "GitHub Actions", "Gemini", "ChatGPT", "Claude", "LLMs", "RAG"]
        },
        {
          category: "البرمجة والتطوير",
          icon: <Code2 className="w-6 h-6 text-violet-500" />,
          items: ["Python", "Dart", "Flutter", "Android Studio", "API Integration", "Scraping"]
        }
      ]
    },
    projects: {
      title: "المشاريع المميزة",
      subtitle: "عرض لتطبيقات الذكاء الاصطناعي وأنظمة الأتمتة التي قمت بتطويرها.",
      featuresLabel: "أهم الميزات",
      items: [
        {
          title: "AgroSense",
          description: "منصة لاكتشاف أمراض النباتات والمساعدة الزراعية تعمل بالذكاء الاصطناعي، تجمع بين الرؤية الحاسوبية والتعلم العميق وتقنيات RAG لتقديم إرشادات زراعية متعددة اللغات عبر تطبيقات الويب والموبايل.",
          features: ["Plant Disease Detection", "Computer Vision", "RAG", "Flutter App"],
          tags: ["PyTorch", "Flutter", "Deep Learning"],
          github: "https://github.com/Zeyad-GenAI/AgroSense",
          demo: "https://drive.google.com/file/d/1TJMDe_5f2jpaETt_NtAa3QmqWfu3J7xV/view?usp=sharing"
        },
        {
          title: "DULMS Automata",
          description: "روبوت ذكي لمراقبة نظام إدارة التعلم الجامعي (LMS) باستخدام Selenium و GitHub Actions وواجهات برمجة تطبيقات Telegram للإشعارات التلقائية وتتبع الأنشطة.",
          features: ["Automated Notifications", "Activity Tracking", "Web Scraping"],
          tags: ["Selenium", "GitHub Actions", "Python", "Telegram API"],
          github: "https://github.com/Zeyad-GenAI/DULMS-Automata",
          demo: "https://drive.google.com/file/d/1HRsFVvvVYpJw49qCHxhMTMexsDtWBxdG/view?usp=sharing"
        },
        {
          title: "AI Presentation Generation",
          description: "نظام توليد عروض تقديمية يعمل بالذكاء الاصطناعي يقوم بأتمتة إنشاء عروض PowerPoint احترافية باستخدام هندسة الأوامر (Prompt Engineering) ونماذج LLMs ومسارات RAG.",
          features: ["PowerPoint Automation", "Prompt Engineering", "LLM Integration"],
          tags: ["Python", "LLMs", "RAG"],
          github: "https://github.com/Zeyad-GenAI/AI_Presentation_Generation",
          demo: "#"
        },
        {
          title: "AI Feedback Sentiment Workflow",
          description: "نظام أتمتة سير عمل ذكي باستخدام نماذج n8n و GPT لمعالجة ملاحظات العملاء وتحليل المشاعر وإعداد التقارير الآلية.",
          features: ["Sentiment Analysis", "Automated Reporting", "Workflow Automation"],
          tags: ["n8n", "GPT Models", "Automation"],
          github: "https://github.com/Zeyad-GenAI/AI-Feedback-Sentiment-Workflow",
          demo: "#"
        }
      ]
    },
    experience: {
      title: "الخبرة والتدريب",
      subtitle: "مسيرتي المهنية والتدريبية في مجال التكنولوجيا.",
      items: [
        {
          role: "مطور ذكاء اصطناعي وتطبيقات موبايل (عمل حر)",
          company: "عن بعد",
          period: "يناير 2024 - الحاضر",
          description: "تطوير تطبيقات ذكاء اصطناعي وواجهات موبايل ذكية باستخدام Flutter و Dart. بناء مسارات RAG مخصصة ونماذج رؤية حاسوبية للأنظمة الآلية مع تقديم تصميمات UI/UX متميزة."
        },
        {
          role: "متدرب ذكاء اصطناعي وتعلم آلي",
          company: "معهد تكنولوجيا المعلومات (ITI), منوفية",
          period: "أغسطس 2025 - سبتمبر 2025",
          description: "برنامج تدريبي مكثف (72 ساعة) يغطي الذكاء الاصطناعي، التعلم الآلي، بايثون، تجهيز البيانات، الإحصاء، والجبر الخطي."
        },
        {
          role: "متدرب ذكاء اصطناعي",
          company: "برنامج سفراء الذكاء الاصطناعي، مصر",
          period: "أغسطس 2025 - أكتوبر 2025",
          description: "المشاركة في برامج تدريبية تغطي التعلم الآلي، التعلم العميق، الرؤية الحاسوبية، ومعالجة اللغات الطبيعية (NLP)."
        },
        {
          role: "متدرب تطوير تطبيقات الموبايل",
          company: "رواد مصر الرقمية (DEPI)",
          period: "نوفمبر 2024 - مايو 2025",
          description: "اكتساب خبرة عملية في تطوير البرمجيات ودمج قدرات الذكاء الاصطناعي وبناء تطبيقات قابلة للتطوير باستخدام Flutter و Dart."
        },
        {
          role: "بكالوريوس الذكاء الاصطناعي (معدل 3.2)",
          company: "جامعة الدلتا للعلوم والتكنولوجيا",
          period: "سبتمبر 2023 - يونيو 2027",
          description: "تم التكريم للجهود المتميزة في تطوير روبوت DULMS Master Bot للأتمتة الجامعية (شهادة تقدير، مايو 2026)."
        }
      ]
    },
    certifications: {
      title: "الشهادات",
      subtitle: "الاعتمادات والتدريب المتخصص في أحدث تقنيات الذكاء الاصطناعي.",
      items: [
        { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", date: "September 2025", link: "https://www.credly.com/badges/ac045bec-2497-4966-8654-26600f1c311e", icon: <Award className="w-8 h-8 text-blue-500" /> },
        { title: "Building LLM Applications With Prompt Engineering", issuer: "NVIDIA", date: "September 2025", link: "https://learn.nvidia.com/certificates?id=ceghN1LpS4qzXsFCxwbfwQ", icon: <Award className="w-8 h-8 text-cyan-500" /> },
        { title: "Digital Egypt Pioneers Program (DEPI) - Mobile App Developer", issuer: "MCIT", date: "May 2025", link: "https://drive.google.com/file/d/1OiW-JOQuNCWi_hWK9R7RsZGeKUBYKbRY/view?usp=sharing", icon: <Smartphone className="w-8 h-8 text-violet-500" /> },
        { title: "Artificial Intelligence & Machine Learning", issuer: "Information Technology Institute (ITI)", date: "August 2025", link: "https://drive.google.com/file/d/1ACtXkJ3mNVHNXaGp4cY-I0IrS84ZU4IR/view?usp=sharing", icon: <Award className="w-8 h-8 text-blue-400" /> }
      ]
    },
    contact: {
      title: "دعنا نبني المستقبل معاً",
      subtitle: "متاح حالياً لفرص عمل جديدة. سواء كان لديك استفسار أو ترغب فقط في إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
      sayHello: "إرسال رسالة",
      rights: "جميع الحقوق محفوظة.",
      designed: "تم التصميم باستخدام"
    },
    loading: "جاري تهيئة أنظمة الذكاء الاصطناعي..."
  }
};

// --- HOOKS & UTILS ---

const useScrollReveal = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

// --- COMPONENTS ---

const SectionHeading = ({ children, subtitle }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`mb-16 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 dark:from-blue-500 via-cyan-500 dark:via-cyan-400 to-violet-600 dark:to-violet-500">
        {children}
      </h2>
      {subtitle && <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CustomCursor = () => {
  const { theme } = useContext(AppContext);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const updateHoverState = (e) => {
      const target = e.target;
      setIsHovering(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('button') || target.closest('a'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const cursorColor = theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600';
  const ringColor = theme === 'dark' ? 'border-cyan-400' : 'border-cyan-600';

  return (
    <>
      <div 
        className={`fixed top-0 start-0 w-4 h-4 ${cursorColor} rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100 ease-out`}
        style={{ transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isHovering ? 2 : 1})` }}
      />
      <div 
        className={`fixed top-0 start-0 w-10 h-10 border ${ringColor} rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out opacity-50`}
        style={{ transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 1})` }}
      />
    </>
  );
};

const ParticleBackground = () => {
  const { theme } = useContext(AppContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(window.innerWidth / 15, 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = theme === 'dark' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(37, 99, 235, 0.6)'; 
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            const colorRgb = theme === 'dark' ? '6, 182, 212' : '8, 145, 178';
            ctx.strokeStyle = `rgba(${colorRgb}, ${0.2 - dist/150})`; 
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        if (mouse.x != null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 200) {
            ctx.beginPath();
            const colorRgb = theme === 'dark' ? '139, 92, 246' : '109, 40, 217';
            ctx.strokeStyle = `rgba(${colorRgb}, ${0.3 - dist/200})`; 
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />;
};

const NavBar = () => {
  const { t, lang, setLang, theme, setTheme } = useContext(AppContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
          <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white to-slate-500 dark:to-gray-400">ZM<span className="text-blue-500">.</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-2 end-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white/5 hover:bg-slate-800 dark:hover:bg-white/10 border border-transparent dark:border-white/10 text-white text-sm font-medium transition-all backdrop-blur-sm dark:hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            {t.nav.hire}
          </a>
        </div>

        {/* Controls (Theme & Lang) + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} 
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center gap-1 font-bold text-sm text-slate-700 dark:text-gray-300"
            title="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
          </button>

          <button className="md:hidden text-slate-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full start-0 w-full bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const { t, lang } = useContext(AppContext);
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing Effect
  useEffect(() => {
    const currentTitle = t.personal.titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % t.personal.titles.length);
      } else {
        setText(currentTitle.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex, t.personal.titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t.hero.available}
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
            {t.hero.hi} <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-500 via-cyan-500 dark:via-cyan-400 to-violet-600 dark:to-violet-500">
              {t.personal.name}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-gray-300">
              <span className="ms-2">{t.hero.iAm}</span>
              <span className="text-slate-900 dark:text-white border-s-2 border-cyan-500 dark:border-cyan-400 ps-1 ms-2 animate-pulse" dir="ltr">{text}</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.personal.bio}
          </p>
        </FadeIn>

        <FadeIn delay={500} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1">
            {t.hero.viewWork} <ChevronRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </a>
          <a href="https://drive.google.com/file/d/1HKaP5Bxlxu7SiyFNGybPNpobz-_O4j8r/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-300 dark:hover:bg-white/10 transition-all backdrop-blur-sm">
            <Download className="w-5 h-5" /> {t.hero.downloadCv}
          </a>
        </FadeIn>

        <FadeIn delay={700} className="mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <SocialLink href={t.personal.github} icon={<Github />} />
          <SocialLink href={t.personal.linkedin} icon={<Linkedin />} />
          <SocialLink href={t.personal.kaggle} icon={<KaggleIcon />} />
          <SocialLink href={t.personal.huggingface} icon={<HuggingFaceIcon />} />
          <SocialLink href={t.personal.whatsapp} icon={<WhatsAppIcon />} />
          <SocialLink href={`mailto:${t.personal.email}`} icon={<Mail />} />
        </FadeIn>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 backdrop-blur-sm"
  >
    {React.cloneElement(icon, { className: 'w-6 h-6' })}
  </a>
);

const AboutSection = () => {
  const { t } = useContext(AppContext);
  return (
    <section id="about" className="py-24 relative z-10 bg-white/50 dark:bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle={t.about.subtitle}>
          {t.about.title}
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-15 dark:opacity-25 group-hover:opacity-30 dark:group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white/90 dark:bg-[#111827]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl h-full flex flex-col justify-center">
                <Terminal className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.about.cardTitle}</h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                  {t.about.p1}
                </p>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  {t.about.p2}
                </p>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 gap-6">
            <FadeIn delay={200} className="bg-white/80 dark:bg-[#111827]/60 backdrop-blur-lg border border-slate-200 dark:border-white/5 p-6 rounded-2xl text-center hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none">
              <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2">+10</h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">{t.about.stats.projects}</p>
            </FadeIn>
            <FadeIn delay={300} className="bg-white/80 dark:bg-[#111827]/60 backdrop-blur-lg border border-slate-200 dark:border-white/5 p-6 rounded-2xl text-center hover:border-cyan-500/50 transition-colors shadow-sm dark:shadow-none">
              <h4 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">+2</h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">{t.about.stats.exp}</p>
            </FadeIn>
            <FadeIn delay={400} className="bg-white/80 dark:bg-[#111827]/60 backdrop-blur-lg border border-slate-200 dark:border-white/5 p-6 rounded-2xl text-center hover:border-violet-500/50 transition-colors shadow-sm dark:shadow-none">
              <h4 className="text-4xl font-bold text-violet-600 dark:text-violet-500 mb-2">+5</h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">{t.about.stats.models}</p>
            </FadeIn>
            <FadeIn delay={500} className="bg-white/80 dark:bg-[#111827]/60 backdrop-blur-lg border border-slate-200 dark:border-white/5 p-6 rounded-2xl text-center hover:border-blue-400/50 transition-colors flex flex-col items-center justify-center shadow-sm dark:shadow-none">
               <Award className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-2" />
              <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">{t.about.stats.certs}</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const { t } = useContext(AppContext);
  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-100/50 dark:bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle={t.skills.subtitle}>
          {t.skills.title}
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {t.skills.groups.map((skillGroup, idx) => (
            <FadeIn key={idx} delay={idx * 200} className="group">
              <div className="h-full p-8 rounded-3xl bg-white/60 dark:bg-[#111827]/50 backdrop-blur-sm border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 end-0 -mt-4 -me-4 w-24 h-24 bg-gradient-to-br from-slate-200 dark:from-white/5 to-transparent rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-lg text-slate-700 dark:text-gray-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/30 transition-all cursor-default" dir="ltr"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const { t } = useContext(AppContext);
  return (
    <section id="projects" className="py-24 relative z-10 bg-white/50 dark:bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle={t.projects.subtitle}>
          {t.projects.title}
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.projects.items.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 150} className={idx === 0 ? "lg:col-span-2" : ""}>
              <div className="group h-full flex flex-col bg-white/80 dark:bg-[#111827]/60 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500">
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" dir="ltr">{project.title}</h3>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-gray-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500"/> {t.projects.featuresLabel}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2" dir="ltr">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 me-2"></span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200 dark:border-white/5" dir="ltr">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const { t } = useContext(AppContext);
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-100/50 dark:bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle={t.experience.subtitle}>
          {t.experience.title}
        </SectionHeading>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-s border-slate-300 dark:border-white/10 ms-4 md:ms-0 md:border-none">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute start-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-white/10 transform -translate-x-1/2"></div>
            
            {t.experience.items.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 200} className="mb-12 relative w-full md:flex justify-between items-center group">
                
                {/* Timeline Dot */}
                <div className="absolute start-[-21px] md:start-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#111827] border-2 border-cyan-500 flex items-center justify-center z-10 group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300 shadow-sm dark:shadow-none">
                  <Briefcase className="w-4 h-4 text-cyan-500 group-hover:text-white" />
                </div>

                {/* Content Box */}
                <div className={`ms-8 md:ms-0 md:w-5/12 ${idx % 2 === 0 ? 'md:text-end md:pe-12' : 'md:text-start md:ps-12 md:ms-auto'}`}>
                  <div className="p-6 bg-white/90 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-2xl hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
                    <span className="text-cyan-600 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-slate-600 dark:text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  const { t } = useContext(AppContext);
  return (
    <section className="py-24 relative z-10 bg-white/50 dark:bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle={t.certifications.subtitle}>
          {t.certifications.title}
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.certifications.items.map((cert, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-start gap-4 p-6 bg-gradient-to-br from-slate-50 dark:from-[#111827] to-slate-100 dark:to-black border border-slate-200 dark:border-white/10 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-sm dark:shadow-none h-full cursor-pointer">
                <div className="p-3 bg-white dark:bg-white/5 rounded-xl group-hover:bg-violet-100 dark:group-hover:bg-violet-500/10 transition-colors border border-slate-100 dark:border-transparent">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" dir="ltr">{cert.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-1" dir="ltr">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 dark:text-gray-500 font-mono" dir="ltr">{cert.date}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { t } = useContext(AppContext);
  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-100/50 dark:bg-black/40 border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/90 dark:from-[#111827]/90 to-slate-50/90 dark:to-[#0A0A0A]/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-xl dark:shadow-none">
          
          {/* Glow Effects */}
          <div className="absolute top-0 end-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 start-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{t.contact.title}</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
            
            <a href={`mailto:${t.personal.email}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-lg hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors mb-12 transform hover:scale-105 duration-200 shadow-md dark:shadow-none">
              <Mail className="w-6 h-6" /> {t.contact.sayHello}
            </a>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 border-t border-slate-200 dark:border-white/10 pt-10">
              <a href={t.personal.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors group">
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors border border-transparent dark:group-hover:border-white/20">
                  <Github className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href={t.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-500/10 transition-colors border border-transparent dark:group-hover:border-blue-500/30">
                  <Linkedin className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href={t.personal.kaggle} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group">
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/10 transition-colors border border-transparent dark:group-hover:border-cyan-500/30">
                  <KaggleIcon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Kaggle</span>
              </a>
              <a href={t.personal.huggingface} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group">
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-500/10 transition-colors border border-transparent dark:group-hover:border-amber-500/30">
                  <HuggingFaceIcon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Hugging Face</span>
              </a>
              <a href={t.personal.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors group">
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-full group-hover:bg-green-100 dark:group-hover:bg-green-500/10 transition-colors border border-transparent dark:group-hover:border-green-500/30">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useContext(AppContext);
  return (
    <footer className="py-8 text-center text-slate-500 dark:text-gray-500 text-sm border-t border-slate-200 dark:border-white/5 relative z-10 bg-slate-50 dark:bg-[#0A0A0A]">
      <p>© {new Date().getFullYear()} {t.personal.name}. {t.contact.rights}</p>
      <p className="mt-2 text-xs flex items-center justify-center gap-1">
        {t.contact.designed} <span className="text-blue-600 dark:text-blue-500 font-bold">Zeyad</span>
      </p>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 end-8 p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Theme and Language State
  const [lang, setLang] = useState('en'); // Default to English
  const [theme, setTheme] = useState('dark'); // Default to Dark Theme

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => setLoading(false), 1500);
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const t = DICTIONARY[lang];

  if (loading) {
    return (
      <div className={`fixed inset-0 flex flex-col items-center justify-center z-[9999] ${theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-slate-50'}`} dir={t.dir}>
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-4 border-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-4 border-b-4 border-violet-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          <Bot className={`absolute inset-0 m-auto w-8 h-8 animate-pulse ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 dark:from-blue-500 to-cyan-500 dark:to-cyan-400 tracking-widest animate-pulse">
          {t.loading}
        </h2>
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {/* Wrapper to control Theme via class 'dark' and Language via dir="rtl/ltr" */}
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div 
          className="bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-300"
          dir={t.dir}
        >
          <CustomCursor />
          <ParticleBackground />
          
          {/* Scroll Progress Bar */}
          <div 
            className="fixed top-0 start-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 z-[100] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />

          <NavBar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </AppContext.Provider>
  );
}