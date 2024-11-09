// src/App.jsx

import React from "react";
import useThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  useThemeToggle();

  return (
    <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Pages /> {/* Menampilkan semua halaman dari komponen Pages */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll-to-Top Button */}
      <ScrollTopButton />
    </div>
  );
}

export default App;
