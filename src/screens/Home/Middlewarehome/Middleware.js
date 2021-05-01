import React from 'react'
import Hostelfind from '../Searchhostel/Hostelfind'
import "../../styles/Middleware.css"
import "../../styles/Hostelfind.css"
function Middleware() {
    return (
      <div className="container-fluid mt-3">
        <div className="add">

        </div>
        <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
        {/* <h1 className="main-h1">FIND TOP HOSTELS</h1>
        <h1 className="main-secondh1">Nearby You</h1> */}
      <img src="https://s-ec.bstatic.com/images/hotel/max1280x900/996/99698672.jpg" className="d-block w-100 carousel-img " alt="image-1" style={{
          objectFit:"cover",
          height:"90vh"
      }} />
      <Hostelfind />
    </div>
    <div className="carousel-item position-relative">
      <img src="https://s-ec.bstatic.com/images/hotel/max1280x900/147/147929989.jpg" className="d-block w-100 carousel-img" alt="image-2" style={{
          objectFit:"cover",
          height:"90vh"
      }} />
      <Hostelfind />
    </div>
  </div>
</div>
</div>
    )
}

export default Middleware
