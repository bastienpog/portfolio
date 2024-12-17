const Project = () => {
  return (
    <section className="bg-gray-800 text-white py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-600 h-32 rounded"></div>
        <div className="bg-gray-600 h-32 rounded"></div>
        <div className="bg-gray-600 h-32 rounded"></div>
        <div className="bg-gray-600 h-32 rounded"></div>
      </div>
    </section>
  );
};

export default Project;