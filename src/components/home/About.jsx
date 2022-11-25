import React from "react";
import aboutImage from '../../images/Image1.png'

const About = () => {
  return (
    <>
      <section className="my-20 max-w-[1440px] mx-auto lg:px-[5%] px-8">
        <div className="max-w-[29.6rem] text-center mx-auto mb-11">
          <h2 className="md:text-5xl text-[2rem] text-color-black-200 overflow-y-hidden">
            19 <span className="text-color-green-200">Michelin</span> Stars Chef
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          {/* left */}
          <div className="lg:grid place-items-center hidden">
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* right */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg lg:text-xl text-color-green-200">
                Alain Ducasse - 19 Michelin Stars
              </h3>

              <div className=" lg:flex items-center gap-1 text-color-green-200 text-sm hidden hover:tracking-wider duration-300 ease-in cursor-pointer">
                <span>View All Restaurant</span>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
            <p className="lg:text-lg text-base text-color-black-200">
              Considered by many to be one of the best chefs in the world, he's
              built a business empire over the years with 36 restaurants
              spanning across the globe. He's also one of only two chefs to hold
              21 Michelin stars throughout his career and the first chef to own
              restaurants carrying three Michelin Stars in three cities.
            </p>
            <br />
            <p className="lg:text-lg text-base text-color-black-200">
              In addition to being known for world-class French cuisine, Ducasse
              is the only chef on this list who has sent his food into space. In
              2015, Ducasse sent meals to astronauts orbiting Earth aboard the
              International Space Station, an accomplishment that Ducasse said
              he viewed as conquering 'the final frontier (of cooking)'.
            </p>
            <div className=" lg:hidden items-center gap-1 text-color-green-200 text-sm flex mt-6 cursor-pointer hover:tracking-wider duration-300 ease-in">
              <span>View All Restaurant</span>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
