import React, { useState } from "react";
import useThemeToggle from "./ThemeToggle";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleTheme = useThemeToggle();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto p-5 flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className="text-lg font-bold">Agil Aryaddinata Abbas</h1>

        {/* Nav Menu for Desktop */}
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
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
          <button onClick={toggleTheme} className="theme-toggle shadow-md">
            <span className="icon">
              {document.documentElement.classList.contains("dark")
                ? "🌜"
                : "🌞"}
            </span>
          </button>
        </nav>

        {/* Tombol Toggle untuk Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="px-2 py-2 bg-gray-200 rounded dark:bg-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu Navigasi Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 p-5">
          <ul className="flex flex-col space-y-4">
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
          <button onClick={toggleTheme} className="theme-toggle shadow-md mt-4">
            <span className="icon">
              {document.documentElement.classList.contains("dark")
                ? "🌜"
                : "🌞"}
            </span>
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
