var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/:date?', function (req, res) {
    // check if there is no date
    var date = req.params.date;
    if (date == null) {
        // return null on both fields if no date was found
        res.json({
            unix: null,
            neutral: null
        });
    }
    else {
        // decide with regex if epoch timestamp or human date
        if (/^\d*$/.test(date)) {
            res.json({
                unix: +date,
                neutral: moment.unix(+date).format("MMMM DD, YYYY")
            });
        }
        else {
            res.json({
                unix: (+new Date(date)/10000),
                neutral: date
            });
        }
    }
});

app.use('/', router);

app.listen(port);

console.log('Backend running on port ' + port);
