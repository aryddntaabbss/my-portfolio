import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-gray-600 dark:text-gray-300 body-font">
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
            © 2024
            <a
              href="https://github.com/aryddntaabbss"
              className="text-gray-600 dark:text-gray-300 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              aryddntaabbss
            </a>
          </p>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a
              className="ml-3 text-gray-500 dark:text-gray-400 hover:text-indigo-500"
              href="https://github.com/aryddntaabbss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="ml-3 text-gray-500 dark:text-gray-400 hover:text-indigo-500"
              href="https://www.instagram.com/aryddntaabbss17.__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="ml-3 text-gray-500 dark:text-gray-400 hover:text-indigo-500"
              href="https://www.linkedin.com/in/agil-aryaddinata-abbas-5a3951260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
