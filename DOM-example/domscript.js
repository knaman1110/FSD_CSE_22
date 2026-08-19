function addParagraph() {
    const para = document.createElement("p");
    para.innerText = "This is a new paragraph";
    para.style.color = "red";
    const el = document.getElementById("para");
    el.appendChild(para);
}
function removePara(){
    const el=document.querySelector("p");
    const parent=document.getElementById("para");
    parent.removeChild(el);
}
function removeAllPara(){
    const el=document.querySelectorAll("p");
    const parent=document.getElementById("para");
    parent.remove(el);
}