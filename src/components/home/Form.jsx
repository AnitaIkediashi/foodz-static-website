import React from "react";
import formImage from '../../images/Image.png'

const Form = () => {
  return (
    <section className="my-20 max-w-[1440px] mx-auto lg:px-[5%] px-8">
      <div className="max-w-[48.1rem] mx-auto flex flex-col gap-2 text-center mb-10">
        <h2 className="md:text-5xl text-[2rem] text-color-black-200 overflow-y-hidden">
          Get the best Taste <span className="text-color-green-200">Now!</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-color-black-100">
          Get the best Taste Now! Best cooks and best delivery guys all at your
          service. Hot tasty food will reach you in 60 minutes.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        {/* left */}
        <div>
          <h3 className="md:text-2xl text-lg text-color-black-200 mb-2">
            What's your Taste?
          </h3>
          <p className="text-color-black-200">
            Fill out the form and let us know your taste.
          </p>
          <form className="flex flex-col mt-3 gap-2">
            <div className="flex flex-col gap-1">
              <label className="flex justify-between items-center">
                <span className="text-color-black-200">Select your Meal</span>
                <button type="button" className="text-color-green-200">
                  View menu
                </button>
              </label>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="What's your Taste?"
                  className="w-full py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                />
                <i className="ri-arrow-drop-down-line absolute right-4 top-3 ri-xl overflow-y-hidden text-color-black-100"></i>
              </div>
              <div className="w-fit">
                <button className="flex items-center gap-2 text-color-green-200">
                  <p>Add 1 Taste</p>
                  <i className="ri-add-line"></i>
                </button>
              </div>
            </div>

            <div className="flex gap-3 items-center flex-wrap lg:flex-nowrap">
              <div className="flex flex-col gap-1">
                <label className="text-color-black-200">Order name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-color-black-200">Phone number</label>
                <input
                  type="number"
                  placeholder="(+84) 123 465 798 "
                  className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-color-black-200">Your Address</label>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="17 Acb Street"
                  className="w-full py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                />
                <i className="ri-map-pin-line absolute right-4 top-2 ri-1x overflow-y-hidden text-color-black-100"></i>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-color-black-200">Payment Method</label>
              <div className="w-fit">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="I'll pay cash"
                    className="w-full py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                  />
                  <i className="ri-arrow-drop-down-line absolute right-4 top-3 ri-xl overflow-y-hidden text-color-black-100"></i>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-color-black-200">Note for us</label>
              <textarea
                placeholder="More spicy, more sauce, ..."
                className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 h-[7.13rem] text-color-black-200"
              ></textarea>
              <div className="w-fit">
                <div className="flex items-center gap-2">
                  <p className="text-color-black-100">You will pay</p>
                  <span className="text-color-green-200 text-2xl">$0.00</span>
                </div>
              </div>
            </div>
            <div className="w-fit">
              <button
                type="button"
                className="text-color-body font-medium cursor-pointer py-[0.625rem] px-[1.25rem] bg-color-green-200 rounded"
              >
                ORDER NOW
              </button>
            </div>
          </form>
        </div>
        {/* right */}
        <div className="lg:grid place-items-center hidden">
          <div className="overflow-hidden">
            <img
              src={formImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
