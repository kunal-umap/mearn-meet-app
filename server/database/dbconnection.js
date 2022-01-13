const mongoose = require('mongoose');

const connectDb = async () =>{
    try {
        // setting mongodb connection
        const connnectmongo = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected ${ connnectmongo.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;