import express  from "express";
import { googleAuth, signin, signup } from "../controllers/authcontroller.js";
// import { googleAuth, signin, signup } from "../controllers/auth.js";

const authRoutes = express.Router();


authRoutes.post("/signup", signup)
//SIGN IN
authRoutes.post("/signin", signin)

//GOOGLE AUTH
authRoutes.post("/google", googleAuth)

export default authRoutes