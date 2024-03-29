import userActionTypes from "./user.types"



// Google sign-in actions
export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})


// Email sign-in actions
export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})


//  Sign-in success and failure
export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (errorMessage) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
})

// Check user session
export const checkUserSession = () =>({
    type: userActionTypes.CHECK_USER_SESSION
})

// sign-out actions
export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error.message
})

// sign-up actions
export const signUpStart = (userCredentials) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (error) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error.message
})
