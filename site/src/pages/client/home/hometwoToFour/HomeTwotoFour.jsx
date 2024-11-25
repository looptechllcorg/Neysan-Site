import React from "react";
import HomeInformation from "../homeInformation/HomeInformation";
import "./HomeToFour.scss"
import homePattern1 from "../../../../assets/pattern/homePattern1.png"
import homePattern2 from "../../../../assets/pattern/homePattern2.png"
import homePattern3 from "../../../../assets/pattern/homePattern3.png"
import homePattern4 from "../../../../assets/pattern/homePattern4.png"
import homePattern5 from "../../../../assets/pattern/homePattern5.png"

const HomeTwotoFour = () => {
  return (
    <section id="HomeToFour">
      {/* Pattern */}
      <img className="homePatternOne" src={homePattern1} alt="" />
      <img className="homePatternTwo" src={homePattern2} alt="" />
      <img className="homePatternThree" src={homePattern3} alt="" />
      <img className="homePatternFour" src={homePattern4} alt="" />
      <img className="homePatternFive" src={homePattern5} alt="" />
      {/* Second section */}
      <HomeInformation cloudType={1} textPosition={"left"} infoHeadText={"What If?"}  infoText={"What if we remove the insecurity and cautiousness from life? What if we turned back the clock? What if we could go back to the days when we had a rather uncomplicated affair with food? What if we could relive days when there were zero lifestyle diseases as a consequence of eating? What if we simplify?"}/>

      {/* Third Section */}
      <HomeInformation cloudType={2}  textPosition={"right"} infoHeadText={"Let ask why?"} infoText={"Olive is a versatile and ancient fruit that has been cultivated for thousands of years, playing a central role in Mediterranean cultures. Not only is it a key ingredient in countless dishes, but its oil, derived from pressing olives, is renowned for its health benefits and culinary uses."}/>

      {/* Fourth Section */}
      <HomeInformation cloudType={3} textPosition={"left"} infoHeadText={"We have tried "} infoText={"Olive is a versatile and ancient fruit that has been cultivated for thousands of years, playing a central role in Mediterranean cultures. Not only is it a key ingredient in countless dishes, but its oil, derived from pressing olives, is renowned for its health benefits and culinary uses."} />
    </section>
  );
};

export default HomeTwotoFour;
