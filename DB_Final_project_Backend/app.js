const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRoute = require('./api/routes/usersRoutes')
const postsRoute = require('./api/routes/postsRoutes')
const photoRoute = require('./api/routes/photoRoutes')
const app = express();
 
app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.json());
app.use(cors());

app.use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header', 
    'Origin, X-Requested, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 
        'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
}); 
 
app.use('/users', userRoute);
app.use('/posts', postsRoute);
app.use('/photo', photoRoute)

app.use((req,res,next)=>{
    const error = new Error();
    error.status(404);
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
     });
});

module.exports = app;
