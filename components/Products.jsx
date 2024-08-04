"use client";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

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
          console.log(data);
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

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/420x260"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/421x261"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              Shooting Stars
            </h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/422x262"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              Neptune
            </h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/423x263"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              The 400 Blows
            </h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/424x264"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              The Catalyzer
            </h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/425x265"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              Shooting Stars
            </h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/427x267"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              Neptune
            </h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="https://dummyimage.com/428x268"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              CATEGORY
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              The 400 Blows
            </h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsForOwnPage;
