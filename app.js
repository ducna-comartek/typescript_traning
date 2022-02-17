var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getTuple(a, b) {
    return [a, b];
}
var stringArray = getTuple('hello', 'world');
var numberArray = getTuple(1.23, 2.56);
var mixedArray = getTuple(1.23, 'world');
//Tuple có thể chứa 2 hoặc nhiều giá trị có các kiểu dữ liệu khác nhau
var employees = [1, 'Nguyen Anh Duc'];
var employees1 = [1, 'CAD', true]; // phai dung kieu du lieu theo thu tu
var employeesArray = [[1, 'cad'], [2, 'cad1']]; //tuple array
employees.push(2, 'Nguyen Anh Duc'); //them phan tu vao tuple
console.log(employees);
employees[1] = employees[1].concat('cad');
console.log(employees);
//Union cho phép sử dụng nhiều kiểu dữ liệu cho 1 biến
// let code: number | string
function displayType(code1) {
    if (typeof (code1) === "number") {
        console.log("Code is number");
    }
    else if (typeof (code1) === "string") {
        console.log("Code is string");
    }
    else {
        console.log("Code is type diffirence");
    }
}
displayType(123);
displayType("sadjkm");
displayType(123);
//Any sử dụng khi ta không biết kiểu dữ liệu là gì. Thường được sử dụng khi chúng ta gọi 1 webservice bên ngoài hoặc dịch vụ của nhà phát triển thứ 3
var something = "hello world";
something = 23;
something = true;
something = 23.2;
//Void được sử dụng để thông báo function không trả về kiểu dữ liệu gì
function sayHI() {
    console.log("Void");
}
// sayHI()
var speech = sayHI();
console.log(speech); // undefined
//Never là kiểu giá trị đó sẽ không xảy ra. Được sử dụng khi chắc chắn 1 điều gì đó không thể xảy ra
//Optional and default parameter (?) tức là khai báo tham số có hoặc không
console.log("Generics");
//Generics là kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var l1 = last(['a', 'b', 'c']);
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var v = makeFullName({ firstName: 'Nguyen', lastName: 'Duc', age: 15 });
console.log(v);
var search;
search = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(search("Nguyen Anh Duc", "Nguyen")); //true
//Class
var Collection = /** @class */ (function () {
    function Collection() {
        this.items = [];
    }
    Collection.prototype.add = function (item) {
        this.items.push(item);
    };
    Collection.prototype.remove = function (item) {
        var index = this.items.findIndex(function (i) { return i === item; });
        this.items.splice(index, 1);
        return this.items;
    };
    return Collection;
}());
var myCollection = new Collection();
myCollection.add(1);
console.log(myCollection);
myCollection.add(5);
console.log(myCollection);
myCollection.remove(1);
console.log(myCollection);
myCollection.add('s2');
