import React from 'react'

const FormSelectContact = (props) => {
  return (
    <div className='grid grid-cols-3 mb-4'>
        <div className="grid-1 flex items-center">
            <label htmlFor={props.name} className='text-base font-normal mr-4'>{props.label}</label>
            {props.required == 'true' ? (
                <span className='text-xs bg-gray-200 rounded-xl py-[1px] px-6 font-normal'>Required</span>
            ) : null}
        </div>
        <select className='col-span-2 outline-none border-gray-300 text-base font-normal h-10 rounded-lg' >
            <option className='text-sm font-normal' selected>{props.selectOption}</option>
            {props.options}
        </select>

    </div>
  )
}

export default FormSelectContact