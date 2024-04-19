import {FC} from 'react';
import styles from './Button.module.scss';


interface IButton {
    children: React.ReactNode;
    onClick?: () => void | React.MouseEvent<HTMLButtonElement, MouseEvent>;
    type: 'submit' | 'button';
}

export const Button: FC<IButton> = ({children, onClick, type}) => {
  return (
    <button className={styles.btn} onClick={onClick} type={type}>
        {children}
    </button>
  )
}
