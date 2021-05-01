import React from "react";
import "../../styles/Hostelfind.css"
function Hostelfind() {
  return (
    <div className="container card  mb-4 position-absolute hostel-card  ">
      <div className="row p-3 main-row ">
        <div className="col-md-4 col-ms-12 border-none ">
        <select className="form-control text-muted select-me" name="cars" id="cars" >
            <option >Select City</option>
            <option value="1">Kamalpokhari</option>
            <option value="2">Putalisadak</option>
            <option value="3">Naxal</option>
            </select>
        </div>
        <div className="col-md-4 col-ms-12 select-me">
            <select className="form-control text-muted select-me" name="cars" id="cars" >
            <option >Select No. of Sitters Room</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>     
        </div>
        <div className="col-md-4 col-ms-12 d-flex flex-row align-items-center">
        <select className="form-control text-muted select-me" name="cars" id="cars" >
            <option >Select No. of People</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>    
          <button className="btn btn-success mx-2  w-50 select-me">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hostelfind;
