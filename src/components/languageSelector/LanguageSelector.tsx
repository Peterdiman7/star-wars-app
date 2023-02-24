// @ts-nocheck localStorage //
import React from "react";
import styles from "../languageSelector/LanguageSelector.module.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const LanguageSelector = () => {
  const { i18n } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={localStorage.getItem("i18nextLng")}
      onChange={handleLanguageChange}
      className={styles.languageSelect}
    >
      <option value="" disabled>
        Select something...
      </option>
      <option className={styles.choice} value="en">
        EN
      </option>
      <option className={styles.choice} value="bg">
        BG
      </option>
    </select>
  );
};

export default LanguageSelector;
