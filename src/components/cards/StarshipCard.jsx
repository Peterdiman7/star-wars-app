import starshipImg from "../../assets/starship.jpeg"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from "../cards/Card.module.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslation } from "react-i18next";

export default function CardComponent({singleStarship}) {

  const [isActive, setIsActive] = React.useState(localStorage.getItem("liked"));

  function likeClickHandler(){
    setIsActive(current => !current);
    console.log(isActive);
  }

  const { t } = useTranslation(["common"]);

  if(isActive){
    localStorage.setItem("liked", "like");
  } else {
    localStorage.removeItem("liked", "like");
  }

  return (
    <div>
    <Card sx={{ maxWidth: 345, margin: "auto" }}>

  <CardHeader
        title={`${t("starshipName")}` + singleStarship.name}
        subheader={singleStarship.model + `${t("model")}`}
        />
      <CardMedia
        component="img"
        height="190"
        image={starshipImg}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {t("hyperdrive")} {singleStarship.hyperdrive_rating}
          <br />
          {t("manufacturer")} {singleStarship.manufacturer}
          <br />
          {t("maxSpeed")} {singleStarship.max_atmosphering_speed}
          <br />
          {t("maxPassengers")} {singleStarship.passengers}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton id="likeButton" className={`${styles.likeBtn} ${isActive ?  `${styles.active}` : ""}`} onClick={likeClickHandler}   aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  </div>
  );
}