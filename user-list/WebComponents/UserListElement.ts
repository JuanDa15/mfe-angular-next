import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import { UserList } from '@/components/UserList';

const UserListElement = reactToWebComponent(UserList, React, ReactDOM);
customElements.define('user-list', UserListElement);

export default UserListElement;