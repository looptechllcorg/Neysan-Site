import React from "react";
import HomeInformation from "../homeInformation/HomeInformation";

const HomeTwotoFour = () => {
  return (
    <section>
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
