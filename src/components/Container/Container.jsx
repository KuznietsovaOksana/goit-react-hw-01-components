import css from './Container.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Container = ({ children }) => (
  <div
    className={css.container}
    style={{ backgroundColor: getRandomHexColor() }}
  >
    {children}
  </div>
);
