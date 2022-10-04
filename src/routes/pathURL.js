export const URLHTTP = process.env.REACT_APP_URL

export const URLDashboard ='/dashboard/';

export const URLLogin = '/login/';

export const URLProperty = '/property/';

export const URLContact = '/contact/';
export const URLAddContact = URLContact + 'add/';
export const URLEditContact = (id = ':id') => URLContact + 'edit/' + id;
export const URLContactDetail = (id = ':id') =>  URLContact + 'detail/' + id;
