// models/employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true, // First name is required
    },
    last_name: {
        type: String,
        required: true, // Last name is required
    },
    email: {
        type: String,
        required: true, // Email is required
        unique: true,   // Email must be unique
        match: /.+\@.+\..+/ // Regex to validate email format
    },
    position: {
        type: String,
        required: true, // Position is required
    },
    salary: {
        type: Number,
        required: true, // Salary is required
        min: 0,         // Minimum salary must be zero
    },
    date_of_joining: {
        type: Date,
        required: true, // Date of joining is required
    },
    department: {
        type: String,
        required: true, // Department is required
    },
});

// Create a model from the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
