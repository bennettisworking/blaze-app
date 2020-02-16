const express = require ('express');
const router = express.Router();
const Customers = require('../models/customer');

router.get('/customer', (req, res, next) => {
  const skipcount = (req.query.page - 1) * (req.query.pagelimit);
  Customers.count({}).then(data => {
    Customers.find({}).skip(skipcount).limit(Number(req.query.pagelimit))
      .then(data => res.json(data))
      .catch(next)
    });
  })
  
router.post('/customer', (req, res, next) => {
  /*if(req.body.last_name){*/
  Customers.create(req.body)
  	.then(data => res.json(data))
  	.catch(next)
  /*}else {
    res.json({
      error: "The input field is empty"
    })
  }*/
});

router.put('/customers', (req, res, next) => {
 /* Customers.updateMany({}, {'$set':{'*':'*'}}
  .then(data => res.json(data))
    .catch(next)
  /*}else {
    res.json({
      error: "The input field is empty"
    })
  }*/
});

router.delete('/customer/:id', (req, res, next) => {
  Customers.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

router.get('/count', (req, res, next) => {
  Customers.count({})
    .then(data => res.json(data))
    .catch(next)
});

router.get('/gen/:count', (req, res, next) => {
  //let counter = (req.params.count < 1) ? req.params.count : 1;
  /*if(req.body.last_name){*/
  for(let l=0;l<req.params.count;l++){
  let bod = fakereqBody();
  Customers.create(bod)
    .then(data => res.json(data))
    .catch(next)
  }
  /*}else {
    res.json({
      error: "The input field is empty"
    })
  }*/
});

/*----------------*/

const vowels = [97, 101, 105, 111, 117];
const consonants = [98, 99, 100, 102, 103, 104, 106, 107, 108, 109, 110, 112,
113, 114, 115, 116, 118, 119, 120, 121, 122];

getVowel = () => {
  return String.fromCharCode(vowels[Math.floor(Math.random()*5)]);
}

getConsonant = (i) => {
  let a = 0;
  if(i){
    a = -32;
  }
  return String.fromCharCode(consonants[Math.floor(Math.random()*21)]+a);
}

generateName = () => {
  let name = '';
  name += getConsonant(1);
  name += getVowel();
  name += getConsonant();
  name += getVowel();
  name += getConsonant();
  name += getConsonant();
  name += getVowel();
  name += getConsonant();
  return name;
  //console.log(name);
}

generateEmail = () => {
  let name = generateName();
  name += "@gmail.com";
  return name;
}

generatePhone = () => {
  return Math.random().toString().slice(2,11);
}

fakereqBody = () => {
  let o = {};
  o.last_name = generateName();
  o.first_name = generateName();
  o.email = generateEmail();
  o.phone = generatePhone();
  console.log(o);
  return o;
}

module.exports = router;