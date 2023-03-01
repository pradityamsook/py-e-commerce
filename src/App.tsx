import React from 'react';
import type { FC } from 'react';
import { Button } from 'antd';
import { AppHeader } from '/AppHeader';
import 'antd/dist/reset.css';
import './App.css';

const buttonApp: FC = () => (
    <div className='App'>
    <Button type="primary">Button</Button>
  </div>
)

export default buttonApp;
