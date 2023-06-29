import hiw1 from "../../assets/hiw-1.svg";
import hiw2 from "../../assets/hiw-2.svg";
import hiw3 from "../../assets/hiw-3.svg";
import hiw4 from "../../assets/hiw-4.svg";
import "./hiw.module.scss";

export const HowItWorks = () => {
  return (
    <div className="box mt-12 mb-12 flex overflow-x-auto flex-row flex-nowrap justify-center items-start gap-8 sm:gap-20">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="div">
            <img className="img" alt="Frame" src={hiw1} />
            <div className="frame-2">
              <div className="text-wrapper">01</div>
              <p className="get-global-accounts">
                <span className="span">Get global accounts</span>
                <span className="text-wrapper-2"> in 5 minutes and start collecting payment from 180+ countries.</span>
              </p>
            </div>
          </div>
          <div className="frame-3">
            <img className="img" alt="Frame" src={hiw2} />
            <div className="frame-4">
              <div className="text-wrapper-3">02</div>
              <p className="create-invoice-send">
                <span className="text-wrapper-4">Create Invoice</span>
                <span className="text-wrapper-5">&nbsp;</span>
                <span className="text-wrapper-6">&amp;</span>
                <span className="text-wrapper-7">&nbsp;</span>
                <span className="text-wrapper-8">send</span>
                <span className="text-wrapper-9"> payment link to your customer.</span>
              </p>
            </div>
          </div>
          <div className="frame-5">
            <img className="img" alt="Frame" src={hiw3} />
            <div className="frame-7">
              <div className="text-wrapper-10">03</div>
              <p className="track-payment-made">
                <span className="text-wrapper-11">Track payment</span>
                <span className="text-wrapper-12"> made by your customer.</span>
              </p>
            </div>
          </div>
          <div className="frame-8">
            <img className="img" alt="Frame" src={hiw4} />
            <div className="frame-10">
              <div className="text-wrapper-13">04</div>
              <p className="receive-payment-in">
                <span className="text-wrapper-14">Receive payment</span>
                <span className="text-wrapper-15"> in your </span>
                <span className="text-wrapper-16">local currency </span>
                <span className="text-wrapper-17">and download Payment Advice for FREE.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
