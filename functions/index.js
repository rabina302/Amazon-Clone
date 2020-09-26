const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HRJLUBMcoZVT8mGImYanLHF2WBeBcXcJu17UPF351MkHWGlltHTYIwcHG4VH3HnUE1DO4dFibacXxkKRn6zqgzi00MkyWaWpi"
);
//API

//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received BOOMMMM >>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listem command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-13e57/us-central1/api
