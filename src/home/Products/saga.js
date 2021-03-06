import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_PRODUCT_INITIATE, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED, GET_PRODUCTS } from './actionTypes'
// import { URL } from "../../common/constants";
import { data } from '../../common/productData/productData.json'

export function* fetchProductWatcherSaga() {
  yield takeLatest(GET_PRODUCTS, workerSaga);
  // console.log("watcher saga call");
}

function* workerSaga() {
  try {
    // console.log("worker saga call");
    yield put({ type: FETCH_PRODUCT_INITIATE });
    const response = yield call(getData);
    yield put({ type: FETCH_PRODUCT_SUCCESS, payload: response });
    // console.log("response", response);
  }
  catch (error) {
    console.log(error);
    yield put({ type: FETCH_PRODUCT_FAILED, error });
  }
}

const getData = () => {
  // return new Promise((resolve, reject) => {
  //   fetch(URL)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         reject('error');
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       resolve(data);
  //     }).catch((error) => {
  //       reject(JSON.stringify(error));
  //     })
  // });
  return data
}


