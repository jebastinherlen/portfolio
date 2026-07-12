import React from "react";
import { FaUser, FaCode, FaServer, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-5" data-aos="fade-up">
      <div className="container">

        <h2 className="text-center mb-5">About Me</h2>

        <div className="row align-items-center">

          {/* Profile Image */}

          <div className="col-lg-4 text-center">

            <img
              src="/profile.jpg"
              alt="Jebastin Herlen"
              className="img-fluid rounded-circle shadow"
            />

          </div>

          {/* About Content */}

          <div className="col-lg-8 mt-5 mt-lg-0">

            <h3>
              <FaUser className="me-2 text-info" />
              Hi, I'm Jebastin Herlen
            </h3>

            <p className="mt-4">
              I'm a passionate <strong>Full Stack Developer</strong> from
              India who enjoys building modern, responsive, and scalable
              web applications.
            </p>

            <p>
              My main focus is creating complete applications using
              React, Node.js, Express, PostgreSQL, and REST APIs.
            </p>

            <p>
              I love learning new technologies and continuously improving
              my development skills by building real-world projects.
            </p>

            <div className="row mt-4">

              <div className="col-md-6 mb-3">

                <div className="card p-3 h-100">

                  <h5>
                    <FaCode className="text-info me-2" />
                    Frontend
                  </h5>

                  <p className="mb-0">
                    React, JavaScript, HTML5, CSS3, Bootstrap, Vite
                  </p>

                </div>

              </div>

              <div className="col-md-6 mb-3">

                <div className="card p-3 h-100">

                  <h5>
                    <FaServer className="text-info me-2" />
                    Backend
                  </h5>

                  <p className="mb-0">
                    Node.js, Express.js, REST API, JWT Authentication
                  </p>

                </div>

              </div>

              <div className="col-md-12">

                <div className="card p-3">

                  <h5>
                    <FaDatabase className="text-info me-2" />
                    Database
                  </h5>

                  <p className="mb-0">
                    PostgreSQL, MongoDB
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;