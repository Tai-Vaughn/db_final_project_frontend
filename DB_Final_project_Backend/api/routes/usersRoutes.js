const express = require('express');
const multer = require('multer');
const router = express.Router();
const userDB = require('../db/usersDB');

const storage = multer.diskStorage({
    destination: (req,file,cb ) => {
        cb(null,'./uploads/' );
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})

const fileFilter = (req,file,cb) => {
    if ( file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
        cb(null,true);
    }   else {
        cb (null,false);
    }
} 

const upload = multer({storage: storage});

router.get('/', async(req,res,next) => {

     try{
        let results = await userDB.all();
        res.json(results);
    } catch(e){
        res.sendStatus(500); 
    }
});

router.get('/:id', async(req,res,next) => { 

    try{
        let results = await userDB.one(req.params.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500); 
    }
}); 

router.get('/:id/friends', async(req,res,next) => { 

    try{
        let results = await userDB.getfriends(req.params.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500); 
    }
}); 
 
router.get('/:id/pics', async(req,res,next) => {

    try{
        let results = await userDB.pictures(req.params.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500); 
    }
});

router.post('/', upload.single('file'),async(req,res,next) => {
    try{ 
        let imgpath = "http://localhost:4000/"+req.file.path;
        let user = req.body;
        let results = await userDB.change(user.UID,user.Fname,user.Lname,user.DOB,user.Uname,user.email,user.password,imgpath);
        res.json(results);
    } catch(e){
        console.log(e.message)
        res.sendStatus(500);
    }
});

router.post('/change', async(req,res,next) => {
    try{ 
        let user = req.body;
        let results = await userDB.change(user.UID,user.Fname,user.Lname,user.DOB,user.Uname,user.email,user.password,user.ImgUrl);
        res.json(results);
    } catch(e){
        console.log(e.message) 
        res.sendStatus(500) ;
    }
});

router.post('/login', async(req,res,next) => {
    try{
        let user = req.body; 
        let results = await userDB.session(user.Uname,user.password);
        res.json(results);
    } catch(e){
        res.sendStatus(500)
    }
});

router.post('/addfriend', async(req,res,next) => { 
    try{
        let user = req.body; 
        let results = await userDB.addfriend(user.UID,user.FID,user.type );
        res.json(results);
    } catch(e){
        res.sendStatus(500)
    }
});

router.put('/', upload.single('profilePicture'),async(req,res,next) => {
    try{
        let user = req.body; 
        console.log(req.file)
        let results = await userDB.change(user.UID,user.Fname,user.Lname,user.DOB,user.Uname,user.email,user.password,req.file.path);
        res.json(results);
    } catch(e){ 
        res.sendStatus(500); 
    }
});

router.delete('/:id', async(req,res,next) => {

    try{
        let results = await userDB.delete(req.params.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500); 
    }
});




module.exports = router