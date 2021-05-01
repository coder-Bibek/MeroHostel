import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top "
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="container">
        <a class="btn btn-outline-none mt-2">
          <i
            class="fa fa-bars border-0  text-black-50"
            role="button"
            aria-controls="offcanvasExample"
            aria-hidden="true"
            href="#offcanvasExample"
            data-bs-toggle="offcanvas"
            style={{
              fontSize: "2rem",
            }}
          ></i>
        </a>
        <h5
          className="font-weight-bolder mt-3 top-h5"
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.6rem",
          }}
        >
          <strong>MERO</strong>{" "}
          <span
            className="text-danger"
            style={{
              marginLeft: -"10px",
            }}
          >
            HOSTEL
          </span>
        </h5>
        <div className="mt-2">
        <a
          className="mx-3  p-1  text-secondary"
          style={{
            height: 60,
            width: 60,
          }}
        >
          <i
            className="fa fa-user  "
            style={{
              fontSize: "1.75rem",
            }}
            aria-hidden="true"
          ></i>
        </a>
        <a
          className="mx-3  p-1  text-secondary"
          style={{
            height: 60,
            width: 60,
          }}
        >
          <i class="fa fa-bell-o" aria-hidden="true" style={{
            fontSize:"1.75rem"
          }}></i>
        </a>
        <a
          className="mx-3   p-1 rounded-circle text-secondary"
          style={{
            height: 60,
            width: 60,
          }}
          href="/"
        >
          <i
            className="fa fa-sign-out "
            style={{
              fontSize: "1.80rem",
            }}
            aria-hidden="true"
          ></i>
        </a>
        </div>
      </div>
      </nav>
      <div
        class="offcanvas card border-0 shadow-lg offcanvas-start "
        style={{
          width: 250,
          backgroundColor: "whitesmoke",
        }}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5
            className="font-weight-bolder mt-2"
            style={{
              fontFamily: "sans-serif",
              fontSize: "1.6rem",
              color:"black"
            }}
          >
            <strong>MERO</strong>{" "}
            <span
              className="text-danger"
              style={{
                marginLeft: -"10px",
              }}
            >
              HOSTEL
            </span>
          </h5>
          <button
            type="button"
            class="btn-close text-reset mt-2 "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr className="dropdown-divider" />
        <div class="offcanvas-body">
          <ul className="">
          <li class="d-flex flex-row align-items-center mb-3" style={{
            listStyle:"none",
            marginLeft:-28,
          }}>
            <i className="fa fa-home" style={{
              fontSize:"1.5rem"
            }} ></i>
            <a class="nav-link" role="button"  style={{
              fontSize:"1.2rem",
              color:"black"
             
            }}>
              Home
            </a>
          </li>
          <li class="d-flex flex-row align-items-center mb-3" style={{
            listStyle:"none",
            marginLeft:-28
          }}>
            <i class="fa fa-rss" style={{
              fontSize:"1.5rem"
            }} aria-hidden="true"></i>
            <a class="nav-link " role="button"  style={{
              fontSize:"1.2rem",
              color:"black"
             
            }}>
              Blogs
            </a>
          </li>
          <li class="d-flex flex-row align-items-center mb-3" style={{
            listStyle:"none",
            marginLeft:-26
          }}>
            <i class="fa fa-bolt" style={{
              fontSize:"1.5rem"
            }} aria-hidden="true"></i>
            <a class="nav-link " role="button"  style={{
              fontSize:"1.2rem",
              color:"black"
             
            }}>
              Specifications
            </a>
          </li>
          <li class="d-flex flex-row align-items-center mb-3" style={{
            listStyle:"none",
            marginLeft:-30
          }}>
            <i class="fa fa-credit-card" style={{
              fontSize:"1.25rem"
            }} aria-hidden="true"></i>
            <a class="nav-link" role="button"  style={{
              fontSize:"1.2rem",
              color:"black"
             
            }}>
              Fee Structure
            </a>
          </li>
          <li class="d-flex flex-row align-items-center" style={{
            listStyle:"none",
            marginLeft:-26
          }}>
            <i class="fa fa-mobile" aria-hidden="true" style={{
              fontSize:"1.75rem"
            }}></i>
            <a class="nav-link " role="button"  style={{
              fontSize:"1.2rem",
              color:"black"
            }}>
              Contact Us
            </a>
          </li>
          </ul>
        </div>
      </div>
      </>
  );
}

export default Navbar;
