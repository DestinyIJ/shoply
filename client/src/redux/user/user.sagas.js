import { call, put, all, takeLatest } from "redux-saga/effects";

import userActionTypes from "./user.types";
import { GoogleProvider, auth, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from "./user.action";


function* getSnapshotFromUser(user, additionalData = null) {
    const userRef = yield call(createUserProfileDocument, user, additionalData)
    yield put(signInSuccess({ id: userRef.id, ...userRef.data() }))
}



// Google Sign-in Sagas
function* signInWithGoogle() {  
    try {
        const { user } = yield signInWithPopup(auth, GoogleProvider);
        yield getSnapshotFromUser(user)
    } catch (error) {
        yield put(signInFailure(error))
    }   
}
function* onGoogleSignInstart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}



// Email Sign-in Sagas
function* signInWithEmail( {payload: { email, password } }) {  
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password)
        yield getSnapshotFromUser(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}
function* onEmailSignInstart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}



// Check user sign-in
function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUser(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}
function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}



// user sign-out
function* signOut () {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure())
    }
}
function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}



// user sign-up
function* signUp({payload: {email, password, displayName}}){
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password)
        yield put(signUpSuccess({ user, additionalData: { displayName }}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}
function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

function* signInAfterSignUp({payload: {user, additionalData}}) {
    try {
        yield getSnapshotFromUser(user, additionalData)
    } catch (error) {
        yield put(signInFailure(error))
    }
}
function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}



export default function* userSagas () {
    yield all([
        call(onEmailSignInstart),
        call(onGoogleSignInstart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}