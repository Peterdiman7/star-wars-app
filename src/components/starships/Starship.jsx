import { Button, Grid } from "@mui/material";

import Header from "../header/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { starshipId } from "../../utils/arrSplit";

import styles from "../starships/Starship.module.css";
import { useTranslation } from "react-i18next";

const Starship = () => {
    
  const { t } = useTranslation(["common"]);

    const url = "https://swapi.dev/api/starships";
    const [starshipUrl, setStarshipUrl] = useState();
    const [starships, setStarships] = useState([]);

    function showLessStarships() {
        let showLessBtn = document.getElementById('showLess');
        showLessBtn.disabled = true;

        let showMoreBtn = document.getElementById('showMore');
        showMoreBtn.disabled = false;

        const fetchLess = async () => {
            try {
                const response = await axios(url);
                const data = response.data;
                setStarshipUrl(data.previous);
            } catch(error) {
                console.log(error.response);
            }
        }
        fetchLess();
    }

    function showMoreStarships() {
            let showLessBtn = document.getElementById('showLess');
            showLessBtn.disabled = false;

            let showMoreBtn = document.getElementById('showMore');
            showMoreBtn.disabled = true;

            const fetchMore = async () => {
            try {
                const response = await axios(url);
                const data = response.data;
                setStarshipUrl(data.next);
            } catch(error) {
                console.log(error.response);
            }
        }
        fetchMore();
    }

    useEffect(() => {
        const fetchData = async () => {
        try {
            if(!starshipUrl) {
                const response = await axios(url);
                const data = response.data;
                setStarships(data.results);
            }else {
                const response = await axios(starshipUrl);
                const data = response.data;
                setStarships(data.results);
            }
        } catch(error) {
            console.log(error.response);
        }
    }
    fetchData();
}, [starshipUrl])

return(
    <div>
        <Header />
            <Grid container 
                sx={{justifyContent: "center", alignContent: "center", alignSelf: "center", marginTop: 10 }} rowSpacing={5} columnSpacing={5}>
                {starships.map((starship) => (
                    <Grid 
                    key={starship.name} 
                    item 
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12} sx={{textAlign: "center"}}>
                    <Link to={`/starships/${starshipId(starship.url)}`} className={styles.link}>
                        <span className={styles.planet}>
                            {starship.name}
                        </span>
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
                    color: "black"
                }}}
                variant="outlined"
                onClick={showLessStarships}
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
                    color: "black"
                }}}

                variant="outlined"
                onClick={showMoreStarships}
                >
                    {t("moreBtn")}
                </Button>
            </div>
    </div>
);
}
export default Starship;