import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  handleControlPublication = event => {
    if (event.target.name === 'prevPage') {
      this.setState(state => ({
        index: state.index - 1,
      }));
    } else {
      this.setState(state => ({
        index: state.index + 1,
      }));
    }
  };

  // handleLastPublication = () => {
  //   this.setState(state => ({
  //     index: state.index - 1,
  //   }));
  // };

  // handleNextPublication = () => {
  //   this.setState(state => ({
  //     index: state.index + 1,
  //   }));
  // };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />
        <Counter index={index} sum={items.length} />
        <Controls
          onControlPublication={this.handleControlPublication}
          // onLastPublication={this.handleLastPublication}
          // onNextPublication={this.handleNextPublication}
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
