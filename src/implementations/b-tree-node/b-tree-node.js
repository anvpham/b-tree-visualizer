export class BTreeNode {
  constructor(isLeaf) {
    this.values = [];
    this.leaf = isLeaf;
    this.children = [];
    this.tree = null;
    this.parent = null;
  }

  get n() {
    return this.values.length;
  }

  addValue(value) {
    if (!value) {
      return;
    }
    let pos = 0;
    while (pos < this.n && this.values[pos] < value) {
      pos++;
    }
    this.values.splice(pos, 0, value);
  }

  removeValue(pos) {
    if (pos >= this.n) {
      return null;
    }
    return this.values.splice(pos, 1)[0];
  }

  addChild(node, pos) {
    this.children.splice(pos, 0, node);
    node.parent = this;
  }

  removeChild(pos) {
    return this.children.splice(pos, 1)[0];
  }
}
