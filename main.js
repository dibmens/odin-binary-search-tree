import Tree from "./search-tree.js"

let sortedArr = [1, 2, 3, 4, 5, 6, 8,9];

let test = new Tree(sortedArr);
// console.log(test.root);
// console.log(test.find(3))
test.prettyPrint(test.root)