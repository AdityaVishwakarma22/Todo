import styles from "./page.module.css";
import Task from "./tasks/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Task />
    </main>
  );
}
