import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const mockStore = configureStore(middlewares)

export const renderWithProvider = ({ store, component } = {}) => {
  return render(
    <Provider store={store}>
        {component}
    </Provider>
  )
};