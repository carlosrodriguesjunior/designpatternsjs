const invoiceRepository = require('../repositories/invoiceRepository');

class InvoiceService {

    async createInvoice(invoice){

        let validationStrategy = require('../strategy/validationInvoiceStrategy')[invoice.type];

        await validationStrategy.validate(invoice);

        return invoiceRepository.createInvoice(invoice);

    }
}

module.exports = new InvoiceService()