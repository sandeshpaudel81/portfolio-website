import Header from "@/src/components/sections/Header";
import Research from "@/src/components/sections/Research";
import Projects from "@/src/components/sections/Projects";
import Publications from "@/src/components/sections/Publications";
import Footer from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Research />
        <Projects />
        <Publications />
      </main>
      <Footer />
    </>
  );
}