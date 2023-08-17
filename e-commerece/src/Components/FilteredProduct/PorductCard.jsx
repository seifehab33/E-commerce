import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import SingleProduct from "./SingleProduct";
import { singleProudct } from "../../features/Slices/ProductSlice";
function PorductCard({ id, name, text, img, price, colors }) {
  const disatch = useDispatch();
  const { type } = useParams();
  const handleSingleProduct = (id) => {
    disatch(singleProudct(id));
  };
  return (
    <div>
      <Link to={`/filteredProducts/${type}/` + id}>
        <Card className="mt-6 w-69" onClick={() => handleSingleProduct(id)}>
          <CardHeader color="blue-gray" className="relative h-96">
            <img src={img} alt="imag2" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {name}
            </Typography>
            <Typography>{text}</Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">{price} $</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              {colors.map((color, index) => {
                return (
                  <i
                    className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></i>
                );
              })}
            </Typography>
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

export default PorductCard;
