const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for Blaze customers
const CustomerSchema = new Schema({
  last_name: {
    type: String,
    required: true
  },
  first_name: String,
  email: String,
  phone: String
})

const Customers = mongoose.model('customers', CustomerSchema);
module.exports = Customers;