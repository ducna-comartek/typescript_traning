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