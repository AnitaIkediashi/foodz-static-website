import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Map from '../../images/Map.png'

const ContactForm = () => {

  const [value, setValue] = useState();

  return (
    <section className="my-20 max-w-[1440px] mx-auto lg:px-[5%] px-8 pt-20 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* left */}
        <div>
          <h2 className="lg:text-5xl text-[2rem] text-color-black-200 overflow-y-hidden mb-3">
            Contact Us
          </h2>
          <p className="lg:text-2xl md:text-xl text-lg text-color-black-100 mb-8">
            We love to here you anytime. You can reach us anytime via
            <a href="/" className="text-color-green-200">
              {" "}
              Mailhere@Food.com
            </a>
          </p>
          <form className="flex flex-col gap-2">
            <div className="flex gap-3 items-center flex-wrap lg:flex-nowrap">
              <div className="flex flex-col gap-1">
                <label className="text-color-black-200">Name</label>
                <input
                  type="number"
                  placeholder="(+84) 123 465 798 "
                  className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-color-black-200">Email</label>
                <input
                  type="email"
                  placeholder="Example@example.com"
                  className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-color-black-200">Phone number</label>
              <PhoneInput
                international
                defaultCountry="NG"
                placeholder="Text holder"
                value={value}
                onChange={setValue}
                className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 text-color-black-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-color-black-200">Message</label>
              <textarea
                placeholder="Your Message"
                className=" py-[0.625rem] px-5 border border-color-black-100 outline-none rounded-xl focus:border-2 duration-300 h-[7.13rem] text-color-black-200"
              ></textarea>
            </div>

            <button
              type="button"
              className="text-color-body font-medium cursor-pointer py-[0.625rem] px-[1.25rem] bg-color-green-200 rounded mt-4"
            >
              Send message
            </button>
          </form>
        </div>

        {/* right */}
        <div className="lg:grid place-items-center hidden">
          <div className="overflow-hiden">
            <img src={Map} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
