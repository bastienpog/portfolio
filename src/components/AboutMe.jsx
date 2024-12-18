import { User } from "lucide-react";


const AboutMe = () => {
  return (
    <section className="bg-gray-700 py-8 px-6 sm:py-16 sm:px-6 sm:max-w-5xl sm:mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4 sm:text-3xl sm:mb-6">About Me</h2>
      <div className="flex flex-col items-center">
        <User size={128} className="mb-6"></User>
        <div className="mb-6">
          <button className="bg-gray-600 px-4 py-2 rounded-md mr-2 hover:bg-gray-500 transition-colors sm:px-5 sm:py-3 sm:mr-4">
            Softskill
          </button>
          <button className="bg-gray-600 px-4 py-2 rounded-md mr-2 hover:bg-gray-500 transition-colors sm:px-5 sm:py-3 sm:mr-4">
            Softskill
          </button>
          <button className="bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-500 transition-colors sm:px-5 sm:py-3">
            Softskill
          </button>
        </div>
        <p className="mx-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio pariatur dolorum suscipit laudantium accusantium dolores sint odio, eos quas, reprehenderit tempore facere perferendis praesentium voluptates cupiditate vel. Laborum, odit.</p>
      </div>
    </section>
  );
};
export default AboutMe;