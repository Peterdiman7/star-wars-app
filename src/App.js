
import { Suspense } from "react";
import {Routes, Route } from "react-router-dom";


import './App.css';
import FormDialog from "./components/dialog/Dialog"
import Details from "./components/details/Details";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Planet from './components/planets/Planet';
import Pilots from "./components/pilots/Pilots";
import MainPage from "./components/main/MainPage";
import Starship from "./components/starships/Starship";
import StarshipDetails from "./components/details/StarshipDetails";
import Register from "./components/register/Register";

function App() {

  return (
    <div>
      <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/planets" element={<Planet />} />
        <Route path="/planets/:id" element={<Details />} />
        <Route path="/starships" element={<Starship />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dialog" element={<FormDialog />} />
        <Route path="/pilots" element={<Pilots />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
