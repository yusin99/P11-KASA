import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

import vector_K from '../../assets/vector_K.png';
import vector_A_house from '../../assets/house.png';
import vector_S from '../../assets/vector_S.png';
import vector_A from '../../assets/vector_A.png';

export function Header() {
  return (
    <header className={styles.header}>
      {/* Display the Kasa logo and link it to the home page */}
      <NavLink to={'/'} className={styles.logo}>
        <img src={vector_K} alt='K' />
        <img className={styles.house} src={vector_A_house} alt='A' />
        <img src={vector_S} alt='S' />
        <img src={vector_A} alt='A' />
      </NavLink>
      {/* Navigation links */}
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
