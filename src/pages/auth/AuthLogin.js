import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import FormInput from '../../components/form/FormInput';
import { ButtonPrimary } from '../../components/ui/Button';
import { UserContext } from '../../helper/UserContext';

const eye = <FontAwesomeIcon icon={faEye} />

const token = process.env.REACT_APP_TOKEN

const AuthLogin = () => {
  const { user, setUser, password, setPassword } = useContext(UserContext);
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user === 'bayu@gmail.com' && password === '12345') {
      window.localStorage.setItem('token', token);
      window.location.href = '/dashboard';
    } else {
      alert('Please check you credentials!')
    }

  }

  useEffect(() => {
    const getToken = window.localStorage.getItem('token');
    if(getToken) {
      window.location.href = '/dashboard'
    }
  })

  return (
    <div className='flex h-screen'>
      <div className="hidden p-20 auth-image md:w-1/3 lg:w-1/2 md:flex md:flex-col md:justify-end md:items-start">
        <h1 className='text-white text-3xl font-normal mb-6'>"Without hard work, nothing grows but weeds."</h1>
        <p className='text-white'>&#8212; Gordon B. Hinckley</p>
      </div>
      <div className="p-6 md:p-20 md:w-2/3 lg:w-1/2 flex flex-col justify-between">
        <div>
          <img 
            src="/img/VBM-Logo.png" 
            alt="Logo"
            className='w-16 mb-8' />
          <h2 className='text-4xl leading-tight mb-2'>
            Welcome to
            <br/>
            <span className='text-orange-400'>PROPERTY</span> Admin Panel
          </h2>
          <p className='text-gray-700'>Sign in to your account below</p>

          <form className='mt-6' onSubmit={handleSubmit}>
            <FormInput 
              label='Email'
              name='email'
              id='email'
              type='email'
              placeholder='Type your email here'
              value={user}
              change={(e) => setUser(e.target.value)}
            />
            
            <FormInput 
              label='Password'
              name='password'
              id='password'
              type={!isShow ? 'password' : 'text'}
              placeholder='Type your password here'
              value={password}
              icon={eye}
              iconclass='absolute top-9 right-3 cursor-pointer'
              showPassword={isShow}
              change={(e) => setPassword(e.target.value)}
              show={() => setIsShow(!isShow)}
            />

            <ButtonPrimary
              name='Sign in'
              type='submit' 
            />
          </form>
        </div>

        <p className="text-center text-gray-400 bottom-0">Version 1.0.0</p>
        
      </div>
    </div>
  )
}

export default AuthLogin