import { FC } from 'react'
import styles from './Checkbox.module.scss';

type TProps = {
    checked: boolean;
    id?: string;
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export const Checkbox: FC<TProps> = ({checked, id, onClick}) => {
    const isCheckedStyle = `${styles.checkbox} ${checked ? styles.checkbox_checked : ''}`
  return (
    <div className={isCheckedStyle}>
            <input 
                id={id}
                type="checkbox" 
                defaultChecked={checked}
                onClick={(e) => onClick(e)}
            />
    </div>
  )
}
