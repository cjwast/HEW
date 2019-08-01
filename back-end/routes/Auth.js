const express = require('express');
const router = express.Router();

const User = require('../models/Users');

//URL users/
//GET es una consulta sencilla con todos los registros
router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'should respond with a simple query with all the user records'
  })
});

//URL users/
//POST creara un nuevo registro]
router.post('/', (req, res) => {
  console.log(req.body)
  const { firstName, lastName, email, password, bio } = req.body;
  const newUser = new User({ firstName, lastName, email, password, bio });
  newUser.save()
    .then(userResponse => {
      res.status(200).json(userResponse);
    })
    .catch(err => console.log(err));
});


module.exports = router;