"use client";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";

const   CategoryMenu = () => {
  const Images = [
    { id: 1, src: "/NGo1.jpg" },
    { id: 2, src: "/NGo2.png" },
    { id: 3, src: "/NGo3.png" },
    { id: 4, src: "/NGo4.jpg" },
    { id: 5, src: "/NGO5.png" },
  ];
  
  const categoriesData = [
    { id: 1, name: "Education", imageId: 1 },
    { id: 2, name: "Healthcare", imageId: 2 },
    { id: 3, name: "Environment", imageId: 3 },
    { id: 4, name: "Social Welfare", imageId: 4 },
    { id: 5, name: "Arts", imageId: 5 },
  ];
  const [categories, setCategories] = useState<Category[]>([]);

  // getting all categories to be displayed on the all categories page
  useEffect(() => {
    fetch("https://ngo-server-production.up.railway.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const categoriesWithImages = data.map((category: { imageId: number; }) => {
          const image = Images.find((img) => img.id === category.imageId);
          return {
            ...category,
            image: image ? image.src : "/default-image.jpg" 
          };
        });
    
        setCategories(categoriesWithImages);
        console.log(categoriesWithImages)
      });
  }, []);
  console.log(categories)


  return (
    <div className="py-10 bg-gradient-to-l from-white">
      <h2 className="text-cyan-600 text-5xl font-extrabold text-center mb-2 max-md:text-5xl max-[480px]:text-3xl">
        BROWSE <span className="text-orange-600">NGO&apos;S</span>
      </h2>
      <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
      {categories.map((item) => (
          <CategoryItem title={item.name} key={item.id} href={'/shop/' + item.name}>
            <Image src={item.image} layout="fill" objectFit="cover" alt={item.name} />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
