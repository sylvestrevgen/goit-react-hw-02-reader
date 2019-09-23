import React from 'react';
import styles from './app.module.css';
import publications from '../../initialData/publications.json';
import Reader from '../Reader/Reader';

const App = () => (
  <div className={styles.app}>
    <Reader items={publications} />
  </div>
);

export default App;
