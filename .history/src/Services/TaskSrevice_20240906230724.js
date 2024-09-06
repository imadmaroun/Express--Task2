require('dotenv').config()
const db = require("better-sqlite3")(process.env.DBNAME)

function getTasks() {
    return {
        task: "Do all the Bootcamp tasks!!"
    }
}



module.exports = { getTasks }