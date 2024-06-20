import express  from "express";
import {verifyToken} from "../verifytoken.js"
import { Deletecomments, Getcomments, addComments } from "../controllers/commentcontroller.js";
// import { addComment, deleteComment, getComments } from "../controllers/comment.js";
// import { verifyToken } from "../VerifyToken.js";

const commentRoutes = express.Router();
commentRoutes.post("/",verifyToken,addComments);
commentRoutes.delete("/:id",verifyToken,Deletecomments);
commentRoutes.get("/:videoId",verifyToken,Getcomments);

export default commentRoutes