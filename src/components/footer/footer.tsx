import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";
import React  from 'react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.text}>&copy; Kevin Zhang</span>
        </li>
        <li className={styles.li}>
          <button
            className={styles.button}
            onClick={() =>
              i18n.changeLanguage(i18n.language.includes("fr") ? "en" : "fr")
            }
          >
            <span className={styles.text}>{t("language")}</span>
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
