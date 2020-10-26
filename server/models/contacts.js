let mongoose = require('mongoose');
const router = require('../routes');

let contactsModel = mongooose.schema({
    name: String,
    phone: Int32Array,
    email: String
},{
    collection: "contacts"
});

router.get('/add', (req, res, next) => {

})

router.post('/add', (req, res, next) => {
    
})

router.get('/edit/:id', (req, res, next) => {
    
})

router.get('/edit/:id', (req, res, next) => {
    
})

router.post('/delete/:id', (req, res, next) => {
    
})

module.exports = mongoose.model('Contact', contactsModel);