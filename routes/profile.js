var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const context={
    title: 'Profile',
    name:'Estefania',
    age:15,
    position: 'Boss',
    hobbies:['swimmimg','running','singing','robotics','reading'],
  }
  res.render('profile', context);
});


module.exports = router;
