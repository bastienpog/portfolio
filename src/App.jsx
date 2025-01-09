import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-custom-black py-12">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <NavBar />
    </div>
  );
};

export default App;
("");
