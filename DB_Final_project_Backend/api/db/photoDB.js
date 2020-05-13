const pool = require('./index');

let photo = {};

photo.pictures = (id)=> {
    return new Promise((resolve,reject)=>{
        pool.query('call getPictures(?)',id,(error,rows)=>{
            if(error){
                console.log(error.message);
                return reject(error);
            } 
                return resolve(rows[0]);
        });

    });
};


photo.Addpictures = (id,desc,url)=> {
    return new Promise((resolve,reject)=>{
        pool.query('call addPictures(?,?,?)',[id,desc,url],(error,rows)=>{
            if(error){
                console.log(error.message);
                return reject(error);
            } 
                return resolve({message:"Added!"});
        });

    });
};
module.exports = photo;