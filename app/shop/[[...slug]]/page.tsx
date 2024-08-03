"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  Filters,
  Pagination,
  Products,
  SortBy,
} from "@/components";
import NgoCard from "@/components/NgoCard";

type ShopPageProps = {
  params: {
    slug: string[];
  };
};

// improve readability of category text, for example category text "smart-watches" will be "smart watches"
const improveCategoryText = (text: string): string => {
  return text.split("-").join(" ");
};

const ngoData = {
  id: 1,
  name: "NGO",
  logoUrl: "https://cdn.sanity.io/images/kts928pd/production/03c5e1f41a08f714c252b6763457b843f8b8bc31-731x731.png", // Replace with the actual URL of the logo
  description: "The term NGO is generally accepted to refer to usually non-profit, private organizations that operate outside of government control. Some NGOs rely primarily on volunteers while others support a paid staff. The World Bank identifies two broad groups of NGOs",
  contact: {
    type: "Email",
    details: "contact@ngo1.org",
    phoneNumber: "7096210256",
  },
};

const ShopPage = ({ params }: ShopPageProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const slug = params.slug;

  return (
    <div className="text-black bg-white min-h-screen flex flex-col">
      <div className="flex-1">
        <NgoCard ngo={ngoData} />
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <button
          className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <h2 className="text-2xl font-bold max-sm:text-xl max-[400px]:text-lg uppercase">
          {slug && slug.length > 0
            ? improveCategoryText(slug[0])
            : "All products"}
        </h2>
        <SortBy />
      </div>
      {showFilters && (
        <div className="bg-gray-100 p-4">
          <Filters />
        </div>
      )}
      <div className="divider"></div>
      <div className="flex-1">
        <Products slug={slug} />
      </div>
      <Pagination />
    </div>
  );
};

export default ShopPage;
