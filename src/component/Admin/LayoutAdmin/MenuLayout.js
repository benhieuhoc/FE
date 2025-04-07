import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/authSlice';
import { useState } from 'react';
import './LayoutAdmin.scss';

const MenuLayoutadmin = () => {
    const [theme, setTheme] = useState('light');
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
            key: 'Logo',
            label: <p className='menu-item'>Admin Panel</p>,
            style: { pointerEvents: "none", userSelect: "none" }
        },
        {
            key: '/admin/user',
            label: <Link className='menu-item' to="/admin/user">Quản lý người dùng</Link>,
        },
        {
            key: '/admin/project',
            label: <Link className='menu-item' to="/admin/project">Quản lý dự án</Link>,
        },
        {
            key: '/admin/task',
            label: <Link className='menu-item' to="/admin/task">Quản lý công việc</Link>,
        },
    ];

    return (
        <>
            <Menu
                theme={theme}
                onClick={onClick}
                style={{
                    width: 315,
                    height: '100vh',
                    position: 'absolute',
                    left: 10,
                    top: 40,
                    background: '#D9D9D9',
                    boxShadow: '10px 0px 20.7px rgba(0, 0, 0, 0.57)',
                    borderRadius: 59,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 24
                }}
                selectedKeys={[current]}
                mode='inline'
                items={items}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: 30,
                    left: 30,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: '#ff4d4f'
                }}
                onClick={() => {
                    dispatch(logout());
                    navigate('/');
                }}
            >
                Đăng xuất
            </div>
        </>
    );
};

export default MenuLayoutadmin;
