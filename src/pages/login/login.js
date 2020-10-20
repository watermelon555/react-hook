import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button} from 'antd'

const Login = ({
                   loginStatus,
                   location,
                   setLoginInfo,
                   history
               }) => {
    let { redirectUrl = '/' } = location.state || {};

    // 获取登录信息伪代码
    const onFinish = values => {
        /**** 此处去获取登录信息并存放在全局 Store ****/
        setLoginInfo({
            username: '小A',
            role: 1
        });
        history.push(redirectUrl);
    };

    return (
        <div className="login layer">
            <Form
                name="basic"
                onFinish={onFinish} >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '输入用户名' }]} >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '输入密码' }]} >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">登陆</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const mapStateToProps = state => ({
    loginStatus: state.login.loginStatus
});

const mapDispatchToProps = dispatch => ({
    setLoginInfo: (...args) => dispatch(setLoginInfo(...args))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
