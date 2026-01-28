import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] py-28 text-[#283646]">
      <div className="max-w-[1140px] mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-semibold mb-8">
          Home / <span className="text-slate-500">Cart</span>
        </h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Shopping Cart</h2>

            {/* CART ITEM */}
            <div className="flex gap-6 border-b pb-6">

              {/* Image */}
              <div className="w-28 h-36 bg-slate-200 rounded-lg" />

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">CHOCOBAR</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Chocolate cover with vanilla chocolate bliss
                </p>

                <p className="mt-3 font-medium">₹ 12.00</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-sm">Qty</span>
                  <select className="border rounded-md px-2 py-1 text-sm">
                    {[...Array(10)].map((_, i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Remove */}
              <button className="h-12 w-20 text-sm text-red-500 hover:underline">
                Remove
              </button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 120.00</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>₹ 120.00</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-[#283646] text-white py-3 rounded-lg hover:bg-[#1f2b38] transition">
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* FAVOURITES / RECOMMENDATIONS */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-2">Favourites</h2>
          <p className="text-sm text-slate-500">
            You have no saved favourites.
          </p>

          <h3 className="mt-8 text-lg font-semibold">
            You Might Also Like
          </h3>

          <div className="flex items-center gap-6 mt-4">
            <div className="w-32 h-32 bg-slate-200 rounded-lg" />
            <div>
              <p className="font-medium">
                Vanilla with Walnut Flavor
              </p>
              <p className="mt-2 font-semibold">₹ 12.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
