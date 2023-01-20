import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Article from '../../pages/Article';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.appContainer}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/article' element={<Article />}/>
      </Routes>
    </div>
  );
};

export default App;
