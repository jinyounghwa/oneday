// 비동기 작업 수행

let fs = require('fs');

fs.readFile("config.json", function(err, contents){
    if(err){
        throw err;
    }

    doSomethingWith(contents);
    console.log("Done");
})