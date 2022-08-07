const { PORT }=require("./config/config");

const express= require("express");

const server= express();

server.listen(PORT, () => {

    console.log(`Sever is runnig at ${ PORT } `);

});