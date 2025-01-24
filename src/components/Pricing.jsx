import React from 'react';

// import data
import { pricing } from '../data';

// import component
import { PlanList } from './index';

const Pricing = () => {
  const { icon, plans, title } = pricing;

  return (
    <section className="py-16 lg:py-24 bg-neutral-100">
      {/* Section Title */}
      <div
        className="flex flex-col items-center mb-12"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <img src={icon} alt="icon" className="w-8 mb-4" />
        <h2 className="text-3xl font-semibold text-neutral-800">
          {title}
          <span className="text-red-600">.</span>
        </h2>
      </div>
      {/* Plans */}
      <div>
        <PlanList plans={plans} />
      </div>
    </section>
  );
};

export default Pricing;
