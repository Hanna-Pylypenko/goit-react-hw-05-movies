import css from './Section.module.css';
const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </div>
  );
};
export default Section;