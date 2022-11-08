import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { ShopContainer } from "./shop.styled";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { selectIsCollectionFetched } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";


class ShopPage  extends React.Component {
    // componentDidMount() {
    //     const { fetchCollectionStartAsync, isCollectedFetched } = this.props
    //     if(!isCollectedFetched) {
    //         fetchCollectionStartAsync() 
    //     }
    // }

    render() {

        return (
            <ShopContainer>
                <Routes>
                    <Route path="" element={<CollectionsOverviewContainer />} />
                </Routes>
                <Outlet />
            </ShopContainer>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    isCollectedFetched: selectIsCollectionFetched
})
const mapDispatchToProps = dispatch => ({
   fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)

