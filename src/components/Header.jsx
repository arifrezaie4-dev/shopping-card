import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive ? "nav-link active text-primary":"nav-link active"}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive ? "nav-link active text-primary":"nav-link active"}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link p-1 me-3nav-link p-1 me-3"
                  aria-current="page"
                  to="./cart"
                >
                  <span className="badge rounded-pill bg-primary me-1">{cartItems.length}</span>
                  <i className="bi bi-basket-fill fs-4"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
