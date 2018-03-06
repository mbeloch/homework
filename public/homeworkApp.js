import React from 'react'
import { render } from 'react-dom'
import Phonewords from './Phonewords'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import counterApp from './reducers/reducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

// Is the thunk middleware really necessary here? Why did you use it if
// you are using promise middleware?
let store = createStore(counterApp, applyMiddleware(thunk, promise()));

render(
  <Provider store={store}>
    <Phonewords/>
  </Provider>,
  document.getElementById('app')
);