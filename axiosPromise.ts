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
    id : string
    greeting : Promise<string>
    constructor(_id : string){
        this.id = _id,
        this.greeting = new Promise((response) =>{
            setTimeout(()=>{
                response(`My id is ${_id}`)
            },1000)
        })
    }
    children : User[] = []
}
const user1 = new User("u1")
const user1_1 = new User("u1_1")
const user1_2 = new User("u1_2")
user1.children.push(user1_1)
user1.children.push(user1_2)

const todoFunction =async (user:User) : Promise<string> => {
    const greeting = await user.greeting
    const idUser = await Promise.all(user.children.map(async(child)=>{
    const childUser = await child.children
        return {
            id : child.id,
            greeting : child.greeting
        }
    }))
    return JSON.stringify ({
        id : idUser,
        greeting : greeting,    
    })
}

todoFunction(user1).then(result =>{
    console.log(result)
})