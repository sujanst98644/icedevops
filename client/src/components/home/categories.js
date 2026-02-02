import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const data = [
    { img: "100ice.png", type: "100ml ICE-CREAM" },
    { img: "500ice.svg", type: "500ml ICE-CREAM" },
    { img: "ice-lolly.svg", type: "ICE-CREAM BARS & OTHER" },
    { img: "1000ice.png", type: "1000ml ICE-CREAM" },
    { img: "pice.png", type: "PREMIUM 1000ml ICE-CREAM" },
    { img: "tub.png", type: "ICE-CREAM TUB" },
  ];

  const categoryFlavourMap = {
    "100ml ICE-CREAM": ["vanilla", "chocolate"],
    "500ml ICE-CREAM": ["strawberry"],
    "ICE-CREAM BARS & OTHER": ["mango"],
    "1000ml ICE-CREAM": ["butterscotch"],
    "PREMIUM 1000ml ICE-CREAM": ["pistachio"],
    "ICE-CREAM TUB": ["vanilla", "chocolate", "strawberry"],
  };

  const handleClick = (type) => {
    const flavours = categoryFlavourMap[type];
    if (!flavours) return;

    // pass first flavour as default filter
    navigate(`/flavors?flavour=${flavours[0]}`);
  };

  return (
    <div className="py-10 space-y-10">
      <h2 className="text-center">CATEGORIES</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.type)}
            className="cursor-pointer bg-[#FCFAFA] flex flex-col h-44 w-44 justify-center items-center rounded-xl shadow-xl p-3 text-center space-y-5 hover:scale-105 transition"
          >
            <img src={item.img} alt="img" className="h-1/3 w-1/3" />
            <h5 className="text-sm font-medium">{item.type}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
