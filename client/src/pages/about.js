import React from "react";

const About = () => {
  return (
    <div className="bg-[#F5F7FA] text-[#283646]">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

          {/* Image */}
          <div className="relative h-[500px]">
            <img
              src="art-aesthetic-tote-bag.jpg"
              alt="Ice cream factory"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-6">
              ABOUT US
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Founded in 1920, our ice cream factory has been delivering
              delicious and innovative flavors for over a century.
              From humble beginnings to becoming a trusted household
              name, our passion for quality and craftsmanship has never
              changed.
            </p>
          </div>

        </div>
      </section>

      {/* HISTORY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our History</h2>
          <p className="text-lg text-slate-600 mb-10">
            Since 1920, we have focused on blending tradition with
            innovation. Every recipe is crafted with care, using
            premium ingredients and time-tested methods.
          </p>

          <img
            src="/path/to/history-photo.jpg"
            alt="History of the factory"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="italic text-slate-600">
                “The best ice cream I’ve ever had. Every flavor feels
                handcrafted and special.”
              </p>
              <p className="mt-4 text-right font-medium">
                — Happy Customer
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="italic text-slate-600">
                “A weekly ritual for me. Their consistency and quality
                are unmatched.”
              </p>
              <p className="mt-4 text-right font-medium">
                — Ice Cream Lover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUN FACT */}
      <section className="py-20 bg-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Fun Fact</h2>
          <p className="text-lg text-slate-600">
            Our factory produces over <strong>1 million gallons</strong>{" "}
            of ice cream every year — enough to fill more than
            <strong> one Olympic-sized swimming pool</strong>.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
