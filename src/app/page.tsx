import Hero from '@/src/components/sections/Hero';
import Contact from '../components/sections/Contact';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import Skills from '../components/sections/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Research />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
