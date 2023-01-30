import { useNavigate } from "react-router-dom";

import styles from "../register/Register.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = auth.currentUser;
    console.log(user);
    if(!auth.currentUser){
    try {
      await signIn(email, password);
      navigate("/main");
    } catch (e) {
      setError(e.message);
      toast.error(error);
    }
  } else {
    toast.error("You are already logged in!!", {
      duration: 2500,
    })
    setTimeout(() => {
      navigate("/planets");
    }, 2500);
  }

  }
    return (
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>{t("welcome")}</div>
          <div className={styles.subtitle}>{t("loginHere")}</div>
          <div className={styles.inputContainer}>
            <input
            onChange={(e) => setEmail(e.target.value)}
              name="username"
              id="firstname"
              className={styles.emailInput}
              type="text"
              placeholder="E-mail..."
            />
          </div>
          <div className={styles.inputContainer}>
            <input
            onChange={(e) => setPassword(e.target.value)}
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
