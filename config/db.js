const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

//Conectar db

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            //useNewUrlParse: true,
            //useUnifiedTopology: true,
            //useFindAndModify: false
        })
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); //Detengo app
    }
}

module.exports = conectarDB