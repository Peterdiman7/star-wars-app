// @ts-nocheck error

import React from "react";
import styles from "../register/Register.module.css";

import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { routing } from "../../routing";

import toast from "react-hot-toast";
import { motion } from "framer-motion";
import pikachu from "../../assets/pikachu.png";
import pikachuAudio from "../../assets/pikachu.mp3";

const Register = () => {
  const audio = new Audio(pikachuAudio);
  audio.loop = false;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = UserAuth();

  const { t } = useTranslation(["common"]);

  let navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate(routing.main);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.background}>
        <div className={styles.imgContainer}>
          <motion.img
            onClick={() => audio.play()}
            className={styles.pikachuImg}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            src={pikachu}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          />
        </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>{t("welcome")}</div>
        <div className={styles.subtitle}>{t("createAcc")}</div>
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
export default Register;
