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
            res.render('contacts/list', {title: 'Business Contacts', ContactList: contactList})
        }
    });
})

router.get('/add', (req, res, next) => {
    res.render('contacts/list', {title: 'Add Contacts'})
})

router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    })

    Contact.create(newContact, (err, Contact) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect("/contacts");
        }
    })
})

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, ContactToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('contact/edit', {title: 'Edit Contact', contact: ContactToEdit})
        }
    })
})

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts')
        }
    })
})

router.post('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts')
        }
    })
})

module.exports = router;