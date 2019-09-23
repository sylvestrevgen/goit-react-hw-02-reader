import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.css';

const Controls = ({ onControlPublication, index, sum }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={index === 0 ? styles.disabled : styles.active}
        onClick={onControlPublication}
        name="prevPage"
      >
        Назад
      </button>
      <button
        type="button"
        className={sum - 1 === index ? styles.disabled : styles.active}
        onClick={onControlPublication}
        name="nextPage"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onControlPublication: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};

export default Controls;
