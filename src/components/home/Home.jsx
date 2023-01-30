import "firebase/compat/auth";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import backgroundVideo from "../../assets/intro.mp4";
import styles from "../home/Home.module.css";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";

const Home = () => {

  const navigate = useNavigate();
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
  }

  const handleRegister = () => {
    navigate("/register");
  }

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.background}>
      <video src={backgroundVideo} autoPlay loop muted />
        <button onClick={handleRegister} className={styles.registerBtn}>
          <p className={styles.registerBtnText}>{t("becomeAJedi")}</p>
        </button>
      <select
        value={localStorage.getItem("i18nextLng")}
        onChange={handleLanguageChange}
        className={styles.languageSelect}
      >
        <option value="" disabled defaultValue>
          Select something...
        </option>
        <option className={styles.choice} value="en">
          EN
        </option>
        <option className={styles.choice} value="bg">
          BG
        </option>
      </select>
      <button onClick={handleLogin} className={styles.loginBtn}>
        <p className={styles.loginBtnText}>{t("alreadyAJedi")}</p>
      </button>
      <Toaster />
    </div>
  );
};

export default Home;
