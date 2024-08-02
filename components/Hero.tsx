"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const images = [
    "/BannerNGO4.jpg",
    "/BannerNGO.jpg",
    "/BannerNGO5.jpg",
  ];

  return (
    <div className="relative h-screen w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className="absolute inset-0"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-screen w-full">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt={`Slide ${index + 1}`}
              className="absolute inset-0"
            />
          </div>
        ))}
      </Carousel>
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center px-4 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-4xl text-orange-400 font-bold mb-3 md:text-6xl lg:text-7xl font-sans">
          SUPPORT OUR CAUSE
        </h1>
        <p className="text-white text-sm mb-6 md:text-lg lg:text-xl max-w-2xl font-serif">
          Join us in our mission to make the world a better place. Your support
          can change lives and bring hope to those in need.
        </p>
        <div className="flex flex-col md:flex-row md:gap-x-3">
          <button className="bg-orange-400 text-white font-bold px-8 py-3 mb-3 md:mb-0 md:mr-3 rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
            BUY NOW
          </button>
          <button className="bg-transparent border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105">
            LEARN MORE
          </button>
        </div>
        <div className="text-white text-sm mt-6 max-w-xl font-serif">
          <p className="mb-2">
            Our NGO is dedicated to improving lives through various initiatives,
            including education, healthcare, and community development. By
            supporting us, you&apos;re helping to create sustainable change and bring
            smiles to many faces.
          </p>
          <p>
            Together, we can build a brighter future. Every contribution makes a
            difference, no matter how small.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
