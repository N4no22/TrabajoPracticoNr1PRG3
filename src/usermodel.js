const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    Titulo:{
        type:String
    },
    Imagen:{
        type:String
    },
    Director:{
        types:String
    },
    Año:{
        type:Number
    },
    Genero:{
        type:String
    },
    Sinopsis: {
        type: String, 
    }


},{
    timestamps:true,
    versionKey:false
}
)
const ModelUser= mongoose.model("user", userSchema)
module.exports=ModelUser;