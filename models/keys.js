const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KeySchema = new Schema({
    key_id:{
        type: String,
        required: [false]
    },
    key:{
        type: String,
        required: [true, 'Must state key']
    },
    notes:{
        type: String,
        required: [true, 'Must spell key']
    }
});

const Key = mongoose.model('keys', KeySchema);

module.exports = Key;