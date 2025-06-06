
import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <>

      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{todo.title}</div>
          {todo.desc}

        </div>
        <button className="btn btn-danger btn-sm align-item-center" onClick={() => { onDelete(todo) }}>Delete</button>
      </li>


    </>
  )
}

export default TodoItem
