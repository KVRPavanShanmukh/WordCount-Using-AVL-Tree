export class AVLNode {
  constructor(word) {
    this.word = word;
    this.count = 1;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

export class AVLTree {
  constructor() {
    this.lastRotation = null;
    this.rotatedNodes = [];
    this.insertPath = [];
  }

  height(n) {
    return n ? n.height : 0;
  }

  balance(n) {
    return n ? this.height(n.left) - this.height(n.right) : 0;
  }

  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    this.lastRotation = "LL";
    this.rotatedNodes = [y.word, x.word];

    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    this.lastRotation = "RR";
    this.rotatedNodes = [x.word, y.word];

    return y;
  }

  insert(node, word) {
    if (!node) {
      this.insertPath.push(word);
      return new AVLNode(word);
    }

    this.insertPath.push(node.word);

    if (word === node.word) {
      node.count++;
      return node;
    }

    if (word < node.word)
      node.left = this.insert(node.left, word);
    else
      node.right = this.insert(node.right, word);

    node.height =
      1 + Math.max(this.height(node.left), this.height(node.right));

    const bf = this.balance(node);

    if (bf > 1 && word < node.left.word)
      return this.rightRotate(node);

    if (bf < -1 && word > node.right.word)
      return this.leftRotate(node);

    if (bf > 1 && word > node.left.word) {
      node.left = this.leftRotate(node.left);
      this.lastRotation = "LR";
      return this.rightRotate(node);
    }

    if (bf < -1 && word < node.right.word) {
      node.right = this.rightRotate(node.right);
      this.lastRotation = "RL";
      return this.leftRotate(node);
    }

    return node;
  }
}
