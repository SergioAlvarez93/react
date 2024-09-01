import styles from './OptionButton.module.css';
function OptionButton({ onClick, type }) {
  if (type === 'deleteBtn') {
    return (
      <button
        className={styles.generalBtnStyles + ' ' + styles.deleteBtn}
        onClick={onClick}
      >
        Delete
      </button>
    );
  }
  if (type === 'cancelBtn') {
    return (
      <button
        className={styles.generalBtnStyles + ' ' + styles.cancelBtn}
        onClick={onClick}
      >
        Cancel
      </button>
    );
  }
  if (type === 'doneBtn') {
    return (
      <button
        className={styles.generalBtnStyles + ' ' + styles.doneBtn}
        onClick={onClick}
      >
        Done
      </button>
    );
  }
}

export default OptionButton;
