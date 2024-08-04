"use client";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import ProductCardPrd from "./ProductCardPrd";

const ProductsForOwnPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `/api/products?page=${page}&pageSize=${pageSize}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setProducts(data.products);
          setTotalItems(data.total);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, pageSize]);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <ProductCardPrd key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsForOwnPage;
