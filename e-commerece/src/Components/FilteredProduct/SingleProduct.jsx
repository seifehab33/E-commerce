import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addTocart } from "../../features/Slices/CartSlice";

function SingleProduct() {
  const product = useSelector((state) => state.products.singleProudct);
  const { id } = useParams();
  const productSize = product[0].size ? product[0].size[0] : "";
  const dispatch = useDispatch();
  const [size, setSize] = useState(productSize);

  return (
    <>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-around items-center py-10 w-full"
            >
              <div className="pl-44 ">
                <img src={item.img} className="h-[850px] rounded-lg " alt="" />
              </div>
              <div className="grow-[8]">
                <div className="max-w-lg ml-4">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-900 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    50% OFF
                  </p>
                  <p className="text-orange-900 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <p className="pb-4">
                    <div>
                      <label
                        for="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        name="size"
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.size.map((item, index) => {
                          return (
                            <option value={item} key={index}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </p>
                  <Tooltip content="Add To Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className=""
                      onClick={() =>
                        dispatch(
                          addTocart({
                            id: item.id,
                            price: item.price,
                            size: size,
                            amount: 1,
                            totalPrice: item.price,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                          })
                        )
                      }
                    >
                      Add To Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default SingleProduct;
