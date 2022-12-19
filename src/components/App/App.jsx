import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";
import ErrorPage from "../../pages/ErrorPage";
import Users from "../Users/Users";
import UserDetailPage from "../../pages/UserDetailPage";
import AppRouter from "../router/AppRouter";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
