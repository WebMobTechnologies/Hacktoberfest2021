import React from "react";
import "./Nav.scss";
import {
  NavLink
} from "react-router-dom";

export default function Nav() {
  return (
          
    <nav className="navbar navbar-expand-lg navbar-light fs-6 ms-0 me-0">
           
    <div className="container-fluid d-flex justify-content-around ms-0 ms-md-3">
    <i class="fa fa-chevron-circle-left icon-arrow fs-4" aria-hidden="true"></i>
      <a
        className="navbar-brand fw-bolder fs-2 me-5 text-white"
    
      >
         
         <NavLink  to="/home" className="text-blue ">Movies 2016</NavLink>
         
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
            color: 'rgb(226, 204, 204)',
            borderColor: 'rgb(226, 204, 204)',
            backgroundColor: 'rgb(226, 204, 204)',
          }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      
    </div>
  </nav>
       
  );
}
