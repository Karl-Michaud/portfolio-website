import styles from "./page.module.css";
import { Intro } from "./home/intro";


export default function Home() {
  return (
    <div className={styles.page}>
      <Intro/>
    </div>
  );
}
