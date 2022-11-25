import React from "react";
import { services } from "../../data";
import Service from "../Service";


const Services = () => {
  return (
    <>
      <section className="my-20 max-w-[1440px] mx-auto lg:px-[5%] px-8">
        <div className="max-w-[27.6rem] text-center mx-auto mb-14">
          <h2 className="md:text-5xl text-[2rem] text-color-black-200 overflow-y-hidden">
            How we keep your meal{" "}
            <span className="text-color-green-200">Delicious</span>
          </h2>
        </div>
        <div className="max-w-[76rem] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {services.map((card, idx) => {
            return <Service card={card} key={idx} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
