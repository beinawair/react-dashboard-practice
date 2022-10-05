import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { URLAddContact, URLContact, URLContactDetail, URLDashboard, URLEditContact, URLLogin, URLProperty } from './routes/pathURL';
import Dashboard from './pages/dashboard/dashboard/Dashboard';
import AuthLogin from './pages/auth/AuthLogin';
import Property from './pages/dashboard/property/Property';
import ContactMain from './pages/dashboard/contact/container/ContactMain';
import ContactAdd from './pages/dashboard/contact/container/ContactAdd';
import ContactEdit from './pages/dashboard/contact/container/ContactEdit';
import ContactDetail from './pages/dashboard/contact/container/ContactDetail';
import { UserContextProvider } from './helper/UserContext';

const token = window.localStorage.getItem('token');

const root = document.getElementById('root');
ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Navigate replace to={URLLogin} />} />
          
          <Route exact path={URLDashboard} element={<Dashboard/>} />

          <Route exact path={URLLogin} element={<AuthLogin/>} />

          <Route exact path={URLProperty} element={<Property/>} />

          <Route exact path={URLContact} element={<ContactMain/>} />
          <Route exact path={URLAddContact} element={<ContactAdd/>} />
          <Route exact path={URLEditContact()} element={<ContactEdit/>} />
          <Route exact path={URLContactDetail()} element={<ContactDetail/>} />
        </Routes>
    </BrowserRouter>
  </UserContextProvider>,
  root
);
