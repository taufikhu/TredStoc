const {model} = require('mongoose');
const {HoldingSchema} = require('../schemas/HoldingSchemas.js');

const HoldingModel = model('Holding', HoldingSchema);

module.exports = {HoldingModel};