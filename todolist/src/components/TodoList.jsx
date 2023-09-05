/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { useEffect, useState } from 'react'

export default function Todolist() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState(null)
  const undoneTodos = todos.filter((todo) => !todo.done)
  const doneTodos = todos.filter((todo) => todo.done)

  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const todosObj = JSON.parse(todosString || '[]')
    setTodos(todosObj)
  }, [])

  const addTodo = (name) => {
    const updatedTodos = [...todos, { id: new Date().toISOString(), done: false, name }]
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }
  const handleDoneTodo = (id, done) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const startEditTodo = (todoId) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId)
    if (todoToEdit) {
      setCurrentTodo(todoToEdit)
    }
  }

  const editTodo = (name) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }
  const finishEditTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === currentTodo.id) {
          return currentTodo
        }
        return todo
      })
    })
    setCurrentTodo(null)

    const updatedTodos = todos.map((todo) => {
      if (todo.id === currentTodo.id) {
        return currentTodo
      }
      return todo
    })
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  return (
    <div className=' ml-auto rounded-lg p-2 bg-orange-200/90'>
      <div className='m-2 p-2 bg-white rounded-md'>
        <h2 className='text-black font-bold mb-2'>To do list javascript</h2>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          editTodo={editTodo}
          finishEditTodo={finishEditTodo}
        />
        <TaskList
          todos={undoneTodos}
          handleDoneTodo={handleDoneTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
        />
        <TaskList
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          doneTaskList
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
        />
      </div>
    </div>
  )
}
