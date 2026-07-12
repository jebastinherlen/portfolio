import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="container text-center">

        <h1>Jebastin Herlen</h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Node.js Developer",
            2000,
            "PostgreSQL Developer",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          speed={40}
        />

        <p className="mt-4">
          Passionate about building scalable web applications using
          React, Express, Node.js and PostgreSQL.
        </p>

        <div className="mt-4">

          <a
            href="https://github.com/jebastinherlen"
            target="_blank"
            className="btn btn-primary me-3"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="#contact"
            className="btn btn-outline-info"
          >
            <FaEnvelope /> Contact
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;