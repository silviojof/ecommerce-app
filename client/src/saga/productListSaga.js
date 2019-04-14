import { call, put, takeLatest } from 'redux-saga/effects'
import { 
    fetchItemsSuccess,
    fetchItemsError,
    actions
} from '../redux/ducks/productList';
import { fetchSearch } from '../api';

function* fetchItemsAsync({payload}) {
    try {
        const { data } = yield call(fetchSearch, payload);
        console.log(data)
        yield put(fetchItemsSuccess(data.product_results));
    } catch (e) {
        yield put(fetchItemsError(e));
    }
}

function* mySaga() {
  yield takeLatest(actions.FETCH_ITEMS, fetchItemsAsync);
}

export default mySaga;