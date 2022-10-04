import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({children, title, subTitle, buttonLabel, link}) => {
  return (
    <div className='container'>
        <div className="bg-white rounded-xl p-5">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className='title-card text-lg font-medium'>{title}</h2>
              {subTitle ? (
                  <p className='text-sm gray-secondary'>{subTitle}</p>
              ) : null}
            </div>
            {buttonLabel != null ? (
              <Link to={link}>
                <button type='submit' className='text-sm border py-2 px-6 rounded-lg bg-orange-500 text-white'>{buttonLabel}</button>
              </Link>
            ) : null}
          </div>
          <div className="mt-4 container p-4">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Card