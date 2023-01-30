import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { useState } from "react";
import Header from "../header/Header";

import styles from "../pilots/Pilots.module.css";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

function Pilots() {
  let url =
    "https://react-star-wars-a9613-default-rtdb.firebaseio.com/pilots.json";
    const [pilots, setPilots] = useState([]);

    const user = auth.currentUser;
    const pilotsArr = [];
    
    React.useEffect(() => {
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
  }, [pilots])

    return (
      <>
        <Header />
        <div className={styles.cardContainer}>
        {pilots.map((pilot) => (
          <Card
          className={styles.pilotCard}
          sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={pilot.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pilot.name}
              </Typography>
            
              <Typography variant="body2" color="text.secondary">
                  Starting date: {pilot.date}
                  <br />
                  Starship: {pilot.starshipName}
                  <br />
                  Experience: {pilot.experience} flight hours
                  <br />
                  E-mail: {pilot.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
  </>
    );
}

export default Pilots;
