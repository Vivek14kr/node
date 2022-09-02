//different streams

//1. Writable - write data
//2. Readable - read data
//3. Duplex - bth write and read data
//4. Transform - update data


const {createReadStream} = require("fs");

const stream = createReadStream("./content/big.txt", {
    highWaterMark:90000,
     encoding:"utf-8"});

stream.on("data", (result)=>{
    console.log(result)
})
stream.on((error)=>console.log(error))