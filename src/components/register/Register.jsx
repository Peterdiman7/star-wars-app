import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import styles from "../register/Register.module.css";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation(["common"]);

  let navigate = useNavigate();

  function onRegisterFormSubmitHandler(e) {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    const currentUser = auth.currentUser;

    if (!currentUser) {
      auth
        .createUserWithEmailAndPassword(username, password)
        .then((userCredentials) => {
          toast.success("Successfully registered!", {
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
        })
        .catch((err) => toast.error(err.code));
    }
    if (currentUser) {
      toast.error("Log out to create an account!");
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    }
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
      </form>
    </div>
  );
};
export default Register;
