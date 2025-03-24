import { BookOpenTextIcon, Briefcase, FolderGit2, Home, User } from "lucide-react";

const NavBar = () => {
  return (
    <footer className="fixed bottom-4 right-1/2 translate-x-1/2 bg-custom-green/70 backdrop-blur-sm text-custom-white py-3 px-6 rounded-full flex justify-center space-x-6 shadow-lg">
      <a href="#Header" className="hover:text-custom-darkgreen p-2">
        <Home size={24} />
      </a>
      <a href="#AboutMe" className="hover:text-custom-darkgreen p-2">
        <User size={24} />
      </a>
      <a href="#Skills" className="hover:text-custom-darkgreen p-2">
        <BookOpenTextIcon size={24} />
      </a>
      <a href="#Experience" className="hover:text-custom-darkgreen p-2">
        <Briefcase size={24} />
      </a>
      <a href="#Project" className="hover:text-custom-darkgreen p-2">
        <FolderGit2 size={24} />
      </a>
    </footer>
  );
};

export default NavBar;
