import React, { useEffect, useState } from 'react';
<<<<<<< Updated upstream
=======
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';

>>>>>>> Stashed changes
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('counter: ', counter);
  }, []);

  return (
<<<<<<< Updated upstream
    <div>
      <h1>Hi There!</h1>
      <hr />
      <MarketingApp />
    </div>
=======
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
};
