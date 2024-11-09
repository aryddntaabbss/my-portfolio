import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section
      id="contact"
      className="text-gray-600 dark:text-gray-300 body-font relative"
    >
      <div className="lg:w-full w-full lg:mb-0 text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
        </h1>
      </div>
      <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1677.3564234777623!2d127.37214312963347!3d0.7804976507029987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730900252232!5m2!1sen!2sus"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white dark:bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                West Highlands, South Ternate District, Ternate City, North
                Maluku
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 dark:text-gray-100 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:aryaddinataabbas017@gmail.com"
                className="text-indigo-500 dark:text-indigo-400 leading-relaxed"
              >
                aryaddinataabbas017@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-lg shadow-md">
          <h2 className="text-gray-900 dark:text-gray-100 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
            Your feedback means a lot to me. Share your opinion here.
          </p>

          <form id="feedback-form">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-500 dark:bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded text-lg"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Interested in collaborating or have an interesting project idea? I
            am always open to discussion and exploration of new ideas!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
