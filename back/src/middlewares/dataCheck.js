function dataCheck (req, res, next) {
    const {title, year, director, duration, genre, rate, poster} = req.body;
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({error: "Debes completar todos los campos"})
    }
    next()
}

module.exports=dataCheck;