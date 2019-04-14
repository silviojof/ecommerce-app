import { all } from 'redux-saga/effects';
import productListSaga from './productListSaga';

export default function* rootSaga() {
    yield all([
        productListSaga(),
    ]);
};
  