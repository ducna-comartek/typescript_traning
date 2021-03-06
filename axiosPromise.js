"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// }
var User = /** @class */ (function () {
    function User(_name) {
        this.children = [];
        this.name = _name,
            this.greeting = new Promise(function (response) {
                setTimeout(function () {
                    response("My id is ".concat(_name));
                }, 1000);
            });
    }
    return User;
}());
var user1 = new User("u1");
var user1_1 = new User("u1_1");
var user1_2 = new User("u1_2");
var user1_2_1 = new User("u1_2_1");
var user1_2_1_1 = new User("u1_2_1_1");
user1.children.push(user1_1);
user1.children.push(user1_2);
user1_2.children.push(user1_2_1);
user1_2_1.children.push(user1_2_1_1);
var todoFunction = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var greet, listPromise, info, child, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user.greeting.then(function (data) { return data; })];
            case 1:
                greet = _a.sent();
                listPromise = user.children.map(function (e) {
                    return todoFunction(e);
                });
                return [4 /*yield*/, Promise.all(listPromise)];
            case 2:
                info = _a.sent();
                child = [];
                info.forEach(function (e) { return child.push(JSON.parse(e)); });
                result = {
                    name: user.name,
                    greet: greet,
                    children: child
                };
                return [2 /*return*/, JSON.stringify(result, null, 2)];
        }
    });
}); };
todoFunction(user1).then(function (result) {
    console.log(result);
});
