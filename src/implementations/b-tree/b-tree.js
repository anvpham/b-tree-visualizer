import { setAppStateGlobal } from '../../App';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default class BTree {
  constructor(order) {
    this.order = order;
    this.root = null;
  }

  async searchValue(node, value) {
    let child = 0;

    if (node.values[child] > value) {
      await sleep(800);

      setAppStateGlobal({
        findByBTree: true,
        currentBTreeNode: node.values[child],
        currentArrayIndex: -1,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
      });
    }

    while (child <= node.n && node.values[child] <= value) {
      await sleep(800);

      setAppStateGlobal({
        findByBTree: true,
        currentBTreeNode: node.values[child],
        currentArrayIndex: -1,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
      });

      if (node.values[child] == value) {
        setAppStateGlobal({
          findByBTree: true,
          currentBTreeNode: -1,
          currentArrayIndex: -1,
          matchingBTreeNode: node.values[child],
          matchingArrayIndex: -1,
        });
        return true;
      }

      child++;
    }

    if (node.leaf) return false;

    return this.searchValue(node.children[child], value);
  }
}
