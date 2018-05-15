const express = require('express');
const router = express.Router();
const app = express();
const Key = require('../../models/keys');

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/keys', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err == 'object' ? err.message : err;
//     res.status(501).json(response);
// };

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/keys/:key', function(req, res, next) {
    
    const result = Key.findOne({ key: req.params.key }, 'notes').select('-_id').regex(/[[],""]/g, '')
      .then(function(gotKey) {
        response.data = gotKey;
        // console.log(response);
        res.json(response.data)      
      }).catch(next);
  })



module.exports = router;