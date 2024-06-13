import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "",
    languages: "react, jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/pocket-traders.png",
    description: "",
    repo: "",
    live: "",
  },
  {
    id: 1,
    title: "",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "",
    live: "",
  },
  {
    id: 2,
    title: "",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
    image: "/img/quizam.png",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    live: "",
    repo: "",
  },
  {
    id: 3,
    title: "",
    languages: "html, css, js",
    image: "/img/noheadphones.png",
    packages: "none",
    description: "Gives you a recommendation for media that will entertain you during your commute.",
    repo: "",
    live: "",
  },
  {
    id: 4,
    title: "",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/duly-noted.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "",
    live: "",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/work-portfolio.png",
    description: "A basic work portfolio that holds projects",
    repo: "",
    live: "",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "",
    live: "/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;