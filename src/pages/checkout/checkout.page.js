import React from "react";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe/stripe-button.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";


import './checkout.style.scss'

const CheckoutPage = ({ cartItems, cartTotal, currentUser }) => {
    const headerBlocks = ["Product", "Description", "Quantity", "Price", "Remove"]
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {
                    headerBlocks.map((headerBlock, index) => (
                        <div className="header-block" key={index}>
                            <span>
                                { headerBlock }
                            </span>
                        </div>
                    ))
                }
            </div>
            {
                cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
            }
            <div className="total">
                <span>TOTAL: </span> <span> ${cartTotal}</span>
            </div>

            <div>
                {
                    currentUser ? 
                        <div className="pay-now">
                            {
                                cartTotal > 0 ? <StripeCheckoutButton price={cartTotal} /> : null
                            }
                        </div>
                        :
                        <Link to="/signin">
                                <CustomButton type='button' >Sign-in to pay</CustomButton>
                        </Link>
                }
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments
                <br />
                5555 5555 5555 4444- Exp: 01/23 - CVV:123
            </div>
            
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems : selectCartItems,
        cartTotal : selectCartTotal,
        currentUser: selectCurrentUser
    }
)
export default connect(mapStateToProps)(CheckoutPage)