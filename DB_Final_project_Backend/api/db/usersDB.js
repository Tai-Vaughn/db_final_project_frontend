const pool = require('./index');

let user = {};

user.all = () => {

    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM User`,(error,rows) => {
            if(error){
                return reject(error);
            } 
                return resolve(rows); 
        });
    });
};

user.one = (id) => {

    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM User where UID = ?`,id,(error,rows) => {
            if(error){
                return reject(error);
            } 
                return resolve(rows[0]); 
        });
    });
};

user.delete = (id) => {

    return new Promise ((resolve, reject) => {
        pool.query(`DELETE FROM User where UID = ?`,id,(error,rows) => {
            if(error){
                return reject(error);
            } 
                return resolve('Delete Successfully'); 
        });
    });
};

user.change = (id,fname,lname,dob,username,email,p_word,imgUrl) => {
    return new Promise ((resolve, reject) => {
        var sql = 'SET @user_ID = ? ;SET @first_name = ?; SET @last_name = ?;SET @dob = ?;SET @username = ?;SET @email = ?;SET @p_word = ?; SET @imgUrl = ?;\
        call UseAddOrEdit(@user_ID,@first_name,@last_name,@dob,@username,@email,@p_word, @imgUrl);'
        pool.query(sql,[parseInt(id),fname,lname,dob,username,email,p_word,imgUrl],(error,rows) => {
            if(error){
                console.log(error.message);
                return reject(error);
            } 
                rows.forEach(element => {
                    if (element.constructor == Array){
                        resolve('Inserted UserID is: '+element[0].user_ID)
                    }
                    
                });
                return resolve(rows); 
        });
    });
};

user.getfriends = (id)=> {
    return new Promise((resolve,reject)=>{
        pool.query('select * from User where UID in (select FID from Added where UID = ?)',id,(error,rows)=>{
            if(error){
                console.log(error.message);
                return reject(error);
            } 
                return resolve(rows);
        });

    });
};

user.session = (username , password) => {

    return new Promise ((resolve, reject) => {
        pool.query(`SELECT * FROM User where  Uname = ? AND password = ? `,[username,password],(error,rows) => {
            if(error || (typeof rows[0] === "undefined")){
                return reject(error);
            }
            console.log(typeof rows[0])
                return resolve(rows[0]); 
        });
    });
} 



user.addfriend  = (UID , FID , type) => {

    return new Promise ((resolve, reject) => {
        pool.query(`insert into Added (UID,FID,Type) values (?,?,?)`,[UID , FID ,type],(error,rows) => {
            if(error){ 
                console.log(error.message)
                return reject(error);
            }
            console.log(typeof rows[0])
                return resolve({message : "You made a friend"}); 
        });
    });
} 
module.exports = user;