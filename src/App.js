import React from 'react';
import {useRoutes, BrowserRouter } from 'react-router-dom';
import '../node_modules/antd/dist/reset.css'
import {routes} from './config/routes';
import './App.css'

const App = () => {

  return (
   <div className='App'>
      {useRoutes(routes)}


  </div>
   
  );
};

export default App;