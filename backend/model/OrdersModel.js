const {model} = require('mongoose');

const {OrdersSchema} = require("../schemas/ordersSchemas.js");

const OrdersModel = new model('orders', OrdersSchema);

module.exports = { OrdersModel };

