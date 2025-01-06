import React from 'react';
import { MessageCircle, Ear, Zap } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 flex flex-col text-center">
          <p className="text-gray-400 mb-2">A propos de moi</p>
          <h1 className="text-custom-green text-3xl font-bold">About Me</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img 
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-custom-darkgreen p-4 rounded-lg text-center">
                <Ear className="w-6 h-6 text-custom-green mx-auto mb-2" />
                <p className="text-sm">A l'écoute</p>
              </div>
              <div className="bg-custom-darkgreen p-4 rounded-lg text-center">
                <MessageCircle className="w-6 h-6 text-custom-green  mx-auto mb-2" />
                <p className="text-sm">Capacité d'adaptation</p>
              </div>
              <div className="bg-custom-darkgreen p-4 rounded-lg text-center">
                <Zap className="w-6 h-6 text-custom-green  mx-auto mb-2" />
                <p className="text-sm">Autonome</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                A 26 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web.
              </p>
              <p className="text-gray-300">
                Suite à un bac +2 développeur web à la Digital School de Brest, j'ai pu acquérir les bases de plusieurs langages web (HTML, CSS, Javascript, PHP), la gestion de bases de données mais aussi l'utilisation de logiciels tels que Illustrator, Blender ou Figma que j'utilise régulièrement pour créer des maquettes interactives.
              </p>
              <p className="text-gray-300">
                J'ai ensuite pu exercer et améliorer ces connaissances avec un stage de 3 mois aux côtés d'un développeur web expérimenté.
              </p>
              <p className="text-gray-300">
                J'aimerais maintenant continuer ma formation avec une troisième année en bachelor « Développement web » en alternance toujours à la Digital School.
              </p>
            </div>

            <button className="bg-custom-green hover:bg-custom-darkgreen text-white px-6 py-3 rounded-lg transition-colors">
              Contact 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;