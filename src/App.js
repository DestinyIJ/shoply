import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import { checkUserSession } from './redux/user/user.action';


// components
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.page';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import CheckoutPage from './pages/checkout/checkout.page';
import CollectionPageContainer from './pages/collection/collection-page.container';




class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()

    // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
  }


  render () {
    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} > 
            <Route path=":collectionId" element={<CollectionPageContainer />} />
          </Route>
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/signin" element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector(
  {
      currentUser: selectCurrentUser,
      collectionsArray: selectCollectionsForPreview
  }
)

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
