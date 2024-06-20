import express  from "express";
// import {update , deleteUser, dislike, getUser, like, subscribe, unsubscribe } from "../controllers/usercontroller.js
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/usercontroller.js";
import { verifyToken } from "../verifytoken.js";

const userRoutes = express.Router();
// Update user
// /api/users/:id
userRoutes.put("/:id", update, verifyToken)

//delete user
userRoutes.delete("/:id",verifyToken, deleteUser)


// // get a user
userRoutes.get("/find/:id", getUser)

// //subscribe a user
userRoutes.put("/sub/:id",verifyToken, subscribe)


// //unsubscribe a user
userRoutes.put("/unsub/:id",verifyToken, unsubscribe)


//like a video
userRoutes.put("/like/:videoId",verifyToken, like)


// dislike a video
userRoutes.put("/dislike/:videoId",verifyToken, dislike)


export default userRoutes