const {model} = require("mongoose");

const {PositionSchema} = require('../schemas/PositionSchemas.js');

const PositionModel = model('position', PositionSchema);
module.exports = {PositionModel};