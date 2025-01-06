import React from 'react';
import { 
  Code2, 
  Palette, 
  FileJson, 
  Boxes,
  Database,
  Server,
  Globe,
  Wind,
  Flame,
  Laptop,
  MonitorSmartphone,
  Cpu
} from 'lucide-react';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML', icon: <Globe className="w-6 h-6 text-custom-green" /> },
    { name: 'CSS', icon: <Palette className="w-6 h-6 text-custom-green" /> },
    { name: 'JavaScript', icon: <FileJson className="w-6 h-6 text-custom-green" /> },
    { name: 'React', icon: <Boxes className="w-6 h-6 text-custom-green" /> },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6 text-custom-green" /> },
    { name: 'Tailwind', icon: <Wind className="w-6 h-6 text-custom-green" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <Server className="w-6 h-6 text-custom-green" /> },
    { name: 'PHP', icon: <Flame className="w-6 h-6 text-custom-green" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6 text-custom-green" /> },
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="bg-custom-darkgreen rounded-xl p-8">
      <h3 className="text-custom-green text-2xl font-medium mb-6 ">{title}</h3>
      <div className="grid grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3">
            {skill.icon}
            <h4 className="text-white font-medium">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-gray-400 mb-2">Mes compétences</p>
          <h2 className="text-custom-green text-3xl font-bold">My skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;