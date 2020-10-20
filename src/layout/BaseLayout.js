import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import {Layout} from 'antd'
import menuConfig from '../menuConfig'
import HeadMenu from '../component/HeadMenu';
import SideMenu from '../component/SideMenu';
const { Header, Content, Sider } = Layout;
export const BaseLayout = ({ location, children, loginStatus}) => {
    const {pathname } = location;

    const [menuInfo, setMenuInfo] = useState({});
    const [subMenu, setSubMenu] = useState([]);
    const [selectPath, setSelectPath] = useState('');
    const [currentPath, setCurrentPath] = useState('');

    const pathChange = (pathname, data, type) => {
        const dataMenu = data
        if(type === 'main' ) {
            dataMenu.mainMenu.forEach(item => {
                if(pathname.indexOf(item.path) > -1) {
                    setSubMenu(item.children)
                    dataMenu.selectMainMenu = item
                    dataMenu.paths = item
                    dataMenu.prePath = '/' + item.path
                    dataMenu.subMenu = item.children
                }
            })
        }
        if( type === 'sub') {
            dataMenu.subMenu.forEach(item => {
                if(pathname.indexOf(item.path) > -1) {
                    dataMenu.selectSubMenu = item
                }
            })
        }

        if( type === 'tab') {
            dataMenu.mainMenu.forEach(item => {
                if(pathname.indexOf(item.path) > -1) {
                    setSubMenu(item.children)
                    dataMenu.selectMainMenu = item
                    dataMenu.paths = item
                    dataMenu.prePath = '/' + item.path
                    dataMenu.subMenu = item.children
                    dataMenu.selectSubMenu = item.children[0]
                }
            })
        }

        return dataMenu
    }
    // 菜单信息随着路径变化
    useEffect(() => {
        pathChange(pathname, menuConfig, 'main');
        const newInfo = pathChange(pathname, menuConfig, 'sub');
        setMenuInfo(newInfo);
        setSelectPath(`${newInfo.selectMainMenu.path}`)
        setCurrentPath(`${newInfo.prePath}/${newInfo.selectSubMenu.path}`)
    }, [pathname]);

    const loginPath = '/login';
    const redirectUrl = pathname === loginPath ? '/' : pathname;

    useEffect(() => {
        // <!--校验是否登陆-->
        if (loginStatus) {
            Router.push(redirectUrl);
        } else {
            history.push('/login', {
                redirectUrl
            });
        }
    }, []);

    if (pathname === '/login') {
        return <div>{children}</div>;
    }

    const handleClick = (value) => {
        const { key } = value
        const newInfo = pathChange(pathname, menuConfig, 'tab');
        setMenuInfo(newInfo);
        setSelectPath(key)
    }

    const handleSiderClick = (value) => {
        const { key } = value
        const newInfo = pathChange(pathname, menuConfig, 'sub');
        setMenuInfo(newInfo);
        setCurrentPath(key)
    }



    return (
        <Layout>
            <Header className="header" >
                <div className="logo" />
                <HeadMenu menuInfo={menuInfo} handleClick={ handleClick } selectPath={selectPath}/>
            </Header>
            <Content>
                <Layout>
                    <Sider width={200}>
                        <SideMenu menuInfo={menuInfo}
                                  subMenu={subMenu}
                                  handleSiderClick={handleSiderClick}
                                  currentPath={currentPath}/>
                    </Sider>
                    <Content>{children}</Content>
                </Layout>
            </Content>
        </Layout>
    )
}
BaseLayout.propTypes={
    location: PropTypes.object
}
