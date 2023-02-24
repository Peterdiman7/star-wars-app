import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import styles from "../pokemon/Pokemon.module.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { pokeId } from "../../utils/arrSplit";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "../../interfaces/IPokemon";

const Pokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;

  const navigate = useNavigate();

  const [poke, setPoke] = useState<Array<IPokemon>>([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios(url + region);
        const data = response.data;
        setPoke(data.results);
      } catch (error) {
        toast.error("Pokémon not found!");
      }
    };
    fetchPokemon();
  }, [region]);

  return (
    <>
      <div className={styles["button-group"]}>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=151")}
        >
          Kanto
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=100&offset=151")}
        >
          Johto
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=135&offset=251")}
        >
          Hoenn
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=107&offset=386")}
        >
          Sinnoh
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=155&offset=494")}
        >
          Unova
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=72&offset=649")}
        >
          Kalos
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=88&offset=721")}
        >
          Alola
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=89&offset=809")}
        >
          Galar
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "aqua",
            color: "darkblue",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setRegion("?limit=110&offset=898")}
        >
          Paldea
        </Button>
      </div>
      <Grid container sx={{ justifyContent: "center" }}>
        {poke.map((p) => (
          <Grid key={p.name} item sx={{ xs: 1, padding: 6 }}>
            <motion.div
            onClick={() => navigate(`/pokemon/${pokeId(p.url)}`)}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <Card sx={{ width: 200, border: 1, borderRadius: 10 }}>
                <CardMedia
                  sx={{ borderBottom: 0.5 }}
                  component="img"
                  height="140"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId(
                    p.url
                  )}.png`}
                  alt={p.name}
                />
                <CardContent>
                  <Typography
                    key={p.name}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {p.name[0].toUpperCase() + p.name.slice(1)}
                    <Typography component="div" sx={{ color: "green" }}>
                      {`Pokédex number: ${pokeId(p.url)}`}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Pokemon;
