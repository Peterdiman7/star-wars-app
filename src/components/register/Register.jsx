import { useNavigate } from "react-router-dom";
import styles from "../register/Register.module.css";
import toast from "react-hot-toast";
import { UserAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { routing } from "../../routing";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = UserAuth();

  const { t } = useTranslation(["common"]);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
      navigate(routing.main);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
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
            placeholder={t("emailInput")}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="lastname"
            className={styles.passwordInput}
            type="password"
            placeholder={t("passwordInput")}
          />
        </div>
        <button type="submit" className={styles.submit}>
          {t("submit")}
        </button>
      </form>
  );
};
export default Register;
