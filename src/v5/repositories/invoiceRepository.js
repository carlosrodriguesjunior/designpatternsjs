const invoiceModel = require('../modelMongoose/invoiceModel');

class InvoiceRepository {

    createInvoice(invoice){

        return invoiceModel.create(invoice);

    }
}

module.exports = new InvoiceRepository()