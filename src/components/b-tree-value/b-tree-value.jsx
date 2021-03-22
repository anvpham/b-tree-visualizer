import React, { useContext } from 'react';
import style from './style.module.css';
import { appContext } from '../../context';

const Value = (props) => {
   const context = useContext(appContext);
   return (
      <div className={`${style.value} ${context.currentBTreeNode == props.children ? style.highlighted : ''} ${context.matchingBTreeNode == props.children ?  style.match : ''}`}>
      {props.children}
   </div>
   )
}


export default Value;