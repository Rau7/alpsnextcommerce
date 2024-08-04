import React from "react";
import ProductsForOwnPage from "@/components/Products";

const ProductsPage = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font text-center">
      <h3 className="text-white text-3xl font-medium mb-4 pt-4">Products</h3>
      <ProductsForOwnPage />
    </section>
  );
};

export default ProductsPage;
