import * as React from "react";

const Bar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    display="block"
    preserveAspectRatio="xMidYMid"
    style={{ background: "#fff" }}
    viewBox="0 0 100 100"
  >
    <path fill="#e15b64" d="M15 30h10v40H15z">
      <animate
        attributeName="opacity"
        begin="-0.6"
        calcMode="spline"
        dur="1s"
        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="1;0.2;1"
      ></animate>
    </path>
    <path fill="#f47e60" d="M35 30h10v40H35z">
      <animate
        attributeName="opacity"
        begin="-0.4"
        calcMode="spline"
        dur="1s"
        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="1;0.2;1"
      ></animate>
    </path>
    <path fill="#f8b26a" d="M55 30h10v40H55z">
      <animate
        attributeName="opacity"
        begin="-0.2"
        calcMode="spline"
        dur="1s"
        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="1;0.2;1"
      ></animate>
    </path>
    <path fill="#abbd81" d="M75 30h10v40H75z">
      <animate
        attributeName="opacity"
        begin="-1"
        calcMode="spline"
        dur="1s"
        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="1;0.2;1"
      ></animate>
    </path>
  </svg>
);

export default Bar;
