'use strict';

const invoiceService = require('../service/invoiceService');

module.exports.handler = async (event) => {

  try {

    let body = JSON.parse(event.body);

    if (!body.balance && body.balance <= 0)
      throw "invalid balance";

    if (!body.products || body.products.length <= 0)
      throw "invalid products";

    let invoice = await invoiceService.createInvoice(body);

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
