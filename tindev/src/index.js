/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { YelllowBox } from 'react-native';

YelllowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

import Routes from './routes';
function App() {
  return (
     <Routes />
  );
}
// const App: () => React$Node = () => {

// };


export default App;
