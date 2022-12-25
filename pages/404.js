import Link from "next/link";
import styles from "/styles/404.module.sass";

export default function NoPage() {
  return (
    <div className={styles.pageContainer}>
      <h1>Ooooopss...</h1>
      <h2>This page could not be found.</h2>
      <p>
        Let's go back to the <Link href="/">home page</Link>
      </p>
    </div>
  );
}
