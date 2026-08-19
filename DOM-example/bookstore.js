const bookdata = [
    {
        image: "https://bpbonline.com/cdn/shop/products/9789389328721_b41044d7-4fe5-49b6-933b-87e3392c8fc2.jpg?v=1755670104",
        price: 345,
    },
    {
        image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        price: 400,
    },
    {
        image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        price: 500,
    },
    {
        image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        price: 600,
    }
];

function Book(book) {

    const div = document.createElement("div");
    div.setAttribute("class", "book");

    const image = document.createElement("img");
    image.setAttribute("src", book.image);
    image.setAttribute("height", "200px");
    image.setAttribute("width", "200px");

    const h2 = document.createElement("h2");
    h2.innerText = "Price: " + book.price + "/-";
    h2.style.color = "green";

    const bt = document.createElement("button");
    bt.innerText = "Add to Cart";

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);

    return div;
}

const parent = document.getElementById("book");

bookdata.forEach((book) => {
    parent.appendChild(Book(book));
});