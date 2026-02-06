import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css'; 
const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
