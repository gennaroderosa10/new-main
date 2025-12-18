import express from "express"
import gamesRouter from "./routers/games.js"
import genersRouter from "./routers/generes.js"

 const app = express();
 const port = 3000;

app.get("/", (req, resp)=> {
    console.log("Rotta /");
    resp.send("test")
});

app.use("/games", gamesRouter)
app.use("/geners", genersRouter)

 app.listen(port, function (){
    console.log("il server è pronto porta" + port)
 })