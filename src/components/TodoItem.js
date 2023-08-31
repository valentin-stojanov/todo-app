import styles from './TodoItem.module.css'

export default function todoItem({
    todo,
    onDelete,
    onClick
}) {
    return (
        <li onClick={() => onClick(todo.id)} className={todo.isDone ? styles.todoItemDone : ''}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>x</button>
        </li>
    );
}