require('express')()
.get("/",(req, res) => {
    return res.send("Hello world!")
})
.get("/study",(req, res) => {
    return res.send("Página study")
})
.listen(5500)