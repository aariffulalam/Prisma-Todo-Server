const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// Post Todo
exports.postTodo = async (req, res) => {
    const { title, content } = req.body
    try {
        const todo = await prisma.todo.create({
            data: {
                title,
                content,
                userId: req.userId
            }
        })
        res.status(201).json({ status: "created", todo })
    } catch (err) {
        res.status(500).json({ status: "internal server error", error: err.message })
    }
}

exports.getTodos = async (req, res) => {
    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId: parseInt(req.userId)
            }
        })
        res.json({ status: "success", todos })

    } catch (err) {
        res.send(err.message)
    }
}

exports.updateTodo = async (req, res) => {
    const todoId = parseInt(req.params.id)
    try {
        const todo = await prisma.todo.updateMany({
            where: {
                id: todoId,
                userId: parseInt(req.userId)
            },
            data: req.body
        })
        res.json({ status: "updated", todo })
    } catch (err) {
        res.send(err.message)
    }
}

exports.deleteTodo = async (req, res) => {
    const todoId = parseInt(req.params.id)
    try {
        const deleteTodo = prisma.todo.delete({
            where: {
                id: todoId
            }
        })
        res.json({ status: "Deleted", deleteTodo })
    } catch (err) {
        res.send(err.message)
    }
}
