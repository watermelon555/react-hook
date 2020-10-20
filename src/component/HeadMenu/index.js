import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import {Menu} from 'antd'

const HeadMenu = (props) => {
    const {menuInfo, handleClick, selectPath} = props
    const {mainMenu} = menuInfo
    return (<Menu theme="dark"
                  onClick={handleClick}
          mode="horizontal"
          selectedKeys={[selectPath ? selectPath : mainMenu && mainMenu[0].path ]}>
        {
            mainMenu && mainMenu.map(item =>
                <Menu.Item key={item.path}>
                    <Link to={item.path === '/' ? '/' : `/${item.path}`}>{item.name}</Link>
                </Menu.Item>
            )
        }
    </Menu>)
}

HeadMenu.propTypes = {
    menuInfo: PropTypes.object,
    handleClick: PropTypes.func
}

export default HeadMenu
