const express = require('express');
const router = express.Router();
const app = new express();
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

// Get users
// router.get('/users', (req, res) => {
//     connection((db) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });


// router.get('/keys/:key', (req, res, next) => {
//     connection((db) => {
//         db.collection('keys')    
//       .findOne({ key: req.params.key })
//       .then((result) => {
//           response.key = keys;
//           res.json(response);
//         if (!result) {
//             return next({ status: 404, message: 'not found'});
//         }
//         res.status(200).json(result);
//       })
//       .catch(err => {
//           return next({ status: 500, message: 'this is some fucked up shit'});
//       })
//     });
// });


// router.get(`/keys/:key`, (req, res, next) => {
//       connection((db) => {
//       db.collection('keys')
//       .findOne({key: 'C Major'})
//       .then((scale) => {
//           console.log(scale);
//           res.json(scale);          
//         })
//       .catch(err => {
//           return next({ status: 500, message: 'fucked up'})
//         });
//     });
//       });

router.get('/', function(req, res, next) {
    const result = Key.find({})
      .then(function(key) {
        response.data = key;
        res.json(response);
        
        
      }).catch(next);
  })



module.exports = router;