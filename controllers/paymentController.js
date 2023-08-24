const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, { apiVersion: '2016-07-06' });

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res
    .status(200)
    .json({ success: true, clientSecret: paymentIntent.client_secret });
});


