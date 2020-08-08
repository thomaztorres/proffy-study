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
        subject: 6,
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
    
    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //  Consultar dados inseridos
    
    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // consultar as classes de um determinado professor 
    // e trazer junto os dados do professor 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
})