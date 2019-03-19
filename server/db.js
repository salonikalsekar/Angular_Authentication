path = require('path')
const db = require('./models/user')
// const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json' );

const fs = require('fs')
module.exports = class Product{
    constructor(user){
        console.log(user)
        this.userData = user;
    }
    
    static save(user){
        console.log("user")
        console.log(user)

       return db.execute('INSERT INTO users (email) VALUES (?)', [user.userData])
    };

    // static fetchAll(){
    //     return db.execute('SELECT * FROM useraccess')
    // }
    // static fetchByID(user){
    //     return db.execute('SELECT * FROM useraccess where user_email=?', [user]);

    // }
}