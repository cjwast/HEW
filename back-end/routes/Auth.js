const express = require('express');
const router = express.Router();

const User = require('../models/Users');

//URL users/
//GET es una consulta sencilla con todos los registros
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
      console.log(err);
    })
});

//URL users/
//POST creara un nuevo registro]
router.post('/', (req, res) => {
  const { firstName, lastName, email, password, bio } = req.body;
  const newUser = new User({ firstName, lastName, email, password, bio });
  newUser.save()
    .then(userResponse => {
      res.status(200).json(userResponse);
    })
    .catch(err => console.log(err));
});


module.exports = router;