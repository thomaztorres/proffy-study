const { subjects, weekdays, getSubject} = require('./utils/format')
const database = require('./database/db')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const  filters = req.query
    
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados
    if(isNotEmpty != "") {
        data.subject = getSubject(data.subject)
        //adicionar dados a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }
    //se não, não adicionar
    return res.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}