import moment from 'moment'
import React from 'react'
import FormInput from '../../../../components/form/FormInput'
import ModalComponent from '../../../../components/ui/ModalComponent'
import { property } from '../../../../lib/propertyData'

const PropertyListTable = ({ isOpen, setIsOpen }) => {
    const textColor = (props) => {
        if(props === 'Approved') {
            return 'green'
        } else if(props === 'Pending') {
            return 'yellow'
        } else if(props === 'Rejected') {
            return 'red'
        }
    }

  return (
    <div>
        <div className="mt-8">
            <table className="table table-borderless table-lg">
                <thead style={{ borderBottom: '1px solid #E3E3E3' }}>
                    <tr className=''>
                        <th scope="col" className='text-xs start'>ID Property</th>
                        <th scope="col" className='text-xs start'>Property Image</th>
                        <th scope="col" className='text-xs start'>Property Name</th>
                        <th scope="col" className='text-xs start'>Owner Name</th>
                        <th scope="col" className='text-xs start'>Created On</th>
                        <th scope="col" className='text-xs start'>Entried By</th>
                        <th scope="col" className='text-xs start'>Status</th>
                    </tr>
                </thead>
                <div style={{ borderBottom: '1px solid #E3E3E3', width: '100%' }}></div>
                <tbody>
                { property ? (
                    property.map((list, i) => (
                        <tr key={i}>
                            <td className='text-xs font-normal align-top content-start'>{list.id_property}</td>
                            <td className='text-xs font-normal'>
                                <img src={list.img} alt={list.property_name} 
                                    className='w-44'
                                />
                            </td>
                            <td className='text-xs font-normal align-top content-start'>
                                {list.property_name}
                                <p className='text-xss gray-secondary'>{list.property_type}</p>
                            </td>
                            <td className='text-xs font-normal align-top text-blue-500'>{list.owner_name}</td>
                            <td className='text-xs font-normal align-top'>{moment(list.created_on).format('DD MMM YYY, HH:mm:ss ')}</td>
                            <td className='text-xs font-normal align-top'>
                                {list.entry_by}
                                <p className='text-xss gray-secondary'>{list.entry_role}</p>
                            </td>
                            <td className={`text-xs font-normal align-top`}>
                                <p className={`${textColor(list.status)} text-white text-center rounded-lg p-1`}>{list.status}</p>
                                <p className='text-xs gray-secondary mt-2'>progress</p>
                                <p>{list.progress}</p>
                            </td>
                        </tr>
                    ))
                ) : null }
                </tbody>
            </table>
            {isOpen ? (
                <ModalComponent 
                    isOpen={isOpen}
                    setIsOpen={() => setIsOpen(false)}
                    size='lg'
                >
                    <form>
                        <div className="flex gap-3">
                            <div className="row-span-1">
                                <FormInput 
                                    type='text'
                                    value='All Status'
                                    label='Status'
                                    extraClassLabel='text-xs'
                                />

                                <FormInput 
                                    placeholder='e.g VL0001'
                                    type='text'
                                    label='Property Reference'
                                    extraClassLabel='text-xs'
                                />
                            </div>
                            
                            <div className="row-span-1">
                                <FormInput 
                                    type='text'
                                    value='Select Option'
                                    label='Property Owner Type'
                                    extraClassLabel='text-xs'
                                />

                                <FormInput 
                                    placeholder='e.g John Doe'
                                    type='text'
                                    label='Contact'
                                    extraClassLabel='text-xs'
                                />
                            </div>
                            
                            <div className="row-span-1">
                                <FormInput 
                                    type='text'
                                    value='Select Option'
                                    label='Property Type'
                                    extraClassLabel='text-xs'
                                />

                                <FormInput 
                                    placeholder='e.g John Doe'
                                    type='text'
                                    value='Select Option'
                                    label='Contact Type'
                                    extraClassLabel='text-xs'
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <FormInput 
                                type='text'
                                placeholder='e.g Selena Doe'
                                label='Entries By'
                                extraClassLabel='text-xs'
                            />
                        </div>

                        <div className="flex gap-3 mt-2">
                            <button type='button' 
                                className='text-sm border py-3 px-4 rounded-lg border-gray-500' onClick={() => setIsOpen(false)}>
                                    Cancel
                            </button>
                            <button type='submit' 
                                className='text-sm border py-3 px-4 rounded-lg bg-orange-500 text-white'>
                                    Apply Search
                            </button>
                        </div>
                    </form>
                </ModalComponent>
            ) : null}
        </div>
    </div>
  )
}

export default PropertyListTable