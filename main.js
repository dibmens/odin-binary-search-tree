import Tree from "./search-tree.js"

let sortedArr = [1, 2, 3, 4, 5, 6, 7];

let test = new Tree(sortedArr);
// console.log(test.root);
console.log(test.find(3))