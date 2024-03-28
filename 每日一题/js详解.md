## 1. [js] 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
```js
const arr = new Set()
while(arr.size < 5){
  arr.add(Math.round(Math.random() * 30 + 2))
}
const arr2 = [...arr]
console.log(arr2)
```