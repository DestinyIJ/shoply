import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

// components
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.page';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
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
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => (
  {
      currentUser: user.currentUser
  }
)

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
