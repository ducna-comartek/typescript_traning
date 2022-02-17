//lodash
//partition(collection,predicate) vach ngan chia ra 2 phan chia array ban dau thanh 2 array con 1 ben dung 1 ben ko dung
//zipObject(props,value) 
//matches(conditionObject) nhận vào 1 điều kiện muốn kiểm tra
//overEvery and overSome
//every trả về true khi tất cả đúng, some thì 1 cái đúng cx trả về true
//overEvery(predicateFunctionsArray)
//keyBy nhận vào array và điều kiện

const _ = require("lodash")

//partition
const integers = [-100, 21, 1, 1, 2, 3, 5, 8, 13]

const isOdd = number => number % 2 != 0

const oddNumber = _.filter(integers,isOdd)
const evenNumber = _.filter(integers, _.negate(isOdd))
console.log({ oddNumber, evenNumber })
//cach dung partition
const [odd, even] = _.partition(integers,isOdd)
console.log({ odd, even })

//zipObject
const headers = ['id', 'name', 'age']

const rows = [
    ['1','Duc', 23],
    ['2','Nam', 21],
    ['3','Tuan', 25]
]
const users = rows.map(row => _.zipObject(headers,row))
console.log({ users })

//matches
const todos = [
    { text :"lear javascript", check : false, urgen : true},
    { text :"lear php", check : true, urgen : true},
    { text :"lear java", check : false, urgen : true},
    { text :"lear nodejs", check : false, urgen : false}
]

// const urgenButNotDoneYet = todos.filter(todo => !todo.check && todo.urgen)
const urgenButNotDoneYet = todos.filter(
    _.matches({
        check : false,
        urgen : true
    })
)
console.log({ urgenButNotDoneYet })

//overSome / overEvery
const users1 = [
    { id: "1", name: "Tung", twitter: "tung__vu" },
    { id: "2", name: "Daniel", twitter: "dan_abramov" },
    { id: "3", name: "Andrew Clark", twitter: "acdlite" },
    { id: "4", name: "Elon", twitter: "elonmusk" },
]
  
const hasShortName = user => user.name.length <= 4
const hasLodashInHandle = user => /_/.test(user.twitter)
  
const AND = _.overEvery([hasShortName, hasLodashInHandle])
const OR = _.overSome([hasShortName, hasLodashInHandle])

console.log(users1.filter(OR))
console.log(users1.filter(AND))

// keyBy
const users2 = [
    { id: "1", name: "Tung", twitter: "tung__vu" },
    { id: "2", name: "Daniel", twitter: "dan_abramov" },
    { id: "3", name: "Andrew Clark", twitter: "acdlite" },
    { id: "4", name: "Elon", twitter: "elonmusk" },
]
  
const indexByTwitter = _.keyBy(users2, user => user.id)
  
console.log(indexByTwitter["4"])

//=====================================================
//Bignumber.js là thư viện hỗ trợ các phép tính toán số học với số nguyên lớn
const BigNumber = require('bignumber.js')
a = new BigNumber(1011, 2)          // "11"
b = new BigNumber('zz.9', 36)       // "1295.25" 
c = a.plus(b) 
console.log(c.toFixed()) //1306, 25

//====================================================
//memozie là func lưu lại kết quả của 1 quá trình và khi nào sử dụng lại thì nó chỉ cần lấy kq trong memorie đó không cần thực hiện lại 
//không đc truy cập thay đổi prototype ở ngoài phải truy cập cache.set() để thay đổi
//ngoài hàm set() để change t còn các hàm clear, delete, get, has.
console.log("Memoize")
var object = { 'a': 1, 'b': 2 }
var other = { 'c': 3, 'd': 4 }
 
var values = _.memoize(_.values)
values(object) // [1,2]
values(other) // [3,4]
console.log(object,other)
object.a = 2 //truy cập thay đổi
values(object)
console.log(object) // vẫn là [1,2]
// Modify the result cache.
values.cache.set(object, ['a', 'b'])
values(object)
console.log(object) // object đã thay đổi thành [2,2] khi sử dụng hàm cache.set()
// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap
// object.a = 5
// console.log(object)
const memoziee = require("memoizee")
const memProfile = require("memoizee/profile")
var fn = function (one, two) {
    console.log(one, two)
};
let memoized = memoziee(fn);
// memoized("foo", 3);
// memoized("foo", 3); // Cache hit
//số lượng đối số nhận vào nó đọc từ độ dài length nên ta có thể thêm {length:2} để có thể bù cho đủ số lượng nhận
memoized = memoziee(fn, { length: 3 })
memoized("foo", 3); // Assumed: 'foo', undefined
memoized("foo", 2);

console.log(memProfile.log())
//=================================================
//Moment và moment-tz
const moment = require('moment-timezone')
var testDateUtc = moment("2022-02-02T12:00:00Z")
testDateUtc.tz('Asia/Tokyo').format('ha z')
console.log(testDateUtc)
const jun = timeZone("2014-06-01T12:00:00Z");
const dec = timeZone("2014-12-01T12:00:00Z");

console.log(jun.tz('America/Los_Angeles').format('ha z'))
console.log(dec.tz('America/Los_Angeles').format('ha z'))  // 4am PST
console.log(jun.tz('America/New_York').format('ha z'))   // 8am EDT
console.log(dec.tz('America/New_York').format('ha z'))  // 7am EST
console.log(jun.tz('Asia/Tokyo').format('ha z')) // 9pm JST
console.log(dec.tz('Asia/Tokyo').format('ha z')) // 9pm JST
console.log(jun.tz('Australia/Sydney').format('ha z')) // 10pm EST
console.log(dec.tz('Australia/Sydney').format('ha z')) // 11pm EST

const newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
const losAngeles = newYork.clone().tz("America/Los_Angeles");
const london     = newYork.clone().tz("Europe/London");

console.log(newYork.format());    // 2014-06-01T12:00:00-04:00
console.log(losAngeles.format()); // 2014-06-01T09:00:00-07:00
console.log(london.format());     // 2014-06-01T17:00:00+01:00
const date = new Date()
console.log(date)

//Method to format Date:
//Có thể truyền tối đa 7 đối số vào hàm để tạo ra ngày/giờ :
// + Year: 4 ký tự năm
// + Month: (0-11). Month là zero-indexed
// + Day
// + Hour
// + Minutes
// + Seconds
// + Milliseconds

//toString :
//Example :
const date1 = new Date(2019, 0, 23, 17, 23, 42)// Khai bao ngày tháng sử dụng đối số
console.log("toString :",date1.toString())

//toDateString :
//Example :
console.log("toDateString :",date1.toDateString())

//toLocaleString :
//Example :
console.log("toLocaleString :",date1.toLocaleString())

//toLocaleDateString :
//Example :
console.log("toLocaleDateString :",date1.toLocaleDateString())

//toUTCString :
//Example :
console.log("toUTCString :",date1.toUTCString())

//toISOString :
//Example :
console.log("toISOString :",date1.toISOString())

//Comparing dates
//Example : 
const earlier = new Date(2019-3-26)// Khai báo ngày tháng sử dụng datestring
const later = new Date(2019-3-26)
console.log(earlier < later)//So sanh lon hon // true

// const isSameTime = (earlier:any, later:any) => earlier.getTime() === later.getTime()
console.log(isSameTime(earlier, later))//So sanh bang //false

const failDay = new Date(2021, 3, 33)
console.log(failDay.toLocaleDateString())

const dayStamp = new Date(1645000000000)// Sử dụng timestamp để khởi tạo ngày tháng.
console.log(dayStamp.toDateString())//16/02/2022

