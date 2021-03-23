import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('counter: ', counter);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
