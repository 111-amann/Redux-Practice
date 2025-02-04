import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProducts } from "../store/actions/ProductActions";
import { productSlice } from "../store/reducers/ProductReducer";

function Products() {
  const {products} = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);
  return (
    <div className="w-full h-96 bg-zinc-900 p-10">
      <div className="h-fit bg-zinc-700 text-zinc-300 p-5">
        <h1 className="text-2xl font-bold text-white mb-1">All Products</h1>
        <ul>
          {products && products.map((item, index) => (
            <li key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
