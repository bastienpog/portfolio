const Experience = () => {
  return (
    <section className="bg-gray-800 py-8 px-6 sm:py-16 sm:px-6 sm:max-w-5xl sm:mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4 sm:text-3xl sm:mb-6">My Experience</h2>
      <div className="sm:flex">
        <div className="sm:w-1/2 sm:pr-8">
          <h3 className="text-xl font-bold mb-2 sm:text-2xl sm:mb-4">Education</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="sm:w-1/2 sm:pl-8">
          <h3 className="text-xl font-bold mb-2 sm:text-2xl sm:mb-4">Work Experience</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
