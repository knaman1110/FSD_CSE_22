function register(){
    waitfordelay(10000);
    console.log("Register here");
}

function login(){
    waitfordelay(4000);
    console.log("Login here");
}

function getData(){
    waitfordelay(5000);
    console.log("fetch data");
}

function displayData(){
    waitfordelay(6000);
    console.log("display data");
}

function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
        
    }
}

register();
login();
getData();
displayData();

console.log("Call Another Application");
