// 节点构造函数
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = function () {
    return this.data;
  }
}

// 二叉树构造函数
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

// 插入函数
function insert(data) {
  let inode = new Node(data, null, null);
  if (this.root === null)
    this.root = inode;
  else {
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = inode;
          break;
        }
        else
          current = current.left;
      }
      else {
        if (current.right === null) {
          current.right = inode;
          break;
        }
        else
          current = current.right;
      }
    }
  }
}

// 遍历函数（中序）
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    node.show();
    inOrder(node.right);
  }
}