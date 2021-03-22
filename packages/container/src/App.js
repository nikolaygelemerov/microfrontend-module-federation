import React, { useEffect, useState } from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('acounter: ', counter);
  }, []);

  return (
    <div>
      <h1>Hi There!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
