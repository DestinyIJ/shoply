import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "@reduxjs/toolkit";

import { selectIsCollectionFetched } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const mapStateToProps = createStructuredSelector({
    isCollectionFetched: selectIsCollectionFetched
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart()),
 })



const CollectionsOverviewWithSpinnerContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewWithSpinnerContainer