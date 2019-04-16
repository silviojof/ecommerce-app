import { call, put, takeLatest } from 'redux-saga/effects'
import { 
    fetchItemsSuccess,
    fetchItemsError,
    actions
} from '../redux/ducks/productList';
import { fetchSearch } from '../api';

function* fetchItemsAsync({payload}) {
    try {
        const { result } = yield call(fetchSearch, payload);
        yield put(fetchItemsSuccess(result));
    } catch (e) {
        yield put(fetchItemsError(e));
    }
}

function* productListSaga() {
  yield takeLatest(actions.FETCH_ITEMS, fetchItemsAsync);
}

export default productListSaga;