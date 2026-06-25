/* 
  Developer Folio Configuration File - Updated for AI & AWS Specialization
  Abdullah Alshehri
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// ... (الإعدادات السابقة كما هي)

// تحديث المهارات لتشمل AWS AI
const skillsSection = {
  title: "What I do",
  subTitle: "CRAVING TO ENGAGE WITH DATA AND COGNITIVE COMPUTING SYSTEMS",
  skills: [
    emoji("⚡ Engineering end-to-end AI pipelines using PyTorch, TensorFlow, and AWS AI services"),
    emoji("⚡ Implementing Generative AI solutions and fine-tuning LLMs on cloud infrastructure"),
    emoji("⚡ Cloud-based AI deployment and orchestration using AWS ecosystem"),
    emoji("⚡ Automating complex data pipelines and building intelligent financial analytics")
  ],

  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "pytorch", fontAwesomeClassname: "logos:pytorch" },
    { skillName: "tensorflow", fontAwesomeClassname: "logos:tensorflow" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true 
};

// تحديث قسم الشهادات لإضافة AWS
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Professional Licenses and International Certifications",
  achievementsCards: [
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "Cloud-based Artificial Intelligence & Machine Learning Specialization",
      image: null,
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Accredited AI Specialist",
      subtitle: "Saudi Council of Engineers (ID: 1089300)",
      image: null,
      imageAlt: "SCE Logo",
      footerLink: []
    },
    {
      title: "HCIA-AI & HCIA-Security V3.0",
      subtitle: "Huawei Certified ICT Associate",
      image: null,
      imageAlt: "Huawei Logo",
      footerLink: []
    }
  ],
  display: true 
};

// ... (بقية الكود يظل كما هو)
