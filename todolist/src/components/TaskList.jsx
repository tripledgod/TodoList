/* eslint-disable react/prop-types */
export default function TaskList({ todos, handleDoneTodo, doneTaskList, startEditTodo, deleteTodo }) {
  const onChangeCheckbox = (idTodo) => (event) => {
    handleDoneTodo(idTodo, event.target.checked)
  }
  return (
    <>
      <div className='mb-2'>
        <h2 className='font-bold mt-2'>{doneTaskList ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</h2>
      </div>

      <div className='grid gap-1'>
        {todos.map((todo) => (
          <div className='grid grid-cols-4 gap-1' key={todo.id}>
            <div className='col-span-3 flex items-center'>
              <input type='checkbox' checked={todo.done} onChange={onChangeCheckbox(todo.id)} />
              <span className={`text-gray-400 ml-2 mr-10 ${todo.done ? 'line-through' : ''}`}>{todo.name}</span>
            </div>
            <div className='col-span-1 flex justify-end'>
              <button
                className='bg-gray-100 rounded-sm border-[1px] border-gray-400 m-1'
                onClick={() => startEditTodo(todo.id)}
              >
                🖌️
              </button>
              <button
                className='bg-gray-100 rounded-sm border-[1px] border-gray-400 m-1'
                onClick={() => deleteTodo(todo.id)}
              >
                🗳️
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
