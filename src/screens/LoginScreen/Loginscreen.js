import React from "react";
import { Link } from "react-router-dom";
import "../styles/Loginscreen.css";
function Loginscreen() {
  return (
    <div class="container main-container">
      <div class="card main-card p-3 mb-2 w-100 mx-1">
        <div class="card-body">
          <div class="d-flex justify-content-center flex-row align-items-center first-div">
            <h4 class="mb-3 font-weight-bolder">
              MERO <span class=" font-weight-bolder text-danger">HOSTEL</span>
            </h4>
          </div>
          <div class="d-flex align-content-center flex-row">
            <i class="fa fa-user user-logo"></i>
            <p class="form-label email-paragraph">Email</p>
          </div>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="email"
          />
          <div class="d-flex align-items-center flex-row">
            <i class="fa fa-lock mb-1 user-logo"></i>
            <p class="form-label pass-paragraph ">Password</p>
          </div>
          <input type="password" className="form-control mb-2" placeholder="" />
          <div class="form-check justify-content-center d-flex flex-row mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label mx-2" for="flexCheckDefault">
              Remember me
            </label>
          </div>
        <Link to="/home">  <button className="btn btn-success w-100" >Login</button></Link>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <label className="below-label">
          &copy;Mero Hostel. All Rights Reserved
        </label>
      </div>
      <div class="d-flex justify-content-center">
        <label className="below-label">
          Create a New Account? <a href="/registerme">Register Here</a>
        </label>
      </div>
    </div>
  );
}

export default Loginscreen;
