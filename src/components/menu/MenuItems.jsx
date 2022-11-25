import React from "react";
import MenuButtons from "./MenuButtons";
import MenuCategories from "./MenuCategories";


const MenuItems = () => {
  return (
    <>
      <section className="py-40 max-w-[1440px] mx-auto lg:px-[5%] px-8">
        <div className="max-w-[48.1rem] mx-auto flex flex-col gap-2 text-center mb-10">
          <h2 className="md:text-5xl text-[2rem] text-color-black-200 overflow-y-hidden">
            Get <span className="text-color-green-200">Special</span> Meal
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-color-black-100">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>
        </div>

        {/* buttons */}
        <MenuButtons />
        
        <div>
          <MenuCategories />
        </div>
      </section>
    </>
  );
};

export default MenuItems;
