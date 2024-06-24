import express from "express";
import KnightsController from "../controller/knightsController.js";

const router = express.Router();

router
  .get("/knights", KnightsController.getKnights)
  .get("/knights/filter", KnightsController.getLKnightHeros)
  .get("/knights/:id", KnightsController.getKnightsById)
  .post("/knights", KnightsController.addKnight)
  .put("/knights/:id", KnightsController.updateKnight)
  .delete("/knights/:id", KnightsController.deleteKnight);


export default router;