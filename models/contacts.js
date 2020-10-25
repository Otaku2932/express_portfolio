let mongoose = require('mongoose');

let contactsModel = mongooose.schema({
    name: String,
    phone: Int32Array,
    email: String
},{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactsModel);