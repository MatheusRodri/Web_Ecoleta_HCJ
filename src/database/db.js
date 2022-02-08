const sqlite3 = require("sqlite3").verbose()

// criar um objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

//db.serialize(() => {
//     //criar uma tabela

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     //Inserir dados na tabela 

//     const query = `INSERT INTO places( name,image,address,address2,state,city,items) 
//                               VALUES (?,?,?,?,?,?,?);`

//     const values = [
//         "Recicla",
//         "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         "Rua teste",
//         "numero 2",
//         "São Paulo",
//         "São Paulo",
//         "RESIDUOS E LAMPADAS"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }
//     db.run(query, values, afterInsertData)

//     //Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function (err, rows) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })


//     //Deletar dado da tabela

//     db.run(`DELETE FROM places WHERE id = ?`,[3], function(err){
//        if(err){
//            return console.log(err)
//        }
//        console.log("Registro deletado com sucesso !")
//     })


// })