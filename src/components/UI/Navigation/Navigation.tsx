import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';



export const Navigation = () => {

    const links = [
        {label: 'Все дела', route: '/'},
        {label: 'Не выполненные дела', route: '/undone'},
        {label: 'Выполненные дела', route: '/done'},
    ] 

    const isActive = ({isActive}: {isActive: boolean}) => isActive ? styles.link_active : styles.link;

  return (
    <nav className={styles.nav}>
        <ul>
            {links.map(link => (
                <li>
                    <NavLink className={isActive} to={link.route}>{link.label}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}
