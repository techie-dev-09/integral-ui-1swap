import PageContainer from "@/components/common/PageContainer";
import { useEffect } from "react";
import { gsap } from "gsap";
import "./LandingPage.css";
import swap1 from "@/assets/landingpage/swap1.png";
import swap2 from "@/assets/landingpage/swap2.png";
import swap3 from "@/assets/landingpage/swap3.png";

import pool1 from "@/assets/landingpage/pool1.png";
import pool2 from "@/assets/landingpage/pool2.png";
import pool3 from "@/assets/landingpage/pool3.png";
import pool4 from "@/assets/landingpage/pool4.png";

import cp1 from "@/assets/landingpage/cp1.png";
import cp2 from "@/assets/landingpage/cp2.png";
import cp3 from "@/assets/landingpage/cp3.png";
import cp4 from "@/assets/landingpage/cp4.png";

const LandingPage = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1.5, ease: "power1.inOut" },
    });

    timeline
      .fromTo(
        ".first-slide .image",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 }
      )
      .to(".first-slide .image", { y: 200, opacity: 0, stagger: 0.3 });

    timeline
      .fromTo(
        ".second-slide .image",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.3 },
        "-=1"
      )
      .to(".second-slide .image", { y: 200, opacity: 0, stagger: 0.3 });

    timeline
      .fromTo(
        ".third-slide .image",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.3 }
      )
      .to(".third-slide .image", { y: 200, opacity: 0, stagger: 0.3 });
  }, []);

  return (
    <PageContainer>
      <div className="App">
        <div className="main-content">
          <div className="container">
            <div className="first-section">
              <div className="fs-content">
                <h1>
                  THE ULTIMATE <br />
                  Decentralized Exchange
                </h1>
                <a href="#">Trade Now</a>
              </div>
            </div>

            <div className="second-section">
              <div className="img-container">
                <div className="first-slide">
                  <div className="top-img">
                    <img alt="img-swap" src={swap1} className="image" />
                  </div>

                  <div className="bottom-img">
                    <div className="bi-left-img mt-5">
                      <img alt="swap" src={swap2} className="image" />
                    </div>
                    <div className="bi-right-img">
                      <img alt="chart" src={swap3} className="image" />
                    </div>
                  </div>
                </div>

                <div className="second-slide">
                  <div className="top-content">
                    <div className="replace-img">
                      <img alt="img-pool" src={pool1} className="image" />
                    </div>
                  </div>
                  <div className="bottom-content">
                    <div className="flex-imgs">
                      <div className="pools-card">
                        <img alt="card-1" src={pool2} className="image" />
                      </div>
                    </div>
                    <div className="flex-imgs">
                      <div className="pools-card">
                        <img alt="card-1" src={pool3} className="image" />
                      </div>
                    </div>
                    <div className="flex-imgs">
                      <div className="pools-card">
                        <img alt="card-1" src={pool4} className="image" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="third-slide">
                  <div className="top-img">
                    <img alt="img-swap" src={cp1} className="image" />
                  </div>

                  <div className="bottom-img">
                    <div className="bi-left-img mt-5">
                      <img alt="swap" src={cp2} className="image" />
                    </div>
                    <div className="bi-right-img">
                      <img alt="chart" src={cp3} className="image" />
                    </div>
                  </div>

                  <div className="bottom-img">
                    <div className="bi-left-img mt-5">
                      <img alt="swap" src={cp4} className="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="third-section">
            <div className="ts-content">
              <h2>1SWAP in Numbers</h2>
              {/* <div className="three-col-content">
                <div className="single-col-content">
                  <div className="left-col">
                    <div className="img-border">
                      <div className="img-bg">
                        <img
                          src="https://thena.fi/images/home/stats/stat1.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right-col">
                    <p>Total Volume</p>
                    <h4>$32.33B</h4>
                  </div>
                </div>
                <div className="single-col-content">
                  <div className="left-col">
                    <div className="img-border">
                      <div className="img-bg">
                        <img
                          src="https://thena.fi/images/home/stats/dollar.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right-col">
                    <p>Total Value Locked</p>
                    <h4>$22.09M</h4>
                  </div>
                </div>
                <div className="single-col-content">
                  <div className="left-col">
                    <div className="img-border">
                      <div className="img-bg">
                        <img
                          src="https://thena.fi/images/home/stats/dollar.svg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right-col">
                    <p>Total Revenue</p>
                    <h4>$30.27M</h4>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>{" "}
    </PageContainer>
  );
};

export default LandingPage;
