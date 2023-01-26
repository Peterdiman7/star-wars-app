import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import styles from "../register/Register.module.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  const OnLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;
      auth.
      signInWithEmailAndPassword(username, password)
        .then((userCredentials) => {
  
          toast.success(
            "Login Successful!",
            {
              duration: 3000,
              position: "top-center",
              iconTheme: {
                primary: "#A4DE02",
                secondary: "#fff",
              },
            }
          );
          setTimeout(() => {
            navigate("/main");
          }, 3000);
        });
  }
    
  return (
    <div className={styles.form}>
      <form onSubmit={OnLoginFormSubmitHandler}>
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
        <Toaster position="top-center" reverseOrder={true} />
      </form>
    </div>
  );
}

export default Login;
