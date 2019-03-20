// Import the model (burger.js) to use its database functions.
const express = require("express");
const router = express.Router();

// Pull in all required dependencies
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/",  (req, res)=> {
  burger.selectAll( (data)=> {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger",  (req, res)=> {
  // devoured = false;
  burger.insertOne([
    "burger_name"
  ], [
      req.body.burger_name
    ], (data)=> res.redirect("/"));
});

router.put("/burger/:id",  (req, res)=> {
  let condition = "id =" + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition,  (data)=> res.redirect('/'));
});


// Export routes for server.js
module.exports = router;