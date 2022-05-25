const NavbarMain = () => {
  return (
    <>
      <style type="text/css">
        {`        
            :root {
              --main-green: #0ecd88;
              --main-green-hover: rgba(14, 205, 136, .7);
            }
                 

            {/* ######## START LOGO ########*/}
            .logo {
               color: var(--main-green);
               font-size: 32px; 
               font-family: 'Ubuntu', sans-serif;
               text-decoration: none;
               cursor:pointer;
               outline: none;
            }
            .logo:hover, .logo:focus {
                color: var(--main-green-hover);
            }
            {/* ######## END LOGO ########*/}

            {/* ######## START HAMBURGER MENU ########*/}
            .navbar-toggler {
             font-size: 3.5rem;    
             color: var(--main-green);  
             border: 2px solid pink;
            }
            .navbar-toggler:focus {
              border: 2px solid var(--main-green); 
              outline: none;
              box-shadow: var(--main-green-hover)             
            }
            
            {/* ######## END HAMBURGER MENU ########*/}

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
              border-bottom: 2px solid var(--main-green);
            }    

           

          
            
            {/* ######## START MEDIA QUERIES ########*/}
            @media (max-width: 1320px) {
               .nav-link,
               {
                font-size: 1.15rem;
                font-weight: normal;
              }             
            }  

            @media (max-width: 991px) {
              
              .navbar-toggler {
                order: 0;
                padding-left: 0;
              }
              .logo {
                order: 1;
                margin-left: auto;
                margin-top: 1rem;
                font-size: 2.5rem;
                margin-bottom: -.5rem;
              }
              .navbar-collapse {
                padding: 1rem;
              }
              .nav-link {
                font-size: 1.75rem;
              }
              
              
            }          
            @media (max-width: 480px) {
              .navbar-toggler {
                font-size: 1.5rem;
              }
              .logo {
                font-size: 2rem;
              }
              
            }
            {/* ######## END MEDIA QUERIES ########*/}

            `}
      </style>
      <div className="nav navbar navbar-green navbar-expand-lg fixed-top pt-3 pb-2 px-3 pt-lg-4 px-lg-4 px-xl-5 pb-lg-3 bg-white">
        <div className="w-lg-25 d-flex align-items-center justify-content-between">
          <div href="#home" className="fw-bold logo navbar-brand">
            Tlancer
          </div>

          <button
            aria-controls="responsive-navbar-nav"
            class="navbar-toggler collapsed p-1 my-2"
          >
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div
          className="navbar-collapse collapse"
          id="responsive-navbar-nav d-lg-none"
        >
          <div className="navbar-nav d-flex w-100 justify-content-end">
            <div className="d-flex flex-column flex-lg-row justify-content-end align-items-lg-center w-75 w-lg-100">
              <a className="nav-link mx-0 mx-lg-1 mx-xl-2" href="#home">
                Home
              </a>
              <a className="nav-link mx-0 mx-lg-1 mx-xl-2" href="#student">
                Student
              </a>
              <a className="nav-link mx-0 mx-lg-1 mx-xl-2" href="#tutor">
                Tutor
              </a>
              <a
                className="nav-link mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                href="#about"
              >
                About Us
              </a>
              <a
                className="nav-link mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                href="#mission"
              >
                Our Mission
              </a>
              <a
                className="nav-link mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className="nav-link mx-0 mx-lg-1 mx-xl-2 fs-xl-1 text-nowrap"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
