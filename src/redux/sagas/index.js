import { fork } from 'redux-saga/effects';
import userSaga from './user.saga';
import myListSaga from './list.saga';

export default function * mySaga(){
    yield fork(userSaga)
    yield fork(myListSaga)
}