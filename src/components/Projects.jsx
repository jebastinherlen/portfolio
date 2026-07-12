import React from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MASMAP",
    tech: "React • Node.js • Express • PostgreSQL",
    description:
      "A full-stack e-commerce web application for managing and purchasing earphones. Includes authentication, admin dashboard, shopping cart, and order management.",
    github: "https://github.com/jebastinherlen",
    live: "http://188.34.166.115"
  },
  {
    title: "Real-Time Chat System",
    tech: "React • Express • PostgreSQL • Socket.IO",
    description:
      "A real-time chat application with authentication, private messaging, global chat, and WebSocket communication.",
    github: "https://github.com/jebastinherlen",
    live: "#"
  },
  {
    title: "Developer Portfolio",
    tech: "React • Bootstrap • Vite",
    description:
      "A responsive personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.",
    github: "https://github.com/jebastinherlen",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">

        <h2 className="text-center mb-5">Projects</h2>

        <div className="row">

          {projects.map((project, index) => (
            <div className="col-lg-4 mb-4" key={index}>

              <div className="card bg-dark text-white h-100 shadow project-card">

                <div className="card-body">

                  <h3>{project.title}</h3>

                  <p className="text-info fw-bold">
                    {project.tech}
                  </p>

                  <p>{project.description}</p>

                </div>

                <div className="card-footer bg-transparent border-0 pb-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary me-2"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;