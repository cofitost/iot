var express = require('express');
var router = express.Router();
var model = require('../myModel');

router.get('/', function(req, res, next) {
  res.send('point-data route');
});

router.post('/post', function(req, res, next) {
    var dataModel = new model();

    var today = new Date();

    dataModel.station = req.body.station;
    dataModel.post_at = today;
    dataModel.times = req.body.times;
    dataModel.data_1 = req.body.data_1;

    dataModel.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Done!' });
    });
});

router.get('/get', function(req, res, nest) {
    model.find(function(err, data){
        if(err)
            res.send(err);

        res.json(data);
    });
});

module.exports = router;