//Type
type NS = string | number //union type

function getTuple(a : NS, b : NS) : [NS,NS]{
    return [ a,b ]
}

let stringArray = getTuple( 'hello', 'world')

let numberArray = getTuple(1.23, 2.56)

let mixedArray = getTuple(1.23, 'world')


//Tuple có thể chứa 2 hoặc nhiều giá trị có các kiểu dữ liệu khác nhau
let employees: [number, string] = [1, 'Nguyen Anh Duc']
let employees1: [number, string, boolean] = [1,'CAD', true] // phai dung kieu du lieu theo thu tu
let employeesArray: [number,string][] = [[1,'cad'], [2,'cad1']] //tuple array
employees.push(2,'Nguyen Anh Duc') //them phan tu vao tuple
console.log(employees)
employees[1] = employees[1].concat('cad')
console.log(employees)

//Union cho phép sử dụng nhiều kiểu dữ liệu cho 1 biến
// let code: number | string
function displayType(code1: number | string){
    if(typeof(code1) === "number"){
        console.log("Code is number")
    }else if(typeof(code1) === "string"){
        console.log("Code is string")
    }else{
        console.log("Code is type diffirence")
    }
}
displayType(123)
displayType("sadjkm")
displayType(123)

//Any sử dụng khi ta không biết kiểu dữ liệu là gì. Thường được sử dụng khi chúng ta gọi 1 webservice bên ngoài hoặc dịch vụ của nhà phát triển thứ 3
let something:any = "hello world"
something = 23
something = true
something = 23.2

//Void được sử dụng để thông báo function không trả về kiểu dữ liệu gì
function sayHI() : void{
    console.log("Void")
}
// sayHI()
let speech: void = sayHI()
console.log(speech) // undefined

//Never là kiểu giá trị đó sẽ không xảy ra. Được sử dụng khi chắc chắn 1 điều gì đó không thể xảy ra
//Optional and default parameter (?) tức là khai báo tham số có hoặc không
console.log("Generics")
//Generics là kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng
const last = <T>(arr : T[]) :T =>{ //const last = (arr : Array<any>)
    return arr[arr.length -1]
}
const l = last([1,2,3])
const l1 = last<string>(['a','b','c'])


const makeFullName = <T extends {firstName : string, lastName : string}>(
    obj : T
    ) => {
    return{
        ...obj,
        fullName : obj.firstName + ' ' + obj.lastName
    }
}
const v = makeFullName({firstName :'Nguyen', lastName : 'Duc', age : 15})
console.log(v)

//interface



interface SearchFunction{
    (source : string, subString : string) : boolean
}
let search : SearchFunction 
search = function(source : string, subString : string){
    let result = source.search(subString)
    return result > -1
}
console.log(search("Nguyen Anh Duc", "Nguyen")) //true

//Class
class Collection<Type>{
    items : Array<Type> = []
    add(item : Type){
        this.items.push(item)
    }
    remove(item : Type){
        const index = this.items.findIndex(i => i === item)
        this.items.splice(index, 1)
        return this.items
    }
}
const myCollection = new Collection()
myCollection.add(1)
console.log(myCollection)
myCollection.add(5)
console.log(myCollection)
myCollection.remove(1)
console.log(myCollection)
myCollection.add('s2')