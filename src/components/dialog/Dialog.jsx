import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import results from "../../results";
import styles from "../dialog/Dialog.module.css";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

import useFetch from "../../useFetch";

export default function FormDialog() {
const { t } = useTranslation(["common"]);

// Custom Hook
const { starships } = useFetch("https://swapi.dev/api/starships");

  const [open, setOpen] = React.useState(false);

  let navigate = useNavigate();

  function candidatesListHandler(e) {
    e.preventDefault();
    handleClose();
    navigate("/pilots");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string()
      .email("You must enter a valid e-mail adress!")
      .required("Required!"),
    date: Yup.date().required("Required!"),
    experience: Yup.number()
      .min(0, "You cannot enter a negative number!")
      .required("Required!"),
    starshipName: Yup.string()
      .min(3, "Starship name must be at least three letters long!")
      .required("Required!"),
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
      toast.success(
        "Aplication Successful! You will be redirected to Pilots page!",
        {
          duration: 3000,
          position: "top-center",
          iconTheme: {
            primary: "#A4DE02",
            secondary: "#fff",
          },
        }
      );
      setTimeout(() => {
        setOpen(false);
        navigate("/pilots");
      }, 3000);
    },
    validationSchema,
  });

  return (
    <div>
      <Button
      className={styles.pilotsBtn}
      sx={{ color: "white" }} 
      onClick={handleClickOpen}>
        {t("pilotsHeader")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>{t("applicationForm")}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t("applicationDesc")}
            </DialogContentText>

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
                {starships.map((starship) => (
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
            <Toaster position="bottom-center" reverseOrder={true} />
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
