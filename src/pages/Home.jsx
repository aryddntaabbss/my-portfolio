function Home() {
  return (
    <section
      id="home"
      className="text-gray-600 dark:text-gray-300 body-font h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center justify-center">
        {/* Left Column: Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h3 className="sm:text-3xl text-3xl mb-2 font-semibold text-gray-900 dark:text-gray-100">
            Hello guys, I am
          </h3>
          <h1 className="title-font sm:text-4xl text-4xl font-bold text-indigo-500 dark:text-indigo-500 mb-5">
            Agil Aryaddinata Abbas
          </h1>
          <p className="mb-6 sm:text-lg text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Web Developer and Product Designer, currently studying Informatics
            Engineering.
          </p>
          <a
            href="#about"
            className="inline-flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 rounded text-lg"
          >
            Read More
          </a>
        </div>

        {/* Right Column: Image Content */}
        <div className="relative flex justify-center items-center md:w-1/2 w-full sm:mt-10 mt-5">
          {/* Back Image */}
          <div className="lg:max-w-lg lg:w-full w-full">
            <img
              className="object-cover object-center rounded h-full"
              alt="hero"
              src="./images/hero.png"
            />
          </div>
          {/* Front Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:max-w-lg lg:w-full w-full">
            <img
              className="object-cover object-center rounded h-full"
              alt="arya"
              src="./images/arya.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
