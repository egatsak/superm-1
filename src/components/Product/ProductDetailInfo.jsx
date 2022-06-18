import React from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/slices/cart";

import Button from "../Generic/Button";

export default function ProductDetailInfo({ product }) {
  const dispatch = useDispatch();
  const onProductAdd = () => {
    dispatch(addProduct(product));
  };
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd()}>${product.price}</Button>
    </>
  );
}
