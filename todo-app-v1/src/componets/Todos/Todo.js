import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';
import OptionButton from '../UI/OptionButton';
import { useState } from 'react';
const Todo = (props) => {
  const [bgStyle, setBgStyle] = useState(false);
  return (
    <div
      className={
        bgStyle
          ? `${styles.todoListItem} ${styles.todoListItemDoneBg}`
          : styles.todoListItem
      }
    >
      <RiTodoFill className={styles.toDoIcon} />
      <div className={styles.todoListItemHeader}>{props.children}</div>
      <div className={styles.todoBtnFlexbox}>
        <OptionButton type="doneBtn" onClick={() => setBgStyle(true)} />
        {bgStyle ? (
          <OptionButton type="cancelBtn" onClick={() => setBgStyle(false)} />
        ) : (
          false
        )}
        <OptionButton type="deleteBtn" onClick={props.deleteClick} />
      </div>
    </div>
  );
};

export default Todo;
