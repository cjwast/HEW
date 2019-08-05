const express = require('express');
const router = express.Router();

const User = require('../models/Users');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

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
  const { firstName, lastName, email, password } = req.body;
  const newUser = new User({ firstName, lastName, email, password });

  if (email === "" || password === "") {
    return res.status(401).json({ message: "Indicate username and password" });
    return;
  }


  User.findOne({ email })
    .then(user => {
      console.log(`comparacion => ${user != null}`)
      if (user != null) {
        console.log(`usuario =>${user}`)
        return res.status(401).json({ message: "the user already exist" });
      }
    });

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  newUser.password = hashPass;

  newUser.save()
    .then(userResponse => {
      res.status(200).json(userResponse);
    })
    .catch(err => console.log(err));
});


module.exports = router;