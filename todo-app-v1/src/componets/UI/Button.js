import styles from './Button.module.css';
function Button({ onClick }) {
  return (
    <button className={styles.btn} type="submit" onClick={onClick}>
      Submit
    </button>
  );
}

export default Button;
