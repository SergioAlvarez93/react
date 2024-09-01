import Todo from './Todo';
import styles from './TodoList.module.css';
function TodoList({ target, deleteItem }) {
  return (
    <div className="todoList">
      {target.length > 0 ? (
        target.map((e, index) => (
          <Todo key={e.taskId} deleteClick={() => deleteItem(index)}>
            {e.taskText}
          </Todo>
        ))
      ) : (
        <h2 className={styles.noTaskTitle}>There're no tasks!</h2>
      )}
    </div>
  );
}

export default TodoList;
