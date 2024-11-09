import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faPhp,
  faReact,
  faLaravel,
  faNodeJs,
  faDocker,
  faGit,
  faJava,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    name: "Python",
    description: "Data Science, Web Development",
    icon: faPython,
  },
  {
    name: "JavaScript",
    description: "Frontend & Backend Development",
    icon: faJs,
  },
  {
    name: "PHP",
    description: "Frontend & Backend Development",
    icon: faPhp,
  },
  {
    name: "C++",
    description: "System Programming",
    icon: faCode,
  },
  {
    name: "HTML & CSS",
    description: "Frontend Development",
    icon: faHtml5, // menggunakan ikon HTML untuk HTML & CSS
  },
  {
    name: "Java",
    description: "System Programming",
    icon: faJava,
  },
  {
    name: "SQL",
    description: "Database Management",
    icon: faDatabase,
  },
  {
    name: "React",
    description: "Frontend Framework",
    icon: faReact,
  },
  {
    name: "Laravel",
    description: "Frontend & Backend Framework",
    icon: faLaravel,
  },
  {
    name: "Node.js",
    description: "Backend Development",
    icon: faNodeJs,
  },
  {
    name: "Docker",
    description: "Containerization",
    icon: faDocker,
  },
  {
    name: "Git",
    description: "Version Control System",
    icon: faGit,
  },
];

function Skill() {
  return (
    <section id="skill" className="text-gray-600 dark:text-gray-300 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="w-full text-center lg:pb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900 dark:text-gray-100">
            <FontAwesomeIcon icon={faCode} className="mr-2" /> Skill
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-3 text-gray-600 dark:text-gray-400">
            An overview of my technical skills and programming language
            expertise, showcasing a diverse set of proficiencies.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-2xl text-gray-900 dark:text-gray-100 mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 dark:text-gray-100 title-font font-medium">
                    {skill.name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
