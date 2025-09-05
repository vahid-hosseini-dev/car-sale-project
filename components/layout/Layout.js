import Link from "next/link";
import styles from "./Layout.module.css";

function layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <h2>CarSale</h2>
          <p>Choose and Buy Your Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://vahidhosseini.net" target="_blank">
          VHD
        </a>
        Next.js Project | Care Sale &copy;
      </footer>
    </>
  );
}

export default layout;
