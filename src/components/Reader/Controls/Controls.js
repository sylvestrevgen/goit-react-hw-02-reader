import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onLastPublication, onNextPublication, index, sum }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={index === 0 ? styles.disabled : styles.active}
        onClick={onLastPublication}
      >
        Назад
      </button>
      <button
        type="button"
        className={sum - 1 === index ? styles.disabled : styles.active}
        onClick={onNextPublication}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onLastPublication: PropTypes.func.isRequired,
  onNextPublication: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default Controls;
