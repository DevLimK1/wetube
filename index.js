// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

// function handleListening() {
//   console.log(`Listening on: http://localhost:${PORT}`);
// }

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

// function handleHome(req, res) {
//   console.log(req);
//   res.send("Hello frome home");
// }

const handleHome = (req, res) => res.send("Hello from home");

// function handleProfile(req, res) {
//   res.send("You ar on my profile");
// } 아래 코드랑 똑같음

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
