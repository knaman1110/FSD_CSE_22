function register(cb){
    setTimeout(()=>{
        console.log("Register here")
        cb();//cb = callback
     },10000)
}

function login(cb){
    setTimeout(()=>{
        console.log("Login here")
        cb();
    },5000)
}

function getData(cb){
    setTimeout(()=>{
        console.log("fetch data")
        cb();
    },4000)
}

function displayData(){
    setTimeout(()=>{
        console.log("display data");
         },6000)
}
// Callback Hell Problem
register(
    ()=>{
         login(
            ()=>{
                getData(
                    ()=>{
                         displayData();
                    })
            });
});


console.log("Call Another Application");
