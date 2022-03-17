import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51JjgkQJ5eXVoxPZbwf7Qbdr75snQ8AC2J908EBBqGj90XAwRpwQ7rUKneqTRlLixErgHnbANMMPwMe7MllTg43Qb00tUBO7ucY'
);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
