import React from 'react';
import style from './style.module.css';
import { ArrayRow } from './arrayRow';

const ArraySimulator = (props) => (
   <div className={style.arraySimulator}>
      <div className={style.titles}>
         <div className={style.firstCell}>Index</div>
         <div>ID</div>
         <div className={style.studentName}>Student Name</div>
      </div>
      {props.students.map(student => (
         <ArrayRow index={student.index} studentId={student.id} studentName={student.name} />
      ))}
   </div>
)
export default ArraySimulator;