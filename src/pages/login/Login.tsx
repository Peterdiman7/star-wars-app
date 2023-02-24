// @ts-nocheck error
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../login/Login.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";
import { routing } from "../../routing";
import eevee from "../../assets/eevee.png";
import eeveeAudio from "../../assets/eeveeAudio.mp3";
import { motion } from "framer-motion";

const Login = () => {
  const audio = new Audio(eeveeAudio);
  audio.loop = false;
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      try {
        await signIn(email, password);
        navigate(routing.main);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div className={styles.background}>
      <div className={styles.imgContainer}>
        <motion.img
          onClick={() => audio.play()}
          className={styles.eeveeImg}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          src={eevee}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>{t("welcome")}</div>
        <div className={styles.subtitle}>{t("loginHere")}</div>
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="username"
            id="firstname"
            className={styles.emailInput}
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="lastname"
            className={styles.passwordInput}
            type="password"
          />
        </div>
        <button type="submit" className={styles.submit}>
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default Login;
