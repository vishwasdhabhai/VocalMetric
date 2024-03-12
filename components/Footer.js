import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.author}>
        Made by{" "}
        <span className={styles.link}>
          <a
            href="https://github.com/vishwasdhabhai"
            target="_blank"
            rel="noreferrer"
          >
            Vishwas Dhabhai
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
