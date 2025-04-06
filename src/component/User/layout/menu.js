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
        style={{width: 315,
            height: 953, 
            left: 10, 
            top: 40, 
            position: 'absolute', 
            background: '#D9D9D9', 
            boxShadow: '10px 0px 20.700000762939453px rgba(0; 0; 0; 0.57)', 
            borderRadius: 59
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
