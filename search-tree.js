export default class Tree {
  constructor(dataArray) {
    this.root = this.buildTree(dataArray)
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

  find(value){
    let node = this.root
    while(node){
      if(value > node.data){
        node = node.right
      } else if (value < node.data){
        node = node.left
      } else {
        return node
      }
    }
    return node
  }

  prettyPrint(node, prefix = '', isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    } 
  }

  insert(value){
    let node = this.root
    
    while(node){
      if(value < node.data){
        if(!node.left){
          node.left = this.Node(value)
          return
        } else {
          node = node.left
        }
      } else if (value > node.data){
        if(!node.right){
          node.right = this.Node(value)
          return
        } else {
          node = node.right
        }
      } else if (value == node.data){
        return console.log(`Value ${value} already exists.`)
      }
    }
    
  }




}
