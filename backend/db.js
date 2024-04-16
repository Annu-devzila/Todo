const mongoose = require("mongoose");

// mongodb+srv://annusahray1999:ydMRH85C8LfTeZGe@cluster0.bfg2ojo.mongodb.net/

mongoose.connect("mongodb+srv://annusahray1999:ydMRH85C8LfTeZGe@cluster0.bfg2ojo.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}