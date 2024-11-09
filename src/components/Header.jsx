import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menyinkronkan tema dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Fungsi untuk toggle tema dan menyimpan preferensi ke localStorage
  const handleToggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto p-5 flex justify-between items-center">
        {/* Logo/Title */}
        <a href="#" className="text-lg font-bold">
          Agil Aryaddinata Abbas
        </a>

        {/* Nav Menu for Desktop */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4 items-center">
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Tombol Theme Toggle untuk Desktop */}
          <button
            onClick={handleToggleTheme}
            className="theme-toggle shadow-md ml-4 p-2 rounded-full"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </nav>

        {/* Tombol Toggle untuk Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="px-2 py-2 bg-gray-200 rounded dark:bg-gray-700 focus:outline-none"
            aria-label="Open mobile menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Menu Navigasi Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 p-5 flex flex-col items-center text-center">
          <ul className="flex flex-col space-y-4 mb-4">
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Tombol Theme Toggle untuk Mobile */}
          <button
            onClick={handleToggleTheme}
            className="theme-toggle shadow-md p-2 rounded-full"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
