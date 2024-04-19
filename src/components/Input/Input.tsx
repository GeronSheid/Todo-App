import { ChangeEventHandler, FC } from "react";
import styles from './Input.module.scss';

interface IInput {
    value?: string;
    placeholder: string;
    type: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInput> = ({value, type, placeholder, onChange}) => {
  return (
    <input className={styles.input_text} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}
