import React from "react";
import image1 from "../../images/Bibimbap.png";
import image2 from '../../images/Sugar.png'
import image3 from '../../images/Chopstick.png'
import bg from "../../images/bG.png";


const Hero = () => {
  return (
    <>
      <section className="w-full h-[56rem] relative">
        <div className="max-w-[1440px] mx-auto lg:px-[5%] px-8 h-full grid lg:grid-cols-2 grid-cols-1 py-40 gap-3">
          {/* left */}
          <div className="w-full overflow-y-hidden text-center lg:text-left ">
            <div className="flex flex-col gap-4 ">
              <div>
                <h1 className="text-color-black-200 font-normal lg:text-6xl md:text-5xl text-[2rem] overflow-y-hidden">
                  You've Got Questions.
                </h1>
                <h1 className="text-color-black-200 font-normal lg:text-6xl md:text-5xl text-[2rem] overflow-y-hidden">
                  We've Got Taste.
                </h1>
              </div>
              <p className="lg:text-2xl md:text-xl text-lg text-color-black-100">
                Explore your Taste with special food in the special place. This
                text don't have any meaning
              </p>
              <div className="flex items-center gap-5 mt-4 justify-center lg:justify-start">
                <button
                  type="button"
                  className="text-base text-color-body font-medium cursor-pointer py-[0.625rem] px-[1.25rem] bg-color-green-200 rounded"
                >
                  ORDER NOW
                </button>
                <button
                  type="button"
                  className="text-base text-color-green-200 font-normal cursor-pointer hidden lg:flex"
                >
                  Explore menu
                </button>
              </div>
            </div>

            <div className="w-full lg:h-[8.38rem] bg-[#f4f5f6] hidden lg:flex items-center px-8 mt-16 justify-evenly">
              {/* col-1 */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="font-semibold lg:text-[2rem] text-[#777e91] lg:flex hidden overflow-y-hidden">
                  9+
                </div>
                <p className="lg:text-xl md:text-lg text-[#777e91] md:flex hidden">
                  years of service.
                </p>
              </div>
              {/* col-2 */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="font-semibold lg:text-[2rem] text-[#777e91] lg:flex hidden overflow-y-hidden">
                  120+
                </div>
                <p className="lg:text-xl md:text-lg text-[#777e91] md:flex hidden">
                  Store in the world.
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="relative grid place-items-center overflow-y-hidden w-full mt-8 lg:mt-0">
            {/* first image */}
            <div className="lg:absolute lg:right-5 lg:top-8 z-10">
              <img
                src={image1}
                alt=""
                className="lg:w-[30rem] lg:h-[30rem] w-48 h-48 object-contain"
              />
            </div>
            {/* second image */}
            <div className="absolute lg:right-0 lg:top-0 bottom-[5rem] hidden lg:translate-x-0 lg:flex z-10">
              <img src={image2} alt="" className="lg:w-24 lg:h-24 w-9 h-8" />
            </div>
            <div className="absolute bg-color-green-100 w-full h-[18.7rem] sm:top-8 circle lg:hidden"></div>
          </div>
        </div>

        {/* first circle */}
        <div className="absolute right-0 top-32 hidden lg:flex">
          <img src={bg} alt="" className="lg:w-[30rem] lg:h-[41rem] " />
        </div>

        {/* third image */}
        <div className="absolute lg:right-24 lg:top-[32.5rem] z-10 hidden lg:flex">
          <img
            src={image3}
            alt=""
            className="lg:w-[20rem] lg:h-[20rem] object-contain h-[5rem] w-[5rem] "
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
