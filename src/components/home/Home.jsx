import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import backgroundVideo from "../../assets/intro.mp4";
import styles from "../home/Home.module.css";
import { useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  const { i18n, t } = useTranslation(["common"]);

  function loginClickBtnHandler() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        toast.error(
          "Error! You are already logged in! You will be redirected...",
          {
            icon: "❌",
            duration: 3000,
          }
        );
        setTimeout(() => {
          navigate("/planets");
        }, 3000);
      } else if (!user) {
        return navigate("/login");
      }
    });
  }

  useEffect(() => {
    if(localStorage.getItem("i18nextLng")?.length > 2){
      i18next.changeLanguage("en");
    }
  }, [])

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className={styles.background}>
      <video src={backgroundVideo} autoPlay loop muted />
      <Link to="/register">
        <button className={styles.registerBtn}>
          <p className={styles.registerBtnText}>{t("becomeAJedi")}</p>
        </button>
      </Link>
      <select value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange} className={styles.languageSelect}>
      <option value="" disabled defaultValue>Select something...</option>
        <option className={styles.choice} value="en">EN</option>
        <option className={styles.choice} value="bg">BG</option>
      </select>
      <button onClick={loginClickBtnHandler} className={styles.loginBtn}>
        <p className={styles.loginBtnText}>{t("alreadyAJedi")}</p>
      </button>
      <Toaster />
    </div>
  );
};

export default Home;
