const arr = new Set()
while(arr.size < 5){
  arr.add(Math.round(Math.random() * 30 + 2))
}
const arr2 = [...arr]
console.log(arr2)
