import styles from './Header.module.css';

import logo from '../assests/logo.svg';
export function Header() {
    return (
      <header className={styles.header}>
          <img src={logo} alt="Ignite Logo"/>
      </header>
    );
}