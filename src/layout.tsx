import React from 'react';
import { Layout, AppBar, UserMenu, MenuItemLink } from 'react-admin';
import { MyMenu } from './layout/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const MyUserMenu = () => (
    <UserMenu>
        <MenuItemLink
            to="/settings"
            primaryText="Settings"
            leftIcon={<SettingsIcon />}
        />
        <MenuItemLink
            to="/logout"
            primaryText="Logout"
            leftIcon={<ExitToAppIcon />}
        />
    </UserMenu>
);

const MyAppBar = (props: any) => (
    <AppBar {...props} userMenu={<MyUserMenu />} />
);

export const MyLayout = (props: any) => (
    <Layout
        {...props}
        appBar={MyAppBar}
        menu={MyMenu}
    />
);