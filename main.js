import Tree from "./search-tree.js"

let sortedArr = [1, 2, 3, 4, 5, 6, 8];

let test = new Tree(sortedArr);
// console.log(test.root);
// console.log(test.find(3))

test.insert(14)
test.insert(11)
test.insert(9)
test.insert(10)
test.insert(6)
test.insert(7)
test.prettyPrint(test.root)