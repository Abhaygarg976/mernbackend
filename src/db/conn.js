const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/youtubeRegistration"
).then(()=>
    console.log("connection succesfull...")
) 
.catch(()=>
    console.log(" no connection")
);