// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDelete} = props
  const {title, id} = eachTodo

  const deleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
