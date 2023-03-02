// import { useRecoilState, atom, useRecoilValue } from 'recoil';
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined style={{ fontSize: 30 }} />
    },
    {
        label: 'App Store',
        key: 'appStore',
        icon: <AppstoreOutlined style={{ fontSize: 30 }} />
    }
];


const AppHeader: FC = () => {
    const [current, setCurrent] = useState('home');
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ fontSize: "30px", marginTop: "20px" }} />
    );
};


export default AppHeader;
