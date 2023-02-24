import { Button, Grid } from "@mui/material";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { starshipId } from "../../utils/arrSplit";

import styles from "../starships/Starship.module.css";
import { useTranslation } from "react-i18next";

const Starship = () => {
  const { t } = useTranslation(["common"]);

  const url = "https://swapi.dev/api/starships";
  const [starships, setStarships] = useState([]);

  const showPageOne = async () => {
    const showLessBtn = document.getElementById("showLess");
    showLessBtn.disabled = true;

    const showMoreBtn = document.getElementById("showMore");
    showMoreBtn.disabled = false;

    try {
      const response = await axios(url + "?page=1");
      const data = response.data;
      setStarships(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showPageTwo = async () => {
    const showLessBtn = document.getElementById("showLess");
    showLessBtn.disabled = false;

    const showMoreBtn = document.getElementById("showMore");
    showMoreBtn.disabled = true;

    try {
      const response = await axios(`${url}?page=2`);
      const data = response.data;
      setStarships(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        setStarships(data.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
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
        {starships.map((starship) => (
          <Grid
            key={starship.name}
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            sx={{ textAlign: "center" }}
          >
            <Link
              to={`/starships/${starshipId(starship.url)}`}
              className={styles.link}
            >
              <span className={styles.planet}>{starship.name}</span>
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
};
export default Starship;
