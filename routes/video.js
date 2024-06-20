import express  from "express";
import { verifyToken } from "../verifytoken.js";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/videocontroller.js";

const videoRoutes = express.Router();
//Create a video
videoRoutes.post("/", verifyToken, addVideo);

// //Update video
videoRoutes.put("/:id", verifyToken, updateVideo);

// //Delete a video
videoRoutes.delete("/:id", verifyToken, deleteVideo);

// // Get a Video
videoRoutes.get("/find/:id", getVideo);

videoRoutes.put("/views/:id", addView);

videoRoutes.get("/trend", trend);

videoRoutes.get("/random", random);

videoRoutes.get("/sub",verifyToken, sub);
videoRoutes.get("/tags", getByTag);
videoRoutes.get("/search", search);




export default videoRoutes