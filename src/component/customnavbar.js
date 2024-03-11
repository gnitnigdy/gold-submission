import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-md py-4" id="mainNavbar">
      <div className="container-fluid custom-navbar-margin p-md-0">
        <a className="navbar-brand" id="bcrNavbarBrand" href="#section1">
          Text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title ps-3 mt-4" id="offcanvasNavbarLabel">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close me-3"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-md-center">
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#our-services-section"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#why-us-section">
                  Why Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#testimonials">
                  Testimony
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#faqs">
                  FAQ
                </a>
              </li>
              <li className="nav-item mx-3">
                <button
                  className="btn btn-success btn-nav-custom"
                  style={{ width: "100%" }}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
