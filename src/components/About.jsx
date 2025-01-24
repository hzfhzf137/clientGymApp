import React from 'react';

// import data
import { about } from '../data';

// import icon
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  const { icon, link, subtitle1, subtitle2, title } = about;

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
        <p className="text-neutral-600 text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          {subtitle1}
        </p>
        <p className="text-neutral-600 text-lg mb-8" data-aos="fade-up" data-aos-delay="300">
          {subtitle2}
        </p>
        {/* Link */}
        <a
          href="#target-section"
          className="text-red-600 text-lg font-medium flex items-center gap-x-2 hover:gap-x-3 transition-all duration-300"
          data-aos="fade-down"
        >
          {link} <IoIosArrowDroprightCircle />
        </a>

      </div>
    </section>
  );
};

export default About;
