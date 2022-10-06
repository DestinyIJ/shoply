import React from "react";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";


import './checkout.style.scss'

const CheckoutPage = ({ cartItems, cartTotal }) => {
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
                <span>TOTAL: ${cartTotal}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        cartItems : selectCartItems,
        cartTotal : selectCartTotal
    }
)
export default connect(mapStateToProps)(CheckoutPage)