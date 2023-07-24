/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react'

export default function TaskInput({ addTodo, currentTodo, setCurrentTodo, editTodo, finishEditTodo }) {
  // const [name, setName] = useState('')
  // const handleSubmit = () => {
  //   setName((prev) => [...prev, name])
  // }
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.trim() !== '') {
      if (currentTodo) {
        editTodo(currentTodo.id, name)
        if (name) setName('')
        setName('')
      } else {
        addTodo({ name })
        setName('')
      }
    }
  }
  // const onChangeInput = (event) => {
  //   const { value } = event.target
  //   if (currentTodo) {
  //     editTodo(value)
  //   }

  //   setName(value)
  // }
  const onChangeInput = (event) => {
    const { value } = event.target

    setName(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='text-black rounded-sm border-gray-300 border-[2px]  p-1'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          // onChange={(e) => setName(e.target.value)}
          onChange={onChangeInput}
        />
        <button type='submit' className='rouded-sm bg-gray-300 p-1 ml-2 '>
          {currentTodo ? '✔️' : '➕'}
        </button>
      </form>
    </div>
  )
}
