import Book from "./Book.js";
const bookdata=[
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"NodeJS",price:465},
    {image:"",title:"ExpressJS",price:465},
    {image:"",title:"NodeJS",price:665},
    {image:"",title:"ExpressJS",price:755},
];

function App(){
    const bookstore = bookdata.map((b)=>{
        return Book(b);
    })
    return React.createElement("div",{className:"bookstore"},[...bookstore]);
}

export default App;