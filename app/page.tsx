import Scene from '../components/Scene';
import FadeIn from '../components/FadeIn';
// 1. Icons import kar rahe hain
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

// 2. Profiles array mein icons add kar diye
const socialProfiles = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: <FaGithub size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin size={20} /> },
  { name: 'Kaggle', url: 'https://kaggle.com/yourusername', icon: <SiKaggle size={20} /> },
];

// ... (Baaki ka otherProjects array aur component same rahega) ...
// 2. Tumhare Baaki Saare Projects Ka Data
const otherProjects = [
  {
    title: "Project Alpha",
    description: "A Python script for automating daily tasks.",
    tech: ["Python", "Selenium"],
    link: "#"
  },
  {
    title: "Web Scraper",
    description: "Scrapes e-commerce sites for price drops.",
    tech: ["Python", "BeautifulSoup"],
    link: "#"
  },
  {
    title: "Portfolio v1",
    description: "My first basic HTML/CSS portfolio.",
    tech: ["HTML", "CSS"],
    link: "#"
  },
  // Tum yahan apne saare chote-bade projects paste kar sakte ho
];

export default function Home() {
  return (
    <main className="relative bg-zinc-900 text-white font-sans overflow-x-hidden">
      
      {/* FIXED 3D Background Layer */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* SCROLLABLE HTML Content Layer */}
      <div className="relative z-10 w-full">
        
        {/* --- HERO SECTION (With Profiles) --- */}
        <section className="h-screen flex flex-col items-center justify-center pointer-events-none text-center">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              Mohiuddin Ahmad
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
              Python | Web Development | Machine Learning
            </p>
          </FadeIn>
          
         {/* Saari Profiles ke Buttons with Icons */}
          <FadeIn delay={0.4}>
            <div className="flex gap-4 pointer-events-auto">
              {socialProfiles.map((profile, index) => (
                <a 
                  key={index}
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 border border-zinc-700 hover:bg-zinc-800 rounded-full transition-colors text-sm font-semibold"
                  aria-label={profile.name}
                >
                  {profile.icon}
                  {profile.name}
                </a>
              ))}
            </div>
          </FadeIn>

        {/* --- ABOUT ME --- */}
        <section className="min-h-screen flex items-center justify-center px-8 md:px-32">
          {/* ... (Keep your existing About Me code here) ... */}
        </section>

        {/* --- FEATURED PROJECTS (3D Scroll ones) --- */}
        {/* ... (Keep your existing Skill IOU, AQI, Sifaar AI sections