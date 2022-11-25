import React from "react";

const Service = ({card: {image, title, desc}}) => {
  return (
    <article className="text-center py-10 px-9 max-w-96 h-full flex flex-col gap-2 shadow-[0px_10px_27px_rgba(53,53,53,0.05)] ">
      <div className="w-[7.5rem] h-[7.5rem] grid place-items-center rounded-full mx-auto shadow-[5px_9px_16px_rgba(0,0,0,0.04)]">
        <img src={image} alt="" />
      </div>
      <h3 className="text-color-black-200 lg:text-[1.75rem] text-xl overflow-y-hidden">{title}</h3>
      <p className="text-color-black-200 text-sm lg:text-base">{desc}</p>
    </article>
  );
};

export default Service;
