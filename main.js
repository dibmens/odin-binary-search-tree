import Tree from "./search-tree.js"

function generateRandomNumArray(arraySize,maxNumValue){
    let arr = []
    for(let i = arraySize; i>0; i--){
        let num = Math.floor(Math.random()*maxNumValue+1)
        arr.push(num)
    }
    return arr
}

let dataArray = generateRandomNumArray(14,99)
let test = new Tree(dataArray);

test.prettyPrint(test.root)
console.log(`Current tree is balanced:`,test.isBalanced())

let testArray1 = new Array()
test.levelOrderForEach(x => testArray1.push(x.data))
console.log(`Level order method: `,testArray1)

let testArray2 = new Array()
test.preOrderForEach(x => testArray2.push(x.data))
console.log(`Pre-order method: `,testArray2)

let testArray3 = new Array()
test.postOrderForEach(x => testArray3.push(x.data))
console.log(`Post order method: `,testArray3)

let testArray4 = new Array()
test.inOrderForEach(x => testArray4.push(x.data))
console.log(`In order method: `,testArray4)

test.insert(200)
test.insert(300)
test.insert(400)

test.prettyPrint(test.root)
console.log(`Current tree is balanced:`,test.isBalanced())
test.rebalance()

test.prettyPrint(test.root)
console.log(`Current tree is balanced:`,test.isBalanced())

let testArray5 = new Array()
test.levelOrderForEach(x => testArray5.push(x.data))
console.log(`Level order method: `,testArray5)

let testArray6 = new Array()
test.preOrderForEach(x => testArray6.push(x.data))
console.log(`Pre-order method: `,testArray6)

let testArray7 = new Array()
test.postOrderForEach(x => testArray7.push(x.data))
console.log(`Post order method: `,testArray7)

let testArray8 = new Array()
test.inOrderForEach(x => testArray8.push(x.data))
console.log(`In order method: `,testArray8)

