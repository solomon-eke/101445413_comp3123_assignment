const express = require("express");
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const PORT = 3003;

const employeeRoute = require("./routes/employees");
const usersRoute = require("./routes/users");

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/user/signup',  usersRoute);


app.use('/api/v1/emp/employees ', employeeRoute);

mongoose.set("strictQuery", false)

mongoose.connect('mongodb+srv://mongo:mongo@mycluster.haof1.mongodb.net/ASS1?retryWrites=true&w=majority&appName=MyCluster')
.then(() => {
    console.log('connected to mongoDB');
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })

}).catch((error) =>{

    console.log(error);

})
