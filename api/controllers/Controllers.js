'use strict';

var mongoose = require('mongoose'),
    Products = mongoose.model('Products');

//This will allow the user to get All of the product info
exports.getAllProducts = function(req,res){
    Products.find({}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};

//Allows the user to add an item to the market place
exports.makeAProducts = function(req,res){
    var newProducts = new Products(req.body);
    newProducts.save(function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};

//This allows the users to grab 1 products
exports.readProducts = function(req, res){
    Products.findById(req.params.productsID, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};

//This will update the inventory count
exports.updateProducts = function(req, res) {
    Products.findOneAndUpdate({_id: req.params.productsID}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };