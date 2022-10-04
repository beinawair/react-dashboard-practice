import React from 'react'

const FormInput = (props) => {
  return (
    <div className="mb-4 relative">
        <label 
            className={"block text-gray-700 font-normal mb-1 " + props.extraClassLabel}
            htmlFor={props.name}
        >
            {props.label}
        </label>
        <input 
            className={"shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " + props.extraClass} 
            id={props.id || 'form-id' + props.name} 
            type={props.type || ''} 
            placeholder={props.placeholder || ''}
            value={props.value || ''}
            onChange={props.change || ''}
            name={props.name || ''}
            readOnly={props.readOnly || ''}
        />
        {props.icon ? (
            <span className={props.iconclass} onClick={props.show}>{props.icon}</span>
        ) : null}
    </div>
  )
}

export default FormInput