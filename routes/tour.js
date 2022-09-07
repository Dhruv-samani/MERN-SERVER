import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { createTour, deleteTour, getRelatedTours, getTour, getTours, getToursBySearch, getToursByTag, getToursByUser, likeTour, updateTour, } from "../controllers/tour.js";

router.get("/", getTours);
router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/:id", getTour);

router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.patch("/like/:id", auth, likeTour);
router.get("/userTours/:id", auth, getToursByUser);

export default router;
