const invoiceRepository = require('../repositories/invoiceRepository');
const validationInvoiceSchema = require('../validateSchema/validateInvoiceSchema');

class InvoiceService {

    async createInvoice(invoice){

        let resultValidation = await validationInvoiceSchema.validate(invoice);
        
        console.log(resultValidation);

        return invoiceRepository.createInvoice(invoice);

    }
}

module.exports = new InvoiceService()