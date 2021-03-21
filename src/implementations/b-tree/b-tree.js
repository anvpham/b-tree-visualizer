export default class BTree {
  constructor(order) {
    this.order = order;
    this.root = null;
  }

  searchValue(node, value) {
    node.values.forEach((value) => console.log(value));
    if (node.values.includes(value)) {
      return node;
    }
    if (node.leaf) {
      // Value was not found
      return null;
    }
    let child = 0;
    while (child <= node.n && node.values[child] < value) {
      child++;
    }
    return this.searchValue(node.children[child], value);
  }
}
