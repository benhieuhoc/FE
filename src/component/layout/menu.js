import { Menu } from 'antd';
import { Link } from 'react-router';
import { useState } from 'react';
import './css.scss'

const MenuLayout = () => {
    const [theme, setTheme] = useState('light');
    const [current, setCurrent] = useState('/');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            key: 'Logo',
            label: <p className='menu-item '>Task Manager</p>,
            style: { pointerEvents: "none", userSelect: "none" }
        },
        {
            key: '/',
            label: <Link className='menu-item ' to= "/" >Trang chủ</Link>,
        }
    ];

    return(
        <>
        <Menu
        theme={theme}
        onClick={onClick}
        style={{width: 250,
            height: '100vh',
            borderRadius: 0,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            position: "fixed"
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode='inline'
        items={items}
        />
        </>
    );
}

export default MenuLayout;
