import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <div className="header">
        <div className="logo-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyu6tU2FZF9MWGXQ81IijsrG4ud5gOCuhuA&s" alt="Concept School" className="logo" />
          <span className="logo-text">CONCEPT<br/> SCHOOL</span>
        </div>
        <div className="profile">
          <img src="/abc.jpg" alt="Profile" className="profile-pic" />
        </div>
      </div>
      <div className="content-container">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;