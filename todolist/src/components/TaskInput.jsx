/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react'

export default function TaskInput({ addTodo, currentTodo, editTodo, finishEditTodo }) {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }

  const onChangeInput = (event) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }

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
          onChange={onChangeInput}
        />
        <button type='submit' className='rouded-sm bg-gray-300 p-1 ml-2 '>
          {currentTodo ? '✔️' : '➕'}
        </button>
      </form>
    </div>
  )
}
