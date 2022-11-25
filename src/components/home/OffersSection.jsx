import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { slides } from "../../data";
import Slider from "../Slider";


const responsive = {
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    
  },
  tablet: {
    breakpoint: { max: 768, min: 480 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      {/* remember to give it position:absolute */}
      <button
        className={`${
          currentSlide === 0 ? "disable" : ""
        } w-10 h-10 rounded-full border grid place-items-center`}
        onClick={() => previous()}
      >
        <i className="ri-arrow-left-line"></i>
      </button>
      <button
        onClick={() => next()}
        className="w-10 h-10 rounded-full border grid place-items-center"
      >
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

const OffersSection = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto lg:px-[5%] px-8">
        <div className="max-w-[48.1rem] mx-auto flex flex-col gap-2 text-center mb-10">
          <h2 className="md:text-5xl text-[2rem] text-color-black-200 overflow-y-hidden">
            Today <span className="text-color-green-200">Special</span> Offers
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-color-black-100">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
        </div>
        <Carousel
          containerClass="carousel-container"
          // className="w-full"
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={1000}
          arrows={false}
          // centerMode={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {slides.map(({ id, image, desc, review, price, btn }) => {
            return (
              <Slider
                key={id}
                image={image}
                desc={desc}
                review={review}
                price={price}
                btn={btn}
              />
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default OffersSection;
