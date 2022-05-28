const NavbarMain = () => {
  return (
    <>
      <style type="text/css">
        {`        
            :root {
              --main-green: #0ecd88;
              --main-green-hover: rgba(14, 205, 136, .7);
            }

            nav {
              font-family: 'Ubuntu', sans-serif;
            }
                 

            {/* ######## START LOGO ########*/}
            .logo {
               color: var(--main-green);              
               text-decoration: none;
               cursor:pointer;
               outline: none;
            }
            .logo:hover, .logo:focus {
                color: var(--main-green-hover);
            }
            {/* ######## END LOGO ########*/}




            {/* ######## START HAMBURGER MENU ########*/}
            .navbar-toggler-icon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(14, 205, 136)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
            }

            .navbar-toggler {                 
             color: var(--main-green);  
             border: 2px solid transparent;
             
            }
            .navbar-toggler:focus {
              border-color: var(--main-green-hover); 
              outline: none;
              box-shadow: var(--main-green-hover)             
            }
            
            {/* ######## END HAMBURGER MENU ######## */}


            .nav-item {              
              margin: 0;
            }
            {/* ######## START NAVLINKS ########*/}
            .nav-link {
                font-family: 'Ubuntu', sans-serif; 
                font-weight: 400;
                color: #000;
                font-size: 24px;
                transition: .3s ease-out;
                display: inline-block;
                cursor: pointer;
            }
            .nav-link:hover, .nav-link:focus {
              color: var(--main-green-hover);  
            }          
            .nav-link::after {
              content: "";
              width: 0px;
              height: 3px;
              display: block;
              background: var(--main-green-hover); 
              transition: .3s ease-out;             
            }    
            .nav-link:hover::after {
              width: 100%;
            }
            {/* ######## END NAVLINKS ########*/}

            .navbar-green {
              border-bottom: 3px solid var(--main-green);
            }   

          
            
            {/* ######## START MEDIA QUERIES ########*/}
            @media (max-width: 1320px) {
               .nav-link
               {
                font-size: 1.15rem!important;
                font-weight: normal!important;
              }             
            }  
            @media (max-width: 992px) {
              .nav-link {
                font-size: 1rem!important;
              }
            }
          
            @media (max-width: 768px) {                            
              .mobile {
                width: 100%!important;
              }
              .navbar-collapse {
                padding: 1rem;
              }             
              
            }          
            @media (max-width: 480px) {              
              {/* .logo {
                font-size: 2rem;
              } */}
              .nav-link {
                font-size: 1.25rem!important;
              }
             
            }
            {/* ######## END MEDIA QUERIES ########*/}

            `}
      </style>
      <div className="nav navbar navbar-green navbar-expand-md fixed-top bg-white px-2 pt-2 pb-1 px-md-4 pt-md-3 pb-md-2">
        <div className="container mobile d-flex w-25 align-items-center justify-content-between">
          <a
            href="/"
            class="navbar-brand d-flex ms-md-3 me-0 logo fw-bold fs-1"
          >
            Tlancer
          </a>

          <button
            id="hamburger-btn"
            aria-controls="responsive-navbar-nav"
            class="navbar-toggler collapsed p-1 my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#responsive-navbar-nav"
            data-bs-auto-close="true"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="navbar-collapse collapse w-100"
          id="responsive-navbar-nav"
        >
          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2" href="#student">
                Student
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2" href="#tutor">
                Tutor
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2 text-nowrap"
                href="#about"
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2 text-nowrap"
                href="#mission"
              >
                Our Mission
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2 text-nowrap"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link mx-0 fs-4 mx-lg-1 mx-xl-2 fs-xl-1 text-nowrap"
                href="#contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
