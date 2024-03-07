import React from "react";
import Bitcoin from "./Bitcoin/Bitcoin.jsx";
import Trending from "./Trending.jsx";
import AboutBitcoin from "./AboutBitcoin.jsx";
import Team from "./Team.jsx";
import Tokenomics from "./Tokenomics.jsx";
import Sentiment from "./Sentiment.jsx";
import { Link, animateScroll as scroll } from "react-scroll";
import Overview from "./Overview.jsx";
import { dummyData } from "../utils/Data.jsx";
import { teamData } from "../utils/Data.jsx";

const Body = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-200 p-8">
      {/* Left Column */}
      <div className="col-span-full md:col-span-2 mb-8 md:mb-0">
        <div className="mx-4 md:ml-16 mt-16 md:rounded-xl">
          {/* Bitcoin */}
          <div className="rounded-2xl mb-5 md:mb-0" id="bitcoin">
            <Bitcoin />
          </div>

          {/* Option */}
          <div className="m-5 py-5 border-b-2 text-2xl border-gray-300 ">
            <ul className="flex flex-wrap justify-center md:justify-between">
              <li className="mb-2">
                <Link to="overview" smooth={true} duration={500}>
                  Overview
                </Link>
              </li>
              <li className="mb-2">
                <Link to="fundamentals" smooth={true} duration={500}>
                  Fundamentals
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" smooth={true} duration={500}>
                  News Insight
                </Link>
              </li>
              <li className="mb-2">
                <Link to="sentiment" smooth={true} duration={500}>
                  Sentiments
                </Link>
              </li>
              <li className="mb-2">
                <Link to="team" smooth={true} duration={500}>
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link to="technicals" smooth={true} duration={500}>
                  Technicals
                </Link>
              </li>
              <li className="mb-2">
                <Link to="tokenomics" smooth={true} duration={500}>
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>

          {/* Overview */}
          <div className="mt-5 bg-white" id="overview">
            <Overview data={dummyData} />
          </div>
          {/* Sentiment */}
          <div className="mt-5 bg-white rounded-lg" id="sentiment">
            <Sentiment></Sentiment>
          </div>

          {/* About Bitcoin */}
          <div className=" mt-5 " id="bitcoin">
            <AboutBitcoin />
          </div>

          {/* Tokenomics */}
          <div className="bg" id="tokenomics">
            <Tokenomics></Tokenomics>
          </div>

          {/* Team */}
          <div className="mt-5" id="team">
            <Team teamData={teamData} />
          </div>
        </div>
      </div>


      {/* Right Column */}
      <div className="col-span-1 mx-4">
        {/* First Section */}
        <div className="flex flex-col text-white">
          <div className="mt-16 rounded-xl bg-blue-600 align-middle flex-col px-8 py-8">
            <div className="m-2 justify-center text-3xl">
              <h1 className="text-center p-8 font-sans">
                Get Started with Koinx for FREE
              </h1>
            </div>
            <div className="px-8">
              <p className="text-center">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports,
              </p>
            </div>
            <div className="flex justify-center align-middle m-5 mt-5">
              <img
                src="https://i.ibb.co/fnyrVCH/images-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="flex align-middle justify-center mb-8">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-10 rounded-lg border border-gray-300 mb-4"
                onClick={scrollToTop}
              >
                Get Started for FREE →
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <Trending />
      </div>
    </div>
  );
};

export default Body;
