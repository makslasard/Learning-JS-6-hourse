import React from 'react';
import { Context } from './hooks/Context';

import { Books } from './components/Books'


const App = () => {

  return <Context >
    <Books />
  </Context>;
}

export default App;
