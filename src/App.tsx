import React, { useState } from 'react';
import type { FC } from 'react';
import CardProducts from './components/card.componet';

import 'antd/dist/reset.css';
import './App.css';

const Home: FC = () => {
  const [tab, setTab] = useState<string>("home");

  return (
    <div className='App'>
      <div className={"App-card"}>
        <CardProducts />
      </div>
    </div>
  )
}

export default Home;