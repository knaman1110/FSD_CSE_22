function register(){
    setTimeout(()=>{
        console.log("Register here");
     },10000)
}

function login(){
    setTimeout(()=>{
        console.log("Login here");
    },5000)
}

function getData(){
    setTimeout(()=>{
        console.log("fetch data");
    },4000)
}

function displayData(){
    setTimeout(()=>{
        console.log("display data");
         },6000)
}

register();
login();
getData();
displayData();

console.log("Call Another Application");
