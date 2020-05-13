const express = require('express');
const multer = require('multer');
const router = express.Router();
const postDB = require('../db/postsDB');

const storage = multer.diskStorage({
    destination: (req,file,cb ) => {
        cb(null,'./uploads/' );
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage});

module.exports = router

router.get('/:id', async(req,res,next) => {

    try{
       let results = await postDB.all(req.params.id);
       res.json(results);
   } catch(e){
       console.log(e)
       res.sendStatus(500); 
   }
});

router.post('/',upload.single('file'),async(req,res,next) => {

    try{
        let imgpath = "http://localhost:4000/"+req.file.path;
        let results = await postDB.addPost(req.body.UID,req.body.PO_desc,imgpath);
        res.json(results);
   } catch(e){
       console.log(e)
       res.sendStatus(500); 
   }
});