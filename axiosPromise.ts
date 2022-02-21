// const angelMowersPromise = new Promise<string>((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Finished")
//     },10000)
//     reject("Haven't Finished")
// })
// const myPaymentPromise = new Promise<Record<string, number | string>>((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             amount: 1000,
//             note: 'Thank You',
//         })
//     }, 100000)
//     reject({
//         amount: 0,
//         note: 'Sorry Lawn was not properly Mowed',
//     })
// })
// angelMowersPromise
//     .then(() => myPaymentPromise.then(res => console.log(res)))
//     .catch(error => console.log(error))
// const axios = require('axios')
// // const fetch = require('node-fetch')
// const baseApi = 'https://jsonplaceholder.typicode.com/users'
// const getId = async() => {
//     const res = await axios.get(baseApi)
//     return res

import { use } from "vue/types/umd"

// }
class User{
    name : string
    greeting : Promise<string>
    constructor(_name : string){
        this.name = _name,
        this.greeting = new Promise((response) =>{
            setTimeout(()=>{
                response(`My id is ${_name}`)
            },1000)
        })
    }
    children : User[] = []
}
const user1 = new User("u1")
const user1_1 = new User("u1_1")
const user1_2 = new User("u1_2")
const user1_2_1 = new User("u1_2_1")
const user1_2_1_1 = new User("u1_2_1_1")
user1.children.push(user1_1)
user1.children.push(user1_2)
user1_2.children.push(user1_2_1)
user1_2_1.children.push(user1_2_1_1)
const todoFunction =async (user:User) : Promise<string> => {
    const greet = await user.greeting.then(data => data);
    const listPromise = user.children.map(e => {
        return todoFunction(e)
    });
    const info = await Promise.all(listPromise);
    let child: User[] = [];
    info.forEach(e => child.push(JSON.parse(e)));
    const result = {
        name: user.name,
        greet: greet,
        children: child
    }
    return JSON.stringify(result, null, 2);
}

todoFunction(user1).then(result =>{
    console.log(result)
})