function Book(props){
    const image=React.createElement("img",
        {src:"https://m.media-amazon.com/images/I/61Frt6YB7qL.jpg",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",
        {style:{color:"red"}},"Title:"+props.title);
    const price=React.createElement("h2",
        {style:{color:"blue"}},"Price:"+props.price);
    const btn=React.createElement("button",
        {style:{color:"Green"}},"AddToCart");
    const div=React.createElement("div",{className:"Book"},
        [image,title,price,btn]);

    return div;
}
export default Book;