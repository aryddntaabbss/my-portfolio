import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Ternate Berlari",
    description:
      "Web platform for running events in Ternate, allowing users to register and get information.",
    image: "/images/img-project/ternate-berlari.png", // Mengakses gambar dari folder public
    link: "https://ternate-berlari.com/",
  },
  {
    name: "Fakultas Teknik UNKHAIR",
    description:
      "Platform providing information about programs and activities at the Faculty of Engineering, Khairun University.",
    image: "/images/img-project/fatek.png", // Mengakses gambar dari folder public
    link: "https://fatek.unkhair.ac.id/",
  },
  {
    name: "HMTI UNKHAIR",
    description:
      "Official website of the Informatics Engineering Student Association at Khairun University.",
    image: "/images/img-project/web-hmti.png", // Mengakses gambar dari folder public
    link: "https://hmti.unkhair.ac.id/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-600 dark:text-gray-300 body-font"
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">
            <FontAwesomeIcon icon={faMedal} className="mr-2" /> My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A showcase of my recent work, highlighting creativity, technical
            expertise, and dedication to impactful experiences.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-auto rounded w-full object-cover mb-4"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
                <h2 className="text-lg text-indigo-500 font-bold title-font">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="leading-relaxed text-base text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
