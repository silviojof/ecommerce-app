import { call, put, takeLatest } from 'redux-saga/effects'
import { 
    fetchDetailSuccess,
    fetchDetailError,
    actions
} from '../redux/ducks/productDetail';
import { fetchDetail } from '../api';

function* fetchDetailAsync({payload}) {
    try {
        const { result } = yield call(fetchDetail, payload);
        console.log(result)
        yield put(fetchDetailSuccess(result));
    } catch (e) {
        yield put(fetchDetailError(e));
    }
}

function* mySaga() {
  yield takeLatest(actions.FETCH_DETAIL, fetchDetailAsync);
}

export default mySaga;