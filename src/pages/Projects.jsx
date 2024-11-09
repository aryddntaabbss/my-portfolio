import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Ternate Berlari",
    description:
      "Web platform for running events in Ternate, allowing users to register and get information.",
    image: "/images/img-project/ternate-berlari.png",
    link: "https://ternate-berlari.com/",
  },
  {
    name: "Fakultas Teknik UNKHAIR",
    description:
      "Platform providing information about programs and activities at the Faculty of Engineering, Khairun University.",
    image: "/images/img-project/fatek.png",
    link: "https://fatek.unkhair.ac.id/",
  },
  {
    name: "HMTI UNKHAIR",
    description:
      "Official website of the Informatics Engineering Student Association at Khairun University.",
    image: "/images/img-project/web-hmti.png",
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
        <div className="text-center lg:pb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900 dark:text-gray-100">
            <FontAwesomeIcon icon={faMedal} className="mr-2" /> My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A showcase of my recent work, highlighting creativity, technical
            expertise, and dedication to impactful experiences.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="xl:w-1/4 md:w-1/2 p-4 flex justify-center"
            >
              <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg h-full flex flex-col items-center text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4"
                >
                  <img
                    className="w-auto object-cover rounded"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
                <h2 className="text-lg text-black dark:text-white font-bold title-font mb-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h2>
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
