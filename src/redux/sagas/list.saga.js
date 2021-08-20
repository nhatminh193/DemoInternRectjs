import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* listSaga(action) {
    try {
         const grant_type = "client_credentials";
         const client_id = "v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ";
         const client_secret = "91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H";
         const result1 = yield axios({
             method: 'POST',
             url: 'https://api.petfinder.com/v2/oauth2/token',
             data: {
                grant_type,
                client_id,
                client_secret
            },
         });
         const {page,limit} = action.payload;
         const result2 = yield axios({
             method: "GET",
             url: 'https://api.petfinder.com/v2/animals',
             params:{
                _page: page,
                _limit: limit
             },
             headers: {
                 'Authorization': `Bearer ${result1.data.access_token}`
             }
         });
        yield put({
            type: 'GET_LIST_SUCCESS',
            payload: {
                data: result2.data.animals
            }
        });
    }
    catch (e) {
        yield put({
            type: 'GET_LIST_FAIL',
            error: e.error,
        })
    }
}

export default function* myListSaga() {
    yield takeEvery("GET_LIST_REQUEST", listSaga)
}