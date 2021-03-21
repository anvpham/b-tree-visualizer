import { BTree } from './b-tree';
import { BTreeNode } from './b-tree-node';

const tree = new BTree(2);

const node20 = new BTreeNode(true, [70, 71], null, tree);
const node19 = new BTreeNode(true, [66, 68], null, tree);
const node18 = new BTreeNode(true, [64], null, tree);
const node17 = new BTreeNode(true, [62], null, tree);
const node16 = new BTreeNode(true, [60], null, tree);
const node15 = new BTreeNode(true, [54], null, tree);
const node14 = new BTreeNode(true, [52], null, tree);
const node13 = new BTreeNode(true, [49, 50], null, tree);
const node12 = new BTreeNode(true, [47], null, tree);
const node11 = new BTreeNode(true, [45], null, tree);
const node10 = new BTreeNode(true, [40], null, tree);
const node9 = new BTreeNode(false, [69], [node19, node20], tree);
const node8 = new BTreeNode(false, [65], [node18], tree);
const node7 = new BTreeNode(false, [61], [node16, node17], tree);
const node6 = new BTreeNode(false, [53], [node14, node15], tree);
const node5 = new BTreeNode(false, [48], [node12, node13], tree);
const node4 = new BTreeNode(false, [41], [node10, node11], tree);
const node3 = new BTreeNode(false, [63, 67], [node7, node8, node9], tree);
const node2 = new BTreeNode(false, [46, 51], [node4, node5, node6], tree);
const node1 = new BTreeNode(false, [55], [node2, node3], tree);

tree.root = node1;

export default tree;
