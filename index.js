const { PORT }=require("./config/config");

const {db}= require("./config/database");

const express= require("express");

const server= express();

db.authenticate().then(() => {

 console.log("Database connected");

 server.listen(PORT, () => {

    console.log(`Sever is runnig at ${ PORT } `);

});

});