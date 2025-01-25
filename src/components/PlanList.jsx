import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false); // State for popup form
  const [formSubmitted, setFormSubmitted] = useState(false); // State for form submission success

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFormSubmitted(false); // Reset success message on closing the form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    // Replace with your Formspree endpoint
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
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
      {plans.map((plan, ind) => {
        const { name, price, list } = plan;
        return (
          <div
            key={ind}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]"
          >
            <div
              className={`${
                ind === index
                  ? "bg-neutral-500 text-white md:scale-110"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition-all duration-100`}
              onClick={() => setIndex(ind)}
            >
              <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                <div>
                  <div
                    className={`${
                      ind === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } h-[26px] font-primary text-sm font-semibold mx-auto w-min px-[14px] flex items-center justify-center mb-8`}
                  >
                    {name}
                  </div>
                  <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                    <div className="leading-none">
                      <span className="tracking-[0.1px]">{price}</span>
                      <span className="text-sm font-medium">$</span>
                    </div>
                    <span>/month</span>
                  </div>
                </div>
                <div>
                  <ul className="flex flex-col gap-y-4 mb-8">
                    {list.map((item, ind) => {
                      const { name } = item;
                      return (
                        <li
                          key={ind}
                          className="flex items-center gap-x-[10px]"
                        >
                          <BsCheckCircleFill />
                          <div>{name}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`${
                      ind === index
                        ? "text-neutral-500 bg-red-600"
                        : "border border-neutral-500 bg-red-600"
                    } btn btn-lg rounded-[1px] bg-red-600 lg:max-auto`}
                    onClick={handleOpenForm} // Open the form on button click
                  >
                    Join now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

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
  );
};

export default PlanList;
