import './index.css'
import App from './App.jsx'
import Project from './components/Project.jsx';
import Skills from './components/Skills.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/AboutMe" element={<AboutMe />} />
    </Routes>
  </BrowserRouter>
);