/* eslint-disable react/prop-types */
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import heroLogoDark from "../../assets/logo-hero-dark.svg";
import chevronRight from "../../assets/chevron-right.svg";
import * as classes from "./home.module.scss";
import { useState } from "react";

function Navbar(props) {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false);

  const handleMenuClick = () => {
    console.log("menu clicked");
    setToggleMenuIcon(!toggleMenuIcon);
  };
  if (props.width >= 768) {
    return (
      <header className="mb-auto z-50 w-full text-sm px-[24px] py-[24px]">
        <nav
          className="w-full h-[64px] flex flex-row justify-between items-center"
          aria-label="navbar"
        >
          <div className="flex">
            <a
              className="flex-none text-xl font-semibold text-white"
              href="#"
              aria-label="fideo"
            >
              <img src={logo} alt="fideo-logo" />
            </a>
          </div>
          <div className="flex flex-row justify-left items-center gap-12">
            <a
              className="font-medium text-white hover:text-gray-400 active:text-white cursor-pointer"
              onClick={() => {
                props.handleScrollToHowItWorks();
                setTimeout(() => {
                  handleMenuClick();
                }, 500);
              }}
            >
              How it works
            </a>
            <a
              className="font-medium text-white hover:text-gray-400 active:text-white"
              href="#"
            >
              FAQs
            </a>
            <a
              className="font-medium text-white hover:text-gray-400 active:text-white"
              href="#"
            >
              About
            </a>
            <a
              className={`font-medium hover:text-gray-400 active:text-white ${classes.loginButton} cursor-pointer`}
              onClick={() => {
                window.location.href = "http://dev.fideo.tech";
              }}
            >
              Login
            </a>
          </div>
        </nav>
      </header>
    );
  } else {
    return !toggleMenuIcon ? (
      <header className="mb-auto z-50 w-full text-sm relative">
        <nav className="w-full h-[80px] flex flex-row justify-between items-center relative">
          <div className="toggleIcon ml-[24px]">
            <MenuOutlined
              style={{
                color: "#ffffff",
                marginRight: "20px",
                fontSize: "24px",
              }}
              onClick={handleMenuClick}
            />
            <img src={logo} alt="fideo-logo" />
          </div>
          <div className="mobileLogin mr-[24px] cursor-pointer">
            <a
              className={`font-medium hover:text-gray-400 active:text-white ${classes.loginButton}`}
              onClick={() => {
                window.location.href = "http://dev.fideo.tech";
              }}
            >
              Login
            </a>
          </div>
        </nav>
      </header>
    ) : (
      <header className="mb-auto z-50 w-full text-sm absolute left-0 right-0 h-screen">
        <nav className="w-full h-full">
          <div className="mobileMenu bg-white h-screen">
            <div
              className="flex flex-col justify-start"
              style={{ borderBottom: "1px solid #D2D6D9" }}
            >
              <div className="flex flex-row justify-start items-center h-[64px] px-[16px]">
                <CloseOutlined
                  style={{
                    color: "#1e333f",
                    marginRight: "20px",
                    fontSize: "22px",
                    opacity: "0.5",
                  }}
                  onClick={handleMenuClick}
                />
                <a
                  className="flex-none text-xl font-semibold text-white"
                  href="#"
                  aria-label="fideo"
                >
                  <img
                    src={heroLogoDark}
                    style={{
                      width: "73px",
                      height: "24px",
                    }}
                    alt="fideo-logo"
                  />
                </a>
              </div>
            </div>
            <div className="mobileNavbarContent">
              <div
                className="h-[64px] flex flex-row justify-between items-center mx-[16px] cursor-pointer"
                style={{
                  borderBottom: "1px solid #ECEFF2",
                }}
                onClick={() => {
                  handleMenuClick();
                  setTimeout(() => {
                    props.handleScrollToHowItWorks();
                  }, 100);
                }}
              >
                <div>How it works</div>
                <img src={chevronRight} alt="chevron-right" />
              </div>
              <div
                className="h-[64px] flex flex-row justify-between items-center mx-[16px] cursor-pointer"
                style={{
                  borderBottom: "1px solid #ECEFF2",
                }}
              >
                <div>FAQs</div>
                <img src={chevronRight} alt="chevron-right" />
              </div>
              <div
                className="h-[64px] flex flex-row justify-between items-center mx-[16px] cursor-pointer"
                style={{
                  borderBottom: "1px solid #ECEFF2",
                }}
              >
                <div>About</div>
                <img src={chevronRight} alt="chevron-right" />
              </div>
              <div
                className="h-[64px] flex flex-row justify-between items-center mx-[16px]"
                style={{
                  borderBottom: "1px solid #ECEFF2",
                }}
                onClick={() => {
                  window.location.href = "http://dev.fideo.tech";
                }}
              >
                <div
                  className={`${classes.buttonNavbar} w-full text-center cursor-pointer`}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Navbar;
