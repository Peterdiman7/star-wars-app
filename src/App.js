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
import { UserAuth } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoutes from "./utils/PublicRoutes";
import Header from "./components/header/Header";

function App() {

  const { user } = UserAuth();

  return (
    <>
      <Suspense fallback={"Loading..."}>
          {user && <Header /> }
            <Routes>
              <Route path="/main" element={<PrivateRoute> <MainPage /> </PrivateRoute>} />
              <Route path="/planets" element={<PrivateRoute> <Planet /> </PrivateRoute>} />
              <Route path="/planets/:id" element={ <PrivateRoute> <Details /> </PrivateRoute>} />
              <Route path="/starships" element={ <PrivateRoute> <Starship /> </PrivateRoute>} />
              <Route path="/starships/:id" element={<PrivateRoute> <StarshipDetails /> </PrivateRoute>} />
              <Route path="/dialog" element={ <PrivateRoute> <AddPilotDialog /> </PrivateRoute> } />
              <Route path="/pilots" element={<PrivateRoute> <Pilots /> </PrivateRoute>} />
              <Route path="/" exact element={ <PublicRoutes> <Home /> </PublicRoutes> } />
              <Route path="/login" element={<PublicRoutes> <Login /> </PublicRoutes>} />
              <Route path="/register" element={<PublicRoutes> <Register /> </PublicRoutes>} />
            </Routes>
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
