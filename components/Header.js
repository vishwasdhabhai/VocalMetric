import Link from "next/link";
import Router from "next/router";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <div
          className={styles.logo}
          onClick={() => {
            window.location.pathname === "/" &&
              Router.reload(window.location.pathname);
          }}
        >
          <h2 className={styles.name}>voicemetric</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
