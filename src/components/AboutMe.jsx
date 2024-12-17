
const AboutMe = () => {
  return (
    <section className="bg-gray-700 text-white py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-gray-500 mr-4"></div>
        <div>
          <button className="bg-gray-600 px-4 py-2 rounded-md mr-2">Softskill</button>
          <button className="bg-gray-600 px-4 py-2 rounded-md mr-2">Softskill</button>
          <button className="bg-gray-600 px-4 py-2 rounded-md">Softskill</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;