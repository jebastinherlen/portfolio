import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-5 bg-dark">
      <div className="container text-center">

        <h2 className="mb-4">Resume</h2>

        <p className="lead">
          Download my latest resume to know more about my education,
          skills and projects.
        </p>

        <a
          href="/resume.pdf"
          className="btn btn-info btn-lg mt-3"
          download
        >
          <FaDownload /> Download Resume
        </a>

      </div>
    </section>
  );
};

export default Resume;