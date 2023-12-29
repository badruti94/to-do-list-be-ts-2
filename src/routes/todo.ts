import express from 'express'
import todoController from '../controllers/todo'

const router = express.Router()

router.post('/', todoController.createTodo)
router.get('/', todoController.getAllTodo)
router.patch('/:id/done', todoController.setTodoDone)
router.delete('/:id', todoController.deleteTodo)

export default router