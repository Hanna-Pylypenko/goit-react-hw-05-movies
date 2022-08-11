import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
export const AppBar = () => {
  return (
    <div className={css.headerContainer}>
      <Navigation />
    </div>
  );
};
