let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../models/contacts');

router.get('/', (req, res, next) => {
    Contact.find((err, ContactList) => {
        if(err){
            return console.error(err);
        }
        else {
            res.render('contacts', {title: 'Business Contacts', ContactList: contactList})
        }
    });
})

module.exports = router;