import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

function ProductSection() {
  return (
    <>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md mt-3 mb-3">
        <h2 className="text-red-600  text-center text-lg font-inter font-bold tracking-normal leading-none">
          Summer T-Shirt Sale 20%
        </h2>
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center py-8 items-center gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                img={product.img}
                name={product.name}
                text={product.text}
                size={product.size}
                price={product.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductSection;
