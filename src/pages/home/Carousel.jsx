import hiw1 from "../../assets/hiw-1.svg";
import hiw2 from "../../assets/hiw-2.svg";
import hiw3 from "../../assets/hiw-3.svg";
import hiw4 from "../../assets/hiw-4.svg";
import * as classes from "./home.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

function App() {
  const slides = [
    {
      id: 1,
      element: (
        <div className="flex justify-start">
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
                  in 5 minutes and start collecting payment from 180+ countries.
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      element: (
        <div className="flex justify-start">
          <div className={`${classes.hiwBox}`}>
            <img src={hiw2} alt="hiw2" />
            <div
              className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
            >
              <div className={classes.hiwBoxStep}>02</div>
              <p className="text-start">
                <span className={classes.hiwBoxTextBold}>Create Invoice</span>
                <span className="">&nbsp;</span>
                <span className={classes.hiwBoxTextBold}>&amp;</span>
                <span className="">&nbsp;</span>
                <span className={classes.hiwBoxTextBold}>send</span>
                <span className=""> payment link to your customer.</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      element: (
        <div className="flex justify-start">
          <div className={`${classes.hiwBox}`}>
            <img src={hiw3} alt="hiw3" />
            <div
              className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
            >
              <div className={classes.hiwBoxStep}>03</div>
              <p className="text-start">
                <span className={classes.hiwBoxTextBold}>Track payment</span>
                <span className=""> made by your customer.</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      element: (
        <div className="flex justify-start">
          <div className={`${classes.hiwBox}`}>
            <img src={hiw4} alt="hiw4" />
            <div
              className={`${classes.hiwBoxText} flex flex-col justify-start items-start w-[251px]`}
            >
              <div className={classes.hiwBoxStep}>04</div>
              <p className="text-start">
                <span className={classes.hiwBoxTextBold}>Receive payment</span>
                <span className=""> in your </span>
                <span className={classes.hiwBoxTextBold}>local currency </span>
                <span className="">and download Payment Advice for FREE.</span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Carousel
      className="mx-4 gap-2"
      responsive={responsive}
      showDots={true}
      arrows={false}
      swipeable={true}
      partialVisible={true}
      focusOnSelect={true}
    >
      {slides.map((slide, slideIndex) => {
        const current = slide.element;
        return (
          <div key={slideIndex}>
            {current}
            {/* {next} */}
          </div>
        );
      })}
    </Carousel>
  );
}

export default App;
