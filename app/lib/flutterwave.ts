const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(
  process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_FLW_SECRET_KEY
);

const initiateUgandaMobileMoneyPayment = async () => {
  try {
    const payload = {
      tx_ref: "MC-1585230950508",
      amount: "1500",
      email: "olufemi@flw.com",
      phone_number: "054709929220",
      currency: "UGX",
      fullname: "Olufemi Obafunmiso",
      redirect_url: "https://rave-webhook.herokuapp.com/receivepayment",
      voucher: "128373",
      network: "MTN",
    };

    const response = await flw.MobileMoney.uganda(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  initiateUgandaMobileMoneyPayment,
};
