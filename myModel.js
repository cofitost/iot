var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Database = new schema({
    station : String,
    post_at : String,
    times   : String,
    data_1  : String
});

module.exports = mongoose.model('PointData', Database);
mongoose.connect('mongodb://localhost:27017/PointData', { useNewUrlParser: true });