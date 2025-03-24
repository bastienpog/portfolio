import { ChevronRight } from "lucide-react";
import { useState } from "react";
import DetailModal from "./DetailModal";

const Project = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const projects = [
    {
      title: "Sms-assistant",
      image: "public/Capture d’écran du 2025-03-07 11-22-03.png",
      details:[
        ""
      ]
    },
    {
      title: "Checklist App",
      image: "/public/image1.png",
    },
    {
      title: "Outil de Visualisation de donnée",
      image: "/public/image.png",
    },
    {
      title: "Snippet Manager",
      image: "/public/image2.png",
      details:[
        ""
      ]
    },
  ];

  return (
    <div id="Project" className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-gray-600 mb-2">Mes projets</p>
          <h2 className="text-custom-green text-3xl font-bold">My projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          
          {projects.map((project,index) => (
            <div key={index} className=" bg-custom-darkgreen rounded-lg p-4 transition-transform hover:scale-105">
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-slate-100 font-medium">{project.title}</h3>
                <button onClick={() => setSelectedItem(project)} className="text-custom-green text-sm mt-auto flex items-center gap-1">
                  Voir plus <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <DetailModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.title}
                details={selectedItem?.details}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
