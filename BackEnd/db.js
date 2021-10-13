

const mongoose=require('mongoose')


const reportScema= new mongoose.Schema({
    
    name:'string',
    surname:'string',
    age:'string',
    height:'string',
    weight:'string',
    blood_group:'string',
    blood_sugar_level:'string',
    blood_pressure:'string'
    
})

module.exports=mongoose.model('report',reportScema)