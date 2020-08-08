//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses} = require('./pages')

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticos(css, scripts, imagens)
server
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)