import { useState } from "react";
import "./App.css";
import Header from "./layout/header";
import LogInPage from "./pages/login-page";
import SigInPage from "./pages/sign-in-page";
import UsersPage from "./pages/users";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/sign-in-page" element={<SigInPage />} />
        <Route path="/users-page" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
