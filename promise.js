
async function async1() {
  console.log('async1 start');
  await async2(); //会先执行async2函数，然后跳出async1，执行同步语句，然后将返回的promise放入微队列
  // 会立即放入微队列，相当于.then,所以会在promise2的前面
  console.log('async1 end');
}
async function async2() {
  console.log('async');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');

