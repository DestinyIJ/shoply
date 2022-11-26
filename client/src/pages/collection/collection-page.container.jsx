import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetched } from "../../redux/shop/shop.selector";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import collectionPage from "./collection.page";

const mapStateToProps = createStructuredSelector({
    isCollectionFetched: state => selectIsCollectionFetched(state),
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart()),
})

const CollectionPageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithSpinner
)(collectionPage)


export default CollectionPageContainer