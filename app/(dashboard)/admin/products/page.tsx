"use client";
import {
  CustomButton,
  DashboardSidebar,
} from "@/components";
import DashboardProductTable from "@/components/DashboardProductTable";
import React from "react";

const DashboardProducts = () => {
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4">
      <DashboardSidebar />
        <DashboardProductTable />
    </div>
  );
};

export default DashboardProducts;
