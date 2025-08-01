import Tree from "./search-tree.js"

let dataArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let test = new Tree(dataArray);
// console.log(test.root);
// console.log(test.find(3))

// test.insert(14)
// test.insert(11)
// test.insert(10)
// test.insert(6)
// test.delete(8)
// test.delete(1)
// test.delete(67)
// test.delete(4)
// test.insert(11)
// test.insert(15)
// test.insert(13)
test.insert(2)
// test.insert(14)
// test.insert(16)
// test.insert(12)


// test.delete(4)
// test.delete(5)
// test.delete(67)
// test.delete(324)
// test.delete(23)
// test.delete(9)
// test.delete(8)
// test.prettyPrint(test.root)
test.rebalance()
test.prettyPrint(test.root)
// console.log(`Tree height is ${test.height(8)}`)
// console.log(test.depth(8))

console.log(test.isBalanced())
