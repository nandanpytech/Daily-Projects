//To set attribute to element
const a=document.getElementById("hi")
const attr=document.createAttribute("class")
attr.value="shape"
a.setAttributeNode(attr)

//To create element
const b=document.getElementById("hi2")
const ele=document.createElement("h2")
ele.innerText="Hi My name is Rajesh"
b.appendChild(ele)

//Onblur
function Fun(){
    console.log("hi");
}

//TO get clienHeight and clientWidth
const c=document.querySelector(".height")
console.log(c.clientLeft);
// console.log(c.clientHeight);
// console.log(c.clientWidth)
// console.log(c.offsetHeight );
// console.log(c.offsetWidth )