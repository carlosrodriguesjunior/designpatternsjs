const Joi = require('joi');

const invoiceSchema = Joi.object().keys({
    balance: Joi.number().required().min(1),
    products: Joi.array().min(1).required(),
    dueDate: Joi.date().required(),
    docNumber: Joi.string().required(),
    status: Joi.string().required()
});

class ValidateInvoiceSchema {

    static validate (invoice){

        return new Promise((resolve, reject)=>{

            Joi.validate(invoice,invoiceSchema,(err,value)=>{
                if (err) reject(err)

            resolve(value)
            })
        })

    }
}

module.exports = ValidateInvoiceSchema;
