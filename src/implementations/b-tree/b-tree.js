export default class BTree {
  constructor(order) {
    this.order = order;
    this.root = null;
  }

  searchValue(node, value) {
    if (node.values.includes(value)) {
      return node;
    }
    if (node.leaf) {
      // Value was not found
      return null;
    }
    let child = 0;
    while (child <= node.n && node.values[child] < parseInt(value, 10)) {
      child++;
    }
    return this.searchValue(node.children[child]);
  }
}
