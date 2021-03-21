import React from 'react';

const appContext = React.createContext({
  findByBTree: true,
  currentBTreeNode: -1,
  currentArrayIndex: -1,
  matchingBTreeNode: -1,
  matchingArrayIndex: -1,
});

export default appContext;
