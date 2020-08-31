const express = require('express');
const config = require("config");
const mongoose = require('mongoose');
const app = express();

app.get()

const PORT = config.get('port')|| 3000;

async function start() {
    try {
        await mongoose.connect(config.get('mongo'), {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true
        });

        app.listen(PORT, () => console.log('This app has been started on port ${PORT}'));

    }catch(e){
        console.log('Error on server', e.message);
        process.exit(1)

    }
}

start();