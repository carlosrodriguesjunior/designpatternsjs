const invoiceService = require('../services/invoiceService');
const responseHttpFactory = require('../factories/responseHttpFactory');

module.exports.handler = async (event) => {

  try {

    let body = JSON.parse(event.body);

    let invoice = await invoiceService.createInvoice(body);

    return responseHttpFactory.response(200, 'success', invoice);

  } catch (error) {

    console.log(error)

    return responseHttpFactory.response(500, 'Error', error);

  }

};
