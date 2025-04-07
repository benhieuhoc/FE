import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/authSlice';
import { useState } from 'react';
import {LogoutOutlined, HomeOutlined} from '@ant-design/icons';
import './css.scss';

const MenuLayout = () => {
  const [theme] = useState('light');
  const [current, setCurrent] = useState('/');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === 'logout') {
      dispatch(logout());
      navigate('/');
      return;
    }
    setCurrent(e.key);
  };

  const items = [
    {
      key: '/home',
      label: <Link className="menu-item" to="/home">Quản lý</Link>,
    },
    {
      key: '/notifica',
      label: <Link className="menu-item" to="/notifica">Thông báo</Link>,
    },
  ];

  return (
    <>
      <div className="custom-menu-wrapper">
        {/* Logo */}
        <div className="logo-section">
          <p className="menu-logo">Task Manager</p>
        </div>

        {/* Menu items */}
        <Menu
          theme={theme}
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
          className="custom-menu"
        />
        <div className="logout-section" onClick={() => {
          navigate('/');
        }}>
          <HomeOutlined style={{ marginRight: 8 }} />
          <span>Trang chủ</span>
        </div>
        {/* Logout */}
        <div className="logout-section" onClick={() => {
          dispatch(logout());
          navigate('/');
        }}>
          <LogoutOutlined style={{ marginRight: 8 }} />
          <span>Đăng xuất</span>
        </div>
      </div>
    </>
  );
};

export default MenuLayout;
