import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-dark text-white p-5 shadow">

              {/* Email */}
              <h4>Email</h4>
              <p>
                <FaEnvelope className="me-2" />
                <a
                  href="mailto:herlenjebastin@gmail.com"
                  className="text-info text-decoration-none"
                >
                  herlenjebastin@gmail.com
                </a>
              </p>

              <hr />

              {/* GitHub */}
              <h4>GitHub</h4>
              <p>
                <FaGithub className="me-2" />
                <a
                  href="https://github.com/jebastinherlen"
                  target="_blank"
                  rel="noreferrer"
                  className="text-info text-decoration-none"
                >
                  github.com/jebastinherlen
                </a>
              </p>

              <hr />

              {/* LinkedIn */}
              <h4>LinkedIn</h4>
              <p>
                <FaLinkedin className="me-2" />
                <a
                  href="https://www.linkedin.com/in/jebastin-herlen/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-info text-decoration-none"
                >
                  linkedin.com/in/jebastin-herlen
                </a>
              </p>

              <hr />

              {/* Phone */}
              <h4>Phone</h4>
              <p>
                <FaPhone className="me-2" />
                <a
                  href="tel:+916382463715"
                  className="text-info text-decoration-none"
                >
                  +91 63824 63715
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;