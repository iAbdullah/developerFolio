/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Abdullah Alshehri",
  title: "Hi all, I'm Abdullah",
  subTitle: emoji(
    "Artificial Intelligence & Machine Learning Graduate passionate about Data Engineering and Cloud AI solutions 🚀"
  ),
  resumeLink: "", 
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/iAbdullah",
  linkedin: "https://www.linkedin.com/in/iabdullah/",
  gmail: "abdullah.alshehri@email.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAVING TO ENGAGE WITH DATA AND COGNITIVE COMPUTING SYSTEMS",
  skills: [
    emoji("⚡ Engineering end-to-end AI pipelines using PyTorch, TensorFlow, and AWS AI services"),
    emoji("⚡ Implementing Generative AI solutions and fine-tuning LLMs on cloud infrastructure"),
    emoji("⚡ Automating complex data pipelines and building intelligent financial analytics")
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "pytorch", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "sql", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Jeddah",
      logo: null,
      subHeader: "Bachelor of Science in Artificial Intelligence and Machine Learning",
      duration: "2019 - 2024",
      desc: "Regular full-time attendance program focusing on AI, ML, and Data Engineering.",
      descBullets: ["Graduation Project: Blind Guide (AI assistive application)"]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Artificial Intelligence", progressPercentage: "95%" },
    { Stack: "Data Engineering", progressPercentage: "85%" },
    { Stack: "Cloud Computing", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Graduate & Developer",
      company: "University of Jeddah / Projects",
      companylogo: null,
      date: "2025 - Present",
      desc: "Developing FinBrain-OS and AI-powered assistive tools like Blind Guide.",
      descBullets: ["Built AI pipelines", "TensorFlow & FastAPI implementations"]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "AI AND DATA SYSTEMS",
  projects: [
    {
      image: null,
      projectName: "Blind Guide",
      projectDesc: "AI-powered assistive application using computer vision.",
      footerLink: []
    },
    {
      image: null,
      projectName: "FinBrain-OS",
      projectDesc: "Financial management system built with FastAPI and Pydantic.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Professional Licenses and International Certifications",
  achievementsCards: [
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "Cloud-based Artificial Intelligence Specialization",
      image: null,
      imageAlt: "AWS Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Technical insights and AI developments.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Sharing knowledge in AI and Data Science"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "My Inbox is always open.",
  number: "",
  email_address: "abdullah.alshehri@email.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
