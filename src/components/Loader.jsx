import loader from '../assets/images/loader.gif';
import styles from '../assets/styles/Loader.module.css';

/**
 * Loader component
 * Renders a loading indicator
 */
const Loader = () => (
  <div className={styles.loader}>
    <img alt="loading" src={loader} />
  </div>
);
export default Loader;
