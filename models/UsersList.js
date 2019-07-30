const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: Array
    }
})



module.exports = mongoose.model('Users', userSchema);
