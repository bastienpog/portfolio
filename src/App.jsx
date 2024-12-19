import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import NavBar from './components/Navbar';


const App = () => {
  return (
    <div className="App bg-gray-700">
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Project />
      <NavBar />
    </div>
  );
};

export default App;