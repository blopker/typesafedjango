import styles from "./Time.module.css";

function Time(props: { time: string }) {
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
  return (
    <time datetime={props.time} class={styles.Time}>
      {hippoTime()}
    </time>
  );
}

export default Time;
