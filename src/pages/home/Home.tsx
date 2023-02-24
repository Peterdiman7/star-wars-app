import "firebase/compat/auth";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import backgroundVideo from "../../assets/eevee.mp4";
import styles from "../home/Home.module.css";
import { routing } from "../../routing";
import pokeball from "../../assets/pokeball.png";
import masterball from "../../assets/masterball.png";
import React from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(routing.login);
  };

  const handleRegister = () => {
    navigate(routing.register);
  };

  return (
    <div className={styles.background}>
      <video src={backgroundVideo} autoPlay loop muted />
      <div className={styles.loginContainer}>
      <motion.img
      onClick={handleRegister}
      className={styles.pokeballLogin}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      src={pokeball}
      animate={{rotate: 360}}
      transition={{ type: "spring", duration: 5, bounce: 0.6 }}
      />
      </div>
      <motion.img
      onClick={handleLogin}
      className={styles.pokeballRegister}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      src={masterball}
      animate={{ rotate: 360 }}
      transition={{ type: "spring", duration: 5, bounce: 0.6 }}
      />

    </div>
  );
};

export default Home;
