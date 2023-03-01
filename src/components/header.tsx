import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { FC } from 'react';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />
    }
];

const AppHeader: FC = () => {
    const [current, setCurrent] = useState('home');
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
};


export default AppHeader;
