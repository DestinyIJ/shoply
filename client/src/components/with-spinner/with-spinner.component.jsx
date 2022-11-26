import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styled";


const WithSpinner = WrappedComponent => {
    const Spinner = ({ isCollectionFetched, fetchCollectionStart, ...otherProps }) => {
        if(!isCollectionFetched) {
            fetchCollectionStart()
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