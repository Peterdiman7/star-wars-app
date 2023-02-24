import { useNavigate } from "react-router-dom";

import styles from "../register/Register.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";
import { routing } from "../../routing";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    console.log(user);
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.title}>{t("welcome")}</p>
      <p className={styles.subtitle}>{t("loginHere")}</p>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="username"
          className={styles.emailInput}
          type="text"
          placeholder={t("enterEmail")}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className={styles.passwordInput}
          type="password"
          placeholder={t("enterPassword")}
        />
      </div>
      <button type="submit" className={styles.submit}>
        {t("submit")}
      </button>
    </form>
  );
};

export default Login;
