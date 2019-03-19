const express = require('express');
const router = express.Router();
const db = require('../models/user')
const jwt = require('jsonwebtoken');
User = require('../db')

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}


router.get('/', (req,res)=>{
    res.send("hello api")
})
router.post('/register', (req, res) => {
    let userData = req.body.email
    console.log("userData")
    console.log(userData)
    let user = new User(userData)
    User.save(user, (err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        // let payload = {subject: registeredUser._id}
        // let token = jwt.sign(payload, 'secretKey')
        // res.status(200).send({token})
      }
    })
  })
  router.post('/login', (req, res) => {
    console.log(req.body)
          let payload = {subject: req.body.email}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        })
   
        
router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1"
    },
    {
      "_id": "2"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

module.exports =router;