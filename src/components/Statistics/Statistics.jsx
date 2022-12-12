import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const bgColors = ['#130b98', '#25662b', '#c57229', '#b2759c', '#25662b'];
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage } = stats, index) => (
          <li
            className={css.item}
            style={{ backgroundColor: bgColors[index] }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
