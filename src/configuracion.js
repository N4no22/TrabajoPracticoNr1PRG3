const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set('strictQuery',true)
    try {
        await mongoose.connect("mongodb://localhost:27017/PELICULAS", { });
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error en la conexión a MongoDB:', error);
    }
};

module.exports = dbconnect;
