//Create a store class
class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseHat(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseShirt(quantity) {
    this.paymentProcessor.pay(150 * quantity);
  }
}

//Create a StripePaymentProcessor class
class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}
//Create a Stripe class
class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    // Simulate payment processing using user's authentication and credit card information
    console.log(
      `${this.user} made payment of ${amountInCents / 100} by Stripe `
    );
  }
}

//Create a PaypalPaymentProcessor class,in this,you should create it's own paypal API"this.paypal = new Paypal(user)"first inside of it.
// then, when after create "pay()", you can use it inside.
class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars * 100);
  }
}
//Create a Paypal class
class Paypal {
  makePayment(user, amountInCents) {
    // Simulate payment processing using user's authentication and credit card information
    console.log(`${user} made payment of ${amountInCents / 100} by Paypal `);
  }
}

// const store = new Store(new PaypalPaymentProcessor("Hanna"));
const store = new Store(new StripePaymentProcessor("Liliana"));
store.purchaseHat(3);
store.purchaseShirt(4);
