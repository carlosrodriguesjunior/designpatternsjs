const invoiceRepository = require('../repository/invoiceRepository');

class InvoiceService {

    createInvoice(invoice){

        return invoiceRepository.createInvoice(invoice);

    }
}

module.exports = new InvoiceService()