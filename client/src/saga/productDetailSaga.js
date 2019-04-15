import { call, put, takeLatest } from 'redux-saga/effects'
import { 
    fetchDetailSuccess,
    fetchDetailError,
    actions
} from '../redux/ducks/productDetail';
import {
    setCategories
} from '../redux/ducks/productList';
import { fetchDetail } from '../api';

function* fetchDetailAsync({payload}) {
    try {
        const { result } = yield call(fetchDetail, payload);
        yield put(fetchDetailSuccess(result));
        yield put(setCategories(result.categories));
    } catch (e) {
        yield put(fetchDetailError(e));
    }
}

function* productDetailSaga() {
  yield takeLatest(actions.FETCH_DETAIL, fetchDetailAsync);
}

export default productDetailSaga;