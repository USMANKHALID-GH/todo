import style from "/src/css/footer.module.css";
export default function Footer({ completed, notDone }) {
  return (
    <div className={style.footer}>
      <h1>
        Done: {completed} Not Done : {notDone}
      </h1>
    </div>
  );
}
