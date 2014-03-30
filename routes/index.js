/*
* GET home page.
*/
var tags = require('../public/javascripts/calc.js');

exports.index = function(req, res){
  res.render('index', { title: 'Calculator'
});
};

exports.calculator = function(req, res){
  var userCalculation = String(req.query.calculation);
  var firstNumber = Number(req.query.x);
  var secondNumber = Number(req.query.y);
  var results;
  
  console.log("Calculation chosen is: " + userCalculation);
  console.log("1st number is: " + firstNumber);
  console.log("2nd number is: " + secondNumber);
  
  
  if(userCalculation == "add"){
   results = tags.add(firstNumber,secondNumber);
  }else if(userCalculation == "subtract"){
   results = tags.subtract(firstNumber,secondNumber);
  }else if(userCalculation == "multiply"){
   results = tags.multiply(firstNumber,secondNumber);
  }else{
   results = tags.divide(firstNumber,secondNumber);
  };
  
  console.log("The answer is: " + results);
  
  res.render('calculator', { title: 'Calculator'
   , calculation: userCalculation
   , x: firstNumber
   , y: secondNumber
   , answer: results
   });
};
