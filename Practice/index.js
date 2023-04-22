console.log("hi");
// //Infinite currying
// function infinite(a){
//     return function(b){
//         if(b) return infinite(a+b)
//         return a;
//     }

// }
// var handle=infinite(2)(6)();
// console.log(handle)

// //dynamic property to object
// var a={
//     [property]:name
// }
// console.log(a.firstname)


// {
// //whats the output
// var obj={
//     a:10,                               //this 'a' is replaced by last a value.
//     b:20,
//     a:30
// }
// console.log(obj)

// }

// {
// //whats the output
// const a={}
// const b={key:"b"}
// const c={key:"c"}

// a[b]=123;              //a["[object object]"]=123            When we try to convert object to string forcefully it return [object object]
// a[c]=456                //a["[object object]"]=456

// console.log(a[b])         //456
// }

// {//whats the output
// const a=[..."Nandan"]   //it spread the all character into array
// }


// {
// const a=[1,23,5]
// const b=[...a]          //it is just array
// const c={...a}         //it is object with key and value pair
// console.log(b)
// }


// {
//     const settings={
//         username:"nandan",
//         age:21,
//         level:19
//     }
//     const data=JSON.stringify(settings,["age","level"])
//     console.log(data)                       //It only strigfy the age, level and ignore the username and delet it from data.
// }

// {

//     const object={
//         radius:10,
//         perimeter:()=> 2*Math.PI*this.radius,
//         diameter:function(){
//             return this.radius*2;
//         }
//     }
    
//     console.log(object.diameter())  //20
//     console.log(object.perimeter()) //Nan
// }

// {
// //destructure
// let user={
//     name:"Nandan",
//     age:21
// }
// // const name="Rohan" 

// const {name}=user       //this not gonn be work here.

// const {name:myname}=user        //We can give our own naming to variable.
// }

// {
//     function getItems(fruitlist,favoritefruit,...args){
//         return [...fruitlist,...args,favoritefruit]
//     }
//     console.log(getItems(["grapes","banana"],"apple","lemon"))  
//     //spread operator : It can be enywhere and it spread the array into series of items
//     //rest parameter  : it should be in last and it combine the series of items into one array
    
// }

// {
//     let person={name:"Nandan"}
//     const a=[person]
//     person=null            // it doesn't effect on the a
//     person.name=null       //it definitly effect on a
//     console.log(a)
// }



// //this keyword

// {
//     var a={
//         name:"nandna",
//         getdetails(){
//             console.log(this.name)
//         }
//     }
//     console.log(a.getdetails())         //nandan and undefine bcoz no return object
// }

// {
//     var a={
//         name:"bharath",
//         getdetails:()=>{
//             console.log(this.name)             //undefine becoz 'this' in arrow function consider reference from parent component and try to check in their component.
//         }
//     }
//     a.getdetails()
// }

// {
//     var a={
//         names:"bharath",
//        getdetails(){
//         const fetchname=()=>{
//             console.log(this.names)                     //it takes reference from above function and searching this with that reference.
//         }
//         fetchname()
//        }
//     }
//     a.getdetails()
// }

// {
//     class A{
//         constructor(name) {
//             this.names=name;
//         }
//         getname(){
//             console.log(this.names)
//         }
//     }

//     var obj1=new A("Bharath")
//     obj1.getname()
// }

// {
//     function details(){
//         return{
//             name:"rohan",
//             ref:this                //it referes the window but window don't have any variable with name;
//         }
//     }

//     const a=details()
//     console.log(a.ref.name)
// }

// {
//     //fixing above error..
//     function details(){
//         return{
//             name:"rohan",
//             ref(){
//                 return this
//             }               //it referes the window but window don't have any variable with name;
//         }
//     }

//     const a=details()
//     console.log(a.ref().name)
// }

// {
//     const user={
//         name:"bharath",
//         logname(){
//             console.log(this.name)
//         }
//     }

//    // setTimeout(user.logname(),1000)        ///it gives bharath
//     setTimeout(user.logname,10000)           //it just copied the function
// }

// {

    
//     function read(){
//         this.a=prompt("a",0)-0
//         this.b=prompt("b",0)-0
//     }
//     function sum(){
//         console.log(this.a+this.b)
//     }
//     read()
//     sum()

// }

// {
//     var calc={
//         total:0,

//         add(num){
//             this.total+=num
//             return this
//         },
//         mul(num){
//             this.total*=num
//             return this
//         },
//         sub(num){
//             this.total-=num
//             return this
//         }
        
//     }

//     const res=calc.add(10).mul(5).sub(10).add(6)
//     console.log(res.total)

// }


// {
// //synchronous vs asynchronous
// console.log("start")
// console.log("finish")

// //vs
// console.log("start")
// setTimeout(()=>{
//     console.log("hi")
// },1000)
// console.log("finish")
// }

// {
// //async example and callback hell example

// console.log("start")

// function action(username,cb){
//     setTimeout(()=>{
//         cb(`hi ${username}`)
//     })
// }
// function likevideo(username,cb){
//     setTimeout(()=>{
//         cb(` ${username} liked it`)
//     })
// }

// const res=action("Roadside coder",function(msg){
//     console.log(msg)
//     likevideo("nandan",function(msg){
//             console.log(msg)
//         })
//         //we can call multiple callback here.
// })

// console.log("stop")
// }

// {
// //promise
// const sub=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if(true){
//             res("resolved")
//         }else{
//             rej(new Error("error"))
//         }
//     },1000)
    
// })
// sub.then((res)=>console.log(res))
// sub.catch((err)=>console.log(err))
// }


// {
// //promise chaining

// function firstactioin(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` hi ${username}`)
//         })
//     })
    
// }
// function likevideo(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` ${username} liked it`)
//         })
//     })
    
// }

// firstactioin("nandan").then((res)=>{
//     return likevideo("Nandan")
// })
// .then((res)=>console.log(res))

// }


// {

// //promise combinators

// function firstactioin(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` hi ${username}`)
//         })
//     })
    
// }
// function likevideo(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` ${username} liked it`)
//         })
//     })
    
// }

// let a=Promise.all([
// firstactioin("nandna"),
// likevideo("Nandan")
// ])
// a.then((res)=>console.log(res))

// }

// {
// //promise race
// function firstactioin(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` hi ${username}`)
//         },1000)
//     })
    
// }
// function likevideo(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` ${username} liked it`)
//         })
//     },500)
    
// }

// let a=Promise.race([
// firstactioin("nandna"),
// likevideo("Nandan")
// ])
// a.then((res)=>console.log(res))

// }



// {
// //Async and await

// function firstactioin(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` hi ${username}`)
//         },1000)
//     })
    
// }
// function likevideo(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(` ${username} liked it`)
//         })
//     },500)
    
// }

// const nandan=async()=>{
//     const b= firstactioin("nandan")
//     console.log(b)                  //return promise itself
//     const a=await firstactioin("nandan")
//     console.log(a)                      //he gives "hi nandan"
// }
// nandan()
// }

// {
//   //what's the output:
//   console.log("start")
//   const a=new Promise((res,rej)=>{
//       console.log("1")                //it executes after logging "start" bcoz javascript always try to search async operation inside Promise.
//       res("hi")
//   })
//   a.then((res)=>console.log(res))
//   console.log("end")
// }