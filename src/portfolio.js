/* 
  Developer Folio Configuration File
  Customized for Abdullah Alshehri
*/

// 1. Greeting Section (الترحيب والنبذة العامة)
const greeting = {
  username: "iAbdullah",
  title: "Hi all, I'm Abdullah Alshehri",
  subTitle: "A passionate Artificial Intelligence & Machine Learning Engineer based in Jeddah, Saudi Arabia. I specialize in building end-to-end intelligent architectures, fine-tuning LLMs, and engineering robust data pipelines that bridge raw data with executive insights.",
  resumeLink: "https://linkedin.com/in/abdullah-alshehri",
  displayGreeting: true 
};

// 2. Social Media Links
const socialMediaLinks = {
  github: "https://github.com/iAbdullah",
  linkedin: "https://linkedin.com/in/abdullah-alshehri",
  gmail: "abdullahalshahri22@gmail.com",
  display: true 
};

// 3. Skills Section (المهارات التقنية والأدوات)
const skillsSection = {
  title: "What I Do",
  subTitle: "CRAVING TO ENGAGE WITH DATA AND COGNITIVE COMPUTING SYSTEMS",
  skills: [
    "⚡ Engineering end-to-end AI pipelines using PyTorch, TensorFlow, and Keras",
    "⚡ Fine-tuning Large Language Models (LLMs) for domain-specific Generative AI tasks",
    "⚡ Automating financial metrics and building interactive analytics dashboards via Power BI",
    "⚡ Designing low-latency APIs and secure enterprise IT infrastructure architectures"
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PyTorch", fontAwesomeClassname: "logos:pytorch" },
    { skillName: "TensorFlow", fontAwesomeClassname: "logos:tensorflow" },
    { skillName: "FastAPI", fontAwesomeClassname: "logos:fastapi" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// 4. Professional Experience (الخبرات المهنية والمعسكرات)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Artificial Intelligence Professional Trainee",
      company: "SDAIA Academy",
      companylogo: require("./assets/images/sdaia.png"), // يمكنك رفع الشعار لاحقاً لمجلد images
      date: "Dec. 2025 – Mar. 2026",
      desc: "Engineered end-to-end AI pipelines using PyTorch and TensorFlow; implemented transformer-based models for NLP. Executed fine-tuning strategies for LLMs and refined text normalization algorithms for Arabic/English datasets.",
    },
    {
      role: "Financial Data Analyst & AI Specialist Intern",
      company: "Blomal Capital",
      companylogo: require("./assets/images/blomal.png"),
      date: "Dec. 2024 – Mar. 2025",
      desc: "Automated 20+ core financial metrics (BVPS, P/E Ratios) using Python. Deployed GPT-4 integrated agents to process complex financial queries and built dynamic data visualizations in Power BI.",
    }
  ]
};

// 5. Open Source Projects (أبرز مشاريعك الابتكارية)
const openSourceProjects = {
  display: true,
  projects: [
    {
      id: "1",
      name: "Blind Guide (BG): Real-time Assistive AI",
      description: "Designed a computer vision system for visually impaired navigation using Faster R-CNN for low-latency object detection via FastAPI and TensorFlow Lite.",
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { skillName: "FastAPI", fontAwesomeClassname: "logos:fastapi" }
      ]
    },
    {
      id: "2",
      name: "EduLensAR: Mixed Reality Education Platform",
      description: "Developed an AR application that visualizes complex STEM concepts, increasing learning retention metrics by 70% using Unity and ARCore.",
      languages: [
        { name: "C#", iconifyClass: "logos:c-sharp" }
      ]
    }
  ]
};

export { greeting, socialMediaLinks, skillsSection, workExperiences, openSourceProjects };
