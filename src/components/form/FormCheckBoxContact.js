import React from 'react'

const FormCheckBoxContact = (props) => {
  return (
    <div className='grid grid-cols-3 mb-4'>
        <div className="grid-1 flex items-center">
            <label htmlFor={props.name} className='text-base font-normal mr-4'>{props.label}</label>
            {props.required == 'true' ? (
              <span className='text-xs bg-gray-200 rounded-xl py-[1px] px-6 font-normal'>Required</span>
            ) : null}
        </div>
        <div className="flex col-span-2 gap-4">
            {props.valueLabel ? (
                props.valueLabel.map((value, i) => (
                    <div key={i} className='flex gap-3'>
                        <input className='outline-none border-gray-300 text-base font-normal' 
                        type={props.type || ''}
                        name={props.name || ''}
                        id={props.name || ''}
                        onClick={props.change}
                        placeholder={props.placeholder || ''} 
                        value={value}
                        {...props}/>
                        <label htmlFor={props.name} className='text-xs font-normal'>{value}</label>
                    </div>
                ))
            ) : null}
        </div>
    </div>
  )
}

export default FormCheckBoxContact