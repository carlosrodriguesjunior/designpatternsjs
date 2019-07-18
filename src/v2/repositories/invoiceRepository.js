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

const invoiceModel = mongoose.model("Invoice", invoiceSchema);

const {
    MONGODB_URL = "mongodb://localhost:27017/invoiceDb",
  } = process.env;


class InvoiceRepository {
    constructor() {
        mongoose.connect(
            MONGODB_URL,
            { useNewUrlParser: true }
        );
    }

    createInvoice(invoice){

        return invoiceModel.create(invoice);

    }
}

module.exports = new InvoiceRepository()