const invoiceRepository = require('../repositories/invoiceRepository');

class InvoiceService {

    createInvoice(invoice){

        return invoiceRepository.createInvoice(invoice);

    }
}

module.exports = new InvoiceService()