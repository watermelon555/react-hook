// 设置state初始值
const initState = {
    loginStatus: false,
    userInfo: {
        username: '',
        role: -1  // 用户权限标识
    }
};

const SET_LOGIN = 'SET_LOGIN';

// action
export const setLoginInfo = (payload) => {
    return {
        payload,
        type: SET_LOGIN
    };
};

// reducer
export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                loginStatus: true,
                userInfo: action.payload
            };
        default:
            return state;
    }
};
