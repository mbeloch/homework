import React from 'react'
import { render } from 'react-dom'
import NumberInserter from './NumberInserter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from './reducers'

let store = createStore(counterApp);

render(
  <Provider store={store}>
    <NumberInserter/>
  </Provider>,
  document.getElementById('app')
);