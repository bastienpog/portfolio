import { User } from "lucide-react";

const Header = () => {
  return (
    <header id="Header" className="py-4 px-6 flex flex-col justify-between items-center sm:max-w-5xl sm:mx-auto">
      <h2 className="text-custom-black sm:text-xl">Hi, I'm</h2>
      <h1 className="text-2xl text-custom-black font-bold mb-2 sm:text-3xl">Bastien Pognon</h1>
      <h2 className="text-lg text-gray-500 mb-6 sm:text-2xl">Web developper</h2>
      <User size={256} className="mb-10"></User>
      <div className="flex space-x-4">
        <a
          href="./public/CV Bastien POGNON.pdf"
          download
          className="text-custom-green px-4 py-2 rounded-md border-solid border-4 border-custom-green hover:bg-custom-green  hover:text-custom-white sm:px-6 sm:py-3"
        >
          Download my CV
        </a>
        <a href="#AboutMe" className="bg-custom-green text-white px-4 py-2 rounded-md sm:px-6 sm:py-3">
          About Me
        </a>
      </div>
    </header>
  );
};

export default Header;
