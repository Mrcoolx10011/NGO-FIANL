import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import ProductItemRating from "./ProductItemRating";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <Link href={`/product/${product.slug}`}>
      <div className="w-72 h-72">
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width="300"
          height="300"
          className="w-full h-full object-cover rounded-lg "
          alt={product?.title}
        />
        </div>
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={`text-xl font-semibold uppercase transition-colors duration-300 ${
          color === "black" ? "text-gray-900 hover:text-gray-700" : "text-gray-800 hover:text-gray-600"
        }`}
      >
        {product.title}
      </Link>
      <p
        className={`text-lg font-semibold transition-colors duration-300 ${
          color === "black" ? "text-gray-900 hover:text-gray-700" : "text-gray-800 hover:text-gray-600"
        }`}
      >
        ${product.price}
      </p>

      <ProductItemRating productRating={product?.rating} />

      <Link
        href={`/product/${product?.slug}`}
        className="flex justify-center items-center w-full py-2   bg-orange-500 text-white font-bold uppercase rounded-lg transition-colors duration-300 hover:bg-cyan-700 focus:outline-none focus:ring-2"
      >
        <FaShoppingCart className="mr-2" />
        View product
      </Link>
    </div>
  );
};

export default ProductItem;
