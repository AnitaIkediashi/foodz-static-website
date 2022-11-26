import React, { useState } from "react";
import { slides } from "../../data";
import MenuButtons from "./MenuButtons";
import MenuCategories from "./MenuCategories";
import {motion, AnimatePresence} from 'framer-motion'

const allCategories = [...new Set(slides.map(item => item.category))]
// console.log(allCategories);

const MenuItems = () => {
  const [menuItem, setMenuItem] = useState(slides);
  const [buttons, setButtons] = useState(allCategories);
  const [selected, setSelected] = useState("")

  const filter = (catItem) => {
    const filterData = slides.filter(
      (currentItem) => currentItem.category === catItem
    );
    setMenuItem(filterData);

  };

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
        <MenuButtons filter={filter} buttons={buttons} selected={selected} setSelected={setSelected} />

        <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <AnimatePresence>
            {menuItem?.map((item, idx) => {
              return <MenuCategories {...item} key={idx} />;
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
};

export default MenuItems;
