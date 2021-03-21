import React from 'react';
import style from './style.module.css';

const ArrayRow = (props) => (
   <div className={style.arrayRow}>
      <div className={style.firstCell}>{props.index}</div>
      <div className={style.bar}></div>
      <div>{props.studentId}</div>
      <div className={style.bar}></div>
      <div className={style.studentName}>{props.studentName}</div>
   </div>
)

export default ArrayRow;