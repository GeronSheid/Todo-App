import React, { useState, FC } from 'react'
import styles from './Checkbox.module.scss';

type TProps = {
    checked: boolean
}

export const Checkbox: FC<TProps> = ({checked}) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const isCheckedStyle = `${styles.checkbox} ${isChecked ? styles.checkbox_checked : ''}`;

  return (
    <div className={isCheckedStyle}>
        <label>
            <input 
                type="checkbox" 
                onChange={() => setIsChecked(prev => !prev)}
            />
        </label>
    </div>
  )
}
