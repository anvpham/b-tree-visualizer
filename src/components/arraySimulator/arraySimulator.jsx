import React from 'react';
import style from './style.module.css';
import { ArrayRow } from './arrayRow';

const ArraySimulator = (props) => (
   <div className={style.arraySimulator}>
      <div className={style.titles}>
         <div className={style.firstTitle}>Array Index</div>
         <div className={style.secondTitle}>Student Id</div>
         <div className={style.thirdTitle}>Student Name</div>
      </div>
      {props.students.map(student => (
         <ArrayRow key={student.index} index={student.index} studentId={student.id} studentName={student.name} />
      ))}
   </div>
)
export default ArraySimulator;