// const { model } = require("mongoose");

// const { OrderSchema } = require("../schemas/OrdersSchema");

// const OrderModel =  model("order" , OrderSchema);

// module.exports = { OrderModel };

const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = mongoose.model("order", OrdersSchema);

module.exports = { OrdersModel };
