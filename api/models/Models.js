var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Model the Database with a current schema
var ProductsScehma = new Schema({
    title:{
        type:String,
        required: "Enter the product name"
    },
    price:{
        type: Number,
        required: "Enter the price of product"
    },
    inventory_count:{
        type: Number,
        required: "Enter the inventor count for the product"
    }
});

module.exports = mongoose.model('Products', ProductsScehma);