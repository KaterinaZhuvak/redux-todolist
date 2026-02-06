import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';
import styles from './TodoForm.module.css';


const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
};

export default TodoForm;
