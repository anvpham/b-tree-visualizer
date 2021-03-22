import React from 'react';

const initialContext = {
  findByBTree: true,
  currentBTreeNode: -1,
  currentArrayIndex: -1,
  matchingBTreeNode: -1,
  matchingArrayIndex: -1,
};

const appContext = React.createContext(initialContext);

export { appContext, initialContext };
