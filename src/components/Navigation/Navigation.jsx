import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navigationLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.navigationLink}>
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
