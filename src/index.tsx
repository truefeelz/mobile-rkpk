import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from "./Routers";
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routers />
    </BrowserRouter>,
  document.getElementById('root')
);
