
import { useAppDispatch } from '../../../lib/hooks';
import { deleteFulfilledTodos } from '../../../store/todoSlice';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useAppDispatch();

  const clearFulfilled = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(deleteFulfilledTodos())
  }

  return (
    <header className={styles.header}>
        <Container>
          <div className={styles.headerContentWrap}>
            <Navigation/>
            <button onClick={(e) => clearFulfilled(e)} type='button'>Очистить выполненные задачи</button>
          </div>
        </Container>
    </header>
  )
}
