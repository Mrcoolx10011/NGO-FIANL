"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IntroducingSection = () => {
  const products = [
    { id: 1, src: "/ProductNGO1.png" },
    { id: 2, src: "/ProductNGO2.png" },
    { id: 3, src: "/ProductNGO3.png" },
    { id: 4, src: "/ProductNGO4.jpg" },
    { id: 5, src: "/ProductNGO5.jpg" },
    { id: 6, src: "/ProductNGO6.jpg" },
    { id: 7, src: "/ProductNGO7.jpg" },
    { id: 8, src: "/ProductNGO8.jpg" },
  ];

  return (
    <div className="pt-20 bg-gradient-to-r from-white">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-cyan-600 text-6xl font-extrabold text-center mb-2 max-md:text-5xl max-[480px]:text-3xl font-sans">
          INTRODUCING <span className="text-black">NGO</span><span className="text-yellow-500">PRODUCTS</span>
        </h2>
        <div>
          <p className="text-cyan-600 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base font-serif">
            Support our mission by purchasing these products.
          </p>
          <p className="text-cyan-600 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base font-serif">
            All proceeds go towards our cause.
          </p>
          <Link href="/shop" passHref>
            <button className="block text-white bg-orange-500 font-bold px-12 py-3 text-xl hover:bg-yellow-500 w-96 mt-2 max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-full">
              SHOP NOW
            </button>
          </Link>
        </div>

        <div className="w-full mt-10">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            className="w-full"
            centerMode={true}
            centerSlidePercentage={33.33} // Show three slides at a time
          >
            {products.map((product) => (
              <div key={product.id} className="flex justify-center">
                <div className="max-w-xs bg-white shadow-black rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <div className="w-72 h-72">
                    <Image
                      src={product.src}
                      width={288}
                      height={288}
                      alt={`Product ${product.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-black text-2xl font-bold mt-3 font-mono">
                      Product {product.id}
                    </h3>
                    <p className="text-cyan-800 text-lg font-sans">
                      Description of product {product.id}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mt-10 max-w-2xl text-center mb-5">
          <p className="text-2xl font-serif text-black">
            Our products are crafted with love and dedication. Each purchase you make contributes directly to our cause, helping us provide essential services and support to those in need.
          </p>
          <p className="text-orange-600 text-1xl font-serif mt-4">
            From handcrafted items to sustainable goods, our product range is diverse and ethically produced. Your support not only brings joy to your life but also to the lives of many others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
