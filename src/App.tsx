import React from 'react';
import type { FC } from 'react';
import { Button } from 'antd';
import AppHeader from './components/header';
import CardProducts from './components/card';
import 'antd/dist/reset.css';
import './App.css';

const buttonApp: FC = () => (
  <div className='App'>
    <AppHeader />
    <body>
      <div style={{ marginTop: 50 }}>
        <CardProducts />
      </div>
    </body>
  </div>
)

export default buttonApp;
