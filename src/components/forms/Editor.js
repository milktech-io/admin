import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function  Editor({name,value,onChange}) {

  const [state,setState] = useState(value);

  useEffect(()=>{
    setState(value);
  },[value]);

  const handleChange=(newValue)=>{
    let e={target:{}};
    e.target.name=name;
    e.target.value=newValue;
    onChange(e);
  }

  return <><ReactQuill theme="snow" value={value || state} onChange={handleChange} /></>;
}