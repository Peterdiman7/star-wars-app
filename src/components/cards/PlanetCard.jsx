import planetImg from "../../assets/planet.jpg";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const PlanetCard = ({ singlePlanet }) => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      {singlePlanet && (
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardHeader
            title={`${t("planetName")} ${singlePlanet.name}`}
            subheader={singlePlanet.climate + `${t("climate")}`}
          />
          <CardMedia component="img" height="190" image={planetImg} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {t("terrain")} {singlePlanet.terrain}
              <br />
              {t("population")} {singlePlanet.population}
              <br />
              {t("diameter")} {singlePlanet.diameter}
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      )}
    </>
  );
};

export default PlanetCard;
