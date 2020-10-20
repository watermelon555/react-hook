export const menuConfig = {
    selectMainMenu: {
        path: 'demo1',
        name: '一级菜单A'
    },
    mainMenu: [
        {
            path: 'demo1',
            name: '一级菜单A',
            children: [
                {
                    name: 'demo1-subnav1',
                    path: 'page1'
                },
                {
                    name: 'demo1-subnav2',
                    path: 'page2'
                }
            ]
        },
        {
            path: 'demo2',
            name: '一级菜单B',
            children: [
                {
                    name: 'demo2-subnav1',
                    path: 'page1'
                },
                {
                    name: 'demo2-subnav2',
                    path: 'page2'
                }
            ]
        }

    ],
    subMenu: [
        {
            name: 'demo1-subnav1',
            path: 'page1'
        },
        {
            name: 'demo1-subnav2',
            path: 'page2'
        }
    ],
    paths: [
        {
            name: '一级菜单A',
            path: '/demo1'
        }
    ],
    selectSubMenu: {
        name: 'demo1-subnav1',
        path: 'page1'
    },
    prePath: '/demo1'
}

export default menuConfig;
