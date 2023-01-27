import styles from "../header/Header.module.css";

import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HouseIcon from "@mui/icons-material/House";
import LogoutIcon from '@mui/icons-material/Logout';
import AddPilotDialog from "../dialog/AddPilotDialog";


import { useTranslation } from "react-i18next";
import { auth } from "../../utils/firebase";

const Header = () => {

  const navigate = useNavigate();

  const { t } = useTranslation(["common"]);

  function logoutHandler() {
    auth.signOut();
    navigate("/");
    }

  function mainPageClickHandler() {
    navigate("/main");
  }

  function starshipsBtnClick() {
    navigate("/starships");
  }

  function planetsBtnClick() {
    navigate("/planets");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={styles.appbar}
        sx={{ background: "black" }}
        position="static"
      >
        <Toolbar>
          <Button sx={{ color: "white" }}>
            <HouseIcon onClick={() => navigate("/main")} />
          </Button>
          <Typography
          className={styles.heading}
            variant="h6"
            sx={{ flexGrow: 2, justifyContent: "flex-start" }}
          >
            {t("starWarsTitle")}
          </Typography>
          <Button onClick={planetsBtnClick}
            className={styles.planetsBtn}
            color="inherit">
            {t("planetsHeader")}
          </Button>
          <Button
            onClick={starshipsBtnClick}
            className={styles.starshipsBtn}
            color="inherit"
          >
            {t("starshipsHeader")}
          </Button>
          <AddPilotDialog />
          <LogoutIcon onClick={logoutHandler} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
