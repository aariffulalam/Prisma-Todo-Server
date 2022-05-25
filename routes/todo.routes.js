const router = require('express').Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const { verifyToken } = require('../auth/user.auth')

const { postTodo, getTodos, updateTodo, deleteTodo } = require('../controller/todo.controller')

router.post('/user', verifyToken,
    postTodo)
// async (req, res) => {
//     const { title, content } = req.body
//     try {
//         const todo = await prisma.todo.create({
//             data: {
//                 title,
//                 content,
//                 userId: req.userId
//             }
//         })
//         res.status(201).json({ status: "created", todo })
//     } catch (err) {
//         res.status(500).json({ status: "internal server error", error: err.message })
//     }
// })


router.get('/user', verifyToken,
    getTodos)
//     async (req, res) => {
//         try {
//             const todos = await prisma.todo.findMany({
//                 where: {
//                     userId: parseInt(req.userId)
//                 }
//             })
//             res.json({ status: "success", todos })

//         } catch (err) {
//             res.send(err.message)
//         }
//     }
// )


// todo uodate
router.patch('/user/:id', verifyToken,
    updateTodo)
//     async (req, res) => {
//         const todoId = parseInt(req.params.id)
//         try {
//             const todo = await prisma.todo.updateMany({
//                 where: {
//                     id: todoId,
//                     userId: parseInt(req.userId)
//                 },
//                 data: req.body
//             })
//             res.json({ status: "updated", todo })
//         } catch (err) {
//             res.send(err.message)
//         }
//     }
// )


router.delete('/user/:id', verifyToken,
    // deleteTodo)
    async (req, res) => {
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
)


module.exports = router;