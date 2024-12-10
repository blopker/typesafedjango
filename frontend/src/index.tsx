import { customElement, noShadowDOM } from "solid-element";
import "./index.css";
import Food from "./Food";
import Time from "./Time";

customElement("w-food-time", { time: "" }, (props, { element }) => {
  noShadowDOM();
  element.innerHTML = "";
  return <Time time={props.time} />;
});

customElement("w-my-food", (props, { element }) => {
  noShadowDOM();
  element.innerHTML = "";
  return <Food />;
});
