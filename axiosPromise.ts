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
const axios = require('axios')
// const fetch = require('node-fetch')
const baseApi = 'https://reqres.in/api/users?page=1'
const userApi = 'https://reqres.in/api/user'

interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}
const fetchAllEmployees = async (url: string): Promise<Employee[]> => {
    const response = await axios.get(url)
    const { data } = await response
    return data
}

const fetchEmployee = async (url: string, id: number): Promise<Record<string, string>> => {
    const response = await axios.get(`${url}/${id}`)
    const { data } = await response
    return data
}
const generateEmail = (name: string): string => {
    return `${name.split(' ').join('.')}@company.com`
}

const runAsyncFunctions = async () => {
    try {
        const employees = await fetchAllEmployees(baseApi)
        Promise.all(
            employees.map(async user => {
                const userName = await fetchEmployee(userApi, user.id)
                const emails = generateEmail(userName.name)
            })
        ).then((emails)=>console.log(emails))
    } catch (error) {
        console.log(error)
    }
}
runAsyncFunctions()