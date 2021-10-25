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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white fs-5"
                      aria-current="page"
                    >
                      <NavLink  to="/home">Home</NavLink>
                      
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white fs-5"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Movies
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item">
                        <NavLink  to="/TopRatedMovies" style={{color:'black'}}>TopRated Movies</NavLink>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                        <NavLink  to="/UpcomingMovies" style={{color:'black'}}>Upcoming Movies</NavLink>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                        <NavLink  to="/PopularMovies" style={{color:'black'}}>Popular Movies</NavLink>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                
              </div>
              
            </div>
          </nav>
       
  );
}
