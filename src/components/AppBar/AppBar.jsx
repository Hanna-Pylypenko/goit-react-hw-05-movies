import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
const AppBar = () => {
  return (
    <div className={css.headerContainer}>
      <Navigation />
    </div>
  );
};
export default AppBar;
