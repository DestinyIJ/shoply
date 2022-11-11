import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { ShopContainer } from "./shop.styled";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


class ShopPage  extends React.Component {
   
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




export default ShopPage

