import cart from "../images/shopping_cart_1.png";

const NavbarMain = () => {
  return (
    <>
      <style type="text/css">
        {`        
            :root {
              --main-green: #0ecd88;
              --main-green-hover: rgba(14, 205, 136, .7);
            }
            * {
              {/* border: 1px solid red; */}
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

            {/* ######## START BUTTONS ########*/}  
            .btn-login {              
                color: #000;
                border: 2px solid var(--main-green);
                border-radius: 7px;
                font-family: 'Ubuntu', sans-serif; 
            }
            .btn-login:hover, .btn-login:focus {
              background: var(--main-green-hover);
              border-color:  var(--main-green-hover);
              color: #fff;

            }
            .btn-sign-up {
                background: var(--main-green);
                color: #fff;
                border: 2px solid var(--main-green);
                border-radius: 7px;
                font-family: 'Ubuntu', sans-serif;  
            }
            .btn-sign-up:hover, .btn-sign-up:focus {
              background: var(--main-green-hover);
              border-color: var(--main-green-hover);
              color: #fff;
            }
            {/* ######## END BUTTONS ########*/}

            .bi-search, .bi-cart3 {              
              font-size: 28px;
            }
            
            {/* ######## START MEDIA QUERIES ########*/}
            @media (max-width: 1320px) {
               .nav-link, .nav-btn
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
              .nav-link, .nav-btn {
                font-size: 1.75rem;
              }
              {/* .nav-btn {
                border: none;
                background: #fff;
                text-align: left;
                color: #000;
                padding-left: 0;
              } */}
              .bi-search {
                order: 2;
                font-size: 2.5rem;
              }
              .bi-cart3 {
                order: 3;
                font-size: 2.5rem;
                margin: 0 1rem;
              }
            }          
            @media (max-width: 480px) {
              .bi-search, .bi-cart3, .navbar-toggler {
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
        <div className="container-fluid mw-100 w-lg-25 d-flex align-items-center justify-content-between">
          <div href="#home" className="fw-bold logo">
            Tlancer
          </div>
          <div
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler collapsed p-1 my-2"
          >
            <i class="bi bi-list"></i>
          </div>
          <i class="bi bi-search ms-auto me-3 d-lg-none"></i>
          <i class="bi bi-cart3 justify-self-end d-lg-none"></i>
        </div>

        <div
          className="navbar-collapse collapse"
          id="responsive-navbar-nav d-lg-none"
        >
          <div className="navbar-nav d-flex w-100 justify-content-between">
            <div className="col d-flex flex-column flex-lg-row justify-content-end align-items-lg-center w-75 w-lg-100">
              <div className="nav-link mx-0 mx-lg-1 mx-xl-2" href="#courses">
                Courses
              </div>
              <div className="nav-link mx-0 mx-lg-1 mx-xl-2" href="#pricing">
                Pricing
              </div>
              <div
                className="nav-link mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                href="#tutor"
              >
                Become a Tutor
              </div>
              <div
                className="nav-link mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                href="#about"
              >
                About Us
              </div>
              <div
                className="nav-link mx-0 mx-lg-1 mx-xl-2 fs-xl-1"
                href="#contact"
              >
                Contact
              </div>

              {/* ######## I USED AN IMAGE FOR WIDE VERSION AND BOOTSTRAP FONT FOR SMALL ########*/}
              <img
                className="align-self-center mx-2"
                src={cart}
                width="28px"
                height="28px"
                alt="shopping cart"
              />

              <button
                className="ms-lg-3 mt-lg-0 px-lg-3 py-1 fw-lg-bold ms-xl-4 px-xl-4 py-xl-2 nav-btn btn btn-login"
                variant="login"
              >
                Login
              </button>
              <button
                className="ms-lg-3 mt-lg-0 px-lg-3 py-1 fw-lg-bold ms-xl-4 px-xl-4 py-xl-2 text-nowrap nav-btn btn btn-sign-up"
                variant="sign-up"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
