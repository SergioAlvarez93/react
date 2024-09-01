import Button from '../UI/Button';
import { memo } from 'react';
import styles from './TodoForm.module.css';

let id = 0;
const TodoForm = memo(({ target }) => {
  const buttonClick = (e) => {
    e.preventDefault();
    id++;
    target({
      taskId: id,
      taskText: e.target.previousElementSibling.value,
    });
    e.target.previousElementSibling.value = '';
  };
  console.log('suka, blyad');
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter new todo"
      ></input>
      <Button onClick={buttonClick} />
    </form>
  );
});

export default TodoForm;
