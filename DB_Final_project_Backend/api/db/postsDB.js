const pool = require('./index');

let post = {};


post.all = (id) => {

    return new Promise ((resolve, reject) => {
        pool.query('SET @user_ID = ? ; call getPost(@user_ID)',id,(error,rows) => {
            if(error){
                console.log(error.message)
                return reject(error);
            } 
                return resolve(rows[1]); 
        });
    }); 
};

post.addPost = (UID,PO_desc,PO_url) => {
    return new Promise ((resolve, reject) => {
        pool.query(' call addPosts(?,?,?)',[UID,PO_desc,PO_url],(error,rows) => {
            if(error){
                console.log(error.message)
                return reject(error);
            } 
                return resolve({message : 'Posts Add'}); 
        });
    });
};

module.exports = post;