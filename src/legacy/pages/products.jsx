import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { addToCart } from "../../lib/features/cart/cartSlice";

export const Products = () => {
  const items = useAppSelector((state) => state.product.items);
  // const cart = useSelector((state) => state.cart.items)
  const handleAdd = (product) => {
    dispatch(addToCart(product))
  }
  
  const dispatch = useAppDispatch()
  return (
    <div className="container mx-auto mt-15 px-4 ">
      <div className="row">
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
