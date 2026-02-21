import Scene from '../components/Scene';
import FadeIn from '../components/FadeIn';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

const socialProfiles = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: <FaGithub size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin size={20} /> },
  { name: 'Kaggle', url: 'https://kaggle.com/yourusername', icon: <SiKaggle size={20} /> },
];

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
  }
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
        
        {/* --- HERO SECTION --- */}
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
        </section>

        {/* --- ABOUT ME --- */}
        <section className="min-h-screen flex items-center justify-center px-8 md:px-32">
          <FadeIn>
            <div className="max-w-2xl text-center bg-zinc-900/60 p-10 rounded-3xl backdrop-blur-md border border-zinc-800 shadow-2xl">
              <h2 className="text-4xl font-bold mb-6 text-white">Hi, I'm Odin.</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                I am a full-stack developer with a strong focus on Python and integrating ML models into web applications. Beyond coding, I am the Founder and President of the Hindi Association at KL University, and I enjoy creating digital art and banners in my free time.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* --- FEATURED PROJECTS --- */}
        <section className="min-h-screen flex items-center justify-start px-8 md:px-32">
          <FadeIn>
            <div className="max-w-xl bg-zinc-900/60 p-10 rounded-3xl backdrop-blur-md border border-zinc-800 shadow-2xl">
              <h2 className="text-4xl font-bold mb-4 text-indigo-400">Skill IOU</h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                A full-stack skill-sharing application featuring a robust backend and seamless user experience. Designed to connect learners and mentors.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-semibold transition-colors pointer-events-auto">
                View Project
              </a>
            </div>
          </FadeIn>
        </section>

        <section className="min-h-screen flex items-center justify-end px-8 md:px-32 text-right">
          <FadeIn>
            <div className="max-w-xl bg-zinc-900/60 p-10 rounded-3xl backdrop-blur-md border border-zinc-800 shadow-2xl">
              <h2 className="text-4xl font-bold mb-4 text-emerald-400">AQI Predictor</h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                An Air Quality Index prediction model utilizing LSTM networks, built with Python and trained on historical city datasets for accurate forecasting.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full font-semibold transition-colors pointer-events-auto">
                View Code
              </a>
            </div>
          </FadeIn>
        </section>

        <section className="min-h-screen flex items-center justify-start px-8 md:px-32">
          <FadeIn>
            <div className="max-w-xl bg-zinc-900/60 p-10 rounded-3xl backdrop-blur-md border border-zinc-800 shadow-2xl">
              <h2 className="text-4xl font-bold mb-4 text-blue-400">Sifaar AI</h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                A custom artificial intelligence project built from the ground up, featuring modular file structures and custom debugging tools.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-colors pointer-events-auto">
                View Repository
              </a>
            </div>
          </FadeIn>
        </section>

        {/* --- PROJECT ARCHIVE --- */}
        <section className="min-h-screen py-32 px-8 md:px-32 bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-800">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Project Archive</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <FadeIn delay={index * 0.1} key={index}>
                <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-colors group flex flex-col h-full pointer-events-auto">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-zinc-700 rounded-md text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-indigo-400 flex items-center gap-1">
                    View Project <span className="text-lg">↗</span>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* --- FOOTER / CONTACT --- */}
        <section className="py-32 flex flex-col items-center justify-center bg-zinc-900">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Let's Build Something.</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="mailto:your.email@example.com" className="inline-block px-8 py-4 bg-white text-zinc-900 hover:bg-zinc-200 rounded-full font-bold transition-colors pointer-events-auto mb-12">
              Get In Touch
            </a>
          </FadeIn>
          <div className="flex gap-6 pointer-events-auto">
            {socialProfiles.map((profile, index) => (
              <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                {profile.name}
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}