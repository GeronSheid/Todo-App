import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {

    const links = [
        {label: 'Все дела', route: '/'},
        {label: 'Не выполненные дела', route: '/undone'},
        {label: 'Выполненные дела', route: '/done'},
    ]

  return (
    <nav className={styles.nav}>
        <ul>
            {links.map(link => (
                <li>
                    <Link to={link.route}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
