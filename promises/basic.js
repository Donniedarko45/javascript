function promisifiedMyOwnSetTimeout(duration){
    const pr = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return pr;
}

const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeout is done")
})

