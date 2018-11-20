import React, { Component } from 'react';


function FormField(props) {
  return (
    <div className="FormField field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type={props.type} placeholder={props.placeholder}/>
      </div>
    </div>
  );
}

export default FormField;