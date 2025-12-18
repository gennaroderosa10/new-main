import express from "express";
import { generi } from "../data.js";

const router = express.Router()



//INDEX
router.get("/", (req, res) => {
    const risposta = {
        count: generi.length,
        results: generi
    }
    res.json(risposta)
})

//SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const curGener = generi[id]
    res.json(curGener)
})




//STORE


//UPDATE


//MODIFY


//DESTROY



export default router;


