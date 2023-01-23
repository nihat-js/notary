const  mongoose  = require("mongoose")
const { Schema} = require('mongoose')



const schema = new Schema({
  title: {type: String, required: true} ,
  subTitle: {type: String, required: true} ,
  image : {type: String, required: true}
})

const area = mongoose.model('areas', schema)


module.exports = {area  }