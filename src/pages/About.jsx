import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faRocket,
  faFaceSmile,
  faGhost,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" className="text-gray-600 dark:text-gray-300 body-font">
      <div className="container px-5 pt-16 mx-auto flex flex-col">
        <div className="lg:w-full w-full lg:pb-10 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">
            <FontAwesomeIcon icon={faAddressCard} className="mr-2" /> About Me
          </h1>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md p-3 sm:mt-3 mt-6 rounded-lg">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              {/* Profile Section */}
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-300">
                  <img
                    src="./images/arya.png"
                    className="w-28"
                    alt="aryaddinata"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 dark:text-gray-100 text-lg">
                    Agil Aryaddinata Abbas
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Web Developer and Product Designer, currently studying
                    Informatics Engineering. Focused on interfaces and
                    experiences, working remotely from North Maluku, Indonesia.
                  </p>
                </div>
              </div>

              {/* About Description Section */}
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-700 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-gray-700 dark:text-gray-300">
                  My passion lies in creating software that solves real-world
                  problems and positively impacts people’s lives. Apart from
                  software development, I am also an active student at
                  Informatics Engineering at Khairun University.
                </p>
                <p className="leading-relaxed text-lg mb-4 text-gray-700 dark:text-gray-300">
                  Whether it’s binge-watching my favorite anime series, cheering
                  on Manchester City, hanging out with friends, or discovering
                  new music in my favorite genres like RnB, UK Drill, and Chill
                  Rap, I’m always looking for ways to relax and unwind.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Right now, I’m working on some exciting projects that I can’t
                  wait to share with you. But I’m always open to new
                  opportunities and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 py-10">
        <div className="flex justify-center">
          <div className="relative">
            <h1 className="sm:text-3xl text-2xl font-medium title-font pb-10 text-gray-900 dark:text-gray-100">
              <FontAwesomeIcon icon={faRocket} className="mr-5" />
              Experience
            </h1>

            {/* Experience Item 1 */}
            <div className="flex pb-10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <FontAwesomeIcon icon={faFaceSmile} />
              </div>
              <div className="ml-4 w-full">
                <h2 className="font-semibold title-font text-xl mb-1 tracking-wider">
                  Head of Interest and Talent Division
                </h2>
                <h3 className="text-gray-500 mb-1">
                  Himpunan Mahasiswa Teknik Informatika, Ternate, Indonesia
                </h3>
                <p className="leading-relaxed mb-2">02/2024 - Present</p>
                <ul className="list-disc pl-5">
                  <li>
                    Spearheading the HMTI x SKILL CLASS program to enhance
                    technical skills among students.
                  </li>
                  <li>
                    Organized technology education events reaching over 500
                    students.
                  </li>
                  <li>
                    Managed logistics and communication for smooth project
                    execution.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex pb-10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <FontAwesomeIcon icon={faGhost} />
              </div>
              <div className="ml-4 w-full">
                <h2 className="font-semibold title-font text-xl mb-1 tracking-wider">
                  Front End Web Developer
                </h2>
                <h3 className="text-gray-500 mb-1">
                  Freelance, Ternate, Indonesia
                </h3>
                <p className="leading-relaxed mb-2">06/2023 - Present</p>
                <ul className="list-disc pl-5">
                  <li>
                    Designed a responsive web interface, increasing user
                    engagement by 25%.
                  </li>
                  <li>
                    Improved site performance by 20% through optimization.
                  </li>
                  <li>
                    Streamlined data management, enhancing accuracy and
                    efficiency.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="flex pb-10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <FontAwesomeIcon icon={faHouseLaptop} />
              </div>
              <div className="ml-4 w-full">
                <h2 className="font-semibold title-font text-xl mb-1 tracking-wider">
                  Front End Web Developer & UI/UX Designer
                </h2>
                <h3 className="text-gray-500 mb-1">
                  Radya Digital, Bandung, Indonesia
                </h3>
                <p className="leading-relaxed mb-2">09/2023 - 02/2024</p>
                <ul className="list-disc pl-5">
                  <li>
                    Developed web interfaces using ReactJS, improving user
                    interaction by 20%.
                  </li>
                  <li>
                    Created user experiences with Figma, boosting engagement by
                    15%.
                  </li>
                  <li>
                    Delivered the Productivity Tracker project, enhancing team
                    productivity by 30%.
                  </li>
                </ul>
              </div>
            </div>

            {/* Tambahkan pengalaman lainnya jika diperlukan */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
