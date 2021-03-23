import React from 'react';

const initialContext = {
  findByBTree: false,
  currentBTreeNode: -1,
  currentArrayIndex: -1,
  matchingBTreeNode: -1,
  matchingArrayIndex: -1,
  isFinding: false,
  steps: 0,
};

const appContext = React.createContext(initialContext);

export { appContext, initialContext };
