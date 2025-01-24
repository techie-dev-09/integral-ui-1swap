import PageContainer from "@/components/common/PageContainer";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import "./LandingPage.css";
import { FaDiscord, FaGithub, FaMedium, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import AlgebraLogo from "@/assets/1swap.svg";
import AlgebraIntegral from "@/assets/1swap-full.svg";
import build_on_bitfinity from "@/assets/landingpage/build_on_bitfinity.svg";
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
import { Link } from "react-router-dom";

const formatLargeNumber = (value: number) => {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(2)}T`; // Trillion
  } else if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`; // Billion
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`; // Million
  } else {
    return value.toString();
  }
};

interface ICPDataType {
  market_cap?: number;
}

const LandingPage = () => {
  const [ICPData, setICPData] = useState<ICPDataType>({});

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

  const coinmarketcapFunc = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=internet-computer"
      )
      .then((res) => {
        console.log("-------res--------", res.data[0]);
        setICPData(res.data[0]);
      })
      .catch(() => {});
  };

  useEffect(() => {
    coinmarketcapFunc();
  }, []);

  return (
    <>
      <PageContainer>
        <div className="App">
          <div className="main-content">
            <div className="first-section">
              <div className="container">
                <div className="fs-content">
                  <div className="flex items-center justify-center">
                    <img src={build_on_bitfinity} width={200} />
                  </div>
                  <h1 className="d-flex flex-row align-items-center">
                    <span>
                      THE FIRST <br />
                      <div className="flex flex-row items-center justify-center">
                        <span>composable DEX built on BTC</span>
                      </div>
                    </span>
                  </h1>

                  <Link to={"/swap"}>Swap Now</Link>
                </div>
              </div>
            </div>

            <div className="second-section">
              <div className="container">
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

            {/* <div className="third-section">
              <div className="container">
                <div className="ts-content">
                  <h2>THENA in Numbers</h2>
                  <div className="three-col-content">
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
                        <h4>$22.55B</h4>
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
                        <h4>$62.09M</h4>
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
                  </div>
                </div>
              </div>
            </div> */}

            <div className="forth-section">
              <div className="container">
                <div className="forth-content">
                  <h2>
                    Infinite DeFi for <span>ICP BRC-20</span> and{" "}
                    <span>Runes</span>
                  </h2>
                  <p>1swap is the first composable swap on Bitfinity.</p>
                  <Link to={"/swap"}>Go to app</Link>
                </div>
              </div>
            </div>

            <div className="fifth-section">
              <div className="container">
                <div className="strike-content">
                  <p>
                    <span>Metrics</span>
                  </p>
                </div>
                <h2>Jump Into Untapped DeFi Potential</h2>
                <p>
                  With 1swap, you have easy access to a new array of <br />
                  assets.
                </p>

                <div className="three-col-card">
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-blue">
                        ${formatLargeNumber(Number(ICPData?.market_cap))}
                      </h3>
                      <p>ICP Market Cap</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-blue">$0.05B</h3>
                      <p>ICP DeFi TVL</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-blue">1%</h3>
                      <p>DeFi TVL/Market Cap</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-yellow">$2.5B</h3>
                      <p>Runes + BRC-20 Market Cap</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-yellow">$0</h3>
                      <p>EVM Runes + BRC-20 DeFi TVL</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-yellow">0%</h3>
                      <p>DeFi TVL/Market Cap</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-blue">$2.02T</h3>
                      <p>BTC Market Cap</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-blue">$7.018B</h3>
                      <p>BTC DeFi TVL</p>
                    </div>
                  </div>
                  <div className="single-card">
                    <div className="card-content">
                      <h3 className="text-blue">0.35%</h3>
                      <p>BTC TVL/Market Cap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sixth-section">
              <div className="container">
                <div className="style-hr">
                  <h2>Partners</h2>
                  <p>
                    We work with innovative platforms and industry leaders to
                    improve the ICP and Bitcoin ecosystems.
                  </p>
                </div>
                <div className="multiple-images">
                  <div className="imgs">
                    <div className="img">
                      <img src="https://utfs.io/f/65d67b14-b2ea-4d48-b9f5-70f7a97c2e74-jk5k6t.svg" />
                      <p>
                        <a href="1buy.io">1buy.io</a>
                      </p>
                    </div>
                    <div className="img">
                      <img src="https://www.lendfinity.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbitfinityevm.9ca2b0e8.png&w=256&q=75" />
                      <p>
                        <a href="https://bitfinity.network/">Bitfinity</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="seventh-section">
              <div className="container">
                <h2>Join Us in Revolutionizing DeFi</h2>
                <p>
                  Be part of the next wave of DeFi. Secure your position with
                  1swap.
                </p>
                <Link to={"/swap"}>Go to app</Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </PageContainer>
      <footer className="App-footer">
        <div className="container">
          <div className="right-content">
            <div className="footer-logo">
              <span className="logo">
                <div className="flex items-center gap-2 py-1 pl-2 duration-200">
                  <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full">
                    <img
                      src={AlgebraLogo}
                      width={25}
                      height={25}
                      style={{ height: "25px" }}
                    />
                  </div>
                  <img
                    className="hidden md:block mt-1"
                    src={AlgebraIntegral}
                    width={80}
                    height={25}
                    style={{ height: "25px" }}
                  />
                </div>
              </span>
            </div>
            <div className="footer-icons">
              <ul className="icons-list">
                <li className="icon">
                  <a href="#">
                    <FaDiscord />
                  </a>
                </li>
                <li className="icon">
                  <a href="#">
                    <FaTelegramPlane />
                  </a>
                </li>
                <li className="icon">
                  <a href="#">
                    <BsTwitterX />
                  </a>
                </li>
                <li className="icon">
                  <a href="#">
                    <FaMedium />
                  </a>
                </li>
                <li className="icon">
                  <a href="#">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
