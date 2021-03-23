import React, { useContext } from 'react';
import style from './style.module.css';
import { appContext } from '../../../context';

const ArrayRow = (props) => {
   const context = useContext(appContext);
   const isHighlighted = context.currentBTreeNode == props.studentId || context.currentArrayIndex == props.index ? style.highlighted : ''
   const isMatch = context.matchingBTreeNode == props.studentId || context.matchingArrayIndex == props.index ? style.match : '';

   return (
      <div className={`${style.arrayRow} ${isHighlighted || isMatch}`}>
         <div className={`${style.firstCell} ${isHighlighted || isMatch}`}>{props.index}</div>
         <div className={style.bar}></div>
         <div className={isHighlighted || isMatch}>{props.studentId}</div>
         <div className={style.bar}></div>
         <div className={`${style.studentName} ${isHighlighted || isMatch}`}>{props.studentName}</div>
      </div>
   )
} 

export default ArrayRow;