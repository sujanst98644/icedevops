import React from "react";

const Categories = () => {
  const data = [
    {
      img: "100ice.png",
      type: "100ml ICE-CREAM",
    },
    {
      img: "500ice.svg",
      type: "500ml ICE-CREAM",
    },
    {
      img: "ice-lolly.svg",
      type: "ICE-CREAM BARS & OTHER",
    },
    {
      img: "1000ice.png",
      type: "1000ml ICE-CREAM",
    },

    {
      img: "pice.png",
      type: "PREMIUM 1000ml ICE-CREAM",
    },
    {
      img: "tub.png",
      type: "ICE-CREAM TUB",
    },
  ];
  return (
    <div className="py-10">
      <h2>CATEGORIES</h2>
      <div className="text-black grid grid-cols-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#FCFAFA] flex flex-col h-44 w-44 justify-center items-center rounded-xl shadow-xl p-3 text-center m-5 space-y-5"
          >
            <img src={item.img} alt="img" className="h-1/3 w-1/3" />
            <h5>{item.type}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
