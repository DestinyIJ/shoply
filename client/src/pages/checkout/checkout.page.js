import React, { useContext } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe/stripe-button.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";
import { CartContext } from "../../provider/cart/cart.provider";


import './checkout.style.scss'

const CheckoutPage = () => {
    const { cartItems, cartItemsTotal} = useContext(CartContext)
    const currentUser = useSelector(selectCurrentUser)

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
                <span>TOTAL: </span> <span> ${cartItemsTotal}</span>
            </div>

            <div>
                {
                    currentUser ? 
                        <div className="pay-now">
                            {
                                cartItemsTotal > 0 ? <StripeCheckoutButton price={cartItemsTotal} /> : null
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

export default CheckoutPage