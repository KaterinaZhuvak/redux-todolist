
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/actions';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
   <span
        className={`${styles.text} ${
          todo.completed ? styles.completed : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Видалити
      </button>
    </li>
  );
};

export default TodoItem;



