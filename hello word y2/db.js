// const mongoose = require('mongoose');
// const mongoURL = 'mongodb://localhost:27017/UGdatabase';

// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('connected',()=>{
//     console.log('coneted to mongoDB server ');
    
// });
// db.on('error',()=>{
//     console.log('error  to mongoDB server ');
    
// });
//            db.on('disconnected',()=>{
//     console.log('c,disoneted to mongoDB server ');
    
// }) ;    
// module.exports =db;                                    

    // this is line of code conneded to mongodb
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/UGdatabase';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server this is db file ');
});

db.on('error', (err) => {
    console.log('Error connecting to MongoDB server:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;