const express = require('express');
const multer = require('multer');
const router = express.Router();
const photoDB = require('../db/photoDB');

const storage = multer.diskStorage({
    destination: (req,file,cb ) => {
        cb(null,'./uploads/' );
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage});

router.get('/:id/pics', async(req,res,next) => {

    try{
        let results = await photoDB.pictures(req.params.id);
        res.json(results);
    } catch(e){
        res.sendStatus(500); 
    }
     
});
 
router.post('/pics', upload.single('file') ,async(req,res,next) => {

    try{
        let response = {};
        let imgpath = "http://localhost:4000/"+req.file.path;
        let results = await photoDB.Addpictures(req.body.UID,req.body.desc,imgpath);
        response.Pic_id = req.body.UID;
        response.Pic_url = imgpath
        response.Pic_desc = req.body.desc
        res.json(response);
    } catch(e){
        console.log(e)
        res.sendStatus(500); 
    }
     
});


module.exports = router