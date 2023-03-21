const selector=document.querySelector(".selector")
const country=document.querySelectorAll(".country")
const main=document.querySelector(".main")
const search=document.getElementById("search")
const countries=document.querySelector(".countries")
country.forEach(element => {
    element.addEventListener("click",(element)=>{
        selectedcountry(element)
    })
});

function selectedcountry(ele){
    selector.textContent=ele.target.innerText
}

function selectcountry(ele){
    selector.textContent=ele.innerHTML
}

selector.addEventListener("click",()=>{
    main.classList.toggle("main-toggle")
})

search.addEventListener("input",showoption)
const array=[
    "America",
   " India",
    "Japan",
    "Uganda",
    "Austria",
    "Nepal",
    "Korea",
    "China",
    "Africa",
    "bhutan",
    "Russia",
    "NewYork",
    "Singapore",
    "Europe",
    "Belzium"

]
function showoption(){
    const hold=[]
    var search_value=search.value
    for (const iterator of array) {
        if(iterator.includes(search_value)){
            hold.push(iterator)
        }
    }
    console.log(hold);
    if(hold.length!=0){
        countries.innerHTML=""
        hold.map((ele)=>{
            console.log("hi");
            countries.innerHTML+=`
            <li class="country" onclick="selectcountry(this)">${ele}</li>
            `
        })
    }
   
    
}