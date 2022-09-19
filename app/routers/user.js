import express from "express";
import session from "express-session";

import { all, find } from "../models/User.js"

const router = express.Router();


router.get("/", async (req, res) =>{
    const users = await all();

    res.render("home", { users });
});

/*

curl http://localhost:3002/delete/Alex
*/
/* router.get("/show/:name", async (req, res) =>{
    const { name } = req.params;
    const product = await find(name);

    res.json({ product });
}); */

/*


curl --request "DELETE" http://localhost:3002/delete/Alex
*/
/* router.delete("/delete/:name", async (req, res) =>{
    const { name } = req.params;
    const product = await remove(name);

    res.json({ name });
}); */

export default router;