var fs = require('fs');
// const {readFile} = require("path")
// console.log(fs)

// Ascynchronous way of reading and writing a file
// fs.readFile('read.txt', 'utf-8', function(err,data){
//     if(data) fs.writeFileSync('write.txt',data);
//     else{
//         console.log(data)
//     }
    
// });
// console.log(read);
// fs.writeFileSync('write.txt',read);

/*synchronous way of reading a file 
var read = fs.readFile('read.txt','utf8');
*/ 


//  creating and removing directories
// synchronous:
// fs.mkdirSync('Stuffs');
// deleting directory:
// fs.rmdirSync('Stuffs');
// Async:
// fs.mkdir('stuff', function(){
//     fs.readFile('read.txt','utf8', function(_err, data){
//         // fs.writeFile('./stuff/write.txt', data);
//         if(data) fs.writeFileSync('./stuff/write.txt',data);
//     })
// })

// deleting directory:

fs.unlink('./stuff/write.txt', function(){
    fs.rmdirSync('stuff')
})
