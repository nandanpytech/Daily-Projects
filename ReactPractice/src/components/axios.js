import axios from 'axios'

export const datafetch=async()=>{
 axios.get("https://jsonplaceholder.typicode.com/todos").then(res=> res.data)
}