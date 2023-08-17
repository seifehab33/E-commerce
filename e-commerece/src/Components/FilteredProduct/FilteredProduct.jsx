import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import PorductCard from "./PorductCard";
function FilteredProduct() {
  const filterproduct = useSelector((state) => state.products.filteredProducts);
  const { type } = useParams();
  return (
    <>
      <div className="pt-16">
        <div className="pt-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal ml-4 leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto justify-items-center py-8">
          {filterproduct
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
                  <PorductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default FilteredProduct;
