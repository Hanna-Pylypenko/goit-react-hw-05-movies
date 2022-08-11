import css from './Section.module.css';
export const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </div>
  );
};
