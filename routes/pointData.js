var express = require('express');
var router = express.Router();
var model = require('../myModel');

router.get('/', function(req, res, next) {
  res.send('point-data route');
});

router.post('/post', function(req, res, next) {
    var dataModel = new model();

    var today = new Date;
    var millisecond = today.getMilliseconds();

    dataModel.station = req.body.station;
    dataModel.post_at = today+'毫秒數:'+millisecond;
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

router.delete('/delete/:times/:station', function(req, res, next) {

    model.find({'times': req.params.times,'station': req.params.station}, function (err, data) {
        console.log(data.length+'');
        if (data.length == 0){
            res.send('data not exists',null);
        }else {
            model.deleteMany({'times': req.params.times,'station': req.params.station}, function(err) {
                if(err)
                    res.send(err);
        
                res.send('Done!');
            });
        }
    });
});

module.exports = router;