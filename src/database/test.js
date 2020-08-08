const db = require('./db')
const createProffy = require('./createProffy')

db.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Thomaz Torres",
        avatar: "https://avatars1.githubusercontent.com/u/62804554?s=460&u=34c20097006c12998411a6f87529bfd467dd506c&v=4",
        whatsapp: "87988114893",
        bio: "Amo programar,só não ensino programação aqui porque não deixam"
    }

    classValue = {
        subject: "Matemática",
        cost: "50"
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrar a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //  Consultar dados inseridos
    
    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)
})