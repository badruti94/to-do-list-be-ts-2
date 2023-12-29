import { Request, Response } from 'express'
import Todo from '../models/todo'

const createTodo = async (req: Request, res: Response) => {
    const todo = new Todo(req.body)
    const result = await todo.save()

    res.status(201).send({
        message: 'success',
        data: result
    })
}

const getAllTodo = async (req: Request, res: Response) => {
    const todos = await Todo.find()

    res.status(200).send({
        data: todos
    })
}


const setTodoDone = async (req: Request, res: Response) => {
    const result = await Todo.updateOne({ _id: req.params.id }, { done: true })

    res.status(200).send({
        message: 'success'
    })
}

const deleteTodo = async (req: Request, res: Response) => {
    const todo = await Todo.findOne({ _id: req.params.id })
    const result = await Todo.deleteOne()

    res.status(200).send({
        message: 'success'
    })
}

export default { createTodo, getAllTodo, setTodoDone, deleteTodo }