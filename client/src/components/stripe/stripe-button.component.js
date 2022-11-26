import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = "sk_test_51LrgV8LuT973tDtfbU17G0Z4Xf0h6sivEldKH4scSiMm4renhQL3z9M408hMljWI7ZuZpSQHJelJwdDvrb2u4UKA00jSM7qUBQ"

  const onToken = (token) => {
    console.log(token)
    alert("Payment Successful! Your Order is on its way")
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  }

  return (
    <StripeCheckout
      name="Shoply" // the pop-in header title
      description={`Total Order Amount: $${price}`}// the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      ComponentClass="div"
      label="Get Your Orders" // text inside the Stripe button
      panelLabel="Order Payment" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      currency="USD"
      stripeKey={publishableKey}
      locale="auto"
      email="ighedodestiny11@gmail.com"
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      // billingAddress={false}
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      // zipCode={false}
      alipay // accept Alipay (default false)
      bitcoin // accept Bitcoins (default false)
      allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
      // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
      // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      reconfigureOnUpdate={false}
      // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
      // useful if you're using React-Tap-Event-Plugin
      triggerEvent="onClick"
  >
  {/* <button className="btn btn-primary">
    Use your own child component, which gets wrapped in whatever
    component you pass into as "ComponentClass" (defaults to span)
  </button> */}
</StripeCheckout>
  )
}

export default StripeCheckoutButton;