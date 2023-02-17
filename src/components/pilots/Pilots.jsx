import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { useState } from "react";

import styles from "../pilots/Pilots.module.css";
import { useTranslation } from "react-i18next";

function Pilots() {
  const { t } = useTranslation(["common"]);
  const url = "https://react-star-wars-a9613-default-rtdb.firebaseio.com/pilots.json";
  const [pilots, setPilots] = useState([]);
  
  React.useEffect(() => {

    const pilotsArr = [];

    const fetchPilots = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        for (const key in response.data) {
          pilotsArr.unshift({
            ...data[key],
            id: key,
          });
          setPilots(pilotsArr);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchPilots();
  }, []);

  return (
    <>
      <div className={styles.cardContainer}>
        {pilots.map((pilot) => (
          <Card key={pilot.name} className={styles.pilotCard} sx={{ maxWidth: 200 }}>
            <CardMedia sx={{ height: 200 }} image={pilot.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pilot.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {t("startInput")} {pilot.date}
                <br />
                {t("starshipInput")} {pilot.starshipName}
                <br />
                {t("experienceInput")} {pilot.experience} {t("flightHours")}
                <br />
                {t("emailInput")} {pilot.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Pilots;
