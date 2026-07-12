import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiPostgresql, SiMongodb, SiVite } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-dark" data-aos="zoom-in">
      <div className="container">

        <h2 className="text-center mb-5">Skills</h2>

        <div className="row">

          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>

              <div className="card text-center p-4 h-100 skill-card">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h5 className="mt-3">
                  {skill.name}
                </h5>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;