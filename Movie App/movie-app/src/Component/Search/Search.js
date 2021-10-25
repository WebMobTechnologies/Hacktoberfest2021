import React, { useEffect, useState } from "react";
import "./Search.scss";

export default function Search(props) {
 
    return(
        <>
         <div>
      <div className="container">
        <div>
         
          <div className="d-flex row">
            <div className="card-body">
              <form className="row g-4">
                <div className="col-md-4 col-sm-12 col-lg-4">
                  <div className="search">
                    <input
                      type="text"
                      className="form-control inpt-search"
                      placeholder="Search  movies"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        
      </div>
    </div>
        </>
    )
}
