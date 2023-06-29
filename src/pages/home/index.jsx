/* eslint-disable react/no-unknown-property */
// import React from "react";
import * as classes from "./home.module.scss";
import heroLogo from "../../assets/logo-hero.svg";
import arrowUpRight from "../../assets/arrow-up-right.svg";
import chevronDown from "../../assets/chevron-down.svg";
import hiw1 from "../../assets/hiw-1.svg";
import hiw2 from "../../assets/hiw-2.svg";
import hiw3 from "../../assets/hiw-3.svg";
import hiw4 from "../../assets/hiw-4.svg";
import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

function Website() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  const howItWorksRef = useRef(null);

  const handleJoinTheWaitlist = () => {
    window.location.href = "https://dev.fideo.tech/sign-up";
  };

  const handleScrollToHowItWorks = () => {
    howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full">
      <div className={`flex bg-hero-1 ${classes.heroBox1} min-h-screen`}>
        <div className="max-w-[1440px] flex flex-col mx-auto w-full">
          <Navbar
            handleScrollToHowItWorks={handleScrollToHowItWorks}
            width={screenSize.width}
          />

          <div id="content" role="main">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center">
              <img src={heroLogo} alt="fideo-logo" />
              <p className="mt-[64px] mb-[64px] text-[#ECF0EF] text-center text-3xl font-inter font-semibold leading-[52px] tracking-[-0.72px]">
                Financial operations for modern <br /> cross-border business.
              </p>
              <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                {false && (
                  <input
                    id="member_email"
                    className={`bg-[#010D0D] border border-gray-300 text-white focus:ring-gray-500 focus:border-white ${
                      classes.inputBox
                    } ${"w-full md:w-[360px]"}`}
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Your email address..."
                    required=""
                    type="email"
                  />
                )}
                <div
                  className={`${
                    classes.button
                  } ${"flex justify-center items-center w-full md:w-[212px]"}`}
                  onClick={handleJoinTheWaitlist}
                >
                  <div
                    className={`${classes.buttonReset} flex justify-center items-center align-middle`}
                  >
                    Join Waitlist
                  </div>
                  <img src={arrowUpRight} className={`align-middle`} alt="" />
                </div>
              </div>
              <div className="mx-auto text-center mt-[30px] mb-[30px] pt-[60px] ">
                <img
                  src={chevronDown}
                  className={classes.animateFloat}
                  alt="down"
                  onClick={handleScrollToHowItWorks}
                />
              </div>
              <div className="test pt-[16px]" ref={howItWorksRef}></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px]">
                <h2 className="text-[#ECF0EF] text-center text-3xl font-inter font-semibold leading-[52px] tracking-[-0.72px]">
                  How it works?
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-auto text-center py-5">
            {screenSize.width >= 1073 && (
              <div
                className={`mt-12 mb-12 flex flex-row flex-wrap justify-center items-start ${classes.carouselWrap}`}
              >
                <div
                  className={`flex-none carouselItem`}
                >
                  <div className={`${classes.hiwBox}`}>
                    <img src={hiw1} alt="hiw1" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>01</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Get global accounts
                        </span>
                        <span className="">
                          {" "}
                          in 5 minutes and start collecting payment from 180+
                          countries.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-none carouselItem ${
                    screenSize.width > 1200 ? "px-[2rem]" : "px-[16px]"
                  }`}
                >
                  <div className={`${classes.hiwBox}`}>
                    <img src={hiw2} alt="hiw2" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>02</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Create Invoice
                        </span>
                        <span className="">&nbsp;</span>
                        <span className={classes.hiwBoxTextBold}>&amp;</span>
                        <span className="">&nbsp;</span>
                        <span className={classes.hiwBoxTextBold}>send</span>
                        <span className="">
                          {" "}
                          payment link to your customer.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-none carouselItem ${
                    screenSize.width > 1200 ? "px-[2rem]" : "px-[16px]"
                  }`}
                >
                  <div className={`${classes.hiwBox}`}>
                    <img src={hiw3} alt="hiw3" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>03</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Track payment
                        </span>
                        <span className=""> made by your customer.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-none carouselItem ${
                    screenSize.width > 1200 ? "px-[2rem]" : "px-[16px]"
                  }`}
                >
                  <div className={`${classes.hiwBox}`}>
                    <img src={hiw4} alt="hiw4" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>04</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Receive payment
                        </span>
                        <span className=""> in your </span>
                        <span className={classes.hiwBoxTextBold}>
                          local currency{" "}
                        </span>
                        <span className="">
                          and download Payment Advice for FREE.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {screenSize.width >= 768 && screenSize.width <= 1072 && (
              <div
                className={`mt-12 mb-12 flex flex-row flex-wrap justify-center items-start gap-[3rem] ${classes.carouselWrap}`}
              >
                <div className="flex-none carouselItem">
                  <div className={`${classes.hiwBox} h-[390px]`}>
                    <img src={hiw1} alt="hiw1" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>01</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Get global accounts
                        </span>
                        <span className="">
                          {" "}
                          in 5 minutes and start collecting payment from 180+
                          countries.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={`${classes.hiwBox} h-[390px]`}>
                    <img src={hiw3} alt="hiw3" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>03</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Track payment
                        </span>
                        <span className=""> made by your customer.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none carouselItem">
                  <div className={`${classes.hiwBox} h-[390px]`}>
                    <img src={hiw2} alt="hiw2" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>02</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Create Invoice
                        </span>
                        <span className="">&nbsp;</span>
                        <span className={classes.hiwBoxTextBold}>&amp;</span>
                        <span className="">&nbsp;</span>
                        <span className={classes.hiwBoxTextBold}>send</span>
                        <span className="">
                          {" "}
                          payment link to your customer.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={`${classes.hiwBox} h-[390px]`}>
                    <img src={hiw4} alt="hiw4" />
                    <div
                      className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
                    >
                      <div className={classes.hiwBoxStep}>04</div>
                      <p className="text-start">
                        <span className={classes.hiwBoxTextBold}>
                          Receive payment
                        </span>
                        <span className=""> in your </span>
                        <span className={classes.hiwBoxTextBold}>
                          local currency{" "}
                        </span>
                        <span className="">
                          and download Payment Advice for FREE.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <HowItWorks /> */}
            {screenSize.width < 768 && <Carousel />}
          </div>
        </div>
      </div>
      <div className={`flex h-full bg-white`}>
        <div className="h-[500px]"></div>
      </div>
    </div>
  );
}

export default Website;
