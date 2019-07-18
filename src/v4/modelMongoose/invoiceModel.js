const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
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

const {
    MONGODB_URL = "mongodb://localhost:27017/invoiceDb",
  } = process.env;

  mongoose.connect(
    MONGODB_URL,
    { useNewUrlParser: true }
);

module.exports = mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

