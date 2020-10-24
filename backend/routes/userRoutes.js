var express = require('express');
var router = express.Router();
var errortypes = require('../utils/errors/errorUtil');

// temp endpoint to test
router.get('/hello', (req, res, next) => {
    if (req.query.error) {
        switch (req.query.error) {
            case '400':
            {
                next(new errortypes.BadRequest("400 error"));
                break;
            }
            case '404':
            {
                next(new errortypes.NotFound("404 error"));
                break;
            }
            case '500':
            {
                next(new errortypes.BadDbRequest("500 error"));
                break;
            }
            default:
            {
                next(new errortypes.GeneralError("General error"));
                break;
            }
        }
    }
    else {
        res.status(200).json({
            hello: "World"
        });
    }
});


module.exports = router;