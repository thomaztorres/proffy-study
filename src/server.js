//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages')

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuraçoes do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos(css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/successfully-registered", pageSuccess)
.post("/save-classes", saveClasses)
.listen(3000)