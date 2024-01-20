import {
  faGithub,
  faLinkedinIn,
  faUnsplash,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/avatar.jpg";
import styles from "./profile.module.scss";
import React  from 'react';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.profile}>
      <img className={styles.img} src={avatar} alt="Kevin" />
      <hr className={styles.hr} />
      <h1 className={styles.h1}>Kevin Zhang</h1>
      <p className={styles.title}>{t("title")}</p>
      <p className={styles.location}>{t("location")}</p>
      <hr className={styles.hr} />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a
            className={styles.a}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kzz/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a
            className={styles.a}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kzz"
            aria-label="GitHub"
          >
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className={styles.a}
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/@kzhang"
            aria-label="Unsplash"
          >
            <FontAwesomeIcon className={styles.icon} icon={faUnsplash} />
          </a>
        </li>
        <li>
          <a
            className={styles.a}
            href="mailto:hi@kevinzhang.ca"
            aria-label={t("email")}
          >
            <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} />
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Profile;
