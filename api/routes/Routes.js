'use strict';
module.exports = function(app){
    var products = require('../controllers/Controllers');
    //adding '/products' would allow the user to see all the items
    app.route('/products')
        .get(products.getAllProducts)
        .post(products.makeAProducts);
    //adding '/products/:productsID' would allow the user to see the specified item
    //Unfortunatly, the update products does not work
    app.route('/products/:productsID')
        .get(products.readProducts)
        .put(products.updateProducts);
}