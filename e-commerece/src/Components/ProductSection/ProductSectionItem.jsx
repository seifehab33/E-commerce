import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features/Slices/CartSlice";
// Adjust the path as needed

function ProductSectionItem({
  id,
  img,
  name,
  text,
  size,
  price,
  totalItemPrice,
}) {
  const dispatch = useDispatch();
  const totalprice = useSelector((state) => state.cart.totalPrice);
  const defaultsize = size[0];
  const handleAddToCart = () => {
    const productData = {
      id: id,
      price: price,
      size: defaultsize,
      amount: 1,
      totalPrice: totalprice,
      name: name,
      img: img,
      text: text,
    };
    try {
      dispatch(addProductToCart(productData));
    } catch (error) {
      console.error("Error Addding Item", error);
    }
  };
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={img} alt="card-image2" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography className="font-medium " textGradient color="gray">
          {text}
        </Typography>
        <div className="flex justify-between items-center pt-4">
          <Typography className="font-medium " textGradient color="gray">
            Size left: {defaultsize}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Add to Cart" placement="bottom">
          <Button
            onClick={handleAddToCart}
            size="lg"
            color="gray"
            variant="outlined"
            ripple={true}
          >
            Add To Cart
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

export default ProductSectionItem;
