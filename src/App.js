import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Details from "./components/details/Details";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Planet from "./components/planets/Planet";
import Pilots from "./components/pilots/Pilots";
import MainPage from "./components/main/MainPage";
import Starship from "./components/starships/Starship";
import StarshipDetails from "./components/details/StarshipDetails";
import Register from "./components/register/Register";
import { Toaster } from "react-hot-toast";
import AddPilotDialog from "./components/dialog/AddPilotDialog";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";

function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AuthContextProvider>
            <Routes>
              <Route path="/main" element={<PrivateRoutes> <MainPage /> </PrivateRoutes>} />
              <Route path="/planets" element={<PrivateRoutes> <Planet /> </PrivateRoutes>} />
              <Route path="/planets/:id" element={ <PrivateRoutes> <Details /> </PrivateRoutes>} />
              <Route path="/starships" element={ <PrivateRoutes> <Starship /> </PrivateRoutes>} />
              <Route path="/starships/:id" element={<PrivateRoutes> <StarshipDetails /> </PrivateRoutes>} />
              <Route path="/dialog" element={ <PrivateRoutes> <AddPilotDialog /> </PrivateRoutes> } />
              <Route path="/pilots" element={<PrivateRoutes> <Pilots /> </PrivateRoutes>} />
              <Route path="/" exact element={ <PublicRoutes> <Home /> </PublicRoutes> } />
              <Route path="/login" element={<PublicRoutes> <Login /> </PublicRoutes>} />
              <Route path="/register" element={<PublicRoutes> <Register /> </PublicRoutes>} />
            </Routes>
        </AuthContextProvider>
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
