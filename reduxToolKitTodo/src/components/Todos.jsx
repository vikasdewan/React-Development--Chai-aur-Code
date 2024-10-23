import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
 const todos =  useSelector(state => state.todos)
 const dispatch = useDispatch()
 return (
  <>
  <div>Todos</div>
  {todos.map((todo) =>(
    <li key={todo.id}>
      {todo.text}
      <button
      className='text-white bg-red-500 border-0 py-2 px-6 ml-2 focus:outline-none hover:bg-black rounded text-lg'
      onClick={() => dispatch(removeTodo(todo.id))}
      > &nbsp; &nbsp; delete</button>
    </li>
  ))}
  </>
  )
}

export default Todos