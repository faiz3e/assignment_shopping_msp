import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './common/store/rootReducer'
import { App } from './App';
import { rootSaga } from './common/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(...rootSaga);

store.subscribe(() => { 
  console.log("updated store",store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
