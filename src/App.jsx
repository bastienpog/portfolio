import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import NavBar from './components/Navbar';


const App = () => {
  return (
    <div className="bg-custom-black pt-12">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <NavBar />
    </div>
  );
};

export default App;""