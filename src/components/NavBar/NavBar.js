// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-scroll";
// import Tooltip from "@mui/material/Tooltip";

// import HamburgerMenu from "react-hamburger-menu";
// import classes from "./Navbar.module.css";
// // import Button from "../../../UI/Button/Button";
// import { useNavigate } from "react-router-dom";

// import cmpLogo from "../../assets/cmpLogo.jpeg";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [y, setY] = useState(window.scrollY);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     window.addEventListener("scroll", () => setY(window.scrollY));
//     return () => {
//       window.removeEventListener("scroll", () => setY(window.scrollY));
//     };
//   }, [y]);

//   const scrollSmoothTo = (target) => {
//     const element = document.getElementById(target);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   // const handleSetActiveSection = (section) => {
//   //     setActiveSection(section);
//   //   console.log("section");
//   //  };

//   const handleSetActiveSection = (section) => {
//     setActiveSection(section);
//     setActiveSection((prevSection) => {
//       console.log("Received section:", section);
//       console.log("Previous active section:", prevSection);

//       console.log("Updated active section:", section);
//       return section; // Return the new value
//     });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       <Wrapper
//         className="flexCenter animate whiteBg"
//         id="navbar"
//         style={y > 100 ? { height: "40px" } : { height: "80px" }}
//       >
//         <BorderBox>
//           <NavInner className="container flexSpaceCenter">
//             <div
//               className="pointer flexNullCenter"
//               onClick={() => scrollSmoothTo("home")}
//             >
//               <h1 style={{ marginLeft: "10px" }} className="font20 extraBold">
//                 <img
//                   className={classes.navBarIMg}
//                   src={cmpLogo}
//                   alt="navbar metamix logo"
//                 />
//               </h1>
//             </div>

//             <div className={classes.Humburger}>
//               <HamburgerWrapper
//                 className="pointer"
//                 onClick={toggleSidebar}
//                 style={{ position: "absolute", top: ".5rem", right: "1.5rem" }}
//               >
//                 <HamburgerMenu
//                   isOpen={sidebarOpen}
//                   menuClicked={toggleSidebar}
//                   width={29}
//                   height={21}
//                   strokeWidth={4}
//                   rotate={0}
//                   color="linear-gradient(to right, #3A4DF5, #18BDE3)"
//                   borderRadius={0}
//                   animationDuration={0.5}
//                 />
//               </HamburgerWrapper>
//             </div>
//             <UlWrapper
//               className={`flexNullCenter ${sidebarOpen ? "open" : ""}`}
//               style={{ listStyleType: "none", cursor: "pointer" }}
//             >
//               <li
//                 className={`semiBold font15 pointer navLink ${
//                   activeSection === "home" ? "active" : ""
//                 }`}
//                 style={{
//                   cursor: "pointer",
//                   marginRight: "1rem",
//                   marginTop: "-.1rem",
//                 }}
//               >
//                 <Link
//                   activeClass="active"
//                   style={{ padding: "10px 15px", color: "#000000" }}
//                   to="/"
//                   spy={true}
//                   smooth={true}
//                   offset={-80}
//                   onSetActive={() => handleSetActiveSection("home")}
//                   onClick={() => {
//                     navigate("/");
//                   }}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li
//                 className={`semiBold font15 pointer navLink ${
//                   activeSection === "solutions" ? "active" : ""
//                 }`}
//                 style={{
//                   cursor: "pointer",
//                   marginRight: "1rem",
//                   marginTop: "-.1rem",
//                 }}
//               >
//                 <Link
//                   activeClass="active"
//                   style={{ padding: "10px 15px", color: "#000000" }}
//                   to="/consulting"
//                   spy={true}
//                   smooth={true}
//                   offset={-80}
//                   onSetActive={() => handleSetActiveSection("solutions")}
//                   onClick={() => {
//                     navigate("/consulting");
//                   }}
//                 >
//                   Consulting
//                 </Link>
//               </li>
//               <li
//                 className={`semiBold font15 pointer navLink ${
//                   activeSection === "partners" ? "active" : ""
//                 }`}
//                 style={{
//                   cursor: "pointer",
//                   marginRight: "1rem",
//                   marginTop: "-.1rem",
//                 }}
//               >
//                 <Link
//                   activeClass="active"
//                   style={{ padding: "10px 15px", color: "#000000" }}
//                   to="/corporate-training"
//                   spy={true}
//                   smooth={true}
//                   offset={-80}
//                   onSetActive={() => handleSetActiveSection("partners")}
//                   onClick={() => {
//                     navigate("/corporate-training");
//                   }}
//                 >
//                   Corporate Training
//                 </Link>
//               </li>
//               <li
//                 className={`semiBold font15 pointer navLink ${
//                   activeSection === "request" ? "active" : ""
//                 }`}
//                 style={{
//                   cursor: "pointer",
//                   marginRight: "1rem",
//                   marginTop: "-.6rem",
//                 }}
//               >
//                 <Link
//                   activeClass="active"
//                   style={{ padding: "10px 15px", color: "#000000" }}
//                   to="request"
//                   spy={true}
//                   smooth={true}
//                   offset={-80}
//                   onSetActive={() => handleSetActiveSection("request")}
//                   onClick={() => {
//                     navigate('/contact')
//                   }}
//                 >
//                   <Tooltip title="Contact Us">
//                     <button className="bg-gradient-to-r from-gray-400 to-gray-800 text-white px-6 py-2 rounded-lg text-lg font-bold shadow-lg hover:from-gray-600 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
//                       Get in Touch
//                     </button>
//                   </Tooltip>
//                 </Link>
//               </li>
//             </UlWrapper>
//           </NavInner>
//         </BorderBox>
//       </Wrapper>
//     </>
//   );
// }


// const Wrapper = styled.nav`
//   width: 100%;
//   ${'' /* position: fixed; */}
//   top: 0;
//   left: 0;
//   z-index: 999;
//   display: flex;
//   border: none;
// `;

// const BorderBox = styled.div`
//   width: 100%;
//   ${""}
//   height: 74px;
//   box-sizing: border-box;
//   ${'' /* background: rgba(31, 31, 31, 0.4); */}
//   background:#fff
//   backdrop-filter: blur(10px);

//   @media (max-width: 760px) {
//     height: 55px;
//     padding: 10px;
//     width: 100%;
//   }
// `;

// const NavInner = styled.div`
//   position: relative;
//   height: 100%;
//   display: flex;
// `;

// const HamburgerWrapper = styled.div`
//   @media (min-width: 760px) {
//     display: none;
//   }
// `;

// const UlWrapper = styled.ul`
//   display: flex;
  
  
//   li {
//     padding: 15px 0;
//     margin-top: 3rem;
//     margin-right: 2rem;
//   }

//   .navLink {
//     font-size: 14px; /* Adjust the font size to increase the button text size */
//     padding: 10px 7px; /* Adjust the padding to increase the button size */
//   }

  

//   /* Add styles for the active button */
//   .navLink.active::after {
//     visibility: visible;
//     transform: scaleX(1);
//     transition: transform 0.3s;
//   }

//   @media (max-width: 760px) {
//     /* Additional styles for mobile screens */
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 35vh;
//     width: 30vw;
//     position: fixed;
//     top: 0;
//     left: 0;
//     background: linear-gradient(86.83deg, #3955F4 16.99%, #1BB7E5 98.42%);
//     background-color: #fff; /* Add the desired background color here */
//     backdrop-filter: blur(10px);
//     opacity: 1;
//     padding: 0;
//     margin: 0;
//     list-style-type: none;
//     transform: translateX(-100%);
//     transition: transform 0.3s ease-in-out;
    

//     &.open {
//       transform: translateX(0%);
//     }

//     /* Increase the padding for the sidebar buttons on mobile screens */
//     li {
//       padding: 5px 0;
//     }

//     .navLink {
//       font-size: 10px; /* Adjust the font size to increase the button text size */
//       padding: 13px 1px; /* Adjust the padding to increase the button size */
//     }
//   }

//   @media (min-width: 761px) {
//     flex: 1;
//     justify-content: flex-end;
//   }
// }

// .navLink {
//   position: relative;
// }

// .navLink::after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: -2px;
//   width: 100%;
//   height: 3px;
//   background-color: blue;
//   visibility: hidden;
//   transform: scaleX(0);
//   transition: visibility 0s linear 0.3s, transform 0.3s;
// }

// .navLink.active::after {
//   visibility: visible;
//   transform: scaleX(1);
//   transition: transform 0.3s;
// }

// .sidebarButton {
//   padding: 20px 30px; /* Increase the padding to increase the button size */
//   font-size: 15px; /* Increase the font size to increase the button text size */
  
// }


// const RequestDemoLink = styled(Link)`;


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import HamburgerMenu from "react-hamburger-menu";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

import cmpLogo from "../../assets/cmpLogo.jpeg";

export default function Navbar() {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const scrollSmoothTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    setActiveSection((prevSection) => {
      return section;
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTop, setNavbarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Scrolling down
      if (currentPosition > scrollPosition) {
        setNavbarTop(-100);
      } else {
        // Scrolling up
        setNavbarTop(0);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <Wrapper
        className="flexCenter animate whiteBg"
        id="navbar"
        style={{
        //   height: navbarTop === -100 ? "40px" : "80px",
        //   top: `${navbarTop}px`,
          transition: "top 0.3s ease-in-out",
          // boxShadow: '0px 8px 37px 0px rgba(0, 0, 0, 0.18)'

        }}
      >
        <BorderBox >
          <NavInner className="containe flexSpaceCenter">
            <div
              className="pointer flexNullCenter"
              onClick={() => {
                navigate('/');
                scrollToTop();
              }}
            >
              <h1 style={{ marginLeft: "10px" }} className="font20 extraBold">
                <img
                  className={classes.navBarIMg}
                  src={cmpLogo}
                  alt="navbar metamix logo"
                />
              </h1>
            </div>

            <div className={classes.Humburger}>
              <HamburgerWrapper
                className="pointer"
                onClick={toggleSidebar}
                style={{ position: "absolute", top: ".5rem", right: "1.5rem" }}
              >
                <HamburgerMenu
                  isOpen={sidebarOpen}
                  menuClicked={toggleSidebar}
                  width={29}
                  height={21}
                  strokeWidth={4}
                  rotate={0}
                  color="linear-gradient(to right, #3A4DF5, #18BDE3)"
                  borderRadius={0}
                  animationDuration={0.5}
                />
              </HamburgerWrapper>
            </div>
            <UlWrapper
              className={`flexNullCenter ${sidebarOpen ? "open" : ""} `}
              style={{ listStyleType: "none", cursor: "pointer" }}
            >
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "home" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color: activeSection === "home" ? "rgba(0, 0, 0, 1)" : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px",fontSize:'18px' }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("home")}
                  onClick={() => {
                    navigate('/')
                    scrollToTop();
                 
                  }}
                  className={classes.Links}
                >
                  Home
                </Link>
              </li>
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "solution" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color: activeSection === "solution" ? "rgba(0, 0, 0, 1)" : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px", fontSize:'18px' }}
                  to="solution"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("solution")}
                  onClick={() => {
                     navigate('/consulting')
                     scrollToTop();
                  }}
                  className={classes.Links}
                >
                  Consulting
                </Link>
              </li>
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "blog" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color: activeSection === "blog" ? "rgba(0, 0, 0, 1)" : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px",fontSize:'18px' }}
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("blog")}
                  onClick={() => {
                    navigate('/corporate-training');
                    scrollToTop();
                  }}
                  className={classes.Links}
                >
                  Corporate Training
                </Link>
              </li>
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "contact" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color: activeSection === "contact" ? "rgba(0, 0, 0, 1)" : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px", fontSize:'28px' }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("contact")}
                  onClick={() => {
                    navigate('/contact')
                    scrollToTop();
                  }}
                >
                   <button className=" -translate-y-2 bg-gradient-to-r from-gray-400 to-gray-800 text-white px-6 py-2 rounded-lg text-lg font-bold shadow-lg hover:from-gray-600 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
                Get in Touch
              </button>
                </Link>
              </li>
            </UlWrapper>
          </NavInner>
        </BorderBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  border: none;
`;

const BorderBox = styled.div`
  width: 100%;
  ${"" /* max-width: 3840px; */}
  height: 74px;
  box-sizing: border-box;
  background: #fff;
  // backdrop-filter: blur(10px);
  box-shadow: 0px 8px 37px 0px rgba(0, 0, 0, 0.18);


  @media (max-width: 760px) {
    /* Adjust the size for small screen phones */
    height: 60px;
    padding: 10px;
    width: 100%;
  }
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;

const HamburgerWrapper = styled.div`
  @media (min-width: 760px) {
    display: none;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  height:3rem;
  color:black
  
  

  /* Add styles for the sidebar buttons */


  .navLink {
    font-size: 14px; /* Adjust the font size to increase the button text size */
    padding: 10px 7px; /* Adjust the padding to increase the button size */
  }

  

  /* Add styles for the active button */
  .navLink.active::after {
    visibility: none;
    transform: scaleX(1);
    transition: transform 0.3s;
    
  }

  @media (max-width: 760px) {
    /* Additional styles for mobile screens */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;
    width: 30vw;
    position: fixed;
    top: 0;
    left: 0;
    // background: linear-gradient(86.83deg, #3955F4 16.99%, #1BB7E5 98.42%);
    background-color: #fff; /* Add the desired background color here */
    backdrop-filter: blur(10px);
    opacity: 1;
    padding: 0;
    margin: 0;
    list-style-type: none;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    

    &.open {
      transform: translateX(0%);
    }

    /* Increase the padding for the sidebar buttons on mobile screens */
    li {
      padding: 5px 0;
    }

    .navLink {
      font-size: 10px; /* Adjust the font size to increase the button text size */
      padding: 13px 1px; /* Adjust the padding to increase the button size */
    }
  }

  @media (min-width: 761px) {
    flex: 1;
    justify-content: flex-end;
  }
}

.navLink {
  position: relative;
  margin-top:1rem
}

.navLink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 100%;
  height: 3px;
  background: rgba(18, 203, 196, 1);
  visibility: hidden;
  transform: scaleX(0);
  transition: visibility 0s linear 0.3s, transform 0.3s;
  color:#000000
}



.navLink.active::after {
  visibility: visible;
  transform: scaleX(1);
  transition: transform 0.3s;
  

}

.sidebarButton {
  padding: 20px 30px; /* Increase the padding to increase the button size */
  font-size: 15px; /* Increase the font size to increase the button text size */
  
}


 const RequestDemoLink = styled(Link)`;