import { call, put, all, takeLatest } from "redux-saga/effects";
import { emptyCart } from "./cart.action";
import userActionTypes from "../user/user.types";

function* emptyCartOnSignOut() {
    yield put(emptyCart())
}

function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartOnSignOut)
}

export default function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}