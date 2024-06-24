import express from "express";
import Knights from "../routes/knightsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "API Knights Challenge in Node.js"});
  });

  app.use(
    express.json(),
    Knights,
  );
};

export default routes;