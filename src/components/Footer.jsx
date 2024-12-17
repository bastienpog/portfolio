import { Home, User, Mail, Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 fixed bottom-0 left-0 right-0 flex justify-end space-x-4">
      <Home size={24} />
      <User size={24} />
      <Mail size={24} />
      <Settings size={24} />
    </footer>
  );
};

export default Footer;