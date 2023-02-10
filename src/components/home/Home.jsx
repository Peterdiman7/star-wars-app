import "firebase/compat/auth";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import backgroundVideo from "../../assets/intro.mp4";
import styles from "../home/Home.module.css";
import { useEffect } from "react";
import { routing } from "../../routing";

const Home = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLogin = () => {
    navigate(routing.login);
  };

  const handleRegister = () => {
    navigate(routing.register);
  };

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
    </div>
  );
};

export default Home;
