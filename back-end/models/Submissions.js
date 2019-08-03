const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  show: {
    type: Schema.Types.ObjectId,
    ref: 'Shows'
  },
  artisName: String,
  artistName: String,
  artistEmail: String,
  website: String,
  fullyDescription: String,
  imagesLink: String,
  additionalLink: String,
  status: String,
  isSummited: Boolean,
});

module.exports = mongoose.model('Submissions', submissionSchema);