import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';


// components
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.page';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import CheckoutPage from './pages/checkout/checkout.page';
import CollectionPageContainer from './pages/collection/collection-page.container';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';




class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        const userSnapShot= await createUserProfileDocument(authUser);
  
        if (userSnapShot.exists()) {
          setCurrentUser({
            id: userSnapShot.id,
              ...userSnapShot.data(),
          })
        } else {
          console.log("No such document!");
        }
      } else {
        setCurrentUser(authUser)
      }
    })

    // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

// const mapStateToProps = (state) => (
//   {
//       currentUser: selectCurrentUser(state)
//   }
// )

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
