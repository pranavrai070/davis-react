/* eslint-disable*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import HamburgerMenu from "react-hamburger-menu";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

import cmpLogo from "../../assets/cmpLogo.png";

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
          fontFamily: 'Montserrat, sans-serif'
          // boxShadow: '0px 8px 37px 0px rgba(0, 0, 0, 0.18)'
        }}
      >
        <BorderBox>
          <NavInner className="containe flexSpaceCenter">
            <div
              className="pointer flexNullCenter"
              onClick={() => {
                navigate("/");
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
                  strokeWidth={5}
                  rotate={0}
                  color="linear-gradient(to right, #3A4DF5, #18BDE3)"
                  borderRadius={10}
                  animationDuration={0.3}
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
                  color:
                    activeSection === "home"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px", fontSize: "18px",color:"white" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("home")}
                  onClick={() => {
                    navigate("/");
                    scrollToTop();
                    toggleSidebar();
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
                  color:
                    activeSection === "solution"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px", fontSize: "18px" ,color:"white"}}
                  to="solution"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("solution")}
                  onClick={() => {
                    navigate("/consulting");
                    scrollToTop();
                    toggleSidebar();
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
                  color:
                    activeSection === "blog"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "0", fontSize: "18px" ,color:"white"}}
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("blog")}
                  onClick={() => {
                    navigate("/corporate-training");
                    scrollToTop();
                    toggleSidebar();
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
                  color:
                    activeSection === "contact"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <Link
                  activeClass="active"
                  style={{ padding: "12px 15px", fontSize: "28px" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onSetActive={() => handleSetActiveSection("contact")}
                  onClick={() => {
                    navigate("/contact");
                    scrollToTop();
                    toggleSidebar();
                  }}
                >
                  <button className="-translate-y-3 bg-gradient-to-r from-gray-400 to-gray-800 text-white px-4 py-1 md:px-6 md:py-2 rounded-lg text-lg md:text-lg font-semibold shadow-lg hover:from-gray-600 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
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
  height: 70px;
  box-sizing: border-box;
  background: black;
  // backdrop-filter: blur(10px);
  box-shadow: 0px 8px 37px 0px rgba(0, 0, 0, 0.18);

  @media (max-width: 760px) {
    /* Adjust the size for small screen phones */
    height: 65px;
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
  height:1rem;
  color:black;
  margin-top:-0.2rem;
  
  

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
    height: 60vh;
    width: 60vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black; /* Add the desired background color here */
    backdrop-filter: blur(10px);
    opacity: 0.9;
    padding: 0;
    margin: 0;
    border-bottom-right-radius:20px;
    list-style-type: none;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    

    &.open {
      transform: translateX(0%);
    }

    /* Increase the padding for the sidebar buttons on mobile screens */
    li {
      padding: 10px 0;
    }

    .navLink {
      font-size: 20px; /* Adjust the font size to increase the button text size */
      padding: 20px 1px; /* Adjust the padding to increase the button size */
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
