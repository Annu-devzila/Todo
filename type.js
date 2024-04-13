const zod = require("zod");
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zodo.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo 
}