import Landing from "./components/landing"
import { AboutMe } from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"



export default function Home() {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
