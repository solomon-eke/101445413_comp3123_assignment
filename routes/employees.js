const express = require('express');
const mongoose = require('mongoose')
const app = express();
const User = require('../models/employees');
const Employee = require('../models/employees');
const router = express.Router();



app.use(express.json())
app.use(express.urlencoded({extended: false}))




// Create a user

//http://localhost:/api/v1/emp/employees 

router.post('/', async (req, res) =>{

    //console.log(req.body);
    //res.send(req.body);

    try {

        const employee = await Employee.create(req.body)
        res.status(200).json(employee);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }

})



// Get all the products

//http://localhost:/api/v1/emp/employees 
router.get('/', async (req, res) => {
   try {

    const employee =  await Employee.find({});
    res.status(200).json(employee);
    
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
    
   }

})


// Get a product with a specific id

//http://localhost:api/v1/user/id
router.get('/:id', async (req, res) => {


    try {

        const {id} = req.params;
 
     const user =  await Employee.findById(id);
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
 
     const product =  await Product.findByIdAndUpdate(id, req.body);

     // we can not find any product in the database
     if(!product){
        return res.status(404).json({message: `cannot find any product with the ID ${id}`})

     }

     const updatedProduct = await Employee.findById(id);

     res.status(200).json(updatedProduct);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }
 })


 // Delete a product 

 router.delete('/:id', async (req, res) => {
    try {

        const {id} = req.params;
        const user = await Employee.findByIdAndDelete(id);

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
