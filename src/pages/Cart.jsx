import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeCart, removeFromCart } from "../Redux/cartSlice";
import { Link } from "react-router";

export const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  if (items.length == 0) {
    return (
      <div className="container" style={{ marginTop: "180px" }}>
        <div className="row justify-content-center text-center">
          <i className="bi bi-bag-x-fill fs-1"></i>
          <h1 className="text-l">Cart is Empty</h1>
          <Link
            to="/products"
            className="btn btn-primary "
            style={{ width: "100px" }}
          >
            Product
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row g-3 align-items-center">
        <div className="table-responsive-md">
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">SubTotal</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {items.map((product) => (
                <tr key={product.id} className="align-items-center col-md-12">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="row">
                    <div className="d-flex col-md-12 gap-x-4">
                      <img
                        className="img-fluid"
                        style={{ width: "80px", height: "80px" }}
                        src={product.image}
                        alt=""
                      />
                      <div className="mx-3 mt-2">
                        <h5 className="fw-bold" style={{ fontSize: "16px" }}>
                          {product.name}
                        </h5>
                        <p>{product.description}</p>
                      </div>
                    </div>
                    </div>
                  </td>
                <td className="px-3 py-2 whitespace-nowrap mt-5">
                    {product.price}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="d-flex align-items-center gx-3">
                      <button
                        onClick={() => dispatch(decrement(product.id))}
                        className="btn btn-secondary btn-sm cursor-pointer rounded-sm border border-2 px-2 py-0.25 text-lg me-2"
                      >
                        -
                      </button>
                      <span className="d-flex align-items-center">
                        {product.qty}
                      </span>
                      <button
                        onClick={() => dispatch(increment(product.id))}
                        className="btn btn-secondary btn-sm cursor-pointer rounded-sm border border-2 px-2 py-0.25 text-lgn ms-2"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {product.price * product.qty}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="cursor-pointer btn btn-sm rounded-sm border border-danger bg-danger px-3 py-1 text-sm text-white hover:bg-transparent hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="d-flex justify-content-between">
          <button onClick={() => dispatch(removeCart())} className="btn btn-dark text-white">Clear Cart</button>
          <h3>
            Total:
            {items.reduce((total, product) => {
              return total + product.price * product.qty;
            }, 0)}
            $
          </h3>
        </div>
      </div>
    </div>
  );
};
