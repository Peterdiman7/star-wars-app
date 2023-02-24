import React from "react";

import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Pokemon from "./pages/pokemon/Pokemon";
import Register from "./pages/register/Register";
import { Toaster } from "react-hot-toast";
import { UserAuth } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoutes from "./utils/PublicRoutes";
import DrawerAppBar from "./components/appbar/AppBar";
import Details from "./pages/details/Details";

function App() {

  const { user } = UserAuth();

  return (
    <>
      <Suspense fallback={"Loading..."}>
          {user && <DrawerAppBar /> }
            <Routes>
              <Route path="/pokemon" element={<PrivateRoute> <Pokemon /> </PrivateRoute>} />
              <Route path="/" element={ <PublicRoutes> <Home /> </PublicRoutes> } />
              <Route path="/login" element={<PublicRoutes> <Login /> </PublicRoutes>} />
              <Route path="/register" element={<PrivateRoute> <Register /> </PrivateRoute>} />
              <Route path="/pokemon/:id" element={<PrivateRoute> <Details /> </PrivateRoute>} />
            </Routes>
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
