import React from "react";

const BannerText = () => {
  return (
    <section className="py-12 text-center">
      <div className="container">
        <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
          <p className="font-bold text-md md:text-3xl max-w-[800px] mx-auto leading-normal">
            Every sip of Fanta turns up the fun—refresh your day with bold
            flavors and bubbly excitement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerText;
