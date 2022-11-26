import React, { useState } from "react";
import menuImage from '../../images/Tokpokki2.png'


const MenuButtons = ({buttons, filter, selected, setSelected}) => {

  const [activeButton, setActiveButton] = useState(0);
  const [isActiveButton, setIsActiveButton] = useState(false)
  
  return (
    <>
      <section className="lg:max-w-[42rem] hidden mx-auto lg:flex flex-wrap gap-9 p-[6px] items-center justify-between mb-5">
        {buttons.map((item, index) => {
          return (
            <div
              className={`flex gap-1 items-center px-3 py-1 rounded ${
                activeButton === index ? "bg-color-green-200" : ""
              }`}
              key={index}
              onClick={() => {
                filter(item);
                setActiveButton(index);
              }}
            >
              <img
                src={menuImage}
                alt=""
                className="w-[33px] h-[33px] object-cover"
              />
              <button type="button" className="text-[#353945]">
                {item}
              </button>
            </div>
          );
        })}
      </section>

      {/* for mobile view */}
      <section className="max-w-[42rem] lg:hidden mx-auto p-[6px] mb-5 relative">
        <div
          className="mb-2 flex justify-between items-center py-3 px-2 bg-color-green-200 rounded cursor-pointer"
          onClick={() => setIsActiveButton(!isActiveButton)}
        >
          {selected ? (
            selected
          ) : (
            <div className="flex gap-1 ">
              <img
                src={menuImage}
                alt=""
                className="w-[33px] h-[33px] object-cover"
              />
              <button type="button" className="text-color-body">
                Korean Food
              </button>
            </div>
          )}
          {isActiveButton ? (
            <i className="ri-arrow-drop-up-line ri-xl overflow-y-hidden text-color-body"></i>
          ) : (
            <i className="ri-arrow-drop-down-line ri-xl overflow-y-hidden text-color-body"></i>
          )}
        </div>
        {buttons.map((val, i) => {
          return (
            isActiveButton && (
              <div
                className="flex gap-1 items-center px-3 py-1 rounded mb-3 hover:bg-color-green-200 duration-300 ease-in"
                key={i}
                onClick={() => {
                  filter(val);
                  setIsActiveButton(false);
                  setSelected(val);
                }}
              >
                <img
                  src={menuImage}
                  alt=""
                  className="w-[33px] h-[33px] object-cover"
                />
                <button
                  type="button"
                  className="text-[#353945] hover:text-color-body"
                >
                  {val}
                </button>
              </div>
            )
          );
        })}
      </section>
    </>
  );
};

export default MenuButtons;
