import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './Admin.css';
import { BsCart3, BsGrid1X2Fill, BsListCheck, BsLayoutSidebar } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <aside id="sidebar">
        <ul className='sidebar-list'>
          <li className='sidebar-list-item' onClick={() => navigate('/')}>
            <BsGrid1X2Fill className='icon'/> Dashboard
          </li>
          <li className='sidebar-list-item' onClick={() => navigate('/Product')}>
            <BsFillArchiveFill className='icon'/> Products
          </li>
          <li className='sidebar-list-item'onClick={() => navigate('/Cat')}>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </li>
          <li className='sidebar-list-item' onClick={() => navigate('/Customer')}>
            <BsPeopleFill className='icon' /> Customers
          </li>
          <li className='sidebar-list-item'>
            <BsListCheck className='icon' /> About
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
