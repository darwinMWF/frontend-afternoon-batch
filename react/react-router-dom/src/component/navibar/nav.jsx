import { NavLink } from "react-router-dom";
import "./nav.css"

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle">
      <div className="container">
        <a className="navbar-brand" href="/">
          BlogPost
        </a>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            // tabIndex={-1}
            id="offcanvasNavbar"
            // aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 nav-underline">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/register">
                    register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/createpost">
                    createPost
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
