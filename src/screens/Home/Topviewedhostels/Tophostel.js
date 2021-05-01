import React from "react";
import "../../styles/Tophostel.css";
function Tophostel() {
  return (
    <div className="container">
      <h1
        className="form-label text-center text-capitalize mt-3"
        style={{
          fontFamily: "monospace",
        }}
      >
        TOP VIEWED HOSTELS
      </h1>
      <div className="row p-3">
        <div className="col-sm-12 mb-3 col-md-4">
          <div class="card image-card">
            <img
              class="card-img-top"
              src="https://scontent.fktm12-1.fna.fbcdn.net/v/t1.18169-9/12963667_777261285708812_6468538529797852453_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=u7sJMNwjb3cAX-QGKM5&_nc_ht=scontent.fktm12-1.fna&oh=2c5b09490caa3919772c835bec3ee3d6&oe=60B3F530"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-text text-center">
               LUMBINI BOYS HOSTEL
              </h4>
              <p class="card-text text-center">
               KAMALPOKHARI,KATHMANDU
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mb-3 col-md-4">
          <div class="card image-card">
            <img
              class="card-img-top"
              src="https://scontent.fktm12-1.fna.fbcdn.net/v/t31.18172-8/11237579_1661497197397532_5554989758274435391_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vdtU39Sq2iQAX-SoExZ&_nc_ht=scontent.fktm12-1.fna&oh=4440a4eb62f44ded5a092657b8f983c2&oe=60B2D8F5"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-text text-center">
               PRINCE BOYS HOSTEL
              </h4>
              <p class="card-text text-center">
               KAMALPOKHARI,KATHMANDU
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div class="card image-card">
            <img
              class="card-img-top"
              src="https://scontent.fktm12-1.fna.fbcdn.net/v/t1.6435-9/32566575_576384416077848_7847924673164607488_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UIjYySv8-aMAX-Vx74U&_nc_oc=AQnxG0qSYTdcL7k3HJwi7OH66VdRmPyNgUJjOFRZOLwTkp2KSgc4cBKzcJYXsIuV86Y&_nc_ht=scontent.fktm12-1.fna&oh=76d3d4cb190e0bdbcc7afadf652d9d63&oe=60B423B8"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-text text-center">
               AASTHA BOYS HOSTEL
              </h4>
              <p class="card-text text-center">
               DHOBIGHAT,LALITPUR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tophostel;
