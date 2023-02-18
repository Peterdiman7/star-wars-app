import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import results from "../../results";
import styles from "../dialog/AddPilotDialog.module.css";

import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

import useFetch from "../../useFetch";

import { useNavigate } from "react-router-dom";
import { routing } from "../../routing";

const AddPilotDialog = () => {
  const { t } = useTranslation(["common"]);

  const { data } = useFetch("https://swapi.dev/api/starships");
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  function candidatesListHandler(e) {
    e.preventDefault();
    handleClose();
    navigate(routing.pilots);
  }

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string()
      .email(`${t("validEmail")}`)
      .required(`${t("required")}`),
    date: Yup.date().required(`${t("required")}`),
    experience: Yup.number()
      .min(0, `${t("negativeNum")}`)
      .integer(`${t("integer")}`)
      .required(`${t("required")}`),
    starshipName: Yup.string()
      .min(3, `${t("starshipNameLength")}`)
      .required(`${t("required")}`),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      starshipName: "",
      experience: "",
      image: "",
    },
    onSubmit: (values) => {
      results.post("/pilots.json", values);
      toast.success(`${t("applicationSuccessful")}`, {
        duration: 3000,
        position: "top-center",
        iconTheme: {
          primary: "#A4DE02",
          secondary: "#fff",
        },
      });
      setTimeout(() => {
        setIsOpen(false);
        navigate(routing.pilots);
      }, 3000);
    },
    validationSchema,
  });

  return (
    <>
      <Button
        className={styles.pilotsBtn}
        sx={{ color: "white" }}
        onClick={handleClickOpen}
      >
        {t("pilotsHeader")}
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>{t("applicationForm")}</DialogTitle>
          <DialogContent>
            <DialogContentText>{t("applicationDesc")}</DialogContentText>

            <TextField
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              margin="dense"
              name="name"
              id="name"
              label={t("name")}
              type="text"
              fullWidth
              variant="standard"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              margin="dense"
              id="email"
              name="email"
              label={t("email")}
              type="email"
              fullWidth
              variant="standard"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              value={formik.values.date}
              onBlur={formik.handleBlur}
              margin="dense"
              id="date"
              name="date"
              type="date"
              fullWidth
              variant="standard"
            />
            {formik.touched.date && formik.errors.date ? (
              <div className={styles.error}>{formik.errors.date}</div>
            ) : null}

            <div className={styles.selector}>
              <InputLabel id="demo-select-small">
                {t("chooseStarship")}
              </InputLabel>

              <Select
                name="starshipName"
                labelId="demo-select-small"
                id="demo-select-small"
                label="Choose your fighter"
                onChange={formik.handleChange}
                value={formik.values.starshipName}
              >
                {data.map((starship) => (
                  <MenuItem key={starship.name} value={starship.name}>
                    {starship.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            {formik.touched.starshipName && formik.errors.starshipName ? (
              <div className={styles.error}>{formik.errors.starshipName}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              value={formik.values.experience}
              onBlur={formik.handleBlur}
              margin="dense"
              id="experience"
              name="experience"
              label={t("experience")}
              type="number"
              fullWidth
              variant="standard"
            />
            {formik.touched.experience && formik.errors.experience ? (
              <div className={styles.error}>{formik.errors.experience}</div>
            ) : null}

            <TextField
              onChange={formik.handleChange}
              value={formik.values.image}
              margin="dense"
              id="image"
              name="image"
              label={t("uploadImg")}
              type="texts"
              fullWidth
              variant="standard"
            />
            <div className={styles.optional}>{t("optional")}</div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { color: "black", backgroundColor: "#07DA63" },
              }}
              onClick={candidatesListHandler}
            >
              {t("allCandidates")}
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { color: "black", backgroundColor: "#07DA63" },
              }}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                ":hover": { color: "black", backgroundColor: "#07DA63" },
              }}
              type="submit"
            >
              {t("apply")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddPilotDialog;
