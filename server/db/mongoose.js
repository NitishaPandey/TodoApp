var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_MAUVE_URI);

module.exports = {mongoose};
