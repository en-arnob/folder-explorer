const mongoose = require('mongoose')
require('dotenv').config()

module.exports = connect = async () => {
    try{
        const response = await mongoose.connect(process.env.DBURL)
        console.log('Database connection succeed')
    } catch(error){
        console.log(error)
    }

}
    

