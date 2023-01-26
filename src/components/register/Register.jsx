import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import styles from "../register/Register.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Register = () => {
  const {t} = useTranslation(["common"]);

  let navigate = useNavigate();
  function onRegisterFormSubmitHandler(e) {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    auth
      .createUserWithEmailAndPassword(username, password)
      .then((userCredentials) => {

        toast.success(
          "Register Successful! You will be redirected to Main page!",
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
      <form onSubmit={onRegisterFormSubmitHandler}>
        <div className={styles.title}>{t("welcome")}</div>
        <div className={styles.subtitle}>{t("createAcc")}</div>
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
};

export default Register;
