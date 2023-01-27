import { Suspense } from "react";
import {Routes, Route } from "react-router-dom";


import './App.css';
import Details from "./components/details/Details";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Planet from './components/planets/Planet';
import Pilots from "./components/pilots/Pilots";
import MainPage from "./components/main/MainPage";
import Starship from "./components/starships/Starship";
import StarshipDetails from "./components/details/StarshipDetails";
import Register from "./components/register/Register";
import { Toaster } from "react-hot-toast";
import AddPilotDialog from "./components/dialog/AddPilotDialog";

function App() {

  return (
    <>
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
        <Route path="/dialog" element={<AddPilotDialog />} />
        <Route path="/pilots" element={<Pilots />} />
      </Routes>
      <Toaster />
      </Suspense>
    </>
  );
}

export default App;
