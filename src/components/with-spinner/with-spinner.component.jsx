import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styled";

// const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer /> 
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} />
//     )
// }

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isCollectionFetched, fetchCollectionStartAsync, ...otherProps }) => {
        if(!isCollectionFetched) {
            fetchCollectionStartAsync()
        }
        
        return (
            !isCollectionFetched ? (
                <SpinnerOverlay>
                    <SpinnerContainer /> 
                </SpinnerOverlay>
            ) : (
                <WrappedComponent {...otherProps} />
            )
        )
    }
    return Spinner
}



export default WithSpinner