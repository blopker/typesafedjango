import { customElement, noShadowDOM } from "solid-element";
import "./index.css";
import Time from "./Time";
import Food from "./Food";

customElement("my-time", { time: "" }, (props, { element }) => {
  noShadowDOM();
  element.innerHTML = "";
  return <Time time={props.time} />;
});

customElement("my-food", (props, { element }) => {
  noShadowDOM();
  element.innerHTML = "";
  return <Food />;
});
