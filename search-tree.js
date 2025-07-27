export default class Tree {
  constructor(inputArray) {
    this.root = this.buildTree(this.sortArray(inputArray));
  }

  sortArray(array) {
    function merge(left, right) {
      let sortedArr = [];

      while (left.length && right.length) {
        if (left[0] < right[0]) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
      return [...sortedArr, ...left, ...right];
    }

    function mergeSort(array) {
      const half = array.length / 2;

      if (array.length < 2) {
        return array;
      }
      const left = array.splice(0, half);

      return merge(mergeSort(left), mergeSort(array));
    }

    function removeDuplicates(array) {
      return Array.from(new Set(array));
    }

    let cleanedArray = removeDuplicates(array);
    return mergeSort(cleanedArray);
  }

  Node(data) {
    return {
      data,
      left: null,
      right: null,
    };
  }

  buildTree(array) {
    let node;
    if (array.length < 1) {
      return null;
    } else {
      let mid = Math.floor(array.length / 2);
      let left = array.splice(0, mid);
      node = this.Node(array.splice(0, 1)[0]);
      let right = array;

      node.left = this.buildTree(left);
      node.right = this.buildTree(right);

      return node;
    }
  }

  find(value) {
    let node = this.root;
    while (node) {
      if (value > node.data) {
        node = node.right;
      } else if (value < node.data) {
        node = node.left;
      } else {
        return node;
      }
    }
    return node;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value) {
    let node = this.root;

    while (node) {
      if (value < node.data) {
        if (!node.left) {
          node.left = this.Node(value);
          return;
        } else {
          node = node.left;
        }
      } else if (value > node.data) {
        if (!node.right) {
          node.right = this.Node(value);
          return;
        } else {
          node = node.right;
        }
      } else if (value == node.data) {
        return console.log(`Value ${value} already exists.`);
      }
    }
  }

  delete(value) {
    let node = this.root;
    let parentNode = node;
    let direction;

    while (node) {
      if (value < node.data) {
        direction = "left";
      } else if (value > node.data) {
        direction = "right";
      } else if (value == node.data) {
        if (!node.left && !node.right) {
          parentNode[direction] = null;
        } else if (node.left && !node.right) {
          parentNode[direction] = node.left;
        } else if (!node.left && node.right) {
          parentNode[direction] = node.right;
        } else if (node.left && node.right) {
          let replacementNode = node.right;
          let replacementParent = node.right;

          while (replacementNode.left) {
            replacementParent = replacementNode;
            replacementNode = replacementNode.left;
          }
          node.data = replacementNode.data;
          replacementParent.left = null;
          if (replacementNode.right) {
            replacementParent.left = replacementNode.right;
          }
          //bad solution, rewrite to an if case that properly 
          // removes childless right child of deleted node
          if (node.data == node.right.data) {
            node.right = null;
          }
        }
      }
      parentNode = node;
      node = node[direction];
    }
  }
}
