const express = require("express");
const expressJson = express.json();
const expressUrl = express.urlencoded({ extended: true });
const cors = require("cors");
const path = require("path")
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


// ***** Environment variables *****
const PORT = process.env.SERVER_PORT || 8000;
const API_URL = process.env.API_URL
// ===== Environment variables =====

//  ***** Initializing App *****
const app = express();
const server = require('http').createServer(app);
// ===== Initializing App =====

// ***** App middlewares *****
app.use(expressJson);
app.use(expressUrl)
app.use(cors());
app.options('*', cors)
// ===== App middlewares =====


if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, "client/build", "index/html"))
    })
}

app.post("/payment", (request, response) => {
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: "usd"
    }

    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if(stripeError) {
            response.status(500).json({ error: stripeError })
        } else {
            response.status(200).json({ success: stripeResponse })
        }
    })

})

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})