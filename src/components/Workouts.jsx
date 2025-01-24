import React from 'react';

// import data
import { workouts } from '../data';

// import component
import { WorkoutSlider } from './index';

const Workouts = () => {
  const { icon, title } = workouts;

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      {/* Section Title */}
      <div
        className="flex flex-col items-center mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={icon} alt="icon" className="w-8 mb-4" />
        <h2 className="text-3xl font-semibold text-neutral-800">
          {title}
          <span className="text-red-600">.</span>
        </h2>
      </div>
      {/* Slider */}
      <div data-aos="fade-down" data-aos-delay="400">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
