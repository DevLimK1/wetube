// const express = require("express");
import express from "express";
import morgan from "morgan";
import morgan from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

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

// const betweenHome = (req, res, next) => {  미들웨어관련 (middleware)
//   console.log("Between");
//   next();
// };

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
