import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="header-left">
        <Link href="/">
          <a>
            <h1 className={styles.title}>Ryuya Imafuku</h1>
          </a>
        </Link>
      </div>
      <div className={styles.header__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link href={`/contact`}>
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.menu__item}>
            <a href="https://github.com/ryuya416" target="_blank" rel="noopener noreferrer">
              <Image src="/skills/github.svg" alt="GitHub Logo" width={30} height={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
