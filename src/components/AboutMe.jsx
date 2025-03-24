import { Ear, MessageCircle, Zap } from "lucide-react";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="text-custom-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col text-center">
          <p className="text-gray-600 mb-2">A propos de moi</p>
          <h1 className="text-custom-green text-3xl font-bold">About Me</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover" src="/rb_1351.png" />
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
              <p className="text-custom-black">
                À 21 ans, je suis actuellement en deuxième année de bachelor en développement web à l'École Multimedia à Paris,
              </p>
              <p className="text-custom-black">
                Durant mes études, j'ai acquis une solide maîtrise des langages web tels que HTML, CSS, JavaScript, React et PHP. J'ai également
                développé des compétences techniques en gestion de bases de données et en intégration de solutions web.
              </p>
              <p className="text-custom-black">
                En parallèle de ma formation, j'ai eu la chance d'effectuer deux stages, ainsi que plusieurs missions en tant que technicien test ou
                sav, ce qui m'a permis d'appliquer mes connaissances dans des environnements professionnels réels et de renforcer mon expertise.
              </p>
              <p className="text-custom-black">
                Aujourd'hui, je souhaite poursuivre mon parcours en continuant en troisième année de bachelor en alternance, toujours à l'École
                Multimedia. Cela me permettrait de combiner théorie et pratique tout en continuant à me perfectionner dans le domaine du développement
                web.
              </p>
            </div>

            <button className="bg-custom-green hover:bg-custom-darkgreen text-white px-6 py-3 rounded-lg transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
