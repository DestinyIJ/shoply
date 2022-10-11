import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import CollectionsOverview  from "../../components/collections-overview/collections-overview.component";


const ShopPage = () => (
    <div className="shop-page">
        <Routes>
            <Route path="" element={<CollectionsOverview />} />
        </Routes>
        <Outlet />
    </div>
)

export default ShopPage

