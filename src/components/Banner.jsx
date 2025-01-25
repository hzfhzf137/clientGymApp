import React, { useState } from "react";

// import data
import { banner } from "../data";

const Banner = () => {
  // destructure banner data
  const { subtitle, textBtn, titlePart1, titlePart2 } = banner;

  // State for form popup
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormSubmitted(false); // Reset success message
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
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          {/* text */}
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white "
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1}
            </h1>
            <h1
              className="h1 text-red-600 mb-8"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart2}
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8 "
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-sm lg:btn-lg btn-secondary bg-red-600"
              data-aos="fade-down"
              data-aos-delay="700"
              onClick={handleOpenForm}
            >
              {textBtn}
            </button>
          </div>
          {/* image */}
          <div
            className="bg-blue-200  w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>

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
    </section>
  );
};

export default Banner;
