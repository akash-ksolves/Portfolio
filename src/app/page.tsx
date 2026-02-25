import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Projects from '@/components/Projects';
import SkillsMatrix from '@/components/SkillsMatrix';
import SystemArchitecture from '@/components/SystemArchitecture';
import Education from '@/components/Education';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceTimeline />
      <Projects />
      <SkillsMatrix />
      <SystemArchitecture />
      <Education />
      <ContactForm />

      <footer className="py-12 border-t border-white/5 text-center px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-sm font-mono tracking-widest mb-4">
            AKASH KHARAT &bull; FULL-STACK ENGINEER &bull; MICROSERVICES &bull; IOT
          </p>
          <div className="flex justify-center gap-6 mb-8 text-white/40">
            <a href="mailto:akashkharat1212@gmail.com" className="hover:text-industrial-blue transition-colors">Email</a>
            <a href="https://linkedin.com/in/akash-kharat-58949a135" className="hover:text-industrial-blue transition-colors">LinkedIn</a>
            <a href="https://github.com" className="hover:text-industrial-blue transition-colors">GitHub</a>
          </div>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Engineered with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
