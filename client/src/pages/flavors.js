import { useEffect, useMemo, useState } from "react";

const Flavours = () => {
  const [items, setItems] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/flavours")
      .then((res) => res.json())
      .then((json) => setItems(json.data || []))
      .catch(console.error);
  }, []);

  // Get unique flavours dynamically
  const flavours = useMemo(() => {
    return [...new Set(items.map((i) => i.flavour).filter(Boolean))];
  }, [items]);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (selectedFlavours.length === 0) return items;
    return items.filter((item) =>
      selectedFlavours.includes(item.flavour)
    );
  }, [items, selectedFlavours]);

  const toggleFlavour = (flavour) => {
    setSelectedFlavours((prev) =>
      prev.includes(flavour)
        ? prev.filter((f) => f !== flavour)
        : [...prev, flavour]
    );
  };

  return (
    <div className="py-28 flex justify-center w-full bg-white">
      <div className="gap-8 max-w-[1140px] flex ">
        {/* Sidebar Filter */}
      <aside className="w-64 shrink-0 border rounded-lg p-6 h-fit sticky top-24">
        <h2 className="font-semibold text-lg mb-4">Filter by Flavour</h2>

        {flavours.length === 0 && (
          <p className="text-sm text-gray-500">No flavours available</p>
        )}

        <div className="space-y-3">
          {flavours.map((flavour) => (
            <label
              key={flavour}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFlavours.includes(flavour)}
                onChange={() => toggleFlavour(flavour)}
              />
              <span className="capitalize">{flavour}</span>
            </label>
          ))}
        </div>

        {selectedFlavours.length > 0 && (
          <button
            onClick={() => setSelectedFlavours([])}
            className="mt-4 text-sm text-red-600 underline"
          >
            Clear filters
          </button>
        )}
      </aside>

      {/* Product Grid */}
      <section className="flex-1">
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            No ice creams match your filter 🍦
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">
                    {item.flavour}
                  </p>

                  <div className="flex justify-between items-center gap-4">
                    <span className="font-bold">Rs. {item.price}</span>
                    <button className="px-3 py-1 text-sm bg-black text-white rounded">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      </div>
    </div>
  );
};

export default Flavours;
