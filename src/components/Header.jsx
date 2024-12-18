const Header = () => {
  return (
    <header className="bg-gray-800 py-4 px-6 flex flex-col justify-between items-center sm:max-w-5xl sm:mx-auto">
      <h1 className="text-2xl font-bold mb-4 sm:text-3xl">Salut salut moi cest Bastien Pognon et je suis dev web</h1>
      <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-colors sm:px-6 sm:py-3">
        Télécharger mon CV
      </button>
    </header>
  );
};

export default Header;