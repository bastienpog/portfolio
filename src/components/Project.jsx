const Project = () => {
  return (
    <section className="py-8 px-6 sm:py-16 sm:px-6 sm:max-w-5xl sm:mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4 sm:text-3xl sm:mb-6">My Projects</h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-8">
        <div className="bg-gray-600 h-32 rounded sm:h-48"></div>
        <div className="bg-gray-600 h-32 rounded sm:h-48"></div>
        <div className="bg-gray-600 h-32 rounded sm:h-48"></div>
        <div className="bg-gray-600 h-32 rounded sm:h-48"></div>
      </div>
    </section>
  );
};

export default Project;