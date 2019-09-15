import React from 'react';
import styles from './App.module.css';
import publications from '../../initialData/publications.json';
import Reader from '../Reader/Reader';

const App = () => {
  return (
    <div className={styles.app}>
      <Reader items={publications} />
    </div>
  );
};

export default App;
