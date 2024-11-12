import React from 'react';
import {useRoutes, BrowserRouter } from 'react-router-dom';
import '../node_modules/antd/dist/reset.css'
import {route} from './App_Conflg';
import './App.css'

const App = () => {

  return (
   <div className='App'>
      {useRoutes(route)}


  </div>
   
  );
};

export default App;