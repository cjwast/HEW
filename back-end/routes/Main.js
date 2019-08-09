const express = require('express');
const router = express.Router();

const Message = require('../models/Messages');
const Show = require('../models/Shows');
const Submission = require('../models/Submissions');
const User = require('../models/Users');
const Venue = require('../models/Venues');


/**URL /shows */
//GET Una consulta con todos los shows para mostrar en Main Page
router.get('/shows', (req, res) => {
  Show.find()
    .populate('venue')
    .populate('curator')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
      console.log(err);
    })
});

/**URL /shows*/
//POST creara un nuevo show
router.post('/shows', (req, res) => {
  let data = req.body;
  let venue = new Venue();
  const { name, address1, webSite } = req.body;
  Venue.create({ name, address1, webSite })
    .then(successVenue => {
      const { title, showType, applicationDeadline, overview, fullDescription, applicationInstrucions, startDate, endDate, isPublished, curator } = req.body;
      const newShow = new Show({ title, showType, applicationDeadline, overview, fullDescription, applicationInstrucions, startDate, endDate, isPublished, curator });
      newShow.venue = successVenue.id;
      newShow.save()
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => {
          res.status(500).json({ msg: err });
          console.log(err);
        })

    })
    .catch(err => {
      res.status(500).json({ msg: err });
      console.log(err);
    });
});

/**URL /dashboard/:userID */
//GET returns a lis of shows by user id
router.get('/dashboard/:userID', (req, res, next) => {
  Show.find({ curator: req.params.userID })
    .populate('curator')
    .populate('venue')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
      console.log(err);
    })
});

/**URL /shows/:id */
//GET returns the detail of the show
router.get('/shows/:id', (req, res, next) => {
  Show.findById(req.params.id)
    .populate('curator')
    .populate('venue')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
      console.log(err);
    })
});


/**URL /shows/:id/submissions */
//GET regresa el listado de submisiones de un show
router.get('/shows/:id/submissions', (req, res, next) => {
  Submission.find({ show: req.params.id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ msg: err });
      console.log(err);
    })
});


/**URL /shows/:id/submissions */
//POST regresa el listado de submisiones de un show
router.post('/shows/:id/submissions', (req, res, next) => {
  const { artistName, artistEmail, website, instagram, fullyDescription, imageLink, addtionalLink, status, isSummited } = req.body;
  const newSubmission = new Submission({ artistName, artistEmail, website, instagram, fullyDescription, imageLink, addtionalLink, status, isSummited });
  newSubmission.show = req.params.id
  newSubmission.save()
    .then(result => {
      res.status(200).json(
        {
          status: 'ok',
          msg: 'the show has been successfully created'
        }
      )
    })
    .catch(err => {
      res.status(500).json({ msg: err });
    })
});
module.exports = router;