import { motion } from "framer-motion";
import React from "react";

const MenuCategories = ({id, image, desc, review, price, btn}) => {
  return (
    <>
      <motion.article
        className=" py-6 px-3 scale-90 rounded-[0.94rem] shadow-[0px_10px_27px_rgba(53,53,53,0.05)]"
        key={id}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        <img src={image} alt="" className="w-full h-[17.8rem] object-contain" />
        <div className="flex flex-col gap-2 mt-3">
          <h3 className="lg:text-[2rem] md:text-2xl text-[1.75rem] text-color-black-200 overflow-y-hidden">
            {desc}
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex gap-1 text-color-green-200">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <span className="lg:text-base text-sm text-color-black-100">
              {review}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-color-green-200 lg:text-[2.5rem] md:text[1.75rem] text-[2rem]">
              {price}
            </h3>
            <button
              type="button"
              className="py-2 px-4 rounded bg-color-green-200 lg:text-base text-sm text-color-body"
            >
              {btn}
            </button>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default MenuCategories;
