import React, { useState } from 'react';

// import data
import { about } from '../data';

// import icon
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  const { icon, link, subtitle1, subtitle2, title } = about;

  // State for controlling form popup
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenForm = (e) => {
    e.preventDefault(); // Prevent default link navigation
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormSubmitted(false); // Reset success message on closing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    const formspreeEndpoint = "https://formspree.io/f/mkgogdyg";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset(); // Clear the form
      } else {
        console.error("Form submission failed:", await response.text());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-neutral-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="flex items-center gap-x-4 mb-8" data-aos="fade-up">
          <img src={icon} alt="icon" className="w-8" />
          <h2 className="text-3xl font-semibold text-neutral-800">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* Subtitles */}
        <p
          className="text-neutral-600 text-lg mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>
        <p
          className="text-neutral-600 text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle2}
        </p>
        {/* Link (converted to open the form) */}
        <a
          href="#join-form"
          onClick={handleOpenForm}
          className="text-red-600 text-lg font-medium flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300"
          data-aos="fade-down"
        >
          {link} <IoIosArrowDroprightCircle />
        </a>

        {/* Popup Form */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                onClick={handleCloseForm}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
              >
                ✕
              </button>

              {!formSubmitted ? (
                <>
                  {/* Form Title */}
                  <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
                    Join Us
                  </h2>

                  {/* Form */}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Write your message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
                    >
                      Submit
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Thanks! We have received your request.
                  </h3>
                  <p className="text-gray-600">
                    Our team will contact you shortly.
                  </p>
                  <button
                    onClick={handleCloseForm}
                    className="mt-4 py-2 px-6 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
