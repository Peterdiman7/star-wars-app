import { Button, Grid } from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { planetId } from "../../utils/arrSplit";

import styles from "../planets/Planet.module.css";
import { useTranslation } from "react-i18next";

const Planet = () => {
  const { t } = useTranslation(["common"]);

  const [planets, setPlanets] = useState([]);
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = useState(1);

  const climateArr = planets.map((planet) => planet.climate);

  const url = `https://swapi.dev/api/planets`;

  function filterByResidentsClickHandler() {
    setIsActive((current) => !current);
  }

  planets.forEach((planet) => climateArr.push(planet.climate));
  const showPageOne = async () => {
    const showLessBtn = document.querySelector("#showLess");
    showLessBtn.disabled = true;

    const showMoreBtn = document.querySelector("#showMore");
    showMoreBtn.disabled = false;

    try {
      const response = await axios(`${url}?page=${counter}`);
      const data = response.data;
      setPlanets(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showPageTwo = async () => {
    const showLessBtn = document.querySelector("#showLess");
    showLessBtn.disabled = false;

    const showMoreBtn = document.querySelector("#showMore");
    showMoreBtn.disabled = true;

    try {
      const response = await axios(`${url}?page=${counter + 1}`);
      const data = response.data;
      setPlanets(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const showLessBtn = document.querySelector("#showLess");
    showLessBtn.disabled = true;
    const fetchData = async () => {
      try {
        const response = await axios(`${url}?page=${counter}`);
        const data = response.data;
        setPlanets(data.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  if (!isActive) {
    return (
      <div>
        <div className={styles.filterBtnContainer}>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className={styles.filterByClimate}
            placeholder={t("filterClimate")}
            variant="outlined"
          />
          <Button
            onClick={filterByResidentsClickHandler}
            className={styles.filterByResidents}
            variant="outlined"
          >
            {t("filterResidents")}
          </Button>
        </div>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
          rowSpacing={5}
          columnSpacing={5}
        >
          {planets
            .filter((planet) => planet.residents.length > 10)
            .map((planet) => (
              <Grid
                key={planet.name}
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                sx={{ textAlign: "center" }}
              >
                <Link
                  to={`/planets/${planetId(planet.url)}`}
                  className={styles.link}
                >
                  <span className={styles.planet}>{planet.name}</span>
                </Link>
              </Grid>
            ))}
        </Grid>
        <div className={styles.btnContainer}>
          <Button
            id="showLess"
            sx={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "2.5px",
              ":hover": {
                color: "black",
              },
            }}
            variant="outlined"
            onClick={showPageOne}
          >
            {t("backBtn")}
          </Button>
          <Button
            id="showMore"
            sx={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "2.5px",
              ":hover": {
                color: "black",
              },
            }}
            variant="outlined"
            onClick={showPageTwo}
          >
            {t("moreBtn")}
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.filterBtnContainer}>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className={styles.filterByClimate}
            placeholder={t("filterClimate")}
            variant="outlined"
          />
          <Button
            onClick={filterByResidentsClickHandler}
            className={styles.filterByResidents}
            variant="outlined"
          >
            {t("filterResidents")}
          </Button>
        </div>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
          rowSpacing={5}
          columnSpacing={5}
        >
          {planets
            .filter((climate) => climate.climate.includes(query))
            .map((planet) => (
              <Grid
                key={planet.name}
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                sx={{ textAlign: "center" }}
              >
                <Link
                  to={`/planets/${planetId(planet.url)}`}
                  className={styles.link}
                >
                  <span className={styles.planet}>{planet.name}</span>
                </Link>
              </Grid>
            ))}
        </Grid>
        <div className={styles.btnContainer}>
          <Button
            id="showLess"
            sx={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "2.5px",
              ":hover": {
                color: "black",
              },
            }}
            variant="outlined"
            onClick={showPageOne}
          >
            {t("backBtn")}
          </Button>
          <Button
            id="showMore"
            sx={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "2.5px",
              ":hover": {
                color: "black",
              },
            }}
            variant="outlined"
            onClick={showPageTwo}
          >
            {t("moreBtn")}
          </Button>
        </div>
      </div>
    );
  }
};

export default Planet;
