import { createSignal } from "solid-js";
import styles from "./Time.module.css";

function Time(props: { time: string }) {
  const [now, setNow] = createSignal(Date.now());
  setInterval(() => setNow(Date.now()), 1000);
  const hippoTime = () => {
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return dateTimeFormat.format(new Date(props.time));
  };
  const secondsToTime = () =>
    Math.floor((new Date(props.time).getTime() - now()) / 1000);
  return (
    <time datetime={props.time} class={styles.Time}>
      {hippoTime()}, {secondsToTime()} seconds from now!
    </time>
  );
}

export default Time;
