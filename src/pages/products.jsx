import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useState } from "react";

export const Products = () => {
  const items = useSelector((state) => state.product.items);
  // const cart = useSelector((state) => state.cart.items)
  const [showAlert, setShowAlert] = useState(false)
  const handleAdd = (product) => {
    dispatch(addToCart(product))
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 1000);
  }
  
  const dispatch = useDispatch()
  return (
    <div className="container mx-auto mt-15 px-4 ">
      <div className="row">
        {showAlert&&(
          <div className="alert alert-success mt-2">Product added successfully!</div>
        )}
        {items &&
          items.map((product) => (
            <div className="card col-md" key={product.id}>
              <img src={product.image} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className=" ">
                  {product.name}
                </h5>
                <p className="fw-light">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => handleAdd(product)} className="btn btn-sm btn-primary cursor-pointer px-2 rounded-sm border">
                    add to cart
                  </button>
                  <p className="text-md fw-bold ">
                    {product.price}$
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
