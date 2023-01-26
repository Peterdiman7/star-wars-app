import { Button, Grid } from "@mui/material";

import Header from "../header/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import planetId from "../../utils/arrSplit";

import styles from "../planets/Planet.module.css";
import { useTranslation } from "react-i18next";

const Planet = () => {
  const {t} = useTranslation(["common"]);

  const url = "https://swapi.dev/api/planets";

  const [planetUrl, setPlanetUrl] = useState();
  const [planets, setPlanets] = useState([]);
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(true);
  
  const climateArr = [];

  function filterByResidentsClickHandler() {
    setIsActive((current) => !current);
  }

  planets.forEach((planet) => climateArr.push(planet.climate));
  function showLessPlanets() {
    let showLessBtn = document.getElementById("showLess");
    showLessBtn.disabled = true;

    let showMoreBtn = document.getElementById("showMore");
    showMoreBtn.disabled = false;

    const fetchLess = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        setPlanetUrl(data.previous);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchLess();
  }

  function showMorePlanets() {
    let showLessBtn = document.getElementById("showLess");
    showLessBtn.disabled = false;

    let showMoreBtn = document.getElementById("showMore");
    showMoreBtn.disabled = true;

    const fetchMore = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        setPlanetUrl(data.next);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchMore();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!planetUrl) {
          const response = await axios(url);
          const data = response.data;
          setPlanets(data.results);
        } else {
          const response = await axios(planetUrl);
          const data = response.data;
          setPlanets(data.results);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  if (!isActive) {
    return (
      <div>
        <Header />
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
            onClick={showLessPlanets}
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
            onClick={showMorePlanets}
          >
            {t("moreBtn")}
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
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
            onClick={showLessPlanets}
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
            onClick={showMorePlanets}
          >
            {t("moreBtn")}
          </Button>
        </div>
      </div>
    );
  }
};

export default Planet;
