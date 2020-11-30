import React from 'react';
import HomeScreen from './src/HomeComponent';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
};

export default App;
