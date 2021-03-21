import React from 'react';
import style from './style.module.css';

const Value = (props) => (
   <div className={style.value}>
      {props.children}
   </div>
)

export default Value;