import Link from "next/link";
import Image from "next/image";
import React, { type ReactNode } from "react";
import { HiChevronRight } from "react-icons/hi";

interface CategoryItemProps {
  children: ReactNode;
  title: string;
  href: string;
}

const CategoryItem = ({ title, children, href }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-y-2 cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <div className="relative w-full h-48 overflow-hidden">
          {children}
        </div>
        <div className="flex items-center justify-between w-full p-4 bg-gray-50">
          <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
          <HiChevronRight className="text-gray-500 transition-transform duration-300 transform hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
