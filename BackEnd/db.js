

const mongoose=require('mongoose')


const reportScema= new mongoose.Schema({
    id:'string',
    name:'string',
    surname:'string'
})

module.exports=mongoose.model('report',reportScema)