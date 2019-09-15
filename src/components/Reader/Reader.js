import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  handleLastPublication = () => {
    this.setState(state => ({
      index: state.index - 1,
    }));
  };

  handleNextPublication = () => {
    this.setState(state => ({
      index: state.index + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />
        <Counter index={index} sum={items.length} />
        <Controls
          onLastPublication={this.handleLastPublication}
          onNextPublication={this.handleNextPublication}
          index={index}
          sum={items.length}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
