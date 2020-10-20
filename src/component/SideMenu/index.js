import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import {Menu} from 'antd'

const SideMenu = props => {
    const { menuInfo, handleSiderClick, currentPath, subMenu } = props
    const { prePath} = menuInfo
    console.log(currentPath, '=======currenpath')
    return (<Menu theme='dark'
                  mode="inline"
                  onClick={handleSiderClick}
                  selectedKeys={[currentPath]}>
        {
            subMenu && subMenu.map(item =>
                <Menu.Item key={`${prePath}/${item.path}`}>
                    <Link to={item.path === '/' ? '/' : `${prePath}/${item.path}`}>
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            )
        }
    </Menu>)
}

SideMenu.propTypes = {
    currentPath: PropTypes.string,
    subMenu: PropTypes.array,
    prePath: PropTypes.string
}

export default SideMenu
