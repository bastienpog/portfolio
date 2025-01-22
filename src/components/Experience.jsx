import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import DetailModal from "./DetailModal";

const Experience = () => {
  const [filter, setFilter] = useState("Pro");
  const [selectedItem, setSelectedItem] = useState(null);

  const experiences = [
    {
      title: "Stage développement web, 2 eme année",
      company: "SMSMode",
      location: "Distanciel",
      date: "Janvier - Février 2025",
      type: "Pro",
      link: true,
      details: [],
    },
    {
      title: "Stage développement web, 1 ere année",
      company: "Bugali",
      location: "Paris, France",
      date: "Mai - Juillet 2024",
      type: "Pro",
      link: true,
      details: ["Réalisation d'un outil de visualisation de données", "Javascript / Jquery", "D3.js", "SQL"],
    },
    {
      title: "Technicien SAV",
      company: "LightInDerm",
      location: "Paris, France",
      date: "2024 - 2025",
      type: "Pro",
      link: true,
      details: [
        "Diagnostic, planification, réparations",
        "Maintenance préventive et curative sur équipements selon priorité/délais",
        "Suivi dossiers techniques / administratifs selon process qualité SAV",
      ],
    },
    {
      title: "Technicien Test",
      company: "KickMaker / ",
      subCompany: "Bugali",
      location: "Paris, France",
      date: "Août - Septembre 2023",
      type: "Pro",
      link: true,
      details: [
        "Lecture plan de qualification",
        "Réalisation d'essais.",
        "Consignation des données et rédaction de rapport d'essais.",
        "Recherche de bugs et de dysfonctionnements.",
      ],
    },
    {
      title: "Technicien Maintenance Informatique",
      location: "Paris, France",
      date: "Juillet - Aout 2023 / 2024",
      type: "Pro",
      link: true,
      details: ["Montage des postes informatiques sur mobilier.", "Déploiement de l'OS."],
    },
    {
      title: "Bac +2 Développeur Web",
      company: "L'Ecole Multimédia, Paris",
      date: "2023 - 2025",
      type: "Formations",
      link: false,
    },
    {
      title: "Bac Spécialité Maths et NSI",
      company: "Lycée Notre Dame, Boulogne Billancourt",
      date: "2018 - 2021",
      type: "Formations",
      link: false,
    },
  ];

  const filteredExperiences = experiences.filter((exp) => exp.type === filter);

  return (
    <div className="text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-gray-400 mb-2">Mon parcours</p>
          <h2 className="text-custom-green text-3xl font-bold mb-8">My career</h2>

          <div className="flex justify-between mb-8">
            <button
              onClick={() => setFilter("Pro")}
              className={`px-4 py-2 rounded-lg border border-custom-green ${
                filter === "Pro" ? "bg-custom-green" : "bg-transparent"
              } transition-colors`}
            >
              Pro
            </button>
            <button
              onClick={() => setFilter("Formations")}
              className={`px-4 py-2 rounded-lg border border-custom-green ${
                filter === "Formations" ? "bg-custom-green" : "bg-transparent"
              } transition-colors`}
            >
              Formations
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mx-6">
          {filteredExperiences.map((experience, index) => (
            <div key={index} className="bg-custom-darkgreen rounded-xl p-6 flex flex-col">
              <h3 className="text-white font-medium text-lg mb-2">{experience.title}</h3>
              <div className="text-gray-400 text-sm mb-4">
                {experience.company} {experience.subCompany} - {experience.location}
                {experience.date && <div className="mt-2">{experience.date}</div>}
              </div>
              {experience.link && (
                <button onClick={() => setSelectedItem(experience)} className="text-custom-green text-sm mt-auto flex items-center gap-1">
                  Voir plus <ChevronRight className="w-4 h-4" />
                </button>
              )}
              <DetailModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.title}
                company={selectedItem?.company}
                location={selectedItem?.location}
                date={selectedItem?.date}
                details={selectedItem?.details}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
