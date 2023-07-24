/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { useState } from 'react'

export default function Todolist() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState(null)

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, { ...newTodo, id: new Date().toISOString(), done: false }]
    setTodos(updatedTodos)
  }

  const toggleTodoStatus = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  const startEditTodo = (todoId) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId)
    if (todoToEdit) {
      setCurrentTodo(todoToEdit)
    }
  }

  // const editTodo = (newName) => {
  //   setCurrentTodo((prev) => {
  //     if (prev) return { ...prev, newName }
  //     return null
  //   })
  // }
  // const editTodo = () => {
  //   setTodos((prev) => {
  //     return prev.map((todo) => {
  //       if (todo.id === currentTodo.id) {
  //         return currentTodo
  //       }
  //       return todo
  //     })
  //   })
  //   setCurrentTodo(null)
  // }
  const editTodo = (todoId, newName) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          name: newName
          // currentTodo
        }
      }
      return todo
    })
    setTodos(updatedTodos)
    setCurrentTodo(null)
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }
  const undoneTodos = todos.filter((todo) => !todo.done)
  const doneTodos = todos.filter((todo) => todo.done)

  return (
    <div className=' ml-auto  p-2 bg-gray-300/90'>
      <div className='m-2 p-2 bg-white rounded-md'>
        <h2 className='text-black font-bold mb-2'>To do list javascript</h2>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
          editTodo={editTodo}
          // finishEditTodo={finishEditTodo}
          // updatedTodos={editTodo.updatedTodos}
        />
        <TaskList
          todos={undoneTodos}
          toggleTodoStatus={toggleTodoStatus}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
        />
        <TaskList
          todos={doneTodos}
          toggleTodoStatus={toggleTodoStatus}
          doneTaskList
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          startEditTodo={startEditTodo}
        />
      </div>
    </div>
  )
}
