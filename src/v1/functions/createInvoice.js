'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.handler = async (event) => {

  try {

    let body = JSON.parse(event.body);

    if (!body.balance && body.balance <= 0)
      throw "invalid balance";

    if (!body.products || body.products.length <= 0)
      throw "invalid products";

    const {
      MONGODB_URL = "mongodb://localhost:27017/invoiceDb",
    } = process.env;

    const InvoiceSchema = new Schema({
      "dueDate": {
        type: Date,
        required: [true, "Invoice DueDate is required"]
      },
      "balance": {
        type: Number,
        required: [true, "Invoice Balance is required"]
      },
      "docNumber": {
        type: String,
        required: [true, "Invoice DocNumber is required"]
      },
      "status": {
        type: String,
        required: [true, "Invoice Status is required"]
      },
      "products": [Object]
    });

    const Invoice = mongoose.model("Invoice", InvoiceSchema);

    let db = await mongoose.connect(
      MONGODB_URL,
      { useNewUrlParser: true }
    );

    let invoice = await Invoice.create(body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success',
        invoice,
      }, null, 2),
    };

  } catch (error) {

    console.log(error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error',
        error,
      }, null, 2),
    };

  }


};
