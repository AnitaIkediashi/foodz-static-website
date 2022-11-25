import React, { useState } from "react";

const Accordion = ({
  items: { id, topic, firstLink, secondLink, thirdLink, fourthLink },
}) => {
  const [activeAccordion, setActiveAccordion] = useState(false);

  return (
    <div key={id} onClick={() => setActiveAccordion(!activeAccordion)}>
      <div className="flex justify-between items-center">
        <h4 className="text-black font-medium">{topic}</h4>
        <button className="">
          {activeAccordion ? (
            <i className="ri-arrow-down-s-line text-black"></i>
          ) : (
            <i className="ri-arrow-right-s-line text-black"></i>
          )}
        </button>
      </div>
      {activeAccordion && (
        <ul className="mt-5">
          <li className="mb-4 text-color-black-100">{firstLink}</li>
          <li className="mb-4 text-color-black-100">{secondLink}</li>
          <li className="mb-4 text-color-black-100">{thirdLink}</li>
          <li className="mb-2 text-color-black-100">{fourthLink}</li>
        </ul>
      )}
    </div>
  );
};

export default Accordion;
