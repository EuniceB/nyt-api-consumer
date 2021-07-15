import styles from '../assets/styles/Header.module.css';

/**
 * Header component
 * The header of the application, with the application title
 */
const Header = () => (
  <div className={styles.header}>
    <h2>New York Times article search application</h2>
  </div>
);
export default Header;
