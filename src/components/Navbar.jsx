import { BookOpenTextIcon, Briefcase, FolderGit2, Home, User } from "lucide-react";

const NavBar = () => {
  return (
    <footer className="fixed bottom-4 right-1/2 translate-x-1/2 bg-custom-green/70 backdrop-blur-sm text-white py-3 px-6 rounded-full flex justify-center space-x-6 shadow-lg">
      <button className="hover:text-gray-400 p-2">
        <Home size={24} />
      </button>
      <button className="hover:text-custom-darkgreen p-2">
        <User size={24} />
      </button>
      <button className="hover:text-custom-darkgreen p-2">
        <BookOpenTextIcon size={24} />
      </button>
      <button className="hover:text-custom-darkgreen p-2">
        <Briefcase size={24} />
      </button>
      <button className="hover:text-custom-darkgreen p-2">
        <FolderGit2 size={24} />
      </button>
    </footer>
  );
};

export default NavBar;
