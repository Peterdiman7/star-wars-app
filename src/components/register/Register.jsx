import { useNavigate } from "react-router-dom";
import styles from "../register/Register.module.css";
import toast from "react-hot-toast";
import { UserAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();

  const { t } = useTranslation(["common"]);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await createUser(email, password)
      navigate("/main");
    } catch (e) {
      setError(e.message);
      toast.error(error);
    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.title}>{t("welcome")}</div>
        <div className={styles.subtitle}>{t("createAcc")}</div>
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
export default Register;
