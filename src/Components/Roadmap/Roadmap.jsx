import React, { useEffect, useState, useRef, useCallback } from "react";
import TextDescCard from "../TextDescCard";
import "./Roadmap.css";
import { useWindowScroll } from "react-use";
const Roadmap = () => {
  const [scrolled, setScrolled] = useState(0);

  const { x, y } = useWindowScroll();

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
    console.log("height", height);
    console.log("y", y);
  }, [y, scrolled]);



  return (
    <>
      <div className="mainContainerRoadmap">
        <div className="topHeaderText">
          <p className="roadMapHeading">Roadmap</p>
          <img src="" alt="" className="roadMapHeadingImg" />
          <p className="roadMapHeaderDesc">WE HAVE BIG PLANS FOR BIG CATS</p>
        </div>

        <div className="containerBody">
          <div className="topTopProgressBarMain">
            <div className="topProgressBarMain">
              <div className="progressBarMain">
                <div className="squareDiamond"></div>
                <div className="brogressBar"></div>
              </div>
              <div className="progressBarMain">
                <div className="squareDiamond"></div>
                <div className="brogressBar"></div>
              </div>
              <div className="progressBarMain">
                <div className="squareDiamond"></div>
                <div className="brogressBar"></div>
              </div>
              <div className="progressBarMain">
                <div className="squareDiamond"></div>
                <div className="brogressBar"></div>
              </div>
              <div className="progressBarMain" style={{ marginTop: "9px" }}>
                <div className="squareDiamond"></div>
                {/* <div className="brogressBar"></div> */}
              </div>
            </div>

            <div style={{ height: "100%", position: "relative" }}>
              <div className="topBarGlow" style={{ position: "absolute" }}>
                <div
                  className="squareDiamondGlow"
                  style={{ height: `${scrolled}%` }}
                ></div>
                <div
                  className="squareDiamondBack1"
                  style={{ height: `${scrolled}%` }}
                ></div>
                <div
                  style={{ height: `${scrolled}%` }}
                  className="glowBar"
                ></div>

                {scrolled >= 22.481327800829874 && (
                  <div
                    className="squareDiamondGlow1"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}
                {scrolled >= 22.481327800829874 && (
                  <div
                    className="squareDiamondBack2"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}

                {scrolled >= 44.481327800829874 && (
                  <div
                    className="squareDiamondGlow2"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}
                {scrolled >= 44.481327800829874 && (
                  <div
                    className="squareDiamondBack3"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}

                {scrolled >= 70.481327800829874 && (
                  <div
                    className="squareDiamondGlow3"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}
                {scrolled >= 70.481327800829874 && (
                  <div
                    className="squareDiamondBack4"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}

                {scrolled >= 95.481327800829874 && (
                  <div
                    className="squareDiamondGlow4"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}

                {scrolled >= 95.481327800829874 && (
                  <div
                    className="squareDiamondBack5"
                    style={{ height: `${scrolled}%` }}
                  ></div>
                )}
              </div>
            </div>
          </div>

          <div className="topCardComponents">
            <TextDescCard number={"01"}/>
            <TextDescCard  number={"02"}/>
            <TextDescCard  number={"03"}/>
            <TextDescCard  number={"04"}/>
            <TextDescCard  number={"05"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
