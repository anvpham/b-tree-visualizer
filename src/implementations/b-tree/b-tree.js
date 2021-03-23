import { setAppStateGlobal } from '../../App';
import sleep from '../../utils/sleep';

export default class BTree {
  constructor(order) {
    this.order = order;
    this.root = null;
  }

  async searchValue(node, value) {
    let child = 0;

    if (node.values[child] > value) {
      await sleep(800);

      setAppStateGlobal((prevState) => ({
        ...prevState,
        currentBTreeNode: node.values[child],
        currentArrayIndex: -1,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
        isFinding: true,
        operations: prevState.operations + 1,
      }));
    }

    while (child <= node.n && node.values[child] <= value) {
      await sleep(800);

      setAppStateGlobal((prevState) => ({
        ...prevState,
        currentBTreeNode: node.values[child],
        currentArrayIndex: -1,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
        isFinding: true,
        operations: prevState.operations + 1,
      }));

      if (node.values[child] == value) {
        setAppStateGlobal((prevState) => ({
          ...prevState,
          currentBTreeNode: -1,
          currentArrayIndex: -1,
          matchingBTreeNode: node.values[child],
          matchingArrayIndex: -1,
          isFinding: false,
        }));
        return true;
      }

      child++;
    }

    if (node.leaf) {
      setAppStateGlobal((prevState) => ({
        ...prevState,
        currentBTreeNode: -1,
        currentArrayIndex: -1,
        matchingBTreeNode: -1,
        matchingArrayIndex: -1,
        isFinding: false,
      }));

      alert(`${value} not founded`);

      return false;
    }

    return this.searchValue(node.children[child], value);
  }
}
