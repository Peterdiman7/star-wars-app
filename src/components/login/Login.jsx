import firebase, { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import styles from "../register/Register.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);
  
  const onLoginFormSubmitHandler = (e) => {
    
    e.preventDefault();

    const user = auth.currentUser;
    
    let username = e.target.username.value;
    let password = e.target.password.value;
    
    if(!user){
      auth.signInWithEmailAndPassword(username, password)
      toast.success("Login Successful!", {
        duration: 3000,
        position: "top-center",
        iconTheme: {
          primary: "#A4DE02",
          secondary: "#fff",
        },
      });
      setTimeout(() => {
        navigate("/main");
      }, 3000);
    } else if(user) {
      toast.error("Error! You are already logged in!")
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={onLoginFormSubmitHandler}>
        <div className={styles.title}>{t("welcome")}</div>
        <div className={styles.subtitle}>{t("loginHere")}</div>
        <div className={styles.inputContainer}>
          <input
            name="username"
            id="firstname"
            className={styles.emailInput}
            type="text"
            placeholder="E-mail..."
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            name="password"
            id="lastname"
            className={styles.passwordInput}
            type="password"
            placeholder="Password..."
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
