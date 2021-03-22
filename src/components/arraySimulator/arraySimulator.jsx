import React from 'react';
import style from './style.module.css';
import { ArrayRow } from './arrayRow';

const ArraySimulator = (props) => (
   <div className={style.arraySimulator}>
      <div className={style.titles}>
         Student Array [  ]
      </div>
      {props.students.map(student => (
         <ArrayRow key={student.index} index={student.index} studentId={student.id} studentName={student.name} />
      ))}
   </div>
)
export default ArraySimulator;