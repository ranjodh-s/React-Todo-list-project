
import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      <hr />
      <ol className="list-group list-group-numbered">
        {props.todo.length === 0 ? "No todos to display" :
          props.todo.map((todo) => {


            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

          }
          )
        }
      </ol>
    </div>
  )
}

export default Todo
