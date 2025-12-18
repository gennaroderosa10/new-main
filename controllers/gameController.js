import { gamesArray } from "../data.js"

function index(req, res) {
    const risposta = {
        count: gamesArray.length,
        results: gamesArray
    }
    res.json(risposta)
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const game = gamesArray.find(game => game.id === id);

    if (game === undefined) {
        res.status(404);
        return res.json({
            message: "gioco non disponibile",
        })
    }
    res.json(game)

}

function store(req, res) {
    res.send("creo nuovo gioco")
}

function update(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna gioco n." + id)
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna parzialemte gioco n." + id)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const gameIndex = gamesArray.findIndex((game) => game.id === id)

    if (gameIndex === -1) {
        res.status(404)
        return res.json({
            message: "gioco non disponibile"
        })
    }

    gamesArray.splice(gameIndex, 1)
    res.sendStatus(204)

}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default controller