const express = require('express');
const mongoose = require('mongoose')
const app = express();
const User = require('../models/users')
const router = express.Router();



app.use(express.json())
app.use(express.urlencoded({extended: false}))




// Create a user

//http://localhost:api/v1/user/signup

router.post('/', async (req, res) =>{

    //console.log(req.body);
    //res.send(req.body);

    try {

        const user = await User.create(req.body)
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }

})



// Get all the user

//http://localhost:api/v1/user/allusers
router.get('/', async (req, res) => {
   try {

    const users =  await User.find({});
    res.status(200).json(users);
    
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
    
   }

})


// Get a user with a specific id

//http://localhost:api/v1/user/id
router.get('/:id', async (req, res) => {


    try {

        const {id} = req.params;
 
     const user =  await User.findById(id);
     res.status(200).json(user);
     
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message})
     
    }
 
 })



 // Update a product

//http://localhost:api/v1/user/id

router.put('/:id', async (req, res) =>{
    try {
        const {id} = req.params;
 
     const user =  await User.findByIdAndUpdate(id, req.body);

     // we can not find any product in the database
     if(!user){
        return res.status(404).json({message: `cannot find any product with the ID ${id}`})

     }

     const updatedNote = await User.findById(id);

     res.status(200).json(updatedNote);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }
 })


 // Delete a product 

 router.delete('/:id', async (req, res) => {
    try {

        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user){
            return res.status(404).json({message: `cannot find any product with the ID ${id}`})
    
         }
         

         res.status(200).json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }
 })
 






module.exports = router;
