// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="container-fluid bg-white shadow d-flex justify-content-evenly align-items-center px-5 py-4 sticky-top">
      <img className="mx-5" src={logo} alt="" width="135" height="41" />
      <div className="input-group mx-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search in Daraz"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn search-btn fw-bold"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      {/* <span className="position-relative mx-5">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-daraz-primary">
          0
        </span>
        <FontAwesomeIcon
          className="fs-3  text-secondary"
          icon={faCartShopping}
        />
      </span> */}
    </header>
  );
};

export default Header;
